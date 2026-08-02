import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders the navigation links', () => {
        render(
            <MemoryRouter initialEntries={['/projects']}>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    });
});
