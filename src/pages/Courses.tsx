import InfoCard from "../components/InfoCard";

const Courses = () => {
	return (
		<>
			<InfoCard
				title='Data Structures and Algorithms'
				keyHighlights={["Course Code: CS 146"]}
				topSkills={["Data Structures", "Algorithms", "Time Complexity"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42151'
				internalLink={false}
			/>
			<InfoCard
				title='Introduction to Database Management Systems'
				keyHighlights={["Course Code: CS 157A"]}
				topSkills={["SQL", "Database Design", "Normalization"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=157891'
				internalLink={false}
			/>
			<InfoCard
				title='Computer Networks 1'
				keyHighlights={["Course Code: CMPE 148"]}
				topSkills={["Computer Networks", "TCP/IP", "OSI Model", "Network Protocols"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=157668'
				internalLink={false}
			/>
			<InfoCard
				title='Computer Organization and Architecture'
				keyHighlights={["Course Code: CMPE 120"]}
				topSkills={["Processor Architecture", "Pipelining", "Memory Hierarchy"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41920'
				internalLink={false}
			/>
			<InfoCard
				title='Differential Equations and Linear Algebra'
				keyHighlights={["Course Code: MATH 33LA"]}
				topSkills={[
					"Differential Equations",
					"Linear Algebra",
					"Matrix Operations",
					"Eigenvalues and Eigenvectors",
				]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=46040'
				internalLink={false}
			/>
			<InfoCard
				title='Applied Probability and Statistics 1'
				keyHighlights={["Course Code: MATH 161A"]}
				topSkills={["Probability", "Discrete and Continuous Random Variables", "Problem Solving"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=159819'
				internalLink={false}
			/>
		</>
	);
};

export default Courses;
