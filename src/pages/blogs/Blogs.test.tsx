import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
    vi.doUnmock('../../data/blog-post-metadata');
    vi.resetModules();
});

async function renderBlogsPage() {
    const { default: BlogsPage } = await import('./Blogs');
    render(
        <MemoryRouter>
            <BlogsPage />
        </MemoryRouter>
    );
}

describe('BlogsPage', () => {
    it('shows an empty state message when there are no posts', async () => {
        vi.doMock('../../data/blog-post-metadata', () => ({ blogPosts: [] }));

        await renderBlogsPage();

        expect(screen.getByText(/no blogs have been published yet/i)).toBeInTheDocument();
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders a link for every blog post with its metadata', async () => {
        vi.doMock('../../data/blog-post-metadata', () => ({
            blogPosts: [
                { slug: 'first-post', title: 'First Post', description: 'An intro post.', readTime: '3' },
                { slug: 'second-post', title: 'Second Post', description: 'A follow-up post.', readTime: '5' },
            ],
        }));

        await renderBlogsPage();

        const firstLink = screen.getByRole('link', { name: /first post/i });
        expect(firstLink).toHaveAttribute('href', '/blog/first-post');
        expect(screen.getByText('An intro post.')).toBeInTheDocument();
        expect(screen.getByText('3 min. read')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /second post/i })).toHaveAttribute('href', '/blog/second-post');
    });
});
