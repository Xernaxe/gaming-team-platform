import React from "react";
import INavLinks from "../_types/INavLinks";
import Link from "next/link";
import Image from "next/image";

interface NavbarDesktopProps {
	navLinks: INavLinks[];
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ navLinks }) => {
	const navFirst3 = navLinks.slice(0, 3);
	const navLast3 = navLinks.slice(3, navLinks.length);
	return (
		<nav className=" max-[1023px]:hidden flex items-center z-20 relative justify-start gap-0 desktopL:justify-center desktopL:gap-[clamp(2rem,_4.7vw,_6rem)]">
			<ul className="flex  gap-10 items-center justify-center desktopL:order-1 order-2 ml-auto mr-10 desktopL:m-0">
				{navFirst3.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.href}>
								<p className=" text-center font-oxanium text-xl">{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className=" flex items-center justify-center desktop:order-1 ">
				<Link href={"#"}>
					<Image
						src="./images/logo.svg"
						className="w-[clamp(4.875rem,_9.1vw,_8.125rem)]"
						width={78}
						height={60}
						alt="Logo"
					/>
				</Link>
			</div>
			<ul className="flex  items-center justify-center gap-10 desktop:order-3">
				{navLast3.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.href}>
								<p className=" text-center font-oxanium text-xl">{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
