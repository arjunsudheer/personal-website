import InfoCard from "../reusable_components/InfoCard";

const Research = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>Publications</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Identifying Malware Images Using Diffusion and GAN Models'
					imgSrc='#'
					description='Published a paper in the [] journal.'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>AI Research</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Traffic Signs Image Detection/Classification'
					imgSrc='src/assets/research/Traffic_Signs_AI_Research.jpg'
					description='Classified and identified German traffic signs using Tensorflow and YOLOv8.'
					url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cybersecurity Research</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Google Carla Autonomous Car Security'
					imgSrc='#'
					description='Worked on a research project sponsored by Google to identify the most likely causes of an autonomous car crash using fuzzing and falsification techniques.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
				<InfoCard
					title='Ransomware Attacks on US Critical Infrastructure'
					imgSrc='src/assets/research/ICCAE_Scholar_Ransomware_Attacks.jpg'
					description='Presented my research work on ransomware attacks and its effects on US national security at the IC CAE Scholar event.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Research;
