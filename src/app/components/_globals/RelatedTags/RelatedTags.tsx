import React from 'react';

export const RelatedTags = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='relative'>
				<div className='flex items-center ml-2 px-2 gap-2 relative z-20 w-fit bg-postBg'>
					<h2 className='font-oxanium font-bold text-xl'>Related Tags</h2>
				</div>
				<div className='h-[5px] w-full z-10 bg-[#212932] absolute top-1/2'></div>
			</div>

			<div className='flex flex-wrap gap-2'>
				<button className='px-8 py-1 border border-solid border-white -skew-x-[5deg]'>
					<span className='font-oxanium font-bold skew-x-[5deg]'>Tips</span>
				</button>

				<button className='px-8 py-1 border border-solid border-white -skew-x-[5deg]'>
					<span className='font-oxanium font-bold skew-x-[5deg]'>Tips</span>
				</button>

				<button className='px-8 py-1 border border-solid border-white -skew-x-[5deg]'>
					<span className='font-oxanium font-bold skew-x-[5deg]'>Tips</span>
				</button>
			</div>
		</div>
	);
};
