import {
    FaGithub,
    FaGoogleScholar,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";
import AboutCard from "../../components/about/AboutCard";
import DescriptionCard from "../../components/about/DescriptionCard";

const AboutPage = () => {
    return (
        <section className="grid items-center gap-8 md:grid-cols-[minmax(12rem,1fr)_2fr] md:gap-12">
            <AboutCard
                profileImageUrl="/personal-website/assets/about/Arjun_Sudheer_Professional_Headshot.jpg"
                name="Arjun Sudheer"
            />
            <div>
                <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Arjun Sudheer
                </h1>
                <DescriptionCard
                    description="Hi, I'm Arjun. I am currently pursuing a Bachelor of Science in Software Engineering at San Jose State University, with an expected graduation in May 2027. I am interested in new-grad SWE roles focused on building full-stack and agentic-AI applications. From my research work and internships at Cisco and Oracle, I have gained proficiency in Python, Java, and agentic AI development, with a strong academic foundation and hands-on experience in cybersecurity, AI/ML, and web application development. Outside of work, I enjoy playing basketball, pickleball, and going on hikes."
                    socialProfiles={[
                        {
                            profileName: "LinkedIn",
                            profileIcon: <FaLinkedin />,
                            profileLink: "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/",
                        },
                        {
                            profileName: "GitHub",
                            profileIcon: <FaGithub />,
                            profileLink: "https://github.com/arjunsudheer",
                        },
                        {
                            profileName: "Google Scholar",
                            profileIcon: <FaGoogleScholar />,
                            profileLink:
                                "https://scholar.google.com/citations?hl=en&user=3aoNkawAAAAJ",
                        },
                        {
                            profileName: "Instagram",
                            profileIcon: <FaInstagram />,
                            profileLink: "https://www.instagram.com/arjun.sudheer.75/",
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default AboutPage;
