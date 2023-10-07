import React from 'react';
import { SectionWrapper } from '../globals/SectionWrapper';
import { SectionHeader } from '../globals/SectionHeader';
import { IShopItems } from '../_types/IShopItems';
import { Card } from '../globals/Card';
import { SkewedButton } from '../globals/SkewedButton';

export const OurShop = () => {
	const shopItems: IShopItems[] = [
		{
			imgSrc: 'shop-item_1.png',
			title: 'Ultimate gaming PC',
			tag: 'New',
			price: 1099,
		},
		{
			imgSrc: 'shop-item_2.png',
			title: 'Xbox gaming controller',
			tag: 'Popular',
			price: 599,
		},
		{
			imgSrc: 'shop-item_3.jpg',
			title: 'Mechanical gaming keyboard',
			tag: 'New',
			price: 399,
		},
		{
			imgSrc: 'shop-item_4.png',
			title: 'Gaming headphone',
			tag: 'Popular',
			price: 599,
		},
	];

	return (
		<SectionWrapper>
			<SectionHeader title='Our Shop' />

			<div className='flex flex-col items-center'>
				<div className='flex flex-col items-center gap-6 mb-10 tablet:flex-wrap tablet:flex-row tablet:justify-center desktopL:gap-[29px]'>
					{shopItems.map((shopItem, index) => {
						return <Card key={index} {...shopItem} />;
					})}
				</div>

				<SkewedButton text='View More' width='normal' />
			</div>
		</SectionWrapper>
	);
};
