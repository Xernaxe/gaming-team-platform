import React from 'react';

export const AsideSectionTitle = ({ title }: { title: string }) => {
	return (
		<div className='relative py-6'>
			<div className='flex items-center ml-6 px-2 gap-2 relative z-20 w-fit bg-postBg'>
				<h2 className='font-oxanium font-bold text-xl capitalize'>{title}</h2>
			</div>
			<div className='h-[5px] w-full z-10 bg-[#212932] absolute top-1/2'></div>
		</div>
	);
};
