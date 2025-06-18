import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支持的语言列表
  locales: ['zh', 'en'],
  
  // 默认语言
  defaultLocale: 'zh',
  
  // 语言检测策略
  localeDetection: true,
  
  // 路径名配置
  pathnames: {
    '/': '/',
    '/articles': '/articles',
    '/interactive-tools': '/interactive-tools',
    '/teen-health': '/teen-health',
    '/about': '/about',
    '/contact': '/contact'
  }
});

export const config = {
  // 匹配所有路径，除了以下路径：
  // - api 路由
  // - _next 静态文件
  // - _vercel 部署文件
  // - 图标和图片文件
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
