import React from 'react';
import INavLinks from '../../../../_types/INavLinks';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss'

interface NavbarDesktopProps {
	navLinks: INavLinks[];
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ navLinks }) => {
	const navFirst3 = navLinks.slice(0, 3);
	const navLast3 = navLinks.slice(3, navLinks.length);
	return (
		<nav className={styles.navDesktop}>
			<ul>
				{navFirst3.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.href}>
								<p className=' text-center font-oxanium'>{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
			<div>
				<Link href={'#'}>
					<Image
						src='./images/logo.svg'
						className='w-[clamp(4.875rem,_9.1vw,_8.125rem)]'
						width={78}
						height={60}
						alt='Logo'
						priority={true}
					/>
				</Link>
			</div>
			<ul>
				{navLast3.map((link, index) => {
					return (
						<li key={index}>
							<Link href={link.href}>
								<p className=' text-center font-oxanium'>{link.name}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
