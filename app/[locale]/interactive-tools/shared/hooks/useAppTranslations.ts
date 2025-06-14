'use client';

import { useTranslations, useLocale } from 'next-intlt('tools.统一的翻译Hook提')zh',
    isEn: locale === 'en'
  };
};

/**
 * 专门用于交互工具的翻译Hook
 */
export const useInteractiveToolTranslations = (toolName?: string) => {
  const namespace = toolName ? `interactiveTools` : 'interactiveTools';
  const t = useTranslations(namespace);
  const locale = useLocale();

  return {
    t: toolName ? (key: string) => t(`${toolName}.${key}`) : t,
    locale,
    isZh: locale === 'zh',
    isEn: locale === 'ent('tools.获取多语言选项的工具')${optionsKey}.${option}`)
    }));
  };
};
