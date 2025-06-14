const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Vercel 部署配置 (支持服务器端功能)
  // output: 'export', // 移除静态导出以支持动态功能

  // 图片优化配置
  images: {
    unoptimized: false, // 启用图片优化以提高质量
    quality: 90, // 设置高质量 (默认75)
    formats: ['image/webp', 'image/avif'], // 现代格式优先
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 配置尾部斜杠
  trailingSlash: true,

  // 基础路径
  basePath: '',
  assetPrefix: '',

  reactStrictMode: true,

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能 - 修复SSL协商问题
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-markdown'],
    serverMinification: false, // 解决SSL协议协商问题
  },

  // PWA 和性能优化
  poweredByHeader: false,

  // 构建配置
  typescript: {
    ignoreBuildErrors: false, // 启用类型检查
  },

  eslint: {
    ignoreDuringBuilds: false, // 启用 ESLint
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://periodhub.health',
  },

  // SSL安全头配置
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ],
    }
  ],

  // 支持的功能（Vercel 部署）：
  // ✅ headers()
  // ✅ redirects()
  // ✅ rewrites()
  // ✅ API Routes
  // ✅ Middleware
  // ✅ Server-side Internationalization
};

module.exports = withNextIntl(nextConfig);
