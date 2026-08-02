import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
    it('renders skills as a comma-separated list', () => {
        render(
            <ProjectCard
                title="Secure Agent Platform"
                description="A multi-agent system for incident response and evidence tracking."
                projectUrl="https://example.com"
                skills={["Python", "LangGraph", "GCP"]}
            />
        );

        expect(screen.getByText(/Python, LangGraph, GCP/i)).toBeInTheDocument();
    });
});
