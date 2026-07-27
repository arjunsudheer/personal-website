# Arjun Sudheer's Personal Website

This repository is dedicated to the source code of Arjun Sudheer's personal website.

## Blogs

Write posts as Markdown files in [`public/blog/`](public/blog/README.md). Add its
title, summary, slug, and reading time to `src/data/blogPosts.ts` so it appears in
the blog list.

Run `npm run dev` and open `http://localhost:5173/personal-website/#/blog` to
view the list locally. Individual posts use URLs such as
`#/blog/first-blog` and are fetched from the public Markdown files at runtime.

`npm run build` produces a standard React build in `dist/`, ready for the
existing GitHub Pages deployment command.
