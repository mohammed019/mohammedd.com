/** @type {import('next').NextConfig} */
const nextConfig = {
  // make the react-email work with server
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },
};

module.exports = nextConfig;
