import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PublicationsPage from './Publications';

describe('PublicationsPage', () => {
    it('renders the publications page content', () => {
        render(<PublicationsPage />);

        expect(screen.getByRole('heading', { name: /publications/i })).toBeInTheDocument();
        expect(screen.getByText(/llm-based agentic network traffic incident-report approach/i)).toBeInTheDocument();
    });
});
