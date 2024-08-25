import InfoCard from "../reusable_components/InfoCard";

const Courses = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>San Jose State University</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Data Structures and Algorithms'
					description='Course Code: CS 146'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42151'
					displayAnimation={false}
				/>
				<InfoCard
					title='Introduction to Data Structures'
					description='Course Code: CS 46B'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42140'
					displayAnimation={false}
				/>
				<InfoCard
					title='Software Engineering 1'
					description='Course Code: CMPE 131'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41926'
					displayAnimation={false}
				/>
				<InfoCard
					title='Software Engineering 2'
					description='Course Code: CMPE 133'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41928'
					displayAnimation={false}
				/>
				<InfoCard
					title='Computer Organization and Architecture'
					description='Course Code: CMPE 120'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41920'
					displayAnimation={false}
				/>
				<InfoCard
					title='Assembly Language Programming'
					description='Course Code: CMPE 102'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=13&coid=116041'
					displayAnimation={false}
				/>
				<InfoCard
					title='Differential Equations and Linear Algebra'
					description='Course Code: MATH 33LA'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=46040'
					displayAnimation={false}
				/>
				<InfoCard
					title='Discrete Mathematics'
					description='Course Code: MATH 42'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=44161'
					displayAnimation={false}
				/>
				<InfoCard
					title='Calculus 3'
					description='Course Code: MATH 32'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41254'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Foothill College</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Introduction to Cloud Computing in Amazon Web Services'
					description='Course Code: CS 55A'
					url='https://catalog.foothill.edu/course-outlines/C-S-55A/'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>De Anza College</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Beginning Programming Methodologies in C++'
					description='Course Code: CIS 22A'
					url='https://www.deanza.edu/faculty/garbaceadelia/cis22a.html'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Cupertino High School</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='AP Computer Science'
					description='Course Code: CS 46A'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42139'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Calculus BC'
					description='Course Code: MATH 32'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=41229'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Physics C: Mechanics'
					description='Course Code: PHYS 50'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40939'
					displayAnimation={false}
				/>
				<InfoCard
					title='AP Physics C: Electricity & Magnetism'
					description='Course Code: PHYS 51'
					url='https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=40951'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Courses;
