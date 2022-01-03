/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  reactStringMoge: true,
  images: {
    domains: ['justjoin.it', 'test.justjoin.it', 'geek.justjoin.it'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
