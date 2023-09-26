"use client";
import React from "react";

const BurgerMenu = ({ setIsBurgerMenuOpen, isBurgerMenuOpen }: any) => {
	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<div className="burgermenu" onClick={toggleBurgerMenu}>
			{!isBurgerMenuOpen && (
					<img className="w-[clamp(2rem,_5.3vw,_2.5rem)] h-[clamp(2rem,_5.3vw,_2.5rem)]" src="./images/burgermenu.svg" alt="OPEN" />
			)}
			{isBurgerMenuOpen && (
				<img src="./images/closemenu.svg" alt="CLOSE" />
			)}
		</div>
	);
};

export default BurgerMenu;
