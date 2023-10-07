import React from 'react';

export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='mb-20 tablet:mb-28 desktop:mb-40'>
            {children}
        </section>
	);
};
