'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { Download, FileText, Calendar, ClipboardList, Heart, BookOpen } from 'lucide-react';

export default function ArticlesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 完整文章数据库
  const allArticles = [
    // 痛经管理分类
    {
      id: 'understanding-menstrual-pain',
      title: locale === 'zh' ? '认识痛经：原因与类型' : 'Understanding Menstrual Pain: Causes and Types',
      category: 'pain-management',
      description: locale === 'zh' ? '深入了解痛经的生理机制、常见原因和不同类型' : 'In-depth understanding of the physiological mechanisms, common causes and different types of menstrual pain',
      readTime: '8 分钟',
      difficulty: '基础',
      tags: ['痛经', '生理机制', '健康教育']
    },
    {
      id: 'pain-relief-methods',
      title: locale === 'zh' ? '痛经缓解方法大全' : 'Complete Guide to Menstrual Pain Relief',
      category: 'pain-management',
      description: locale === 'zh' ? '从药物治疗到自然疗法的全面痛经缓解策略' : 'Comprehensive menstrual pain relief strategies from medication to natural therapies',
      readTime: '12 分钟',
      difficulty: '中级',
      tags: ['痛经缓解', '治疗方法', '自然疗法']
    },
    {
      id: 'when-to-see-doctor',
      title: locale === 'zh' ? '何时需要就医：痛经的警示信号' : 'When to See a Doctor: Warning Signs of Menstrual Pain',
      category: 'pain-management',
      description: locale === 'zh' ? '识别需要医疗干预的痛经症状和紧急情况' : 'Identify menstrual pain symptoms and emergencies that require medical intervention',
      readTime: '6 分钟',
      difficulty: '基础',
      tags: ['就医指导', '警示信号', '健康安全']
    },
    {
      id: 'medication-guide',
      title: locale === 'zh' ? '痛经药物使用指南' : 'Menstrual Pain Medication Guide',
      category: 'pain-management',
      description: locale === 'zh' ? '常用痛经药物的正确使用方法和注意事项' : 'Proper use and precautions for common menstrual pain medications',
      readTime: '10 分钟',
      difficulty: '中级',
      tags: ['药物治疗', '用药安全', '医疗指导']
    },
    {
      id: 'heat-therapy-guide',
      title: locale === 'zh' ? '热敷疗法：温暖缓解痛经' : 'Heat Therapy: Warm Relief for Menstrual Pain',
      category: 'pain-management',
      description: locale === 'zh' ? '热敷的科学原理和正确使用方法' : 'Scientific principles and proper use of heat therapy',
      readTime: '7 分钟',
      difficulty: '基础',
      tags: ['热敷疗法', '物理治疗', '家庭护理']
    },
    {
      id: 'acupressure-techniques',
      title: locale === 'zh' ? '穴位按摩缓解痛经' : 'Acupressure Techniques for Menstrual Pain Relief',
      category: 'pain-management',
      description: locale === 'zh' ? '传统中医穴位按摩技巧和实用指导' : 'Traditional Chinese medicine acupressure techniques and practical guidance',
      readTime: '9 分钟',
      difficulty: '中级',
      tags: ['穴位按摩', '中医疗法', '自我护理']
    },

    // 月经周期分类
    {
      id: 'menstrual-cycle-basics',
      title: locale === 'zh' ? '月经周期基础知识' : 'Menstrual Cycle Basics',
      category: 'menstrual-cycle',
      description: locale === 'zh' ? '了解正常月经周期的各个阶段和激素变化' : 'Understanding the phases and hormonal changes of a normal menstrual cycle',
      readTime: '10 分钟',
      difficulty: '基础',
      tags: ['月经周期', '激素变化', '生理教育']
    },
    {
      id: 'cycle-irregularities',
      title: locale === 'zh' ? '月经不规律的原因与应对' : 'Causes and Management of Irregular Menstruation',
      category: 'menstrual-cycle',
      description: locale === 'zh' ? '分析月经不规律的常见原因和调理方法' : 'Analyze common causes of irregular menstruation and conditioning methods',
      readTime: '11 分钟',
      difficulty: '中级',
      tags: ['月经不调', '内分泌', '健康管理']
    },
    {
      id: 'tracking-your-cycle',
      title: locale === 'zh' ? '如何正确追踪月经周期' : 'How to Properly Track Your Menstrual Cycle',
      category: 'menstrual-cycle',
      description: locale === 'zh' ? '学会记录和分析月经周期的实用技巧' : 'Learn practical tips for recording and analyzing menstrual cycles',
      readTime: '8 分钟',
      difficulty: '基础',
      tags: ['周期追踪', '健康记录', '自我监测']
    },
    {
      id: 'hormonal-changes',
      title: locale === 'zh' ? '月经周期中的激素变化' : 'Hormonal Changes During the Menstrual Cycle',
      category: 'menstrual-cycle',
      description: locale === 'zh' ? '深入了解雌激素、孕激素等关键激素的作用' : 'In-depth understanding of the roles of key hormones like estrogen and progesterone',
      readTime: '12 分钟',
      difficulty: '高级',
      tags: ['激素科学', '内分泌系统', '生理机制']
    },
    {
      id: 'cycle-and-fertility',
      title: locale === 'zh' ? '月经周期与生育能力' : 'Menstrual Cycle and Fertility',
      category: 'menstrual-cycle',
      description: locale === 'zh' ? '了解月经周期如何影响生育能力和受孕时机' : 'Understanding how menstrual cycles affect fertility and conception timing',
      readTime: '9 分钟',
      difficulty: '中级',
      tags: ['生育健康', '排卵期', '受孕知识']
    },

    // 症状解读分类
    {
      id: 'pms-symptoms-guide',
      title: locale === 'zh' ? 'PMS症状完全指南' : 'Complete Guide to PMS Symptoms',
      category: 'symptom-guide',
      description: locale === 'zh' ? '识别和管理经前综合征的各种身体和情绪症状' : 'Identify and manage various physical and emotional symptoms of premenstrual syndrome',
      readTime: '13 分钟',
      difficulty: '中级',
      tags: ['PMS', '经前综合征', '症状管理']
    },
    {
      id: 'menstrual-flow-changes',
      title: locale === 'zh' ? '月经量变化的含义' : 'Understanding Changes in Menstrual Flow',
      category: 'symptom-guide',
      description: locale === 'zh' ? '分析月经量过多、过少的原因和应对方法' : 'Analyze causes and management of heavy or light menstrual flow',
      readTime: '9 分钟',
      difficulty: '基础',
      tags: ['月经量', '异常出血', '健康评估']
    },
    {
      id: 'menstrual-color-guide',
      title: locale === 'zh' ? '月经颜色变化解读' : 'Interpreting Menstrual Color Changes',
      category: 'symptom-guide',
      description: locale === 'zh' ? '不同月经颜色所反映的健康状况' : 'Health conditions reflected by different menstrual colors',
      readTime: '7 分钟',
      difficulty: '基础',
      tags: ['月经颜色', '健康指标', '症状识别']
    },
    {
      id: 'mood-changes-during-cycle',
      title: locale === 'zh' ? '月经周期中的情绪变化' : 'Mood Changes During the Menstrual Cycle',
      category: 'symptom-guide',
      description: locale === 'zh' ? '理解和应对经期情绪波动的科学方法' : 'Scientific methods to understand and cope with menstrual mood swings',
      readTime: '10 分钟',
      difficulty: '中级',
      tags: ['情绪管理', '心理健康', '激素影响']
    },
    {
      id: 'bloating-and-water-retention',
      title: locale === 'zh' ? '经期腹胀和水肿管理' : 'Managing Menstrual Bloating and Water Retention',
      category: 'symptom-guide',
      description: locale === 'zh' ? '缓解经期腹胀和水肿的有效策略' : 'Effective strategies to relieve menstrual bloating and water retention',
      readTime: '8 分钟',
      difficulty: '基础',
      tags: ['腹胀', '水肿', '症状缓解']
    },
    {
      id: 'breast-tenderness',
      title: locale === 'zh' ? '经期乳房胀痛的原因与缓解' : 'Causes and Relief of Menstrual Breast Tenderness',
      category: 'symptom-guide',
      description: locale === 'zh' ? '了解乳房胀痛的机制和有效的缓解方法' : 'Understanding the mechanism of breast tenderness and effective relief methods',
      readTime: '6 分钟',
      difficulty: '基础',
      tags: ['乳房胀痛', '激素影响', '症状缓解']
    },
    {
      id: 'fatigue-and-energy',
      title: locale === 'zh' ? '经期疲劳与能量管理' : 'Menstrual Fatigue and Energy Management',
      category: 'symptom-guide',
      description: locale === 'zh' ? '应对经期疲劳，保持精力充沛的实用建议' : 'Practical advice for dealing with menstrual fatigue and maintaining energy',
      readTime: '9 分钟',
      difficulty: '中级',
      tags: ['疲劳管理', '能量补充', '生活调节']
    },

    // 青少年健康分类
    {
      id: 'first-period-guide',
      title: locale === 'zh' ? '初潮指南：女孩的第一次月经' : 'First Period Guide: A Girl\'s First Menstruation',
      category: 'teen-health',
      description: locale === 'zh' ? '为青春期女孩和家长准备的初潮完全指南' : 'Complete guide to menarche for adolescent girls and parents',
      readTime: '15 分钟',
      difficulty: '基础',
      tags: ['初潮', '青春期', '健康教育']
    },
    {
      id: 'teen-period-problems',
      title: locale === 'zh' ? '青少年常见月经问题' : 'Common Menstrual Problems in Teenagers',
      category: 'teen-health',
      description: locale === 'zh' ? '识别和处理青春期常见的月经相关问题' : 'Identify and address common menstrual-related problems in adolescence',
      readTime: '11 分钟',
      difficulty: '中级',
      tags: ['青少年健康', '月经问题', '发育指导']
    },
    {
      id: 'school-period-management',
      title: locale === 'zh' ? '校园经期管理技巧' : 'School Period Management Tips',
      category: 'teen-health',
      description: locale === 'zh' ? '在学校环境中优雅处理月经的实用建议' : 'Practical advice for gracefully handling menstruation in school environment',
      readTime: '8 分钟',
      difficulty: '基础',
      tags: ['校园生活', '应急处理', '社交技巧']
    },
    {
      id: 'talking-to-parents',
      title: locale === 'zh' ? '与父母谈论月经话题' : 'Talking to Parents About Menstruation',
      category: 'teen-health',
      description: locale === 'zh' ? '帮助青少年与父母进行开放的月经健康对话' : 'Help teenagers have open conversations about menstrual health with parents',
      readTime: '7 分钟',
      difficulty: '基础',
      tags: ['亲子沟通', '健康对话', '家庭教育']
    },

    // 生活方式分类
    {
      id: 'nutrition-for-periods',
      title: locale === 'zh' ? '经期营养指南' : 'Nutrition Guide for Menstruation',
      category: 'lifestyle',
      description: locale === 'zh' ? '优化经期饮食，缓解不适症状的营养策略' : 'Nutritional strategies to optimize menstrual diet and relieve discomfort',
      readTime: '12 分钟',
      difficulty: '中级',
      tags: ['营养健康', '饮食调理', '症状缓解']
    },
    {
      id: 'exercise-during-periods',
      title: locale === 'zh' ? '经期运动指南' : 'Exercise Guide During Menstruation',
      category: 'lifestyle',
      description: locale === 'zh' ? '适合经期的运动类型和强度建议' : 'Recommended types and intensity of exercise suitable for menstruation',
      readTime: '10 分钟',
      difficulty: '基础',
      tags: ['运动健康', '体能管理', '生活方式']
    },
    {
      id: 'sleep-and-periods',
      title: locale === 'zh' ? '经期睡眠质量改善' : 'Improving Sleep Quality During Menstruation',
      category: 'lifestyle',
      description: locale === 'zh' ? '提高经期睡眠质量的科学方法和实用技巧' : 'Scientific methods and practical tips to improve sleep quality during menstruation',
      readTime: '9 分钟',
      difficulty: '基础',
      tags: ['睡眠健康', '生活质量', '恢复调理']
    },
    {
      id: 'stress-management',
      title: locale === 'zh' ? '经期压力管理' : 'Stress Management During Menstruation',
      category: 'lifestyle',
      description: locale === 'zh' ? '有效管理经期压力和情绪的心理健康策略' : 'Mental health strategies for effectively managing menstrual stress and emotions',
      readTime: '11 分钟',
      difficulty: '中级',
      tags: ['压力管理', '心理健康', '情绪调节']
    },
    {
      id: 'aromatherapy-for-periods',
      title: locale === 'zh' ? '经期芳香疗法' : 'Aromatherapy for Menstruation',
      category: 'lifestyle',
      description: locale === 'zh' ? '使用精油和芳香疗法缓解经期不适' : 'Using essential oils and aromatherapy to relieve menstrual discomfort',
      readTime: '8 分钟',
      difficulty: '基础',
      tags: ['芳香疗法', '精油护理', '自然疗法']
    },

    // 误区与事实分类
    {
      id: 'period-myths-debunked',
      title: locale === 'zh' ? '常见月经误区辟谣' : 'Debunking Common Menstrual Myths',
      category: 'myths-facts',
      description: locale === 'zh' ? '科学解释和纠正关于月经的常见误解' : 'Scientific explanations and corrections of common misconceptions about menstruation',
      readTime: '10 分钟',
      difficulty: '基础',
      tags: ['科学辟谣', '健康教育', '误区纠正']
    },
    {
      id: 'cultural-period-taboos',
      title: locale === 'zh' ? '打破月经文化禁忌' : 'Breaking Cultural Menstrual Taboos',
      category: 'myths-facts',
      description: locale === 'zh' ? '探讨和挑战不同文化中的月经禁忌和偏见' : 'Explore and challenge menstrual taboos and prejudices in different cultures',
      readTime: '13 分钟',
      difficulty: '高级',
      tags: ['文化观念', '社会议题', '女性权益']
    },
    {
      id: 'period-product-facts',
      title: locale === 'zh' ? '月经用品真相大揭秘' : 'The Truth About Menstrual Products',
      category: 'myths-facts',
      description: locale === 'zh' ? '客观分析各种月经用品的优缺点和安全性' : 'Objective analysis of the pros, cons and safety of various menstrual products',
      readTime: '11 分钟',
      difficulty: '中级',
      tags: ['月经用品', '产品安全', '消费指导']
    }
  ];

  // 文章分类数据
  const articleCategories = [
    {
      id: 'pain-management',
      title: locale === 'zh' ? '痛经管理' : 'Pain Management',
      description: locale === 'zh' ? '了解痛经的原因、类型和有效的缓解方法' : 'Understanding causes, types and effective relief methods for menstrual pain',
      icon: '🩺',
      color: 'from-red-500 to-pink-500',
      articleCount: allArticles.filter(article => article.category === 'pain-management').length,
      featured: true
    },
    {
      id: 'menstrual-cycle',
      title: locale === 'zh' ? '月经周期' : 'Menstrual Cycle',
      description: locale === 'zh' ? '深入了解月经周期的各个阶段和正常变化' : 'In-depth understanding of menstrual cycle phases and normal changes',
      icon: '📅',
      color: 'from-purple-500 to-indigo-500',
      articleCount: allArticles.filter(article => article.category === 'menstrual-cycle').length,
      featured: true
    },
    {
      id: 'symptom-guide',
      title: locale === 'zh' ? '症状解读' : 'Symptom Guide',
      description: locale === 'zh' ? '识别和理解各种经期相关症状的含义' : 'Identify and understand the meaning of various menstrual-related symptoms',
      icon: '📝',
      color: 'from-blue-500 to-cyan-500',
      articleCount: allArticles.filter(article => article.category === 'symptom-guide').length,
      featured: true
    },
    {
      id: 'teen-health',
      title: locale === 'zh' ? '青少年健康' : 'Teen Health',
      description: locale === 'zh' ? '专为青少年女性设计的经期健康指导' : 'Menstrual health guidance designed specifically for teenage girls',
      icon: '👩‍🎓',
      color: 'from-green-500 to-emerald-500',
      articleCount: allArticles.filter(article => article.category === 'teen-health').length,
      featured: false
    },
    {
      id: 'lifestyle',
      title: locale === 'zh' ? '生活方式' : 'Lifestyle',
      description: locale === 'zh' ? '饮食、运动和心理健康对经期的影响' : 'Impact of diet, exercise and mental health on menstruation',
      icon: '🌱',
      color: 'from-orange-500 to-yellow-500',
      articleCount: allArticles.filter(article => article.category === 'lifestyle').length,
      featured: false
    },
    {
      id: 'myths-facts',
      title: locale === 'zh' ? '误区与事实' : 'Myths & Facts',
      description: locale === 'zh' ? '破除常见的经期误区，了解科学事实' : 'Debunk common menstrual myths and understand scientific facts',
      icon: '💡',
      color: 'from-teal-500 to-blue-500',
      articleCount: allArticles.filter(article => article.category === 'myths-facts').length,
      featured: false
    }
  ];

  const featuredCategories = articleCategories.filter(cat => cat.featured);
  const otherCategories = articleCategories.filter(cat => !cat.featured);

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
            <span className="text-purple-600 font-medium">
              {t('common.articles')}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            {locale === 'zh' ? '健康文章中心' : 'Health Article Center'}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {locale === 'zh' ? '基于科学研究的专业指导，帮助您更好地了解和管理经期健康' : 'Professional guidance based on scientific research to help you better understand and manage menstrual health'}
          </p>
        </div>

        {/* 统计概览 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {articleCategories.reduce((sum, cat) => sum + cat.articleCount, 0)}
                </div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '专业文章' : 'Professional Articles'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">6</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '主要分类' : 'Main Categories'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '交互工具' : 'Interactive Tools'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '科学依据' : 'Scientific Evidence'}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 精选分类 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            🌟 {locale === 'zh' ? '精选分类' : 'Featured Categories'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div key={category.id} className="group">
                <Link href={`/${locale}/articles/${category.id}`}>
                  <div className="glass-effect rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    
                    {/* 图标和标题 */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{category.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* 文章数量 */}
                    <div className="text-center">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium`}>
                        <span className="mr-2">📚</span>
                        {category.articleCount} {locale === 'zh' ? '篇文章' : 'Articles'}
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 全部文章列表 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            📚 {locale === 'zh' ? '全部文章' : 'All Articles'}
          </h2>

          {articleCategories.map((category) => {
            const categoryArticles = allArticles.filter(article => article.category === category.id);

            return (
              <div key={category.id} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-white text-lg">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{categoryArticles.length} {locale === 'zh' ? '篇文章' : 'articles'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.map((article) => (
                    <Link key={article.id} href={`/${locale}/articles/${category.id}/${article.id}`}>
                      <div className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">

                        {/* 文章标题 */}
                        <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                          {article.title}
                        </h4>

                        {/* 文章描述 */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {article.description}
                        </p>

                        {/* 文章元信息 */}
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span className="flex items-center">
                            <span className="mr-1">⏱️</span>
                            {article.readTime}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-1">📊</span>
                            {article.difficulty}
                          </span>
                        </div>

                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className={`px-2 py-1 bg-gradient-to-r ${category.color} bg-opacity-10 text-xs rounded-full`}>
                              {tag}
                            </span>
                          ))}
                          {article.tags.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{article.tags.length - 2}
                            </span>
                          )}
                        </div>

                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* 其他分类 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            📖 {locale === 'zh' ? '更多分类' : 'More Categories'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCategories.map((category) => (
              <div key={category.id} className="group">
                <Link href={category.id === 'lifestyle' ? `/${locale}/articles/lifestyle` : `/${locale}/articles/${category.id}`}>
                  <div className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-lg">{category.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.articleCount} {locale === 'zh' ? '篇文章' : 'articles'}
                        </p>
                      </div>
                      
                      <div className="text-gray-400 group-hover:text-purple-600 transition-colors">
                        →
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 工具推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                🔧 {locale === 'zh' ? '配套工具推荐' : 'Recommended Tools'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ? '结合我们的交互工具，获得更全面的健康管理体验' : 'Combine with our interactive tools for a more comprehensive health management experience'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {locale === 'zh' ? '痛经评估工具' : 'Pain Assessment Tool'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '评估痛经严重程度' : 'Assess menstrual pain severity'}
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {locale === 'zh' ? '周期追踪器' : 'Cycle Tracker'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '智能预测月经周期' : 'Smart menstrual cycle prediction'}
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/symptom-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {locale === 'zh' ? '症状记录器' : 'Symptom Tracker'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '跟踪症状变化' : 'Track symptom changes'}
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* PDF资源下载区域 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                📄 专业资源下载
              </h2>
              <p className="text-gray-600 leading-relaxed">
                下载专业的经期健康管理工具和指南，支持离线使用
              </p>
            </div>

            {/* 第一板块：管理工具类 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🔧</span>
                </span>
                管理工具类
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 疼痛追踪表 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ClipboardList className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">疼痛追踪表</h4>
                    <p className="text-xs text-gray-600">记录疼痛程度和模式</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    专业的疼痛评估和追踪工具，帮助您记录痛经的强度、持续时间和触发因素。
                  </p>
                  <DownloadButton filename="pain-tracking-form.pdf" className="w-full" />
                </div>

                {/* 症状记录表 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">症状记录表</h4>
                    <p className="text-xs text-gray-600">全面症状跟踪</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    详细记录经期前后的各种身体和情绪症状，帮助识别个人模式。
                  </p>
                  <DownloadButton filename="symptom-tracking-sheet.pdf" className="w-full" />
                </div>

                {/* 周期日历 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">周期日历</h4>
                    <p className="text-xs text-gray-600">月经周期规划</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    可打印的月经周期日历，帮助您预测和规划重要活动。
                  </p>
                  <DownloadButton filename="cycle-calendar.pdf" className="w-full" />
                </div>

                {/* 药物记录表 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">药物记录表</h4>
                    <p className="text-xs text-gray-600">用药管理工具</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    记录痛经药物使用情况，包括药名、剂量、效果和副作用。
                  </p>
                  <DownloadButton filename="medication-log.pdf" className="w-full" />
                </div>

              </div>
            </div>

            {/* 第二板块：健康管理类 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🌱</span>
                </span>
                健康管理类
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 月经周期营养计划 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">月经周期营养计划</h4>
                    <p className="text-xs text-gray-600">个性化饮食指导</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    根据月经周期不同阶段的营养需求，制定科学的饮食计划和营养补充建议。
                  </p>
                  <DownloadButton filename="menstrual-cycle-nutrition-plan.pdf" className="w-full" />
                </div>

                {/* 运动指导手册 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">运动指导手册</h4>
                    <p className="text-xs text-gray-600">经期运动方案</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    适合经期的运动类型和强度指导，帮助缓解不适症状。
                  </p>
                  <DownloadButton filename="exercise-guide.pdf" className="w-full" />
                </div>

                {/* 自然疗法评估表 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">自然疗法评估表</h4>
                    <p className="text-xs text-gray-600">天然治疗方案评估</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    评估您适合的自然疗法类型，包括草药、按摩、瑜伽等非药物治疗方案。
                  </p>
                  <DownloadButton filename="natural-therapy-assessment.pdf" className="w-full" />
                </div>

                {/* 健康习惯清单 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ClipboardList className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">健康习惯清单</h4>
                    <p className="text-xs text-gray-600">日常健康管理</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    建立良好的经期健康习惯，包括运动、饮食、睡眠和心理健康管理。
                  </p>
                  <DownloadButton filename="healthy-habits-checklist.pdf" className="w-full" />
                </div>

              </div>
            </div>

            {/* 第三板块：沟通指导类 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💬</span>
                </span>
                沟通指导类
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 家长沟通指南 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">家长沟通指南</h4>
                    <p className="text-xs text-gray-600">亲子沟通技巧</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    帮助家长与青春期女孩进行有效的经期健康沟通，建立信任和理解。
                  </p>
                  <DownloadButton filename="parent-communication-guide.pdf" className="w-full" />
                </div>

                {/* 校园应急清单 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">校园应急清单</h4>
                    <p className="text-xs text-gray-600">学生专用应急指南</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    为学生准备的校园经期应急处理清单，包括必备用品和应对策略。
                  </p>
                  <DownloadButton filename="campus-emergency-checklist.pdf" className="w-full" />
                </div>

                {/* 医生咨询准备表 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">医生咨询准备表</h4>
                    <p className="text-xs text-gray-600">就医准备工具</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    帮助您准备就医时需要提供的信息，提高医疗咨询效率。
                  </p>
                  <DownloadButton filename="doctor-consultation-prep.pdf" className="w-full" />
                </div>

                {/* 伴侣教育手册 */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">伴侣教育手册</h4>
                    <p className="text-xs text-gray-600">伴侣理解指南</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    帮助伴侣了解经期健康知识，提供更好的理解和支持。
                  </p>
                  <DownloadButton filename="partner-education-guide.pdf" className="w-full" />
                </div>

              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>💡 提示：</strong>所有资源均提供中英文双语版本，点击下载按钮将根据当前语言自动选择对应版本。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 重要提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">ℹ️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                医疗免责声明
              </h3>
              <p className="text-gray-600 leading-relaxed">
                本网站提供的所有健康信息仅供教育和参考目的，不能替代专业医疗诊断、治疗或建议。如果您有健康问题或疑虑，请咨询合格的医疗专业人员。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
