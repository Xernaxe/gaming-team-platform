import React from 'react';

interface ISectionHeader {
	title: string;
}

export const SectionHeader: React.FC<ISectionHeader> = ({ title }) => {
	return (
		<div className='flex flex-col gap-[10px] tablet:gap-4 desktopL:gap-5 items-center mb-10'>
			{/* H2: text-[clamp(1.5rem,_6.2vw,_2rem)] */}
			<h2 className=' font-oxanium text-2xl tablet:text-[clamp(2rem,_2.8vw,_2.5rem)] font-bold'>
				{title}
			</h2>
			<div className=' w-[50px] h-1 bg-greenCyan skew-x-[-10deg]'></div>
		</div>
	);
};
