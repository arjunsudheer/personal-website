export interface ExperienceItem {
    readonly company: string;
    readonly role: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly companyLogo: string;
    readonly summary: string;
}

export interface Project {
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly skills: readonly string[];
}

export interface Publication {
    readonly title: string;
    readonly publishedIn: string;
    readonly abstract: string;
    readonly url: string;
}

export interface SocialProfile {
    readonly name: string;
    readonly url: string;
    readonly icon: "linkedin" | "github" | "scholar" | "instagram";
}

export const profileDescription =
    "Hi, I'm Arjun. I am currently pursuing a Bachelor of Science in Software Engineering at San Jose State University, with an expected graduation in May 2027. I am interested in new-grad SWE roles focused on building full-stack and agentic-AI applications. From my research work and internships at Cisco and Oracle, I have gained proficiency in Python, Java, and agentic AI development, with a strong academic foundation and hands-on experience in cybersecurity, AI/ML, and web application development. Outside of work, I enjoy playing basketball, pickleball, and going on hikes.";

export const socialProfiles: readonly SocialProfile[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/",
        icon: "linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/arjunsudheer",
        icon: "github",
    },
    {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=en&user=3aoNkawAAAAJ",
        icon: "scholar",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/arjun.sudheer.75/",
        icon: "instagram",
    },
];

export const experienceItems: readonly ExperienceItem[] = [
    {
        company: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        startDate: "May 2026",
        endDate: "Aug 2026",
        companyLogo: "oracle_logo.jpg",
        summary:
            "Built a custom agent harness for Oracle's Java Platform Group to evaluate open-source Java libraries, with error correction, evals, and agent loops. The harness improved reliability and enabled a 90% reduction in AI costs.",
    },
    {
        company: "Cisco",
        role: "Software Engineer Intern",
        startDate: "Jul 2025",
        endDate: "Dec 2025",
        companyLogo: "cisco_logo.jpg",
        summary:
            "Built an AI-powered compliance platform and reduced downtime by 98% with automated tests and CI/CD. Implemented technical-spec retrieval with LangGraph agents and automated project updates to save the team time.",
    },
    {
        company: "San Jose State University",
        role: "Research Assistant",
        startDate: "Jun 2024",
        endDate: "Jul 2025",
        companyLogo: "san_jose_state_university_logo.jpg",
        summary:
            "Published four peer-reviewed papers on LLM-driven cybersecurity and agentic AI. Developed approaches for malware detection and real-time, multi-agent intrusion detection and response.",
    },
    {
        company: "San Jose State University",
        role: "Software Engineer Intern",
        startDate: "Jun 2024",
        endDate: "Aug 2024",
        companyLogo: "charles_w_davidson_college_of_engineering_at_sjsu_logo.jpg",
        summary:
            "Built and deployed a Dockerized FastAPI URL shortener used by 500+ people. Added monitoring and a bounded cache to keep the service observable and efficient.",
    },
    {
        company: "Code Ninjas",
        role: "Code Sensei",
        startDate: "Jul 2021",
        endDate: "Aug 2023",
        companyLogo: "codeninjas_logo.jpg",
        summary:
            "Taught programming fundamentals to elementary and middle-school students through hands-on JavaScript, robotics, and game projects.",
    },
];

export const projects: readonly Project[] = [
    {
        title: "GymBuddy",
        description:
            "GymBuddy is an Android app I developed to help users track their gym workouts and progress. I used Kotlin and Jetpack Compose to build a responsive UI and Room API for local data storage.",
        url: "https://github.com/arjunsudheer/gym-buddy",
        skills: ["Kotlin", "Jetpack Compose", "Room API"],
    },
    {
        title: "Cornhole Referee",
        description:
            "Cornhole Referee is a computer vision project that tracks bean bags in real time to score cornhole games. I trained a YOLOv8 model, achieving 98% precision and 98.4% mAP@50, to detect game elements and used Roboflow's Supervision library to assign points via PolygonZones. I collected and annotated data using OpenCV, applied image augmentations, and documented the project with Sphinx using Google-style docstrings.",
        url: "https://github.com/arjunsudheer/cornhole-referee",
        skills: ["Python", "OpenCV", "Yolov8", "Roboflow", "Sphinx"],
    },
];

export const publications: readonly Publication[] = [
    {
        title: "Least Significant Bit Steganography Detection and Analysis Using Large Language Models for Digital Forensics",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2026",
        abstract:
            "We present an LLM-driven system to detect least-significant-bit steganography, extract hidden payloads, and interpret their meaning and possible intent. Using retrieval-augmented generation, our system connects findings with relevant vulnerabilities, research, and threat intelligence. It then generates structured forensic reports to support investigators.",
        url: "https://ieeexplore.ieee.org/document/11642309",
    },
    {
        title: "An LLM-Based Agentic Network Traffic Incident-Report Approach Towards Explainable-AI Network Defense",
        publishedIn: "Journal of Sensor and Actuator Networks 2026",
        abstract:
            "We introduce a three-stage system that combines lightweight edge detection, an explainable ensemble classifier, and an LLM agent for evidence-based incident reporting. On the ACI IoT 2023 dataset, our ensemble achieves over 99.8% accuracy across 11 attack classes and improves UDP Flood F1 from 48% to 95%. We also introduce metrics to evaluate report faithfulness and groundedness; our generated reports score 0.64 and 1.0, respectively.",
        url: "https://www.mdpi.com/2224-2708/15/2/32",
    },
    {
        title: "Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2025",
        abstract:
            "We demonstrate a real-time multi-agent system that processes network traffic, detects attacks, and selects response actions. Our system uses retrieval-augmented generation to ground recommendations in vulnerability databases such as CVE. In our demonstration, it detects network attacks accurately while processing traffic at speeds suited to high-volume environments.",
        url: "https://ieeexplore.ieee.org/abstract/document/11133641",
    },
    {
        title: "Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2025",
        abstract:
            "We propose a system that uses WGAN-GP and diffusion models to generate synthetic malware images, addressing limited training data for malware detection. We represent malware binaries in four color spaces and use cosine similarity to filter generated samples. Our experiments show that these synthetic images improve malware detection performance.",
        url: "https://ieeexplore.ieee.org/abstract/document/11133622",
    },
];
