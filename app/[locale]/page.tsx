import Link from 'next/link';

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {locale === 'zh' ? '经期健康管理专家' : 'Menstrual Health Management Expert'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {locale === 'zh' ?
                '专业、科学、温暖的经期健康指导平台，为每一位女性提供个性化的健康管理方案' :
                'Professional, scientific, and caring menstrual health guidance platform, providing personalized health management solutions for every woman'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/interactive-tools`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {locale === 'zh' ? '开始健康评估' : 'Start Health Assessment'}
              </Link>
              <Link
                href={`/${locale}/articles`}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                {locale === 'zh' ? '浏览文章' : 'Browse Articles'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据部分 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {locale === 'zh' ? '数据说话，效果可见' : 'Data-Driven Results'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">92%</div>
                <div className="text-gray-600">
                  {locale === 'zh' ? '用户症状改善' : 'Users Report Improvement'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {locale === 'zh' ? '10万+' : '100K+'}
                </div>
                <div className="text-gray-600">
                  {locale === 'zh' ? '累计用户' : 'Total Users'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">
                  {locale === 'zh' ? '在线支持' : 'Online Support'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">
                  {locale === 'zh' ? '专业文章' : 'Expert Articles'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能展示 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {locale === 'zh' ? '核心功能' : 'Core Features'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 智能工具 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {locale === 'zh' ? '智能工具' : 'Smart Tools'}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {locale === 'zh' ?
                    '4个智能评估工具：痛经评估、周期追踪、症状记录、体质测试' :
                    '4 smart assessment tools: pain assessment, cycle tracking, symptom recording, constitution test'
                  }
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/interactive-tools`}
                    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {locale === 'zh' ? '立即体验' : 'Try Now'}
                  </Link>
                </div>
              </div>

              {/* 健康文章 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {locale === 'zh' ? '健康文章' : 'Health Articles'}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {locale === 'zh' ?
                    '100+篇专业文章，涵盖痛经管理、月经周期、症状解读等多个分类' :
                    '100+ professional articles covering pain management, menstrual cycle, symptom interpretation and more'
                  }
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/articles`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {locale === 'zh' ? '阅读文章' : 'Read Articles'}
                  </Link>
                </div>
              </div>

              {/* 自然疗法 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {locale === 'zh' ? '自然疗法' : 'Natural Therapies'}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {locale === 'zh' ?
                    '6种自然调理方法：中草药、针灸、营养、运动、芳香、热敷' :
                    '6 natural conditioning methods: herbs, acupuncture, nutrition, exercise, aromatherapy, heat therapy'
                  }
                </p>
                <div className="text-center">
                  <Link
                    href={`/${locale}/natural-therapies`}
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {locale === 'zh' ? '了解更多' : 'Learn More'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 医疗免责声明 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">
            {locale === 'zh' ? '医疗免责声明' : 'Medical Disclaimer'}
          </p>
          <p className="text-sm">
            {locale === 'zh' ?
              '本信息仅供教育目的，不旨在替代专业医疗建议。如有医疗问题，请咨询医疗专业人士。' :
              'This information is for educational purposes only and is not intended to replace professional medical advice. If you have medical concerns, please consult a healthcare professional.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
