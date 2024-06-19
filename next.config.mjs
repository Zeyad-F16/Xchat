/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{ hostname: "dashing-goose-285.convex.cloud" },
		],
	},
};

export default nextConfig;
