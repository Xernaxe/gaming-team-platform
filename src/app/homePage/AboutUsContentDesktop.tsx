import React from 'react';
import { IAboutTournamentCard } from '../_types/IAboutTournamentCard';
import { SkewedButton } from '../globals/SkewedButton';
import { AboutTournamentCard } from './AboutTournamentCard';

interface AboutUsContentDesktopProps {
	aboutTournaments: IAboutTournamentCard[];
}

export const AboutUsContentDesktop: React.FC<AboutUsContentDesktopProps> = ({
	aboutTournaments,
}) => {
	return (
		<div className=' max-desktop:hidden w-[51vw]'>
			<div className=' flex flex-wrap flex-row desktop:justify-between'>
				{aboutTournaments.map((card, index) => {
					return (
						<AboutTournamentCard
							key={index}
							title={card.title}
							count={card.count}
						/>
					);
				})}
			</div>

			<p className='leading-7 text-wGrey mt-8 mb-8 text-left'>
				He is a professional esports gamer who competes in the game Dota 2. He
				is the carry and star player of the team Evil Geniuses, one of the most
				successful and popular teams in the world. He is known for his
				incredible mechanical skills, game sense, and versatility. He can play
				any hero and any role, and often surprises his opponents with his
				unconventional picks and builds.
			</p>

			<SkewedButton
				link='https://www.google.com'
				text='Learn More'
				width='normal'
			/>
		</div>
	);
};
