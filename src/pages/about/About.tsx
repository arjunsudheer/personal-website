import { FaAws, FaBrain, FaChartLine, FaDatabase, FaDiagramProject, FaEnvelope, FaGithub, FaGoogleScholar, FaInstagram, FaJava, FaLinkedin } from "react-icons/fa6";
import { SiAndroid, SiAndroidstudio, SiC, SiCplusplus, SiCss, SiDocker, SiFastapi, SiFirebase, SiFlask, SiGithubactions, SiGit, SiGnubash, SiGooglecloud, SiHtml5, SiJavascript, SiKotlin, SiLangchain, SiLinux, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPostman, SiPrometheus, SiPython, SiPytorch, SiQdrant, SiReact, SiScikitlearn, SiScrumalliance, SiSpringboot, SiTailwindcss, SiTensorflow, SiTestinglibrary, SiTypescript, SiUml } from "react-icons/si";
import AboutCard from "../../components/about/AboutCard";
import DescriptionCard from "../../components/about/DescriptionCard";
import SkillCard from "../../components/about/SkillCard";

const skillGroups = [
    {
        category: "Programming Languages",
        skills: [
            { skillName: "Python", skillIcon: <SiPython /> },
            { skillName: "Java", skillIcon: <FaJava /> },
            { skillName: "TypeScript", skillIcon: <SiTypescript /> },
            { skillName: "JavaScript", skillIcon: <SiJavascript /> },
            { skillName: "C", skillIcon: <SiC /> },
            { skillName: "C++", skillIcon: <SiCplusplus /> },
            { skillName: "Bash", skillIcon: <SiGnubash /> },
        ],
    },
    {
        category: "Machine Learning/AI",
        skills: [
            { skillName: "PyTorch", skillIcon: <SiPytorch /> },
            { skillName: "TensorFlow", skillIcon: <SiTensorflow /> },
            { skillName: "Scikit-learn", skillIcon: <SiScikitlearn /> },
            { skillName: "Seaborn", skillIcon: <FaChartLine /> },
            { skillName: "Matplotlib", skillIcon: <FaChartLine /> },
            { skillName: "NumPy", skillIcon: <SiNumpy /> },
            { skillName: "Pandas", skillIcon: <SiPandas /> },
            { skillName: "LangChain", skillIcon: <SiLangchain /> },
            { skillName: "LLMs", skillIcon: <FaBrain /> },
        ],
    },
    {
        category: "Web & App Development",
        skills: [
            { skillName: "React", skillIcon: <SiReact /> },
            { skillName: "Spring Boot", skillIcon: <SiSpringboot /> },
            { skillName: "Flask", skillIcon: <SiFlask /> },
            { skillName: "FastAPI", skillIcon: <SiFastapi /> },
            { skillName: "HTML", skillIcon: <SiHtml5 /> },
            { skillName: "CSS", skillIcon: <SiCss /> },
            { skillName: "Tailwind CSS", skillIcon: <SiTailwindcss /> },
            { skillName: "Kotlin", skillIcon: <SiKotlin /> },
            { skillName: "Android", skillIcon: <SiAndroid /> },
        ],
    },
    {
        category: "Tools & Technologies",
        skills: [
            { skillName: "Git", skillIcon: <SiGit /> },
            { skillName: "Docker", skillIcon: <SiDocker /> },
            { skillName: "Prometheus", skillIcon: <SiPrometheus /> },
            { skillName: "Postman", skillIcon: <SiPostman /> },
            { skillName: "Linux", skillIcon: <SiLinux /> },
            { skillName: "AWS", skillIcon: <FaAws /> },
            { skillName: "GCP", skillIcon: <SiGooglecloud /> },
            { skillName: "Android Studio", skillIcon: <SiAndroidstudio /> },
        ],
    },
    {
        category: "Database",
        skills: [
            { skillName: "MySQL", skillIcon: <SiMysql /> },
            { skillName: "PostgreSQL", skillIcon: <SiPostgresql /> },
            { skillName: "Firebase", skillIcon: <SiFirebase /> },
            { skillName: "FAISS", skillIcon: <FaDatabase /> },
            { skillName: "ChromaDB", skillIcon: <FaDatabase /> },
            { skillName: "Qdrant", skillIcon: <SiQdrant /> },
        ],
    },
    {
        category: "Software Engineering",
        skills: [
            { skillName: "Agile/Scrum", skillIcon: <SiScrumalliance /> },
            { skillName: "Test-Drive Development", skillIcon: <SiTestinglibrary /> },
            { skillName: "CI/CD", skillIcon: <SiGithubactions /> },
            { skillName: "UML", skillIcon: <SiUml /> },
            { skillName: "Object-Oriented Programming", skillIcon: <FaDiagramProject /> },
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
                    headline="SWE Intern @ Oracle • Prev @ Cisco"
                    university="San José State University"
                    graduationDate="B.S. Software Engineering"
                    location="Cupertino, CA"
                />

                <DescriptionCard
                    description="I'm a Software Engineer Intern at Oracle, where I work on the Java Platform Group within Oracle Cloud Infrastructure (OCI). I'm currently studying Software Engineering at San Jose State University and expect to graduate in May 2027. I enjoy building things that are practical, reliable, and innovative. My experience spans Python, Java, agentic AI development, cybersecurity, AI/ML, and web application development. I enjoy collaborating with others to turn ideas into real solutions and am always looking for ways to push technology forward."
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
