import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import BlogPostContent from './BlogPostContent';

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('BlogPostContent', () => {
    it('shows a loading state before content resolves', () => {
        vi.stubGlobal('fetch', vi.fn().mockReturnValue(new Promise(() => {})));

        render(<BlogPostContent slug="first-blog" />);

        expect(screen.getByText(/loading post/i)).toBeInTheDocument();
    });

    it('renders fetched Markdown content once loaded', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            text: async () => '# First Blog\n\nRendered from Markdown.',
        }));

        render(<BlogPostContent slug="first-blog" />);

        expect(await screen.findByRole('heading', { name: /first blog/i })).toBeInTheDocument();
        expect(screen.getByText(/rendered from markdown/i)).toBeInTheDocument();
    });

    it('shows an error message when the post cannot be fetched', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 404 }));

        render(<BlogPostContent slug="missing-post" />);

        expect(await screen.findByText(/could not be found/i)).toBeInTheDocument();
    });

    it('URL-encodes the slug when requesting the Markdown file', async () => {
        const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => 'content' });
        vi.stubGlobal('fetch', fetchMock);

        render(<BlogPostContent slug="a slug/with special?chars" />);

        await waitFor(() => expect(fetchMock).toHaveBeenCalled());
        const [requestedUrl] = fetchMock.mock.calls[0] as [string];
        expect(requestedUrl).toContain(encodeURIComponent('a slug/with special?chars'));
    });
});
