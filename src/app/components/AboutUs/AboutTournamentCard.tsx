import React from 'react';
import { IAboutTournamentCard } from '../../_types/IAboutTournamentCard';

export const AboutTournamentCard: React.FC<IAboutTournamentCard> = ({
	title,
	count,
}) => {
	return (
		<div className='w-full tablet:w-full h-[5.75rem] bg-[linear-gradient(143deg,#0A1F35_-9.28%,#040D17_114.14%)] relative -skew-x-[10deg] border border-solid [border-image:linear-gradient(143deg,#346296_-9.28%,_#08192d_114.14%)_1] flex flex-col justify-center gap-2 desktop:w-[clamp(9.5rem,_14vw,_12.625rem)]'>
			<div className=' desktopL:pl-8 skew-x-[10deg] flex flex-col gap-2'>
				<h1 className='text-sm text-center desktopL:text-left'>{title}</h1>
				<h2 className='text-2xl text-center desktopL:text-left font-oxanium'>
					{count}
				</h2>
			</div>
		</div>
	);
};
