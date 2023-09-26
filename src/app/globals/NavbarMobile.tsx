"use client";

import Link from "next/link";
import React, { useState } from "react";
import BurgerMenu from "./Burgermenu";
import INavLinks from "../_types/INavLinks";

interface NavbarMobileProps {
	navLinks: INavLinks[];
}
export const NavbarMobile: React.FC<NavbarMobileProps> = ({ navLinks }) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	return (
		<nav className="desktop:hidden flex justify-between relative items-center">
			<Link href={"#"}>
				<img src="./images/logo.svg" className="w-[clamp(3.25rem,_10.5vw,_4.875rem)]"></img>
			</Link>

			<BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />

			{isBurgerMenuOpen && (
				<>
					<div className="absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2">
						<ul className="flex flex-col gap-6">
							{navLinks.map((link: any) => {
								return (
									<li>
										<Link href={link.href}>
											<p className=" text-center font-oxanium text-xl">{link.name}</p>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</>
			)}
		</nav>
	);
};
