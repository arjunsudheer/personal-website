import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutCard from './AboutCard';

describe('AboutCard', () => {
    it('renders the profile information', () => {
        render(
            <AboutCard
                profileImageUrl="/profile.jpg"
                name="Arjun Sudheer"
                headline="Software Engineer"
                university="San José State University"
                graduationDate="B.S. Software Engineering"
                location="Cupertino, CA"
            />
        );

        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText(/san josé state university/i)).toBeInTheDocument();
    });
});
