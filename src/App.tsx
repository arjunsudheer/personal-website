import Navbar from "./reusable_components/Navbar";
import Footer from "./reusable_components/Footer";
import InfoPage from "./reusable_components/InfoPage";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Research from "./pages/Research";
import Projects from "./pages/Projects";

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
					path='/experience/Cupertino Robotics'
					element={
						<InfoPage
							title='Cupertino Robotics'
							imgSrc='/assets/experience/Cupertino_Robotics_Logo.jpg'
							url='https://github.com/Tino-FRC-2473/FRC2022-Vision/commits/main/?author=arjunsudheer'
							skillsLearned={[
								"Communication",
								"Teamwork",
								"Leadership",
								"Teaching",
								"Organization",
								"FTC Robotics / FRC Robotics",
								"OpenCV",
								"Java",
								"Python",
							]}
							toolsUsed={[
								"Android Studio",
								"FTC & FRC Robotics hardware",
								"Webcams",
								"Nvidia Jetson",
							]}
							description={[
								"In my High School's robotics team, I held two leadership positions. When I was in FTC, I was a software team lead, and when I was in FRC, I was the computer vision lead.",

								"As a software team lead, I mentored incoming freshman in Java programming, and led the team in developing the robot software in Java. The challenge that year was to shoot rings into a low, middle, and high goal to score the most points. I led the team in writing code to power the motors, gyroscope, and accelerometer to be used both in the autonomous and human operated stages. One notable development that I led was using the gyroscope and accelerometer to map the robot's position on the field so it could automatically move to the optimal ring shooting location on the field with just the press of a button.",

								"As a computer vision lead, I led the team in developing the computer vision software in Python using the OpenCV library. That year, the task was to identify red and blue balls on the field, and score the appropriate ball color into a goal based on our team color. Initially, the computer vision team worked with webcams and a serial port connection using an Nvidia Jetson, and I helped my team transition to a more effective Limelight camera which made the computer vision software easier to implement.",

								"Overall I gained a lot of valuable skills from my robotics experience.",
							]}
						/>
					}
				/>
				<Route
					path='/experience/Code Ninjas'
					element={
						<InfoPage
							title='Code Ninjas'
							imgSrc='/assets/experience/Code_Ninjas_Logo.jpg'
							url='https://www.codeninjas.com/ca-cupertino'
							skillsLearned={[
								"Communication",
								"Teamwork",
								"Leadership",
								"Teaching",
								"Organization",
								"FLL Robotics",
								"Scratch",
								"JavaScript",
								"Python",
							]}
							toolsUsed={[
								"Microsoft MakeCode",
								"FLL Robotics",
							]}
							description={[
								"I worked at Code Ninjas as a Code Sensei (Coding Instructor) during my Junior and Senior years of high school. I tutored K-8 students in programming languages like Scratch, Make Code, and JavaScript, and started my own FLL robotics club where I taught students how to design and build the robot with LEGOs, and write software for their robot using Python.",

								"My responsibilities included helping students with their daily coding challenges and conducting trials for new students who were interested in joining the Code Ninjas program. Code Ninjas uses a game-development focused learning curriculum, so I tutored students in Scratch and JavaScript concepts to help them complete their assignments for the current game that they were working on. I approached students in a friendly way to help them and understand the concepts. I also used the whiteboard to draw diagrams to help the students visualize certain concepts.",

								"Occasionally, I would hold a trial session for a new student who wanted to join the Code Ninjas program. I would sit with that student and work with them one-on-one to evaluate their coding skills. I would have the new student demonstrate their existing knowledge by having them create a simple game in Make Code, and report back to the student's parents regarding their software experience and fluency, and whether or not they would be a good fit for the program.",

								"I started an FLL robotics club at my Code Ninjas center to introduce the students to robotics concepts. The curriculum I taught in the robotics club consisted of completing official challenges from previous FLL Robotics competitions. I taught the students some basic design principles when using the LEGO pieces to construct the robot, as well as various software techniques, like using sensor inputs and using motors effectively, to help them write efficient code for their software.  One notable project was the line following project where students had to code their robot to follow a white line on the ground.",

								"Overall, I learned a lot of valuable skills from working at Code Ninjas and I was able to create a positive impact by helping future software engineers to develop their skills."
							]}
						/>
					}
				/>
				<Route
					path='/experience/SCE Internship'
					element={
						<InfoPage
							title='SCE Internship'
							imgSrc='/assets/experience/SCE_SJSU_Logo.jpg'
							url='https://github.com/SCE-Development/cleezy/commits/dev/?author=arjunsudheer'
							skillsLearned={[
								"Python Programming",
								"FastAPI",
								"Prometheus",
								"Starting, Shutting Down, and Managing Docker containers",
								"Organization",
								"Sending HTTP POST requests using Postman",
								"Python argparse library",
								"Python pyqrcode library",
								"Python Pillow Library",
							]}
							toolsUsed={[
								"Docker Desktop & Docker CLI",
								"Postman",
								"GitHub",
								"Visual Studio Code"
							]}
							description={[
								"As an intern for SCE at San Jose State University, I was tasked with implementing the QR Code functionality for their custom url shortener called \"Cleezy\". I worked with Python, FastAPI, Docker, Postman, and Prometheus for my tasks.",

								"My first task involved generating a QR Code given an alias, and have the QR Code point to the appropriate alias link. For example, an alias of \"sce\" would point to the official SCE website. I used python and the pyqrcode library to generate the QR Codes and save it on the docker container. I used FastAPI to create a qr/ endpoint where generated QR Codes would be displayed as a File Response so users could scan the qr code with their mobile device. I used Postman to send POST requests to the cleezy server to add new aliases so the qr codes could be generated. I checked if the alias existed in the SQLite database, and if it didn't, I created a new QR Code. I used python argparse to accept command line arguments for the cache size (number of qr codes to store), and appropriately added and removed QR Codes to stay within the cache size limit. I also added some branding to the QR Codes by using the pillow library from Python to add the SCE logo in the center of each generated QR Code.",

								"My second task involved using Prometheus to create a custom metric to track cleezy's performance when using the QR Codes. I used a gauge to keep track of the QR Code cache (the number of QR Codes stored), and the total size in bytes of the stored QR Codes. I used the inc(), dec(), and set() functions of the Prometheus gauge to accurately keep track of the QR Code cache size and the total number of bytes for all generated QR Codes. I made these metrics visible at the metrics/ endpoint in the cleezy application.",
							]}
						/>
					}
				/>

				<Route
					path='/research/Digital Forensics'
					element={
						<InfoPage
							title='Digital Forensics Research'
							url='https://github.com/SCE-Development/cleezy/commits/dev/?author=arjunsudheer'
							skillsLearned={[
								"Cybersecurity",
								"Digital Forensics",
								"Digital Legislation",
								"Data Acquisition",
								"Data Formats",
								"File Systems",
								"Encryption",
								"Encryption",
								"Data compression techniques",
								"Cloud Computing"
							]}
							toolsUsed={[
								"Linux Command Line",
								"Autopsy (from Sleuthkit)",
								"Oracle VirtualBox",
							]}
							description={[
								"As a digital forensics researcher, I studied digital forensics principles and tools, including how to use the Autopsy Software by Sleuth Kit. Through my research work, I wrote the curriculum for the Cybersecurity Clinics course at SJSU.",

								"The lecture curriculum I created covers the following topics: Introduction to Digital Forensics and Legislation, Digital Forensics Labs, Data Acquisition, Data Formats, RAID Disks, Search Warrants and Uncovering Evidence, Introduction to file systems, encryption, and virtual machines, Compression and Steganography, Data validation techniques, data hiding techniques, Virtual machine forensics, Network forensics, Email forensics, Use of social media in forensics, Forensics in the Internet of Anything, Introduction to Cloud Computing, Cloud Forensics, Cloud Investigations, Forensic Reports, Testimonies, Depositions.",

								"The lab curriculum I created covers the following topics: ab Curriculum: Data Acquisition Demo (Covers mounting a drive in read-only mode in Linux, Linux dd command to acquire data, md5sum hashes for validating data, Introduces WinHex hexadecimal editor for further data validation), Creating Windows and Ubuntu Virtual Machines in Oracle VirtualBox (Step-by-Step walkthrough and explanation of how to start, use and create Windows and Ubuntu Virtual Machines, Shows how to acquire Virtual Hard Disk file from VirtuaBox Manager for digital forensics analysis), How to use the Autopsy Digital Forensics Software from Sleuthkit (Covers how to start a case in Autopsy, and analyze the suspect drive to find files of interest, Talk about data validation and recovering deleted files in Autopsy).",
							]}
						/>
					}
				/>
				<Route
					path='/research/IC CAE Scholar Program'
					element={
						<InfoPage
							title='IC CAE Scholar Research Program'
							imgSrc='/assets/research/ICCAE_Scholar_Ransomware_Attacks.jpg'
							url='https://www.dni.gov/index.php/iccae'
							skillsLearned={[
								"Cybersecurity",
								"National Security",
								"Ransomware Attacks",
								"Research Skills",
								"Malware Analysis",
								"National Security",
								"U.S. Foreign Policy",
							]}
							toolsUsed={[
								"Microsoft PowerPoint",
							]}
							description={[
								"I was nominated by Professor Young Park to be one of the few students who get to participate in the USC IC CAE Scholars Research Program. This research program focuses on US National Security.",

								"My research for the ICCAE Scholars Research Program focused on ransomware attacks on US critical infrastructure that are made by US adversaries. I introduced the topic of ransomware attacks, examples of previous ransomware attacks on the US, and I concluded with offering some of my own suggestions to prevent future ransomware attacks on critical US infrastructure.",
							]}
						/>
					}
				/>
				<Route
					path='/research/Project Engineering Success Program'
					element={
						<InfoPage
							title='Project Engineering Success AI Research Program'
							imgSrc='/assets/research/Traffic_Signs_AI_Research.jpg'
							url='https://github.com/arjunsudheer/traffic-sign-detection'
							skillsLearned={[
								"Tensorflow",
								"Keras",
								"Ransomware Attacks",
								"Scikit-learn",
								"Python",
								"Ultralytics",
								"YOLOv8",
							]}
							toolsUsed={[
								"Google Colab",
								"Kaggle (GTSRB Dataset)",
								"Roboflow (GTSDB Dataset)"
							]}
							description={[
								"I was an undergraduate student researcher in the Project Engineering Success program at San Jose State University. Project Engineering Success is a first-year research program for first-year engineering majors at San Jose State.",

								"I worked one-on-one with Professor Birsen Sirkeci on Image Classification and Object Detection AI models for applications in self-driving cars.",

								"For the first semester, I worked on building an image classification model to classify various German Traffic Signs. I used TensorFlow, Keras, Scikit-Learn, Python and the German Traffic Sign Recognition Benchmark (GTSRB) dataset. I was able to achieve 98% accuracy with my model.",

								"In the second semester, I worked on creating an object detection model to identify various traffic signs in a in real-time. I used the ultralytics library and the YOLOv8 model for road sign object detection along with the German Traffic Sign Detection Benchmark (GTSDB) dataset. After training, my model was able to identify various German Traffic Signs in real-time as someone was driving their car.",

								"This research has applications for self-driving cars by ensuring that autonomous cars can process data in real-time to keep passengers and others safe on the road."
							]}
						/>
					}
				/>
				<Route
					path='/research/Zero-day Malware Detection Using Diffusion and GAN Models'
					element={
						<InfoPage
							title='Zero-day Malware Detection Using Diffusion and GAN Models'
							imgSrc='/assets/research/Zero-day_Malware_Detection_Using_Diffusion_and_GAN_Models.jpeg'
							url='https://github.com/arjunsudheer/identifying-malware-images-using-generative-models-research'
							skillsLearned={[
								"Tensorflow",
								"Keras",
								"Ransomware Attacks",
								"Scikit-learn",
								"Python",
								"numpy",
								"pillow",
								"seaborn",
								"TSNE visualizations"
							]}
							toolsUsed={[
								"Google Colab",
								"Nvidia GPU",
								"Visual Studio Code",
								"GitHub",
								"VirusShare Dataset"
							]}
							description={[
								"I am an undergraduate student researcher in an NSF REU at San Jose State University. I am currently working on a research topic concerning zero-day malware detection using images and generative models.",

								"My research aims to address the issue of the lack of adequate training data with regard to zero-day malware detection. As a result, I am writing DCGAN, WGAN-GP, and Diffusion models to generate synthetic malware and evaluating which of the three models produces the highest quality images. I am also evaluating the monochrome, grayscale, RGB, and CMYK color spaces to see which color space representation performs the best in synthetic malware image generation. The end goal is to see if generative models can be used to enhance the quality of malware datasets to increase the chances of detecting zero-day malware attacks.",

								"I use the open source VirusShare dataset which contains Windows binary executable malware files. I use 22 families totaling 98 GB of malware data for my research. To convert the binary files into image format, I use the NumPy and pillow libraries in Python to reshape the binary data into a 2-dimensional array, and then convert that 2-D array into an image in the four color spaces that I am testing.",

								"To evaluate the performance of each model and each color space, I am using classifiers, FID scores, and TSNE visualizations. I am using a custom TensorFlow implementation of a multilayer perceptron (MLP) classifier, and the Random Forest Classifier and Support Vector Machine Classifier from scikit-learn. I am using both a binary classifier (original malware image vs. synthetically generated malware image), as well as a multi-class classifier.",

								"This research has applications for improving zero-day malware detection rates by using generative models to enhance the training data for malware detection models."
							]}
						/>
					}
				/>

				<Route
					path='/projects/Automation Scripts'
					element={
						<InfoPage
							title='Automation Scripts'
							imgSrc='/assets/projects/Automation_Scripts.jpg'
							url='https://github.com/arjunsudheer/automation-scripts'
							skillsLearned={[
								"Bash Scripting",
								"Linux Commands",
								"Bash conditionals",
								"Bash control flow statements",
								"Bash functions",
								"Asynchronous Bash Programming",
								"Bash arrays",
								"Bash functions",
								"Bash file I/O"
							]}
							toolsUsed={[
								"Linux terminal",
								"Visual Studio Code",
								"GitHub"
							]}
							description={[
								"Automation Scripts is a custom CLI that I wrote using Bash to help users automate their workflows and manage their time better. Automation Scripts uses optargs to perform specific operations, and can help users with opening apps, opening webpages, opening files or directories on their system, and run automated workflows to help keep track of and manage time.",

								"Automation Scripts is a user-friendly CLI that provides interactive messages and prompts to help the user set up their custom workflows and easily run them within their terminal. Automation Scripts allows users to create a workflow to open apps, web pages, and files or directories in their preferred application. Automation Scripts also enables users to open a single app, webpage, or file/directory or a multitude of each as specified in their workflow.",

								"Automation Scripts can also keep track of time for its users and help them manage their time. Users can set up workflows consisting of the amount of time they want to spend on a certain task, and the tasks they want to complete. Automation Scripts then has the ability to set up its user's workflow and keep track of the time spent on a task, providing audible messages when time is almost finished for that task.",

								"Automation Scripts allows users to automate their workflow and ensure that they are managing their time well."
							]}
						/>
					}
				/>
				<Route
					path='/projects/Access Vault'
					element={
						<InfoPage
							title='Access Vault'
							url='https://github.com/arjunsudheer/access-vault'
							skillsLearned={[
								"Bash Scripting",
								"Linux Commands",
								"File and user permissions",
								"Bash functions",
								"Bash file I/O"
							]}
							toolsUsed={[
								"Linux terminal",
								"Visual Studio Code",
								"GitHub"
							]}
							description={[
								"Access Vault in a bash script I wrote that helps automate file and user permissions so organizations can follow the principle of least privilege. Access Vault uses file  I/O to update permissions based on values listed in a csv file.",

								"Access Vault has the ability to set the primary, other groups, and home directory for each user. It also has the ability to lock and unlock user accounts. Regarding file access permissions, Access Vault has the ability to change the file owner, and the read, write, and execute permissions for the user level, group level, and other level.",
							]}
						/>
					}
				/>
				<Route
					path='/projects/Online Food Store'
					element={
						<InfoPage
							title='Online Food Store'
							imgSrc='/assets/projects/Online_Food_Store.jpg'
							url='https://github.com/arjunsudheer/CMPE-131-Online-Food-Store'
							skillsLearned={[
								"HTML",
								"CSS",
								"JavaScript",
								"PHP",
								"PHPUnit Testing Framework",
								"MySQL",
								"Bash arrays",
								"Apache Web Server",
							]}
							toolsUsed={[
								"GitHub",
								"GitHub Actions",
								"Visual Studio Code"
							]}
							description={[
								"Online Food Store was a web application that I built as a class project in CMPE 131 (Software Engineering 1). I worked with a team of 6 other people to build the Online Food Store website using agile and scrum methodologies.",

								"I was in charge of building the navigation sidebar and the main page of the website. I also communicated with the backend to fetch the items that were in stock. For the front end, I used HTML, CSS, and JavaScript. For the backend, I used PHP and MySQL. The Apache web server was used as a part of the XAMPP stack.",

								"To test our web application, I used the PHPUnit testing framework to run automated tests to ensure that the PHP Script was getting the correct results from the database query. I also set up a GitHub action to run that PHPUnit test whenever a new commit was pushed to GitHub to run an automated integration test on our web application. This automated GitHub action allowed my group to see if a new commit broke any existing code.",

								"Throughout the project, I helped maintain our team's product backlog, and come up with user stories and personas to define the product goal and product vision. I supported my team in our weekly scrum meetings and progress updates."
							]}
						/>
					}
				/>
				<Route
					path='/projects/Cornhole Referee'
					element={
						<InfoPage
							title='Cornhole Referee'
							imgSrc='/assets/projects/Cornhole_Referee.jpg'
							url='https://github.com/arjunsudheer/cornhole-referee'
							skillsLearned={[
								"Supervised Machine Learning",
								"Python",
								"YOLOv8 (from ultralytics",
								"Supervision library (from Roboflow)",
								"OpenCV",
								"Generating documentation with Sphinx",
							]}
							toolsUsed={[
								"Roboflow Image Annotator",
								"GitHub",
								"Visual Studio Code"
							]}
							description={[
								"Cornhole Referee is a project I made to keep track of the score for a the red team and blue team in a cornhole game, similar to how a human referee might do so.",

								"I used YOLOv8 to train a supervised machine learning model to identify various components of a cornhole game, including the red and blue bean bags, the board, and the hole. Cornhole Referee can track the bean bags in real time and annotate them with a bounding box. Cornhole Referee can distinguish between bean bags that are on the ground, bean bags on the board, and bean bags that have fallen through the hole.",

								"To keep track of the bean bag's location, I used the open source Supervision library from Roboflow to create PolygonZones. I then check if a bean bag lies within a defined PolygonZone to award points if needed.",

								"To collect my data, I wrote a python script using OpenCV to capture images from a live camera feed. I then stored these images and used Roboflow to annotate my images with boundary boxes. I also applied image augmentations like rotations, exposure, and saturation to allow my model to identify objects of interest in various lighting conditions and camera angle placements.",

								"I generated Python documentation using Sphinx document generator. I wrote docstrings for my defined functions in the Google docstring format, and then generated HTML pages containing the documentation for my project."
							]}
						/>
					}
				/>
				<Route
					path='/projects/Personal Website'
					element={
						<InfoPage
							title='Personal Website'
							imgSrc='/assets/projects/personal_website.svg'
							url='https://github.com/arjunsudheer/personal-website'
							skillsLearned={[
								"React",
								"TypeScript",
								"Tailwind CSS",
								"Responsive Web Design",
								"AWS Web Hosting",
								"AWS S3",
							]}
							toolsUsed={[
								"Linux Terminal",
								"GitHub",
								"Visual Studio Code",
								"AWS Console",
								"Node"
							]}
							description={[
								"Yes, I am talking about the website that you are viewing right now. This is my personal website which I wrote in React using TypeScript and Tailwind CSS.",

								"My personal website showcases my work and research experience, personal projects, courses that I've completed, and any certifications that I have earned. My personal website is also responsive to it is easy to use in both desktop and mobile environments.",

								"My personal website is hosted on AWS using the S3 service.",
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
