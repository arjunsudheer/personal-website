import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExperiencePage from './Experience';

describe('ExperiencePage', () => {
    it('renders every employer once, in reverse-chronological order', () => {
        render(<ExperiencePage />);

        expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();

        const headings = screen.getAllByRole('heading', { level: 2 }).map((el) => el.textContent);
        expect(headings).toEqual([
            'Oracle Cloud Infrastructure',
            'Cisco',
            'San Jose State University',
            'San Jose State University',
            'Code Ninjas',
        ]);
    });

    it('does not duplicate date ranges across the two San Jose State University roles', () => {
        render(<ExperiencePage />);

        expect(screen.getByText('Jun 2024 – Jul 2025')).toBeInTheDocument();
        expect(screen.getByText('Jun 2024 – Aug 2024')).toBeInTheDocument();
    });
});
