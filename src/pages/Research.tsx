import InfoCard from "../reusable_components/InfoCard";
import { useLocation } from "react-router-dom";

const Research = () => {
	const location = useLocation();

	return (
		<>
			{/* <h3 className='underline text-lg m-3 dark:text-white'>Publications</h3> */}
			<h3 className='underline text-lg m-3 dark:text-white'>AI Research</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Identifying Malware Images Using Diffusion and GAN Models'
					imgSrc='/personal-website/assets/research/Zero-day_Malware_Detection_Using_Diffusion_and_GAN_Models.jpeg'
					description='Conducting research on zero-day malware detection using Diffusion and GAN models.'
					url={location.pathname + '/Zero-dayMalwareDetectionUsingDiffusionandGANModels'}
					displayAnimation={false}
				/>
				<InfoCard
					title='Traffic Signs Image Detection/Classification'
					imgSrc='/personal-website/assets/research/Traffic_Signs_AI_Research.jpg'
					description='Classified and identified German traffic signs using Tensorflow and YOLOv8.'
					url={location.pathname + '/ProjectEngineeringSuccessProgram'}
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cybersecurity Research</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Ransomware Attacks on US Critical Infrastructure'
					imgSrc='/personal-website/assets/research/ICCAE_Scholar_Ransomware_Attacks.jpg'
					description='Presented my research work on ransomware attacks and its effects on US national security at the IC CAE Scholar event.'
					url={location.pathname + '/ICCAEScholarProgram'}
					displayAnimation={false}
				/>
				<InfoCard
					title='Digital Forensics Research'
					description='Studied digital forensics principles and tools, including how to use the Autopsy Software by Sleuth Kit. Wrote the curriculum for the Cybersecurity Clinics course at SJSU.'
					url={location.pathname + '/DigitalForensics'}
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Research;
