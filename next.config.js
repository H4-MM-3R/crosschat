/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'th.bing.com', 'cdn2.vectorstock.com']
  }
}

module.exports = nextConfig
