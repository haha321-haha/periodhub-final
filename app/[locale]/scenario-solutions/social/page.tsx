'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Users, PartyPopper, Clock, MessageCircle, Shield, Sparkles } from 'lucide-react';

export default function SocialScenarioPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 聚会准备清单
  const partyPreparation = [
    {
      category: locale === 'zh' ? '服装选择' : 'Clothing Selection',
      icon: '👗',
      tips: [
        locale === 'zh' ? '选择深色系服装，特别是下装' : 'Choose dark-colored clothing, especially bottoms',
        locale === 'zh' ? '穿着宽松舒适的衣物，避免紧身' : 'Wear loose, comfortable clothing, avoid tight fits',
        locale === 'zh' ? '准备备用外套，可以系在腰间遮挡' : 'Prepare spare jacket to tie around waist for coverage',
        locale === 'zh' ? '选择有口袋的服装，方便携带用品' : 'Choose clothing with pockets for carrying supplies'
      ]
    },
    {
      category: locale === 'zh' ? '随身包准备' : 'Carry Bag Preparation',
      icon: '👜',
      tips: [
        locale === 'zh' ? '小包装卫生用品（2-3片）' : 'Small pack sanitary products (2-3 pieces)',
        locale === 'zh' ? '湿巾和免洗洗手液' : 'Wet wipes and hand sanitizer',
        locale === 'zh' ? '止痛药（布洛芬）' : 'Pain medication (Ibuprofen)',
        locale === 'zh' ? '薄荷糖或口香糖' : 'Mints or chewing gum',
        locale === 'zh' ? '小镜子和唇膏' : 'Small mirror and lip balm'
      ]
    },
    {
      category: locale === 'zh' ? '心理准备' : 'Mental Preparation',
      icon: '🧠',
      tips: [
        locale === 'zh' ? '提前告知信任的朋友您的状况' : 'Inform trusted friends of your condition in advance',
        locale === 'zh' ? '准备礼貌的借口，以防需要提前离开' : 'Prepare polite excuses in case you need to leave early',
        locale === 'zh' ? '设定合理期望，不强迫自己过度社交' : 'Set reasonable expectations, don\'t force excessive socializing',
        locale === 'zh' ? '记住这是正常的生理现象，无需羞耻' : 'Remember this is a normal physiological phenomenon, no shame needed'
      ]
    }
  ];

  // 社交礼仪指南
  const socialEtiquette = [
    {
      situation: locale === 'zh' ? '餐厅聚餐' : 'Restaurant Dining',
      strategies: [
        {
          challenge: locale === 'zh' ? '需要频繁去洗手间' : 'Need frequent restroom visits',
          solution: locale === 'zh' ? '选择靠近洗手间的座位，或主动提出"去补妆"' : 'Choose seats near restroom, or offer to "touch up makeup"',
          phrase: locale === 'zh' ? '"我去补个妆，马上回来"' : '"I\'ll go touch up my makeup, be right back"'
        },
        {
          challenge: locale === 'zh' ? '食欲不振或恶心' : 'Loss of appetite or nausea',
          solution: locale === 'zh' ? '点清淡食物，可以说"最近在调理身体"' : 'Order light foods, can say "recently adjusting my health"',
          phrase: locale === 'zh' ? '"我最近在调理身体，吃得比较清淡"' : '"I\'m recently adjusting my health, eating lighter foods"'
        }
      ]
    },
    {
      situation: locale === 'zh' ? '户外活动' : 'Outdoor Activities',
      strategies: [
        {
          challenge: locale === 'zh' ? '体力不支或疼痛' : 'Lack of energy or pain',
          solution: locale === 'zh' ? '主动承担轻松任务，如拍照、导航等' : 'Volunteer for light tasks like photography, navigation',
          phrase: locale === 'zh' ? '"我来当摄影师，帮大家拍美照"' : '"I\'ll be the photographer, help everyone take beautiful photos"'
        },
        {
          challenge: locale === 'zh' ? '需要休息' : 'Need to rest',
          solution: locale === 'zh' ? '建议找咖啡厅或休息区，说"我们找个地方聊天吧"' : 'Suggest finding a café or rest area, say "let\'s find a place to chat"',
          phrase: locale === 'zh' ? '"走了这么久，我们找个地方坐下聊天吧"' : '"We\'ve walked so much, let\'s find a place to sit and chat"'
        }
      ]
    },
    {
      situation: locale === 'zh' ? '派对聚会' : 'Party Gatherings',
      strategies: [
        {
          challenge: locale === 'zh' ? '情绪波动' : 'Mood swings',
          solution: locale === 'zh' ? '选择安静角落，进行深呼吸，必要时短暂离开' : 'Choose quiet corners, do deep breathing, leave briefly if necessary',
          phrase: locale === 'zh' ? '"我出去透透气，很快回来"' : '"I\'ll go get some fresh air, be back soon"'
        },
        {
          challenge: locale === 'zh' ? '不想喝酒' : 'Don\'t want to drink alcohol',
          solution: locale === 'zh' ? '选择无酒精饮料，说"我在服药期间"' : 'Choose non-alcoholic drinks, say "I\'m on medication"',
          phrase: locale === 'zh' ? '"我最近在吃药，不能喝酒"' : '"I\'m currently taking medication, can\'t drink alcohol"'
        }
      ]
    }
  ];

  // 应急预案
  const emergencyPlans = [
    {
      scenario: locale === 'zh' ? '突发大量出血' : 'Sudden Heavy Bleeding',
      immediateActions: [
        locale === 'zh' ? '立即寻找最近的洗手间' : 'Immediately find nearest restroom',
        locale === 'zh' ? '使用随身携带的应急用品' : 'Use emergency supplies you carry',
        locale === 'zh' ? '如果没有用品，向女性朋友求助' : 'If no supplies, ask female friends for help',
        locale === 'zh' ? '必要时使用纸巾临时应急' : 'Use tissues as temporary emergency measure if necessary'
      ],
      longTermActions: [
        locale === 'zh' ? '评估是否需要提前离开' : 'Assess if early departure is needed',
        locale === 'zh' ? '联系可信任的朋友陪同' : 'Contact trusted friend for accompaniment',
        locale === 'zh' ? '如果在外地，寻找最近的药店' : 'If away from home, find nearest pharmacy',
        locale === 'zh' ? '记录出血情况，后续咨询医生' : 'Record bleeding situation for later doctor consultation'
      ]
    },
    {
      scenario: locale === 'zh' ? '剧烈疼痛' : 'Severe Pain',
      immediateActions: [
        locale === 'zh' ? '找安静地方坐下或躺下' : 'Find quiet place to sit or lie down',
        locale === 'zh' ? '进行深呼吸和放松练习' : 'Do deep breathing and relaxation exercises',
        locale === 'zh' ? '服用随身携带的止痛药' : 'Take pain medication you carry',
        locale === 'zh' ? '按压缓解穴位（合谷穴）' : 'Press relief acupoints (Hegu point)'
      ],
      longTermActions: [
        locale === 'zh' ? '如果疼痛持续，考虑回家休息' : 'If pain persists, consider going home to rest',
        locale === 'zh' ? '联系家人或朋友接送' : 'Contact family or friends for pickup',
        locale === 'zh' ? '如果疼痛异常严重，寻求医疗帮助' : 'If pain is abnormally severe, seek medical help',
        locale === 'zh' ? '记录疼痛程度和持续时间' : 'Record pain level and duration'
      ]
    }
  ];

  // 社交能量管理
  const energyManagement = [
    {
      level: locale === 'zh' ? '高能量日' : 'High Energy Days',
      description: locale === 'zh' ? '月经后期，体力恢复' : 'Late menstrual period, energy recovering',
      activities: [
        locale === 'zh' ? '可以参加较长时间的聚会' : 'Can attend longer gatherings',
        locale === 'zh' ? '适合户外活动和运动' : 'Suitable for outdoor activities and sports',
        locale === 'zh' ? '可以承担组织者角色' : 'Can take on organizer role',
        locale === 'zh' ? '适合认识新朋友' : 'Good for meeting new friends'
      ],
      tips: locale === 'zh' ? '充分利用这个时期的社交能量，但仍要注意适度' : 'Make full use of social energy during this period, but still be moderate'
    },
    {
      level: locale === 'zh' ? '中等能量日' : 'Medium Energy Days',
      description: locale === 'zh' ? '月经中期，状态稳定' : 'Mid-menstrual period, stable condition',
      activities: [
        locale === 'zh' ? '适合小型聚会和熟人聚餐' : 'Suitable for small gatherings and dining with acquaintances',
        locale === 'zh' ? '可以参加室内活动' : 'Can participate in indoor activities',
        locale === 'zh' ? '适合深度交流和谈话' : 'Good for deep communication and conversation',
        locale === 'zh' ? '可以尝试新的休闲活动' : 'Can try new leisure activities'
      ],
      tips: locale === 'zh' ? '选择舒适的环境和信任的朋友，避免过度刺激' : 'Choose comfortable environments and trusted friends, avoid overstimulation'
    },
    {
      level: locale === 'zh' ? '低能量日' : 'Low Energy Days',
      description: locale === 'zh' ? '月经前期和初期，体力较弱' : 'Pre-menstrual and early period, weaker energy',
      activities: [
        locale === 'zh' ? '适合在家小聚或视频聊天' : 'Suitable for small home gatherings or video chats',
        locale === 'zh' ? '可以选择安静的咖啡厅见面' : 'Can choose quiet cafés for meetings',
        locale === 'zh' ? '适合一对一的深度交流' : 'Good for one-on-one deep conversations',
        locale === 'zh' ? '可以推迟大型社交活动' : 'Can postpone large social events'
      ],
      tips: locale === 'zh' ? '优先照顾自己的需求，不要勉强参加不舒适的活动' : 'Prioritize your own needs, don\'t force participation in uncomfortable activities'
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
              {locale === 'zh' ? '社交场景' : 'Social Scenarios'}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '社交场景解决方案' : 'Social Scenario Solutions'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '在社交活动中优雅地管理经期，保持自信的同时照顾好自己的身体需求' : 'Gracefully manage menstruation during social activities, maintaining confidence while caring for your body\'s needs'}
          </p>
        </div>

        {/* 聚会准备清单 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <PartyPopper className="w-6 h-6 text-pink-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '聚会准备清单' : 'Party Preparation Checklist'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partyPreparation.map((category, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 社交礼仪指南 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '社交礼仪指南' : 'Social Etiquette Guide'}
            </h2>
          </div>

          <div className="space-y-8">
            {socialEtiquette.map((situation, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {situation.situation}
                </h3>

                <div className="space-y-6">
                  {situation.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            {locale === 'zh' ? '挑战：' : 'Challenge:'}
                          </h4>
                          <p className="text-gray-600 text-sm">{strategy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">
                            {locale === 'zh' ? '解决方案：' : 'Solution:'}
                          </h4>
                          <p className="text-gray-600 text-sm">{strategy.solution}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-medium text-blue-800 mb-2">
                            {locale === 'zh' ? '建议用语：' : 'Suggested Phrase:'}
                          </h4>
                          <p className="text-blue-700 text-sm italic">"{strategy.phrase}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 应急预案 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '应急预案' : 'Emergency Plans'}
            </h2>
          </div>

          <div className="space-y-8">
            {emergencyPlans.map((plan, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">!</span>
                  </span>
                  {plan.scenario}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {locale === 'zh' ? '立即行动' : 'Immediate Actions'}
                    </h4>
                    <ul className="space-y-2">
                      {plan.immediateActions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                            {actionIndex + 1}
                          </span>
                          <span className="text-sm text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {locale === 'zh' ? '后续处理' : 'Follow-up Actions'}
                    </h4>
                    <ul className="space-y-2">
                      {plan.longTermActions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                            {actionIndex + 1}
                          </span>
                          <span className="text-sm text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 社交能量管理 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '社交能量管理' : 'Social Energy Management'}
            </h2>
          </div>

          <div className="space-y-6">
            {energyManagement.map((level, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {level.level}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    index === 0 ? 'bg-green-100 text-green-800' :
                    index === 1 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {level.description}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      {locale === 'zh' ? '适合的活动：' : 'Suitable Activities:'}
                    </h4>
                    <ul className="space-y-2">
                      {level.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`rounded-lg p-4 ${
                    index === 0 ? 'bg-green-50' :
                    index === 1 ? 'bg-yellow-50' :
                    'bg-red-50'
                  }`}>
                    <h4 className={`font-medium mb-2 ${
                      index === 0 ? 'text-green-800' :
                      index === 1 ? 'text-yellow-800' :
                      'text-red-800'
                    }`}>
                      {locale === 'zh' ? '管理建议：' : 'Management Tips:'}
                    </h4>
                    <p className={`text-sm ${
                      index === 0 ? 'text-green-700' :
                      index === 1 ? 'text-yellow-700' :
                      'text-red-700'
                    }`}>
                      {level.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 社交自信提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '社交自信提醒' : 'Social Confidence Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '月经是女性正常的生理现象，不应该成为社交的障碍。真正的朋友会理解和支持您。如果某个社交场合让您感到不适或压力，记住您有权利优先照顾自己的健康。自信来自于了解和接受自己的身体，以及知道如何在任何情况下照顾好自己。' :
                  'Menstruation is a normal physiological phenomenon for women and should not be a barrier to socializing. True friends will understand and support you. If a social occasion makes you feel uncomfortable or stressed, remember you have the right to prioritize your health. Confidence comes from understanding and accepting your body, and knowing how to take care of yourself in any situation.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
