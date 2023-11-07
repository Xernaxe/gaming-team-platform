'use client';
import Image from 'next/image';
import React, { createContext, useContext } from 'react';
import { useBurgerMenu } from '../../../../_providers/BurgermenuContext';

const BurgerMenu = () => {
	const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useBurgerMenu();

	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<div className='burgermenu' onClick={toggleBurgerMenu}>
			{!isBurgerMenuOpen && (
				<Image
					width={32}
					height={32}
					className='w-[clamp(2rem,_5.3vw,_2.5rem)] h-[clamp(2rem,_5.3vw,_2.5rem)]'
					src='/images/burgermenu.svg'
					alt='OPEN'
					priority={true}
				/>
			)}
			{isBurgerMenuOpen && (
				<Image
					width={24}
					height={24}
					src='/images/closemenu.svg'
					alt='CLOSE'
					priority={true}
				/>
			)}
		</div>
	);
};

export default BurgerMenu;
