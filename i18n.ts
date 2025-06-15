// i18n configuration for Period Hub
export const locales = ['zh', 'en'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'zh';

// Locale labels for UI
export const localeLabels: Record<Locale, string> = {
  zh: '中文',
  en: 'English'
};

// Locale detection configuration
export const localeDetection = true;
export const localePrefix = 'always' as const;
