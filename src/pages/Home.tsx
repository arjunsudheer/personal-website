const Home = () => {
	return (
		<>
			<div className='grid grid-cols-1 md:flex dark:text-white'>
				<div className='w-full md:w-1/2 md:border-b md:border-r border-black dark:border-white p-3'>
					<h1 className='text-3xl font-bold underline m-2 text-center'>Arjun Sudheer</h1>
					<h3 className='text-center'>
						<span className='underline m-2'>University:</span>San Jose State University
					</h3>
					<h3 className='text-center'>
						<span className='underline m-2'>Major:</span> Software Engineering
					</h3>
					<h3 className='text-center'>
						<span className='underline m-2'>Graduation:</span> May 2026
					</h3>
				</div>
				<div className='w-full md:w-1/2 md:border-b border-black dark:border-white p-3'>
					<img
						src='/assets/home/Arjun_Sudheer_Professional_Headshot.jpg'
						alt='A picture of Arjun Sudheer'
						className='mx-auto w-full md:w-1/3'
					/>
				</div>
			</div>

			<h2 className='text-xl text-center font-bold underline mt-3 dark:text-white'>About Me</h2>
			<p className='m-3 dark:text-white'>
				Hi! My name is Arjun Sudheer, and I am currently a student at San Jose State studying
				Software Engineering. I have earned the Jane G. Evans College of Engineering merit
				scholarship.
			</p>
			<p className='m-3 dark:text-white'>
				Software Engineering is my passion, and I wanted to major in Software Engineering because I
				knew that I would be able to learn new skills that can help drive innovation and creativity
				for many around the world.
			</p>
			<p className='m-3 dark:text-white'>
				My first exposure to software engineering was in my Introduction to Programming class that I
				took in my freshman year of high school. Initially, the class was tough, but I started to
				get the hang of it as time went by. Building various games as a part of a class project
				helped me understand the different possibilities that existed with software engineering, and
				made me even more interested in the subject. In my sophomore year of high school, I took the
				AP Computer Science class to learn more about Java and object oriented concepts. I also
				challenged myself further by taking more difficult courses through local colleges and online
				programs.
			</p>
			<p className='m-3 dark:text-white'>
				In an effort to gain more exposure to this field, I became intensely involved in my school's
				robotics team. I began to code various wheel motors and mechanisms for the robot to pick up
				and shoot rings from the ground. It was fascinating to see the robot I had coded exhibit
				human-arm-like motions. My world opened up as I began writing software that made lifeless
				objects perform incredible operations.
			</p>
			<p className='m-3 dark:text-white'>
				To meld my passions for teaching and computer science, I took on a tutoring job at a company
				called Code Ninjas. Wanting to spread the knowledge I had gained, I started a robotics club
				at this company to teach younger kids about robotics and its applications.
			</p>
			<p className='m-3 dark:text-white'>
				These experiences led to my decision to study Software Engineering at SJSU. From the problem
				solving challenges, to the impact software creates on our world, I am thoroughly enjoying
				learning more about software engineering and creating impactful projects of my own.
			</p>
			<p className='m-3 dark:text-white'>
				Outside of academics, I am an Eagle Scout. I love going camping with my friends and family.
				I also enjoy taking hikes, especially if it's near a river or a waterfall.
			</p>
			<p className='m-3 dark:text-white'>
				Please feel free to learn more about my experiences and expertise by clicking various
				sections on the navbar above. If you ever want to reach out or have a
				quick chat, please don't hesitate to reach out to me at: arjun.sudheer@sjsu.edu.
			</p>

			<div className='grid grid-cols-1 md:flex dark:text-white'>
				<div className='w-full md:w-1/2 border-t md:border-r border-black dark:border-white p-3'>
					<label htmlFor='skills' className=' text-lg font-bold underline m-2 text-center'>
						Featured Skills:
					</label>
					<ol id='skills' className='ml-5 list-disc'>
						<li>Machine Learning (TensorFlow)</li>
						<li>Python</li>
						<li>Java</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Bash</li>
						<li>Teamwork/Communication</li>
						<li>Problem Solving</li>
						<li>Agile/Scrum</li>
					</ol>
				</div>
				<div className='w-full md:w-1/2 border-t border-black dark:border-white p-3 dark:text-white'>
					<label htmlFor='tools' className=' text-lg font-bold underline m-2 text-center'>
						Featured Tools Used:
					</label>
					<ol id='tools' className='ml-5 list-disc'>
						<li>Unix/Linux OS</li>
						<li>Git</li>
						<li>GitHub</li>
						<li>Amazon Web Services</li>
						<li>Visual Studio Code</li>
					</ol>
				</div>
			</div>
		</>
	);
};

export default Home;
