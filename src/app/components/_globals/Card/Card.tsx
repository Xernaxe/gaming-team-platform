import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
export const Card = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={twMerge(
				className,
				'flex flex-col w-full justify-center rounded-[0.63rem] tablet:w-[48%]  desktopL:w-[23.125rem] '
			)}
		>
			{children}
		</div>
	);
};
