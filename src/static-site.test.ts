import { beforeAll, describe, expect, it } from "vitest";
import { blogPosts } from "./data/blog-post-metadata";
import { hydrateDeclarativeShadowRoot, registerCustomElements } from "./components/elements";
import { renderStaticPages } from "./site/render";

const baseUrl = "/personal-website/";
const gfmMarkdown = [
    "# How I Use AI to Code",
    "",
    "I use AI to spend less time on mechanical work and more time on judgment.",
    "",
    "## The Harness and the Model",
    "",
    "My configuration lives in the [ai-config repository](https://github.com/arjunsudheer/ai-config).",
    "",
    "I use `TODO` comments and _focused_ edits.",
    "",
    "| Tool | Status |",
    "| --- | --- |",
    "| Vitest | ready |",
    "",
    "- [x] Review the output",
    "- [ ] Keep the human in the loop",
    "",
    "~~obsolete wording~~",
    "",
    "https://example.com/gfm-autolink",
].join("\n");

const markdownBySlug = Object.fromEntries(blogPosts.map(({ slug }) => [slug, gfmMarkdown]));
const expectedRoutes = [
    "/",
    "/projects/",
    "/publications/",
    "/blog/",
    ...blogPosts.map(({ slug }) => `/blog/${slug}/`),
];

let pages: Awaited<ReturnType<typeof renderStaticPages>>;

beforeAll(async () => {
    pages = await renderStaticPages(baseUrl, markdownBySlug);
    registerCustomElements();
});

function findDeep(root: ParentNode, selector: string): Element[] {
    const matches = Array.from(root.querySelectorAll(selector));
    for (const element of root.querySelectorAll("*")) {
        if (element instanceof HTMLElement && element.shadowRoot) {
            matches.push(...findDeep(element.shadowRoot, selector));
        }
        if (element instanceof HTMLTemplateElement) {
            matches.push(...findDeep(element.content, selector));
        }
    }
    return matches;
}

function pageDocument(html: string): Document {
    return new DOMParser().parseFromString(html, "text/html");
}

describe("renderStaticPages", () => {
    it("returns standalone pages for the home, listing, and every metadata blog route", () => {
        expect(pages.map(({ route }) => route)).toEqual(expect.arrayContaining(expectedRoutes));
        expect(pages).toHaveLength(expectedRoutes.length);
        for (const page of pages) {
            expect(page.title).toBeTruthy();
            expect(page.html.toLowerCase()).toContain("<!doctype html");
        }
    });

    it("applies the saved theme before loading the page stylesheet", () => {
        const document = pageDocument(pages.find((page) => page.route === "/")?.html ?? "");
        const themeScript = document.head.querySelector("script");
        const stylesheet = document.head.querySelector('link[rel="stylesheet"]');

        expect(themeScript?.textContent).toContain(
            'localStorage.getItem("personal-website-theme")',
        );
        expect(themeScript?.textContent).toContain('document.documentElement.dataset.theme="dark"');
        if (!themeScript || !stylesheet) {
            throw new Error("The generated page is missing its theme bootstrap or stylesheet.");
        }
        expect(
            themeScript.compareDocumentPosition(stylesheet) & Node.DOCUMENT_POSITION_FOLLOWING,
        ).toBeTruthy();
    });

    it("retains the current homepage, project, publication, and blog content", () => {
        const pageFor = (route: string) => pages.find((page) => page.route === route)?.html ?? "";
        const about = pageFor("/");
        const projects = pageFor("/projects/");
        const publications = pageFor("/publications/");
        const blogs = pageFor("/blog/");
        const post = pageFor(`/blog/${blogPosts[0].slug}/`);
        const aboutDocument = pageDocument(about);
        const projectDocument = pageDocument(projects);
        const publicationDocument = pageDocument(publications);
        const blogDocument = pageDocument(blogs);
        const postDocument = pageDocument(post);

        expect(about).toContain("Arjun Sudheer");
        expect(
            findDeep(aboutDocument, "p").some((paragraph) =>
                paragraph.textContent?.includes("Hi, I'm Arjun"),
            ),
        ).toBe(true);
        expect(about).toContain("Experience");
        expect(findDeep(aboutDocument, 'img[alt="Arjun Sudheer"]')).toHaveLength(1);
        for (const [label, href] of [
            ["LinkedIn", "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/"],
            ["GitHub", "https://github.com/arjunsudheer"],
            ["Google Scholar", "https://scholar.google.com/citations?hl=en&user=3aoNkawAAAAJ"],
            ["Instagram", "https://www.instagram.com/arjun.sudheer.75/"],
        ]) {
            expect(
                findDeep(aboutDocument, `a[href="${href}"]`).some(
                    (link) =>
                        link.getAttribute("aria-label") === label ||
                        link.textContent?.includes(label),
                ),
            ).toBe(true);
        }
        expect(findDeep(aboutDocument, "h3").map((heading) => heading.textContent?.trim())).toEqual(
            [
                "Oracle Cloud Infrastructure",
                "Cisco",
                "San Jose State University",
                "San Jose State University",
                "Code Ninjas",
            ],
        );
        expect(
            findDeep(aboutDocument, 'img[alt$="logo"]').map((image) => image.getAttribute("src")),
        ).toEqual([
            `${baseUrl}assets/experience/oracle_logo.jpg`,
            `${baseUrl}assets/experience/cisco_logo.jpg`,
            `${baseUrl}assets/experience/san_jose_state_university_logo.jpg`,
            `${baseUrl}assets/experience/charles_w_davidson_college_of_engineering_at_sjsu_logo.jpg`,
            `${baseUrl}assets/experience/codeninjas_logo.jpg`,
        ]);
        expect(
            findDeep(aboutDocument, ".start").map((start) => [
                start.textContent,
                start.parentElement?.querySelector(".end")?.textContent,
            ]),
        ).toEqual([
            ["May 2026 –", "Aug 2026"],
            ["Jul 2025 –", "Dec 2025"],
            ["Jun 2024 –", "Jul 2025"],
            ["Jun 2024 –", "Aug 2024"],
            ["Jul 2021 –", "Aug 2023"],
        ]);
        const ciscoArticle = findDeep(aboutDocument, "article").find(
            (article) => article.querySelector("h3")?.textContent === "Cisco",
        );
        expect(ciscoArticle?.textContent).toMatch(/98%/);
        expect(ciscoArticle?.textContent).toMatch(/downtime/i);

        expect(projects).toContain("Cornhole Referee");
        expect(projects).toContain("GymBuddy");
        const cornholeLink = findDeep(
            projectDocument,
            'a[href="https://github.com/arjunsudheer/cornhole-referee"]',
        )[0];
        expect(cornholeLink).toBeDefined();
        expect(cornholeLink?.getAttribute("target")).toBe("_blank");
        expect(cornholeLink?.getAttribute("rel")).toBe("noreferrer");
        expect(cornholeLink?.textContent).toMatch(/98% precision/);
        expect(cornholeLink?.textContent).toMatch(/Python, OpenCV, Yolov8, Roboflow, Sphinx/);
        expect(
            findDeep(projectDocument, 'a[href="https://github.com/arjunsudheer/cornhole-referee"]'),
        ).toHaveLength(1);
        expect(projects).not.toContain("Daily Compass");

        expect(publications).toContain("Least Significant Bit Steganography Detection");
        const publicationLinks = findDeep(publicationDocument, 'a[href^="https://"]');
        expect(publicationLinks).toHaveLength(4);
        expect(new Set(publicationLinks.map((link) => link.getAttribute("href"))).size).toBe(4);
        expect(publicationLinks.map((link) => link.getAttribute("href")).sort()).toEqual(
            [
                "https://ieeexplore.ieee.org/document/11642309",
                "https://www.mdpi.com/2224-2708/15/2/32",
                "https://ieeexplore.ieee.org/abstract/document/11133641",
                "https://ieeexplore.ieee.org/abstract/document/11133622",
            ].sort(),
        );
        for (const link of publicationLinks) {
            expect(link.getAttribute("target")).toBe("_blank");
            expect(link.getAttribute("rel")).toBe("noreferrer");
        }

        expect(blogs).toContain(blogPosts[0].title);
        expect(blogs).toContain(blogPosts[0].description);
        expect(blogs).toContain(`${blogPosts[0].readTime} min. read`);
        expect(
            findDeep(blogDocument, `a[href="${baseUrl}blog/${blogPosts[0].slug}/"]`),
        ).toHaveLength(1);
        expect(post).toContain("The Harness and the Model");
        expect(findDeep(postDocument, `a.back-link[href="${baseUrl}blog/"]`)).toHaveLength(1);
    });

    it("renders GFM Markdown in the generated blog page", () => {
        const post = pages.find((page) => page.route === `/blog/${blogPosts[0].slug}/`);
        expect(post).toBeDefined();
        const document = pageDocument(post?.html ?? "");

        expect(findDeep(document, "table")).toHaveLength(1);
        expect(findDeep(document, 'input[type="checkbox"]:checked')).toHaveLength(1);
        expect(findDeep(document, "del")).toHaveLength(1);
        expect(findDeep(document, 'a[href="https://example.com/gfm-autolink"]')).toHaveLength(1);
        expect(
            findDeep(document, 'a[href="https://github.com/arjunsudheer/ai-config"]'),
        ).toHaveLength(1);
    });

    it("does not turn raw Markdown HTML into executable page markup", async () => {
        const pagesWithRawHtml = await renderStaticPages(baseUrl, {
            [blogPosts[0].slug]: "# Test post\n\n<script>window.compromised = true</script>",
        });
        const post = pagesWithRawHtml.find((page) => page.route === `/blog/${blogPosts[0].slug}/`);
        expect(post).toBeDefined();

        const document = pageDocument(post?.html ?? "");
        expect(findDeep(document, "blog-post-content script")).toHaveLength(0);
        expect(
            findDeep(document, "script").some((script) =>
                script.textContent?.includes("window.compromised"),
            ),
        ).toBe(false);
    });

    it("reports missing and unregistered Markdown entries instead of emitting incomplete pages", async () => {
        await expect(renderStaticPages(baseUrl, {})).rejects.toThrow(
            `Missing Markdown for blog post(s): ${blogPosts.map(({ slug }) => slug).join(", ")}`,
        );

        await expect(
            renderStaticPages(baseUrl, {
                ...markdownBySlug,
                "unknown-post": "# Unknown",
            }),
        ).rejects.toThrow("Blog Markdown has no metadata for: unknown-post");
    });

    it.each(expectedRoutes)("prefixes same-origin links and assets on %s", (route) => {
        const page = pages.find((candidate) => candidate.route === route);
        expect(page).toBeDefined();
        const document = pageDocument(page?.html ?? "");
        const references = findDeep(
            document,
            "a[href], img[src], script[src], link[href], source[src]",
        );

        expect(references.length).toBeGreaterThan(0);
        for (const element of references) {
            const value = element.getAttribute(element.hasAttribute("href") ? "href" : "src");
            if (!value) continue;

            const url = new URL(value, `https://example.test${baseUrl}`);
            if (url.origin === "https://example.test") {
                expect(url.pathname).toMatch(/^\/personal-website\//);
            }
            if (element.localName === "a") {
                expect(value).not.toContain("#/");
            }
        }
    });

    it.each(expectedRoutes)("uses real paths and marks the active navbar item on %s", (route) => {
        const page = pages.find((candidate) => candidate.route === route);
        expect(page).toBeDefined();
        const document = pageDocument(page?.html ?? "");
        const links = findDeep(document, "nav a");
        const activeLinks = links.filter((link) => link.getAttribute("aria-current") === "page");
        const section = route === "/" ? "about" : route.split("/")[1];
        const expectedLabel =
            section === "blog" ? "Blogs" : section[0].toUpperCase() + section.slice(1);
        const target = section === "about" ? baseUrl : `${baseUrl}${section}/`;

        expect(
            links.some(
                (link) =>
                    link.textContent?.trim() === expectedLabel &&
                    link.getAttribute("href") === target,
            ),
        ).toBe(true);
        expect(activeLinks.some((link) => link.textContent?.trim() === expectedLabel)).toBe(true);
    });

    it.each(expectedRoutes)("serializes open Declarative Shadow DOM on %s", (route) => {
        const page = pages.find((candidate) => candidate.route === route);
        expect(page).toBeDefined();
        const document = pageDocument(page?.html ?? "");
        const templates = findDeep(document, 'template[shadowrootmode="open"]');

        expect(templates.length).toBeGreaterThan(0);
        expect(templates.some((template) => template.parentElement?.localName.includes("-"))).toBe(
            true,
        );
    });

    it("registers the custom elements emitted by the static pages", () => {
        const document = pageDocument(pages.find((page) => page.route === "/")?.html ?? "");
        const customElementNames = [
            ...new Set(
                findDeep(document, "*")
                    .map((element) => element.localName)
                    .filter((name) => name.includes("-")),
            ),
        ];

        expect(customElementNames.length).toBeGreaterThan(0);
        for (const name of customElementNames) {
            expect(customElements.get(name)).toBeDefined();
        }
    });

    it("persists theme changes and opens and closes the mobile menu", () => {
        localStorage.removeItem("personal-website-theme");
        delete document.documentElement.dataset.theme;
        document.body.innerHTML = pages.find((page) => page.route === "/")?.html ?? "";

        const customHosts = findDeep(document.body, "*").filter((element) =>
            element.localName.includes("-"),
        );
        for (const host of customHosts) {
            if (host instanceof HTMLElement) hydrateDeclarativeShadowRoot(host);
        }

        const themeButton = findDeep(document.body, 'button[aria-label="Switch to dark mode"]')[0];
        expect(themeButton).toBeDefined();
        (themeButton as HTMLButtonElement).click();
        expect(document.documentElement).toHaveAttribute("data-theme", "dark");
        expect(localStorage.getItem("personal-website-theme")).toBe("dark");

        const menuButton = findDeep(document.body, 'button[aria-label="Open navigation menu"]')[0];
        expect(menuButton).toBeDefined();
        (menuButton as HTMLButtonElement).click();
        expect(menuButton).toHaveAttribute("aria-expanded", "true");
        expect(
            findDeep(document.body, 'nav[aria-label="Mobile navigation"]')[0],
        ).not.toHaveAttribute("hidden");

        (
            findDeep(
                document.body,
                'button[aria-label="Close navigation menu"]',
            )[0] as HTMLButtonElement
        ).click();
        expect(findDeep(document.body, 'nav[aria-label="Mobile navigation"]')[0]).toHaveAttribute(
            "hidden",
        );
    });
});
