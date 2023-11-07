import React from 'react';
import Image from 'next/image';
import { AsideSection } from './AsideSection';
import { AsideSectionGames } from './AsideSectionGames';

export const InnerPageAside = () => {
	return (
		<aside className='hidden flex-col gap-10  desktopL:flex'>
			<AsideSection title={"Upcoming tournaments"}>

				<div className='p-5 bg-postAccent'>
					<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>
						{'Free Fire ultimate challenge'}
					</h3>
					{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
					<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>
						{'20 Sept 2023 / 22:00 AM IST'}
					</h4>

					<div className='flex gap-[1.88rem] justify-evenly desktop:justify-start'>
						<div className=''>
							<p className='font-oxanium text-sm'>Play mode</p>
							<p className='font-oxanium font-medium'>{'5V5'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Platform</p>
							<p className='font-oxanium font-medium'>{'Any'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Prize</p>
							<p className='font-oxanium font-medium'>{`$${'50'}`}</p>
						</div>
					</div>
				</div>

				<div className='p-5 bg-postBg'>
					<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>
						{'Free Fire ultimate challenge'}
					</h3>
					{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
					<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>
						{'20 Sept 2023 / 22:00 AM IST'}
					</h4>

					<div className='flex gap-[1.88rem] justify-evenly desktop:justify-start'>
						<div className=''>
							<p className='font-oxanium text-sm'>Play mode</p>
							<p className='font-oxanium font-medium'>{'5V5'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Platform</p>
							<p className='font-oxanium font-medium'>{'Any'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Prize</p>
							<p className='font-oxanium font-medium'>{`$${'50'}`}</p>
						</div>
					</div>
				</div>

				<div className='p-5 bg-postAccent'>
					<h3 className='font-oxanium text-xl font-medium desktopL:text-[1.375rem]'>
						{'Free Fire ultimate challenge'}
					</h3>
					{/* @TODO: CHANGE FROM HARDCODED TO COMPUTED */}
					<h4 className='pt-[0.62rem] pb-5 text-sm font-medium desktopL:text-base'>
						{'20 Sept 2023 / 22:00 AM IST'}
					</h4>

					<div className='flex gap-[1.88rem] justify-evenly desktop:justify-start'>
						<div className=''>
							<p className='font-oxanium text-sm'>Play mode</p>
							<p className='font-oxanium font-medium'>{'5V5'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Platform</p>
							<p className='font-oxanium font-medium'>{'Any'}</p>
						</div>

						<div className=''>
							<p className='font-oxanium text-sm'>Prize</p>
							<p className='font-oxanium font-medium'>{`$${'50'}`}</p>
						</div>
					</div>
				</div>
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
