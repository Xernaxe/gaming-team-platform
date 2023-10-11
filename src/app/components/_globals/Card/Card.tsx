import React from 'react';
import { ITournaments } from '../../../_types/ITournaments';
import { IShopItems } from '../../../_types/IShopItems';
import { TournamentCardDetails } from './TournamentCardDetails';
import { ShopCardDetails } from './ShopCardDetails';
import { NewsCardDetails } from './NewsCardDetails';
import { INewsItems } from '../../../_types/INewsItems';
import styles from './Card.module.scss';

export const Card = (item: ITournaments | IShopItems | INewsItems) => {
	const isTournamentItem = item.hasOwnProperty('platform');
	const isShopItem = item.hasOwnProperty('price');
	return (
		<div
			className={
				styles.cardWrapper +
				` ${isTournamentItem ? styles.tournament : styles.notTournament}
		`
			}
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
