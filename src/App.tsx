import Navbar from "./reusable_components/Navbar";
import Footer from "./reusable_components/Footer";

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
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
