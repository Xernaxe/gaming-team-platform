'use client';
import Image from 'next/image';
import React from 'react';
import { useBurgerMenu } from '../../_providers/BurgermenuContext';
import styles from './HeroImg.module.scss'

export const HeroImg = () => {
	const { isBurgerMenuOpen } = useBurgerMenu();

	return (
		<div
			className={styles.heroImage + ` ${
				isBurgerMenuOpen ? ' z-40' : ''
			}`}
		>
			<Image
				className='object-cover max-w-screen w-screen h-full'
				src={'/images/hero-bg.png'}
				width={1920}
				height={1080}
				alt='Hero Image'
				priority={true}
			/>
			<div className={styles.overlay}></div>
			<div className='fog-left-bottom | absolute -bottom-1/2 -translate-y-[10%] left-1/2 -translate-x-[85%] h-[530px] w-[530px] rounded-[100%] bg-[#3FD2EC] bg-opacity-[35%] blur-[150px] tablet:left-[10%] tablet:translate-y-[40%] tablet:scale-150 desktop:-translate-y-[25%] desktop:left-[38%]'></div>
			<div className='fog-top-right | absolute -top-1/2 translate-y-[10%] right-1/2 translate-x-[85%] h-[530px] w-[530px] rounded-[100%] bg-[#3FD2EC] bg-opacity-[30%] blur-[150px] desktop:scale-150 desktop:translate-x-[135%] desktop:translate-y-[20%]'></div>
		</div>
	);
};
