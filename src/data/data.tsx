export interface InfoCardData {
    title: string;
    description: string;
    topSkills?: string[];
    urls?: { name: string; url: string }[];
    imgSrc?: string;
}

export interface SectionConfig {
    id: string;
    title: string;
    data: InfoCardData[];
}

export const EXPERIENCE_DATA: InfoCardData[] = [
    {
        title: 'Cisco Software Engineering Co-Op',
        description: "I built a full-stack web application for the Cisco hardware compliance team, which tracks over 400 active projects across more than 100 users. I utilized Python Flask, MySQL, and JavaScript, with Nginx serving as a reverse proxy to enhance security and scalability. I automated project updates using AI agents, LangGraph, and the OpenAI API, saving the team over 50 hours each week. To boost reliability, I integrated a RAG workflow powered by Google Cloud Platform, reducing hallucinations by 70%. I also implemented a CI/CD pipeline with Playwright and GitHub Actions, cutting deployment‑related downtime by 80%.",
        topSkills: ["Python", "JavaScript", "MySQL", "Nginx", "CI/CD", "GCP", "LangGraph", "OpenAI API"],
        imgSrc: '/personal-website/assets/experience/Cisco_Co-Op.png'
    },
    {
        title: 'SCE Software Engineering Internship',
        description: "Developed FastAPI-based (Python) URL shortener with SQLite and Docker, serving 500+ users. Implemented RESTful endpoints for URL storage and retrieval, with QR code redirection via PyQRCode. Added Prometheus metrics to monitor QR code volume and byte size for performance tracking.",
        topSkills: ["Python", "FastAPI", "SQLite", "Docker", "Prometheus"],
        imgSrc: '/personal-website/assets/experience/SCE_SJSU_Logo.jpg',
        urls: [{ name: "GitHub", url: "https://github.com/SCE-Development/cleezy/commits/dev/?author=arjunsudheer" }]
    }
];

export const RESEARCH_DATA: InfoCardData[] = [
    {
        title: 'Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System',
        description: "Built multi-agent intrusion detection and response system using LangChain reAct with chain-of-thought reasoning. Enhanced agent reasoning via RAG and FAISS, achieving 0.981 faithfulness. Trained a multi-class network classifier with an F1-score of 0.983.",
        topSkills: ["LLMs", "LangChain", "reAct agents"],
        imgSrc: '/personal-website/assets/research/CyberWarrior_LLM_Challenge.png',
        urls: [
            { name: "GitHub Repo", url: "https://github.com/arjunsudheer/a-real-time-multi-agent-network-attack-detection-and-incident-response-system" },
            { name: "Research Paper", url: "https://ieeexplore.ieee.org/abstract/document/11133641" }
        ]
    },
    {
        title: 'Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks',
        description: "Created Diffusion model to generate synthetic malware images, improving Zero-day detection rates by 15%. Validated samples using Random Forest and MLP classifiers for high fidelity. Trained models with scikit-learn and PyTorch on Nvidia GPUs.",
        topSkills: ["Python", "PyTorch", "scikit-learn", "Diffusion", "CUDA"],
        imgSrc: '/personal-website/assets/research/Zero-day_Malware_Research.jpeg',
        urls: [
            { name: "GitHub Repo", url: "https://github.com/arjunsudheer/synthetic-malware-generation-based-on-generative-models-against-zero-day-attacks" },
            { name: "Research Paper", url: "https://ieeexplore.ieee.org/abstract/document/11133622" }
        ]
    }
];

export const PROJECT_DATA: InfoCardData[] = [
    {
        title: 'Stock News',
        description: "Engineered multi-agent stock debate using Autogen and DuckDuckGo Search, with live news from Yahoo Finance. Moderated debate using Llama Guard 3, set up cron job to email stock recommendations using Gmail SMTP.",
        topSkills: ["Python", "Autogen", "Web Scraping", "SMTP", "Cron Job"],
        imgSrc: '/personal-website/assets/projects/Stock_News.png',
        urls: [{ name: "View Project", url: "/Projects/StockNews" }]
    },
    {
        title: 'Cornhole Referee',
        description: "Developed a supervised machine learning model using YOLOv8 to keep track of the score in a cornhole game. Implemented object tracking and points scoring using YOLOv8 and Supervision.",
        topSkills: ["Python", "YOLOv8", "Supervision"],
        imgSrc: '/personal-website/assets/projects/Cornhole_Referee.jpg',
        urls: [{ name: "View Project", url: "/Projects/CornholeReferee" }]
    }
];

export const COURSE_DATA: InfoCardData[] = [
    { title: 'Data Structures and Algorithms', description: "Course Code: CS 146", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42151" }] },
    { title: 'Introduction to Database Management Systems', description: "Course Code: CS 157A", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=157891" }] },
    { title: 'Computer Networks 1', description: "Course Code: CMPE 148", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=157668" }] },
    { title: 'Computer Organization and Architecture', description: "Course Code: CMPE 120", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41920" }] },
    { title: 'Differential Equations and Linear Algebra', description: "Course Code: MATH 33LA", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=46040" }] },
    { title: 'Applied Probability and Statistics 1', description: "Course Code: MATH 161A", urls: [{ name: "Syllabus", url: "https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=159819" }] }
];

export const CERTIFICATE_DATA: InfoCardData[] = [
    { title: 'Machine Learning', description: "Offered By: DeepLearning.AI", urls: [{ name: "Certificate", url: "https://www.coursera.org/account/accomplishments/specialization/TFVH59H5YMEJ" }] },
    { title: 'Google Cybersecurity Professional Certificate', description: "Offered By: Google", urls: [{ name: "Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/M3PWD2B9M3YX" }] },
    { title: 'Learning Docker', description: "Offered By: LinkedIn", urls: [{ name: "Certificate", url: "https://www.linkedin.com/learning/certificates/b466cc351d6a5ac5ce157068217f6d5eafa5bc267bb9fe3b9501cdd5bb5af744?accountId=2071660&u=2071660&success=true&authUUID=6Z7F4Z6aTLuQtRz4641DiQ%3D%3D" }] },
    { title: 'Responsive Web Design', description: "Offered By: University of London", urls: [{ name: "Certificate", url: "https://www.coursera.org/account/accomplishments/verify/RU9U6CKD3MQP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" }] }
];

// Configuration array used to generate the sections in App.tsx
export const ALL_SECTIONS: SectionConfig[] = [
    { id: "experience-section", title: "Experience", data: EXPERIENCE_DATA },
    { id: "research-section", title: "Research Publications", data: RESEARCH_DATA },
    { id: "projects-section", title: "Projects", data: PROJECT_DATA },
    { id: "courses-section", title: "Courses Taken", data: COURSE_DATA },
    { id: "certifications-section", title: "Certifications Earned", data: CERTIFICATE_DATA }
];