import React from 'react';
import Image from 'next/image';
import { NewsCardDetails } from '../Card/NewsCardDetails';
import { Card } from '../Card/Card';
import { INewsItems } from '@/app/_types/INewsItems';

export const SimilarArticles = () => {
	const newsItem: INewsItems = {
		_createdAt: '2017-02-12T09:15:00Z',
		_id: 'abccc',
		tag: 'Tips',
		title: 'The best gaming accessories and gadgets for every gamer',
		overview: "text",
		imageUrl: '/images/news-item_2.png',
		slug: 'the-best-gaming-acc'
	}
	return (
		<div className='flex flex-col gap-4'>
			<div className='relative'>
				<div className='flex items-center ml-2 px-2 gap-2 relative z-20 w-fit bg-postBg'>
					<h2 className='font-oxanium font-bold text-xl'>Similar Articles</h2>
				</div>
				<div className='h-[5px] w-full z-10 bg-[#212932] absolute top-1/2'></div>
			</div>

			<div className='flex flex-col gap-4 tablet:flex-row tablet:flex-wrap'>

				<Card className='desktopL:max-w-[48%]'>
					<NewsCardDetails {...newsItem}/>
				</Card>
				<Card className='desktopL:max-w-[48%]'>
					<NewsCardDetails {...newsItem}/>
				</Card>
			</div>
		</div>
	);
};
