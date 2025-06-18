'use client';
import { useTranslations } from 'next-intl';
import CycleTrackerTool from './components/CycleTrackerTool';

export default function CycleTrackerPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 面包屑导航 */}
        <nav className="mb-4 sm:mb-6 px-4 sm:px-0">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <a href={`/${locale}`} className="hover:text-purple-600 transition-colors">
              {t('common.home')}
            </a>
            <span>/</span>
            <a href={`/${locale}/interactive-tools`} className="hover:text-purple-600 transition-colors">
              {t('common.interactiveTools')}
            </a>
            <span>/</span>
            <span className="text-purple-600 font-medium">
              {t('interactiveTools.cycleTracker.title')}
            </span>
          </div>
        </nav>

        {/* 主要内容 */}
        <div className="max-w-4xl mx-auto">
          
          {/* 页面标题 */}
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 sm:mb-6 leading-tight">
              {t('interactiveTools.cycleTracker.title')}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t('interactiveTools.cycleTracker.subtitle')}
            </p>
          </div>

          {/* 周期追踪工具组件 */}
          <CycleTrackerTool locale={locale} />

          {/* 功能介绍 */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

            <div className="glass-effect rounded-xl p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white text-lg sm:text-xl">📅</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">
                {t('tools.cycleTracker.feature1')}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                基于您的历史数据，准确预测下次月经时间
              </p>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white text-lg sm:text-xl">📊</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">
                {t('tools.cycleTracker.feature3')}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                深入分析您的周期模式和健康趋势
              </p>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white text-lg sm:text-xl">🔔</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">
                智能提醒
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                及时提醒重要日期和健康建议
              </p>
            </div>

          </div>

          {/* 隐私保护说明 */}
          <div className="mt-8 glass-effect rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">🔒</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  隐私保护承诺
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  您的所有数据都安全存储在本地设备中，我们绝不会收集、存储或分享您的个人健康信息。您的隐私是我们的首要关注。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
