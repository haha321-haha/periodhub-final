'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LifestylePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 生活方式文章列表
  const articles = [
    {
      id: 'tcm-constitution-menstrual-health',
      title: '中医体质与经期健康：个性化调理指南',
      summary: '了解不同中医体质类型对经期的影响，获得个性化的中医调理建议',
      readTime: '12分钟',
      difficulty: '进阶',
      tags: ['中医体质', '个性化调理', '传统医学', '体质测试'],
      featured: true,
      hasInteractiveTool: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'nutrition-menstrual-cycle',
      title: '经期营养指南：吃对食物缓解不适',
      summary: '科学的经期营养建议，通过饮食调理改善经期症状',
      readTime: '8分钟',
      difficulty: '实用',
      tags: ['营养饮食', '食疗', '经期调理'],
      featured: true,
      hasInteractiveTool: false,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'exercise-menstrual-health',
      title: '经期运动指南：安全有效的锻炼方法',
      summary: '了解经期适宜的运动类型，通过科学锻炼改善经期不适',
      readTime: '10分钟',
      difficulty: '实用',
      tags: ['运动健身', '经期锻炼', '瑜伽'],
      featured: true,
      hasInteractiveTool: false,
      lastUpdated: '2024-12-13'
    },
    {
      id: 'stress-management',
      title: '压力管理与经期健康的关系',
      summary: '探索压力对月经周期的影响，学习有效的压力管理技巧',
      readTime: '9分钟',
      difficulty: '基础',
      tags: ['压力管理', '心理健康', '放松技巧'],
      featured: false,
      hasInteractiveTool: false,
      lastUpdated: '2024-12-12'
    },
    {
      id: 'sleep-menstrual-cycle',
      title: '睡眠质量对月经周期的影响',
      summary: '了解睡眠与激素分泌的关系，改善睡眠质量优化经期健康',
      readTime: '7分钟',
      difficulty: '基础',
      tags: ['睡眠健康', '激素调节', '生活习惯'],
      featured: false,
      hasInteractiveTool: false,
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
              生活方式
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🌱</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            生活方式与经期健康
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            通过科学的生活方式调整，改善经期健康，提升整体生活质量
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {articles.filter(a => a.hasInteractiveTool).length}
                </div>
                <div className="text-gray-600 text-sm">交互工具</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length)}
                </div>
                <div className="text-gray-600 text-sm">平均阅读时间(分钟)</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">科学依据</div>
              </div>

            </div>
          </div>
        </div>

        {/* 精选文章 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-3">⭐</span>
            精选推荐
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <Link href={`/${locale}/articles/lifestyle/${article.id}`}>
                  <div className="glass-effect rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    
                    {/* 特殊标识 */}
                    {article.hasInteractiveTool && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                          <span className="mr-1">🔧</span>
                          内含交互工具
                        </span>
                      </div>
                    )}

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
                          <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
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
              <Link key={article.id} href={`/${locale}/articles/lifestyle/${article.id}`}>
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
                🔧 相关工具推荐
              </h2>
              <p className="text-gray-600">
                结合我们的专业工具，制定个性化的生活方式调整方案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">周期追踪器</h3>
                    <p className="text-gray-600 text-sm">记录生活方式对周期的影响</p>
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
                    <p className="text-gray-600 text-sm">跟踪生活调整的效果</p>
                  </div>
                </div>
              </Link>

              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-6 text-white text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🏥</span>
                </div>
                <h3 className="font-bold mb-1">体质测试工具</h3>
                <p className="text-orange-100 text-sm">在中医体质文章中体验</p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
