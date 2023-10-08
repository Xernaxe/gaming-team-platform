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
					? 'max-tablet:[&:nth-child(n+4)]:hidden max-desktopL:[&:nth-child(n+5)]:hidden'
					: 'max-tablet:[&:nth-child(n+4)]:hidden desktopL:[&:nth-child(n+4)]:hidden'
			}
		flex flex-col w-full justify-center rounded-t-[0.63rem] bg-[linear-gradient(134deg,_#071626_-7.75%,_rgba(7,_22,_38,_0.00)_136.66%)] tablet:w-[48%]  desktopL:w-[23.125rem]`}
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
