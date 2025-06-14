import { MetadataRoute } from 'next'
import { locales } from '@/i18nt('common.文章数据从实际文')quick-menstrual-pain-relief-guide',
  'anti-inflammatory-diet-menstrual-pain',
  'heat-therapy-complete-guide',
  'natural-physical-therapy-menstrual-pain',
  'menstrual-pain-medical-guide',
  'when-to-see-doctor-menstrual-pain',
  'specific-situations-menstrual-pain-management',
  'menstrual-pain-content-evaluation-report',
  'comprehensive-menstrual-pain-research-summary',
  'global-traditional-menstrual-pain-relief',
  'nsaid-menstrual-pain-professional-guidet('common.交互工具页面con')symptom-assessment',
  'period-pain-assessment', 
  'pain-tracker',
  'constitution-testt('common.主要页面const')',
  'articles',
  'interactive-tools',
  'teen-health',
  'about',
  'contact'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://period-hub.comt('common.constcurr')' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${page}`
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : page === 'articles' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === 'articlest('common.0908')${baseUrl}/${locale}/articles/${article}`,
        lastModified: currentDate,
        changeFrequency: 'monthlyt('common.priority0')${baseUrl}/${locale}/interactive-tools/${tool}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return sitemapEntries
}
