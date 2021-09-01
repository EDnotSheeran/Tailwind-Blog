const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  }),
};
