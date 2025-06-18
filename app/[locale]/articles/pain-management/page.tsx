'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PainManagementPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 痛经管理文章列表
  const articles = [
    {
      id: 'understanding-dysmenorrhea',
      title: '深度解析：什么是痛经？',
      summary: '全面了解痛经的定义、分类和发生机制，为有效管理奠定基础',
      readTime: '8分钟',
      difficulty: '基础',
      tags: ['痛经基础', '医学知识', '症状识别'],
      featured: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'primary-vs-secondary',
      title: '原发性vs继发性痛经：如何区分？',
      summary: '学会识别两种不同类型的痛经，了解各自的特点和治疗方向',
      readTime: '6分钟',
      difficulty: '基础',
      tags: ['痛经分类', '诊断', '医疗建议'],
      featured: true,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'natural-pain-relief',
      title: '天然缓解方法：无药物痛经管理',
      summary: '探索热敷、按摩、瑜伽等天然方法，安全有效地缓解痛经',
      readTime: '10分钟',
      difficulty: '实用',
      tags: ['自然疗法', '热敷', '瑜伽', '按摩'],
      featured: true,
      lastUpdated: '2024-12-13'
    },
    {
      id: 'medication-guide',
      title: '痛经药物指南：安全用药须知',
      summary: '了解常用痛经药物的种类、使用方法和注意事项',
      readTime: '7分钟',
      difficulty: '进阶',
      tags: ['药物治疗', '用药安全', '医疗指导'],
      featured: false,
      lastUpdated: '2024-12-12'
    },
    {
      id: 'when-to-see-doctor',
      title: '何时需要就医？痛经的警示信号',
      summary: '识别需要医疗干预的痛经症状，及时获得专业帮助',
      readTime: '5分钟',
      difficulty: '重要',
      tags: ['医疗建议', '警示信号', '就医指导'],
      featured: false,
      lastUpdated: '2024-12-11'
    },
    {
      id: 'lifestyle-prevention',
      title: '生活方式调整：预防痛经的长期策略',
      summary: '通过饮食、运动和生活习惯的调整，减少痛经发生',
      readTime: '9分钟',
      difficulty: '实用',
      tags: ['生活方式', '预防', '饮食', '运动'],
      featured: false,
      lastUpdated: '2024-12-10'
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
              痛经管理
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🩺</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            痛经管理专区
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            基于医学研究的专业指导，帮助您科学有效地管理痛经问题
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">精选推荐</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length)}
                </div>
                <div className="text-gray-600 text-sm">平均阅读时间(分钟)</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">医学依据</div>
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
                <Link href={`/${locale}/articles/pain-management/${article.id}`}>
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
              <Link key={article.id} href={`/${locale}/articles/pain-management/${article.id}`}>
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
                结合我们的专业工具，获得更好的痛经管理效果
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">痛经评估工具</h3>
                      <p className="text-gray-600 text-sm">评估您的痛经严重程度并获得专业建议</p>
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
                      <p className="text-gray-600 text-sm">跟踪痛经症状变化，发现管理模式</p>
                    </div>
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
