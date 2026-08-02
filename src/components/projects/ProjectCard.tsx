interface ProjectCardProps {
    readonly title: string;
    readonly description: string;
    readonly projectUrl: string;
    readonly skills?: string[];
}

const ProjectCard = ({ title, description, projectUrl, skills = [] }: ProjectCardProps) => {
    const skillsText = skills.join(", ");

    return (
        <a href={projectUrl} target="_blank" rel="noreferrer" className="group block w-full rounded-[1.75rem] border border-white/20 bg-slate-950/25 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                    <div>
                        <h2 className="text-xl font-semibold text-white">{title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
                    </div>
                </div>
            </div>
            {skills.length > 0 && (
                <p className="mt-5 text-sm text-slate-300">
                    <span className="font-medium text-slate-100">Skills:</span> {skillsText}
                </p>
            )}
            <p className="mt-5 break-all text-sm font-medium text-sky-400 underline decoration-sky-400/60 underline-offset-4 transition group-hover:text-sky-300">{projectUrl}</p>
        </a>
    );
};

export default ProjectCard;