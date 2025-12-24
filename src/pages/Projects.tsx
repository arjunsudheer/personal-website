import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Projects = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='Stock News'
				keyHighlights={[
					"Engineered multi-agent stock debate using Autogen and DuckDuckGo Search, with live news from Yahoo Finance",
					"Moderated debate using Llama Guard 3, set up cron job to email stock recommendations using Gmail SMTP",
				]}
				topSkills={["Python", "Autogen", "Web Scraping", "SMTP", "Cron Job"]}
				textRight={true}
				url={location.pathname + "/StockNews"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Stock_News.png'
			/>
			<InfoCard
				title='Cornhole Referee'
				keyHighlights={[
					"Developed a supervised machine learning model using YOLOv8 to keep track of the score in a cornhole game",
					"Implemented object tracking and points scoring using YOLOv8 and Supervision",
					"Created a custom dataset by capturing images using OpenCV, and annotating images using Roboflow",
				]}
				topSkills={["Python", "YOLOv8", "Supervision"]}
				textRight={false}
				url={location.pathname + "/CornholeReferee"}
				internalLink={true}
				imgSrc='/personal-website/assets/projects/Cornhole_Referee.jpg'
			/>
		</>
	);
};

export default Projects;
