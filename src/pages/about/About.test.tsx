import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutPage from './About';

describe('AboutPage', () => {
    it('renders the about page content', () => {
        render(<AboutPage />);

        expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /arjun sudheer/i })).toBeInTheDocument();
        expect(screen.getByText(/software engineer • ai\/ml • cloud/i)).toBeInTheDocument();
    });

    it('renders each skill category exactly once', () => {
        render(<AboutPage />);

        const categories = [
            'Programming Languages',
            'Backend & Web Development',
            'AI & Agents',
            'Cloud & DevOps',
            'Databases',
            'Software Engineering',
        ];

        for (const category of categories) {
            expect(screen.getAllByRole('heading', { name: new RegExp(category, 'i') })).toHaveLength(1);
        }
    });

    it('links out to every social profile', () => {
        render(<AboutPage />);

        for (const name of ['LinkedIn', 'GitHub', 'Google Scholar', 'Instagram', 'Email']) {
            expect(screen.getByRole('link', { name })).toBeInTheDocument();
        }
    });
});
