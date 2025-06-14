import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import ClientImage from '@/components/ClientImage';
import {
  Briefcase,
  Car,
  Dumbbell,
  Moon,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Package,
  Star
} from 'lucide-react';

// Types
type Locale = 'en' | 'zh';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'scenarioSolutionsPage' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ScenarioSolutionsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const scenarios = [
    {
      id: 'office',
      title: t('scenarios.office.title'),
      description: t('scenarios.office.description'),
      features: t.raw('scenarios.office.features') as string[],
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'commute',
      title: t('scenarios.commute.title'),
      description: t('scenarios.commute.description'),
      features: t.raw('scenarios.commute.features') as string[],
      icon: <Car className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      hoverColor: 'hover:bg-green-100'
    },
    {
      id: 'exercise',
      title: t('scenarios.exercise.title'),
      description: t('scenarios.exercise.description'),
      features: t.raw('scenarios.exercise.features') as string[],
      icon: <Dumbbell className="w-8 h-8" />,
      color: 'bg-orange-50 text-orange-600',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      id: 'sleep',
      title: t('scenarios.sleep.title'),
      description: t('scenarios.sleep.description'),
      features: t.raw('scenarios.sleep.features') as string[],
      icon: <Moon className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      id: 'social',
      title: t('scenarios.social.title'),
      description: t('scenarios.social.description'),
      features: t.raw('scenarios.social.features') as string[],
      icon: <Users className="w-8 h-8" />,
      color: 'bg-pink-50 text-pink-600',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      id: 'lifeStages',
      title: t('scenarios.lifeStages.title'),
      description: t('scenarios.lifeStages.description'),
      features: t.raw('scenarios.lifeStages.features') as string[],
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600',
      hoverColor: 'hover:bg-red-100'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {t('descriptiont('common.phe')bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border border-pink-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/3">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 rounded-full p-2 mr-3">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {locale === 'zh' ? t('common.青少年经期健康专区') : '🌸 Teen Menstrual Health Zone 🌸'}
                </h2>
                <p className="text-sm text-pink-600 font-medium">
                  {locale === 'zh' ? t('common.专为1218岁女孩设') : 'A caring space designed for girls aged 12-18'}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {locale === 'zh'
                ? t('common.青春期有太多烦恼而每t('common.那几天t('common.更是让人担心疼痛情绪')
                : 'Adolescence brings many worries, and "those days" each month can be especially concerning. Pain, mood swings, body changes... Don\'t worry, you\'re not fighting alone. We\'ve prepared campus emergency guides, developmental pain management, emotional support, and communication skills to help you confidently navigate every period.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/teen-health`}
                className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                {locale === 'zh' ? t('common.进入专区') : 'Enter Zone'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/teen-health/campus-guide`}
                className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full font-medium border-2 border-pink-200 hover:bg-pink-50 transition-colors"
              >
                {locale === 'zh' ? t('common.校园应急指南') : 'Campus Emergency Guide'}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-pink-500 mr-2">💝</span>
                {locale === 'zh' ? t('common.我们能帮你什么') : 'How Can We Help?'}
              </h3>
              <div className="space-y-3">
                {[
                  { icon: '🏫', text: locale === 'zh' ? t('common.校园应急指南') : 'Campus Emergency Guide' },
                  { icon: '🌱', text: locale === 'zh' ? t('common.发育期疼痛管理') : 'Developmental Pain Management' },
                  { icon: '💭', text: locale === 'zh' ? t('common.情绪支持与心理健康') : 'Emotional & Mental Support' },
                  { icon: '💬', text: locale === 'zh' ? t('common.与家长老师沟通') : 'Communication with Parents & Teachers' },
                  { icon: '👭', text: locale === 'zh' ? t('common.同龄人经验分享') : 'Peer Experience Sharing' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gradient-to-br from-primary-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            {t('introTitle')}
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {t('introText')}
          </p>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className={`card group cursor-pointer transition-all duration-300 ${scenario.hoverColor} border-2 border-transparent hover:border-primary-200`}
            >
              {/* Scenario Image */}
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <ClientImage
                  src={`/images/scenarios/scenario-${scenario.id === 'lifeStages' ? 'family' : scenario.id === 'social' ? 'dating' : scenario.id === 'sleep' ? 'sleeping' : scenario.id === 'commute' ? 'commuting' : scenario.id}.jpg`}
                  alt={scenario.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc={`https://images.unsplash.com/photo-${scenario.id === 'office' ? '1497032628192-86f99bcd76bc' : scenario.id === 'commute' ? '1544620347-c4fd4a3d5957' : scenario.id === 'exercise' ? '1571019613454-1cb2f99b2d8b' : scenario.id === 'sleep' ? '1541781774459-bb2af2f05b25' : scenario.id === 'social' ? '1529156069898-49953e39b3ac' : '1559757148-5c350d0d3c56'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`}
                />
              </div>

              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${scenario.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {scenario.icon}
              </div>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors">
                {scenario.title}
              </h3>

              <p className="text-neutral-600 mb-4 leading-relaxed">
                {scenario.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {scenario.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href={`/${locale}/scenario-solutions/${scenario.id}`}
                className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
              >
                <span className="mr-2">{commonT('learnMore')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Kit Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
              <Package className="w-8 h-8" />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span className="text-sm font-medium text-red-700">
                  {locale === 'zh' ? t('common.特别推荐') : 'Special Recommendation'}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-800">
                {locale === 'zh' ? t('common.多场景应急包清单') : 'Multi-Scenario Emergency Kit List'}
              </h2>
            </div>
          </div>

          <p className="text-neutral-700 text-center mb-6 leading-relaxed">
            {locale === 'zh'
              ? t('common.从办公室到通勤路上从')
              : 'From office to commute, from sports field to social gatherings, detailed emergency kit preparation lists help you handle period discomfort confidently in any scenario.'
            }
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-neutral-800">
                  {locale === 'zh' ? t('common.办公场景') : 'Office Scenario'}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {locale === 'zh' ? t('common.隐蔽热敷止痛药姜茶包') : 'Discreet heat patches, pain meds, ginger tea...'}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Car className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-medium text-neutral-800">
                  {locale === 'zh' ? t('common.通勤场景') : 'Commute Scenario'}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {locale === 'zh' ? t('common.便携暖宝宝耳机温水') : 'Portable warmers, headphones, warm water...'}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-pink-600 mr-2" />
                <span className="font-medium text-neutral-800">
                  {locale === 'zh' ? t('common.社交场景') : 'Social Scenario'}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {locale === 'zh' ? t('common.迷你暖贴舒适衣物围巾') : 'Mini heat patches, comfortable clothes, scarf...'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/scenario-solutions/emergency-kit`}
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Package className="w-5 h-5 mr-2" />
              {locale === 'zh' ? t('common.查看完整应急包清单') : 'View Complete Emergency Kit List'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-neutral-100 p-6 md:p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          {locale === 'zh' ? t('common.开始您的个性化痛经管') : 'Start Your Personalized Pain Management Journey'}
        </h2>
        <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
          {locale === 'zh'
            ? t('common.结合我们的症状评估工')
            : 'Combine our symptom assessment tools and pain tracking system to create the most suitable scenario-based solutions for you.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/interactive-tools/symptom-assessment`}
            className="btn-primary"
          >
            {locale === 'zh' ? t('common.开始症状评估') : 'Start Symptom Assessment'}
          </Link>
          <Link
            href={`/${locale}/interactive-tools/pain-tracker`}
            className="btn-secondary"
          >
            {locale === 'zh' ? t('common.开始疼痛追踪') : 'Start Pain Tracking'}
          </Link>
        </div>
      </section>
    </div>
  );
}
