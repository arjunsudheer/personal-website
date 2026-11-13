interface ProjectCardProps {
    readonly title: string;
    readonly description: string;
    readonly projectUrl: string;
    readonly skills?: string[];
}

const ProjectCard = ({ title, description, projectUrl, skills = [] }: ProjectCardProps) => {
    const skillsText = skills.join(", ");

    return (
        <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="site-card block w-full p-5 sm:p-7"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                    <div>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="mt-3 text-sm leading-7">{description}</p>
                    </div>
                </div>
            </div>
            {skills.length > 0 && (
                <p className="site-muted mt-5 text-sm">
                    <span className="font-medium text-[var(--text)]">Skills:</span> {skillsText}
                </p>
            )}
            <p className="site-link mt-5 break-all text-sm font-medium underline underline-offset-4">
                {projectUrl}
            </p>
        </a>
    );
};

export default ProjectCard;
