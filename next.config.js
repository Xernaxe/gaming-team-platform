/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, '_styles')],
		prependData: `@import "/src/app/_styles/main.scss";`,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
	},
};

module.exports = nextConfig;
