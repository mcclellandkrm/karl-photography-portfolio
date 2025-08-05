/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize static assets
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
