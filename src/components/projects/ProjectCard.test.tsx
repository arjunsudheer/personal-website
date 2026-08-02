import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
    it('renders the title, description, and link', () => {
        render(
            <ProjectCard
                title="Secure Agent Platform"
                description="A multi-agent system for incident response and evidence tracking."
                projectUrl="https://example.com"
                skills={['Python', 'LangGraph', 'GCP']}
            />
        );

        const link = screen.getByRole('link', { name: /secure agent platform/i });
        expect(link).toHaveAttribute('href', 'https://example.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
        expect(screen.getByText(/multi-agent system for incident response/i)).toBeInTheDocument();
    });

    it('renders skills as a comma-separated list', () => {
        render(
            <ProjectCard
                title="Secure Agent Platform"
                description="A multi-agent system for incident response and evidence tracking."
                projectUrl="https://example.com"
                skills={['Python', 'LangGraph', 'GCP']}
            />
        );

        expect(screen.getByText(/Python, LangGraph, GCP/i)).toBeInTheDocument();
    });

    it('omits the Skills line when no skills are provided', () => {
        render(
            <ProjectCard
                title="Untagged Project"
                description="A project without listed skills."
                projectUrl="https://example.com/untagged"
            />
        );

        expect(screen.queryByText(/Skills:/i)).not.toBeInTheDocument();
    });
});
