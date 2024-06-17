/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn4.iconfinder.com",
        protocol: "https",
      },
      {
        hostname: "cdn1.iconfinder.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
