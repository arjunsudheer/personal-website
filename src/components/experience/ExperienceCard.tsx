interface ExperienceCardProps {
    readonly companyLogoUrl: string;
    readonly company: string;
    readonly role: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly location: string;
    readonly executiveSummary: string;
    readonly contributions: string[];
}

const ExperienceCard = ({ companyLogoUrl, company, role, startDate, endDate, location, executiveSummary, contributions }: ExperienceCardProps) => {
    return (
        <article className="w-full rounded-[1.75rem] border border-white/20 bg-slate-950/25 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch">
                <div className="flex shrink-0 items-center">
                    <img src={companyLogoUrl} alt={`${company} logo`} className="h-20 w-20 rounded-2xl border border-white/20 bg-white object-cover p-1.5 shadow-lg shadow-slate-950/20" />
                </div>
                <div className="hidden w-px rounded-full bg-white/20 sm:block" />
                <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="flex-1 min-w-0 text-xl font-semibold text-white">{company}</h2>
                        <p className="rounded-full border border-white/10 bg-slate-950/20 px-3 py-1 text-xs text-slate-200">{startDate} – {endDate}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-medium text-cyan-200">{role}</h3>
                        <p className="text-sm text-slate-400">{location}</p>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-200">{executiveSummary}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                        {contributions.map((contribution) => (
                            <li key={contribution}>{contribution}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default ExperienceCard;
