import React from 'react';
import Image from 'next/image';
import { ShareButton } from './ShareButton';

export const ShareItem = () => {
	const shareItems = [
		{ src: 'facebook.svg', alt: 'Facebook' },
		{ src: 'messenger.svg', alt: 'Messenger' },
		{ src: 'twitter.svg', alt: 'Twitter' },
		{ src: 'reddit.svg', alt: 'Reddit' },
		{ src: 'whatsapp.svg', alt: 'Whatsapp' },
	];
	return (
		<div className='flex flex-col items-center gap-4 tablet:flex-row tablet:justify-between'>
			<div className='flex flex-col items-center bg-postAccent py-2 gap-2 rounded-[10px] tablet:flex-row tablet:p-2'>
				<p className='font-oxanium font-bold text-lg'>Share Article: </p>
				<ul className='flex flex-wrap justify-center gap-4 w-2/3 tablet:w-auto tablet:px-4'>
					{shareItems.map((shareItem) => {
						return (
							<li className='relative w-8 h-8' key={shareItem.alt}>
								<Image src={'/images/' + shareItem.src} alt={shareItem.alt} fill />
							</li>
						);
					})}
				</ul>
			</div>

			<ShareButton />
		</div>
	);
};
