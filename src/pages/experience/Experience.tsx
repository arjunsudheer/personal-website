import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceItems = [
    {
        companyLogoUrl: "/personal-website/assets/experience/oracle_logo.jpg",
        company: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        startDate: "May 2026",
        endDate: "Aug 2026",
        location: "Santa Clara, CA",
        executiveSummary: "Worked in Oracle Cloud Infrastructure's (OCI) Java Platform Group, which develops the JDK, to create a multi-agent analysis and evaluation system for evaluating open-source Java libraries.",
        contributions: [
            "Built a Codex skill for the JDK’s Java Platform Group to standardize the scoring of open-source Java libraries’ development practices and release models",
            "Improved run success rate by 33% by developing a fault-tolerant Java 26 Spring Boot coordinator with retry logic for dependency resolution",
            "Implemented OpenTelemetry-traced LLM judges in self-improving agent loops, boosting eval pass rate by 17%",
            "Optimized agent harness with guardrails and prompt tuning, enabling smaller models and a 90% AI cost reduction"
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/cisco_logo.jpg",
        company: "Cisco",
        role: "Software Engineer Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        location: "San Jose, CA",
        executiveSummary: "Built a full‑stack AI‑powered compliance tracking platform supporting 400+ projects and 100+ users.",
        contributions: [
            "Tracked 400+ compliance projects across 100+ active users by engineering a full-stack web application using Python, MySQL, and JavaScript",
            "Deployed GitHub Actions CI/CD, Playwright tests, Nginx reverse proxy, and watchdogs on Linux, cutting downtime by 98%",
            "Saved 5+ team hours weekly by automating project updates using LangGraph AI agents and OpenAI API",
            "Improved technical-spec retrieval accuracy from 30% to 70% for failure root-cause analysis by replacing intranet search with a custom RAG pipeline on PRDs stored in Google Cloud",
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/san_jose_state_university_logo.jpg",
        company: "San Jose State University",
        role: "Research Assistant",
        startDate: "Jun 2024",
        endDate: "Jul 2025",
        location: "San Jose, CA",
        executiveSummary: "Published 4 peer-reviewed papers on LLM-driven cybersecurity systems and generative-model-based malware detection.",
        contributions: [
            "Published 4 peer-reviewed papers on LLM-driven cybersecurity and agentic AI systems (IEEE x3, JSAN)",
            "Trained a PyTorch diffusion model generating malware images, improving zero-day detection by 15%",
            "Architected a real-time, multi-agent intrusion detection and incident response system for live network traffic, achieving a 98.1% classifier F1 score and 93.2% faithfulness",
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/charles_w_davidson_college_of_engineering_at_sjsu_logo.jpg",
        company: "San Jose State University",
        role: "Software Engineer Intern",
        startDate: "Jun 2024",
        endDate: "Aug 2024",
        location: "San Jose, CA",
        executiveSummary: "Built a production-ready FastAPI URL shortener serving 500+ users with Dockerized deployment and observability.",
        contributions: [
            "Created a FastAPI and SQLite URL shortener with REST API mapping URLs to QR codes for 500+ users, containerizing the service with Docker and validating endpoints with Postman",
            "Bounded cache memory with Prometheus metrics and a 100-entry FIFO eviction policy for short-lived QR codes",
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/codeninjas_logo.jpg",
        company: "Code Ninjas",
        role: "Code Sensei",
        startDate: "Jul 2021",
        endDate: "Aug 2023",
        location: "Cupertino, CA",
        executiveSummary: "Taught programming fundamentals through hands-on projects in JavaScript, robotics, and game-based learning for young students.",
        contributions: [
            "Led engaging classes on JavaScript fundamentals and programming concepts for elementary and middle-school learners",
            "Designed structured lessons that improved student confidence, curiosity, and technical understanding"
        ],
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
                    <ExperienceCard key={`${item.company}-${item.role}-${item.startDate}`} {...item} />
                ))}
            </div>
        </section>
    );
};

export default ExperiencePage;
