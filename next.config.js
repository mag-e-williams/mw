/**
 * Adds bundle analysis if development + with ANALYZE flag set to true
 */
const withNextBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.ltrbxd.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'film-photos.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
      },
    ],
  },
  i18n: {
    // This allows for the language value to be passed in HTML
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withNextBundleAnalyzer(nextConfig);
