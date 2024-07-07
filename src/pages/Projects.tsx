import InfoCard from "../reusable_components/InfoCard";

const Projects = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>AI Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Cornhole Referee'
					imgSrc='src/assets/projects/Cornhole_Referee.jpg'
					description='Developed referee system to track points in a cornhole game using Python, YOLOv8 and Supervision.'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Web Development Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Personal Website'
					imgSrc='#'
					description='Made a personal website to highlight my expertise using Typescript, React, Python Flask, Pytorch, and Llama 3.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
				<InfoCard
					title='Online Food Store'
					imgSrc='src/assets/projects/Online_Food_Store.jpg'
					description='Built an online food store website with HTML, CSS, JavaScript, PHP, and MySQL.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cybersecurity Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Access Vault'
					imgSrc='src/assets/projects/Access_Vault.jpg'
					description='Wrote a script that automates user and file privileges so business can follow the principle of least privilege.'
					url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Bash Scripting Projects</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Automation Scripts'
					imgSrc='src/assets/projects/Automation_Scripts.jpg'
					description='Built a custom CLI to automate daily workflows and help manage time effectively.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Projects;
