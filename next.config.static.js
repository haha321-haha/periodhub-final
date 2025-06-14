/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 GitHub Pages 静态导出配置
  output: 'export',

  // 禁用图片优化（静态导出要求）
  images: {
    unoptimized: true,
  },

  // 配置尾部斜杠
  trailingSlash: true,

  // 基础路径（如果部署在子目录）
  basePath: '',
  assetPrefix: '',

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

  // 跳过构建时的错误（用于静态导出）
  typescript: {
    ignoreBuildErrors: true, // Skip type checking for static export
  },

  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint for static export
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://periodhub.health',
  },

  // 注意：静态导出不支持以下功能：
  // - headers()
  // - redirects()
  // - rewrites()
  // - API Routes
  // - Middleware (limited support)
  // - Image Optimization (disabled above)
  // - Server-side Internationalization (using client-side instead)
};

module.exports = nextConfig;
