'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path is active
  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}`;
    }
    return pathname.startsWith(href);
  };

  // Navigation items
  const navigation = [
    { name: locale === 'en' ? 'Home' : '首页', href: `/${locale}` },
    { name: locale === 'en' ? 'Interactive Solutions' : '互动解决方案', href: `/${locale}/interactive-tools` },
    { name: locale === 'en' ? 'Articles & Downloads' : '文章PDF下载中心', href: `/${locale}/articles` },
    { name: locale === 'en' ? 'Scenario Solutions' : '场景解决方案', href: `/${locale}/scenario-solutions` },
    { name: locale === 'en' ? 'Natural Care' : '平时调理', href: `/${locale}/natural-therapies` },
    { name: locale === 'en' ? 'Health Guide' : '痛经健康指南', href: `/${locale}/health-guide` },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80'
          : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* 📱 移动端优化头部高度 */}
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* 📱 移动端优化Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl text-purple-600 hover:text-purple-700 transition-colors">
                periodhub.health
              </span>
            </Link>
          </div>

          {/* 📱 移动端优化桌面导航 */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-neutral-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 语言切换 */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={pathname.replace(`/${locale}`, '/zh')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                locale === 'zh' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              中文
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href={pathname.replace(`/${locale}`, '/en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                locale === 'en' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              EN
            </Link>
          </div>

          {/* 📱 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-purple-600 hover:bg-purple-50 transition-colors min-h-[44px] min-w-[44px]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* 📱 移动端优化导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md" id="mobile-menu">
            <div className="px-2 pt-3 pb-4 space-y-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive(item.href)
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-neutral-700 hover:bg-purple-50 hover:text-purple-600 border border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* 移动端语言切换 */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                <Link
                  href={pathname.replace(`/${locale}`, '/zh')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    locale === 'zh' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  中文
                </Link>
                <Link
                  href={pathname.replace(`/${locale}`, '/en')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    locale === 'en' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
