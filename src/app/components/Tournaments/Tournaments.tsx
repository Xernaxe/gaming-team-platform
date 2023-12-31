import React from 'react';
import { SectionWrapper } from '../_globals/SectionWrapper';
import { SectionHeader } from '../_globals/SectionHeader';
import { SkewedButton } from '../_globals/SkewedButton';
import { Card } from '../_globals/Card/Card';
import { ITournaments } from '../../_types/ITournaments';
import { TournamentCardDetails } from '../_globals/Card/TournamentCardDetails';

export const Tournaments = () => {
	const tournaments: ITournaments[] = [
		{
			imgSrc: 'cs-go_1.png',
			title: 'CS:GO Global Gaming League',
			date: '10 Sept 2023 / 14:00 PM IST',
			playMode: '5v5',
			platform: 'PC',
			prize: 500,
		},
		{
			imgSrc: 'pubg_1.png',
			title: 'PUBG Esports Championship',
			date: '15 Sept 2023 / 20:00 PM IST',
			playMode: '1v1',
			platform: 'Mobile',
			prize: 600,
		},
		{
			imgSrc: 'freefire.png',
			title: 'Free Fire ultimate challenge',
			date: '20 Sept 2023 / 20:00 PM IST',
			playMode: '1v1',
			platform: 'Mobile',
			prize: 600,
		},
		{
			imgSrc: 'cod.png',
			title: 'Call of Duty Mobile league',
			date: '21 Sept 2023 / 20:00 PM IST',
			playMode: '1v1',
			platform: 'Mobile',
			prize: 200,
		},
		{
			imgSrc: 'cs-go_2.png',
			title: 'CS:GO Ultimate Challenge',
			date: '21 Sept 2023 / 16:00 PM IST',
			playMode: '3v3',
			platform: 'Console',
			prize: 150,
		},
		{
			imgSrc: 'overwatch.png',
			title: 'Overwatch league tournament',
			date: '25 Sept 2023 / 21:00 AM IST',
			playMode: '5v5',
			platform: 'PC',
			prize: 500,
		},
	];

	return (
		<SectionWrapper>
			<SectionHeader title='Tournaments' />
			<div className='flex flex-col items-center'>
				<div className='flex flex-col items-center w-full gap-6 mb-10 tablet:flex-wrap tablet:flex-row tablet:justify-center desktopL:gap-[29px]'>
					{tournaments.map((tournament) => {
						return (
							<Card
								key={tournament.title}
								className='max-tablet:[&:nth-child(n+4)]:hidden max-desktopL:[&:nth-child(n+5)]:hidden'
							>
								<TournamentCardDetails {...tournament} />
							</Card>
						);
					})}
				</div>

				<SkewedButton text='View More' width='normal' />
			</div>
		</SectionWrapper>
	);
};
