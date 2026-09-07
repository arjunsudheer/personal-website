export interface BlogPostMetadata {
    readonly slug: string;
    readonly title: string;
    readonly description: string;
    readonly readTime: string;
}

export const blogPosts: BlogPostMetadata[] = [
    {
        slug: "how-i-use-ai-to-code",
        title: "How I Use AI to Code",
        description: "A practical look at how I divide coding work between GitHub Copilot and Codex, and how skills, MCP servers, subagents, and AGENTS.md shape the workflow.",
        readTime: "5 min read",
    },
];
