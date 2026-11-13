# AGENTS.md

## Purpose

This repository is Arjun Sudheer's personal website. It uses Vite and TypeScript to generate
static HTML pages, with custom elements and Declarative Shadow DOM for component styling and
interactive behavior.

## Project Overview

- Frontend: Vite, TypeScript, custom elements, and Declarative Shadow DOM (no client-side router).
- Pages: `/`, `/projects/`, `/publications/`, `/blog/`, and `/blog/<slug>/` are generated as
  directory-based pages in `dist/`.
- GitHub Pages: `vite.config.ts` retains the `/personal-website/` base path used for deployed
  assets and links.
- Blog content: Markdown sources live in `public/blog/`; registered post metadata (slug, title,
  description, and read time) is in `src/data/blog-post-metadata.ts`. Vite compiles the Markdown
  into static post pages during the build.
- Tests: Vitest tests are colocated with the components or in `src/`.

## Working Rules

- Use `pnpm` for installs and package management. The repo enforces this via the `preinstall`
  script.
- Keep changes small and consistent with the existing structure.
- Preserve the generated page paths and `/personal-website/` deployment base path.
- For a blog post, update both its Markdown file and metadata entry.

## Repository Layout

- `vite.config.ts`: Vite configuration, build-time Markdown loading, and static page output.
- `src/main.ts`: registers the custom elements used to hydrate Declarative Shadow DOM.
- `src/components/`: custom element behavior.
- `src/site/render.ts`: page and document rendering, including Markdown-to-HTML processing.
- `src/site.css`: global styles.
- `src/data/`: blog metadata and structured site content.
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

`pnpm build` type-checks the project and generates the static site in `dist/`. GitHub Actions
deploys to GitHub Pages on pushes to `main` by running `pnpm run deploy`; that helper builds and
publishes `dist/` to the `gh-pages` branch. CI is the normal deployment path.

## Development Guidelines

- Keep styling aligned with the existing dark, minimal, glassy visual design.
- Keep custom element behavior consistent with the static HTML and Declarative Shadow DOM emitted
  by the page renderer.
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
