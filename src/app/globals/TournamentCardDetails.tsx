import React from 'react';
import Image from 'next/image';
import { ITournaments } from '../_types/ITournaments';

export const TournamentCardDetails = (item: ITournaments) => {
	return (
		<>
			<div className='relative h-[194px] w-[335px] max-h-[194px] tablet:w-[332px] desktopL:w-[23.125rem]'>
				<Image
					src={`/images/${item.imgSrc}`}
					alt=''
					fill={true}
					className='object-cover rounded-t-[0.63rem] '
				/>
			</div>
			<div className='p-5 '>
				<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>
					{item.title}
				</h3>
				{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
				<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>
					{item.date}
				</h4>

				<div className='flex gap-[1.88rem]'>
					<div className=''>
						<p className='font-oxanium text-sm'>Play mode</p>
						<p className='font-oxanium font-medium'>{item.playMode}</p>
					</div>

					<div className=''>
						<p className='font-oxanium text-sm'>Platform</p>
						<p className='font-oxanium font-medium'>{item.platform}</p>
					</div>

					<div className=''>
						<p className='font-oxanium text-sm'>Prize</p>
						<p className='font-oxanium font-medium'>{`$${item.prize}`}</p>
					</div>
					
				</div>
			</div>
		</>
	);
};
