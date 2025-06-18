'use client';
import { useTranslations } from 'next-intl';
import SymptomTrackerTool from './components/SymptomTrackerTool';

export default function SymptomTrackerPage({ params: { locale } }: { params: { locale: string } }) {
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
              症状记录器
            </span>
          </div>
        </nav>

        {/* 主要内容 */}
        <div className="max-w-6xl mx-auto">
          
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              智能症状记录器
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              详细记录和分析您的经期症状，发现健康模式，获得个性化建议
            </p>
          </div>

          {/* 症状记录工具组件 */}
          <SymptomTrackerTool locale={locale} />

          {/* 功能特色 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                详细记录
              </h3>
              <p className="text-gray-600 text-sm">
                多维度症状记录，包括强度、持续时间等
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                趋势分析
              </h3>
              <p className="text-gray-600 text-sm">
                识别症状模式，了解健康变化趋势
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                智能建议
              </h3>
              <p className="text-gray-600 text-sm">
                基于症状数据提供个性化健康建议
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                数据可视化
              </h3>
              <p className="text-gray-600 text-sm">
                直观的图表展示症状变化规律
              </p>
            </div>

          </div>

          {/* 使用指南 */}
          <div className="mt-12 glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📋 使用指南
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">记录症状</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  每天记录您感受到的症状，包括类型、强度和持续时间
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">分析趋势</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  查看症状历史记录，发现与月经周期相关的模式
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">获得建议</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  基于您的症状数据，获得个性化的健康管理建议
                </p>
              </div>

            </div>
          </div>

          {/* 重要提醒 */}
          <div className="mt-8 glass-effect rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-lg">⚠️</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  重要提醒
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  症状记录器仅用于健康管理参考，不能替代专业医疗诊断。如果症状严重或持续，请及时咨询医生。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
