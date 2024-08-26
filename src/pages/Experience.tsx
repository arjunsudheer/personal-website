import InfoCard from "../reusable_components/InfoCard";
import { useLocation } from "react-router-dom";

const Experience = () => {
	const location = useLocation();

	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>Internships</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='SCE Internship'
					imgSrc='/personal-website/assets/experience/SCE_SJSU_Logo.jpg'
					description='Implemented QR codes and prometheus metrics for a custom URL shortening service.'
					url={location.pathname + '/SCE%20Internship'}
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Other</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Code Ninjas'
					imgSrc='/personal-website/assets/experience/Code_Ninjas_Logo.jpg'
					description='Tutored K-8 students in Computer Science concepts and started an FLL robotics club.'
					url={location.pathname + '/Code%20Ninjas'}
					displayAnimation={false}
				/>
				<InfoCard
					title='Cupertino Robotics'
					imgSrc='/personal-website/assets/experience/Cupertino_Robotics_Logo.jpg'
					description='Team lead for robot code and computer vision teams.'
					url={location.pathname + '/Cupertino%20Robotics'}
					displayAnimation={true}
				/>
			</div>
		</>
	);
};

export default Experience;
