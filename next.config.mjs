/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname:"images.pexels.com"
      },
      {
        protocol: "https",
        hostname:"photos.google.com"
      }
    ],
  }
};

export default nextConfig;
