/// <reference types="node" />

import { readFileSync } from "node:fs";
import { beforeAll, describe, expect, it } from "vitest";
import { blogPosts } from "./data/blog-post-metadata";
import { renderBlogPostPage, renderStaticPages } from "./site/render";

const baseUrl = "/personal-website/";
const sourceRoutes = {
    "/": "index.html",
    "/projects/": "projects/index.html",
    "/publications/": "publications/index.html",
    "/blog/": "blog/index.html",
} as const;
const htmlByRoute = Object.fromEntries(
    Object.entries(sourceRoutes).map(([route, path]) => [route, readFileSync(path, "utf8")]),
);
const markdownBySlug = Object.fromEntries(
    blogPosts.map(({ slug }) => [
        slug,
        [
            "# Blog post heading",
            "",
            "A paragraph with **strong text**, ~~deleted text~~, and [a link](https://example.com).",
            "",
            "| Tool | Status |",
            "| --- | --- |",
            "| Vitest | ready |",
            "",
            "- [x] Finished",
            "- [ ] Pending",
            "",
            "<script>window.compromised = true</script>",
        ].join("\n"),
    ]),
);

let pages: Awaited<ReturnType<typeof renderStaticPages>>;

beforeAll(async () => {
    pages = await renderStaticPages(baseUrl, markdownBySlug, htmlByRoute);
});

function pageFor(route: string) {
    const page = pages.find((candidate) => candidate.route === route);
    if (!page) {
        throw new Error(`Missing rendered page at ${route}.`);
    }
    return page;
}

describe("renderStaticPages", () => {
    it("preserves route HTML sources and adds a page for every registered Markdown post", () => {
        for (const [route, source] of Object.entries(htmlByRoute)) {
            expect(pageFor(route).html).toBe(source);
        }

        expect(pages.map(({ route }) => route)).toEqual([
            "/",
            "/projects/",
            "/publications/",
            "/blog/",
            ...blogPosts.map(({ slug }) => `/blog/${slug}/`),
        ]);
    });

    it("renders registered Markdown with GFM and a base-aware return link", () => {
        const page = pageFor(`/blog/${blogPosts[0]?.slug}/`);
        const document = new DOMParser().parseFromString(page.html, "text/html");

        expect(page.content).toContain("<table>");
        expect(page.content).toContain("<input");
        expect(page.content).toContain("<del>deleted text</del>");
        expect(page.html).toContain('href="/personal-website/blog/"');
        expect(document.querySelector("main .markdown-content h1")?.textContent).toBe(
            "Blog post heading",
        );
        expect(document.querySelector("main script")).toBeNull();
        expect(document.title).toBe(`${blogPosts[0]?.title} | Arjun Sudheer`);
    });

    it("rejects missing and unregistered Markdown entries", async () => {
        await expect(renderStaticPages(baseUrl, {}, htmlByRoute)).rejects.toThrow(
            `Missing Markdown for blog post(s): ${blogPosts.map(({ slug }) => slug).join(", ")}`,
        );
        await expect(
            renderStaticPages(
                baseUrl,
                {
                    ...markdownBySlug,
                    "unknown-post": "# Unknown",
                },
                htmlByRoute,
            ),
        ).rejects.toThrow("Blog Markdown has no metadata for: unknown-post");
    });

    it("requires complete source pages and document metadata", async () => {
        await expect(renderStaticPages(baseUrl, markdownBySlug, {})).rejects.toThrow(
            "Missing HTML source for route /",
        );
        await expect(
            renderStaticPages(baseUrl, markdownBySlug, {
                ...htmlByRoute,
                "/": "<!doctype html><title>Home</title>",
            }),
        ).rejects.toThrow("The HTML source for / is missing its title or description.");
    });

    it("uses safe title, description, and base URL substitutions for generated blog pages", () => {
        const template = htmlByRoute["/blog/"] ?? "";
        const page = {
            route: "/blog/example/",
            title: "Test <post>",
            description: '"quoted" & <tag>',
            html: "",
            content: "<p>Body</p>",
        };
        const html = renderBlogPostPage(template, baseUrl, page);
        const document = new DOMParser().parseFromString(html, "text/html");

        expect(document.title).toBe(page.title);
        expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(
            page.description,
        );
        expect(document.querySelector("main .markdown-content")?.innerHTML).toBe("<p>Body</p>");
        expect(document.querySelector(".back-link")?.getAttribute("href")).toBe(
            "/personal-website/blog/",
        );
    });
});

describe("content card styles", () => {
    it("sizes the card including its padding and border", () => {
        const source = readFileSync("src/components/content-card.ts", "utf8");

        expect(source).toMatch(
            /:host,\s*\*,\s*\*::before,\s*\*::after\s*\{\s*box-sizing:\s*border-box;/,
        );
    });
});
