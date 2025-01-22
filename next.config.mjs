import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
  images: {
    domains: ["i.ibb.co", "images.unsplash.com", "assets.aceternity.com"],
  },
});

export default nextConfig;
