import InfoCard from "../reusable_components/InfoCard";

const Experience = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>Internships</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='SCE Internship'
					imgSrc='src/assets/experience/SCE_SJSU_Logo.jpg'
					description='Implemented QR codes and prometheus metrics fro a custom URL shortening service.'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Other</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Code Ninjas'
					imgSrc='src/assets/experience/Code_Ninjas_Logo.jpg'
					description='Tutored K-8 students in Computer Science concepts and started an FLL robotics club.'
					url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
					displayAnimation={false}
				/>
				<InfoCard
					title='Cupertino Robotics'
					imgSrc='src/assets/experience/Cupertino_Robotics_Logo.jpg'
					description='Team lead for robot code and computer vision teams.'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Experience;
