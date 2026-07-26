import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { AppRoutes } from './App';

describe('App routing', () => {
    it('renders the about page by default', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
        expect(screen.getByText(/software engineer intern/i)).toBeInTheDocument();
    });

    it('renders the experience page when navigating to /experience', () => {
        render(
            <MemoryRouter initialEntries={['/experience']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    });

    it('renders the publications page when navigating to /publications', () => {
        render(
            <MemoryRouter initialEntries={['/publications']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /publications/i })).toBeInTheDocument();
    });

    it('renders the blog list when navigating to /blog', () => {
        render(
            <MemoryRouter initialEntries={['/blog']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /blogs/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /first blog/i })).toHaveAttribute('href', '/blog/first-blog');
    });

    it('renders a Markdown post when navigating to its slug', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            text: async () => '# First Blog\n\nRendered from Markdown.',
        }));

        render(
            <MemoryRouter initialEntries={['/blog/first-blog']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /first blog/i })).toBeInTheDocument();
        expect(screen.getByText(/rendered from markdown/i)).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith('/personal-website/blog/first-blog.md', expect.any(Object));

        vi.unstubAllGlobals();
    });

    it('redirects unknown routes to the about page', () => {
        render(
            <MemoryRouter initialEntries={['/does-not-exist']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
    });
});
