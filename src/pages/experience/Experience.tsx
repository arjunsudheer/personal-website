import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceItems = [
    {
        companyLogoUrl: "/personal-website/assets/experience/cisco_logo.jpg",
        company: "Cisco",
        role: "Software Engineering Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        location: "San José, CA",
        executiveSummary: "Built a full-stack AI-powered compliance tracking platform supporting 400+ projects and 100+ users.",
        contributions: [
            "Developed a full-stack web app using Flask, MySQL, JavaScript, and Nginx for secure, scalable deployment",
            "Automated project updates using AI agents (LangGraph + OpenAI), saving the team 5+ hours/week",
            "Integrated a GCP-powered RAG pipeline, reducing hallucinations by 70%",
            "Implemented CI/CD with Playwright + GitHub Actions, cutting deployment downtime by 80%",
            "Improved team workflows using REST APIs and Agile development practices"
        ],
        topSkills: ["Python", "Google Cloud Platform", "CI/CD", "Playwright"],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/codeninjas_logo.jpg",
        company: "Code Ninjas",
        role: "Code Sensei",
        startDate: "Jul 2021",
        endDate: "Aug 2023",
        location: "San José, CA",
        executiveSummary: "Taught programming fundamentals through hands-on projects in JavaScript and robotics.",
        contributions: [
            "Led classes teaching JavaScript fundamentals and game-based programming concepts to elementary and middle-school students",
            "Designed and delivered structured lessons that improved student engagement and technical confidence"
        ],
        topSkills: ["FastAPI", "Docker", "SQLite", "Prometheus"],
    },
];

const ExperiencePage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-sky-200 sm:text-5xl">Experience</h1>
            </div>
            <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                {experienceItems.map((item) => (
                    <ExperienceCard key={item.company} {...item} />
                ))}
            </div>
        </section>
    );
};

export default ExperiencePage;
