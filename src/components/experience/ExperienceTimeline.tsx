const experienceItems = [
    {
        companyLogoUrl: "/personal-website/assets/experience/oracle_logo.jpg",
        company: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        startDate: "May 2026",
        endDate: "Aug 2026",
        executiveSummary:
            "Built a custom agent harness for Oracle's Java Platform Group to evaluate open-source Java libraries, with error correction, evals, and agent loops. The harness improved reliability and enabled a 90% reduction in AI costs.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/cisco_logo.jpg",
        company: "Cisco",
        role: "Software Engineer Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        executiveSummary:
            "Built an AI-powered compliance platform and reduced downtime by 98% with automated tests and CI/CD. Implemented technical-spec retrieval with LangGraph agents and automated project updates to save the team time.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/san_jose_state_university_logo.jpg",
        company: "San Jose State University",
        role: "Research Assistant",
        startDate: "Jun 2024",
        endDate: "Jul 2025",
        executiveSummary:
            "Published four peer-reviewed papers on LLM-driven cybersecurity and agentic AI. Developed approaches for malware detection and real-time, multi-agent intrusion detection and response.",
    },
    {
        companyLogoUrl:
            "/personal-website/assets/experience/charles_w_davidson_college_of_engineering_at_sjsu_logo.jpg",
        company: "San Jose State University",
        role: "Software Engineer Intern",
        startDate: "Jun 2024",
        endDate: "Aug 2024",
        executiveSummary:
            "Built and deployed a Dockerized FastAPI URL shortener used by 500+ people. Added monitoring and a bounded cache to keep the service observable and efficient.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/codeninjas_logo.jpg",
        company: "Code Ninjas",
        role: "Code Sensei",
        startDate: "Jul 2021",
        endDate: "Aug 2023",
        executiveSummary:
            "Taught programming fundamentals to elementary and middle-school students through hands-on JavaScript, robotics, and game projects.",
    },
];

const ExperienceTimeline = () => {
    return (
        <section
            aria-labelledby="experience-heading"
            className="space-y-6"
        >
            <h2
                id="experience-heading"
                className="text-3xl font-semibold tracking-tight"
            >
                Experience
            </h2>
            <ol className="relative before:absolute before:inset-y-0 before:left-[34%] before:w-px before:bg-[var(--border)] before:content-['']">
                {experienceItems.map((item) => (
                    <li
                        key={`${item.company}-${item.role}-${item.startDate}`}
                        className="grid grid-cols-[22%_24%_54%] items-center py-8 first:pt-0 last:pb-0"
                    >
                        <div className="flex justify-end">
                            <img
                                src={item.companyLogoUrl}
                                alt={`${item.company} logo`}
                                className="h-12 w-12 rounded-md border border-[var(--border)] bg-white object-cover p-1.5 sm:h-16 sm:w-16"
                            />
                        </div>
                        <div className="relative z-10 flex min-h-20 flex-col items-center justify-center gap-2 text-center">
                            <span
                                aria-hidden="true"
                                className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--nav-strong)]"
                            />
                            <p className="site-muted relative z-10 bg-[var(--page-background)] px-1 text-[10px] leading-4 sm:text-xs">
                                <span className="whitespace-nowrap">{item.startDate} –</span>{" "}
                                <span className="block whitespace-nowrap sm:inline">
                                    {item.endDate}
                                </span>
                            </p>
                        </div>
                        <article className="min-w-0 py-2">
                            <h3 className="text-lg font-semibold sm:text-xl">
                                {item.company}
                            </h3>
                            <p className="mt-1 text-sm font-medium">{item.role}</p>
                            <p className="site-muted mt-3 text-sm leading-6">
                                {item.executiveSummary}
                            </p>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default ExperienceTimeline;
