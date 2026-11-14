import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import { blogPosts } from "./src/data/blog-post-metadata.ts";
import { renderBlogPostPage, renderStaticPages, type StaticPage } from "./src/site/render.ts";

const baseUrl = "/personal-website/";
const rootDirectory = fileURLToPath(new URL(".", import.meta.url));
const sourceRoutes = {
    "/": "index.html",
    "/projects/": "projects/index.html",
    "/publications/": "publications/index.html",
    "/blog/": "blog/index.html",
} as const;

function routeFromUrl(value: string): string {
    const pathname = new URL(value, "http://localhost").pathname;
    const pathWithoutBase = pathname.startsWith(baseUrl)
        ? pathname.slice(baseUrl.length)
        : pathname.replace(/^\/+/, "");
    const trimmedPath = pathWithoutBase.replace(/^\/+|\/+$/g, "");
    return trimmedPath ? `/${trimmedPath}/` : "/";
}

function blogPostPagesPlugin(pages: readonly StaticPage[]): Plugin {
    const blogPages = pages.filter((page) => page.content !== undefined);
    const blogPagesByRoute = new Map(blogPages.map((page) => [page.route, page]));

    return {
        name: "blog-post-pages",
        enforce: "post",
        configureServer(server) {
            server.middlewares.use(async (request, response, next) => {
                if (request.method !== "GET" || !request.url) {
                    next();
                    return;
                }

                const page = blogPagesByRoute.get(routeFromUrl(request.url));
                if (!page) {
                    next();
                    return;
                }

                try {
                    const html = await server.transformIndexHtml(request.url, page.html);
                    response.statusCode = 200;
                    response.setHeader("Content-Type", "text/html");
                    response.end(html);
                } catch (error) {
                    next(error);
                }
            });
        },
        generateBundle(_options, bundle) {
            const blogListing = bundle["blog/index.html"];
            if (!blogListing || blogListing.type !== "asset") {
                throw new Error("Vite did not emit the blog listing HTML entry.");
            }

            const template = String(blogListing.source);
            for (const page of blogPages) {
                const slug = page.route.slice("/blog/".length).replace(/\/$/, "");
                this.emitFile({
                    type: "asset",
                    fileName: `blog/${slug}/index.html`,
                    source: renderBlogPostPage(template, baseUrl, page),
                });
            }
        },
    };
}

export default defineConfig(async () => {
    const markdownBySlug = Object.fromEntries(
        await Promise.all(
            blogPosts.map(async ({ slug }) => {
                const content = await readFile(
                    new URL(`./public/blog/${slug}.md`, import.meta.url),
                    "utf8",
                );
                return [slug, content] as const;
            }),
        ),
    );
    const htmlByRoute = Object.fromEntries(
        await Promise.all(
            Object.entries(sourceRoutes).map(async ([route, path]) => [
                route,
                await readFile(resolve(rootDirectory, path), "utf8"),
            ]),
        ),
    );
    const pages = await renderStaticPages(baseUrl, markdownBySlug, htmlByRoute);

    return {
        base: baseUrl,
        plugins: [blogPostPagesPlugin(pages)],
        build: {
            rolldownOptions: {
                input: {
                    index: resolve(rootDirectory, "index.html"),
                    "projects/index": resolve(rootDirectory, "projects/index.html"),
                    "publications/index": resolve(rootDirectory, "publications/index.html"),
                    "blog/index": resolve(rootDirectory, "blog/index.html"),
                },
            },
        },
    };
});
