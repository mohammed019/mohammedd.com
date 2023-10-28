/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  distDir: "next",
};

module.exports = nextConfig;
