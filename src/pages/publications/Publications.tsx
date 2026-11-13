import PublicationCard from "../../components/publications/PublicationCard";

const publications = [
    {
        title: "Least Significant Bit Steganography Detection and Analysis Using Large Language Models for Digital Forensics",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2026",
        abstract:
            "We present an LLM-driven system to detect least-significant-bit steganography, extract hidden payloads, and interpret their meaning and possible intent. Using retrieval-augmented generation, our system connects findings with relevant vulnerabilities, research, and threat intelligence. It then generates structured forensic reports to support investigators.",
        publicationLink: "https://ieeexplore.ieee.org/document/11642309",
    },
    {
        title: "An LLM-Based Agentic Network Traffic Incident-Report Approach Towards Explainable-AI Network Defense",
        publishedIn: "Journal of Sensor and Actuator Networks 2026",
        abstract:
            "We introduce a three-stage system that combines lightweight edge detection, an explainable ensemble classifier, and an LLM agent for evidence-based incident reporting. On the ACI IoT 2023 dataset, our ensemble achieves over 99.8% accuracy across 11 attack classes and improves UDP Flood F1 from 48% to 95%. We also introduce metrics to evaluate report faithfulness and groundedness; our generated reports score 0.64 and 1.0, respectively.",
        publicationLink: "https://www.mdpi.com/2224-2708/15/2/32",
    },
    {
        title: "Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2025",
        abstract:
            "We demonstrate a real-time multi-agent system that processes network traffic, detects attacks, and selects response actions. Our system uses retrieval-augmented generation to ground recommendations in vulnerability databases such as CVE. In our demonstration, it detects network attacks accurately while processing traffic at speeds suited to high-volume environments.",
        publicationLink: "https://ieeexplore.ieee.org/abstract/document/11133641",
    },
    {
        title: "Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks",
        publishedIn: "IEEE Silicon Valley Cybersecurity Conference 2025",
        abstract:
            "We propose a system that uses WGAN-GP and diffusion models to generate synthetic malware images, addressing limited training data for malware detection. We represent malware binaries in four color spaces and use cosine similarity to filter generated samples. Our experiments show that these synthetic images improve malware detection performance.",
        publicationLink: "https://ieeexplore.ieee.org/abstract/document/11133622",
    },
];

const PublicationsPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Publications
                </h1>
            </div>
            <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                {publications.map((publication) => (
                    <PublicationCard
                        key={publication.title}
                        {...publication}
                    />
                ))}
            </div>
        </section>
    );
};

export default PublicationsPage;
