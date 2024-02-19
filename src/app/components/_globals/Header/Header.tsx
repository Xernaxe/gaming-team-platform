import React from 'react';
import { NavbarMobile } from './Navbar/NavbarMobile';
import INavLinks from '../../../_types/INavLinks';
import { NavbarDesktop } from './Navbar/NavbarDesktop';

export const Header = () => {
	const navLinks: INavLinks[] = [
		{ name: 'About Us', href: '/about' },
		{ name: 'Tournaments', href: '/tournaments' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Shop', href: '/shop' },
		{ name: 'Contact Us', href: '/contact' },
		{ name: 'My Cart', href: '/contact' },
	];

	return (
		<header>
			<NavbarDesktop navLinks={navLinks} />
			<NavbarMobile navLinks={navLinks} />
		</header>
	);
};
