import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface InfoPageProps {
	title: string;
	imgSrc?: string;
	url: string;
	skillsLearned: string[];
	toolsUsed: string[];
	description: string[];
}

const InfoPage = ({ title, imgSrc, url, skillsLearned, toolsUsed, description }: InfoPageProps) => {
	const [hasRevealedText, setHasRevealedText] = useState(false);

	const skillsList = skillsLearned.map((skill) => <li key={skill}>- {skill}</li>);
	const toolsList = toolsUsed.map((tool) => <li key={tool}>- {tool}</li>);
	const descriptionList = description.map((paragraph, index) => (
		<p key={index} className={`p-3 ${hasRevealedText ? "animate-reveal" : ""}`}>
			{paragraph}
		</p>
	));

	useEffect(() => {
		setHasRevealedText(true);
	}, []);

	return (
		<>
			<h1
				className={`my-2 text-center text-3xl font-bold underline dark:text-white ${
					hasRevealedText ? "animate-reveal" : ""
				}`}
			>
				{title}
			</h1>
			<div className='grid grid-cols-1 md:flex'>
				<div className='w-full md:w-1/4 px-2 min-h-screen'>
					{imgSrc !== undefined && (
						<img
							src={imgSrc}
							alt='Information Image'
							className={`dark:text-white my-2 w-full max-h-80 ${
								hasRevealedText ? "animate-reveal" : ""
							}`}
						/>
					)}
					<a
						href={url}
						target='_blank'
						className={`block text-blue-400 underline my-2 ${
							hasRevealedText ? "animate-reveal" : ""
						}`}
					>
						Learn More <FaExternalLinkAlt className='inline size-3 text-black dark:text-white' />
					</a>
					<hr className={`${hasRevealedText ? "animate-reveal" : ""}`} />
					<label
						htmlFor='skills'
						className={`block font-bold underline dark:text-white mt-2 ${
							hasRevealedText ? "animate-reveal" : ""
						}`}
					>
						Skills Learned:
					</label>
					<ul
						id='skills'
						className={`mx-2 dark:text-white mb-5 ${hasRevealedText ? "animate-reveal" : ""}`}
					>
						{skillsList}
					</ul>
					<hr className={`${hasRevealedText ? "animate-reveal" : ""}`} />
					<label
						htmlFor='tools'
						className={`block font-bold underline dark:text-white mt-2 ${
							hasRevealedText ? "animate-reveal" : ""
						}`}
					>
						Tools Used:
					</label>
					<ul
						id='tools'
						className={`mx-2 dark:text-white mb-5 ${hasRevealedText ? "animate-reveal" : ""}`}
					>
						{toolsList}
					</ul>
				</div>
				<hr />
				<div
					className={`w-full md:w-3/4 px-2 dark:text-white ${
						hasRevealedText ? "animate-reveal" : ""
					}`}
				>
					{descriptionList}
				</div>
			</div>
		</>
	);
};

export default InfoPage;
