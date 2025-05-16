import classNames from "classnames";
import InfoPill from "./InfoPill";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface InfoPageProps {
	title: string;
	imgSrc: string;
	urls: Map<string, string>; // Key is the urlTitle, value is the url itself
	skillsLearned: string[];
	toolsUsed: string[];
	description: string[]; // Separate each paragraph into its own element in the array
}

const InfoPage = ({
	title,
	imgSrc,
	urls,
	skillsLearned,
	toolsUsed,
	description,
}: InfoPageProps) => {
	// Used for navigation when clicked
	const navigate = useNavigate();
	// Creates a reference to the DOM node of the InfoPage
	const ref = useRef(null);
	// Tells framer-motion to monitor InfoPage reference
	// Only trigger the animation once
	const inView = useInView(ref, { once: true });
	// Allows for controlling the animation
	const controls = useAnimation();

	// Animates the InfoPage to fade in
	useEffect(() => {
		// Only animates once per webpage reload
		if (inView) {
			controls.start({
				opacity: 1,
				transition: { duration: 0.7, ease: "easeOut" },
			});
		}
	}, [inView, controls]);

	// Navigates the use to the previous page when the back button is pressed
	const handleGoBack = () => {
		navigate("..", { relative: "path" });
	};

	return (
		<motion.div
			ref={ref} // The element being observed for in-view status
			animate={controls} // Animates based on the controller
			initial={{ opacity: 0 }} // Initial state of being invisible
			className='flex flex-col justify-around'
		>
			{/* Title and back button */}
			<div className='md:flex md:flex-row px-6 mt-6 mb-4'>
				{/* Back button */}
				<div className='mb-4 md:mb-0'>
					<button
						onClick={handleGoBack}
						title='Go back to the previous page'
						className='flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-white shadow hover:bg-gray-300 dark:hover:bg-slate-600 transition'
					>
						<IoIosArrowRoundBack className='text-2xl' />
						<span className='inline text-sm font-medium'>Back</span>
					</button>
				</div>

				{/* Centered title */}
				<h1 className='flex-1 text-center text-3xl font-bold dark:text-white'>{title}</h1>

				{/* Invisible placeholder to balance flex spacing */}
				<div className='w-[100px]' />
			</div>

			{/* Text content, image, and links container */}
			<div className='flex flex-col md:flex-row px-6'>
				{/* Text content */}
				<div className='md:w-2/3 md:pr-6 mb-6'>
					{/* Description box */}
					<div className='bg-gray-100 dark:bg-slate-700 rounded-xl shadow-md px-6 py-4'>
						{description.map((paragraph, index) => (
							<p key={index} className='my-2 text-gray-800 dark:text-gray-200 leading-relaxed'>
								{paragraph}
							</p>
						))}
					</div>
				</div>

				{/* Image and links */}
				<div className='md:w-1/3 flex flex-col items-center'>
					{/* Image */}
					<img
						src={imgSrc}
						alt='Info Visual'
						className='w-full max-h-70 object-contain rounded-xl mb-6'
					/>
					{/* Links shown in a centered list below the image */}
					<div className='w-full text-center'>
						<h2 className='font-semibold text-lg mb-2 dark:text-white underline'>Learn More:</h2>
						<ul>
							{Array.from(urls).map(([label, url]) => (
								<li key={label}>
									<a
										href={url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-500 hover:underline block mb-1'
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Show skills learned and tools used sections at the bottom of the page */}
			<div className='bg-gray-100 dark:bg-slate-800 m-8 p-4 rounded-xl shadow-inner'>
				<h3 className='text-md font-semibold mb-2 dark:text-white'>Skills Learned:</h3>
				<div className='mb-4'>
					<div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
						{skillsLearned.map((skill, idx) => (
							// Allow longer skills to take up more columns
							<div
								key={idx}
								className={classNames({
									"col-span-2": skill.length > 20,
									"col-span-1": skill.length <= 20,
								})}
							>
								<InfoPill infoText={skill} />
							</div>
						))}
					</div>
				</div>

				<div>
					<h3 className='text-md font-semibold mb-2 dark:text-white'>Tools Used:</h3>
					<div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
						{toolsUsed.map((tool, idx) => (
							// Allow longer tools to take up more columns
							<div
								key={idx}
								className={classNames({
									"col-span-2": tool.length > 20,
									"col-span-1": tool.length <= 20,
								})}
							>
								<InfoPill infoText={tool} />
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default InfoPage;
