'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SymptomGuidePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 症状解读文章列表
  const articles = [
    {
      id: 'pms-symptoms-guide',
      title: 'PMS症状全解析：识别与应对',
      summary: '全面了解经前综合征的各种症状，学会识别和有效应对',
      readTime: '11分钟',
      difficulty: '基础',
      tags: ['PMS', '经前综合征', '症状识别', '应对策略'],
      featured: true,
      lastUpdated: '2024-12-15'
    },
    {
      id: 'menstrual-flow-changes',
      title: '经血变化的含义：颜色、质地与健康',
      summary: '解读经血颜色和质地的变化，了解背后的健康信息',
      readTime: '8分钟',
      difficulty: '基础',
      tags: ['经血变化', '健康指标', '颜色解读'],
      featured: true,
      lastUpdated: '2024-12-14'
    },
    {
      id: 'emotional-symptoms',
      title: '经期情绪波动：原因与调节方法',
      summary: '理解经期情绪变化的生理原因，掌握有效的情绪调节技巧',
      readTime: '9分钟',
      difficulty: '实用',
      tags: ['情绪管理', '心理健康', '激素影响'],
      featured: true,
      lastUpdated: '2024-12-13'
    },
    {
      id: 'physical-symptoms',
      title: '经期身体症状详解',
      summary: '详细解析经期常见的身体症状及其处理方法',
      readTime: '10分钟',
      difficulty: '实用',
      tags: ['身体症状', '疼痛管理', '不适缓解'],
      featured: false,
      lastUpdated: '2024-12-12'
    },
    {
      id: 'warning-signs',
      title: '需要就医的警示信号',
      summary: '识别需要医疗关注的异常症状和警示信号',
      readTime: '7分钟',
      difficulty: '重要',
      tags: ['警示信号', '医疗建议', '异常症状'],
      featured: false,
      lastUpdated: '2024-12-11'
    },
    {
      id: 'symptom-tracking',
      title: '症状记录的重要性与方法',
      summary: '学会科学记录症状，为健康管理提供有价值的数据',
      readTime: '6分钟',
      difficulty: '实用',
      tags: ['症状记录', '健康管理', '数据分析'],
      featured: false,
      lastUpdated: '2024-12-10'
    },
    {
      id: 'age-related-changes',
      title: '不同年龄段的症状变化',
      summary: '了解从青春期到更年期症状的自然变化规律',
      readTime: '12分钟',
      difficulty: '进阶',
      tags: ['年龄变化', '生命周期', '症状演变'],
      featured: false,
      lastUpdated: '2024-12-09'
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
              症状解读
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📝</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            症状解读指南
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            识别和理解各种经期相关症状的含义，掌握科学的应对方法
          </p>
        </div>

        {/* 分类统计 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{articles.length}</div>
                <div className="text-gray-600 text-sm">专业文章</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">精选推荐</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">
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

        {/* 症状分类概览 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎯 症状分类概览
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 身体症状 */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                  <span className="mr-2">🩺</span>
                  身体症状
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• 腹痛和痉挛</li>
                  <li>• 腰痛和背痛</li>
                  <li>• 头痛和偏头痛</li>
                  <li>• 乳房胀痛</li>
                  <li>• 腹胀和水肿</li>
                  <li>• 疲劳和乏力</li>
                </ul>
              </div>

              {/* 情绪症状 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                  <span className="mr-2">💭</span>
                  情绪症状
                </h3>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• 情绪波动</li>
                  <li>• 易怒和烦躁</li>
                  <li>• 焦虑和紧张</li>
                  <li>• 抑郁情绪</li>
                  <li>• 注意力不集中</li>
                  <li>• 睡眠问题</li>
                </ul>
              </div>

              {/* 行为症状 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <span className="mr-2">🏃‍♀️</span>
                  行为症状
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• 食欲变化</li>
                  <li>• 食物渴望</li>
                  <li>• 社交回避</li>
                  <li>• 活动减少</li>
                  <li>• 工作效率下降</li>
                  <li>• 性欲变化</li>
                </ul>
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
                <Link href={`/${locale}/articles/symptom-guide/${article.id}`}>
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
                          <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
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
              <Link key={article.id} href={`/${locale}/articles/symptom-guide/${article.id}`}>
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
                🔧 症状管理工具
              </h2>
              <p className="text-gray-600">
                专业工具帮助您记录、分析和管理各种症状
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">智能症状记录</h3>
                    <p className="text-gray-600 text-sm">详细记录和分析症状变化</p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">痛经评估工具</h3>
                    <p className="text-gray-600 text-sm">专业评估疼痛症状</p>
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
                    <p className="text-gray-600 text-sm">关联症状与周期阶段</p>
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
