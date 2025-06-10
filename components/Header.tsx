'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navigation = [
    { name: locale === 'en' ? 'Home' : '首页', href: `/${locale}` },
    { name: locale === 'en' ? 'Interactive Solutions' : '互动解决方案', href: `/${locale}/interactive-tools` },
    { name: locale === 'en' ? 'Articles & Downloads' : '文章PDF下载中心', href: `/${locale}/articles` },
    { name: locale === 'en' ? 'Scenario Solutions' : '场景解决方案', href: `/${locale}/scenario-solutions` },
    // { name: locale === 'en' ? '🚀 Framework Demo' : '🚀 框架演示', href: `/${locale}/framework-demo` }, // 暂时隐藏 - 可快速恢复
    { name: locale === 'en' ? 'Natural Care' : '平时调理', href: `/${locale}/natural-therapies` },
    { name: locale === 'en' ? 'Health Guide' : '痛经健康指南', href: `/${locale}/health-guide` },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80'
          : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        {/* 📱 移动端优化头部高度 */}
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* 📱 移动端优化Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl text-primary-600 hover:text-primary-700 transition-colors">
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
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 📱 移动端优化右侧控件 */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <LanguageSwitcher />

            {/* 📱 移动端优化菜单按钮 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors min-w-[44px] min-h-[44px]"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
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
                      ? 'bg-primary-50 text-primary-600 border border-primary-200'
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Language Switcher Component
function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const switchLocale = (newLocale: string) => {
    // Replace the current locale segment in the pathname with the new locale
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath; // Use window.location for a full page refresh
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 📱 移动端优化语言切换按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 rounded hover:bg-neutral-100 transition-colors min-w-[44px] min-h-[44px] justify-center sm:justify-start"
        aria-expanded={isOpen}
      >
        <span className="text-base">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-xs lg:text-sm">{currentLanguage?.name}</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isOpen ? 'rotate-180' : ''} hidden sm:block`} />
      </button>

      {/* 📱 移动端优化下拉菜单 */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 sm:w-40 bg-white rounded-md shadow-lg border border-neutral-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLocale(language.code)}
                className={`flex items-center space-x-2 w-full px-3 sm:px-4 py-3 text-sm text-left hover:bg-neutral-50 transition-colors min-h-[44px] ${
                  locale === language.code ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'
                }`}
              >
                <span className="text-base">{language.flag}</span>
                <span className="text-sm">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
