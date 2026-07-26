import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
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

    it('renders the blogs page when navigating to /blogs', () => {
        render(
            <MemoryRouter initialEntries={['/blogs']}>
                <AppRoutes />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /blogs/i })).toBeInTheDocument();
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
