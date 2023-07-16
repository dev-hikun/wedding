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
    output: 'standalone',
    i18n,
    optimizeFonts: false,
  };
  return withBundleAnalyzer(nextConfig);
};
