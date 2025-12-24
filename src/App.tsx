import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Certifications from "./pages/Certifications";
import InfoPage from "./components/InfoPage";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/research' element={<Research />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/certifications' element={<Certifications />} />

				<Route
					path='experience/SCEInternship'
					element={
						<InfoPage
							title='SCE Software Engineering Internship'
							imgSrc='/personal-website/assets/experience/SCE_SJSU_Logo.jpg'
							urls={
								new Map([
									[
										"GitHub",
										"https://github.com/SCE-Development/cleezy/commits/dev/?author=arjunsudheer",
									],
								])
							}
							skillsLearned={[
								"Python",
								"FastAPI",
								"Prometheus",
								"Managing Docker containers",
								"Organization",
								"Postman",
								"Python argparse library",
								"Python pyqrcode library",
								"Python Pillow Library",
							]}
							toolsUsed={["Docker Desktop & Docker CLI", "Postman", "GitHub", "Visual Studio Code"]}
							description={[
								'As an intern for SCE at San Jose State University, I was tasked with implementing the QR Code functionality for their custom url shortener called "Cleezy". I worked with Python, FastAPI, Docker, Postman, and Prometheus for my tasks.',
								'As an intern for SCE at San Jose State University, I was tasked with implementing the QR Code functionality for their custom url shortener called "Cleezy". I worked with Python, FastAPI, Docker, Postman, and Prometheus for my tasks.',

								'My first task involved generating a QR Code given an alias, and have the QR Code point to the appropriate alias link. For example, an alias of "sce" would point to the official SCE website. I used python and the pyqrcode library to generate the QR Codes and save it on the docker container. I used FastAPI to create a qr/ endpoint where generated QR Codes would be displayed as a File Response so users could scan the qr code with their mobile device. I used Postman to send POST requests to the cleezy server to add new aliases so the qr codes could be generated. I checked if the alias existed in the SQLite database, and if it didn\'t, I created a new QR Code. I used python argparse to accept command line arguments for the cache size (number of qr codes to store), and appropriately added and removed QR Codes to stay within the cache size limit. I also added some branding to the QR Codes by using the pillow library from Python to add the SCE logo in the center of each generated QR Code.',
								'My first task involved generating a QR Code given an alias, and have the QR Code point to the appropriate alias link. For example, an alias of "sce" would point to the official SCE website. I used python and the pyqrcode library to generate the QR Codes and save it on the docker container. I used FastAPI to create a qr/ endpoint where generated QR Codes would be displayed as a File Response so users could scan the qr code with their mobile device. I used Postman to send POST requests to the cleezy server to add new aliases so the qr codes could be generated. I checked if the alias existed in the SQLite database, and if it didn\'t, I created a new QR Code. I used python argparse to accept command line arguments for the cache size (number of qr codes to store), and appropriately added and removed QR Codes to stay within the cache size limit. I also added some branding to the QR Codes by using the pillow library from Python to add the SCE logo in the center of each generated QR Code.',

								"My second task involved using Prometheus to create a custom metric to track cleezy's performance when using the QR Codes. I used a gauge to keep track of the QR Code cache (the number of QR Codes stored), and the total size in bytes of the stored QR Codes. I used the inc(), dec(), and set() functions of the Prometheus gauge to accurately keep track of the QR Code cache size and the total number of bytes for all generated QR Codes. I made these metrics visible at the metrics/ endpoint in the cleezy application.",
							]}
						/>
					}
				/>
				<Route
					path='experience/CiscoInternship'
					element={
						<InfoPage
							title='Cisco Software Engineering Internship'
							imgSrc='/personal-website/assets/home/CiscoFireworks.gif'
							skillsLearned={[
								"Python",
								"Flask",
								"Jinja",
								"JavaScript",
								"HTML",
								"CSS",
								"Autogen",
								"OpenAI API",
								"MySQL",
								"Docker",
							]}
							toolsUsed={["GitHub", "Visual Studio Code", "DBeaver", "Linux Server"]}
							description={[
								"As a Software Engineering Intern at Cisco, I am working on an internal tool to help keep track of tests and verifications for Cisco routers. I am working as a full stack developer.",
							]}
						/>
					}
				/>

				<Route
					path='/research/Zero-dayMalwareDetectionUsingDiffusionandGANModels'
					element={
						<InfoPage
							title='Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks'
							imgSrc='/personal-website/assets/research/Zero-day_Malware_Research.jpeg'
							urls={
								new Map([
									[
										"GitHub",
										"https://github.com/arjunsudheer/identifying-malware-images-using-generative-models-research",
									],
									["Publication", "https://ieeexplore.ieee.org/abstract/document/11133622"],
								])
							}
							skillsLearned={[
								"Python",
								"PyTorch",
								"scikit-learn",
								"Diffusion Models",
								"Ransomware Attacks",
								"numpy",
								"pillow",
								"seaborn",
								"TSNE visualizations",
								"TSNE visualizations",
							]}
							toolsUsed={[
								"Google Colab",
								"Nvidia GPU",
								"Visual Studio Code",
								"GitHub",
								"VirusShare Dataset",
								"Malicia Dataset",
							]}
							description={[
								'My research paper, "Synthetic Malware Image Generation Based on Generative Models Against Zero-Day Attacks", was accepted by the Silicon Valley Cybersecurity Conference (SVCC) 2025. I presented my paper at SVCC 2025, and it will soon be published on IEEE Xplore.',

								"I began working on this research as part of an NSF REU program at San Jose State University. My research evaluates a Diffusion model and a WGAN-GP model to see which model can generate a higher quality of synthetic malware images. Through my research, I found that Diffusion consistently outperforms WGAN-GP in synthetic malware image generation and can provide a higher quality of synthetic malware images for zero-day malware detection.",

								"I use the open source VirusShare dataset which contains Windows binary executable malware files. I use 22 families totaling 98 GB of malware data for my research. To convert the binary files into image format, I use the NumPy and pillow libraries in Python to reshape the binary data into a 2-dimensional array, and then convert that 2-D array into an image in the four color spaces that I am testing.",

								"My research addresses the issue of the lack of adequate training data and obfuscation techniques used with regard to zero-day malware detection. I compare the effectiveness of a WGAN-GP and a Diffusion model in malware image generation across the monochrome, grayscale, RGB, and CMYK color spaces. My research proposes the idea of sample filtering based on the cosine similarity score, and a feedback loop that allows for high-quality synthetic images to be added to the training dataset. This method helps improve both the quality and quantity of the training dataset, which allows for improved accuracy in zero-day malware detection.",

								"An evaluation on the quality of the generated synthetic images showed that the Diffusion model consistently outperforms the WGAN-GP model due to its ability to capture dataset diversity and generate more similar samples to the training data. Additionally, the sample filtering and feedback loop approach shows promise, as my research showed an improvement in zero-day malware detection rates by up to 15%.",
							]}
						/>
					}
				/>
				<Route
					path='/research/CyberWarriorLLMChallenge'
					element={
						<InfoPage
							title='Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System'
							imgSrc='/personal-website/assets/research/CyberWarrior_LLM_Challenge.jpeg'
							urls={
								new Map([
									["GitHub", "https://github.com/arjunsudheer/cyberwarrior-llm-challenge"],
									["Publication", "https://ieeexplore.ieee.org/abstract/document/11133641"],
								])
							}
							skillsLearned={[
								"Python",
								"LLMs",
								"LangChain",
								"scikit-learn",
								"Software Defined Networking",
								"RAG",
								"reAct agents",
							]}
							toolsUsed={[
								"Google Colab",
								"Nvidia GPU",
								"Visual Studio Code",
								"GitHub",
								"VirusShare Dataset",
								"Malicia Dataset",
							]}
							description={[
								'My research paper, "Demo: A Real-time Multi-Agent Network Attack Detection and Incident Response System", proposes a framework for detecting and responding to network-based attacks in real-time.',

								"I presented my research work at the Silicon Valley Cybersecurity Conference (SVCC) 2025. I won 1st place in the CyberWarrior LLM Challenge event at SVCC 2025.",
							]}
						/>
					}
				/>

				<Route
					path='/projects/CornholeReferee'
					element={
						<InfoPage
							title='Cornhole Referee'
							imgSrc='/personal-website/assets/projects/Cornhole_Referee.jpg'
							urls={new Map([["GitHub", "https://github.com/arjunsudheer/cornhole-referee"]])}
							skillsLearned={[
								"Supervised Machine Learning",
								"Python",
								"YOLOv8 (from ultralytics",
								"Supervision library (from Roboflow)",
								"OpenCV",
								"Generating documentation with Sphinx",
							]}
							toolsUsed={["Roboflow Image Annotator", "GitHub", "Visual Studio Code"]}
							description={[
								"Cornhole Referee is a project I made to keep track of the score for a the red team and blue team in a cornhole game, similar to how a human referee might do so.",

								"I used YOLOv8 to train a supervised machine learning model to identify various components of a cornhole game, including the red and blue bean bags, the board, and the hole. Cornhole Referee can track the bean bags in real time and annotate them with a bounding box. Cornhole Referee can distinguish between bean bags that are on the ground, bean bags on the board, and bean bags that have fallen through the hole.",

								"To keep track of the bean bag's location, I used the open source Supervision library from Roboflow to create PolygonZones. I then check if a bean bag lies within a defined PolygonZone to award points if needed.",

								"To collect my data, I wrote a python script using OpenCV to capture images from a live camera feed. I then stored these images and used Roboflow to annotate my images with boundary boxes. I also applied image augmentations like rotations, exposure, and saturation to allow my model to identify objects of interest in various lighting conditions and camera angle placements.",

								"I generated Python documentation using Sphinx document generator. I wrote docstrings for my defined functions in the Google docstring format, and then generated HTML pages containing the documentation for my project.",
								"I generated Python documentation using Sphinx document generator. I wrote docstrings for my defined functions in the Google docstring format, and then generated HTML pages containing the documentation for my project.",
							]}
						/>
					}
				/>
				
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
