'use client';

import React from 'react';
import Image from 'next/image';

export const ShareButton = () => {
	const onClickHandler = () => {
		navigator.clipboard.writeText(window.location.href);
	};
	return (
		<button
			onClick={onClickHandler}
			className='flex items-center gap-5 border border-postAccent p-2 tablet:py-3 tablet:px-4 tablet:border-[2px]'
		>
			<span className='font-oxanium font-bold uppercase'>Copy Link</span>
			<Image src={'/images/copy.svg'} alt='Copy' width={25} height={25} />
		</button>
	);
};
