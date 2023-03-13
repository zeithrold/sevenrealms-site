const { m } = require('framer-motion')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.zeithrold.com',
        pathname: '/sevenfield/**'
      }
    ]
  }
}

module.exports = nextConfig
