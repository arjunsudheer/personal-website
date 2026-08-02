import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PublicationsPage from './Publications';

describe('PublicationsPage', () => {
    it('renders the publications page content', () => {
        render(<PublicationsPage />);

        expect(screen.getByRole('heading', { name: /publications/i })).toBeInTheDocument();
        expect(screen.getByText(/llm-based agentic network traffic incident-report approach/i)).toBeInTheDocument();
    });

    it('renders a distinct outbound link for each publication', () => {
        render(<PublicationsPage />);

        const links = screen.getAllByRole('link');
        const hrefs = links.map((link) => link.getAttribute('href'));
        expect(new Set(hrefs).size).toBe(hrefs.length);
        expect(hrefs.length).toBe(3);
    });
});
