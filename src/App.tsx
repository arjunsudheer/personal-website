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
							imgSrc='src/assets/experience/Cupertino_Robotics_Logo.jpg'
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
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
