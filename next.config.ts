import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    formats: ['image/webp'],
    deviceSizes: [375, 768, 1280, 1920],
    imageSizes: [320, 640, 960],
  },
}

export default nextConfig
