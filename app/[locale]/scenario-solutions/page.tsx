'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Briefcase, Car, Dumbbell, Bed, Users, Heart, GraduationCap, ArrowRight, Sparkles, Shield } from 'lucide-react';

export default function ScenarioSolutionsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 场景解决方案数据 - 按原项目结构
  const scenarios = [
    {
      id: 'office',
      title: locale === 'zh' ? '办公/职场场景' : 'Office/Workplace Scenarios',
      description: locale === 'zh' ? '专业环境下的隐蔽缓解方案' : 'Discreet relief solutions in professional environments',
      features: locale === 'zh' ? ['会议应急包', '办公椅拉伸', '职场饮食管理'] : ['Meeting emergency kit', 'Office chair stretches', 'Workplace nutrition management'],
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'commute',
      title: locale === 'zh' ? '通勤场景' : 'Commute Scenarios',
      description: locale === 'zh' ? '路上突发疼痛的应对策略' : 'Strategies for sudden pain during commute',
      features: locale === 'zh' ? ['公共交通应对', '自驾调整', '应急处理方案'] : ['Public transport coping', 'Driving adjustments', 'Emergency response plans'],
      icon: <Car className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      hoverColor: 'hover:bg-green-100'
    },
    {
      id: 'exercise',
      title: locale === 'zh' ? '运动/户外场景' : 'Exercise/Outdoor Scenarios',
      description: locale === 'zh' ? '运动中的安全防护指南' : 'Safety protection guide during exercise',
      features: locale === 'zh' ? ['经期徒步指南', '泳池卫生管理', '瑜伽体式库'] : ['Menstrual hiking guide', 'Pool hygiene management', 'Yoga pose library'],
      icon: <Dumbbell className="w-8 h-8" />,
      color: 'bg-orange-50 text-orange-600',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      id: 'sleep',
      title: locale === 'zh' ? '睡眠场景' : 'Sleep Scenarios',
      description: locale === 'zh' ? '夜间疼痛的舒缓方案' : 'Soothing solutions for nighttime pain',
      features: locale === 'zh' ? ['助眠音频', '科学睡姿', '睡前饮食建议'] : ['Sleep audio', 'Scientific sleep positions', 'Pre-sleep dietary advice'],
      icon: <Bed className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      id: 'social',
      title: locale === 'zh' ? '社交场景' : 'Social Scenarios',
      description: locale === 'zh' ? '聚会活动中的优雅应对' : 'Graceful coping during social gatherings',
      features: locale === 'zh' ? ['聚会准备', '社交礼仪', '应急预案'] : ['Party preparation', 'Social etiquette', 'Emergency plans'],
      icon: <Users className="w-8 h-8" />,
      color: 'bg-pink-50 text-pink-600',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      id: 'dating',
      title: locale === 'zh' ? '约会场景' : 'Dating Scenarios',
      description: locale === 'zh' ? '约会时的自信管理策略' : 'Confident management strategies during dates',
      features: locale === 'zh' ? ['约会准备', '心理建设', '应急处理'] : ['Date preparation', 'Mental preparation', 'Emergency handling'],
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600',
      hoverColor: 'hover:bg-red-100'
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🎯</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '场景解决方案' : 'Scenario Solutions'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '针对不同生活场景的个性化经期健康管理方案，让您在任何情况下都能从容应对' : 'Personalized menstrual health management solutions for different life scenarios, helping you cope confidently in any situation'}
          </p>
        </div>

        {/* 统计概览 */}
        <div className="mb-12">
          <div className="glass-effect rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{scenarios.length}</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '场景方案' : 'Scenario Solutions'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 mb-2">24</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '解决策略' : 'Solution Strategies'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '实用性' : 'Practicality'}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {locale === 'zh' ? '全龄段' : 'All Ages'}
                </div>
                <div className="text-gray-600 text-sm">
                  {locale === 'zh' ? '适用人群' : 'Target Audience'}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 🌸 青少年经期健康专区 🌸 */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 text-white">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🌸 {locale === 'zh' ? '青少年经期健康专区' : 'Teen Menstrual Health Zone'} 🌸
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  {locale === 'zh' ?
                    '专为青春期女孩设计的温暖指导空间，从初潮到成长的每一步，我们都陪伴在您身边' :
                    'A warm guidance space designed specifically for adolescent girls, from menarche to every step of growth, we are by your side'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* 进入专区按钮 */}
                <Link href={`/${locale}/scenario-solutions/teen`}>
                  <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {locale === 'zh' ? '进入青少年专区' : 'Enter Teen Zone'}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {locale === 'zh' ?
                        '初潮指导、校园应对、家长沟通，全方位的青春期健康支持' :
                        'Menarche guidance, school coping, parent communication, comprehensive adolescent health support'
                      }
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '初潮准备' : 'Menarche Prep'}
                      </span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '校园指南' : 'School Guide'}
                      </span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '心理支持' : 'Mental Support'}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* 校园应急指南按钮 */}
                <Link href={`/${locale}/scenario-solutions/teen#school-emergency`}>
                  <div className="group bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {locale === 'zh' ? '校园应急指南' : 'School Emergency Guide'}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {locale === 'zh' ?
                        '课堂突发、体育课应对、应急包准备，让校园生活更从容' :
                        'Classroom emergencies, PE class coping, emergency kit preparation for confident school life'
                      }
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '应急处理' : 'Emergency Handling'}
                      </span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '体育课' : 'PE Class'}
                      </span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                        {locale === 'zh' ? '用品准备' : 'Supply Prep'}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* 底部装饰文字 */}
              <div className="text-center mt-8">
                <p className="text-white/70 text-sm">
                  {locale === 'zh' ?
                    '✨ 每个女孩都值得被温柔对待，每个成长阶段都值得被用心呵护 ✨' :
                    '✨ Every girl deserves to be treated gently, every growth stage deserves to be cared for ✨'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 场景方案网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="group">
              <Link href={`/${locale}/scenario-solutions/${scenario.id}`}>
                <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${scenario.hoverColor} transition-all duration-300 transform hover:scale-105 cursor-pointer`}>

                  {/* 图标和标题 */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${scenario.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {scenario.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {scenario.description}
                    </p>
                  </div>

                  {/* 功能特点 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                      {locale === 'zh' ? '核心功能：' : 'Key Features:'}
                    </h4>
                    <div className="space-y-2">
                      {scenario.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 查看详情按钮 */}
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium group-hover:shadow-lg transition-all duration-300">
                      <span className="mr-2">{locale === 'zh' ? '查看方案' : 'View Solution'}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 使用指南 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📖 {locale === 'zh' ? '如何使用场景解决方案' : 'How to Use Scenario Solutions'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '选择场景' : 'Choose Scenario'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '根据您当前的生活状况选择对应的场景方案' : 'Choose the corresponding scenario solution based on your current life situation'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '学习策略' : 'Learn Strategies'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '详细了解该场景下的具体管理策略和技巧' : 'Learn specific management strategies and techniques for that scenario'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '实践应用' : 'Practice Application'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '将学到的方法应用到实际生活中' : 'Apply learned methods to real life'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">4</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '持续优化' : 'Continuous Optimization'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '根据效果调整策略，形成个人最佳方案' : 'Adjust strategies based on results to form your personal best solution'}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 相关工具推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔧 {locale === 'zh' ? '配套工具推荐' : 'Recommended Tools'}
              </h2>
              <p className="text-gray-600">
                {locale === 'zh' ? '结合我们的专业工具，让场景解决方案更加有效' : 'Combine with our professional tools to make scenario solutions more effective'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href={`/${locale}/interactive-tools/cycle-tracker`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {locale === 'zh' ? '周期追踪器' : 'Cycle Tracker'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '预测周期，提前准备' : 'Predict cycles, prepare in advance'}
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
                    <h3 className="font-bold text-gray-800 mb-1">
                      {locale === 'zh' ? '症状记录器' : 'Symptom Tracker'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '记录场景下的症状变化' : 'Record symptom changes in scenarios'}
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={`/${locale}/interactive-tools/period-pain-assessment`}>
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {locale === 'zh' ? '痛经评估' : 'Pain Assessment'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {locale === 'zh' ? '评估特定场景下的疼痛' : 'Assess pain in specific scenarios'}
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 专家建议 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">💡</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '专家提醒' : 'Expert Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '每个人的身体状况和生活环境都不同，场景解决方案提供的是通用性指导。请根据自己的实际情况进行调整，如有严重不适或疑虑，建议咨询专业医生。记住，最好的方案是最适合您个人情况的方案。' :
                  'Everyone\'s physical condition and living environment are different. Scenario solutions provide general guidance. Please adjust according to your actual situation. If you have severe discomfort or concerns, it is recommended to consult a professional doctor. Remember, the best solution is the one that best suits your personal situation.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
