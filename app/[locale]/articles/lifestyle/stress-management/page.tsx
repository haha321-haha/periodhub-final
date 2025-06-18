'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import BreathingExerciseTool from '@/components/tools/BreathingExerciseTool';

export default function StressManagementPage({ params: { locale } }: { params: { locale: string } }) {
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
              压力管理与经期健康
            </span>
          </div>
        </nav>

        {/* 文章内容 */}
        <article className="max-w-4xl mx-auto">
          
          {/* 文章头部 */}
          <header className="glass-effect rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧘‍♀️</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                压力管理与经期健康的关系
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                探索压力对月经周期的影响，学习有效的压力管理技巧
              </p>
            </div>

            {/* 文章元信息 */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-2">⏱️</span>
                阅读时间: 9分钟
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
                <span className="mr-2">🔧</span>
                含呼吸练习工具
              </div>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['压力管理', '心理健康', '放松技巧', '呼吸练习'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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
              <li><a href="#stress-menstrual-connection" className="text-purple-600 hover:text-purple-700 transition-colors">1. 压力与月经周期的关系</a></li>
              <li><a href="#stress-symptoms" className="text-purple-600 hover:text-purple-700 transition-colors">2. 压力对经期的具体影响</a></li>
              <li><a href="#stress-sources" className="text-purple-600 hover:text-purple-700 transition-colors">3. 常见的压力来源</a></li>
              <li><a href="#breathing-exercises" className="text-purple-600 hover:text-purple-700 transition-colors">4. 🔧 呼吸练习工具</a></li>
              <li><a href="#stress-management-techniques" className="text-purple-600 hover:text-purple-700 transition-colors">5. 压力管理技巧</a></li>
              <li><a href="#lifestyle-changes" className="text-purple-600 hover:text-purple-700 transition-colors">6. 生活方式调整</a></li>
            </ul>
          </div>

          {/* 文章正文 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            
            {/* 引言 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-blue-800 leading-relaxed">
                <strong>🧠 身心连接：</strong> 现代生活中，压力已成为影响女性健康的重要因素。
                研究表明，慢性压力不仅会影响月经周期的规律性，还可能加重经期症状。
                学会有效管理压力，对维护经期健康至关重要。
              </p>
            </div>

            {/* 第一部分：压力与月经周期的关系 */}
            <section id="stress-menstrual-connection" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                压力与月经周期的关系
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  压力通过下丘脑-垂体-肾上腺轴（HPA轴）影响生殖激素的分泌，进而影响月经周期。
                  当身体处于压力状态时，会优先分泌应激激素如皮质醇，这可能抑制生殖激素的正常分泌。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">🔬 生理机制：</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>下丘脑影响：</strong>压力激活下丘脑，影响GnRH（促性腺激素释放激素）分泌</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>垂体反应：</strong>GnRH减少导致LH和FSH分泌异常</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>卵巢功能：</strong>激素失衡影响卵泡发育和排卵</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>月经变化：</strong>周期不规律、经量异常、痛经加重</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 第二部分：压力对经期的具体影响 */}
            <section id="stress-symptoms" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                压力对经期的具体影响
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* 周期影响 */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <span className="mr-2">📅</span>
                    周期影响
                  </h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• 月经周期延长或缩短</li>
                    <li>• 排卵时间不规律</li>
                    <li>• 月经量增多或减少</li>
                    <li>• 闭经（严重情况下）</li>
                  </ul>
                </div>

                {/* 症状加重 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                    <span className="mr-2">😣</span>
                    症状加重
                  </h3>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• 痛经程度加重</li>
                    <li>• PMS症状明显</li>
                    <li>• 情绪波动增大</li>
                    <li>• 疲劳感加重</li>
                  </ul>
                </div>

                {/* 心理影响 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <span className="mr-2">🧠</span>
                    心理影响
                  </h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• 焦虑和抑郁情绪</li>
                    <li>• 注意力难以集中</li>
                    <li>• 睡眠质量下降</li>
                    <li>• 自信心降低</li>
                  </ul>
                </div>

                {/* 身体反应 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="mr-2">💪</span>
                    身体反应
                  </h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• 肌肉紧张</li>
                    <li>• 头痛频发</li>
                    <li>• 消化问题</li>
                    <li>• 免疫力下降</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 第三部分：常见的压力来源 */}
            <section id="stress-sources" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                常见的压力来源
              </h2>
              
              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 识别压力源</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-3">工作压力</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• 工作量过大</li>
                      <li>• 职场竞争</li>
                      <li>• 工作不稳定</li>
                      <li>• 人际关系紧张</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-yellow-800 mb-3">生活压力</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• 经济负担</li>
                      <li>• 家庭责任</li>
                      <li>• 人际关系</li>
                      <li>• 生活变化</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-yellow-800 mb-3">健康压力</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• 疾病担忧</li>
                      <li>• 身体不适</li>
                      <li>• 睡眠不足</li>
                      <li>• 营养不良</li>
                    </ul>
                  </div>

                </div>
              </div>
            </section>

          </div>

          {/* 呼吸练习工具 */}
          <section id="breathing-exercises" className="mb-8">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                🔧 呼吸练习工具
              </h2>
              
              <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                <p className="text-indigo-800 leading-relaxed">
                  <strong>🫁 科学减压：</strong>深呼吸是最简单有效的压力管理技巧之一。
                  通过调节呼吸节奏，可以激活副交感神经系统，降低压力激素水平，
                  缓解经期不适。下面的工具提供了多种科学验证的呼吸练习方法。
                </p>
              </div>

              {/* 内嵌呼吸练习工具 */}
              <BreathingExerciseTool />
            </div>
          </section>

          {/* 继续文章内容 */}
          <div className="glass-effect rounded-xl p-8 mb-8">
            
            {/* 第五部分：压力管理技巧 */}
            <section id="stress-management-techniques" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                压力管理技巧
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-4">🧘‍♀️ 放松技巧</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">冥想练习</h4>
                      <p className="text-green-700 text-sm">每天10-20分钟的正念冥想，专注当下，减少焦虑</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">渐进性肌肉放松</h4>
                      <p className="text-green-700 text-sm">依次紧张和放松各部位肌肉，释放身体紧张</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">瑜伽练习</h4>
                      <p className="text-green-700 text-sm">温和的瑜伽动作，结合呼吸，平衡身心</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-4">🎯 认知技巧</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">正面思维</h4>
                      <p className="text-green-700 text-sm">识别负面思维模式，用积极观点重新框架</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">问题解决</h4>
                      <p className="text-green-700 text-sm">分析压力源，制定具体可行的解决方案</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">时间管理</h4>
                      <p className="text-green-700 text-sm">合理安排时间，设定优先级，避免过度承诺</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 第六部分：生活方式调整 */}
            <section id="lifestyle-changes" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                生活方式调整
              </h2>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div>
                    <h3 className="font-bold text-purple-800 mb-3">💤 睡眠优化</h3>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• 保持规律作息</li>
                      <li>• 创造舒适睡眠环境</li>
                      <li>• 避免睡前刺激</li>
                      <li>• 每晚7-9小时睡眠</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-purple-800 mb-3">🏃‍♀️ 运动调节</h3>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• 规律有氧运动</li>
                      <li>• 适度力量训练</li>
                      <li>• 户外活动增加</li>
                      <li>• 避免过度运动</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-purple-800 mb-3">🥗 营养支持</h3>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• 均衡营养摄入</li>
                      <li>• 减少咖啡因</li>
                      <li>• 增加Omega-3</li>
                      <li>• 补充B族维生素</li>
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
              
              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">症状记录器</h3>
                    <p className="text-gray-600 text-sm">跟踪压力对经期症状的影响</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">周期追踪器</h3>
                    <p className="text-gray-600 text-sm">监测压力对月经周期的影响</p>
                  </div>
                </div>
              </Link>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🫁</span>
                </div>
                <h3 className="font-bold mb-1">呼吸练习工具</h3>
                <p className="text-blue-100 text-sm">在本文中体验科学呼吸法</p>
              </div>

            </div>
          </div>

          {/* 相关文章推荐 */}
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 相关文章推荐
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/articles/lifestyle/sleep-menstrual-cycle`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">睡眠与月经周期</h3>
                  <p className="text-gray-600 text-sm">了解睡眠对经期健康的影响</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/lifestyle/exercise-menstrual-health`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">经期运动指南</h3>
                  <p className="text-gray-600 text-sm">通过运动缓解压力和经期不适</p>
                  <div className="mt-3 text-purple-600 text-sm">阅读更多 →</div>
                </div>
              </Link>

              <Link href={`/${locale}/articles/lifestyle/nutrition-menstrual-cycle`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">经期营养指南</h3>
                  <p className="text-gray-600 text-sm">营养支持帮助应对压力</p>
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
