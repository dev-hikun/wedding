const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
      emotion: true,
    },
    output: 'standalone',
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko', 'ja'],
    },
    optimizeFonts: true,
  };
  return withBundleAnalyzer(nextConfig);
};
