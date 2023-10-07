import React from 'react';
import { IAboutTournamentCard } from '../../_types/IAboutTournamentCard';
import { SkewedButton } from '../_globals/SkewedButton';
import { AboutTournamentCard } from './AboutTournamentCard';

interface AboutUsContentMobileProps {
	aboutTournaments: IAboutTournamentCard[];
}

export const AboutUsContentMobile: React.FC<AboutUsContentMobileProps> = ({
	aboutTournaments,
}) => {
	return (
		<>
			<div className=' flex flex-col gap-6 mt-10 w-full tablet:w-[47%] tablet:mt-0 tablet:gap-8 desktop:flex-wrap desktop:flex-row desktop:hidden'>
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

			<p className=' text-center leading-7 text-wGrey mt-8 mb-10 tablet:text-left desktop:hidden'>
				He is a professional esports gamer who competes in the game Dota 2. He
				is the carry and star player of the team Evil Geniuses, one of the most
				successful and popular teams in the world. He is known for his
				incredible mechanical skills, game sense, and versatility. He can play
				any hero and any role, and often surprises his opponents with his
				unconventional picks and builds.
			</p>

			<div className='m-auto desktop:hidden'>
				<SkewedButton
					link='https://www.google.com'
					text='Learn More'
					width='normal'
				/>
			</div>
		</>
	);
};
