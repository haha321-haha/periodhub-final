'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { GraduationCap, Heart, Users, BookOpen, MessageCircle, Shield } from 'lucide-react';

export default function TeenScenarioPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 初潮准备指南
  const menarcheGuide = [
    {
      stage: locale === 'zh' ? '身体准备' : 'Physical Preparation',
      icon: '🩺',
      items: [
        locale === 'zh' ? '了解月经的基本知识' : 'Learn basic knowledge about menstruation',
        locale === 'zh' ? '准备卫生用品（卫生巾、内裤）' : 'Prepare sanitary products (pads, underwear)',
        locale === 'zh' ? '学会正确使用卫生用品' : 'Learn proper use of sanitary products',
        locale === 'zh' ? '了解正常的月经周期' : 'Understand normal menstrual cycles'
      ]
    },
    {
      stage: locale === 'zh' ? '心理准备' : 'Mental Preparation',
      icon: '💭',
      items: [
        locale === 'zh' ? '接受这是正常的生理现象' : 'Accept this as a normal physiological phenomenon',
        locale === 'zh' ? '不要感到羞耻或恐惧' : 'Don\'t feel ashamed or afraid',
        locale === 'zh' ? '建立积极的身体认知' : 'Build positive body awareness',
        locale === 'zh' ? '学会自我关爱和保护' : 'Learn self-care and protection'
      ]
    },
    {
      stage: locale === 'zh' ? '环境准备' : 'Environmental Preparation',
      icon: '🏠',
      items: [
        locale === 'zh' ? '在家中和学校准备应急包' : 'Prepare emergency kits at home and school',
        locale === 'zh' ? '了解学校洗手间位置' : 'Know the location of school restrooms',
        locale === 'zh' ? '与信任的成年人建立沟通' : 'Establish communication with trusted adults',
        locale === 'zh' ? '准备舒适的休息环境' : 'Prepare comfortable rest environment'
      ]
    }
  ];

  // 校园应对策略
  const schoolStrategies = [
    {
      situation: locale === 'zh' ? '课堂突发情况' : 'Classroom Emergencies',
      strategies: [
        {
          problem: locale === 'zh' ? '上课时突然来月经' : 'Sudden menstruation during class',
          solution: locale === 'zh' ? '举手请求去洗手间，不需要详细说明原因' : 'Raise hand to request restroom visit, no need for detailed explanation',
          tip: locale === 'zh' ? '可以说"我需要去一下洗手间"' : 'Can say "I need to use the restroom"'
        },
        {
          problem: locale === 'zh' ? '没有准备卫生用品' : 'No sanitary products prepared',
          solution: locale === 'zh' ? '向女老师或女同学求助，学校护士室通常也有' : 'Ask female teachers or classmates for help, school nurse\'s office usually has supplies',
          tip: locale === 'zh' ? '大部分女性都会理解并愿意帮助' : 'Most women will understand and be willing to help'
        },
        {
          problem: locale === 'zh' ? '担心被同学发现' : 'Worried about being discovered by classmates',
          solution: locale === 'zh' ? '穿深色裤子，携带外套系在腰间' : 'Wear dark pants, carry jacket to tie around waist',
          tip: locale === 'zh' ? '月经是正常现象，不需要过度担心' : 'Menstruation is normal, no need to worry excessively'
        }
      ]
    },
    {
      situation: locale === 'zh' ? '体育课应对' : 'Physical Education Coping',
      strategies: [
        {
          problem: locale === 'zh' ? '经期是否可以上体育课' : 'Whether to attend PE during menstruation',
          solution: locale === 'zh' ? '轻度运动有益，但可以申请减少强度或休息' : 'Light exercise is beneficial, but can request reduced intensity or rest',
          tip: locale === 'zh' ? '诚实告知体育老师，大部分老师会理解' : 'Honestly inform PE teacher, most teachers will understand'
        },
        {
          problem: locale === 'zh' ? '游泳课的处理' : 'Handling swimming classes',
          solution: locale === 'zh' ? '经期不建议游泳，可以申请观摩或做其他活动' : 'Swimming not recommended during menstruation, can request observation or other activities',
          tip: locale === 'zh' ? '提前和老师沟通，准备替代活动' : 'Communicate with teacher in advance, prepare alternative activities'
        }
      ]
    }
  ];

  // 家长沟通指南
  const parentCommunication = [
    {
      topic: locale === 'zh' ? '如何开始对话' : 'How to Start the Conversation',
      tips: [
        locale === 'zh' ? '选择私密、舒适的环境' : 'Choose a private, comfortable environment',
        locale === 'zh' ? '选择合适的时机，避免匆忙时刻' : 'Choose appropriate timing, avoid rushed moments',
        locale === 'zh' ? '可以从书籍或视频开始话题' : 'Can start the topic from books or videos',
        locale === 'zh' ? '保持开放和诚实的态度' : 'Maintain an open and honest attitude'
      ]
    },
    {
      topic: locale === 'zh' ? '需要讨论的内容' : 'Content to Discuss',
      tips: [
        locale === 'zh' ? '月经的基本生理知识' : 'Basic physiological knowledge of menstruation',
        locale === 'zh' ? '卫生用品的选择和使用' : 'Selection and use of sanitary products',
        locale === 'zh' ? '经期的身体和情绪变化' : 'Physical and emotional changes during menstruation',
        locale === 'zh' ? '何时需要看医生' : 'When to see a doctor'
      ]
    },
    {
      topic: locale === 'zh' ? '如果父母不理解' : 'If Parents Don\'t Understand',
      tips: [
        locale === 'zh' ? '寻求其他信任的女性长辈帮助' : 'Seek help from other trusted female elders',
        locale === 'zh' ? '通过学校健康教育获取信息' : 'Get information through school health education',
        locale === 'zh' ? '利用可靠的网络资源学习' : 'Use reliable online resources to learn',
        locale === 'zh' ? '必要时寻求学校护士或医生帮助' : 'Seek help from school nurse or doctor if necessary'
      ]
    }
  ];

  // 青少年常见问题
  const commonConcerns = [
    {
      question: locale === 'zh' ? '月经不规律正常吗？' : 'Is irregular menstruation normal?',
      answer: locale === 'zh' ? '初潮后的1-2年内，月经不规律是正常的。身体需要时间建立稳定的激素周期。如果超过2年仍然很不规律，建议咨询医生。' : 'Irregular menstruation is normal for 1-2 years after menarche. The body needs time to establish a stable hormonal cycle. If still very irregular after 2 years, consult a doctor.',
      category: '生理健康'
    },
    {
      question: locale === 'zh' ? '经期可以运动吗？' : 'Can I exercise during menstruation?',
      answer: locale === 'zh' ? '可以进行适度运动，如散步、轻度瑜伽等。运动有助于缓解经期不适。但要避免过于激烈的运动，根据身体感受调整强度。' : 'Moderate exercise like walking and light yoga is fine. Exercise helps relieve menstrual discomfort. Avoid overly intense exercise and adjust intensity based on how you feel.',
      category: '运动健康'
    },
    {
      question: locale === 'zh' ? '如何处理经期情绪波动？' : 'How to handle mood swings during menstruation?',
      answer: locale === 'zh' ? '经期情绪波动是由激素变化引起的，这是正常现象。可以通过充足睡眠、均衡饮食、适度运动和与信任的人交流来缓解。' : 'Mood swings during menstruation are caused by hormonal changes and are normal. They can be relieved through adequate sleep, balanced diet, moderate exercise, and communication with trusted people.',
      category: '心理健康'
    },
    {
      question: locale === 'zh' ? '什么时候需要看医生？' : 'When should I see a doctor?',
      answer: locale === 'zh' ? '如果出现剧烈疼痛、大量出血、月经持续超过7天、或者严重影响日常生活，应该及时就医。16岁后仍未来月经也需要咨询医生。' : 'See a doctor if you experience severe pain, heavy bleeding, menstruation lasting more than 7 days, or if it seriously affects daily life. Also consult if menstruation hasn\'t started by age 16.',
      category: '医疗指导'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* 面包屑导航 */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-purple-600 transition-colors">
              {locale === 'zh' ? '首页' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/scenario-solutions`} className="hover:text-purple-600 transition-colors">
              {locale === 'zh' ? '场景解决方案' : 'Scenario Solutions'}
            </Link>
            <span>/</span>
            <span className="text-purple-600 font-medium">
              {locale === 'zh' ? '青少年专题' : 'Teen Special Topic'}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '青少年专题' : 'Teen Special Topic'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '专为青春期女孩设计的经期健康指导，帮助您自信地迎接成长的每一个阶段' : 'Menstrual health guidance designed specifically for adolescent girls, helping you confidently embrace every stage of growth'}
          </p>
        </div>

        {/* 初潮准备指南 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-pink-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '初潮准备指南' : 'Menarche Preparation Guide'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {menarcheGuide.map((guide, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{guide.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {guide.stage}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {guide.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 校园应对策略 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '校园应对策略' : 'School Coping Strategies'}
            </h2>
          </div>

          <div className="space-y-8">
            {schoolStrategies.map((strategy, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {strategy.situation}
                </h3>

                <div className="space-y-6">
                  {strategy.strategies.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            {locale === 'zh' ? '问题：' : 'Problem:'}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            {locale === 'zh' ? '解决方案：' : 'Solution:'}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.solution}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-medium text-blue-800 mb-2">
                            {locale === 'zh' ? '实用建议：' : 'Practical Tip:'}
                          </h4>
                          <p className="text-blue-700 text-sm">{item.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 家长沟通指南 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '家长沟通指南' : 'Parent Communication Guide'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {parentCommunication.map((comm, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {comm.topic}
                </h3>

                <ul className="space-y-3">
                  {comm.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 青少年常见问题 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '青少年常见问题' : 'Common Teen Concerns'}
            </h2>
          </div>

          <div className="space-y-6">
            {commonConcerns.map((concern, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {concern.question}
                  </h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium ml-4">
                    {concern.category}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {concern.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 应急联系信息 */}
        <section className="mb-12">
          <div className="glass-effect rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🆘 {locale === 'zh' ? '应急联系信息' : 'Emergency Contact Information'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  {locale === 'zh' ? '学校资源' : 'School Resources'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {locale === 'zh' ? '学校护士室' : 'School nurse\'s office'}</li>
                  <li>• {locale === 'zh' ? '女性老师或辅导员' : 'Female teachers or counselors'}</li>
                  <li>• {locale === 'zh' ? '学校心理健康中心' : 'School mental health center'}</li>
                  <li>• {locale === 'zh' ? '同班女同学' : 'Female classmates'}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  {locale === 'zh' ? '家庭和社区' : 'Family and Community'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {locale === 'zh' ? '母亲或女性家庭成员' : 'Mother or female family members'}</li>
                  <li>• {locale === 'zh' ? '家庭医生或妇科医生' : 'Family doctor or gynecologist'}</li>
                  <li>• {locale === 'zh' ? '社区健康中心' : 'Community health center'}</li>
                  <li>• {locale === 'zh' ? '信任的成年女性朋友' : 'Trusted adult female friends'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 青少年健康提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-teal-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '青少年健康提醒' : 'Teen Health Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '青春期是身体和心理快速发展的重要阶段。月经的到来标志着身体的成熟，这是值得庆祝的成长里程碑。记住，每个女孩的经历都是独特的，不要与他人比较。如果有任何疑问或担忧，勇敢地寻求帮助是明智的选择。您的健康和幸福是最重要的。' :
                  'Adolescence is an important stage of rapid physical and psychological development. The arrival of menstruation marks physical maturity and is a growth milestone worth celebrating. Remember, every girl\'s experience is unique, don\'t compare with others. If you have any questions or concerns, bravely seeking help is a wise choice. Your health and well-being are most important.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
