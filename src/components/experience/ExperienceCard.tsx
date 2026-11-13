interface ExperienceCardProps {
    readonly companyLogoUrl: string;
    readonly company: string;
    readonly role: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly location: string;
    readonly executiveSummary: string;
}

const ExperienceCard = ({
    companyLogoUrl,
    company,
    role,
    startDate,
    endDate,
    location,
    executiveSummary,
}: ExperienceCardProps) => {
    return (
        <article className="site-card w-full p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch">
                <div className="flex shrink-0 items-center">
                    <img
                        src={companyLogoUrl}
                        alt={`${company} logo`}
                        className="h-20 w-20 rounded-sm border border-[var(--border)] bg-white object-cover p-1.5"
                    />
                </div>
                <div className="hidden w-px bg-[var(--border)] sm:block" />
                <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="min-w-0 flex-1 text-xl font-semibold">
                            {company}
                        </h2>
                        <p className="site-muted text-xs">
                            {startDate} – {endDate}
                        </p>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-medium">{role}</h3>
                        <p className="site-muted text-sm">{location}</p>
                    </div>
                    <p className="mt-5 text-sm leading-7">{executiveSummary}</p>
                </div>
            </div>
        </article>
    );
};

export default ExperienceCard;
