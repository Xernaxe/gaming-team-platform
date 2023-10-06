import React from 'react';

interface ISectionHeader {
	title: string;
	isFooter?: boolean;
}

export const SectionHeader: React.FC<ISectionHeader> = ({
	title,
	isFooter,
}) => {
	return (
		<div
			className={`flex flex-col mb-10 ${
				isFooter
					? 'desktop:items-start gap-[0.88rem] max-desktop:items-center'
					: 'items-center gap-[10px] tablet:gap-4 desktopL:gap-5'
			}`}
		>
			{/* H2: text-[clamp(1.5rem,_6.2vw,_2rem)] */}
			<h2
				className={`font-oxanium font-bold ${
					isFooter
						? 'text-[1.125rem]'
						: 'text-2xl tablet:text-[clamp(2rem,_2.8vw,_2.5rem)]'
				}`}
			>
				{title}
			</h2>
			<div
				className={`bg-greenCyan skew-x-[-10deg] ${
					isFooter ? 'w-[1.875rem] h-[0.125rem]' : 'w-[50px] h-1'
				}`}
			></div>
		</div>
	);
};
