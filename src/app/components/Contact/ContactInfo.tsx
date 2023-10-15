import Image from 'next/image';
import React from 'react';

export const ContactInfo = () => {
	const infoItems = [
		{
			imgSrc: '/images/location.svg',
			imgAlt: '#',
			title: 'Office Location:',
			desc: '3rd Floor, Green Park, Bengaluru',
      isMail: false,
		},
		{
      imgSrc: '/images/call.svg',
			imgAlt: '#',
			title: 'Contact No:',
			desc: '+91 9876543210',
      isMail: false,
		},
		{
      imgSrc: '/images/sms.svg',
			imgAlt: '#',
			title: 'Email:',
			desc: 'contact@gamingcompany.com',
      isMail: true,
		},
	];

	return (
		<div className='flex w-full flex-col gap-6 py-8 px-3 mobile:p-8 bg-[linear-gradient(143deg,_#0A1F35_-12.02%,_#040D17_147.72%)] -skew-x-[1deg] tablet:flex-wrap tablet:flex-row tablet:justify-between tablet:px-[3.70rem] tablet:-skew-x-[3deg] desktop:content-start desktop:h-min desktop:w-auto desktop:gap-10'>
			{infoItems.map((info) => {
				return (
					<div className='flex flex-col gap-1 skew-x-[1deg] tablet:skew-x-[3deg]' key={info.title}>
						<div className='flex gap-[0.88rem]'>
							<Image
								src={info.imgSrc}
								alt={info.imgAlt}
								width={20}
								height={20}
							/>
							<h3 className=' font-oxanium'>{info.title}</h3>
						</div>
            {
              info.isMail ? (
                <a href={`mailto:${info.desc}`} className='pl-10 text-sm'>{info.desc}</a>
              ) : (
                <p className='pl-10 text-sm'>{info.desc}</p>
              )
            }
					</div>
				);
			})}
		</div>
	);
};
