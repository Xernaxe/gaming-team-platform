import React from 'react';
import { ITournaments } from '../_types/ITournaments';
import Image from 'next/image';

export const Card = (tournament: ITournaments) => {
	return (
		<div className='flex flex-col justify-center rounded-t-[0.63rem] bg-[linear-gradient(134deg,_#071626_-7.75%,_rgba(7,_22,_38,_0.00)_136.66%)] tablet:w-[332px] max-tablet:[&:nth-child(n+4)]:hidden max-desktop:[&:nth-child(n+5)]:hidden  desktopL:w-[23.125rem]'>
			<Image
				src={`/images/${tournament.imgSrc}`}
				alt=''
				width={335}
				height={194}
                className='object-cover w-auto h-auto max-h-[194px] rounded-t-[0.63rem] tablet:w-[332px] desktopL:w-[23.125rem]'
			/>
			<div className='p-5 '>
				<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>{tournament.title}</h3>
				{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
				<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>{tournament.date}</h4>

				<div className='flex gap-[1.88rem]'>
					<div className=''>
						<p className='font-oxanium text-sm'>Play mode</p>
						<p className='font-oxanium font-medium'>{tournament.playMode}</p>
					</div>

					<div className=''>
						<p className='font-oxanium text-sm'>Platform</p>
						<p className='font-oxanium font-medium'>{tournament.platform}</p>
					</div>

					<div className=''>
						<p className='font-oxanium text-sm'>Prize</p>
						<p className='font-oxanium font-medium'>{`$${tournament.prize}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
