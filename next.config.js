/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	basePath: '',
	distDir: 'dist',
	output: 'export',
	images: {
	  	deviceSizes: [320, 375, 480, 768, 1024, 1500],
	  	dangerouslyAllowSVG: true,
	  	remotePatterns: [{
			protocol: 'https',
		   	hostname: 'rickandmortyapi.com',
		   	port: '',
		   	pathname: '/**',
	  	}],
		unoptimized: true
	},
}

module.exports = nextConfig
