'use client'

interface StructuredDataProps {
  type: 'website' | 'article' | 'medicalWebPage' | 'healthTopicPage'
  data: {
    title: string
    description: string
    url: string
    image?: string
    author?: string
    datePublished?: string
    dateModified?: string
    locale?: string
    keywords?: string[]
  }
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://period-hub.com'
  
  const getStructuredData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'WebSite' : 
               type === 'article' ? 'MedicalWebPage' :
               type === 'medicalWebPage' ? 'MedicalWebPage' :
               'HealthTopicPage',
      name: data.title,
      description: data.description,
      url: data.url,
      inLanguage: data.locale || 'zh-CN',
      publisher: {
        '@type': 'Organization',
        name: 'Period Hub',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/logo.png`,
          width: 250,
          height: 80
        }
      }
    }

    if (type === 'website') {
      return {
        ...baseSchema,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }
    }

    if (type === 'article' || type === 'medicalWebPage') {
      return {
        ...baseSchema,
        '@type': 'MedicalWebPage',
        mainEntity: {
          '@type': 'MedicalCondition',
          name: t('health.menstrualPain'),
          alternateName: [t('common.月经疼痛'), t('common.经期疼痛'), 'Menstrual Pain', 'Dysmenorrhea'],
          description: t('common.月经期间或前后出现的'),
          medicalSpecialty: {
            '@type': 'MedicalSpecialty',
            name: t('common.妇科学')
          }
        },
        author: {
          '@type': 'Organization',
          name: data.author || 'Period Hub Medical Team'
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        image: data.image ? {
          '@type': 'ImageObject',
          url: data.image,
          width: 1200,
          height: 630
        } : undefined,
        keywords: data.keywords?.join(', '),
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: ['Patient', 'MedicalStudent']
        },
        about: {
          '@type': 'MedicalCondition',
          name: t('common.痛经管理'),
          description: t('common.痛经的预防治疗和管理')
        }
      }
    }

    if (type === 'healthTopicPage') {
      return {
        ...baseSchema,
        '@type': 'HealthTopicPage',
        mainEntity: {
          '@type': 'MedicalCondition',
          name: t('common.女性健康'),
          description: t('common.女性生殖健康和月经健')
        },
        specialty: {
          '@type': 'MedicalSpecialty',
          name: t('common.妇科学')
        }
      }
    }

    return baseSchema
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}
