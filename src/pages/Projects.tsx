import InfoCard from "../reusable_components/InfoCard";
import { useLocation } from "react-router-dom";

const Projects = () => {
	const location = useLocation();

	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>AI Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Cornhole Referee'
					imgSrc='/assets/projects/Cornhole_Referee.jpg'
					description='Developed referee system to track points in a cornhole game using Python, YOLOv8 and Supervision.'
					url={location.pathname + '/Cornhole%20Referee'}
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Web Development Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Personal Website'
					imgSrc='/assets/projects/personal_website.svg'
					description='Made a personal website to highlight my expertise using Typescript, React, Python Flask, Pytorch, and Llama 3.'
					url={location.pathname + '/Personal%20Website'}
					displayAnimation={false}
				/>
				<InfoCard
					title='Online Food Store'
					imgSrc='/assets/projects/Online_Food_Store.jpg'
					description='Built an online food store website with HTML, CSS, JavaScript, PHP, and MySQL.'
					url={location.pathname + '/Online%20Food%20Store'}
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cybersecurity Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Access Vault'
					description='Wrote a script that automates user and file privileges so business can follow the principle of least privilege.'
					url={location.pathname + '/Access%20Vault'}
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Bash Scripting Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Automation Scripts'
					imgSrc='/assets/projects/Automation_Scripts.jpg'
					description='Built a custom CLI to automate daily workflows and help manage time effectively.'
					url={location.pathname + '/Automation%20Scripts'}
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Projects;
