import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { 
  Brain, 
  Heart, 
  Moon, 
  Music,
  PenTool,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Headphones,
  BookOpen,
  Smile,
  Frown,
  Zap
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
    title: locale === 'zh' ? t('common.情绪支持与心理健康') : 'Emotional Support & Mental Health - Teen Menstrual Health Zone',
    description: locale === 'zh' 
      ? t('common.经期焦虑情绪低落如何')过山车"。'
      : 'How to cope with period anxiety and mood swings? Relaxation techniques and peer experience sharing.',
  };
}

export default async function EmotionalSupportPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale);

  const emotionalSymptoms = [
    {
      icon: <Frown className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.烦躁易怒') : 'Irritability',
      description: locale === 'zh' ? t('common.一点小事就可能点燃你') : 'Small things might easily trigger your anger'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.情绪低落') : 'Low Mood',
      description: locale === 'zh' ? t('common.感觉没精神提不起劲甚') : 'Feeling listless, lacking energy, even wanting to cry'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.焦虑不安') : 'Anxiety',
      description: locale === 'zh' ? t('common.担心疼痛担心出血担心') : 'Worrying about pain, bleeding, or others noticing'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.注意力不集中') : 'Difficulty Concentrating',
      description: locale === 'zh' ? t('common.学习效率下降难以专注') : 'Decreased study efficiency, hard to focus'
    }
  ];

  const copingStrategies = [
    {
      category: locale === 'zh' ? t('common.放松技巧') : 'Relaxation Techniques',
      icon: <Moon className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
      strategies: [
        {
          icon: <Heart className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.深呼吸练习') : 'Deep Breathing',
          description: locale === 'zh' ? t('common.在感觉烦躁或焦虑时找') : 'When feeling irritated or anxious, find a quiet place and take several deep breaths'
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.冥想或正念') : 'Meditation or Mindfulness',
          description: locale === 'zh' ? t('common.尝试简单的引导式冥想') : 'Try simple guided meditation to help calm your mind'
        },
        {
          icon: <Headphones className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.听音乐ASMR') : 'Music/ASMR',
          description: locale === 'zh' ? t('common.听一些让你放松或愉悦') : 'Listen to relaxing or pleasant music, or try ASMR audio'
        }
      ]
    },
    {
      category: locale === 'zh' ? t('common.情绪表达') : 'Emotional Expression',
      icon: <PenTool className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
      strategies: [
        {
          icon: <PenTool className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.写日记或画画') : 'Journaling or Drawing',
          description: locale === 'zh' ? t('common.把自己的感受写下来或') : 'Writing down or drawing your feelings is a great way to release emotions'
        },
        {
          icon: <Smile className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.做喜欢的事') : 'Do What You Love',
          description: locale === 'zh' ? t('common.看电影听歌和朋友聊天') : 'Watch movies, listen to music, chat with friends, do crafts - anything that makes you happy'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: locale === 'zh' ? t('common.与人沟通') : 'Communicate with Others',
          description: locale === 'zh' ? t('common.和你信任的朋友家人或') : 'Talk about your feelings with trusted friends, family, or teachers'
        }
      ]
    }
  ];

  const peerExperiences = [
    {
      question: locale === 'zh' ? t('common.经期前情绪特别差看什') : 'My mood is particularly bad before my period, everything annoys me. How can I control my temper and not take it out on family?',
      answer: locale === 'zh' 
        ? t('common.我也是这样我的方法是')
        : 'I\'m the same way! My method is to take deep breaths when I feel like I\'m about to lose my temper, then find a quiet place to stay for a few minutes or go for a walk. I tell my family that my emotions are unstable these days and ask for their understanding - it helps a lot.'
    },
    {
      question: locale === 'zh' ? t('common.每次来月经我就害怕肚') : 'Every time I get my period, I\'m afraid of stomach pain and think about many strange things. I feel so anxious - is this normal?',
      answer: locale === 'zh'
        ? t('common.超级正常我那时候也是')
        : 'Super normal! I was the same way, worrying excessively about pain, declining grades, body changes, etc. Later I learned this was hormonal influence and wasn\'t so scared anymore. Learning more scientific knowledge about how the body works can reduce a lot of anxiety. I also do things I enjoy to distract myself.'
    },
    {
      question: locale === 'zh' ? t('common.我痛经很厉害有时候会') : 'My period pain is severe and sometimes I cry, but I don\'t dare tell anyone because I feel embarrassed. What should I do?',
      answer: locale === 'zh'
        ? t('common.痛经不是丢脸的事它是')
        : 'Period pain is not embarrassing! It\'s something many girls experience. Bravely tell someone you trust most, like your mom, good friend, or school nurse - they will understand and help you. Seeking help isn\'t weakness, it\'s self-care.'
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
        <span className="text-gray-900">{locale === 'zh' ? t('common.情绪支持与心理健康') : 'Emotional Support & Mental Health'}</span>
      </nav>

      {/* Header */}
      <header className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 rounded-full p-4">
            <Brain className="w-12 h-12 text-purple-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'zh' ? t('common.情绪支持与心理健康') : '💭 Emotional Support & Mental Health'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'zh'
            ? t('common.经期不仅仅是身体上的')感冒t('common.烦躁易怒感觉低落甚至')
            : 'Periods aren\'t just physical discomfort - sometimes emotions can "catch a cold" too. Irritable, angry, feeling down, even wanting to cry? Don\'t worry, this is normal!'
          }
        </p>
      </header>

      {/* User Stories */}
      <section className="space-y-6">
        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
          <div className="flex items-start">
            <div className="bg-purple-100 rounded-full p-2 mr-4 flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? t('common.小雅同学') : 'Xiao Ya:'}
              </h3>
              <p className="text-gray-700 italic">
                {locale === 'zh'
                  ? 't('common.来月经前几天我总是会')'
                  : '"A few days before my period, I always get inexplicably irritated, everything annoys me, and I easily argue with friends, then regret it afterwards."'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? t('common.小静同学') : 'Xiao Jing:'}
              </h3>
              <p className="text-gray-700 italic">
                {locale === 'zh'
                  ? 't('common.每次月经快来我就特别')'
                  : '"Every time my period is coming, I get especially nervous, afraid of stomach pain, afraid of heavy bleeding staining my pants, can\'t sleep well at night. I feel so vulnerable."'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Emotions Are Affected */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.为什么经期情绪会受影') : 'Why Are Emotions Affected During Periods?'}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {locale === 'zh'
              ? t('common.主要是因为月经周期中')
              : 'This is mainly due to hormonal fluctuations during the menstrual cycle. Especially estrogen and progesterone - their changes affect mood-regulating chemicals in the brain, like serotonin. So feeling emotionally unstable is a very normal physiological response.'
            }
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {emotionalSymptoms.map((symptom, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="text-purple-600">
                    {symptom.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {symptom.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.应对经期焦虑和情绪低') : 'Coping with Period Anxiety and Low Mood'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {locale === 'zh' ? t('common.理解这些是身体的正常') : 'Understanding these as normal bodily responses is the first step to relieving anxiety'}
        </p>
        
        <div className="space-y-8">
          {copingStrategies.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.strategies.map((strategy, strategyIndex) => (
                  <div key={strategyIndex} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full ${category.color} mr-3`}>
                        {strategy.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {strategy.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {strategy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Healthy Habits */}
      <section className="bg-green-50 rounded-2xl p-8 border border-green-100">
        <div className="flex items-center mb-6">
          <Heart className="w-8 h-8 text-green-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            {locale === 'zh' ? t('common.建立健康的情绪管理习') : 'Build Healthy Emotional Management Habits'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-3">
              <Moon className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">
                {locale === 'zh' ? t('common.充足的睡眠') : 'Adequate Sleep'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'zh' ? t('common.保证高质量的睡眠对调') : 'Quality sleep is crucial for emotional regulation. Listen to soothing music or meditation audio before bed.'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-3">
              <Users className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">
                {locale === 'zh' ? t('common.同伴支持') : 'Peer Support'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'zh' ? t('common.知道自己不是一个人经') : 'Knowing you\'re not alone in experiencing this is important. Talk with peers or see how others cope.'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center mb-3">
              <BookOpen className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">
                {locale === 'zh' ? t('common.学习了解') : 'Learn and Understand'}
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'zh' ? t('common.多了解经期相关的科学') : 'Learning scientific knowledge about periods and understanding body changes can reduce unnecessary worry and anxiety.'}
            </p>
          </div>
        </div>
      </section>

      {/* Peer Q&A */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.同龄人经验分享') : '👭 Peer Experience Sharing'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {locale === 'zh' ? t('common.来自真实用户的匿名问') : 'Anonymous Q&A from real users - you\'re not alone'}
        </p>
        
        <div className="space-y-8">
          {peerExperiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-600 mb-2">Q:</h3>
                    <p className="text-gray-700">{experience.question}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-600 mb-2">A:</h3>
                    <p className="text-gray-700 italic">{experience.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            {locale === 'zh' ? t('common.何时寻求专业帮助') : 'When to Seek Professional Help?'}
          </h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          {locale === 'zh'
            ? t('common.如果你的经期情绪问题')
            : 'If your period-related emotional issues (anxiety, depression, irritability) are very severe, last a long time, affect your studies, social life, and daily activities, or if you have thoughts of self-harm, please tell your parents or teachers and seek help from professional counselors or doctors.'
          }
        </p>
        
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">
            {locale === 'zh' ? t('common.记住') : 'Remember:'}
          </h3>
          <p className="text-gray-700">
            {locale === 'zh'
              ? t('common.情绪像天气一样会有阴')
              : 'Emotions are like weather - they have ups and downs, especially during periods. Understanding, accepting, and learning to live with them will make you stronger.'
            }
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href={`/${locale}/teen-health/development-pain`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {locale === 'zh' ? t('common.上一篇发育期疼痛管理') : 'Previous: Developmental Pain Management'}
        </Link>
        
        <Link
          href={`/${locale}/teen-health/communication-guide`}
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          {locale === 'zh' ? t('common.下一篇沟通指导') : 'Next: Communication Guide'}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </section>
    </div>
  );
}
