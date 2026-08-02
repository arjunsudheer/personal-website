import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExperiencePage from './Experience';

describe('ExperiencePage', () => {
    it('renders the experience page content', () => {
        render(<ExperiencePage />);

        expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
        expect(screen.getByText(/cisco/i)).toBeInTheDocument();
        expect(screen.getByText(/oracle/i)).toBeInTheDocument();
    });
});
