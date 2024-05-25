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
      },
      {
        protocol: "https",
        hostname:"portfolio-image-store.s3.ap-south-1.amazonaws.com"
      }
    ],
  }
};

export default nextConfig;
