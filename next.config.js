/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ['images.prismic.io'], // Add Prismic's image domain here
    }
  };
};

module.exports = nextConfig;
