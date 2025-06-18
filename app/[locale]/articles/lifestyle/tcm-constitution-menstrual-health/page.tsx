'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ConstitutionTestTool from '@/components/tools/ConstitutionTestTool';

export default function TCMConstitutionPage({ params: { locale } }: { params: { locale: string } }) {
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
            <a href={`/${locale}/articles`} className="hover:text-purple-600 transition-colors">
              {t('common.articles')}
            </a>
            <span>/</span>
            <a href={`/${locale}/articles/lifestyle`} className="hover:text-purple-600 transition-colors">
              生活方式
            </a>
            <span>/</span>
            <span className="text-purple-600 font-medium">
              中医体质与经期健康
            </span>
          </div>
        </nav>

        {/* 文章内容 */}
        <article className="max-w-4xl mx-auto">
          
          {/* 文章头部 */}
          <header className="glass-effect rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                中医体质与经期健康：个性化调理指南
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                了解不同中医体质类型对经期的影响，获得个性化的中医调理建议
              </p>
            </div>

            {/* 文章元信息 */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-2">⏱️</span>
                阅读时间: 12分钟
              </div>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                更新时间: 2024-12-15
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎯</span>
                难度: 进阶
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔧</span>
                含交互工具
              </div>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['中医体质', '个性化调理', '传统医学', '体质测试'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* 文章目录 */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📋</span>
              文章目录
            </h2>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-purple-600 hover:text-purple-700 transition-colors">1. 中医体质学说概述</a></li>
              <li><a href="#constitution-types" className="text-purple-600 hover:text-purple-700 transition-colors">2. 五大体质类型详解</a></li>
              <li><a href="#menstrual-impact" className="text-purple-600 hover:text-purple-700 transition-colors">3. 体质对经期的影响</a></li>
              <li><a href="#interactive-test" className="text-purple-600 hover:text-purple-700 transition-colors">4. 🔧 体质测试工具</a></li>
              <li><a href="#personalized-care" className="text-purple-600 hover:text-purple-700 transition-colors">5. 个性化调理方案</a></li>
              <li><a href="#practical-tips" className="text-purple-600 hover:text-purple-700 transition-colors">6. 实用调理技巧</a></li>
            </ul>
          </div>

          {/* 文章正文 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            
            {/* 引言 */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
              <p className="text-orange-800 leading-relaxed">
                <strong>🌿 传统智慧与现代健康：</strong> 中医体质学说认为，每个人的体质不同，对疾病的易感性和治疗反应也不同。
                了解自己的体质类型，可以帮助我们更好地调理经期健康，实现个性化的健康管理。
              </p>
            </div>

            {/* 第一部分：中医体质学说概述 */}
            <section id="introduction" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                中医体质学说概述
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  中医体质学说是中医学的重要组成部分，认为体质是人体生命过程中，在先天禀赋和后天获得的基础上，
                  表现出的形态结构、生理功能和心理状态方面综合的、相对稳定的固有特质。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">体质的特点：</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>个体性：</strong>每个人的体质都有其独特性</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>相对稳定性：</strong>体质一旦形成，相对稳定</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>可调性：</strong>通过调理可以改善体质</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>动态性：</strong>体质会随年龄、环境变化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 第二部分：五大体质类型详解 */}
            <section id="constitution-types" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                五大体质类型详解
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* 平和质 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="mr-2">🟢</span>
                    平和质
                  </h3>
                  <div className="space-y-2 text-green-700 text-sm">
                    <p><strong>特征：</strong>阴阳气血调和，体质状态良好</p>
                    <p><strong>经期表现：</strong>月经规律，经量适中，无明显不适</p>
                    <p><strong>调理重点：</strong>维持平衡，预防为主</p>
                  </div>
                </div>

                {/* 气虚质 */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <span className="mr-2">🟡</span>
                    气虚质
                  </h3>
                  <div className="space-y-2 text-yellow-700 text-sm">
                    <p><strong>特征：</strong>元气不足，容易疲劳</p>
                    <p><strong>经期表现：</strong>经量偏少，色淡，经期疲乏</p>
                    <p><strong>调理重点：</strong>补气养血，增强体质</p>
                  </div>
                </div>

                {/* 阳虚质 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                    <span className="mr-2">🟠</span>
                    阳虚质
                  </h3>
                  <div className="space-y-2 text-orange-700 text-sm">
                    <p><strong>特征：</strong>阳气不足，畏寒怕冷</p>
                    <p><strong>经期表现：</strong>经期腹痛，喜温喜按</p>
                    <p><strong>调理重点：</strong>温阳散寒，暖宫调经</p>
                  </div>
                </div>

                {/* 阴虚质 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="mr-2">🔵</span>
                    阴虚质
                  </h3>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p><strong>特征：</strong>阴液不足，虚热内扰</p>
                    <p><strong>经期表现：</strong>经量偏少，色红，经前烦躁</p>
                    <p><strong>调理重点：</strong>滋阴降火，养血调经</p>
                  </div>
                </div>

                {/* 痰湿质 */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                    <span className="mr-2">🔷</span>
                    痰湿质
                  </h3>
                  <div className="space-y-2 text-teal-700 text-sm">
                    <p><strong>特征：</strong>痰湿凝聚，形体肥胖</p>
                    <p><strong>经期表现：</strong>经期延后，经量偏多，带下增多</p>
                    <p><strong>调理重点：</strong>化痰祛湿，理气调经</p>
                  </div>
                </div>

              </div>
            </section>

            {/* 第三部分：体质对经期的影响 */}
            <section id="menstrual-impact" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                体质对经期的影响
              </h2>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">🔄 体质与经期的相互关系</h3>
                <div className="space-y-4 text-purple-700">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">1</span>
                    <div>
                      <p><strong>体质决定经期表现：</strong>不同体质的女性，月经的周期、经量、颜色、质地都会有所不同</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">2</span>
                    <div>
                      <p><strong>经期影响体质：</strong>月经期间的调理不当，也会影响体质的变化</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">3</span>
                    <div>
                      <p><strong>个性化调理：</strong>根据体质特点进行针对性调理，效果更佳</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* 交互式体质测试工具 */}
          <section id="interactive-test" className="mb-8">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                🔧 体质测试工具
              </h2>
              
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <p className="text-indigo-800 leading-relaxed">
                  <strong>💡 个性化体验：</strong>通过下面的交互式测试，了解您的中医体质类型，
                  获得针对性的经期调理建议。测试基于中医体质学理论，结合现代健康管理理念。
                </p>
              </div>

              {/* 内嵌体质测试工具 */}
              <ConstitutionTestTool />
            </div>
          </section>

          {/* 继续文章内容 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            
            {/* 第五部分：个性化调理方案 */}
            <section id="personalized-care" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                个性化调理方案
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div>
                  <h3 className="text-lg font-bold text-pink-800 mb-4">🍃 饮食调理</h3>
                  <div className="space-y-3 text-pink-700">
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>气虚质：</strong>多食补气食物，如人参、黄芪、山药、红枣</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>阳虚质：</strong>温阳食物为主，如羊肉、生姜、肉桂、核桃</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>阴虚质：</strong>滋阴润燥，如银耳、百合、枸杞、梨</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>痰湿质：</strong>化痰祛湿，如薏米、冬瓜、海带、茯苓</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-pink-800 mb-4">🧘‍♀️ 运动调理</h3>
                  <div className="space-y-3 text-pink-700">
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>气虚质：</strong>轻柔运动，如太极、八段锦、散步</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>阳虚质：</strong>温和运动，避免大汗，适当晒太阳</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>阴虚质：</strong>静养为主，瑜伽、冥想、轻度有氧</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p><strong>痰湿质：</strong>加强运动，促进代谢，游泳、慢跑</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 第六部分：实用调理技巧 */}
            <section id="practical-tips" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                实用调理技巧
              </h2>
              
              <div className="bg-teal-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div>
                    <h3 className="font-bold text-teal-800 mb-3">🌙 经期调理</h3>
                    <ul className="space-y-2 text-teal-700 text-sm">
                      <li>• 根据体质选择合适的经期食物</li>
                      <li>• 调整运动强度和方式</li>
                      <li>• 注意情绪调节</li>
                      <li>• 保持充足睡眠</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-teal-800 mb-3">🌿 日常养护</h3>
                    <ul className="space-y-2 text-teal-700 text-sm">
                      <li>• 建立适合体质的作息规律</li>
                      <li>• 选择合适的养生方法</li>
                      <li>• 定期体质评估</li>
                      <li>• 季节性调理</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-teal-800 mb-3">⚠️ 注意事项</h3>
                    <ul className="space-y-2 text-teal-700 text-sm">
                      <li>• 体质调理需要时间</li>
                      <li>• 避免过度调理</li>
                      <li>• 结合现代医学</li>
                      <li>• 定期专业咨询</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>

          </div>

          {/* 相关工具推荐 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔧 相关工具推荐
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">周期追踪器</h3>
                    <p className="text-gray-600 text-sm">记录体质调理对周期的影响</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">症状记录器</h3>
                    <p className="text-gray-600 text-sm">跟踪体质调理的效果</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">痛经评估</h3>
                    <p className="text-gray-600 text-sm">评估体质对痛经的影响</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>

          {/* 相关文章推荐 */}
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 相关文章推荐
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/articles/lifestyle/nutrition-menstrual-cycle`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">经期营养指南</h3>
                  <p className="text-gray-600 text-sm">科学的经期营养建议</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/lifestyle/exercise-menstrual-health`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">经期运动指南</h3>
                  <p className="text-gray-600 text-sm">安全有效的锻炼方法</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/lifestyle/stress-management`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">压力管理</h3>
                  <p className="text-gray-600 text-sm">压力对经期健康的影响</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
