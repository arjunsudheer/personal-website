# AGENTS.md

## Purpose

This repository is Arjun Sudheer's personal website. It uses Vite and TypeScript to build static
HTML pages with three reusable custom elements.

## Project Overview

- Frontend: Vite, TypeScript, static HTML, and custom elements (no client-side router).
- Pages: `pages/home.html`, `pages/projects.html`, `pages/publications.html`, and `pages/blog.html`
  are the source pages. Vite builds them as `/`, `/projects/`, `/publications/`, and `/blog/`, and
  generates `/blog/<slug>/` pages from Markdown.
- GitHub Pages: `vite.config.ts` retains the `/personal-website/` base path used for deployed assets
  and links.
- The only custom elements are `site-navbar`, `experience-card`, and `content-card`, implemented in
  `src/components/` and registered by `src/components/elements.ts`. Page content and layout are
  authored directly in route-specific HTML files; `src/site/render.ts` only compiles Markdown blog
  articles.
- Blog content: Markdown sources live in `public/blog/`; registered post metadata (slug, title,
  description, and read time) is in `src/data/blog-post-metadata.ts`.
- Toolchain: pnpm is pinned to 12.18.0. TypeScript remains at 6.0.3 until `typescript-eslint`
  supports TypeScript 7.
- Tests: Vitest tests are colocated with the components or in `src/`.

## Working Rules

- Use pnpm 12.18.0 for installs and package management. The repo enforces pnpm via the `preinstall`
  script.
- Keep changes small and consistent with the existing structure.
- Keep static page content in the corresponding HTML file under `pages/` and use custom elements
  only for reusable components.
- Preserve generated page paths and the `/personal-website/` deployment base path.
- For a blog post, update its Markdown file, metadata entry, and listing card in `pages/blog.html`.

## Repository Layout

- `vite.config.ts`: Vite multi-page inputs and build-time Markdown page generation.
- `pages/`: static HTML page sources; Vite preserves their directory-based public routes.
- `src/main.ts`: loads the browser custom-element registry.
- `src/components/`: implementations and shadow-root styles for the three custom elements.
- `src/components/elements.ts`: custom-element registration.
- `src/site/render.ts`: Markdown-to-HTML processing and blog article page generation.
- `src/site.css`: global page styles.
- `src/data/`: blog post metadata.
- `public/blog/`: Markdown source for blog articles.
- `src/**/*.test.ts`: component, static page, and build behavior tests.

## Standard Commands

Run these from the repository root:

- `pnpm install`
- `pnpm dev`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm exec vitest run`
- `pnpm build`
- `pnpm preview`

`pnpm build` type-checks the project and generates the static site in `dist/`. On pushes to `main`,
GitHub Actions uploads `dist/` as a Pages artifact and deploys it. The repository's Pages source
must be set to **GitHub Actions**; there is no local deploy script or `gh-pages` branch publishing.

## Development Guidelines

- Keep styling aligned with the existing dark, minimal, glassy visual design.
- Keep custom element behavior consistent with the slotted markup in the route HTML sources.
- Preserve navigation and page links across all generated routes.
- Include or update relevant tests when changing page rendering or custom element behavior.

## Validation Before Completion

Before marking work as complete, verify the relevant behavior with the smallest meaningful command:

- `pnpm lint`
- `pnpm exec vitest run`
- `pnpm build`

For changes affecting generated routes, deployment paths, or blog rendering, confirm the build
completes cleanly.

## When to Ask for Guidance

Ask before making changes that affect:

- static page generation or navigation architecture
- GitHub Pages deployment assumptions or asset paths
- package manager/tooling decisions
- major dependency upgrades
- large UI redesigns or page rewrites

## Notes

This project is a polished personal site. Preserve its existing design and functionality while
making targeted, safe improvements.
