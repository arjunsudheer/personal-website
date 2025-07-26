import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import InfoPill from "./InfoPill";
import classNames from "classnames";

interface InfoCardProps {
	title: string;
	keyHighlights: string[]; // Used to create a resume style bullet point list of key highlights
	topSkills: string[]; // Used to show top skills used
	textRight: boolean; // If true, shows text on the right and an image on the left if provided, or vice versa if false
	url: string;
	internalLink: boolean; // If true, opens the page on the current window, otherwise will open the link in a new tab
	imgSrc?: string; // Image to show on the InfoCard if provided
}

const InfoCard = ({
	title,
	keyHighlights,
	topSkills,
	textRight = false,
	url,
	internalLink,
	imgSrc,
}: InfoCardProps) => {
	// Used for navigation when clicked
	const navigate = useNavigate();
	// Creates a reference to the DOM node of the InfoCard
	const ref = useRef(null);
	// Tells framer-motion to monitor InfoCard reference
	// Only trigger the animation once, and trigger it early for smoothness
	const inView = useInView(ref, { once: true, margin: "-50px" });
	// Allows for controlling the animation
	const controls = useAnimation();

	// Animates the InfoCards to the left or right based on textRight props value
	useEffect(() => {
		// Only animates once per webpage reload
		if (inView) {
			controls.start({
				opacity: 1,
				x: 0,
				transition: { duration: 0.7, ease: "easeOut" },
			});
		}
	}, [inView, controls]);

	// Opens the webpage on the same tab if internalLink is true, otherwise opens the url in a new tab
	const showInformationPage = () => {
		internalLink ? navigate(url) : window.open(url, "_blank");
	};

	return (
		// Allow for animated motion capabilities in div
		<motion.div
			ref={ref} // The element being observed for in-view status
			animate={controls} // Animates based on the controller
			initial={{ opacity: 0, x: textRight ? 100 : -100 }} // Initial state of being off-screen and invisible
			className='flex flex-col md:flex-row w-[80%] min-h-[100px] mx-auto my-6 cursor-pointer rounded-2xl bg-gray-100 dark:bg-slate-800 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'
			onClick={showInformationPage}
			title='Click to Learn More' // Add a tooltip when hovering
		>
			{/* Text section */}
			<div
				className={classNames(
					"p-6 flex flex-col justify-between w-full",
					textRight ? "md:order-2" : "md:order-1", // Always show on top for small screens, choose left or right based on textRight for medium or larger screens
					imgSrc ? "md:w-2/3" : "md:w-full" // If no image is specified, make the text-section take up the full width on medium or larger screens
				)}
			>
				{/* Show title at the top */}
				<h3 className='text-2xl font-bold mb-4 text-left dark:text-white'>{title}</h3>

				{/* Show the keyHighlights as a resume bullet point list in the middle */}
				{/* If there is only one highlight, show it as a caption rather than a resume bullet point */}
				<ul className='flex-1 space-y-2 text-left list-disc list-inside text-sm text-gray-700 dark:text-gray-200'>
					{keyHighlights.length === 1 ? (
						<p>{keyHighlights}</p>
					) : (
						keyHighlights.map((highlight, idx) => <li key={idx}>{highlight}</li>)
					)}
				</ul>

				{/* Show the topSkills as pill-shaped elements at the bottom */}
				<div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
					{topSkills.map((skill, idx) => (
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

			{/* Image section */}
			{imgSrc && (
				<div
					className={classNames(
						"md:w-1/3 w-full flex items-center justify-center p-4 bg-gray-200 dark:bg-slate-700",
						textRight ? "md:order-1" : "md:order-2" // Always show on bottom for small screens, choose left or right based on textRight for medium or larger screens
					)}
				>
					<img
						src={imgSrc}
						alt='InfoCard Visual'
						className='w-full h-auto object-contain rounded-lg shadow-sm max-h-[280px]' // Specify max height to create uniform look across all InfoCards on a page
					/>
				</div>
			)}
		</motion.div>
	);
};

export default InfoCard;
