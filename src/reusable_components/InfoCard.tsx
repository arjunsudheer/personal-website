interface InfoCardProps {
	title: string;
	imgSrc: string;
	description: string;
	url: string;
	displayAnimation: boolean;
}

const InfoCard = ({ title, imgSrc, description, url, displayAnimation }: InfoCardProps) => {
	const showInformationPage = (): void => {
		if (displayAnimation) {
			window.open(url);
		} else {
			window.open(url);
		}
	};

	return (
		<div
			className='m-3 mx-auto bg-blue-400 dark:bg-slate-600 dark:text-white text-center w-3/4 p-2.5 border-solid shadow-sm transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:border-white hover:outline-none hover:shadow duration-100'
			onClick={showInformationPage}
		>
			<h3 className='m-1 font-bold text-lg'>{title}</h3>
			<img className='mx-auto my-3 w-1/2' src={imgSrc} alt='Info Card Image' />
			<p className='m-1'>{description}</p>
		</div>
	);
};

export default InfoCard;
