import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { 
  MessageCircle, 
  Heart, 
  Users, 
  School,
  Stethoscope,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Copy,
  AlertTriangle,
  BookOpen,
  Phone,
  Mail,
  Clock
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
    title: locale === 'zh' ? t('common.沟通指导青少年经') : 'Communication Guide - Teen Menstrual Health Zone',
    description: locale === 'zh' 
      ? t('common.如何与家长老师医生有')
      : 'How to effectively communicate with parents, teachers, and doctors? Conversation templates and communication skills.',
  };
}

export default async function CommunicationGuidePage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale);

  const communicationScenarios = [
    {
      id: 'parents',
      title: locale === 'zh' ? t('common.与家长沟通') : 'Communicating with Parents',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-pink-50 text-pink-600',
      description: locale === 'zh' ? t('common.如何向家长表达你的需') : 'How to express your needs and concerns to parents',
      templates: [
        {
          situation: locale === 'zh' ? t('common.第一次来月经') : 'First Period',
          template: locale === 'zh' 
            ? 't('common.妈妈我想我来月经了我')'
            : '"Mom, I think I got my period. I\'m a bit nervous, can you help me? I need to know what to do."',
          tips: locale === 'zh' ? t('common.选择一个安静私密的时') : 'Choose a quiet, private time and place'
        },
        {
          situation: locale === 'zh' ? t('common.疼痛严重') : 'Severe Pain',
          template: locale === 'zh'
            ? 't('common.妈妈我的经期疼痛很严')'
            : '"Mom, my period pain is severe and affecting my studies and daily life. I\'d like to see a doctor, what do you think?"',
          tips: locale === 'zh' ? t('common.具体描述疼痛程度和影') : 'Specifically describe pain level and impact'
        },
        {
          situation: locale === 'zh' ? t('common.需要用品') : 'Need Supplies',
          template: locale === 'zh'
            ? 't('common.妈妈我需要一些卫生用')'
            : '"Mom, I need some sanitary products and pain medication. Can you help me prepare these?"',
          tips: locale === 'zh' ? t('common.提前列一个清单会更有') : 'Making a list beforehand would be more helpful'
        }
      ]
    },
    {
      id: 'teachers',
      title: locale === 'zh' ? t('common.与老师沟通') : 'Communicating with Teachers',
      icon: <School className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      description: locale === 'zh' ? t('common.如何在学校获得理解和') : 'How to get understanding and support at school',
      templates: [
        {
          situation: locale === 'zh' ? t('common.课堂不适') : 'Classroom Discomfort',
          template: locale === 'zh'
            ? 't('common.老师我今天身体不太舒')'
            : '"Teacher, I\'m not feeling well today and may need to go to the nurse\'s office to rest."',
          tips: locale === 'zh' ? t('common.简单说明即可不需要详') : 'A simple explanation is enough, no need for details'
        },
        {
          situation: locale === 'zh' ? t('common.体育课请假') : 'PE Class Excuse',
          template: locale === 'zh'
            ? 't('common.老师我今天身体不适不')'
            : '"Teacher, I\'m not feeling well today and not suitable for intense exercise. Can I do some light activities?"',
          tips: locale === 'zh' ? t('common.提前沟通比临时请假更') : 'Communicating in advance is better than last-minute requests'
        },
        {
          situation: locale === 'zh' ? t('common.考试延期') : 'Exam Postponement',
          template: locale === 'zh'
            ? 't('common.老师我因为身体原因无')'
            : '"Teacher, due to physical reasons I can\'t concentrate. Can I apply for exam postponement?"',
          tips: locale === 'zh' ? t('common.需要有医生证明或家长') : 'May need doctor\'s note or parental support'
        }
      ]
    },
    {
      id: 'doctors',
      title: locale === 'zh' ? t('common.与医生沟通') : 'Communicating with Doctors',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      description: locale === 'zh' ? t('common.如何准确描述症状获得') : 'How to accurately describe symptoms and get professional help',
      templates: [
        {
          situation: locale === 'zh' ? t('common.描述疼痛') : 'Describing Pain',
          template: locale === 'zh'
            ? 't('common.医生我的经期疼痛通常')'
            : '"Doctor, my period pain is usually most severe on the first day, pain level about 7-8 out of 10, mainly in lower abdomen, sometimes radiating to lower back."',
          tips: locale === 'zh' ? t('common.用数字评分更准确') : 'Using numerical ratings is more accurate'
        },
        {
          situation: locale === 'zh' ? t('common.月经周期') : 'Menstrual Cycle',
          template: locale === 'zh'
            ? 't('common.我的月经周期大概是X')'
            : '"My menstrual cycle is about X days, period lasts X days, flow is (heavy/moderate/light), color is (bright red/dark red/brown)."',
          tips: locale === 'zh' ? t('common.提前记录几个月的数据') : 'Record data for several months beforehand'
        },
        {
          situation: locale === 'zh' ? t('common.其他症状') : 'Other Symptoms',
          template: locale === 'zh'
            ? 't('common.除了疼痛我还有头痛恶')'
            : '"Besides pain, I also have (headache/nausea/diarrhea/mood changes) symptoms, usually appearing before/during/after my period."',
          tips: locale === 'zh' ? t('common.记录所有相关症状') : 'Record all related symptoms'
        }
      ]
    }
  ];

  const communicationTips = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.选择合适的时机') : 'Choose the Right Time',
      description: locale === 'zh' ? t('common.找一个大家都比较放松') : 'Find a time when everyone is relaxed and won\'t be interrupted'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.诚实表达感受') : 'Express Feelings Honestly',
      description: locale === 'zh' ? t('common.不要害怕说出你的担心') : 'Don\'t be afraid to express your worries, pain, or needs'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.准备相关信息') : 'Prepare Relevant Information',
      description: locale === 'zh' ? t('common.提前记录症状时间程度') : 'Record symptoms, timing, severity, and other information in advance'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: locale === 'zh' ? t('common.寻求支持') : 'Seek Support',
      description: locale === 'zh' ? t('common.如果一个人不敢说可以') : 'If you\'re afraid to speak alone, ask a trusted person to accompany you'
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
        <span className="text-gray-900">{locale === 'zh' ? t('common.沟通指导') : 'Communication Guide'}</span>
      </nav>

      {/* Header */}
      <header className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <MessageCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'zh' ? t('common.沟通指导') : '💬 Communication Guide'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'zh'
            ? t('common.有时候最难的不是疼痛')
            : 'Sometimes, the hardest part isn\'t the pain itself, but how to ask for help. Don\'t worry, we\'ve prepared practical communication templates and techniques for you.'
          }
        </p>
      </header>

      {/* Why Communication Matters */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.为什么沟通很重要') : 'Why Is Communication Important?'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'zh' ? t('common.获得理解') : 'Get Understanding'}
            </h3>
            <p className="text-gray-600">
              {locale === 'zh' ? t('common.让身边的人了解你的需') : 'Help people around you understand your needs and give you more support'}
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'zh' ? t('common.获得帮助') : 'Get Help'}
            </h3>
            <p className="text-gray-600">
              {locale === 'zh' ? t('common.及时获得医疗建议和专') : 'Get timely medical advice and professional treatment'}
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'zh' ? t('common.减少焦虑') : 'Reduce Anxiety'}
            </h3>
            <p className="text-gray-600">
              {locale === 'zh' ? t('common.分享困扰减轻心理压力') : 'Share concerns and reduce psychological pressure'}
            </p>
          </div>
        </div>
      </section>

      {/* Communication Tips */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.沟通技巧') : 'Communication Tips'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {communicationTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <div className="text-green-600">
                    {tip.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tip.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Communication Templates */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {locale === 'zh' ? t('common.实用沟通模板') : 'Practical Communication Templates'}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {locale === 'zh' ? t('common.根据不同情况选择合适') : 'Choose appropriate expressions based on different situations'}
        </p>
        
        <div className="space-y-12">
          {communicationScenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${scenario.color} mr-4`}>
                  {scenario.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600">
                    {scenario.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {scenario.templates.map((template, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">
                        {template.situation}
                      </h4>
                      <div className="inline-flex items-center text-gray-500 text-sm">
                        <Copy className="w-4 h-4 mr-1" />
                        <span>{locale === 'zh' ? t('common.可复制使用') : 'Copy to use'}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 mb-3 border-l-4 border-blue-500">
                      <p className="text-gray-700 italic">
                        {template.template}
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">{locale === 'zh' ? t('common.小贴士') : 'Tip: '}</span>
                        {template.tips}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Communication */}
      <section className="bg-red-50 rounded-2xl p-8 border border-red-200">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            {locale === 'zh' ? t('common.紧急情况下的沟通') : 'Emergency Communication'}
          </h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          {locale === 'zh'
            ? t('common.如果你遇到以下情况请')
            : 'If you encounter the following situations, seek help immediately without hesitation:'
          }
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              {locale === 'zh' ? t('common.严重症状') : 'Severe Symptoms:'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {locale === 'zh' ? t('common.剧烈疼痛无法忍受') : 'Severe, unbearable pain'}</li>
              <li>• {locale === 'zh' ? t('common.大量出血超过正常范围') : 'Heavy bleeding beyond normal range'}</li>
              <li>• {locale === 'zh' ? t('common.伴有发烧呕吐') : 'Accompanied by fever, vomiting'}</li>
              <li>• {locale === 'zh' ? t('common.晕倒或意识模糊') : 'Fainting or confusion'}</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              {locale === 'zh' ? t('common.紧急联系') : 'Emergency Contacts:'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-700">
                  {locale === 'zh' ? t('common.立即告诉家长或监护人') : 'Immediately tell parents or guardians'}
                </span>
              </div>
              <div className="flex items-center">
                <School className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-700">
                  {locale === 'zh' ? t('common.联系学校医务室或老师') : 'Contact school nurse or teacher'}
                </span>
              </div>
              <div className="flex items-center">
                <Stethoscope className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-700">
                  {locale === 'zh' ? t('common.必要时拨打急救电话') : 'Call emergency services if necessary'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {locale === 'zh' ? t('common.勇敢开口你值得被关爱') : '🌟 Speak Up Bravely, You Deserve Care'}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {locale === 'zh'
            ? t('common.记住寻求帮助不是软弱')
            : 'Remember, seeking help isn\'t a sign of weakness, but a way of caring for yourself. Your health and feelings matter, and people around you are willing to help. Express your needs bravely, and you\'ll find the world is warmer than you imagine.'
          }
        </p>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href={`/${locale}/teen-health/emotional-support`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {locale === 'zh' ? t('common.上一篇情绪支持与心理') : 'Previous: Emotional Support & Mental Health'}
        </Link>
        
        <Link
          href={`/${locale}/teen-health`}
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          {locale === 'zh' ? t('common.返回专区首页') : 'Back to Teen Zone'}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </section>
    </div>
  );
}
