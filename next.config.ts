import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'study-bank-6y85a0k72-welbert-soares-projects.vercel.app/*',
        'https://study-bank.vercel.app',
        'https://study-bank.vercel.app/*',
      ],
    },
  },
}

export default nextConfig
