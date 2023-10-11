import Link from 'next/link';
import React from 'react';
import { SkewedButton } from '../_globals/SkewedButton';
import Image from 'next/image';
import { HeroImg } from './HeroImg';
import styles from './Hero.module.scss'

export const Hero = () => {
	return (
		<>
			<section className={styles.heroSection}>
				<div className={styles.heroTextWrapper}>
					<h1>
						Welcome to the{' '}
						<span>
							Esports
						</span>{' '}
					</h1>
					<h2>
						Multiverse
					</h2>

					<SkewedButton
						link={'https://google.com'}
						text='Join Tournament'
						width='large'
					/>
				</div>

				{/* @TODO: CHANGE PX TO RESPONSIVE */}
				<div className={styles.imagesContainer}>
					<div>
						<div>
							<Image
								fill
								src='/images/cs-go.png'
								alt='CS:GO'
								priority={true}
							/>
						</div>
						<div>
							<Image
								fill
								src='/images/fortnite.png'
								alt='Fortnite'
								priority={true}
							/>
						</div>
					</div>
					<div>
						<div>
							<Image
								fill
								src='/images/pubg.png'
								alt='PUBG'
								priority={true}
							/>
						</div>
						<div>
							<Image
								fill
								src='/images/valorant.png'
								alt='Valorant'
								priority={true}
							/>
						</div>
					</div>
				</div>
				<HeroImg />
			</section>
		</>
	);
};
