import Link from "next/link";
import React from "react";
import { SkewedButton } from "../globals/SkewedButton";
import Image from "next/image";
import { HeroImg } from "../globals/HeroImg";

export const Hero = () => {
	return (
		<>
			<section className="hero | flex flex-col gap-[3.125rem] relative pb-10 w-full tablet:flex-row tablet:gap-0 tablet:justify-between tablet:py-8 tablet:items-center">
				<div className="mt-[3.125rem] z-20 tablet:mt-0 tablet:w-[50%]">
					<h1 className="font-oxanium text-2xl font-semibold [word-spacing:0.5rem] leading-loose mb-6 tablet:text-[1.75rem] tablet:[word-spacing:normal]">
						Welcome to the{" "}
						<span className=" text-greenCyan font-[inherit] text-2xl font-semibold tablet:text-[1.75rem]">Esports</span>{" "}
						<span className="font-bold text-[2rem] font-[inherit] leading-none tablet:text-5xl tablet:font-semibold">Multiverse</span>
					</h1>

					<SkewedButton link={"https://google.com"} text="Join Tournament" width="large" />
				</div>

				<div className="flex justify-center flex-wrap gap-x-6 z-20 ">
					<div className="flex flex-col gap-y-10">
						<Image
							className="object-cover w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] rounded"
							width={155}
							height={168}
							src="/images/cs-go.png"
							alt="CS:GO"
						/>
						<Image
							className="object-cover w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] rounded"
							width={155}
							height={168}
							src="/images/fortnite.png"
							alt="Fortnite"
						/>
					</div>
					<div className="flex flex-col gap-y-10 mt-[0.875rem]">
						<Image
							className="object-cover w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] rounded"
							width={155}
							height={168}
							src="/images/pubg.png"
							alt="PUBG"
						/>
						<Image
							className="object-cover w-[clamp(9.6875rem,_10vw,_15rem)] h-[10.5rem] rounded"
							width={155}
							height={168}
							src="/images/valorant.png"
							alt="Valorant"
						/>
					</div>
				</div>
				<HeroImg />
			</section>
		</>
	);
};
