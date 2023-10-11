import React from 'react';
import { SectionWrapper } from '../_globals/SectionWrapper';
import { SkewedButton } from '../_globals/SkewedButton';
import Image from 'next/image';
import { BannerButton } from './BannerButton';
import styles from './TournamentBanner.module.scss'

export const TournamentBanner = () => {
	return (
		<SectionWrapper>
			<div className={styles.banner}>
				<div className={styles.imageWrapper}>
					<Image
						src={'/images/logo.svg'}
						alt='Logo'
						width={39}
						height={30}
						className='max-w-[39px] w-auto desktop:max-w-[3.65625rem]'
					/>
				</div>
				<h3>
					Level Up Your Gaming Experience: Join Our Exclusive YouTube Channel
					Membership Today!
				</h3>
				<div className='skew-x-[1deg] relative z-20 desktop:skew-x-[5deg] desktop:hidden'>
					<SkewedButton text='Join Tournament' width='large' />
				</div>
				<div className='relative z-20'>
					<BannerButton text='Join Tournament' link='#' />
				</div>
				<div className={styles.backgroundImage}>
					<Image
						src={'/images/banner-bg.jpg'}
						alt='banner bg'
						width={403.427}
						height={1111.263}
						priority={true}
						className='absolute top-0 left-0 object-cover max-w-screen w-screen h-full'
					></Image>
					<div></div>
				</div>
			</div>
		</SectionWrapper>
	);
};
