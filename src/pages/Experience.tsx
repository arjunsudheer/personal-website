import InfoCard from "../components/InfoCard";
import { useLocation } from "react-router-dom";

const Experience = () => {
	const location = useLocation();

	return (
		<>
			<InfoCard
				title='Cisco Software Engineering Internship'
				keyHighlights={[
					"Engineered full-stack web app using Python, MySQL, and JavaScript to track product compliance for 100+ users",
					"Scaled platform across business units, driving a 200% increase in active users",
					"Integrated Agentic-AI via OpenAI and Autogen to automate updates and retrieval, boosting satisfaction by 50%",
					"Developed sandbox environment to validate new features pre-deployment, reducing production errors by 70%",
				]}
				topSkills={[
					"Python",
					"Flask",
					"JavaScript",
					"MySQL",
					"Jinja",
					"Autogen",
					"OpenAI API",
					"Docker",
					"Git",
				]}
				textRight={true}
				url={location.pathname + "/CiscoInternship"}
				internalLink={true}
				imgSrc='/personal-website/assets/home/CiscoFireworks.gif'
			/>
			<InfoCard
				title='SCE Software Engineering Internship'
				keyHighlights={[
					"Developed FastAPI-based (Python) URL shortener with SQLite and Docker, serving 500+ users",
					"Designed RESTful endpoints for URL storage and retrieval, with QR code redirection via PyQRCode",
					"Added Prometheus metrics to monitor QR code volume and byte size for performance tracking",
				]}
				topSkills={["Python", "FastAPI", "SQLite", "Docker", "Prometheus"]}
				textRight={false}
				url={location.pathname + "/SCEInternship"}
				internalLink={true}
				imgSrc='/personal-website/assets/experience/SCE_SJSU_Logo.jpg'
			/>
		</>
	);
};

export default Experience;
