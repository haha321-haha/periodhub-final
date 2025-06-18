'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HealthGuidePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 健康指南分类
  const guideCategories = [
    {
      id: 'basic-knowledge',
      title: '基础知识',
      description: '了解月经和痛经的基本医学知识',
      icon: '📚',
      color: 'from-blue-500 to-indigo-500',
      topics: [
        '月经周期的生理机制',
        '痛经的类型和原因',
        '正常vs异常的判断标准',
        '激素变化对身体的影响'
      ]
    },
    {
      id: 'pain-management',
      title: '疼痛管理',
      description: '科学有效的痛经缓解方法',
      icon: '🩺',
      color: 'from-red-500 to-pink-500',
      topics: [
        '药物治疗选择指南',
        '物理疗法应用',
        '热敷和按摩技巧',
        '呼吸和放松训练'
      ]
    },
    {
      id: 'lifestyle-optimization',
      title: '生活方式优化',
      description: '通过生活调整改善经期健康',
      icon: '🌟',
      color: 'from-green-500 to-emerald-500',
      topics: [
        '营养饮食指导',
        '运动锻炼计划',
        '睡眠质量改善',
        '压力管理技巧'
      ]
    },
    {
      id: 'emergency-response',
      title: '应急处理',
      description: '突发情况的快速应对方案',
      icon: '🚨',
      color: 'from-orange-500 to-red-500',
      topics: [
        '严重痛经的紧急处理',
        '外出时的应急准备',
        '何时需要就医',
        '急救包准备清单'
      ]
    },
    {
      id: 'long-term-health',
      title: '长期健康',
      description: '建立可持续的健康管理习惯',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      topics: [
        '定期健康检查',
        '生育健康规划',
        '更年期准备',
        '家族史风险评估'
      ]
    },
    {
      id: 'psychological-support',
      title: '心理支持',
      description: '关注经期的心理健康需求',
      icon: '💝',
      color: 'from-pink-500 to-rose-500',
      topics: [
        '情绪波动的理解',
        '自我关爱技巧',
        '社会支持网络',
        '心理咨询资源'
      ]
    }
  ];

  // 快速指南
  const quickGuides = [
    {
      title: '5分钟快速缓解痛经',
      steps: ['深呼吸放松', '热敷下腹部', '轻柔按摩', '适量温水', '舒适体位'],
      urgency: 'high'
    },
    {
      title: '经期营养补充清单',
      steps: ['铁质丰富食物', '维生素B群', '镁元素补充', '充足水分', '避免咖啡因'],
      urgency: 'medium'
    },
    {
      title: '月经周期记录要点',
      steps: ['开始结束日期', '流量和颜色', '疼痛程度', '情绪变化', '其他症状'],
      urgency: 'low'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📖</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            痛经健康指南
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            全面的经期健康知识库，从基础知识到专业指导，帮助您建立科学的健康管理体系
          </p>
        </div>

        {/* 快速指南 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ⚡ 快速指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickGuides.map((guide, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 border-l-4 ${
                guide.urgency === 'high' ? 'border-red-500' : 
                guide.urgency === 'medium' ? 'border-yellow-500' : 'border-green-500'
              }`}>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${
                    guide.urgency === 'high' ? 'bg-red-500' : 
                    guide.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></span>
                  {guide.title}
                </h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium mr-2">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* 健康指南分类 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            📋 完整健康指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideCategories.map((category) => (
              <div key={category.id} className="glass-effect rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                
                {/* 分类标题 */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* 主要内容 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">主要内容：</h4>
                  <ul className="space-y-2">
                    {category.topics.map((topic, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 查看详情按钮 */}
                <div className="text-center">
                  <button className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300`}>
                    <span className="mr-2">查看详情</span>
                    <span>→</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 专业资源 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎓 专业医学资源
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 医学研究 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📊</span>
                  </span>
                  最新医学研究
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    痛经发病机制的最新研究进展
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    非药物治疗方法的循证医学证据
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    生活方式干预的长期效果评估
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    个性化治疗方案的临床应用
                  </li>
                </ul>
              </div>

              {/* 专家建议 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">👩‍⚕️</span>
                  </span>
                  专家权威建议
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    妇科专家的痛经管理指南
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    营养师的经期饮食建议
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    心理医生的情绪调节方法
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    运动专家的锻炼计划推荐
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 互动工具推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔧 配套评估工具
              </h2>
              <p className="text-gray-600">
                结合专业工具，让健康管理更加科学有效
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">痛经评估工具</h3>
                    <p className="text-gray-600 text-sm">专业评估痛经程度和类型</p>
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
                    <p className="text-gray-600 text-sm">智能预测和记录月经周期</p>
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
                    <p className="text-gray-600 text-sm">详细记录和分析症状变化</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 紧急联系信息 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🚨</span>
              </span>
              紧急情况处理
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">立即就医的症状：</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• 剧烈疼痛无法缓解</li>
                  <li>• 大量出血不止</li>
                  <li>• 伴有高热症状</li>
                  <li>• 严重恶心呕吐</li>
                  <li>• 意识模糊或昏厥</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">紧急联系方式：</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• 急救电话：120</li>
                  <li>• 妇科急诊：当地医院</li>
                  <li>• 健康咨询热线：12320</li>
                  <li>• 心理危机干预：400-161-9995</li>
                  <li>• 在线医疗咨询平台</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 免责声明 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⚠️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                重要声明
              </h3>
              <p className="text-gray-600 leading-relaxed">
                本健康指南提供的信息仅供教育和参考目的，不能替代专业医疗诊断、治疗或建议。
                每个人的身体状况不同，请根据个人情况选择合适的方法。如有严重症状或疑虑，
                请及时咨询合格的医疗专业人员。我们建议定期进行妇科检查，维护长期健康。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
