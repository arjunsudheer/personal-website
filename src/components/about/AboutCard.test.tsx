import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutCard from './AboutCard';

const baseProps = {
    profileImageUrl: '/profile.jpg',
    name: 'Arjun Sudheer',
    headline: 'Software Engineer',
    university: 'San José State University',
    program: 'B.S. Software Engineering',
    location: 'Cupertino, CA',
};

describe('AboutCard', () => {
    it('renders the profile information', () => {
        render(<AboutCard {...baseProps} />);

        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText(/san josé state university/i)).toBeInTheDocument();
        expect(screen.getByText(/b\.s\. software engineering/i)).toBeInTheDocument();
        expect(screen.getByText('Cupertino, CA')).toBeInTheDocument();
    });

    it('uses the name as the profile image alt text', () => {
        render(<AboutCard {...baseProps} />);

        expect(screen.getByRole('img', { name: baseProps.name })).toHaveAttribute('src', baseProps.profileImageUrl);
    });
});
