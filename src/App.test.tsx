import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { AppRoutes } from './App';

describe('App routing', () => {
    it('renders the about page by default', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
        expect(screen.getAllByText(/software engineer/i).length).toBeGreaterThan(0);
    });

    it('renders the experience page when navigating to /experience', async () => {
        render(
            <MemoryRouter initialEntries={['/experience']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /experience/i })).toBeInTheDocument();
    });

    it('renders the publications page when navigating to /publications', async () => {
        render(
            <MemoryRouter initialEntries={['/publications']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /publications/i })).toBeInTheDocument();
    });

    it('renders the projects page when navigating to /projects', async () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /projects/i })).toBeInTheDocument();
    });

    it('renders the blog list when navigating to /blog', async () => {
        render(
            <MemoryRouter initialEntries={['/blog']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /blogs/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /how i use ai to code/i })).toBeInTheDocument();
    });

    it('renders a Markdown post when navigating to a known slug', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            text: async () => '# First Blog\n\nRendered from Markdown.',
        }));

        render(
            <MemoryRouter initialEntries={['/blog/first-blog']}>
                <AppRoutes />
            </MemoryRouter>
        );

        // The real blog metadata list is empty, so an unknown slug redirects home
        expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();

        vi.unstubAllGlobals();
    });

    it('redirects unknown routes to the about page', async () => {
        render(
            <MemoryRouter initialEntries={['/does-not-exist']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
    });
});
