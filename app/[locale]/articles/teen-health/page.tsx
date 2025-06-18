'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TeenHealthPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 青少年健康文章列表
  const articles = [
    {
      id: 'first-period-guide',
      title: '初潮指南：女孩的第一次月经',
      summary: '为青春期女孩和家长提供初潮的全面指导，包括准备、应对和心理支持',
      readTime: '10分钟',
      difficulty: '基础',
      tags: ['初潮', '青春期', '心理准备', '家长指导'],
      featured: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'school-period-management',
      title: '校园经期管理：学生实用指南',
      summary: '帮助学生在校园环境中自信地管理月经，包括应急处理和心理调适',
      readTime: '8分钟',
      difficulty: '实用',
      tags: ['校园生活', '应急处理', '自信心', '实用技巧'],
      featured: true,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'teen-period-myths',
      title: '青少年经期误区解析',
      summary: '破除青春期女孩常见的月经误区，提供科学准确的健康知识',
      readTime: '6分钟',
      difficulty: '基础',
      tags: ['误区澄清', '科学知识', '健康教育'],
      featured: true,
      lastUpdated: '2024-12-13'
    },
    {
      id: 'parent-teen-communication',
      title: '家长与青春期女儿的沟通技巧',
      summary: '指导家长如何与青春期女儿进行有效的经期健康沟通',
      readTime: '9分钟',
      difficulty: '实用',
      tags: ['亲子沟通', '家长指导', '青春期教育'],
      featured: false,
      lastUpdated: '2024-12-12'
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
              青少年健康
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">👩‍🎓</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            青少年经期健康专区
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            专为青春期女孩设计的经期健康指导，帮助她们自信地迎接成长
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">精选推荐</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  {Math.round(articles.reduce((sum, article) => sum + parseInt(article.readTime), 0) / articles.length)}
                </div>
                <div className="text-gray-600 text-sm">平均阅读时间(分钟)</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">青少年友好</div>
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
                <Link href={`/${locale}/articles/teen-health/${article.id}`}>
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
                          <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
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
              <Link key={article.id} href={`/${locale}/articles/teen-health/${article.id}`}>
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
                🔧 青少年专用工具
              </h2>
              <p className="text-gray-600">
                专为青春期女孩设计的健康管理工具
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
                    <p className="text-gray-600 text-sm">学会记录和预测月经周期</p>
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
                    <p className="text-gray-600 text-sm">了解痛经程度和应对方法</p>
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
                    <p className="text-gray-600 text-sm">记录身体变化和感受</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 青少年特别提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">💚</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                给青春期女孩的话
              </h3>
              <p className="text-gray-600 leading-relaxed">
                月经是女性成长的自然过程，没有什么可羞耻的。如果你有任何疑问或担忧，
                请勇敢地与信任的成年人（如父母、老师或医生）交流。记住，你并不孤单，
                每个女性都经历过这个阶段。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
