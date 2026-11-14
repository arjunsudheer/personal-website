import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { blogPosts } from "../data/blog-post-metadata.ts";

export interface StaticPage {
    readonly route: string;
    readonly title: string;
    readonly description: string;
    readonly html: string;
    readonly content?: string;
}

const sourcePageRoutes = ["/", "/projects/", "/publications/", "/blog/"] as const;

function normalizeBaseUrl(baseUrl: string): string {
    const leadingSlash = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
    return leadingSlash.endsWith("/") ? leadingSlash : `${leadingSlash}/`;
}

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Readonly<Record<string, string>> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return entities[character] ?? character;
    });
}

function pageMetadata(route: string, html: string): Pick<StaticPage, "title" | "description"> {
    const title = html.match(/<title>([\s\S]*?)<\/title>/i);
    const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
    if (!title || !description) {
        throw new Error(`The HTML source for ${route} is missing its title or description.`);
    }
    return { title: title[1] ?? "", description: description[1] ?? "" };
}

export function renderBlogPostPage(templateHtml: string, baseUrl: string, page: StaticPage): string {
    if (page.content === undefined) {
        throw new Error(`The page ${page.route} is missing its rendered Markdown content.`);
    }

    pageMetadata(page.route, templateHtml);
    const main = `<main class="site-main"><section class="page-section"><a class="back-link" href="${escapeHtml(`${normalizeBaseUrl(baseUrl)}blog/`)}">← All posts</a><article class="markdown-content">${page.content}</article></section></main>`;
    const mainPattern = /<main\b[^>]*>[\s\S]*?<\/main>/i;
    if (!mainPattern.test(templateHtml)) {
        throw new Error(`The blog HTML template has no main element for ${page.route}.`);
    }

    return templateHtml
        .replace(mainPattern, main)
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`)
        .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="description" content="${escapeHtml(page.description)}">`,
        );
}

export async function renderStaticPages(
    baseUrlInput: string,
    markdownBySlug: Readonly<Record<string, string>>,
    htmlByRoute: Readonly<Record<string, string>>,
): Promise<StaticPage[]> {
    const baseUrl = normalizeBaseUrl(baseUrlInput);
    const knownSlugs = new Set(blogPosts.map(({ slug }) => slug));
    const missingSlugs = blogPosts
        .filter(({ slug }) => !Object.prototype.hasOwnProperty.call(markdownBySlug, slug))
        .map(({ slug }) => slug);
    const unknownSlugs = Object.keys(markdownBySlug).filter((slug) => !knownSlugs.has(slug));

    if (missingSlugs.length > 0) {
        throw new Error(`Missing Markdown for blog post(s): ${missingSlugs.join(", ")}`);
    }
    if (unknownSlugs.length > 0) {
        throw new Error(`Blog Markdown has no metadata for: ${unknownSlugs.join(", ")}`);
    }

    const pages = sourcePageRoutes.map((route): StaticPage => {
        const html = htmlByRoute[route];
        if (html === undefined) {
            throw new Error(`Missing HTML source for route ${route}`);
        }
        return { route, ...pageMetadata(route, html), html };
    });
    const blogTemplate = htmlByRoute["/blog/"];
    if (blogTemplate === undefined) {
        throw new Error("Missing HTML source for the blog listing page.");
    }

    const markdownProcessor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify);

    for (const post of blogPosts) {
        const markdown = markdownBySlug[post.slug];
        if (markdown === undefined) {
            throw new Error(`Missing Markdown for blog post: ${post.slug}`);
        }
        const renderedMarkdown = await markdownProcessor.process(markdown);
        const page: StaticPage = {
            route: `/blog/${post.slug}/`,
            title: `${post.title} | Arjun Sudheer`,
            description: post.description,
            html: "",
            content: String(renderedMarkdown),
        };
        pages.push({
            ...page,
            html: renderBlogPostPage(blogTemplate, baseUrl, page),
        });
    }

    return pages;
}
