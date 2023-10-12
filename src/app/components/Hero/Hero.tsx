import Link from 'next/link';
import React from 'react';
import { SkewedButton } from '../_globals/SkewedButton';
import Image from 'next/image';
import { HeroImg } from './HeroImg';

export const Hero = () => {
	return (
		<>
			<section className='hero | flex flex-col gap-[3.125rem] relative mb-20 tablet:mb-28 desktop:mb-40 pb-10 w-full tablet:flex-row tablet:justify-center tablet:py-8 tablet:items-center tablet:gap-[1.95rem] desktop:gap-[4.83rem] desktop:pb-0 desktopL:gap-[3.64rem]'>
				<div className='mt-[3.125rem] z-20 tablet:mt-0'>
					<h1 className='font-oxanium text-2xl font-semibold [word-spacing:0.5rem] leading-loose  tablet:text-[clamp(1.75rem,3.4vw,2.1rem)] tablet:[word-spacing:normal] desktop:text-[clamp(1.75rem,3.4vw,3rem)]'>
						Welcome to the{' '}
						<span className=' text-greenCyan font-[inherit] text-2xl font-semibold tablet:text-[clamp(1.75rem,3.4vw,2.1rem)] desktop:text-[clamp(1.75rem,3.4vw,3rem)]'>
							Esports
						</span>{' '}
					</h1>
					<h2 className='font-bold text-[2rem] font-[oxanium] leading-none mb-6 tablet:text-5xl tablet:font-semibold desktop:text-[clamp(3rem,4.5vw,4rem)] desktop:mb-10'>
						Multiverse
					</h2>

					<SkewedButton
						link={'https://google.com'}
						text='Join Tournament'
						width='large'
					/>
				</div>

				{/* @TODO: CHANGE PX TO RESPONSIVE */}
				<div className='flex justify-center flex-wrap gap-x-6 z-20 desktop:mt-[3%] desktop:h-[573px] desktop:overflow-hidden desktop:gap-x-7'>
					<div className='w-screen flex flex-col mobile:w-auto mobile:gap-y-10 desktopL:gap-y-[3.5625rem]'>
						<div className='relative w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] tablet:w-[clamp(9.875rem,_20.1vw,_16.875rem)] tablet:h-[clamp(10.5rem,_21vw,_18.375rem)]'>
							<Image
								className='object-cover rounded desktop:rounded-[0.625rem]'
								fill
								src='/images/cs-go.png'
								alt='CS:GO'
								priority={true}
							/>
						</div>
						<div className='ml-auto -mb-14 -top-14 relative w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] mobile:mb-0 mobile:top-0 tablet:w-[clamp(9.875rem,_20.1vw,_16.875rem)] tablet:h-[clamp(10.5rem,_21vw,_18.375rem)]'>
							<Image
								className='object-cover rounded desktop:rounded-[0.625rem]'
								fill
								src='/images/fortnite.png'
								alt='Fortnite'
								priority={true}
							/>
						</div>
					</div>
					<div className='hidden flex-col gap-y-10 mt-[0.875rem] mobile:flex desktop:mt-[1.6875rem] desktopL:gap-y-[3.5625rem]'>
						<div className='relative w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] tablet:w-[clamp(9.875rem,_20.1vw,_16.875rem)] tablet:h-[clamp(10.5rem,_21vw,_18.375rem)]'>
							<Image
								className='object-cover rounded desktop:rounded-[0.625rem]'
								fill
								src='/images/pubg.png'
								alt='PUBG'
								priority={true}
							/>
						</div>
						<div className='relative w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] tablet:w-[clamp(9.875rem,_20.1vw,_16.875rem)] tablet:h-[clamp(10.5rem,_21vw,_18.375rem)]'>
							<Image
								className='object-cover rounded desktop:rounded-[0.625rem]'
								fill
								src='/images/valorant.png'
								alt='Valorant'
								priority={true}
							/>
						</div>
					</div>
				</div>
				<HeroImg />
			</section>
		</>
	);
};
