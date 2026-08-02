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
        expect(screen.getAllByText(/software engineer/i).length).toBeGreaterThan(0);
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

    it('renders the projects page when navigating to /projects', () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    });

    it('renders the blog list when navigating to /blog', () => {
        render(
            <MemoryRouter initialEntries={['/blog']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /blogs/i })).toBeInTheDocument();
        expect(screen.getByText(/no blogs have been published yet/i)).toBeInTheDocument();
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

        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();

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
