import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowCircleDown } from "react-icons/md";

const Home = () => {
	const [showArrow, setShowArrow] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Start or reset the timer
	const startInactivityTimer = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		setShowArrow(false); // Hide while interacting

		timerRef.current = setTimeout(() => {
			setShowArrow(true); // Show after 15 seconds of no scrolling
		}, 15000);
	};

	useEffect(() => {
		// Start the initial timer
		startInactivityTimer();

		const handleScroll = () => {
			startInactivityTimer(); // Reset on scroll
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	// Shared styles
	const textLeftSectionClass =
		"flex flex-col md:flex-row items-center justify-center text-center dark:text-white min-h-[90vh] py-8 md:py-12";
	const textRightSectionClass =
		"flex flex-col-reverse md:flex-row items-center justify-center text-center dark:text-white min-h-[90vh] py-8 md:py-12";
	const textContainer = "w-full md:w-1/2 px-6 md:px-12 pb-4 md:pb-0";
	const imgContainer = "w-full md:w-1/2 h-full flex justify-center items-center";
	const imgClass = "max-h-[70vh] max-w-3/4 object-contain";

	return (
		<>
			{/* Introduction section */}
			<div className={textLeftSectionClass}>
				{/* Text section */}
				<div className={textContainer}>
					<h1 className='text-4xl font-bold mb-4'>Hi, I'm Arjun</h1>
					<p className='text-lg max-w-md mx-auto'>
						I'm a student at San Jose State University studying Software Engineering. I am a Jane G.
						Evans College of Engineering Merit Scholar.
					</p>
				</div>

				{/* Image section */}
				<div className={imgContainer}>
					<img
						src='/personal-website/assets/home/Arjun_Sudheer_Professional_Headshot.jpg'
						alt='Professional Headshot'
						className={imgClass}
					/>
				</div>
			</div>

			{/* Background section */}
			<div className={textRightSectionClass}>
				{/* Image section */}
				<div className={imgContainer}>
					<img
						src='/personal-website/assets/home/Robot_Pit.jpg'
						alt="A photo of me in front of my high school team's robot"
						className={imgClass}
					/>
				</div>

				{/* Text section */}
				<div className={textContainer}>
					<h1 className='text-4xl font-bold mb-4'>A Little Bit About Me</h1>
					<p className='text-lg mx-auto mb-4'>
						I first developed a passion for software engineering when I joined my High School
						robotics team. Participating in robotics helped me realize how impactful software can be
						in helping improve people's lives around the world.
					</p>
					<p className='text-lg mx-auto mb-4'>
						After joining San Jose State University, I have been involved in research in the
						intersection of AI and Cybersecurity. I am interested in Cybersecurity, Generative AI,
						and LLMs.
					</p>
					<p className='text-lg mx-auto'>
						Outside of academics, I am an Eagle Scout. I love going camping with my friends and
						family. I also enjoy taking hikes, especially if it's near a river or a waterfall.
					</p>
				</div>
			</div>

			{/* Skills section */}
			<div className={textLeftSectionClass}>
				{/* Text section */}
				<div className={textContainer}>
					<h1 className='text-4xl font-bold mb-4'>My Experience</h1>
					<p className='text-lg mx-auto mb-4'>
						I am comfortable with Python, Java, SQL Databases, and Frontend technologies like HTML,
						CSS, Tailwind CSS, JavaScript, and React. I have experience building full-stack
						applications, integrating LLM agents into applications, and generative AI models.
					</p>
					<p className='text-lg mx-auto mb-4'>
						I interned at the Software and Computer Engineering Society Club at SJSU, where I
						implemented the QR code generation feature for a URL shortening service. I used tools
						like Docker and Prometheus to keep track of the number of QR codes stored and their size
						on disk. Later this summer, I will be joining Cisco as a Software Developer in their
						technical Co-op program.
					</p>
					<p className='text-lg mx-auto mb-4'>
						I also have research experience. My first paper, titled "Synthetic Malware Image
						Generation Based on Generative Models" was accepted by the Silicon Valley Cybersecurity
						Conference. In that paper, I utilized a Diffusion model to generate synthetic malware in
						the form of images to help improve zero-day malware detection rates. I proposed a
						feedback loop evaluation system to add high-quality synthetic images to the train
						dataset, enhancing zero-day malware detection rates by up to 15%. I am now working on a
						new research paper that utilizes LLMs to automate and speed-up incident management,
						detection, and response for network-based environments.
					</p>
					<p className='text-lg mx-auto'>
						Please feel free to learn more about my experience by clicking various sections on the
						navbar above.
					</p>
				</div>

				{/* Image section */}
				<div className={imgContainer}>
					<img
						src='/personal-website/assets/home/CiscoFireworks.gif'
						alt='Cisco Fireworks'
						className={imgClass}
					/>
				</div>
			</div>

			{/* Connect section */}
			<div className={textRightSectionClass}>
				{/* Image section */}
				<div className={imgContainer}>
					<img
						src='/personal-website/assets/home/Photo_With_Sammy_Spartan.jpg'
						alt='A Photo with San Jose State University Mascot, Sammy the Spartan'
						className={imgClass}
					/>
				</div>

				{/* Text section */}
				<div className={textContainer}>
					<h1 className='text-4xl font-bold mb-4'>I Would Love To Connect</h1>
					<p className='text-lg mx-auto'>
						Please reach out to me at{" "}
						<a className='hover:underline text-blue-400' href='mailto:arjun.sudheer@sjsu.edu'>
							arjun.sudheer@sjsu.edu
						</a>
						.
					</p>
				</div>
			</div>

			{/* Show a bouncing arrow telling the user to scroll */}
			{showArrow && (
				<MdOutlineArrowCircleDown className='size-10 dark:text-white animate-bounce fixed bottom-14 left-1/2 transform -translate-x-1/2 z-50' />
			)}
		</>
	);
};

export default Home;
