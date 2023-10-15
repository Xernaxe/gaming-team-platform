import { INewsItems } from '@/app/_types/INewsItems';
import { Card } from '@/app/components/_globals/Card/Card';
import { NewsCardDetails } from '@/app/components/_globals/Card/NewsCardDetails';
import { SectionWrapper } from '@/app/components/_globals/SectionWrapper';
import Link from 'next/link';
import React from 'react';

export const BlogContainer = ({ newsItems }: { newsItems: INewsItems[] }) => {
	console.log(newsItems)
	// const newsItems: INewsItems[] = [
	// 	{
	// 		imageUrl: '/news-item_1.png',
	// 		_id: 'asd',
	// 		overview: 'asd',
	// 		link: 'asd',
	// 		title: 'Pro tips: How to improve your aim and reflexes in eSports',
	// 		tag: 'New',
	// 		_createdAt: 'Aug 25, 2023',
	// 	},
	// 	{
	// 		imageUrl: '/news-item_2.png',
	// 		_id: 'asd',
	// 		overview: 'asd',
	// 		link: 'asd',
	// 		title: 'Top 10 eSports games to watch and play in 2023',
	// 		tag: 'Trending',
	// 		_createdAt: 'Aug 27, 2023',
	// 	},
	// 	{
	// 		imageUrl: '/news-item_3.png',
	// 		_id: 'asd',
	// 		overview: 'asd',
	// 		link: 'asd',
	// 		title: 'The best gaming accessories and gadgets for every gamer',
	// 		tag: 'Trending',
	// 		_createdAt: 'Aug 27, 2023',
	// 	},
	// 	{
	// 		imageUrl: '/news-item_4.png',
	// 		_id: 'asd',
	// 		overview: 'asd',
	// 		link: 'asd',
	// 		title: 'The life of a professional eSports gamer',
	// 		tag: 'Sponsored',
	// 		_createdAt: 'Aug 27, 2023',
	// 	},
	// ];

	return (
		<SectionWrapper>
			<div className='flex flex-col items-center'>
				<div className='flex flex-col items-center w-full gap-6 mb-10 tablet:flex-wrap tablet:flex-row tablet:justify-center desktopL:gap-[29px]'>
					{newsItems.map((newsItem) => {
						return (
							<Link key={newsItem._id} href={`/blog/${newsItem.slug}`}>
								<Card >
									<NewsCardDetails {...newsItem} />
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</SectionWrapper>
	);
};
