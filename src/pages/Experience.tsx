import InfoCard from "../reusable_components/InfoCard";

const Experience = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>Internships</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='SCE Internship'
					imgSrc='src/assets/experience/SCE_SJSU_Logo.jpg'
					description='Implemented QR codes and prometheus metrics for a custom URL shortening service.'
					url=''
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Other</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Code Ninjas'
					imgSrc='src/assets/experience/Code_Ninjas_Logo.jpg'
					description='Tutored K-8 students in Computer Science concepts and started an FLL robotics club.'
					url=''
					displayAnimation={false}
				/>
				<InfoCard
					title='Cupertino Robotics'
					imgSrc='src/assets/experience/Cupertino_Robotics_Logo.jpg'
					description='Team lead for robot code and computer vision teams.'
					url='http://127.0.0.1:5173/experience/Cupertino%20Robotics'
					displayAnimation={true}
				/>
			</div>
		</>
	);
};

export default Experience;
