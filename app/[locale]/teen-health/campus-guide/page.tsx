import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { 
  School, 
  Clock, 
  Heart, 
  Users, 
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Thermometer,
  Pill,
  Coffee,
  Candy,
  Home,
  Activity,
  MessageCircle
} from 'lucide-react';
import type { Metadata } from 'next';

type Locale = 'en' | 'zh';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'teenHealth' });
  
  return {
    title: locale === 'zh' ? t('common.校园应急指南青少') : 'Campus Emergency Guide - Teen Menstrual Health Zone',
    description: locale === 'zh' 
      ? t('common.在学校突然痛起来怎么')
      : 'What to do when pain strikes at school? Classroom emergencies, dorm management, PE class strategies.',
  };
}

export default async function CampusGuidePage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale);

  const emergencySteps = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.快速评估') : 'Quick Assessment',
      description: locale === 'zh' ? t('common.感觉有点不舒服还是已') : 'Feeling a bit uncomfortable? Or already in significant pain?'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.悄悄自救') : 'Discreet Self-Help',
      description: locale === 'zh' ? t('common.调整坐姿深呼吸轻柔按') : 'Adjust posture, deep breathing, gentle massage'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.寻求帮助') : 'Seek Help',
      description: locale === 'zh' ? t('common.示意老师或找同学帮忙') : 'Signal teacher or ask classmate for help'
    }
  ];

  const emergencyKit = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      item: locale === 'zh' ? t('common.迷你热敷贴暖宝宝') : 'Mini heat patches/warmers',
      usage: locale === 'zh' ? t('common.贴在小腹或腰部随时随') : 'Apply to abdomen or lower back for instant warmth'
    },
    {
      icon: <Pill className="w-5 h-5" />,
      item: locale === 'zh' ? t('common.止痛药') : 'Pain medication',
      usage: locale === 'zh' ? t('common.在家长同意和指导下随') : 'Carry safe pain medication with parental consent and guidance'
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      item: locale === 'zh' ? t('common.热水杯') : 'Hot water bottle',
      usage: locale === 'zh' ? t('common.和学校沟通看看能不能') : 'Communicate with school about using during particularly difficult periods'
    },
    {
      icon: <Candy className="w-5 h-5" />,
      item: locale === 'zh' ? t('common.小零食') : 'Small snacks',
      usage: locale === 'zh' ? t('common.一块巧克力或少量糖果') : 'A piece of chocolate or small candy can help distract and provide energy'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-600">
        <Link href={`/${locale}/teen-health`} className="hover:text-primary-600 transition-colors">
          {locale === 'zh' ? t('common.青少年专区') : 'Teen Zone'}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{locale === 'zh' ? t('common.校园应急指南') : 'Campus Emergency Guide'}</span>
      </nav>

      {/* Header */}
      <header className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-4">
            <School className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'zh' ? t('common.校园应急指南') : '🏫 Campus Emergency Guide'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'zh'
            ? t('common.学校是每天大部分时间')校园生存指南"。'
            : 'School is where you spend most of your day. If pain strikes in class, dorm, or even during PE, it can be really tough! Don\'t panic - we\'ve prepared this "campus survival guide" for you.'
          }
        </p>
      </header>

      {/* User Story */}
      <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {locale === 'zh' ? t('common.小郁同学的经历') : 'Xiao Yu\'s Experience:'}
            </h3>
            <p className="text-gray-700 italic">
              {locale === 'zh'
                ? 't('common.有一次上数学课突然痛')'
                : '"Once during math class, I suddenly felt such intense pain that I broke out in a cold sweat and couldn\'t concentrate at all. I didn\'t dare raise my hand to say anything, so I just had to endure it. Time felt like it was crawling by."'
              }
            </p>
            <p className="text-blue-600 font-medium mt-2">
              {locale === 'zh' ? t('common.这就是很多同学在学校') : 'This is the reality for many students at school - we understand!'}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.课堂应急三步法') : 'Classroom Emergency 3-Step Method'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {emergencySteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {step.icon}
                </div>
              </div>
              <div className="bg-blue-50 rounded-full px-4 py-1 text-blue-600 text-sm font-medium mb-3 inline-block">
                {locale === 'zh' ? `第${index + 1}步` : `Step ${index + 1}`}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Strategies */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {locale === 'zh' ? t('common.详细应对策略') : 'Detailed Coping Strategies'}
        </h2>

        {/* Classroom Strategies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <School className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {locale === 'zh' ? t('common.课堂应急指南') : 'Classroom Emergency Guide'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? t('common.悄悄自救技巧') : 'Discreet Self-Help Techniques:'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{locale === 'zh' ? t('common.调整坐姿') : 'Adjust Posture'}</span>
                    <p className="text-sm text-gray-600">{locale === 'zh' ? t('common.尝试把身体微微前倾或') : 'Try leaning slightly forward or gently massage your lower abdomen'}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{locale === 'zh' ? t('common.深呼吸') : 'Deep Breathing'}</span>
                    <p className="text-sm text-gray-600">{locale === 'zh' ? t('common.缓慢深长地吸气再慢慢') : 'Slow, deep breaths help relax tense muscles'}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{locale === 'zh' ? t('common.意念转移') : 'Mental Distraction'}</span>
                    <p className="text-sm text-gray-600">{locale === 'zh' ? t('common.试着把注意力集中在老') : 'Try to focus your attention on the teacher\'s lesson'}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {locale === 'zh' ? t('common.寻求帮助') : 'Seeking Help:'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{locale === 'zh' ? t('common.示意老师') : 'Signal Teacher'}</span>
                    <p className="text-sm text-gray-600">{locale === 'zh' ? t('common.如果实在太痛可以悄悄') : 'If pain is severe, quietly signal the teacher that you need to go to the nurse\'s office'}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{locale === 'zh' ? t('common.找同学帮忙') : 'Ask Classmate for Help'}</span>
                    <p className="text-sm text-gray-600">{locale === 'zh' ? t('common.和坐在身边的好朋友简') : 'Briefly explain the situation to a close friend nearby and ask her to help inform the teacher'}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dorm Management */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <Home className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {locale === 'zh' ? t('common.宿舍疼痛管理') : 'Dorm Pain Management'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-purple-600 mb-3">
                {locale === 'zh' ? t('common.热敷方法') : 'Heat Therapy'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• {locale === 'zh' ? t('common.热水袋最经典有效的方') : 'Hot water bottle: Classic and effective'}</li>
                <li>• {locale === 'zh' ? t('common.热毛巾用热水浸湿毛巾') : 'Hot towel: Soak towel in hot water and apply'}</li>
                <li>• {locale === 'zh' ? t('common.电热毯短时间使用注意') : 'Electric blanket: Use briefly, ensure safety'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-600 mb-3">
                {locale === 'zh' ? t('common.舒适姿势') : 'Comfortable Positions'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• {locale === 'zh' ? t('common.蜷缩侧卧像个虾米轻轻') : 'Curled side position: Like a shrimp, gently hugging abdomen'}</li>
                <li>• {locale === 'zh' ? t('common.膝盖抬高仰卧膝盖弯曲') : 'Knees up: Lie back, bend knees to chest'}</li>
                <li>• {locale === 'zh' ? t('common.使用枕头垫在肚子或膝') : 'Use pillows: Place under abdomen or knees'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-600 mb-3">
                {locale === 'zh' ? t('common.室友互助') : 'Roommate Support'}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• {locale === 'zh' ? t('common.分享经验互相照顾一起') : 'Share experiences: Care for each other, make brown sugar water together'}</li>
                <li>• {locale === 'zh' ? t('common.互相提醒按揉穴位的方') : 'Remind each other: Acupressure techniques'}</li>
                <li>• {locale === 'zh' ? t('common.情感支持理解和陪伴很') : 'Emotional support: Understanding and companionship matter'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PE Class Strategies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <Activity className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">
              {locale === 'zh' ? t('common.体育课运动会应对') : 'PE Class/Sports Event Strategies'}
            </h3>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-800 font-medium mb-1">
                  {locale === 'zh' ? t('common.老师视角') : 'Teacher\'s Perspective:'}
                </p>
                <p className="text-yellow-700 text-sm">
                  {locale === 'zh'
                    ? 't('common.作为老师我们希望了解')'
                    : '"As teachers, we want to understand students\' needs, but some students are too shy to speak up. If you can tell me you\'re not feeling well, I\'ll be more understanding and supportive."'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? t('common.沟通策略') : 'Communication Strategies:'}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm">{locale === 'zh' ? t('common.提前沟通如果经期疼痛') : 'Communicate early: If period pain is severe, inform PE teacher in advance'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm">{locale === 'zh' ? t('common.简单说明t('common.今天身体不太舒服可能')' : 'Simple explanation: "I\'m not feeling well today and may not be suitable for intense exercise"'}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                {locale === 'zh' ? t('common.运动选择') : 'Exercise Options:'}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm">{locale === 'zh' ? t('common.低强度运动散步慢跑瑜') : 'Low-intensity exercise: Walking, light jogging, yoga, stretching can actually help'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm">{locale === 'zh' ? t('common.避免剧烈运动高强度运') : 'Avoid intense exercise: High-intensity activities may worsen pain'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Kit */}
      <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.随身t('common.应急包')' : 'Personal "Emergency Kit"'}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {locale === 'zh' ? t('common.备好这些小东西关键时') : 'Keep these small items ready - they can be lifesavers in critical moments'}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {emergencyKit.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <div className="text-red-600">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.item}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
        <div className="flex items-start">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === 'zh' ? t('common.重要提醒') : 'Important Reminder'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'zh'
                ? t('common.每个人的身体状况不同')
                : 'Everyone\'s body is different, and pain tolerance and coping methods vary. The above suggestions are for reference only - the best approach needs to be discovered by yourself.'
              }
            </p>
            <p className="text-gray-700">
              {locale === 'zh'
                ? t('common.如果你的疼痛非常剧烈')
                : 'If your pain is very severe, affects normal study and life, or is accompanied by other abnormal symptoms, be sure to tell your parents and teachers promptly and seek professional medical help.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href={`/${locale}/teen-health`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {locale === 'zh' ? t('common.返回专区首页') : 'Back to Teen Zone'}
        </Link>
        
        <Link
          href={`/${locale}/teen-health/development-pain`}
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          {locale === 'zh' ? t('common.下一篇发育期疼痛管理') : 'Next: Developmental Pain Management'}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </section>
    </div>
  );
}
