# Adding a blog post

1. Create `public/blog/<slug>.md` using a lowercase, hyphenated slug.
2. Add the post's `slug`, `title`, `description`, and `readTime` to
   `src/data/blog-post-metadata.ts`.
3. Run `pnpm dev` and visit
   `http://localhost:5173/personal-website/blog/<slug>/`.

Vite renders the Markdown into a standalone HTML page at build time. The development server
generates the same route locally; the browser does not fetch or render Markdown at runtime.
