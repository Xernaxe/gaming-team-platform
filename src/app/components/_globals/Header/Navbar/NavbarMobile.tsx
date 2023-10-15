'use client';

import Link from 'next/link';
import React from 'react';
import BurgerMenu from './Burgermenu';
import INavLinks from '../../../../_types/INavLinks';
import Image from 'next/image';
import { useBurgerMenu } from '../../../../_providers/BurgermenuContext';

interface NavbarMobileProps {
	navLinks: INavLinks[];
}
export const NavbarMobile: React.FC<NavbarMobileProps> = ({ navLinks }) => {
	const { isBurgerMenuOpen } = useBurgerMenu();

	return (
		<nav className='desktop:hidden flex justify-between relative items-center z-50'>
			<Link href={'/'}>
				<Image
					src='./images/logo.svg'
					className='w-[clamp(3.25rem,_10.5vw,_4.875rem)]'
					width={78}
					height={60}
					alt='Logo'
					priority={true}
				/>
			</Link>

			<BurgerMenu />
			{isBurgerMenuOpen && (
				<>
					<div className='absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 z-50'>
						<ul className='flex flex-col gap-6'>
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link href={link.href}>
										<p className=' text-center font-oxanium text-xl'>
											{link.name}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</nav>
	);
};
