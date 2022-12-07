/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'media.graphcms.com',
      'media.graphassets.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
