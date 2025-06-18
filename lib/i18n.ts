import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'en' as const;

// For type safety with pathnames
export type Pathnames = {
  [K in string]: {
    [L in Locale]?: string;
  };
};

// Define localized routes if needed
export const pathnames: Pathnames = {
  '/': {
    en: '/',
    zh: '/'
  },
  '/about': {
    en: '/about',
    zh: '/about'
  },
  '/articles': {
    en: '/articles',
    zh: '/articles'
  },
  '/therapies': {
    en: '/therapies',
    zh: '/therapies'
  },
  '/immediate-relief': {
    en: '/immediate-relief',
    zh: '/immediate-relief'
  },
  '/natural-therapies': {
    en: '/natural-therapies',
    zh: '/natural-therapies'
  },
  '/cultural-charms': {
    en: '/cultural-charms',
    zh: '/cultural-charms'
  }
};

// Configure how the locale prefix is handled
export const localePrefix = 'as-needed' as const;

// Main configuration for next-intl
export default getRequestConfig(async ({ locale }) => {
  // Validate the requested locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  try {
    // Load messages for the requested locale
    // This dynamically imports the translation file from public/locales
    const messages = (await import(`../public/locales/${locale}/translation.json`)).default;
    
    return {
      messages,
      // Optional: You can add timeZone, now, formats, etc. here
      timeZone: 'UTC',
      // Optional: Add default formats
      formats: {
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }
        }
      }
    };
  } catch (error) {
    console.error(`Error loading messages for locale "${locale}":`, error);
    
    // Fallback to default locale if translation file is missing
    if (locale !== defaultLocale) {
      try {
        const fallbackMessages = (await import(`../public/locales/${defaultLocale}/translation.json`)).default;
        return { 
          messages: fallbackMessages,
          timeZone: 'UTC' 
        };
      } catch (fallbackError) {
        console.error(`Error loading fallback messages:`, fallbackError);
      }
    }
    
    // Return empty messages as last resort
    return { messages: {}, timeZone: 'UTC' };
  }
});

// Export routing configuration for use in other files
export const routing = {
  locales,
  defaultLocale,
  localePrefix,
  pathnames
};