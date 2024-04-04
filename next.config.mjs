/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
        },
        {
            protocol: 'https',
            hostname: 'th.bing.com',
        },
        {
            protocol: 'https',
            hostname: 'cdn2.vectorstock.com',
        }
    ]
  }
}

export default nextConfig
