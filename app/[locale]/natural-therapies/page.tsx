'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NaturalTherapiesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 自然疗法分类
  const therapyCategories = [
    {
      id: 'herbal-medicine',
      title: locale === 'zh' ? '中草药调理' : 'Herbal Medicine',
      description: locale === 'zh' ? '传统中医草药配方，温和调理体质' : 'Traditional Chinese herbal formulas for gentle constitution regulation',
      icon: '🌿',
      color: 'from-green-500 to-emerald-500',
      methods: locale === 'zh' ? ['当归调经汤', '四物汤', '逍遥散', '益母草茶'] : ['Angelica Menstrual Soup', 'Four Substances Decoction', 'Free and Easy Wanderer', 'Motherwort Tea'],
      benefits: locale === 'zh' ? ['调节内分泌', '缓解痛经', '改善气血', '平衡情绪'] : ['Regulate endocrine', 'Relieve menstrual pain', 'Improve qi and blood', 'Balance emotions'],
      articleLink: `/${locale}/articles/menstrual-cycle/hormonal-changes`
    },
    {
      id: 'acupuncture',
      title: locale === 'zh' ? '针灸按摩' : 'Acupuncture & Massage',
      description: locale === 'zh' ? '传统针灸和穴位按摩疗法' : 'Traditional acupuncture and acupoint massage therapy',
      icon: '🎯',
      color: 'from-blue-500 to-indigo-500',
      methods: locale === 'zh' ? ['三阴交穴', '关元穴', '血海穴', '太冲穴'] : ['Sanyinjiao Point', 'Guanyuan Point', 'Xuehai Point', 'Taichong Point'],
      benefits: locale === 'zh' ? ['疏通经络', '调理气血', '缓解疼痛', '改善循环'] : ['Unblock meridians', 'Regulate qi and blood', 'Relieve pain', 'Improve circulation'],
      articleLink: `/${locale}/articles/pain-management/acupressure-techniques`
    },
    {
      id: 'nutrition-therapy',
      title: locale === 'zh' ? '营养食疗' : 'Nutritional Therapy',
      description: locale === 'zh' ? '科学营养搭配，食物调理身体' : 'Scientific nutrition matching, food therapy for body regulation',
      icon: '🥗',
      color: 'from-orange-500 to-red-500',
      methods: locale === 'zh' ? ['红糖姜茶', '黑豆汤', '桂圆红枣茶', '山药粥'] : ['Brown Sugar Ginger Tea', 'Black Bean Soup', 'Longan Red Date Tea', 'Yam Porridge'],
      benefits: locale === 'zh' ? ['补充营养', '温暖子宫', '增强体质', '改善贫血'] : ['Supplement nutrition', 'Warm uterus', 'Strengthen constitution', 'Improve anemia'],
      articleLink: `/${locale}/articles/lifestyle/nutrition-for-periods`
    },
    {
      id: 'exercise-therapy',
      title: locale === 'zh' ? '运动疗法' : 'Exercise Therapy',
      description: locale === 'zh' ? '适合经期的温和运动方式' : 'Gentle exercise methods suitable for menstrual period',
      icon: '🧘‍♀️',
      color: 'from-purple-500 to-pink-500',
      methods: locale === 'zh' ? ['瑜伽', '太极', '散步', '拉伸'] : ['Yoga', 'Tai Chi', 'Walking', 'Stretching'],
      benefits: locale === 'zh' ? ['促进血液循环', '缓解压力', '增强体质', '改善睡眠'] : ['Promote blood circulation', 'Relieve stress', 'Strengthen constitution', 'Improve sleep'],
      articleLink: `/${locale}/articles/lifestyle/exercise-during-periods`
    },
    {
      id: 'aromatherapy',
      title: locale === 'zh' ? '芳香疗法' : 'Aromatherapy',
      description: locale === 'zh' ? '天然精油的治疗功效' : 'Therapeutic effects of natural essential oils',
      icon: '🌸',
      color: 'from-pink-500 to-rose-500',
      methods: locale === 'zh' ? ['薰衣草精油', '玫瑰精油', '洋甘菊精油', '茶树精油'] : ['Lavender Oil', 'Rose Oil', 'Chamomile Oil', 'Tea Tree Oil'],
      benefits: locale === 'zh' ? ['放松身心', '缓解疼痛', '改善情绪', '促进睡眠'] : ['Relax body and mind', 'Relieve pain', 'Improve mood', 'Promote sleep'],
      articleLink: `/${locale}/articles/lifestyle/aromatherapy-for-periods`
    },
    {
      id: 'heat-therapy',
      title: locale === 'zh' ? '热敷疗法' : 'Heat Therapy',
      description: locale === 'zh' ? '温热疗法缓解经期不适' : 'Thermal therapy to relieve menstrual discomfort',
      icon: '🔥',
      color: 'from-red-500 to-orange-500',
      methods: locale === 'zh' ? ['热水袋', '暖宫贴', '热水浴', '艾灸'] : ['Hot Water Bottle', 'Warming Patches', 'Hot Bath', 'Moxibustion'],
      benefits: locale === 'zh' ? ['缓解痉挛', '促进血流', '放松肌肉', '减轻疼痛'] : ['Relieve spasms', 'Promote blood flow', 'Relax muscles', 'Reduce pain'],
      articleLink: `/${locale}/articles/pain-management/heat-therapy-guide`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🌱</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '平时调理 · 自然疗法' : 'Daily Care · Natural Therapies'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '采用天然、温和的调理方法，从根本上改善体质，减少经期不适' : 'Use natural, gentle conditioning methods to fundamentally improve constitution and reduce menstrual discomfort'}
          </p>
        </div>

        {/* 调理理念 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎯 {locale === 'zh' ? '调理核心理念' : 'Core Conditioning Principles'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '平衡调理' : 'Balanced Conditioning'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '调节内分泌平衡，从根源改善经期问题' : 'Regulate endocrine balance, improve menstrual problems from the root'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🕐</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '长期坚持' : 'Long-term Persistence'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '持续调理3-6个月，建立健康的生理周期' : 'Continue conditioning for 3-6 months to establish healthy menstrual cycles'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {locale === 'zh' ? '个性化方案' : 'Personalized Plans'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'zh' ? '根据个人体质制定专属的调理计划' : 'Develop exclusive conditioning plans based on individual constitution'}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 自然疗法分类 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            🌿 {locale === 'zh' ? '自然疗法大全' : 'Complete Natural Therapies'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyCategories.map((category) => (
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

                {/* 具体方法 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {locale === 'zh' ? '常用方法：' : 'Common Methods:'}
                  </h4>
                  <div className="space-y-2">
                    {category.methods.map((method, index) => (
                      <div key={index} className="bg-white rounded-lg p-2 text-center border border-gray-100">
                        <span className="text-xs text-gray-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 主要功效 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {locale === 'zh' ? '主要功效：' : 'Main Benefits:'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 了解更多按钮 */}
                <div className="text-center">
                  <Link href={category.articleLink}>
                    <button className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300`}>
                      <span className="mr-2">
                        {locale === 'zh' ? '了解详情' : 'Learn More'}
                      </span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 调理时间表 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📅 {locale === 'zh' ? '月经周期调理时间表' : 'Menstrual Cycle Conditioning Schedule'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* 月经期 */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4 text-center">
                  🩸 {locale === 'zh' ? '月经期 (1-5天)' : 'Menstrual Phase (Days 1-5)'}
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• {locale === 'zh' ? '温热食物为主' : 'Focus on warm foods'}</li>
                  <li>• {locale === 'zh' ? '避免生冷食品' : 'Avoid cold foods'}</li>
                  <li>• {locale === 'zh' ? '适量红糖姜茶' : 'Moderate brown sugar ginger tea'}</li>
                  <li>• {locale === 'zh' ? '温和拉伸运动' : 'Gentle stretching exercises'}</li>
                  <li>• {locale === 'zh' ? '充足休息睡眠' : 'Adequate rest and sleep'}</li>
                </ul>
              </div>

              {/* 卵泡期 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4 text-center">
                  🌱 {locale === 'zh' ? '卵泡期 (6-13天)' : 'Follicular Phase (Days 6-13)'}
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• {locale === 'zh' ? '补充优质蛋白' : 'Supplement quality protein'}</li>
                  <li>• {locale === 'zh' ? '增加运动强度' : 'Increase exercise intensity'}</li>
                  <li>• {locale === 'zh' ? '多吃新鲜蔬果' : 'Eat more fresh fruits and vegetables'}</li>
                  <li>• {locale === 'zh' ? '适量有氧运动' : 'Moderate aerobic exercise'}</li>
                  <li>• {locale === 'zh' ? '保持心情愉悦' : 'Maintain a happy mood'}</li>
                </ul>
              </div>

              {/* 排卵期 */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-4 text-center">
                  🥚 {locale === 'zh' ? '排卵期 (14天左右)' : 'Ovulation Phase (Around Day 14)'}
                </h3>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• {locale === 'zh' ? '注意腹部保暖' : 'Keep abdomen warm'}</li>
                  <li>• {locale === 'zh' ? '避免剧烈运动' : 'Avoid intense exercise'}</li>
                  <li>• {locale === 'zh' ? '补充维生素E' : 'Supplement vitamin E'}</li>
                  <li>• {locale === 'zh' ? '适量坚果类食物' : 'Moderate nuts and seeds'}</li>
                  <li>• {locale === 'zh' ? '观察身体变化' : 'Observe body changes'}</li>
                </ul>
              </div>

              {/* 黄体期 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-4 text-center">
                  🌙 {locale === 'zh' ? '黄体期 (15-28天)' : 'Luteal Phase (Days 15-28)'}
                </h3>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• {locale === 'zh' ? '控制盐分摄入' : 'Control salt intake'}</li>
                  <li>• {locale === 'zh' ? '增加镁的补充' : 'Increase magnesium supplementation'}</li>
                  <li>• {locale === 'zh' ? '适量瑜伽冥想' : 'Moderate yoga and meditation'}</li>
                  <li>• {locale === 'zh' ? '避免咖啡因' : 'Avoid caffeine'}</li>
                  <li>• {locale === 'zh' ? '准备下次月经' : 'Prepare for next menstruation'}</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 体质测试推荐 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔍 {locale === 'zh' ? '个性化体质评估' : 'Personalized Constitution Assessment'}
              </h2>
              <p className="text-gray-600">
                {locale === 'zh' ? '了解自己的体质类型，制定最适合的调理方案' : 'Understand your constitution type and develop the most suitable conditioning plan'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🔥</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {locale === 'zh' ? '热性体质' : 'Hot Constitution'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {locale === 'zh' ? '容易上火，经血量多，颜色鲜红' : 'Easy to get inflamed, heavy menstrual flow, bright red color'}
                  </p>
                  <div className="text-xs text-gray-500">
                    {locale === 'zh' ? '推荐：清热凉血类调理' : 'Recommended: Heat-clearing and blood-cooling therapy'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">❄️</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {locale === 'zh' ? '寒性体质' : 'Cold Constitution'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {locale === 'zh' ? '手脚冰凉，经血量少，颜色暗淡' : 'Cold hands and feet, light menstrual flow, dark color'}
                  </p>
                  <div className="text-xs text-gray-500">
                    {locale === 'zh' ? '推荐：温阳散寒类调理' : 'Recommended: Yang-warming and cold-dispersing therapy'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">⚖️</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {locale === 'zh' ? '平和体质' : 'Balanced Constitution'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {locale === 'zh' ? '身体平衡，经期规律正常' : 'Body balanced, regular normal menstruation'}
                  </p>
                  <div className="text-xs text-gray-500">
                    {locale === 'zh' ? '推荐：维持平衡类调理' : 'Recommended: Balance-maintaining therapy'}
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-6">
              <Link href={`/${locale}/interactive-tools/constitution-test`}>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  <span className="mr-2">🧪</span>
                  {locale === 'zh' ? '开始体质测试' : 'Start Constitution Test'}
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 注意事项 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⚠️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '调理注意事项' : 'Conditioning Precautions'}
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>• <strong>{locale === 'zh' ? '循序渐进' : 'Gradual Progress'}</strong>：{locale === 'zh' ? '自然调理需要时间，请耐心坚持3-6个月' : 'Natural conditioning takes time, please persist patiently for 3-6 months'}</p>
                <p>• <strong>{locale === 'zh' ? '个体差异' : 'Individual Differences'}</strong>：{locale === 'zh' ? '每个人体质不同，效果因人而异' : 'Everyone has different constitution, effects vary from person to person'}</p>
                <p>• <strong>{locale === 'zh' ? '专业指导' : 'Professional Guidance'}</strong>：{locale === 'zh' ? '严重症状请咨询中医师或妇科医生' : 'For severe symptoms, please consult TCM practitioners or gynecologists'}</p>
                <p>• <strong>{locale === 'zh' ? '生活配合' : 'Lifestyle Coordination'}</strong>：{locale === 'zh' ? '调理期间保持规律作息和良好心态' : 'Maintain regular schedule and good mindset during conditioning'}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
