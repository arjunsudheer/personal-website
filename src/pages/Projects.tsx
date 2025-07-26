import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Projects = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='Cornhole Referee'
				keyHighlights={[
					"Developed a supervised machine learning model using YOLOv8 to keep track ofhte score in a corhole game",
					"Implemented object tracking and points scoring using YOLOv8 and Supervision",
					"Created a custom dataset by capturing images using OpenCV, and annotating images using Roboflow",
				]}
				topSkills={["Python", "YOLOv8", "Supervision"]}
				textRight={false}
				url={location.pathname + "/CornholeReferee"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Cornhole_Referee.jpg'
			/>
			<InfoCard
				title='Personal Website'
				keyHighlights={[
					"Developed a personal website to showcase my experience and expertise in software engineering",
					"Implemented a responsive website that provides a good user experience in both desktop nad mobile environments",
				]}
				topSkills={["React", "TypeScript", "Tailwind CSS"]}
				textRight={true}
				url={location.pathname + "/PersonalWebsite"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/personal_website.svg'
			/>
			<InfoCard
				title='Online Food Store'
				keyHighlights={[
					"Developed a full stack web application using agile and scrum methodologies",
					"Implemented automated unit tests and GitHub actions to ensure correct functionality",
					"Stored online orders in the MySQL relational database",
				]}
				topSkills={["JavaScript", "PHP", "MySQL"]}
				textRight={false}
				url={location.pathname + "/OnlineFoodStore"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Online_Food_Store.jpg'
			/>
			<InfoCard
				title='Access Vault'
				keyHighlights={[
					"Developed a Bash Script to automate file and user permissions to easily follow the principle of least privilege",
					"Read permissions from a file for easy updates",
				]}
				topSkills={["Bash", "Git"]}
				textRight={true}
				url={location.pathname + "/AccessVault"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Automation_Scripts.jpg'
			/>
			<InfoCard
				title='Automation Scripts'
				keyHighlights={[
					"Developed a bash command line program that automates user-defined workflows",
					"Kept track of time taken for each task and automatically sets up apps and web pages for its users",
				]}
				topSkills={["Bash", "Git"]}
				textRight={false}
				url={location.pathname + "/AutomationScripts"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Automation_Scripts.jpg'
			/>
		</>
	);
};

export default Projects;
