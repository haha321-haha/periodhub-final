const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Vercel 部署配置 - 优化版本确保部署成功

  // 图片优化配置
  images: {
    unoptimized: true, // 禁用图片优化以提高 Vercel 兼容性
    domains: ['images.unsplash.com', 'placehold.co'], // 允许的外部图片域名
  },

  // 配置尾部斜杠
  trailingSlash: false, // Vercel 推荐设置

  reactStrictMode: true,

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 实验性功能
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-markdown'],
  },

  // PWA 和性能优化
  poweredByHeader: false,

  // TypeScript 和 ESLint 配置 - 为 Vercel 部署优化
  typescript: {
    ignoreBuildErrors: false, // 启用类型检查
  },

  eslint: {
    ignoreDuringBuilds: false, // 启用 ESLint 检查
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://periodhub.health',
  },
};

module.exports = withNextIntl(nextConfig);
