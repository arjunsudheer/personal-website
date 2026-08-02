import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders the brand link and all navigation links', () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /arjun sudheer/i })).toHaveAttribute('href', '/');
        for (const label of ['About', 'Experience', 'Projects', 'Publications', 'Blogs']) {
            expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
        }
    });

    it('marks the link matching the current route as active via aria-current', () => {
        render(
            <MemoryRouter initialEntries={['/experience']}>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('aria-current', 'page');
        expect(screen.getByRole('link', { name: 'Projects' })).not.toHaveAttribute('aria-current');
    });

    it('only marks About active on the exact root path, not on other routes', () => {
        render(
            <MemoryRouter initialEntries={['/publications']}>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current');
        expect(screen.getByRole('link', { name: 'Publications' })).toHaveAttribute('aria-current', 'page');
    });

    it('marks Blogs active for nested blog post routes', () => {
        render(
            <MemoryRouter initialEntries={['/blog/some-post']}>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole('link', { name: 'Blogs' })).toHaveAttribute('aria-current', 'page');
    });
});
