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
});
