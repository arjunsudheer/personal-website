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
				title='Introduction to Data Structures'
				keyHighlights={["Course Code: CS 46B"]}
				topSkills={["Data Structures", "Java"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
				internalLink={false}
			/>
			<InfoCard
				title='Software Engineering 1'
				keyHighlights={["Course Code: CMPE 131"]}
				topSkills={["Agile", "Scrum"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41926'
				internalLink={false}
			/>
			<InfoCard
				title='Software Engineering 2'
				keyHighlights={["Course Code: CMPE 133"]}
				topSkills={["System Architecture Diagrams", "Agile", "Scrum"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41928'
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
				title='Assembly Language Programming'
				keyHighlights={["Course Code: CMPE 102"]}
				topSkills={["ARM Assembly Language"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=13&coid=116041'
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
				title='Discrete Mathematics'
				keyHighlights={["Course Code: MATH 42"]}
				topSkills={["Set Theory", "Logical Thinking", "Problem Solving"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=44161'
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
			<InfoCard
				title='Calculus 3'
				keyHighlights={["Course Code: MATH 32"]}
				topSkills={["Vectors", "Multi-variable Calculus"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41254'
				internalLink={false}
			/>
			<InfoCard
				title='Engineering Reports'
				keyHighlights={["Course Code: ENGR 100W"]}
				topSkills={["Technical Writing", "Report Writing", "Communication Skills"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=17&coid=161487'
				internalLink={false}
			/>
			<InfoCard
				title='Introduction to Cloud Computing in Amazon Web Services'
				keyHighlights={["Course Code: CS 55A"]}
				topSkills={["EC2", "S3", "IAM", "Lambda"]}
				textRight={true}
				url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
				internalLink={false}
			/>
			<InfoCard
				title='Beginning Programming Methodologies in C++'
				keyHighlights={["Course Code: CIS 22A"]}
				topSkills={["C++"]}
				textRight={false}
				url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
				internalLink={false}
			/>
			<InfoCard
				title='AP Computer Science'
				keyHighlights={["Course Code: CS 46A"]}
				topSkills={["Java"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42139'
				internalLink={false}
			/>
			<InfoCard
				title='AP Calculus BC'
				keyHighlights={["Course Code: MATH 32"]}
				topSkills={["Differentiation", "Integration"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41229'
				internalLink={false}
			/>
			<InfoCard
				title='AP Physics C: Mechanics'
				keyHighlights={["Course Code: PHYS 50"]}
				topSkills={["Kinematics", "Forces", "Momentum", "Energy"]}
				textRight={true}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40939'
				internalLink={false}
			/>
			<InfoCard
				title='AP Physics C: Electricity & Magnetism'
				keyHighlights={["Course Code: PHYS 51"]}
				topSkills={["Circuits", "Electrical Charges", "R/C Circuits"]}
				textRight={false}
				url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40951'
				internalLink={false}
			/>
		</>
	);
};

export default Courses;
