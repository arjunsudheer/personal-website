import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { blogPosts } from "../data/blog-post-metadata.ts";
import {
    experienceItems,
    profileDescription,
    projects,
    publications,
    socialProfiles,
} from "../data/site-content.ts";

export interface StaticPage {
    readonly route: string;
    readonly title: string;
    readonly html: string;
}

interface PageContent {
    readonly route: string;
    readonly title: string;
    readonly description: string;
    readonly content: string;
}

const navbarStyles = `
    :host { display: block; position: sticky; top: 0; z-index: 30; }
    header { border-bottom: 1px solid var(--border); background: var(--surface); }
    .bar { position: relative; display: flex; min-height: 4rem; align-items: center; justify-content: space-between; gap: 1.5rem; max-width: 72rem; margin: 0 auto; padding: 0 1.25rem; }
    a { color: inherit; text-decoration: none; }
    .brand { flex-shrink: 0; font-weight: 600; }
    .desktop-nav { display: none; align-items: center; gap: 1.5rem; }
    .desktop-nav a, .mobile-nav a { color: var(--nav-muted); font-size: 0.875rem; transition: color 150ms ease; }
    .desktop-nav a:hover, .mobile-nav a:hover, a[aria-current="page"] { color: var(--nav-strong); }
    a[aria-current="page"] { text-decoration: underline; text-underline-offset: 0.25rem; }
    .controls { display: flex; align-items: center; gap: 0.5rem; }
    button { display: inline-flex; height: 2.5rem; width: 2.5rem; align-items: center; justify-content: center; border: 0; border-radius: 9999px; color: var(--text); background: transparent; cursor: pointer; transition: background-color 150ms ease; }
    button:hover { background: var(--surface-hover); }
    button:focus-visible, a:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    svg { width: 1.25rem; height: 1.25rem; fill: currentColor; }
    .mobile-toggle { display: inline-flex; }
    .mobile-nav { border-top: 1px solid var(--border); padding: 0.75rem 1.25rem; background: var(--surface); }
    .mobile-nav[hidden] { display: none; }
    .mobile-nav ul { max-width: 72rem; margin: 0 auto; padding: 0; list-style: none; }
    .mobile-nav li + li { margin-top: 0.75rem; }
    @media (min-width: 768px) {
        .bar { padding-right: 2rem; padding-left: 2rem; }
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none; }
        .mobile-nav { display: none; }
    }
    @media (min-width: 1024px) {
        .bar { padding-right: 2.5rem; padding-left: 2.5rem; }
    }
`;

const aboutCardStyles = `
    :host { display: block; }
    .frame { display: flex; justify-content: center; }
    img { width: 12rem; height: 12rem; border-radius: 9999px; object-fit: cover; object-position: center 18%; }
    @media (min-width: 640px) { img { width: 15rem; height: 15rem; } }
    @media (min-width: 768px) { .frame { justify-content: flex-start; } }
`;

const descriptionCardStyles = `
    :host { display: block; }
    p { margin: 0; font-size: 1rem; line-height: 1.75; }
    .social { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 1.25rem; margin-top: 2rem; }
    a { position: relative; display: inline-flex; width: 3rem; height: 3rem; align-items: center; justify-content: center; color: var(--muted); transition: color 150ms ease; }
    a:hover, a:focus-visible { color: var(--text); }
    a:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    svg { width: 1.75rem; height: 1.75rem; fill: currentColor; }
    .tooltip { position: absolute; bottom: 100%; left: 50%; z-index: 10; margin-bottom: 0.25rem; padding: 0.25rem 0.5rem; transform: translateX(-50%); border: 1px solid var(--border); border-radius: 0.125rem; color: var(--text); background: var(--surface-subtle); font-size: 0.75rem; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 150ms ease; }
    a:hover .tooltip, a:focus-visible .tooltip { opacity: 1; }
    @media (min-width: 640px) { .social { gap: 1.75rem; } }
    @media (min-width: 768px) { .social { justify-content: flex-start; } }
`;

const experienceStyles = `
    :host { display: block; }
    section { display: flex; flex-direction: column; gap: 1.5rem; }
    h2 { margin: 0; font-size: 1.875rem; line-height: 1.25; font-weight: 600; letter-spacing: -0.025em; }
    ol { position: relative; margin: 0; padding: 0; list-style: none; }
    ol::before { position: absolute; top: 0; bottom: 0; left: 34%; width: 1px; background: var(--border); content: ""; }
    li { display: grid; grid-template-columns: 22% 24% 54%; align-items: center; padding: 2rem 0; }
    li:first-child { padding-top: 0; }
    li:last-child { padding-bottom: 0; }
    .logo { display: flex; justify-content: flex-end; }
    img { width: 3rem; height: 3rem; border: 1px solid var(--border); border-radius: 0.375rem; background: #fff; object-fit: cover; padding: 0.375rem; }
    .date { position: relative; z-index: 1; display: flex; min-height: 5rem; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; text-align: center; }
    .dot { position: relative; z-index: 1; width: 0.625rem; height: 0.625rem; flex-shrink: 0; border-radius: 9999px; background: var(--nav-strong); }
    .date p { position: relative; z-index: 1; margin: 0; padding: 0 0.25rem; color: var(--muted); background: var(--page-background); font-size: 0.625rem; line-height: 1rem; }
    .start, .end { white-space: nowrap; }
    article { min-width: 0; padding: 0.5rem 0; }
    h3 { margin: 0; font-size: 1.125rem; line-height: 1.5; font-weight: 600; }
    .role { margin: 0.25rem 0 0; font-size: 0.875rem; font-weight: 500; }
    .summary { margin: 0.75rem 0 0; color: var(--muted); font-size: 0.875rem; line-height: 1.5rem; }
    @media (min-width: 640px) {
        img { width: 4rem; height: 4rem; }
        .date p { font-size: 0.75rem; }
        .end { display: inline; }
        h3 { font-size: 1.25rem; }
    }
    @media (max-width: 639px) {
        .end { display: block; }
    }
`;

const projectCardStyles = `
    :host { display: block; }
    a { display: block; width: 100%; border: 1px solid var(--border); border-radius: 0.375rem; padding: 1.25rem; color: var(--text); background: var(--surface); text-decoration: none; transition: background-color 150ms ease, border-color 150ms ease; }
    a:hover { background: var(--surface-hover); }
    a:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    h2 { margin: 0; font-size: 1.25rem; font-weight: 600; }
    .description { margin: 0.75rem 0 0; font-size: 0.875rem; line-height: 1.75; }
    .skills, .url { margin: 1.25rem 0 0; font-size: 0.875rem; }
    .skills { color: var(--muted); }
    .skills strong { color: var(--text); font-weight: 500; }
    .url { overflow-wrap: anywhere; color: var(--link); font-weight: 500; text-decoration: underline; text-underline-offset: 0.25rem; }
    @media (min-width: 640px) { a { padding: 1.75rem; } }
`;

const publicationCardStyles = `
    :host { display: block; }
    a { display: block; width: 100%; border: 1px solid var(--border); border-radius: 0.375rem; padding: 1.25rem; color: var(--text); background: var(--surface); text-decoration: none; transition: background-color 150ms ease, border-color 150ms ease; }
    a:hover { background: var(--surface-hover); }
    a:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    h2 { margin: 0; font-size: 1.25rem; font-weight: 600; }
    .venue { margin: 0.5rem 0 0; color: var(--muted); font-size: 0.875rem; }
    .abstract { margin: 1.25rem 0 0; font-size: 0.875rem; line-height: 1.75; }
    .url { overflow-wrap: anywhere; margin: 1.25rem 0 0; color: var(--link); font-size: 0.875rem; font-weight: 500; text-decoration: underline; text-underline-offset: 0.25rem; }
    @media (min-width: 640px) { a { padding: 1.75rem; } }
`;

const blogPostStyles = `
    :host { display: block; }
    article { max-width: none; color: var(--text); }
    a { color: var(--link); transition: color 150ms ease; }
    a:hover { text-decoration: underline; }
    h1, h2 { color: var(--text); font-weight: 600; letter-spacing: -0.025em; }
    h1 { margin: 0 0 1.5rem; font-size: 1.875rem; }
    h2 { margin: 2rem 0 0.75rem; font-size: 1.5rem; }
    p { margin: 1rem 0; line-height: 1.75; }
    ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
    ul { list-style: disc; }
    ol { list-style: decimal; }
    li { margin: 0.25rem 0; }
    code { border-radius: 0.25rem; padding: 0.125rem 0.375rem; background: var(--surface-subtle); }
    pre { overflow-x: auto; border: 1px solid var(--border); border-radius: 0.375rem; padding: 1rem; background: var(--surface-subtle); }
    pre code { padding: 0; background: transparent; }
    table { width: 100%; margin: 1.5rem 0; border-collapse: collapse; }
    th, td { border: 1px solid var(--border); padding: 0.75rem; text-align: left; }
    th { background: var(--surface-subtle); }
    input[type="checkbox"] { margin-right: 0.5rem; }
`;

const iconMarkup: Readonly<Record<string, string>> = {
    linkedin:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.5H5.66V18h2.68ZM7 8.34a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12ZM18.34 18v-4.66c0-2.5-1.33-3.66-3.1-3.66a2.67 2.67 0 0 0-2.4 1.32V9.5h-2.67V18h2.67v-4.2c0-1.1.21-2.16 1.57-2.16 1.34 0 1.36 1.25 1.36 2.23V18h2.57Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.64 3.8 1.87.1-.73.39-1.22.7-1.5-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.27-2.6 5.22-5.08 5.49.4.34.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>',
    scholar:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 10 5-10 5L2 8l10-5Zm-6.5 8.25L12 14.5l6.5-3.25v4.1c-3.8 3.4-9.2 3.4-13 0v-4.1ZM22 9v7h-1V9.5l1-.5Z"/></svg>',
    instagram:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',
};

const moonIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 15.4A8.8 8.8 0 0 1 8.6 3.3a9 9 0 1 0 12.1 12.1Z"/></svg>';
const menuIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';

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

function normalizeBaseUrl(baseUrl: string): string {
    const leadingSlash = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
    return leadingSlash.endsWith("/") ? leadingSlash : `${leadingSlash}/`;
}

function shadowElement(tagName: string, styles: string, content: string): string {
    return `<${tagName}><template shadowrootmode="open"><style>${styles}</style>${content}</template></${tagName}>`;
}

function navLink(label: string, href: string, active: boolean): string {
    return `<a href="${escapeHtml(href)}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
}

function renderNavbar(route: string, baseUrl: string): string {
    const section = route.startsWith("/blog/") ? "blog" : route.slice(1).split("/")[0];
    const links = [
        { label: "About", href: baseUrl, section: "" },
        { label: "Projects", href: `${baseUrl}projects/`, section: "projects" },
        { label: "Publications", href: `${baseUrl}publications/`, section: "publications" },
        { label: "Blogs", href: `${baseUrl}blog/`, section: "blog" },
    ];
    const renderLinks = () =>
        links.map((link) => navLink(link.label, link.href, link.section === section)).join("");

    return shadowElement(
        "site-navbar",
        navbarStyles,
        `<header><div class="bar"><a class="brand" href="${escapeHtml(baseUrl)}">Arjun Sudheer</a><nav class="desktop-nav" aria-label="Primary navigation">${renderLinks()}</nav><div class="controls"><button type="button" class="theme-toggle" aria-label="Switch to dark mode">${moonIcon}</button><button type="button" class="mobile-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-navigation">${menuIcon}</button></div></div><nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation" hidden><ul>${links
            .map((link) => `<li>${navLink(link.label, link.href, link.section === section)}</li>`)
            .join("")}</ul></nav></header>`,
    );
}

function renderSocialProfiles(): string {
    return socialProfiles
        .map(
            (profile, index) =>
                `<a href="${escapeHtml(profile.url)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(profile.name)}" aria-describedby="profile-tooltip-${index}">${iconMarkup[profile.icon]}<span id="profile-tooltip-${index}" class="tooltip" role="tooltip">${escapeHtml(profile.name)}</span></a>`,
        )
        .join("");
}

function renderAbout(baseUrl: string): string {
    const profileImage = `${baseUrl}assets/about/Arjun_Sudheer_Professional_Headshot.jpg`;
    const aboutCard = shadowElement(
        "about-card",
        aboutCardStyles,
        `<div class="frame"><img src="${escapeHtml(profileImage)}" alt="Arjun Sudheer"></div>`,
    );
    const description = shadowElement(
        "description-card",
        descriptionCardStyles,
        `<div><p>${escapeHtml(profileDescription)}</p><div class="social">${renderSocialProfiles()}</div></div>`,
    );
    const experience = experienceItems
        .map((item) => {
            const logo = `${baseUrl}assets/experience/${item.companyLogo}`;
            return `<li><div class="logo"><img src="${escapeHtml(logo)}" alt="${escapeHtml(item.company)} logo"></div><div class="date"><span class="dot" aria-hidden="true"></span><p><span class="start">${escapeHtml(item.startDate)} –</span> <span class="end">${escapeHtml(item.endDate)}</span></p></div><article><h3>${escapeHtml(item.company)}</h3><p class="role">${escapeHtml(item.role)}</p><p class="summary">${escapeHtml(item.summary)}</p></article></li>`;
        })
        .join("");
    const timeline = shadowElement(
        "experience-timeline",
        experienceStyles,
        `<section aria-labelledby="experience-heading"><h2 id="experience-heading">Experience</h2><ol>${experience}</ol></section>`,
    );

    return `<section class="about-intro"><div class="about-grid">${aboutCard}<div><h1>Arjun Sudheer</h1>${description}</div></div></section>${timeline}`;
}

function renderProjectCard(project: (typeof projects)[number]): string {
    const skills =
        project.skills.length > 0
            ? `<p class="skills"><strong>Skills:</strong> ${project.skills.map(escapeHtml).join(", ")}</p>`
            : "";
    return shadowElement(
        "project-card",
        projectCardStyles,
        `<a href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer"><h2>${escapeHtml(project.title)}</h2><p class="description">${escapeHtml(project.description)}</p>${skills}<p class="url">${escapeHtml(project.url)}</p></a>`,
    );
}

function renderProjects(): string {
    return `<section class="page-section"><h1>Projects</h1><div class="card-list">${projects.map(renderProjectCard).join("")}</div></section>`;
}

function renderPublicationCard(publication: (typeof publications)[number]): string {
    return shadowElement(
        "publication-card",
        publicationCardStyles,
        `<a href="${escapeHtml(publication.url)}" target="_blank" rel="noreferrer"><h2>${escapeHtml(publication.title)}</h2><p class="venue">${escapeHtml(publication.publishedIn)}</p><p class="abstract">${escapeHtml(publication.abstract)}</p><p class="url">${escapeHtml(publication.url)}</p></a>`,
    );
}

function renderPublications(): string {
    return `<section class="page-section"><h1>Publications</h1><div class="card-list">${publications.map(renderPublicationCard).join("")}</div></section>`;
}

function renderBlogs(baseUrl: string): string {
    const cards =
        blogPosts.length === 0
            ? "<p>No blogs have been published yet.</p>"
            : `<div class="card-list">${blogPosts
                  .map(
                      (post) =>
                          `<a class="blog-card" href="${escapeHtml(`${baseUrl}blog/${post.slug}/`)}"><div class="blog-heading"><h2>${escapeHtml(post.title)}</h2><p>${escapeHtml(post.readTime)} min. read</p></div><p>${escapeHtml(post.description)}</p></a>`,
                  )
                  .join("")}</div>`;
    return `<section class="page-section"><h1>Blogs</h1>${cards}</section>`;
}

function renderBlogPost(baseUrl: string, markdownHtml: string): string {
    const article = shadowElement(
        "blog-post-content",
        blogPostStyles,
        `<article>${markdownHtml}</article>`,
    );
    return `<section class="page-section"><a class="back-link" href="${escapeHtml(`${baseUrl}blog/`)}">← All posts</a>${article}</section>`;
}

function renderDocument(page: PageContent, baseUrl: string): string {
    const rootContent = `<site-page-root data-route="${escapeHtml(page.route)}">${renderNavbar(page.route, baseUrl)}<main class="site-main">${page.content}</main></site-page-root>`;
    return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script>if(localStorage.getItem("personal-website-theme")==="dark")document.documentElement.dataset.theme="dark";</script><link rel="icon" type="image/x-icon" href="${escapeHtml(`${baseUrl}assets/about/Arjun_Sudheer_Professional_Headshot.ico`)}"><link rel="stylesheet" href="${escapeHtml(`${baseUrl}src/site.css`)}"><meta name="description" content="${escapeHtml(page.description)}"><title>${escapeHtml(page.title)}</title></head><body>${rootContent}<script type="module" src="${escapeHtml(`${baseUrl}src/main.ts`)}"></script></body></html>`;
}

export async function renderStaticPages(
    baseUrlInput: string,
    markdownBySlug: Readonly<Record<string, string>>,
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

    const markdownProcessor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify);
    const pages: StaticPage[] = [];
    const pageContent: PageContent[] = [
        {
            route: "/",
            title: "Arjun Sudheer",
            description:
                "About Arjun Sudheer, software engineer and student at San Jose State University.",
            content: renderAbout(baseUrl),
        },
        {
            route: "/projects/",
            title: "Projects | Arjun Sudheer",
            description: "Selected software and computer vision projects by Arjun Sudheer.",
            content: renderProjects(),
        },
        {
            route: "/publications/",
            title: "Publications | Arjun Sudheer",
            description: "Research publications by Arjun Sudheer.",
            content: renderPublications(),
        },
        {
            route: "/blog/",
            title: "Blogs | Arjun Sudheer",
            description: "Articles and notes by Arjun Sudheer.",
            content: renderBlogs(baseUrl),
        },
    ];

    for (const post of blogPosts) {
        const markdown = markdownBySlug[post.slug];
        if (markdown === undefined) {
            throw new Error(`Missing Markdown for blog post: ${post.slug}`);
        }
        const renderedMarkdown = await markdownProcessor.process(markdown);
        pageContent.push({
            route: `/blog/${post.slug}/`,
            title: `${post.title} | Arjun Sudheer`,
            description: post.description,
            content: renderBlogPost(baseUrl, String(renderedMarkdown)),
        });
    }

    for (const page of pageContent) {
        pages.push({
            route: page.route,
            title: page.title,
            html: renderDocument(page, baseUrl),
        });
    }

    return pages;
}
