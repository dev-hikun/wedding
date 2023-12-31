const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
      emotion: true,
    },
    images: {
      domains: ['hikun-suzu.netlify.app', 'source.unsplash.com'],
    },
    output: 'standalone',
    i18n,
    optimizeFonts: false,
    compress: true,
  };
  return withBundleAnalyzer(nextConfig);
};
