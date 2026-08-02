import { FaAws, FaBrain, FaDatabase, FaDiagramProject, FaEnvelope, FaGithub, FaGoogleScholar, FaInstagram, FaJava, FaLinkedin } from "react-icons/fa6";
import { SiC, SiCplusplus, SiCss, SiDocker, SiFastapi, SiFlask, SiGithubactions, SiGit, SiGnubash, SiGooglecloud, SiHtml5, SiJavascript, SiLangchain, SiLinux, SiMysql, SiPostgresql, SiPostman, SiPrometheus, SiPython, SiPytorch, SiReact, SiScrumalliance, SiSpringboot, SiTailwindcss, SiTestinglibrary, SiTypescript, SiUml, SiNginx } from "react-icons/si";
import AboutCard from "../../components/about/AboutCard";
import DescriptionCard from "../../components/about/DescriptionCard";
import SkillCard from "../../components/about/SkillCard";

const skillGroups = [
    {
        category: "Programming Languages",
        skills: [
            { skillName: "Python", skillIcon: <SiPython /> },
            { skillName: "Java", skillIcon: <FaJava /> },
            { skillName: "JavaScript", skillIcon: <SiJavascript /> },
            { skillName: "TypeScript", skillIcon: <SiTypescript /> },
            { skillName: "C", skillIcon: <SiC /> },
            { skillName: "C++", skillIcon: <SiCplusplus /> },
            { skillName: "Bash", skillIcon: <SiGnubash /> },
        ],
    },
    {
        category: "Backend & Web Development",
        skills: [
            { skillName: "Spring Boot", skillIcon: <SiSpringboot /> },
            { skillName: "FastAPI", skillIcon: <SiFastapi /> },
            { skillName: "Flask", skillIcon: <SiFlask /> },
            { skillName: "REST API", skillIcon: <SiFlask /> },
            { skillName: "Node.js", skillIcon: <SiReact /> },
            { skillName: "Next.js", skillIcon: <SiReact /> },
            { skillName: "React.js", skillIcon: <SiReact /> },
            { skillName: "HTML", skillIcon: <SiHtml5 /> },
            { skillName: "CSS", skillIcon: <SiCss /> },
            { skillName: "Tailwind CSS", skillIcon: <SiTailwindcss /> },
        ],
    },
    {
        category: "AI & Agents",
        skills: [
            { skillName: "LLMs", skillIcon: <FaBrain /> },
            { skillName: "LangChain", skillIcon: <SiLangchain /> },
            { skillName: "LangGraph", skillIcon: <SiLangchain /> },
            { skillName: "OpenAI API", skillIcon: <SiLangchain /> },
            { skillName: "RAG", skillIcon: <SiLangchain /> },
            { skillName: "MCP", skillIcon: <SiLangchain /> },
            { skillName: "Evals", skillIcon: <SiLangchain /> },
            { skillName: "Machine Learning", skillIcon: <SiLangchain /> },
            { skillName: "PyTorch", skillIcon: <SiPytorch /> },
        ]
    },

    {
        category: "Cloud & DevOps",
        skills: [
            { skillName: "Linux", skillIcon: <SiLinux /> },
            { skillName: "Docker", skillIcon: <SiDocker /> },
            { skillName: "Git", skillIcon: <SiGit /> },
            { skillName: "GitHub Actions", skillIcon: <SiGit /> },
            { skillName: "GCP", skillIcon: <SiGooglecloud /> },
            { skillName: "AWS", skillIcon: <FaAws /> },
            { skillName: "Nginx", skillIcon: <SiNginx /> },
            { skillName: "OpenTelemetry", skillIcon: <SiGit /> },
            { skillName: "Prometheus", skillIcon: <SiPrometheus /> },
            { skillName: "Postman", skillIcon: <SiPostman /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { skillName: "SQL", skillIcon: <SiMysql /> },
            { skillName: "MySQL", skillIcon: <SiMysql /> },
            { skillName: "PostgreSQL", skillIcon: <SiPostgresql /> },
            { skillName: "SQLite", skillIcon: <SiMysql /> },
            { skillName: "MongoDB", skillIcon: <SiMysql /> },
            { skillName: "FAISS", skillIcon: <FaDatabase /> },
            { skillName: "ChromaDB", skillIcon: <FaDatabase /> },
        ],
    },
    {
        category: "Software Engineering",
        skills: [
            { skillName: "CI/CD", skillIcon: <SiGithubactions /> },
            { skillName: "Test-Driven Development", skillIcon: <SiTestinglibrary /> },
            { skillName: "UML", skillIcon: <SiUml /> },
            { skillName: "Object-Oriented Programming", skillIcon: <FaDiagramProject /> },
            { skillName: "Agile/Scrum", skillIcon: <SiScrumalliance /> },
        ],
    },
];

const AboutPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-sky-200 sm:text-5xl">About</h1>
            </div>

            <div className="grid items-stretch gap-5 lg:grid-cols-2">
                <AboutCard
                    profileImageUrl="/personal-website/assets/about/Arjun_Sudheer_Professional_Headshot.jpg"
                    name="Arjun Sudheer"
                    headline="Software Engineer • AI/ML • Cloud"
                    university="San José State University"
                    graduationDate="B.S. Software Engineering"
                    location="Cupertino, CA"
                />

                <DescriptionCard
                    description="I’m a software engineer focused on building reliable AI-powered systems and cloud-native applications. My work spans Python, Java, full-stack development, agentic workflows, and applied machine learning with a strong emphasis on dependable software engineering practices. I enjoy turning complex problems into practical products and collaborating across engineering, research, and product teams."
                    socialProfiles={[
                        { profileName: "LinkedIn", profileIcon: <FaLinkedin />, profileLink: "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/" },
                        { profileName: "GitHub", profileIcon: <FaGithub />, profileLink: "https://github.com/arjunsudheer" },
                        { profileName: "Google Scholar", profileIcon: <FaGoogleScholar />, profileLink: "https://scholar.google.com/citations?hl=en&user=3aoNkawAAAAJ" },
                        { profileName: "Instagram", profileIcon: <FaInstagram />, profileLink: "https://www.instagram.com/arjun.sudheer.75/" },
                        { profileName: "Email", profileIcon: <FaEnvelope />, profileLink: "mailto:arjunsudheer05@outlook.com" },
                    ]}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                    <SkillCard key={group.category} category={group.category} skills={group.skills} />
                ))}
            </div>
        </section>
    );
};

export default AboutPage;
