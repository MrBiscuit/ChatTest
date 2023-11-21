
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ChatTest',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',

  trailingSlash: true,
};

module.exports = nextConfig;