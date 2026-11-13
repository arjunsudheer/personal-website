import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceItems = [
    {
        companyLogoUrl: "/personal-website/assets/experience/oracle_logo.jpg",
        company: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        startDate: "May 2026",
        endDate: "Aug 2026",
        location: "Santa Clara, CA",
        executiveSummary:
            "Built a custom agent harness for Oracle's Java Platform Group to evaluate open-source Java libraries, with error correction, evals, and agent loops. The harness improved reliability and enabled a 90% reduction in AI costs.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/cisco_logo.jpg",
        company: "Cisco",
        role: "Software Engineer Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        location: "San Jose, CA",
        executiveSummary:
            "Built an AI-powered compliance platform used by 100+ people across 400+ projects, and automated project updates to save the team time. Reduced downtime by adding automated tests and CI/CD, and implemented technical-spec retrieval with agents built using LangGraph.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/san_jose_state_university_logo.jpg",
        company: "San Jose State University",
        role: "Research Assistant",
        startDate: "Jun 2024",
        endDate: "Jul 2025",
        location: "San Jose, CA",
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
        location: "San Jose, CA",
        executiveSummary:
            "Built and deployed a Dockerized FastAPI URL shortener used by 500+ people. Added monitoring and a bounded cache to keep the service observable and efficient.",
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/codeninjas_logo.jpg",
        company: "Code Ninjas",
        role: "Code Sensei",
        startDate: "Jul 2021",
        endDate: "Aug 2023",
        location: "Cupertino, CA",
        executiveSummary:
            "Taught programming fundamentals to elementary and middle-school students through hands-on JavaScript, robotics, and game projects.",
    },
];

const ExperiencePage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
            </div>
            <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                {experienceItems.map((item) => (
                    <ExperienceCard
                        key={`${item.company}-${item.role}-${item.startDate}`}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperiencePage;
