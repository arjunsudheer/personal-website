import { FaGithub, FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const facebookProfile: string = "https://www.facebook.com/arjun.sudheer.75/";
	const instagramProfile: string = "https://www.instagram.com/arjun.sudheer.75/";
	const linkedinProfile: string = "https://www.linkedin.com/in/arjun-sudheer-20b1a0214/";
	const githubProfile: string = "https://github.com/arjunsudheer";

	return (
		<footer className='bg-blue-300 dark:bg-slate-800 dark:text-white flex p-0.5 mt-auto'>
			<div
				id='ads-popup-container'
				className='text-center px-0.5 items-center flex justify-center w-1/3'
			>
				<span
					className='underline hover:cursor-pointer'
					onClick={() => {
						document.querySelector("dialog")?.showModal();
					}}
				>
					Why do I see ads?
				</span>
			</div>
			<div id='contact-icon-links' className='px-0.5 flex justify-around w-2/3'>
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
			<dialog className='backdrop-blur border-2 border-black p-2 w-full md:w-1/2 dark:bg-slate-950 dark:text-white'>
				<p>
					This website is hosted on AWS, and it costs me money to operate and maintain this website.
					The ads on my personal website allow me to earn money so I can maintain this website and
					host it on AWS.
				</p>
				<button
					autoFocus
					className='border-2 border-black dark:border-white mt-2 p-1 bg-red-400 float-right'
					onClick={() => {
						document.querySelector("dialog")?.close();
					}}
				>
					Close
				</button>
			</dialog>
		</footer>
	);
};

export default Footer;
