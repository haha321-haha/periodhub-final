const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Period Hub v2 Clean - Next.js 配置
  
  // React 严格模式
  reactStrictMode: true,
  
  // 图片优化配置
  images: {
    unoptimized: false, // 启用图片优化
    domains: ['images.unsplash.com', 'placehold.co'], // 允许的外部图片域名
    formats: ['image/webp', 'image/avif'], // 现代图片格式
  },
  
  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 生产环境移除 console
  },
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['lucide-react'], // 优化包导入
    typedRoutes: true, // 类型化路由
  },
  
  // PWA 和性能优化
  poweredByHeader: false, // 移除 X-Powered-By 头
  
  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_APP_NAME: 'Period Hub',
    NEXT_PUBLIC_APP_VERSION: '2.0.0',
  },
  
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/',
        destination: '/zh', // 默认重定向到中文
        permanent: false,
      },
    ];
  },
  
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
