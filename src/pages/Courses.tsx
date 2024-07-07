import InfoCard from "../reusable_components/InfoCard";

const Courses = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>San Jose State University</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Introduction to Data Structures'
					imgSrc='src/assets/courses/Intro_to_Data_Structures.jpg'
					description='Course Code: CS 46B'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
					displayAnimation={false}
				/>
				<InfoCard
					title='Discrete Mathematics'
					imgSrc='src/assets/courses/Discrete_Math.jpg'
					description='Course Code: MATH 42'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=44161'
					displayAnimation={false}
				/>
				<InfoCard
					title='Data Structures and Algorithms'
					imgSrc='src/assets/courses/Data_Structures_and_Algorithms.jpg'
					description='Course Code: CS 146'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42151'
					displayAnimation={false}
				/>
				<InfoCard
					title='Software Engineering 1'
					imgSrc='src/assets/courses/Software_Engineering_1.jpg'
					description='Course Code: CMPE 131'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41926'
					displayAnimation={false}
				/>
				<InfoCard
					title='Calculus 3'
					imgSrc='src/assets/courses/Calculus_3.jpg'
					description='Course Code: MATH 32'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41254'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Foothill College</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Introduction to Cloud Computing in Amazon Web Services'
					imgSrc='src/assets/courses/Intro_to_AWS.jpg'
					description='Course Code: CS 55A'
					url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>De Anza College</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Beginning Programming Methodologies in C++'
					imgSrc='src/assets/courses/Intro_to_C++.jpg'
					description='Course Code: CIS 22A'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cupertino High School</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='AP Computer Science'
					imgSrc='src/assets/courses/APCS.jpg'
					description='Course Code: CS 46A'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42139'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Calculus BC'
					imgSrc='src/assets/courses/AP_Calculus_BC.jpg'
					description='Course Code: MATH 32'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41229'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Physics C: Mechanics'
					imgSrc='src/assets/courses/AP_Physics_C_Mechanics.jpg'
					description='Course Code: PHYS 50'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40939'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Physics C: Electricity & Magnetism'
					imgSrc='src/assets/courses/AP_Physics_C_E&M.jpg'
					description='Course Code: PHYS 51'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40951'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Courses;
