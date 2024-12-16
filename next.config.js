/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ['images.prismic.io', 'images.unsplash.com'], // Add Prismic's image domain here
    }
  };
};

module.exports = nextConfig;
