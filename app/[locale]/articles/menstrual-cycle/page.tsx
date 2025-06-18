'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function MenstrualCyclePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 月经周期文章列表
  const articles = [
    {
      id: 'understanding-menstrual-cycle',
      title: '深度解析：月经周期的四个阶段',
      summary: '详细了解月经周期的生理机制，掌握每个阶段的特点和变化',
      readTime: '12分钟',
      difficulty: '基础',
      tags: ['月经周期', '生理机制', '激素变化', '科学知识'],
      featured: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'cycle-irregularities',
      title: '月经不规律：原因与应对策略',
      summary: '识别月经不规律的类型，了解可能原因和有效的调理方法',
      readTime: '10分钟',
      difficulty: '进阶',
      tags: ['月经不调', '原因分析', '调理方法', '医疗建议'],
      featured: true,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'ovulation-tracking',
      title: '排卵期追踪：提高生育健康意识',
      summary: '学会识别排卵期的身体信号，掌握科学的排卵期追踪方法',
      readTime: '8分钟',
      difficulty: '实用',
      tags: ['排卵期', '生育健康', '身体信号', '追踪方法'],
      featured: true,
      lastUpdated: '2024-12-13'
    },
    {
      id: 'hormonal-changes',
      title: '激素波动对身心的影响',
      summary: '了解月经周期中激素变化如何影响情绪、能量和身体状态',
      readTime: '9分钟',
      difficulty: '进阶',
      tags: ['激素变化', '情绪管理', '身心健康'],
      featured: false,
      lastUpdated: '2024-12-12'
    },
    {
      id: 'cycle-nutrition',
      title: '周期营养：不同阶段的饮食调理',
      summary: '根据月经周期不同阶段调整饮食，优化营养摄入',
      readTime: '11分钟',
      difficulty: '实用',
      tags: ['周期营养', '饮食调理', '营养优化'],
      featured: false,
      lastUpdated: '2024-12-11'
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '基础': return 'bg-green-100 text-green-800';
      case '实用': return 'bg-blue-100 text-blue-800';
      case '进阶': return 'bg-orange-100 text-orange-800';
      case '重要': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              月经周期
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📅</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            月经周期科学指南
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            深入了解月经周期的各个阶段和正常变化，掌握科学的健康管理方法
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">精选推荐</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length)}
                </div>
                <div className="text-gray-600 text-sm">平均阅读时间(分钟)</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">科学依据</div>
              </div>

            </div>
          </div>
        </div>

        {/* 月经周期可视化 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔄 月经周期四阶段
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* 月经期 */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🩸</span>
                </div>
                <h3 className="text-lg font-bold text-red-800 mb-2">月经期</h3>
                <p className="text-red-700 text-sm mb-3">第1-5天</p>
                <p className="text-red-600 text-xs">子宫内膜脱落，经血排出</p>
              </div>

              {/* 卵泡期 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-2">卵泡期</h3>
                <p className="text-green-700 text-sm mb-3">第1-13天</p>
                <p className="text-green-600 text-xs">卵泡发育，雌激素上升</p>
              </div>

              {/* 排卵期 */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🥚</span>
                </div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">排卵期</h3>
                <p className="text-yellow-700 text-sm mb-3">第14天左右</p>
                <p className="text-yellow-600 text-xs">成熟卵子释放</p>
              </div>

              {/* 黄体期 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌙</span>
                </div>
                <h3 className="text-lg font-bold text-purple-800 mb-2">黄体期</h3>
                <p className="text-purple-700 text-sm mb-3">第15-28天</p>
                <p className="text-purple-600 text-xs">孕激素分泌，内膜增厚</p>
              </div>

            </div>
          </div>
        </section>

        {/* 精选文章 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-3">⭐</span>
            精选推荐
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <Link href={`/${locale}/articles/menstrual-cycle/${article.id}`}>
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
                          <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
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

        {/* 其他文章 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-3">📚</span>
            更多文章
          </h2>
          
          <div className="space-y-6">
            {otherArticles.map((article) => (
              <Link key={article.id} href={`/${locale}/articles/menstrual-cycle/${article.id}`}>
                <div className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    
                    {/* 文章信息 */}
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {article.summary}
                      </p>
                      
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 元信息 */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 md:flex-col md:items-end md:space-x-0 md:space-y-2">
                      <div className="flex items-center">
                        <span className="mr-1">⏱️</span>
                        {article.readTime}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(article.difficulty)}`}>
                        {article.difficulty}
                      </span>
                      <span className="hidden md:block">{article.lastUpdated}</span>
                    </div>

                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 相关工具推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔧 周期管理工具
              </h2>
              <p className="text-gray-600">
                科学工具帮助您更好地了解和管理月经周期
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">智能周期追踪</h3>
                    <p className="text-gray-600 text-sm">预测和记录您的月经周期</p>
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
                    <p className="text-gray-600 text-sm">跟踪周期中的身体变化</p>
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
                    <p className="text-gray-600 text-sm">评估周期相关的疼痛</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
