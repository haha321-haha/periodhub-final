'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function MythsFactsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 误区与事实文章列表
  const articles = [
    {
      id: 'common-period-myths',
      title: '经期十大常见误区揭秘',
      summary: '破除关于月经的常见误解，用科学事实澄清错误观念',
      readTime: '10分钟',
      difficulty: '基础',
      tags: ['误区澄清', '科学事实', '健康教育', '常见误解'],
      featured: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'cultural-period-taboos',
      title: '文化禁忌与科学真相',
      summary: '分析不同文化中的经期禁忌，用现代医学观点进行解读',
      readTime: '12分钟',
      difficulty: '进阶',
      tags: ['文化禁忌', '科学解读', '社会观念', '医学事实'],
      featured: true,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'period-exercise-myths',
      title: '经期运动的误区与真相',
      summary: '澄清关于经期运动的错误观念，提供科学的运动指导',
      readTime: '8分钟',
      difficulty: '实用',
      tags: ['运动误区', '健身指导', '科学运动'],
      featured: true,
      lastUpdated: '2024-12-13'
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '基础': return 'bg-green-100 text-green-800';
      case '实用': return 'bg-blue-100 text-blue-800';
      case '进阶': return 'bg-orange-100 text-orange-800';
      case '重要': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // 常见误区数据
  const commonMyths = [
    {
      myth: "经期不能洗头洗澡",
      fact: "经期保持个人卫生非常重要，温水洗澡洗头有助于缓解不适",
      category: "个人卫生",
      icon: "🚿"
    },
    {
      myth: "经期不能运动",
      fact: "适度运动可以缓解经期不适，改善情绪和减轻疼痛",
      category: "运动健身",
      icon: "🏃‍♀️"
    },
    {
      myth: "经期不能吃冷食",
      fact: "没有科学证据表明冷食会影响月经，均衡饮食更重要",
      category: "饮食营养",
      icon: "🥗"
    },
    {
      myth: "经期同房会怀孕",
      fact: "虽然概率较低，但仍有可能怀孕，需要采取避孕措施",
      category: "性健康",
      icon: "💕"
    },
    {
      myth: "痛经是正常的，忍忍就好",
      fact: "严重痛经可能是疾病信号，应该寻求医疗帮助",
      category: "疼痛管理",
      icon: "🩺"
    },
    {
      myth: "月经血是脏血",
      fact: "月经血是正常的生理现象，主要由子宫内膜和血液组成",
      category: "生理知识",
      icon: "🔬"
    }
  ];

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
            <span className="text-purple-600 font-medium">
              误区与事实
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">💡</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            误区与事实
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            破除常见的经期误区，了解科学事实，建立正确的健康观念
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{commonMyths.length}</div>
                <div className="text-gray-600 text-sm">常见误区</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-2">
                  {Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length)}
                </div>
                <div className="text-gray-600 text-sm">平均阅读时间(分钟)</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">科学依据</div>
              </div>

            </div>
          </div>
        </div>

        {/* 常见误区快速澄清 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              ❌ 常见误区快速澄清
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonMyths.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  
                  {/* 误区 */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">{item.category}</span>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg mb-3">
                      <p className="text-red-800 font-medium text-sm">
                        <span className="text-red-600 mr-2">❌ 误区：</span>
                        {item.myth}
                      </p>
                    </div>
                  </div>

                  {/* 事实 */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                    <p className="text-green-800 font-medium text-sm">
                      <span className="text-green-600 mr-2">✅ 事实：</span>
                      {item.fact}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 精选文章 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-3">⭐</span>
            深度解析文章
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <Link href={`/${locale}/articles/myths-facts/${article.id}`}>
                  <div className="glass-effect rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    
                    {/* 文章标题和摘要 */}
                    <div className="mb-6">
                      <h3 className={`font-bold text-gray-800 mb-3 ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                        {article.title}
                      </h3>
                      <p className={`text-gray-600 leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                        {article.summary}
                      </p>
                    </div>

                    {/* 文章标签 */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, index === 0 ? 4 : 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 文章元信息 */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">⏱️</span>
                          {article.readTime}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                      </div>
                      <span>{article.lastUpdated}</span>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 科学验证流程 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔬 我们如何验证信息
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">文献研究</h3>
                <p className="text-gray-600 text-sm">查阅最新的医学研究和权威文献</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">专家审核</h3>
                <p className="text-gray-600 text-sm">妇科医生和健康专家的专业审核</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">事实核查</h3>
                <p className="text-gray-600 text-sm">多重验证确保信息准确性</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">定期更新</h3>
                <p className="text-gray-600 text-sm">根据最新研究持续更新内容</p>
              </div>

            </div>
          </div>
        </section>

        {/* 相关工具推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔧 科学工具验证
              </h2>
              <p className="text-gray-600">
                使用我们的科学工具，用数据验证健康状况
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">痛经评估</h3>
                    <p className="text-gray-600 text-sm">科学评估痛经程度</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">症状记录</h3>
                    <p className="text-gray-600 text-sm">客观记录身体变化</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">周期追踪</h3>
                    <p className="text-gray-600 text-sm">科学预测月经周期</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 重要提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⚠️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                理性看待健康信息
              </h3>
              <p className="text-gray-600 leading-relaxed">
                网络上关于经期健康的信息良莠不齐，请以科学研究和医学专业意见为准。
                如果您对某些说法有疑问，建议咨询专业医生。我们致力于提供基于科学证据的准确信息，
                帮助您建立正确的健康观念。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
