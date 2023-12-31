import Link from 'next/link';
import React from 'react';

export const BannerButton = ({
	link,
	text,
}: {
	link: string;
	text: string;
}) => {
	return (
		<Link
			href={link}
			className={` max-desktop:hidden bg-gradient-buttonL w-[11.25rem] desktop:w-[11.6875rem] bg-dBlue flex justify-center items-center skew-x-[-10deg] h-14`}
		>
			<span className='skew-x-[10deg] translate-y-[3px] text-[1.125rem] font-oxanium font-semibold'>
				{text}
			</span>
		</Link>
	);
};
