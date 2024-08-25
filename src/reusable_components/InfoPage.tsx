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
	const skillsList = skillsLearned.map((skill) => <li key={skill}>- {skill}</li>);
	const toolsList = toolsUsed.map((tool) => <li key={tool}>- {tool}</li>);
	const descriptionList = description.map((paragraph) => (
		<p key={paragraph} className='p-3'>
			{paragraph}
		</p>
	));
	return (
		<>
			<h1 className='text-center text-lg font-bold underline dark:text-white'>{title}</h1>
			<div className='grid grid-cols-1 md:flex'>
				<div className='w-full md:w-1/4 px-2'>
					{(imgSrc !== undefined) && <img src={imgSrc} alt='Information Image' className='dark:text-white my-2 w-full max-h-80' />}
					<hr />
					<a href={url} target='_blank' className='block text-blue-400 underline my-2'>
						Learn More <FaExternalLinkAlt className='inline size-3 text-black dark:text-white' />
					</a>
					<hr />
					<label htmlFor='skills' className='block font-bold underline dark:text-white mt-2'>
						Skills Learned:
					</label>
					<ul id='skills' className='mx-2 dark:text-white mb-5'>
						{skillsList}
					</ul>
					<hr />
					<label htmlFor='tools' className='block font-bold underline dark:text-white mt-2'>
						Tools Used:
					</label>
					<ul id='tools' className='mx-2 dark:text-white mb-5'>
						{toolsList}
					</ul>
				</div>
				<hr />
				<div className='w-full md:w-1/2 px-2 dark:text-white'>{descriptionList}</div>
				<div className='w-full md:w-1/4 px-2 dark:text-white'>Ad space</div>
			</div>
		</>
	);
};

export default InfoPage;
