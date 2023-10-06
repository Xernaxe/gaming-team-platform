import React from 'react';

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='mt-[5.375rem] mb-20 tablet:mt-[6.25rem] desktopL:mt-[10rem]'>
            {children}
        </section>
	);
};
