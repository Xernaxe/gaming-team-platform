import React from 'react';
import { SectionHeader } from '../_globals/SectionHeader';
import Image from 'next/image';
import { AboutUsContentMobile } from './AboutUsContentMobile';
import { IAboutTournamentCard } from '../../_types/IAboutTournamentCard';
import { AboutUsContentDesktop } from './AboutUsContentDesktop';
import { SectionWrapper } from '../_globals/SectionWrapper';

export const AboutUs = () => {
	const aboutTournamentsArray: IAboutTournamentCard[] = [
		{ title: 'Tournaments played', count: 30 },
		{ title: 'Tournaments won', count: 10 },
		{ title: 'Awards won', count: 5 },
	];

	return (
		<SectionWrapper>
			<SectionHeader title='About Us' />
			<div className=' max-w-[calc(100%_-_1.1rem)] m-auto flex flex-col items-center tablet:flex-row tablet:flex-wrap tablet:gap-x-[2.5rem] tablet:items-start tablet:max-w-[calc(100%_-_0.5rem)] desktop:flex-row desktop:flex-nowrap desktop:gap-x-16 desktopL:px-[2.19rem]'>
				<Image
					className='object-cover w-[21.80538rem] h-[23.21488rem] -skew-x-[2deg] tablet:w-[47%] tablet:-skew-x-[3deg] desktop:w-[21.80538rem]'
					src={'/images/about-us.jpg'}
					alt='About Us'
					width={348.886}
					height={371.438}
				/>

				<AboutUsContentDesktop aboutTournaments={aboutTournamentsArray} />
				<AboutUsContentMobile aboutTournaments={aboutTournamentsArray} />
			</div>
		</SectionWrapper>
	);
};
