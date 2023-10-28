/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	reactStrictMode: false,
	images: {
		domains: [
			"public.blob.vercel-storage.com",
			"res.cloudinary.com",
			"abs.twimg.com",
			"pbs.twimg.com",
			"avatars.githubusercontent.com",
			"www.google.com",
			"flag.vercel.app",
			"illustrations.popsy.co",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
