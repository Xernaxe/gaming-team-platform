import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const AsideSectionGames = ({className}: {className:string}) => {
	return (
		<div className={twMerge('p-5', className)}>
			<h4 className='text-center text-xl'>Worlds 2023 | South Korea</h4>
			<div className='flex justify-around items-center'>
				<div className='relative w-20 h-20'>
					<Image src={'/images/logo.svg'} alt='Logo' fill></Image>
				</div>
				<span className=' text-xl font-bold'>VS</span>
				<div className='relative w-20 h-20'>
					<Image src={'/images/logo.svg'} alt='Logo' fill></Image>
				</div>
			</div>
		</div>
	);
};
