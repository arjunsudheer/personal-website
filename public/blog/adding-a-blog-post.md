# Adding a blog post

1. Create `public/blog/<slug>.md` using a lowercase, hyphenated slug.
2. Add the post's `slug`, `title`, `description`, and `readTime` to `src/data/blog-post-metadata.ts`.
3. Run `npm run dev` and visit `#/blog/<slug>`.

The Markdown files are public assets. React fetches and renders them at runtime.
