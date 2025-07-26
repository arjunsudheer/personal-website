interface InfoPillProps {
	infoText: string;
}

function InfoPill({ infoText }: InfoPillProps) {
	return (
		// Display a pill-shaped label
		<div className='inline-flex items-center justify-center rounded-full px-4 py-2 bg-gray-300 dark:bg-slate-700 text-sm font-medium text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out whitespace-nowrap truncate text-center w-full'>
			{infoText}
		</div>
	);
}

export default InfoPill;
