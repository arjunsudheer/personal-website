# Arjun Sudheer's Personal Website

This repository contains Arjun Sudheer's personal website, built as a static multi-page site with
Vite, HTML, CSS, and TypeScript. The source pages are `index.html`, `projects/index.html`,
`publications/index.html`, and `blog/index.html`; Vite builds these and the Markdown blog posts into
directory-based pages for `/`, `/projects/`, `/publications/`, `/blog/`, and `/blog/<slug>/`. The
deployed site retains the `/personal-website/` GitHub Pages base path.

## Development

Use pnpm 12.18.0 for package management; the version is pinned in `package.json`.

- `pnpm install`
- `pnpm dev` — start the Vite development server.
- `pnpm build` — type-check and generate the static site in `dist/`.
- `pnpm preview` — preview the production build locally.
- `pnpm lint`
- `pnpm exec vitest run`

The only custom elements are `site-navbar`, `experience-card`, and `content-card`. Their browser
implementations are in `src/components/`, and `src/components/elements.ts` registers them. The
route-specific HTML files are the source of truth for page content; `src/site/render.ts` only turns
registered blog Markdown into article HTML.

## Blogs

Write posts as Markdown files in [`public/blog/`](public/blog/adding-a-blog-post.md), then add the
post's slug, title, description, and reading time to `src/data/blog-post-metadata.ts`. Add a
corresponding `content-card` to `blog/index.html`. During the build, Vite reads the registered
Markdown files and compiles them into static post pages; Markdown is not fetched at runtime.

## Deployment

On pushes to `main`, GitHub Actions builds the static site, uploads `dist/` as a Pages artifact, and
deploys it to GitHub Pages. Set the repository's Pages source to **GitHub Actions**.
