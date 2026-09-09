import ExperienceCard from "../../components/experience/ExperienceCard";

const experienceItems = [
    {
        companyLogoUrl: "/personal-website/assets/experience/oracle_logo.jpg",
        company: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        startDate: "May 2026",
        endDate: "Aug 2026",
        location: "Santa Clara, CA",
        executiveSummary: "Worked in the Java Platform Group, that develops the JDK, to create a multi-agent analysis and evaluation system for evaluating open-source Java libraries.",
        contributions: [
            "Worked in Oracle Cloud Infrastructure's (OCI) Java Platform Group, which develops the JDK, to build a Codex skill that analyzes the development practices of open-source Java libraries and evaluates the effectiveness of their release models",
            "Developed a Spring Boot-based state machine coordinator on Java 26 that orchestrated recursive dependency analysis and ensured robustness against network instability and data formatting errors",
            "Implemented OpenTelemetry-traced LLM judges in self-improving agent loops, boosting eval pass rate by 17%",
            "Optimized agent harness with guardrails and prompt tuning, enabling smaller models and cutting AI costs by 90%"
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/cisco_logo.jpg",
        company: "Cisco",
        role: "Software Engineer Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        location: "San Jose, CA",
        executiveSummary: "Built a full-stack AI-powered compliance tracking platform supporting 400+ projects and 100+ users.",
        contributions: [
            "Built a full-stack web app using Python, MySQL, JavaScript tracking 400+ compliance projects for 100+ users",
            "Deployed GitHub Actions CI/CD, Playwright tests, Nginx reverse proxy, and watchdogs, cutting downtime by 98%",
            "Automated project updates using LangGraph AI agents, and OpenAI API, saving 5+ team hours weekly",
            "Added RAG on Google Cloud documents and database tool calls for live project data, reducing hallucinations",
        ],
    },
    {
        companyLogoUrl: "/personal-website/assets/experience/san_jose_state_university_logo.jpg",
        company: "San Jose State University",
        role: "Research Assistant",
        startDate: "Jun 2024",
        endDate: "Jul 2025",
        location: "San Jose, CA",
        executiveSummary: "Published 3 peer-reviewed papers on LLM-driven cybersecurity systems and generative-model-based malware detection",
        contributions: [
            "Published 4 peer-reviewed papers on LLM-driven cybersecurity and agentic AI systems (IEEE x3, JSAN)",
            "Trained a PyTorch diffusion model generating malware images, improving zero-day detection by 15%",
            "Built a real-time multi-agent intrusion detection and incident response system for live network traffic",
            "Designed an ensemble detection and LLM-judge pipeline achieving 99%+ accuracy and 1.0 groundedness",
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
            "Created a FastAPI and SQLite URL shortener with REST API mapping URLs to QR codes, serving 500+ users",
            "Containerized the service with Docker and validated endpoints using Postman",
            "Added Prometheus metrics to monitor QR code volume and byte size for performance tracking",
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
