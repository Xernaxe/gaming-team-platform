import React from 'react';
import { SectionWrapper } from '../_globals/SectionWrapper';
import { SectionHeader } from '../_globals/SectionHeader';
import { Card } from '../_globals/Card/Card';
import { SkewedButton } from '../_globals/SkewedButton';
import { INewsItems } from '../../_types/INewsItems';

export const LatestNews = () => {
	const newsItems: INewsItems[] = [
		{
			imgSrc: 'news-item_1.avif',
			title: 'Pro tips: How to improve your aim and reflexes in eSports',
			tag: 'New',
			date: 'Aug 25, 2023',
		},
		{
			imgSrc: 'news-item_2.avif',
			title: 'Top 10 eSports games to watch and play in 2023',
			tag: 'Trending',
			date: 'Aug 27, 2023',
		},
		{
			imgSrc: 'news-item_3.avif',
			title: 'The best gaming accessories and gadgets for every gamer',
			tag: 'Trending',
			date: 'Aug 27, 2023',
		},
		{
			imgSrc: 'news-item_4.avif',
			title: 'The life of a professional eSports gamer',
			tag: 'Sponsored',
			date: 'Aug 27, 2023',
		},
	];

	return (
		<SectionWrapper>
			<SectionHeader title='Latest News' />

			<div className='flex flex-col items-center'>
				<div className='flex flex-col items-center w-full gap-6 mb-10 tablet:flex-wrap tablet:flex-row tablet:justify-center desktopL:gap-[29px]'>
					{newsItems.map((newsItem, index) => {
						return <Card key={index} {...newsItem} />;
					})}
				</div>

				<SkewedButton text='View More' width='normal' />
			</div>
		</SectionWrapper>
	);
};
