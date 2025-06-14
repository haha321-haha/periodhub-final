import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/i18n';

// Generate metadata for the page
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const title = locale === 'zh' ? t('healthGuide.生活方式管理痛经') : 'Lifestyle Management - Health Guide';
  const description = locale === 'zh' 
    ? t('healthGuide.通过饮食运动和日常习')
    : 'Improve menstrual health through diet, exercise, and daily habits, establishing long-term effective menstrual pain management strategies.';
  
  return {
    title,
    description,
  };
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LifestylePage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-neutral-600">
        <Link href={`/${locale}`} className="hover:text-primary-600">
          {locale === 'zh' ? t('navigation.home') : 'Home'}
        </Link>
        <span className="mx-2">›</span>
        <Link href={`/${locale}/health-guide`} className="hover:text-primary-600">
          {locale === 'zh' ? t('pages.healthGuide.title') : 'Health Guide'}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-neutral-800">
          {locale === 'zh' ? t('healthGuide.生活方式管理') : 'Lifestyle Management'}
        </span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {locale === 'zh' ? t('healthGuide.生活方式管理') : 'Lifestyle Management'}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {locale === 'zh'
            ? t('healthGuide.通过科学的饮食运动和')
            : 'Improve menstrual health through scientific diet, exercise, and daily habits, establishing long-term effective menstrual pain management strategies.'
          }
        </p>
      </header>

      {/* Nutrition Section */}
      <section className="bg-gradient-to-br from-green-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          {locale === 'zh' ? t('healthGuide.营养与饮食') : 'Nutrition and Diet'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              {locale === 'zh' ? t('healthGuide.推荐食物') : 'Recommended Foods'}
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.抗炎食物') : 'Anti-inflammatory Foods'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.深海鱼类坚果橄榄油绿') : 'Deep-sea fish, nuts, olive oil, leafy greens'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.富含镁的食物') : 'Magnesium-rich Foods'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.黑巧克力香蕉菠菜杏仁') : 'Dark chocolate, bananas, spinach, almonds'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.富含铁的食物') : 'Iron-rich Foods'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.瘦肉豆类深绿色蔬菜') : 'Lean meat, legumes, dark green vegetables'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              {locale === 'zh' ? t('healthGuide.避免食物') : 'Foods to Avoid'}
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.高糖食物') : 'High-sugar Foods'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.糖果甜饮料精制糖') : 'Candy, sweet drinks, refined sugar'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.高盐食物') : 'High-sodium Foods'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.加工食品腌制食品') : 'Processed foods, pickled foods'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">
                  {locale === 'zh' ? t('healthGuide.咖啡因') : 'Caffeine'}
                </h4>
                <p className="text-sm text-neutral-600">
                  {locale === 'zh' ? t('healthGuide.过量咖啡浓茶') : 'Excessive coffee, strong tea'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          {locale === 'zh' ? t('healthGuide.运动与锻炼') : 'Exercise and Physical Activity'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              {locale === 'zh' ? t('healthGuide.有氧运动') : 'Aerobic Exercise'}
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">
              {locale === 'zh'
                ? t('healthGuide.促进血液循环释放内啡')
                : 'Promotes blood circulation, releases endorphins, naturally relieves pain.'
              }
            </p>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.快走2030分钟') : 'Brisk walking 20-30 minutes'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.游泳') : 'Swimming'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.骑自行车') : 'Cycling'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.舞蹈') : 'Dancing'}</li>
            </ul>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              {locale === 'zh' ? t('healthGuide.瑜伽与伸展') : 'Yoga and Stretching'}
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">
              {locale === 'zh'
                ? t('healthGuide.放松肌肉减轻压力改善')
                : 'Relaxes muscles, reduces stress, improves flexibility.'
              }
            </p>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.猫牛式') : 'Cat-Cow pose'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.儿童式') : 'Child\'s pose'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.扭转式') : 'Twisting poses'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.腿部伸展') : 'Leg stretches'}</li>
            </ul>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              {locale === 'zh' ? t('healthGuide.正念练习') : 'Mindfulness Practice'}
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">
              {locale === 'zh'
                ? t('healthGuide.减轻压力改善疼痛感知')
                : 'Reduces stress, improves pain perception, enhances overall well-being.'
              }
            </p>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.冥想1015分钟') : 'Meditation 10-15 minutes'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.深呼吸练习') : 'Deep breathing exercises'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.渐进性肌肉放松') : 'Progressive muscle relaxation'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.正念行走') : 'Mindful walking'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sleep and Stress Management */}
      <section className="bg-gradient-to-br from-blue-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          {locale === 'zh' ? t('healthGuide.睡眠与压力管理') : 'Sleep and Stress Management'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              {locale === 'zh' ? t('healthGuide.优质睡眠') : 'Quality Sleep'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.保持规律的睡眠时间7') : 'Maintain regular sleep schedule (7-9 hours)'}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.创造舒适的睡眠环境') : 'Create comfortable sleep environment'}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.睡前避免电子设备') : 'Avoid electronic devices before bed'}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.建立睡前放松仪式') : 'Establish bedtime relaxation routine'}
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">
              {locale === 'zh' ? t('healthGuide.压力管理') : 'Stress Management'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.识别和避免压力源') : 'Identify and avoid stress triggers'}
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.学习放松技巧') : 'Learn relaxation techniques'}
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.保持社交联系') : 'Maintain social connections'}
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {locale === 'zh' ? t('healthGuide.寻求专业帮助如需要') : 'Seek professional help (if needed)'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Daily Habits */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          {locale === 'zh' ? t('healthGuide.日常习惯建议') : 'Daily Habit Recommendations'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-800 mb-2">
              {locale === 'zh' ? t('healthGuide.晨间例行') : 'Morning Routine'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'zh' ? t('healthGuide.温水轻度伸展营养早餐') : 'Warm water, light stretching, nutritious breakfast'}
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-800 mb-2">
              {locale === 'zh' ? t('healthGuide.水分补充') : 'Hydration'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'zh' ? t('healthGuide.每天810杯水草药茶') : '8-10 glasses of water daily, herbal teas'}
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-800 mb-2">
              {locale === 'zh' ? t('healthGuide.规律作息') : 'Regular Schedule'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'zh' ? t('healthGuide.固定用餐运动睡眠时间') : 'Fixed meal, exercise, and sleep times'}
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-800 mb-2">
              {locale === 'zh' ? t('healthGuide.自我关爱') : 'Self-care'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'zh' ? t('healthGuide.记录症状奖励进步') : 'Track symptoms, reward progress'}
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section className="bg-accent-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          {locale === 'zh' ? t('healthGuide.实施建议') : 'Implementation Tips'}
        </h2>
        <div className="bg-white p-6 rounded-lg">
          <h3 className="font-semibold text-neutral-800 mb-3">
            {locale === 'zh' ? t('healthGuide.循序渐进的改变') : 'Gradual Changes'}
          </h3>
          <p className="text-neutral-700 mb-4">
            {locale === 'zh'
              ? t('healthGuide.不要试图一次性改变所')
              : 'Don\'t try to change all habits at once. Start with 1-2 easiest changes to implement, build confidence, then gradually add other habits.'
            }
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-primary-600 mb-1">
                {locale === 'zh' ? t('healthGuide.第12周') : 'Week 1-2'}
              </div>
              <p className="text-neutral-600">
                {locale === 'zh' ? t('healthGuide.建立一个新习惯') : 'Establish one new habit'}
              </p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-secondary-600 mb-1">
                {locale === 'zh' ? t('healthGuide.第34周') : 'Week 3-4'}
              </div>
              <p className="text-neutral-600">
                {locale === 'zh' ? t('healthGuide.巩固并添加第二个') : 'Consolidate and add second'}
              </p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-accent-600 mb-1">
                {locale === 'zh' ? t('healthGuide.第5周') : 'Week 5+'}
              </div>
              <p className="text-neutral-600">
                {locale === 'zh' ? t('healthGuide.继续扩展') : 'Continue expanding'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-neutral-200">
        <Link 
          href={`/${locale}/health-guide/relief-methods`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'zh' ? t('healthGuide.上一章AZ缓解方法') : 'Previous: A-Z Relief Methods'}
        </Link>
        
        <Link 
          href={`/${locale}/health-guide/medical-care`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          {locale === 'zh' ? t('healthGuide.下一章何时寻求帮助') : 'Next: When to Seek Help'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
