import React from 'react';
import { AsideSection } from './AsideSection';
import { AsideSectionGames } from './AsideSectionGames';
import { AsideSectionTournaments } from './AsideSectionTournaments';

export const InnerPageAside = () => {
	return (
		<aside className='hidden flex-col gap-10  desktopL:flex'>
			<AsideSection title={"Upcoming tournaments"}>
				<AsideSectionTournaments className='bg-postAccent'/>
				<AsideSectionTournaments className='bg-postBg'/>
				<AsideSectionTournaments className='bg-postAccent rouned-b-[10px]'/>
			</AsideSection>

			<AsideSection title={'Our Upcoming Games'}>
				<AsideSectionGames className='bg-postAccent'/>
				<AsideSectionGames className='bg-postBg'/>
				<AsideSectionGames className='bg-postAccent rounded-b-[10px]'/>
			</AsideSection>
			<div className='w-[370px] bg-postBg rounded-[10px]'></div>
		</aside>
	);
};
