/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		deviceSizes: [320, 375, 480, 768, 1024, 1500],
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rickandmortyapi.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
