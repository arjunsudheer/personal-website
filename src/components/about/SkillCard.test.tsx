import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SkillCard from './SkillCard';

describe('SkillCard', () => {
    it('renders the category and each skill', () => {
        render(
            <SkillCard
                category="Programming Languages"
                skills={[
                    { skillName: 'Python', skillIcon: <span>py</span> },
                    { skillName: 'Java', skillIcon: <span>java</span> },
                ]}
            />
        );

        expect(screen.getByRole('heading', { name: /programming languages/i })).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('Java')).toBeInTheDocument();
    });

    it('renders no skill pills when the skills list is empty', () => {
        render(<SkillCard category="Empty Category" skills={[]} />);

        expect(screen.getByRole('heading', { name: /empty category/i })).toBeInTheDocument();
    });
});
