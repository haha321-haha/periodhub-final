import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import SearchBox from '@/components/SearchBox';
import { getAllArticles } from '@/lib/articles';
import StructuredData from '@/components/StructuredData';
import ClientImage from '@/components/ClientImage';

// Lazy load non-critical components
const UserSuccessStories = dynamic(() => import('@/components/UserSuccessStories'), {
  loading: () => <div className="loading-skeleton h-64 rounded-lg"></div>,
  ssr: false
});

// Generate metadata for the page
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'site' });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://period-hub.com'
  const homeUrl = `${baseUrl}/${locale}`

  return {
    title: t('title'),
    description: t('description'),
    keywords: locale === 'zh'
      ? t('common.痛经缓解月经疼痛经期')
      : 'menstrual pain relief,period pain,menstrual health,women health,dysmenorrhea treatment,menstrual cycle,period management,natural therapy,heat therapy',
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: homeUrl,
      siteName: 'Period Hub',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('title'),
        }
      ],
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: homeUrl,
      languages: {
        'zh-CN': `${baseUrl}/zh`,
        'en-US': `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Get translations for the homepage
  const t = await getTranslations({ locale, namespace: 'homepage' });
  const commonT = await getTranslations({ locale, namespace: 'common' });
  const homePageT = await getTranslations({ locale, namespace: 'homePageContent' });
  const siteT = await getTranslations({ locale, namespace: 'site' });

  // Get all articles for search functionality
  const articles = getAllArticles(locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://period-hub.com'
  const homeUrl = `${baseUrl}/${locale}t('common.return')website"
        data={{
          title: siteT('title'),
          description: siteT('description'),
          url: homeUrl,
          locale: locale,
        }}
      />
    <div className="space-y-8 md:space-y-12 lg:space-y-16 py-2 md:py-4t('common.移动端优化Hero')py-8 md:py-12 lg:py-20 gradient-purple-pink text-white rounded-xl md:rounded-2xl">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4 md:space-y-6 text-center md:text-leftt('common.移动端优化标题')text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('hero.headlinet('common.h1')text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                {t('hero.subheadlinet('common.p')text-sm sm:text-base text-white/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
                {t('hero.bodyCopyt('common.p')max-w-md mx-auto md:mx-0 mb-4 md:mb-6">
                <SearchBox
                  articles={articles}
                  locale={locale}
                  placeholder={locale === 'en' ? '🔍 Quick search for pain relief solutions...' : t('common.快速搜索痛经解决方案')}
                  className="w-full"
                />
                <p className="text-xs sm:text-sm text-white/70 mt-2 text-center md:text-left leading-relaxed">
                  {locale === 'en' ? '💡 Try searching "5-minute relief", "heat therapy", "prostaglandins"' : t('common.试试搜索t('common.5分钟缓解')、t('common.热敷')、t('common.前列腺素')t('common.p')flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link href={`/${locale}/scenario-solutions`} className="btn-primary w-full sm:w-auto mobile-touch-target">
                  {t('hero.ctaExplore')}
                </Link>
                <Link href={`/${locale}/interactive-tools`} className="btn-outline w-full sm:w-auto mobile-touch-target">
                  {t('hero.ctaCheckSymptomst('common.Link')relative h-48 sm:h-56 md:h-80 lg:h-96 rounded-lg md:rounded-xl overflow-hidden shadow-lg order-first md:order-last">
              {/* Hero image - with fallback for better reliability */}
              <ClientImage
                src="/images/hero/hero-main-banner.jpg"
                alt="Professional healthcare illustration showing diverse women in comfortable poses, conveying comfort and medical trust"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
                fallbackSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80t('common.div')py-8 md:py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-neutral-800">
              {locale === 'en' ? 'Data-Driven Results' : t('common.数据说话效果可见')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
              {locale === 'en' ? 'Statistics based on real user feedback and scientific research' : t('common.基于真实用户反馈和科t('common.p')grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="text-center animate-slide-up bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-lg mobile-touch-target">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 text-primary-600">92%</div>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-tight">
                {locale === 'en' ? 'Users Report Improvement' : t('common.用户症状改善')}
              </p>
            </div>
            <div className="text-center animate-slide-up bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-lg mobile-touch-target" style={{animationDelay: '0.1s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 text-primary-600">
                {locale === 'en' ? '100K+' : t('common.10万')}
              </div>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-tight">
                {locale === 'en' ? 'Total Users' : t('common.累计用户')}
              </p>
            </div>
            <div className="text-center animate-slide-up bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-lg mobile-touch-target" style={{animationDelay: '0.2s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 text-primary-600">24/7</div>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-tight">
                {locale === 'en' ? 'Online Support' : t('common.在线支持')}
              </p>
            </div>
            <div className="text-center animate-slide-up bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-lg mobile-touch-target" style={{animationDelay: '0.3s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 text-primary-600">100+</div>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-tight">
                {locale === 'en' ? 'Expert Articles' : t('common.专业文章')}
              </p>
            </div>
          </div>

          {/* Statistics Infographic */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
              <ClientImage
                src="/images/infographics/stats-infographic.svg"
                alt="Medical statistics infographic showing women's health data with clean data visualization"
                width={800}
                height={400}
                className="w-full h-auto"
                fallbackSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section - Core Features */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10 text-center">
            {t('modules.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Interactive Solutions Module */}
            <div className="card flex flex-col h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {t('modules.interactiveSolutions.title')}
              </h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                {t('modules.interactiveSolutions.description')}
              </p>
              <Link href={`/${locale}/interactive-tools`} className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center">
                {commonT('tryNow')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Daily Conditioning Module */}
            <div className="card flex flex-col h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {t('modules.dailyConditioning.title')}
              </h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                {t('modules.dailyConditioning.description')}
              </p>
              <Link href={`/${locale}/natural-therapies`} className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center">
                {commonT('learnMore')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Health Guide Module */}
            <div className="card flex flex-col h-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 0 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 1 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {locale === 'en' ? 'Health Guide' : t('pages.healthGuide.title')}
              </h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                {locale === 'en' ? 'Comprehensive menstrual health knowledge system, from basic understanding to advanced management strategies.' : t('common.全面的痛经健康知识体')}
              </p>
              <Link href={`/${locale}/health-guide`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                {commonT('learnMore')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Highlight Section */}
      <section className="py-12 bg-gradient-to-r from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
              {locale === 'en' ? 'Smart Health Tools' : t('common.智能健康工具')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en' ? 'Professional assessment and tracking tools to help you better understand and manage your menstrual health' : t('common.专业的评估和追踪工具')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Smart Symptom Assessment */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col h-full mobile-touch-target">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-700 mb-3">
                {locale === 'zh' ? t('common.智能症状评估') : 'Smart Symptom Assessment'}
              </h3>
              <p className="text-neutral-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                {locale === 'zh'
                  ? t('common.通过专业问卷快速识别')
                  : 'Quickly identify pain types through professional questionnaires and receive precise personalized recommendations. Just answer 5 simple questions to get relief solutions tailored to your specific situation.'
                }
              </p>
              <Link href={`/${locale}/interactive-tools/symptom-assessment`} className="btn-primary w-full text-center mobile-touch-target">
                {locale === 'zh' ? t('common.立即评估') : 'Start Assessment'}
              </Link>
            </div>

            {/* Period Pain Assessment Tool */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col h-full mobile-touch-target">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-secondary-700 mb-3">
                {locale === 'zh' ? t('common.痛经速测小工具') : 'Period Pain Assessment'}
              </h3>
              <p className="text-neutral-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                {locale === 'zh'
                  ? t('common.回答几个简单问题初步')
                  : 'Answer a few simple questions to understand your period pain type and severity, and get personalized health recommendations and medical guidance.'
                }
              </p>
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`} className="btn-secondary w-full text-center mobile-touch-target">
                {locale === 'zh' ? t('common.立即评估') : 'Quick Assessment'}
              </Link>
            </div>

            {/* Smart Tracking System */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col h-full mobile-touch-target sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-accent-700 mb-3">
                {locale === 'zh' ? t('common.智能追踪系统') : 'Smart Tracking System'}
              </h3>
              <p className="text-neutral-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                {locale === 'zh'
                  ? t('common.记录疼痛模式分析趋势')
                  : 'Record pain patterns, analyze trend changes, and optimize treatment effectiveness. Understand your menstrual health through visual charts, discover patterns, and adjust your approach.'
                }
              </p>
              <Link href={`/${locale}/interactive-tools/pain-tracker`} className="btn-outline w-full text-center mobile-touch-target">
                {locale === 'zh' ? t('common.开始记录') : 'Start Tracking'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-12 bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10 text-center">
            {t('featuredContent.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This would typically be dynamically generated from your content */}
            <Link href={`/${locale}/articles/understanding-your-cycle`} className="card group block">
              <article>
                <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700 mb-2">
                  {locale === 'zh' ? t('common.了解您的月经周期') : 'Understanding Your Menstrual Cycle'}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {locale === 'zh'
                    ? t('common.学习月经周期的基础知')
                    : 'Learn the basics of the menstrual cycle, its phases, and how hormones play a key role in your monthly health.'
                  }
                </p>
                <span className="font-medium text-primary-500 group-hover:text-primary-600 transition-colors">
                  {t('featuredContent.readMore')} &rarr;
                </span>
              </article>
            </Link>
            
            <Link href={`/${locale}/scenario-solutions`} className="card group block">
              <article>
                <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700 mb-2">
                  {locale === 'zh' ? t('common.情景解决方案') : 'Scenario Solutions'}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {locale === 'zh'
                    ? t('common.针对不同场景的专业解')
                    : 'Professional solutions for different scenarios, including menstrual pain management strategies for work, study, exercise, and various life situations.'
                  }
                </p>
                <span className="font-medium text-primary-500 group-hover:text-primary-600 transition-colors">
                  {t('featuredContent.readMore')} &rarr;
                </span>
              </article>
            </Link>
            
            <Link href={`/${locale}/articles/anti-inflammatory-diet-period-pain`} className="card group block">
              <article>
                <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-700 mb-2">
                  {locale === 'zh' ? t('common.营养与经期健康') : 'Nutrition & Menstrual Health'}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {locale === 'zh'
                    ? t('common.饮食如何影响经期症状')
                    : 'How diet affects menstrual symptoms and which foods can help reduce inflammation and discomfort.'
                  }
                </p>
                <span className="font-medium text-primary-500 group-hover:text-primary-600 transition-colors">
                  {t('featuredContent.readMore')} &rarr;
                </span>
              </article>
            </Link>
          </div>
          
          <div className="text-center mt-10">
            <Link href={`/${locale}/articles`} className="btn-outline">
              {t('featuredContent.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* User Success Stories - Lazy loaded for better performance */}
      <UserSuccessStories />

      {/* Professional Content Section */}
      <section className="py-12 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10 text-center">
            {locale === 'zh' ? t('common.专业内容板块') : 'Professional Content'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {locale === 'zh' ? t('common.平时调理方案') : 'Daily Conditioning Plans'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'zh'
                  ? t('common.长期调理是预防痛经的')
                  : 'Long-term conditioning is key to preventing menstrual pain. Through scientific adjustments in diet, exercise, and lifestyle, reduce pain occurrence from the source.'
                }
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-1">
                <li>{locale === 'zh' ? t('common.抗炎饮食指导与营养补') : 'Anti-inflammatory diet guidance & nutritional supplements'}</li>
                <li>{locale === 'zh' ? t('common.月经周期运动计划') : 'Menstrual cycle exercise plans'}</li>
                <li>{locale === 'zh' ? t('common.压力管理与睡眠优化') : 'Stress management & sleep optimization'}</li>
                <li>{locale === 'zh' ? t('common.中医调理与草本疗法') : 'Traditional Chinese medicine & herbal therapies'}</li>
              </ul>
              <Link href={`/${locale}/natural-therapies`} className="text-primary-600 hover:text-primary-700 font-medium">
                {locale === 'zh' ? t('common.了解详情') : 'Learn More →'}
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {locale === 'zh' ? t('common.医学原理研究') : 'Medical Research'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'zh'
                  ? t('common.基于WHOMayo')
                  : 'Based on the latest research from authoritative institutions like WHO and Mayo Clinic, providing in-depth analysis of menstrual pain causes and treatment mechanisms.'
                }
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-1">
                <li>{locale === 'zh' ? t('common.原发性vs继发性痛经') : 'Primary vs secondary dysmenorrhea pathology'}</li>
                <li>{locale === 'zh' ? t('common.前列腺素与疼痛传导机') : 'Prostaglandin & pain transmission mechanisms'}</li>
                <li>{locale === 'zh' ? t('common.药物治疗原理与选择') : 'Pharmaceutical treatment principles & selection'}</li>
                <li>{locale === 'zh' ? t('common.最新临床研究进展') : 'Latest clinical research developments'}</li>
              </ul>
              <Link href={`/${locale}/articles`} className="text-primary-600 hover:text-primary-700 font-medium">
                {locale === 'zh' ? t('common.阅读研究') : 'Read Research →'}
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                {locale === 'zh' ? t('common.知识与故事中心') : 'Knowledge & Stories Center'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'zh'
                  ? t('common.丰富的健康资讯真实用')
                  : 'Rich health information, real user recovery stories, and in-depth expert interviews to provide you with comprehensive support.'
                }
              </p>
              <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-1">
                <li>{locale === 'zh' ? t('common.每周更新的健康资讯') : 'Weekly updated health information'}</li>
                <li>{locale === 'zh' ? t('common.真实用户康复经历分享') : 'Real user recovery experience sharing'}</li>
                <li>{locale === 'zh' ? t('common.妇科专家深度访谈') : 'In-depth gynecologist interviews'}</li>
                <li>{locale === 'zh' ? t('common.青少年经期健康指导') : 'Teen menstrual health guidance'}</li>
              </ul>
              <Link href={`/${locale}/articles`} className="text-primary-600 hover:text-primary-700 font-medium">
                {locale === 'zh' ? t('common.浏览文章') : 'Browse Articles →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <div className="container-custom">
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 my-8" role="alert">
          <p className="font-bold">
            {locale === 'en' ? 'Medical Disclaimer' : t('common.医疗免责声明')}
          </p>
          <p className="text-sm">
            {commonT('medicalDisclaimer')}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
