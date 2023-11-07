import React from 'react';
import Image from 'next/image';
export const PostMetaData = () => {
	const metaDataIcons = {
		author: { src: 'author.svg', alt: 'Author' },
		category: { src: 'category.svg', alt: 'Category' },
		views: { src: 'views.svg', alt: 'Views' },
	};
	return (
		<div className='relative'>
			<div className='relative z-20 tablet:mx-2 tablet:flex tablet:justify-between'>
				{/* @TODO: add props */}
				<div className='flex items-center gap-2 relative z-20 tablet:w-fit tablet:bg-postBg tablet:px-2'>
					<div className='relative w-6 h-10'>
						<Image
							src={'/images/' + metaDataIcons.author.src}
							alt={metaDataIcons.author.alt}
							fill
							priority
						/>
					</div>
					<p>
						by <span>Crazy Bubs</span> on June 24, 2023
					</p>
				</div>
				<div className='flex justify-between tablet:gap-4 '>
					<div className='flex items-center gap-2 relative z-20 tablet:w-fit tablet:bg-postBg tablet:px-2'>
						<div className='relative w-6 h-10'>
							<Image
								src={'/images/' + metaDataIcons.category.src}
								alt={metaDataIcons.category.alt}
								fill
								priority
							/>
						</div>
						<p>Trending</p>
					</div>
					<div className='flex items-center gap-2 relative z-20 tablet:w-fit tablet:bg-postBg tablet:px-2'>
						<div className='relative w-6 h-6'>
							<Image
								src={'/images/' + metaDataIcons.views.src}
								alt={metaDataIcons.views.alt}
								fill
								priority
							/>
						</div>
						<p>100 Views</p>
					</div>
				</div>
			</div>
			<div className='passing-line'></div>
		</div>
	);
};
