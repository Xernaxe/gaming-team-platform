import React from 'react';
import Image from 'next/image';
import { INewsItems } from '../../../_types/INewsItems';
import { getDateFromPosts } from '@/app/_helpers/helpers';

export const NewsCardDetails = (newsItem: INewsItems) => {
	return (
		<>
			<div className='relative h-[51.71vw] tablet:max-h-[25vw] desktop:max-h-[194px] w-full max-h-[250px] desktopL:w-[23.125rem]'>
				<Image
					src={newsItem.imageUrl}
					alt=''
					fill={true}
					className='object-cover rounded-t-[0.63rem] '
				/>
			</div>
			<div className='p-5 flex flex-col '>
				<div className='flex items-center gap-[0.44rem]'>
					<h4 className=' text-sm font-medium uppercase text-wGrey tablet:text-base'>
						{newsItem.tag}
					</h4>
					<div className='w-1 h-1 bg-wGrey rounded-[50%]'></div>
					<h4 className='text-sm font-medium text-wGrey tablet:text-base'>
						{getDateFromPosts(newsItem._createdAt)}
					</h4>
				</div>
				<h3 className='font-oxanium text-xl font-medium leading-[150%] desktopL:text-xl mt-[0.52rem] mb-[0.22rem] max-tablet:max-w-[18.375rem]'>
					{newsItem.title}
				</h3>
			</div>
		</>
	);
};
