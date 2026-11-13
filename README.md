# Arjun Sudheer's Personal Website

This repository contains Arjun Sudheer's personal website, built with Vite and TypeScript using
custom elements and Declarative Shadow DOM. Vite generates standalone pages for `/`,
`/projects/`, `/publications/`, `/blog/`, and each `/blog/<slug>/` post. The deployed site retains
the `/personal-website/` GitHub Pages base path.

## Development

Use pnpm for package management:

- `pnpm install`
- `pnpm dev` — start the Vite development server.
- `pnpm build` — type-check and generate the static site in `dist/`.
- `pnpm preview` — preview the production build locally.
- `pnpm lint`
- `pnpm exec vitest run`

## Blogs

Write posts as Markdown files in [`public/blog/`](public/blog/adding-a-blog-post.md), then add the
post's slug, title, description, and reading time to `src/data/blog-post-metadata.ts`. During the
build, Vite reads the registered Markdown files and compiles them into static post pages; Markdown
is not fetched at runtime.

## Deployment

GitHub Actions builds and publishes the site to GitHub Pages on pushes to `main`. The
`pnpm run deploy` helper builds `dist/` and publishes it to the `gh-pages` branch; normal
deployment is handled by CI.
