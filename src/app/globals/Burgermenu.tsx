"use client";
import Image from "next/image";
import React from "react";

interface BurgerMenuProps {
  setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isBurgerMenuOpen: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ setIsBurgerMenuOpen, isBurgerMenuOpen }) => {
	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<div className="burgermenu" onClick={toggleBurgerMenu}>
			{!isBurgerMenuOpen && (
					<Image className="w-[clamp(2rem,_5.3vw,_2.5rem)] h-[clamp(2rem,_5.3vw,_2.5rem)]" src="./images/burgermenu.svg" alt="OPEN" />
			)}
			{isBurgerMenuOpen && (
				<Image src="./images/closemenu.svg" alt="CLOSE" />
			)}
		</div>
	);
};

export default BurgerMenu;
