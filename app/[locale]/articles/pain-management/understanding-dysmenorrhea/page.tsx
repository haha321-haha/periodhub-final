'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function UnderstandingDysmenorrheaPage({ params: { locale } }: { params: { locale: string } }) {
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
            <a href={`/${locale}/articles/pain-management`} className="hover:text-purple-600 transition-colors">
              痛经管理
            </a>
            <span>/</span>
            <span className="text-purple-600 font-medium">
              深度解析：什么是痛经？
            </span>
          </div>
        </nav>

        {/* 文章内容 */}
        <article className="max-w-4xl mx-auto">
          
          {/* 文章头部 */}
          <header className="glass-effect rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🩺</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                深度解析：什么是痛经？
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                全面了解痛经的定义、分类和发生机制，为有效管理奠定基础
              </p>
            </div>

            {/* 文章元信息 */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-2">⏱️</span>
                阅读时间: 8分钟
              </div>
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                更新时间: 2024-12-15
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎯</span>
                难度: 基础
              </div>
              <div className="flex items-center">
                <span className="mr-2">👩‍⚕️</span>
                医学审核
              </div>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['痛经基础', '医学知识', '症状识别'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
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
              <li><a href="#definition" className="text-purple-600 hover:text-purple-700 transition-colors">1. 痛经的医学定义</a></li>
              <li><a href="#types" className="text-purple-600 hover:text-purple-700 transition-colors">2. 痛经的分类</a></li>
              <li><a href="#mechanism" className="text-purple-600 hover:text-purple-700 transition-colors">3. 痛经的发生机制</a></li>
              <li><a href="#symptoms" className="text-purple-600 hover:text-purple-700 transition-colors">4. 常见症状表现</a></li>
              <li><a href="#prevalence" className="text-purple-600 hover:text-purple-700 transition-colors">5. 发病率和影响</a></li>
              <li><a href="#summary" className="text-purple-600 hover:text-purple-700 transition-colors">6. 总结要点</a></li>
            </ul>
          </div>

          {/* 文章正文 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            
            {/* 引言 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-blue-800 leading-relaxed">
                <strong>💡 你知道吗？</strong> 痛经是全世界女性最常见的妇科症状之一，影响着约80%的育龄女性。
                然而，许多人对痛经的认识仍然存在误区。本文将为您提供科学、全面的痛经知识。
              </p>
            </div>

            {/* 第一部分：痛经的医学定义 */}
            <section id="definition" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                痛经的医学定义
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>痛经（Dysmenorrhea）</strong>是指在月经期间或月经前后出现的下腹部疼痛，通常伴随其他不适症状。
                  这种疼痛可能是轻微的不适，也可能严重到影响日常生活和工作。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">医学特征：</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>疼痛位置：</strong>主要集中在下腹部，可能放射到腰部、大腿内侧</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>疼痛性质：</strong>痉挛性、绞痛性或持续性钝痛</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>发生时间：</strong>通常在月经开始前24-48小时或月经第一天开始</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>持续时间：</strong>一般持续1-3天，随月经量减少而缓解</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 第二部分：痛经的分类 */}
            <section id="types" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                痛经的分类
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* 原发性痛经 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="mr-2">🔵</span>
                    原发性痛经
                  </h3>
                  <div className="space-y-3 text-blue-700">
                    <p><strong>定义：</strong>无器质性病变的功能性痛经</p>
                    <p><strong>发病年龄：</strong>通常在初潮后6-12个月开始</p>
                    <p><strong>特点：</strong>与排卵周期建立后出现</p>
                    <p><strong>占比：</strong>约占痛经患者的90%</p>
                    <p><strong>预后：</strong>可能随年龄增长或生育后改善</p>
                  </div>
                </div>

                {/* 继发性痛经 */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <span className="mr-2">🔴</span>
                    继发性痛经
                  </h3>
                  <div className="space-y-3 text-red-700">
                    <p><strong>定义：</strong>由盆腔器质性疾病引起的痛经</p>
                    <p><strong>发病年龄：</strong>通常在20岁以后出现</p>
                    <p><strong>特点：</strong>疼痛程度可能逐渐加重</p>
                    <p><strong>占比：</strong>约占痛经患者的10%</p>
                    <p><strong>预后：</strong>需要治疗原发疾病</p>
                  </div>
                </div>

              </div>
            </section>

            {/* 第三部分：发生机制 */}
            <section id="mechanism" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                痛经的发生机制
              </h2>
              
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">🧬 生理机制解析</h3>
                <div className="space-y-4 text-green-700">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">1</span>
                    <div>
                      <p><strong>前列腺素释放：</strong>月经期间，子宫内膜释放大量前列腺素F2α</p>
                      <p className="text-sm mt-1">这种物质会引起子宫肌肉强烈收缩，导致疼痛</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">2</span>
                    <div>
                      <p><strong>血管收缩：</strong>前列腺素还会引起子宫血管收缩</p>
                      <p className="text-sm mt-1">导致子宫缺血缺氧，进一步加重疼痛</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">3</span>
                    <div>
                      <p><strong>神经敏感：</strong>疼痛信号通过神经传导到大脑</p>
                      <p className="text-sm mt-1">个体对疼痛的敏感性不同，感受程度也不同</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第四部分：症状表现 */}
            <section id="symptoms" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                常见症状表现
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                    <span className="mr-2">🎯</span>
                    主要症状
                  </h3>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• 下腹部痉挛性疼痛</li>
                    <li>• 腰骶部疼痛</li>
                    <li>• 大腿内侧放射痛</li>
                    <li>• 疼痛呈周期性出现</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-3 flex items-center">
                    <span className="mr-2">🤢</span>
                    伴随症状
                  </h3>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• 恶心、呕吐</li>
                    <li>• 腹泻或便秘</li>
                    <li>• 头痛、头晕</li>
                    <li>• 乳房胀痛</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                  <h3 className="font-bold text-pink-800 mb-3 flex items-center">
                    <span className="mr-2">😔</span>
                    情绪症状
                  </h3>
                  <ul className="space-y-2 text-pink-700 text-sm">
                    <li>• 情绪低落</li>
                    <li>• 易怒、烦躁</li>
                    <li>• 焦虑不安</li>
                    <li>• 注意力不集中</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 第五部分：发病率和影响 */}
            <section id="prevalence" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                发病率和影响
              </h2>
              
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-4">📊 统计数据</h3>
                    <div className="space-y-3 text-indigo-700">
                      <div className="flex justify-between items-center">
                        <span>全球发病率：</span>
                        <span className="font-bold">45-95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>严重痛经：</span>
                        <span className="font-bold">5-20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>影响工作/学习：</span>
                        <span className="font-bold">13-51%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>寻求医疗帮助：</span>
                        <span className="font-bold">15-25%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-indigo-800 mb-4">💼 社会影响</h3>
                    <ul className="space-y-2 text-indigo-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>每年因痛经缺勤/缺课数亿天</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>影响学习和工作效率</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>增加医疗费用支出</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>影响生活质量和心理健康</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>

            {/* 总结 */}
            <section id="summary" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                总结要点
              </h2>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <h3 className="font-bold text-purple-800 mb-3">🎯 关键认知</h3>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• 痛经是常见但不应被忽视的症状</li>
                      <li>• 分为原发性和继发性两大类</li>
                      <li>• 主要由前列腺素引起子宫收缩</li>
                      <li>• 症状可能影响多个身体系统</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-purple-800 mb-3">💡 重要提醒</h3>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• 严重痛经应及时就医</li>
                      <li>• 有效的管理方法是存在的</li>
                      <li>• 不要认为痛经是"正常"而忍受</li>
                      <li>• 记录症状有助于诊断和治疗</li>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">痛经评估工具</h3>
                      <p className="text-gray-600 text-sm">评估您的痛经类型和严重程度</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">症状记录器</h3>
                      <p className="text-gray-600 text-sm">记录和分析您的痛经症状</p>
                    </div>
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
              
              <Link href={`/${locale}/articles/pain-management/primary-vs-secondary`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">原发性vs继发性痛经</h3>
                  <p className="text-gray-600 text-sm">学会区分两种不同类型的痛经</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/pain-management/natural-pain-relief`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">天然缓解方法</h3>
                  <p className="text-gray-600 text-sm">探索无药物的痛经管理方法</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/pain-management/when-to-see-doctor`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">何时需要就医？</h3>
                  <p className="text-gray-600 text-sm">识别需要医疗干预的警示信号</p>
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
