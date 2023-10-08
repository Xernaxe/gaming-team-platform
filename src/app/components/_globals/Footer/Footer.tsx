import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SkewedButton } from '../SkewedButton';
import { SectionHeader } from '../SectionHeader';

export const Footer = () => {
	const footerLinks = [
		{ name: 'About Us', href: '#' },
		{ name: 'Sponsorship', href: '#' },
		{ name: 'Join Us', href: '#' },
		{ name: 'Terms & Conditions', href: '#' },
		{ name: 'Privacy Policy', href: '#' },
	];

	const socials = [
		{ alt: 'Facebook', src: 'facebook.svg', href: '#' },
		{ alt: 'Instagram', src: 'instagram.svg', href: '#' },
		{ alt: 'Youtube', src: 'youtube.svg', href: '#' },
		{ alt: 'Discord', src: 'discord.svg', href: '#' },
	];
	return (
		<footer className='flex flex-col items-center gap-10 py-[1.88rem] -skew-x-[0.5deg] bg-[linear-gradient(180deg,_#0D2137_-32.22%,_#030C15_146.71%)] tablet:flex-wrap tablet:flex-row tablet:justify-center tablet:gap-x-16 desktop:py-10 desktop:justify-start desktop:pl-[4vw] desktop:-skew-x-[2deg] desktopL:pl-[6vw]'>
			<div className='basis-full flex justify-center desktop:basis-[0%] desktop:skew-x-[2deg]'>
				<Image
					src={'/images/logo.svg'}
					alt='Logo'
					width={80}
					height={62}
					className=' max-w-[5rem] desktop:max-w-[8.125rem] desktop:w-[8.125rem]'
				/>
			</div>

			<nav className='desktop:basis-2/3  desktop:skew-x-[2deg] desktopL:basis-[80%] desktopL:pl-[3vw]'>
				<ul className='flex flex-col items-center gap-7 tablet:flex-row tablet:flex-wrap tablet:justify-center'>
					{footerLinks.map((link, index) => {
						return (
							<li key={index}>
								<Link href={link.href}>{link.name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			<div className='desktop:h-[150px]  desktop:skew-x-[2deg]'>
				<div className=' max-lg:hidden flex '>
					<SectionHeader isFooter={true} title='Newsletter signup' />
				</div>
				<form>
					<fieldset className='flex flex-col items-center gap-6 tablet:items-start desktop:flex-row desktop:gap-4'>
						<input
							type='email'
							placeholder='Enter your email'
							className='px-5 h-12 -skew-x-[5deg] border-wBlue border-solid border bg-transparent placeholder:text-sm placeholder:text-dBlueishGrey placeholder:skew-x-[5deg] tablet:w-[18.25rem] desktop:-skew-x-[10deg]'
						/>
						<SkewedButton text='Subscribe' width='normal' />
					</fieldset>
				</form>
			</div>

			<div className='desktop:pl-[3vw] desktop:h-[150px]  desktop:skew-x-[2deg] desktopL:pl-[5vw]'>
				<SectionHeader isFooter={true} title='Follow us' />
				<ul className='flex gap-10'>
					{socials.map((social, index) => {
						return (
							<li>
								<Link href={social.href} key={index}>
									<Image
										src={`/images/${social.src}`}
										alt={social.alt}
										width={24}
										height={24}
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
};
