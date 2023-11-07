import React from 'react';

export const SubpagesWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<section className='w-screen max-w-[770px] flex flex-col gap-6 p-5 mobile:p-5 bg-[#0D151F] mobile:w-full'>
			{children}
		</section>
	);
};
