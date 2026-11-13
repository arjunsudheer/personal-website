import { readFile } from "node:fs/promises";
import { defineConfig, type Plugin } from "vite";
import { blogPosts } from "./src/data/blog-post-metadata.ts";
import { renderStaticPages, type StaticPage } from "./src/site/render.ts";

const baseUrl = "/personal-website/";

function routeFromUrl(value: string, base: string): string {
    const pathname = new URL(value, "http://localhost").pathname;
    const baseWithoutTrailingSlash = base.endsWith("/") ? base.slice(0, -1) : base;

    if (
        pathname === base ||
        pathname === baseWithoutTrailingSlash ||
        pathname === "/" ||
        pathname === "/index.html"
    ) {
        return "/";
    }

    const relativePath = pathname.startsWith(base) ? `/${pathname.slice(base.length)}` : pathname;
    const trimmedPath = relativePath.replace(/^\/+|\/+$/g, "");
    return trimmedPath ? `/${trimmedPath}/` : "/";
}

function pageRoot(html: string): string {
    const match = html.match(/<site-page-root\b[\s\S]*?<\/site-page-root>/);
    if (!match) {
        throw new Error("A generated page is missing its site-page-root element.");
    }
    return match[0];
}

function replaceBuiltPage(template: string, page: StaticPage): string {
    const metadata = page.html.match(/<meta name="description" content="([^"]*)">/);
    const title = page.html.match(/<title>([\s\S]*?)<\/title>/);
    if (!metadata || !title) {
        throw new Error(`Generated page ${page.route} is missing document metadata.`);
    }

    const rootPattern = /<site-page-root\b[\s\S]*?<\/site-page-root>/;
    if (!rootPattern.test(template)) {
        throw new Error("The built HTML is missing its site-page-root element.");
    }

    return template
        .replace(rootPattern, () => pageRoot(page.html))
        .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${title[1]}</title>`)
        .replace(
            /<meta name="description" content="[^"]*">/,
            () => `<meta name="description" content="${metadata[1]}">`,
        );
}

function outputFileName(route: string): string {
    if (route === "/") {
        return "index.html";
    }
    return `${route.slice(1)}index.html`;
}

function stripBaseForViteDev(html: string, base: string): string {
    return html
        .replaceAll(`src="${base}`, 'src="/')
        .replace(/<link\b[^>]*>/g, (linkTag) => linkTag.replaceAll(`href="${base}`, 'href="/'));
}

function staticPagesPlugin(pages: readonly StaticPage[]): Plugin {
    const pagesByRoute = new Map(pages.map((page) => [page.route, page]));
    const homePage = pagesByRoute.get("/");
    if (!homePage) {
        throw new Error("Static page generation did not return a homepage.");
    }

    return {
        name: "static-pages",
        enforce: "post",
        transformIndexHtml: {
            order: "pre",
            handler(html, context) {
                const requestPath = context.originalUrl ?? context.path;
                const route = routeFromUrl(requestPath, baseUrl);
                const page = pagesByRoute.get(route) ?? homePage;
                return stripBaseForViteDev(page.html, baseUrl);
            },
        },
        generateBundle(_options, bundle) {
            const indexAsset = bundle["index.html"];
            if (!indexAsset || indexAsset.type !== "asset") {
                throw new Error("Vite did not emit the root index.html entry.");
            }

            const builtTemplate = String(indexAsset.source);
            for (const page of pages) {
                const html = replaceBuiltPage(builtTemplate, page);
                const fileName = outputFileName(page.route);

                if (fileName === "index.html") {
                    indexAsset.source = html;
                } else {
                    this.emitFile({
                        type: "asset",
                        fileName,
                        source: html,
                    });
                }
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
    const pages = await renderStaticPages(baseUrl, markdownBySlug);

    return {
        base: baseUrl,
        plugins: [staticPagesPlugin(pages)],
    };
});
