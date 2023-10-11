import React from 'react';
import { NavbarMobile } from './Navbar/NavbarMobile';
import INavLinks from '../../../_types/INavLinks';
import { NavbarDesktop } from './Navbar/NavbarDesktop';

export const Header = () => {
	const navLinks: INavLinks[] = [
		{ name: 'Tournaments', href: '/tournaments' },
		{ name: 'Our Team', href: '/team' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Shop', href: '/shop' },
		{ name: 'Contact Us', href: '/contact' },
	];

	return (
		<header>
			<NavbarDesktop navLinks={navLinks} />
			<NavbarMobile navLinks={navLinks} />
		</header>
	);
};
