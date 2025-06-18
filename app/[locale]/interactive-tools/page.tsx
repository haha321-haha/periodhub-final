'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function InteractiveToolsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {t('tools.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {t('tools.subtitle')}
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 痛经评估工具 */}
            <div className="glass-effect rounded-xl p-6 hover:shadow-purple transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🩺</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                {t('tools.periodPainAssessment.title')}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {t('tools.periodPainAssessment.subtitle')}
              </p>
              <div className="text-center">
                <Link
                  href={`/${locale}/interactive-tools/period-pain-assessment`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target inline-block"
                >
                  {t('tools.startTool')}
                </Link>
              </div>
            </div>

            {/* 周期追踪器 */}
            <div className="glass-effect rounded-xl p-6 hover:shadow-purple transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                智能周期追踪器
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                智能记录和预测您的月经周期，获得个性化健康建议
              </p>
              <div className="text-center">
                <Link
                  href={`/${locale}/interactive-tools/cycle-tracker`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target inline-block"
                >
                  {t('tools.startTool')}
                </Link>
              </div>
            </div>

            {/* 症状记录器 */}
            <div className="glass-effect rounded-xl p-6 hover:shadow-purple transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                智能症状记录器
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                详细记录和分析经期症状，发现健康模式
              </p>
              <div className="text-center">
                <Link
                  href={`/${locale}/interactive-tools/symptom-tracker`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target inline-block"
                >
                  {t('tools.startTool')}
                </Link>
              </div>
            </div>

            {/* 健康计划制定 - 即将推出 */}
            <div className="glass-effect rounded-xl p-6 opacity-75">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                健康计划制定
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                根据您的具体情况制定个性化健康管理计划
              </p>
              <div className="text-center">
                <button
                  disabled
                  className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed touch-target"
                >
                  即将推出
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            为什么选择我们的工具？
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            基于最新医学研究，结合人工智能技术，为您提供最专业的健康管理体验
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h4 className="font-semibold mb-2">隐私保护</h4>
              <p className="text-sm text-gray-600">所有数据本地存储，绝不泄露</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">即时反馈</h4>
              <p className="text-sm text-gray-600">实时分析，立即获得结果</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">个性化定制</h4>
              <p className="text-sm text-gray-600">根据您的情况量身定制</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
