import React from 'react';
import { ITournaments } from '../../../_types/ITournaments';
import { IShopItems } from '../../../_types/IShopItems';
import { TournamentCardDetails } from './TournamentCardDetails';
import { ShopCardDetails } from './ShopCardDetails';
import { NewsCardDetails } from './NewsCardDetails';
import { INewsItems } from '../../../_types/INewsItems';

export const Card = (item: ITournaments | IShopItems | INewsItems) => {
	const isTournamentItem = item.hasOwnProperty('platform');
	const isShopItem = item.hasOwnProperty('price');
	return (
		<div
			className={` ${
				isTournamentItem
					? 'max-desktopL:[&:nth-child(n+5)]:hidden'
					: 'desktopL:[&:nth-child(n+4)]:hidden'
			} Card | flex flex-col w-full justify-center rounded-[0.63rem] tablet:w-[48%]  desktopL:w-[23.125rem] max-tablet:[&:nth-child(n+4)]:hidden`}
		>
			{isTournamentItem ? (
				<TournamentCardDetails {...(item as ITournaments)} />
			) : isShopItem ? (
				<ShopCardDetails {...(item as IShopItems)} />
			) : (
				<NewsCardDetails {...(item as INewsItems)} />
			)}
		</div>
	);
};
