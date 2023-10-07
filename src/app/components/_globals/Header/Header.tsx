import React from 'react';
import { NavbarMobile } from './Navbar/NavbarMobile';
import INavLinks from '../../../_types/INavLinks';
import { NavbarDesktop } from './Navbar/NavbarDesktop';

export const Header = () => {
	const navLinks: INavLinks[] = [
		{ name: 'Tournaments', href: '#' },
		{ name: 'Our Team', href: '#' },
		{ name: 'Our Sponsors', href: '#' },
		{ name: 'About Us', href: '#' },
		{ name: 'Shop', href: '#' },
		{ name: 'Contact Us', href: '#' },
	];

	return (
		<header>
			<NavbarDesktop navLinks={navLinks} />
			<NavbarMobile navLinks={navLinks} />
		</header>
	);
};
