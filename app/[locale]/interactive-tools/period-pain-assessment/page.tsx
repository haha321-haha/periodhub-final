'use client';
import { useTranslations } from 'next-intl';
import PeriodPainAssessmentTool from './components/PeriodPainAssessmentTool';

export default function PeriodPainAssessmentPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 面包屑导航 */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href={`/${locale}`} className="hover:text-purple-600 transition-colors">
              {t('common.home')}
            </a>
            <span>/</span>
            <a href={`/${locale}/interactive-tools`} className="hover:text-purple-600 transition-colors">
              {t('common.interactiveTools')}
            </a>
            <span>/</span>
            <span className="text-purple-600 font-medium">
              {t('interactiveTools.periodPainAssessment.title')}
            </span>
          </div>
        </nav>

        {/* 主要内容 */}
        <div className="max-w-4xl mx-auto">
          
          {/* 页面标题 */}
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 sm:mb-6 leading-tight">
              {t('interactiveTools.periodPainAssessment.title')}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t('interactiveTools.periodPainAssessment.subtitle')}
            </p>
          </div>

          {/* 评估工具组件 */}
          <PeriodPainAssessmentTool locale={locale} />

          {/* 重要提醒 */}
          <div className="mt-6 sm:mt-8 glass-effect rounded-xl p-4 sm:p-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-8 sm:h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xl sm:text-lg">⚠️</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {t('common.importantNote')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t('interactiveTools.medicalDisclaimer.text')}
                </p>
              </div>
            </div>
          </div>

          {/* 相关资源 */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                📚 {t('common.articles')}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                {t('interactiveTools.periodPainAssessment.relatedArticlesDesc')}
              </p>
              <a
                href={`/${locale}/articles`}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors text-sm sm:text-base inline-block touch-target"
              >
                {t('interactiveTools.periodPainAssessment.viewArticles')} →
              </a>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                👩‍⚕️ {t('common.teenHealth')}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                {t('interactiveTools.periodPainAssessment.teenHealthDesc')}
              </p>
              <a
                href={`/${locale}/teen-health`}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors text-sm sm:text-base inline-block touch-target"
              >
                {t('interactiveTools.periodPainAssessment.visitTeenHealth')} →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
