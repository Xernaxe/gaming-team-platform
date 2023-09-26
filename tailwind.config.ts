import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-dBlue": "linear-gradient(118deg, rgba(10,31,53,1) 0%, rgba(4,13,23,1) 100%)",
				"gradient-wBlue": "linear-gradient(118deg, #346296 0%, #081729 100%)"
			},
			colors: {
				"dGrey": "#DBDBDB",
				"wGrey": "#F5F5F5",
				"dBlueishGrey": "#8296AB",
				"blueishGrey": "#A7B4C3",
				"dBlue": "#0A1F35",
				"wBlue": "#173352",
				"greenCyan": "#00EEBD"
			},
			screens: {
				"mobile": "440px",
				"tablet": "765px",
				"desktop": "1024px",
				"desktopL": "1440px"
			},
			fontFamily: {
				"inter": ["Inter", ...defaultTheme.fontFamily.sans],
				"oxanium": ["Oxanium", "Inter", ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
};
export default config;
