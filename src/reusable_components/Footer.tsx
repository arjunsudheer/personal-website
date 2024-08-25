import { FaGithub, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const facebookProfile: string = "https://www.facebook.com/arjun.sudheer.75/";
	const instagramProfile: string = "https://www.instagram.com/arjun.sudheer.75/";
	const linkedinProfile: string = "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/";
	const githubProfile: string = "https://github.com/arjunsudheer";

	return (
		<footer className='bg-blue-300 dark:bg-slate-800 dark:text-white flex p-0.5 mt-auto'>
			<div id='contact-icon-links' className='px-0.5 flex justify-around w-full'>
				<FaFacebook
					className='text-xl m-5 hover:cursor-pointer hover:text-blue-700 inline'
					onClick={() => {
						window.open(facebookProfile);
					}}
				/>
				<FaInstagramSquare
					className='text-xl m-5 hover:cursor-pointer hover:text-pink-300 inline'
					onClick={() => {
						window.open(instagramProfile);
					}}
				/>
				<FaLinkedin
					className='text-xl m-5 hover:cursor-pointer hover:text-blue-700 inline'
					onClick={() => {
						window.open(linkedinProfile);
					}}
				/>
				<FaGithub
					className='text-xl m-5 hover:cursor-pointer hover:text-gray-700 inline'
					onClick={() => {
						window.open(githubProfile);
					}}
				/>
			</div>
		</footer>
	);
};

export default Footer;
