import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Research = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='Identifying Malware Images Using Diffusion and GAN Models'
				keyHighlights={[
					"Developed a Diffusion model to generate synthetic malware samples to improve Zero-day malware detection rate",
					"Ran Random Forest and Multi-Layer Perceptron classifiers to analyze validity of generated malware",
					"Used PyTorch, scikit-learn, numpy, and CUDA with Nvidia GPUs to train the model",
				]}
				topSkills={["Python", "PyTorch", "Diffusion (Generative AI)"]}
				textRight={false}
				url={location.pathname + "/Zero-dayMalwareDetectionUsingDiffusionandGANModels"}
				internalLink={true}
				imgSrc='/personal-website/assets/research/Zero-day_Malware_Detection_Using_Diffusion_and_GAN_Models.jpeg'
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
