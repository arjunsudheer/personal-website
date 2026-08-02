import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DescriptionCard from './DescriptionCard';

describe('DescriptionCard', () => {
    it('renders the description and social profile links', () => {
        render(
            <DescriptionCard
                description="A software engineer who builds reliable systems."
                socialProfiles={[
                    { profileName: 'LinkedIn', profileIcon: <span>in</span>, profileLink: 'https://linkedin.com/in/example' },
                    { profileName: 'GitHub', profileIcon: <span>gh</span>, profileLink: 'https://github.com/example' },
                ]}
            />
        );

        expect(screen.getByText(/builds reliable systems/i)).toBeInTheDocument();

        const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/example');
        expect(linkedin).toHaveAttribute('target', '_blank');
        expect(linkedin).toHaveAttribute('rel', 'noreferrer');

        expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/example');
    });

    it('renders with no social profiles without crashing', () => {
        render(<DescriptionCard description="No links yet." socialProfiles={[]} />);

        expect(screen.getByText('No links yet.')).toBeInTheDocument();
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
