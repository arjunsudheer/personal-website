import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExperienceCard from './ExperienceCard';

describe('ExperienceCard', () => {
    it('renders the company experience details', () => {
        render(
            <ExperienceCard
                companyLogoUrl="/company.png"
                company="Oracle"
                role="Software Engineer Intern"
                startDate="Jun 2024"
                endDate="Aug 2024"
                location="Redwood City, CA"
                executiveSummary="Worked on cloud infrastructure features."
                contributions={["Delivered reliable platform work.", "Collaborated with cross-functional teams."]}
            />
        );

        expect(screen.getByRole('heading', { name: /oracle/i })).toBeInTheDocument();
        expect(screen.getByText(/software engineer intern/i)).toBeInTheDocument();
        expect(screen.getByText(/delivered reliable platform work/i)).toBeInTheDocument();
    });
});
