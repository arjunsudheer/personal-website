import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectsPage from './Projects';

describe('ProjectsPage', () => {
    it('renders the projects page content', () => {
        render(<ProjectsPage />);

        expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
        expect(screen.getByText(/multi-agent network defense platform/i)).toBeInTheDocument();
        expect(screen.getByText(/ai compliance tracking assistant/i)).toBeInTheDocument();
    });
});
