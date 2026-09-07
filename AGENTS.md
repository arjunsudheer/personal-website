# AGENTS.md

## Purpose

This repository is Arjun Sudheer's personal website. It is a Vite + React + TypeScript app used to present profile information, experience, projects, publications, and blog posts. The project is intentionally lightweight and content-driven, with most content either in component files or structured metadata/Markdown assets.

## Project Overview

- Frontend stack: React 19, TypeScript, Vite, Tailwind CSS.
- Routing: `HashRouter` is used in `src/App.tsx` so routes work correctly on GitHub Pages via URLs such as `#/blog` and `#/blog/:slug`.
- Deployment assumptions: `vite.config.ts` includes a GitHub Pages base path and the app is designed to be deployed from `dist/`.
- Blog content: Markdown files live under `public/blog/` and are rendered at runtime; metadata for blog entries lives in `src/data/blog-post-metadata.ts`.
- Tests: the repo uses Vitest with Testing Library; test files are colocated near the components/pages they validate.

## Working Rules

- Use `pnpm` for installs and package management. The repo enforces this via the `preinstall` script.
- Keep changes small and consistent with the existing structure.
- Prefer editing existing component/page patterns instead of introducing new architectural layers.
- Preserve deployment assumptions and URL behavior, especially anything tied to GitHub Pages or hash-based routing.

## Repository Layout

- `src/App.tsx`: top-level route configuration and app shell.
- `src/pages/`: page-level screens such as About, Experience, Projects, Publications, and Blogs.
- `src/components/`: reusable UI and feature-specific components.
- `src/data/`: structured metadata, such as blog post definitions.
- `public/blog/`: Markdown source for blog articles.
- `src/test/`: global test setup and shared test utilities.
- `src/**/*.test.tsx`: component and page tests.

## Standard Commands

Run these from the repository root:

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm exec vitest run`
- `pnpm preview`

Deployment workflow:

- This site is deployed via GitHub Actions and should not be triggered manually in local development.
- The `pnpm deploy` script exists as a helper for release automation, but the project’s normal deployment path is the CI workflow that publishes the built site to GitHub Pages.

## Development Guidelines

- Keep styling aligned with the existing dark, minimal, glassy visual design.
- Favor reusable presentational components over repeated markup.
- If you add or modify a route, make sure the corresponding navigation and page wiring remain consistent.
- For blog changes, update both the Markdown content and the metadata entry so the post appears in the blog list.
- When adding UI logic, include or update the relevant tests where practical.
- Avoid broad refactors unless the task explicitly requires them.

## Validation Before Completion

Before marking work as complete, verify the relevant behavior with the smallest meaningful command:

- `pnpm lint`
- `pnpm exec vitest run`
- `pnpm build`

If a change affects routing, deployment paths, blog rendering, or page-level behavior, run the relevant checks and confirm the app still builds cleanly.

## When to Ask For Guidance

Ask before making changes that affect:

- routing structure or navigation architecture
- GitHub Pages deployment assumptions or asset paths
- package manager/tooling decisions
- major dependency upgrades
- large UI redesigns or page rewrites

## Notes

This project is currently a polished personal site rather than an unfinished scaffold. The goal is to preserve the existing design and functionality while making targeted, safe improvements.
