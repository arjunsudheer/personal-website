import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Research = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System'
				keyHighlights={[
					"Built multi-agent intrusion detection and response system using LangChain reAct with chain-of-thought reasoning",
					"Enhanced agent reasoning via RAG and FAISS, achieving 0.981 faithfulness and 0.78 relevance",
					"Trained a multi-class network classifier with an F1-score of 0.983 for real-time threat response",
				]}
				topSkills={["LLMs", "LangChain", "reAct agents"]}
				textRight={true}
				url={location.pathname + "/CyberWarriorLLMChallenge"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/CyberWarrior_LLM_Challenge.jpeg'
			/>
			<InfoCard
				title='Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks'
				keyHighlights={[
					"Created Diffusion model to generate synthetic malware images, improving Zero-day detection rates by 15%",
					"Validated samples using Random Forest and MLP classifiers for high fidelity",
					"Trained models with scikit-learn and PyTorch on Nvidia GPUs for scalable performance",
				]}
				topSkills={["Python", "PyTorch", "scikit-learn", "Diffusion (Generative AI)", "CUDA"]}
				textRight={false}
				url={location.pathname + "/Zero-dayMalwareDetectionUsingDiffusionandGANModels"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/Zero-day_Malware_Research.jpeg'
			/>
			<InfoCard
				title='Autonomous Car Systems - Traffic Sign Detection'
				keyHighlights={[
					"Ran an image classification model to classify German Traffic Signs using tools like Python, TensorFlow, scikit-learn, and Jupyter Notebook",
					"Used YOLOv8 to train a model ot detect various traffic signs in a video",
				]}
				topSkills={["Python", "YOLOv8", "Tensorflow"]}
				textRight={true}
				url={location.pathname + "/ProjectEngineeringSuccessProgram"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/Traffic_Signs_AI_Research.jpg'
			/>
			<InfoCard
				title='Ransomware Attacks on US Critical Infrastructure'
				keyHighlights={[
					"Participated in the IC CAE research program focusing on united States national security concerns",
					"Presented my research work on ransomware attacks on UNited States' critical infrastructure at the IC CAE colloquium event held at USC",
				]}
				topSkills={["Research", "Public Speaking"]}
				textRight={false}
				url={location.pathname + "/ICCAEScholarProgram"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/ICCAE_Scholar_Ransomware_Attacks.jpg'
			/>
			<InfoCard
				title='Digital Forensics'
				keyHighlights={[
					"Created Digital Forensics curriculum for the Cybersecurity Clinics class at SJSU.",
					"Creates labs involving hashes, virtual machines, and mounting/reading from external disks in a secure way",
				]}
				topSkills={["Research", "Digital Forensics"]}
				textRight={true}
				url={location.pathname + "/DigitalForensics"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/autopsy-logo.svg'
			/>
		</>
	);
};

export default Research;
