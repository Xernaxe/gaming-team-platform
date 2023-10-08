import React from 'react';
import Image from 'next/image';
import { IShopItems } from '../../../_types/IShopItems';

export const ShopCardDetails = (shopItem: IShopItems) => {
	return (
		<>
			<div className='relative h-[51.71vw] tablet:max-h-[25vw] desktop:max-h-[194px] w-full max-h-[250px] desktopL:w-[23.125rem]'>
				<Image
					src={`/images/${shopItem.imgSrc}`}
					alt=''
					fill={true}
					className='object-cover rounded-t-[0.63rem] '
				/>
			</div>
			<div className='p-5 flex flex-col '>
				<h4 className=' text-sm font-medium uppercase text-wGrey tablet:text-base'>
					{shopItem.tag}
				</h4>
				<h3 className='font-oxanium text-xl font-medium leading-[150%] desktopL:text-[1.375rem] mt-[0.52rem] mb-[0.22rem]'>
					{shopItem.title}
				</h3>
				<h4 className='font-oxanium font-bold leading-[150%]'>
					${shopItem.price}
				</h4>
			</div>
		</>
	);
};
