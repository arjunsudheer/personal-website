import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExperienceCard from './ExperienceCard';

const baseProps = {
    companyLogoUrl: '/company.png',
    company: 'Oracle',
    role: 'Software Engineer Intern',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    location: 'Redwood City, CA',
    executiveSummary: 'Worked on cloud infrastructure features.',
    contributions: ['Delivered reliable platform work.', 'Collaborated with cross-functional teams.'],
};

describe('ExperienceCard', () => {
    it('renders the company experience details', () => {
        render(<ExperienceCard {...baseProps} />);

        expect(screen.getByRole('heading', { name: /oracle/i })).toBeInTheDocument();
        expect(screen.getByText(/software engineer intern/i)).toBeInTheDocument();
        expect(screen.getByText('Jun 2024 – Aug 2024')).toBeInTheDocument();
        expect(screen.getByText('Redwood City, CA')).toBeInTheDocument();
        expect(screen.getByText(/delivered reliable platform work/i)).toBeInTheDocument();
    });

    it('renders every contribution as a separate list item', () => {
        render(<ExperienceCard {...baseProps} />);

        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(baseProps.contributions.length);
    });

    it('renders no contribution list items when the list is empty', () => {
        render(<ExperienceCard {...baseProps} contributions={[]} />);

        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('uses the company name in the logo alt text', () => {
        render(<ExperienceCard {...baseProps} />);

        expect(screen.getByRole('img', { name: /oracle logo/i })).toHaveAttribute('src', baseProps.companyLogoUrl);
    });
});
