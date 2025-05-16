import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Experience = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='SCE Internship'
				keyHighlights={[
					"Built a full stack URL shortening service using Python's FastAPI library, SQLite, and Docket for over 500 users",
					"Created a RESTful API using FastAPI to create, retrieve, and delete, stored URLs with the SQLite3 database",
					"Implemented QR code generation with the pyqrcode library to redirect user to the shortened link upon scanning",
					"Added custom Prometheus metrics to track the total number of QR Codes and their size in bytes",
				]}
				topSkills={["Python", "FastAPI", "SQLite", "Docker", "Prometheus"]}
				textRight={false}
				url={location.pathname + "/SCEInternship"}
				internalLink={true}
				imgSrc='/personal-website/assets/experience/SCE_SJSU_Logo.jpg'
			/>
			<InfoCard
				title='Code Ninjas'
				keyHighlights={[
					"Tutored elementary and middle school kids in Computer Science concepts",
					"Started a robotics club to teach FLL robotics",
				]}
				topSkills={["Tutoring", "JavaScript", "Robotics"]}
				textRight={true}
				url={location.pathname + "/CodeNinjas"}
				internalLink={true}
				imgSrc='/personal-website/assets/experience/Code_Ninjas_Logo.jpg'
			/>
			<InfoCard
				title='Cupertino Robotics'
				keyHighlights={[
					"Led the robot code and computer vision departments",
					"Worked with Nvidia Jetson and Nvidia TX2 to provide camera streams via serial port connection",
					"Ran automated test to verify robot position, angle, and encoder readings during the autonomous phase",
				]}
				topSkills={["Java", "Python", "Leadership"]}
				textRight={false}
				url={location.pathname + "/CupertinoRobotics"}
				internalLink={true}
				imgSrc='/personal-website/assets/experience/Cupertino_Robotics_Logo.jpg'
			/>
		</>
	);
};

export default Experience;
