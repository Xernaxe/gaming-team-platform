'use client';
import Image from 'next/image';
import React from 'react';
import { useBurgerMenu } from '../../_providers/BurgermenuContext';

export const HeroImg = () => {
	const { isBurgerMenuOpen } = useBurgerMenu();

	return (
		<div
			className={`hero-image | absolute -left-[clamp(1.25rem,_4.7vw,_1.875rem)] w-screen max-w-[100vw] top-0 h-[calc(100%+6rem)] -translate-y-[6rem] z-10 overflow-hidden tablet:-left-[clamp(2.5rem,_5vw,_10.62rem)] desktop:-translate-y-[9rem] desktop:h-[calc(100%+9rem)] desktopL:-left-[8.44rem]   ${
				isBurgerMenuOpen ? 'z-40' : ''
			}`}
		>
			<Image
				className='object-cover max-w-screen w-screen h-full'
				src={'/images/hero-bg.avif'}
				width={1920}
				height={1080}
				alt='Hero Image'
			/>
			<div className='overlay | bg-[#010a11] bg-opacity-[96%] absolute top-0 h-full w-full'></div>
			<div className='fog-left-bottom | absolute -bottom-1/2 -translate-y-[10%] left-1/2 -translate-x-[85%] h-[530px] w-[530px] rounded-[100%] bg-[#3FD2EC] bg-opacity-[35%] blur-[150px] tablet:left-[10%] tablet:translate-y-[40%] tablet:scale-150 desktop:-translate-y-[25%] desktop:left-[38%]'></div>
			<div className='fog-top-right | absolute -top-1/2 translate-y-[10%] right-1/2 translate-x-[85%] h-[530px] w-[530px] rounded-[100%] bg-[#3FD2EC] bg-opacity-[30%] blur-[150px] desktop:scale-150 desktop:translate-x-[135%] desktop:translate-y-[20%]'></div>
		</div>
	);
};
