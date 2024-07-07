import { FaExternalLinkAlt } from "react-icons/fa";

interface InfoPageProps {
	title: string;
	imgSrc: string;
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
			<h1 className='text-center text-lg font-bold underline'>{title}</h1>
			<div className='grid grid-cols-1 md:flex'>
				<div className='w-full md:w-1/4 px-2'>
					<img src={imgSrc} alt='Information Image' />
					<hr />
					<a href={url} target='_blank' className='text-blue-400 underline'>
						Learn More <FaExternalLinkAlt className='inline size-3 text-black' />
					</a>
					<hr />
					<label htmlFor='skills' className='font-bold underline'>
						Skills Learned:
					</label>
					<ul id='skills' className='mx-2'>
						{skillsList}
					</ul>
					<hr />
					<label htmlFor='tools' className='font-bold underline'>
						Tools Used:
					</label>
					<ul id='tools' className='mx-2'>
						{toolsList}
					</ul>
				</div>
				<hr />
				<div className='w-full md:w-1/2 px-2'>{descriptionList}</div>
				<div className='w-full md:w-1/4 px-2'>Ad space</div>
			</div>
		</>
	);
};

export default InfoPage;
