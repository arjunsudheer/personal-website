import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const SocialTile = ({ icon: Icon, text, link, colorClass }: { icon: any, text: string, link: string, colorClass: string }) => (
    <div 
        onClick={() => window.open(link)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-all cursor-pointer border border-transparent hover:border-blue-400 group"
    >
        <Icon className={`text-lg ${colorClass} group-hover:scale-110 transition-transform`} />
        <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">{text}</span>
    </div>
);

const QuickLinkButton = ({ label, targetId }: { label: string, targetId: string }) => (
    <button 
        onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
    >
        Check out my {label}
        <FaArrowRight size={14} />
    </button>
);

const AboutMe = () => {
    const socialLinks = {
        instagram: "https://www.instagram.com/arjun.sudheer.75/",
        linkedin: "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/",
        github: "https://github.com/arjunsudheer",
        googleScholar: "https://scholar.google.com/citations?user=3aoNkawAAAAJ&hl=en"
    };

    return (
        <section className="w-full min-h-screen flex items-center py-20 px-4 bg-white dark:bg-slate-900 transition-colors">
            <div className="w-[90%] md:w-[66%] mx-auto flex flex-col md:flex-row items-start gap-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="shrink-0 mx-auto md:mx-0"
                >
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                        <img 
                            src="/personal-website/assets/home/Arjun_Sudheer_Professional_Headshot.jpg"
                            alt="Arjun Sudheer" 
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                    </div>
                </motion.div>

                <div className="grow">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h1 className="text-5xl font-extrabold mb-4 dark:text-white">Hi, I'm Arjun</h1>
                        <div className="text-xl md:text-2xl h-10 mb-6 text-blue-600 dark:text-blue-400 font-mono font-bold">
                            <Typewriter 
                                options={{
                                    strings: [
                                        "Software Engineer",
                                        "AI Research Author",
                                        "Full-Stack Developer",
                                        "Cybersecurity Specialist",
                                        "Machine Learning Enthusiast"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    deleteSpeed: 25
                                }}
                            />
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            I'm a junior at San Jose State University studying software engineering. 
                            I am passionate about building secure, intelligent systems, ranging from 
                            full-stack web applications to advanced AI research involving RAG and 
                            generative models.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <SocialTile icon={FaLinkedin} text="LinkedIn" link={socialLinks.linkedin} colorClass="text-blue-700" />
                            <SocialTile icon={FaGithub} text="GitHub" link={socialLinks.github} colorClass="text-gray-900 dark:text-white" />
                            <SocialTile icon={FaGraduationCap} text="Google Scholar" link={socialLinks.googleScholar} colorClass="text-blue-500" />
                            <SocialTile icon={FaInstagramSquare} text="Instagram" link={socialLinks.instagram} colorClass="text-pink-500" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
                            <QuickLinkButton label="Experience" targetId="experience-section" />
                            <QuickLinkButton label="Research" targetId="research-section" />
                            <QuickLinkButton label="Projects" targetId="projects-section" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;