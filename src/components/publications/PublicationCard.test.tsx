import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PublicationCard from './PublicationCard';

describe('PublicationCard', () => {
    it('renders the publication content', () => {
        render(
            <PublicationCard
                title="Secure Agent Systems"
                publishedIn="Journal of AI Research"
                abstract="A study of agent-based security systems."
                publicationLink="https://example.com"
            />
        );

        expect(screen.getByRole('heading', { name: /secure agent systems/i })).toBeInTheDocument();
        expect(screen.getByText(/journal of ai research/i)).toBeInTheDocument();
        expect(screen.getByText(/agent-based security systems/i)).toBeInTheDocument();
    });
});
