import React from 'react';
import { twMerge } from 'tailwind-merge';

export const AsideSectionTournaments = ({
	className,
}: {
	className: string;
}) => {
	return (
		<div className={twMerge('p-5', className)}>
			<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>
				{'Free Fire ultimate challenge'}
			</h3>
			{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
			<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>
				{'20 Sept 2023 / 22:00 AM IST'}
			</h4>

			<div className='flex gap-[1.88rem] justify-evenly desktop:justify-start'>
				<div className=''>
					<p className='font-oxanium text-sm'>Play mode</p>
					<p className='font-oxanium font-medium text-greenCyan'>{'5V5'}</p>
				</div>

				<div className=''>
					<p className='font-oxanium text-sm'>Platform</p>
					<p className='font-oxanium font-medium text-greenCyan'>{'Any'}</p>
				</div>

				<div className=''>
					<p className='font-oxanium text-sm'>Prize</p>
					<p className='font-oxanium font-medium text-greenCyan'>{`$${'50'}`}</p>
				</div>
			</div>
		</div>
	);
};
