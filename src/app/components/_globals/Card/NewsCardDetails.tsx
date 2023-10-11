import React from 'react';
import Image from 'next/image';
import { INewsItems } from '../../../_types/INewsItems';
import styles from './Card.module.scss';

export const NewsCardDetails = (shopItem: INewsItems) => {
	return (
		<>
			<div className={styles.imageWrapper}>
				<Image
					src={`/images/${shopItem.imgSrc}`}
					alt=''
					fill={true}
					className='object-cover rounded-t-[0.63rem] '
				/>
			</div>
			<div className='p-5 flex flex-col '>
				<div className='flex items-center gap-[0.44rem]'>
					<h4 className=' text-sm font-medium uppercase text-wGrey tablet:text-base'>
						{shopItem.tag}
					</h4>
					<div className='w-1 h-1 bg-wGrey rounded-[50%]'></div>
					<h4 className='text-sm font-medium uppercase text-wGrey tablet:text-base'>
						{shopItem.date}
					</h4>
				</div>
				<h3 className='font-oxanium text-xl font-medium leading-[150%] desktopL:text-xl mt-[0.52rem] mb-[0.22rem] max-tablet:max-w-[18.375rem]'>
					{shopItem.title}
				</h3>
			</div>
		</>
	);
};
