import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectsPage from './Projects';

describe('ProjectsPage', () => {
    it('renders the projects page content', () => {
        render(<ProjectsPage />);

        expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /cornhole referee/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /cornhole referee/i })).toHaveAttribute(
            'href',
            'https://github.com/arjunsudheer/cornhole-referee'
        );
    });

    it('does not include the private Daily Compass project', () => {
        render(<ProjectsPage />);

        expect(screen.queryByText(/daily compass/i)).not.toBeInTheDocument();
    });
});
