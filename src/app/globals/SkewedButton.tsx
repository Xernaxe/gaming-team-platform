import Link from "next/link";
import React from "react";

interface ISkewedButton {
	link: string;
	text: string;
	width: "large" | "normal";
}

export const SkewedButton = ({ link, text, width }: ISkewedButton) => {
	return (
		<Link
			href={link}
			className={
				(width === "large" ? "w-[14.125rem] desktop:w-[14.75rem] bg-gradient-buttonL" : "w-[11.25rem] desktop:w-[11.6875rem]") +
				` flex justify-center items-center skew-x-[-10deg] h-14`
			}
		>
			<span className="skew-x-[10deg] translate-y-[3px] text-[1.125rem] font-oxanium font-semibold">{text}</span>
		</Link>
	);
};
