import React from 'react';
import { SectionWrapper } from '../_globals/SectionWrapper';
import { SkewedButton } from '../_globals/SkewedButton';
import Image from 'next/image';
import { BannerButton } from './BannerButton';

export const TournamentBanner = () => {
	return (
		<SectionWrapper>
			<div className='flex flex-col items-center p-6  relative -skew-x-[1deg] tablet:py-[1.875rem] tablet:px-[5.5rem] desktop:flex-row desktop:px-[2rem] desktopL:px-[4.37rem] desktop:gap-[1.88rem] desktop:py-[3.2625rem] desktop:-skew-x-[3deg]'>
				<div className='skew-x-[1deg] flex items-center relative z-20 justify-center bg-[linear-gradient(151deg,_#1B3B60_8.05%,_#040D17_154.57%)] w-[3.75rem] h-[3.75rem] rounded-[50%] desktop:skew-x-[5deg] desktop:min-w-[90px] desktop:min-h-[90px] desktop:bg-[linear-gradient(150deg,_#0A1F35_-10.24%,_#040D17_161.22%)]'>
					<Image
						src={'/images/logo.svg'}
						alt='Logo'
						width={39}
						height={30}
						className='max-w-[39px] w-auto desktop:max-w-[3.65625rem]'
					/>
				</div>
				<h3 className='skew-x-[1deg] py-6 desktop:p-0 relative z-20 font-semibold font-oxanium leading-[160%] text-center tablet:text-xl desktop:text-left desktop:skew-x-[5deg] desktop:leading-[160%] desktopL:text-2xl desktopL:leading-[160%] desktopL:font-semibold desktopL:pr-[80px]'>
					Level Up Your Gaming Experience: Join Our Exclusive YouTube Channel
					Membership Today!
				</h3>
				<div className='skew-x-[1deg] relative z-20 desktop:skew-x-[5deg] desktop:hidden'>
					<SkewedButton text='Join Tournament' width='large' />
				</div>
				<div className='relative z-20'>
					<BannerButton text='Join Tournament' link='#' />
				</div>
				<div className=' z-10'>
					<Image
						src={'/images/banner-bg.jpg'}
						alt='banner bg'
						width={403.427}
						height={1111.263}
						priority={true}
						className='absolute top-0 left-0 object-cover max-w-screen w-screen h-full'
					></Image>
					<div className='absolute top-0 left-0 h-full w-full bg-[linear-gradient(96deg,_rgba(15,_43,_65,_0.90)_-4.34%,_rgba(1,_10,_16,_0.90)_103.42%)]'></div>
				</div>
			</div>
		</SectionWrapper>
	);
};
