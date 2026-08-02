import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../data/blog-post-metadata', () => ({
    blogPosts: [{ slug: 'first-blog', title: 'First Blog', description: 'desc', readTime: '3 min read' }],
}));

afterEach(() => {
    vi.unstubAllGlobals();
});

async function renderAt(path: string) {
    const { default: BlogPostPage } = await import('./BlogPost');
    render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/" element={<h1>About</h1>} />
            </Routes>
        </MemoryRouter>
    );
}

describe('BlogPostPage', () => {
    it('renders the post content and a back link for a known slug', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, text: async () => '# First Blog' }));

        await renderAt('/blog/first-blog');

        expect(screen.getByRole('link', { name: /all posts/i })).toHaveAttribute('href', '/blog');
        expect(await screen.findByRole('heading', { name: /first blog/i })).toBeInTheDocument();
    });

    it('redirects to the home page for an unknown slug', async () => {
        await renderAt('/blog/does-not-exist');

        expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument();
    });
});
