import React from 'react';
import { AsideSectionTitle } from './AsideSectionTitle';

export const AsideSection = ({children, title}: {
	children:React.ReactNode,
	title: string}) => {
	return (
		<section className='w-[370px] bg-postBg rounded-[10px]'>
			<AsideSectionTitle title={title} />
			{children}
		</section>
	);
};
