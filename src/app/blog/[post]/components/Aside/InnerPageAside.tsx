import React from 'react';
import { AsideSection } from './AsideSection';
import { AsideSectionGames } from './AsideSectionGames';
import { AsideSectionTournaments } from './AsideSectionTournaments';

export const InnerPageAside = () => {
	return (
		<aside className='hidden flex-col gap-10  desktopL:flex'>
			<AsideSection title={'Upcoming tournaments'}>
				<AsideSectionTournaments className='border-b-4 border-b-postAccent' />
				<AsideSectionTournaments className='border-b-4 border-b-postAccent' />
				<AsideSectionTournaments className='rouned-b-[10px]' />
			</AsideSection>

			<AsideSection title={'Our Upcoming Games'}>
				<AsideSectionGames className='border-b-4 border-b-postAccent' />
				<AsideSectionGames className='border-b-4 border-b-postAccent' />
				<AsideSectionGames className='rounded-b-[10px]' />
			</AsideSection>
			<div className='w-[370px] bg-postBg rounded-[10px]'></div>
		</aside>
	);
};
