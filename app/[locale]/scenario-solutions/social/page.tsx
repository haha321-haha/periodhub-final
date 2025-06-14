import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Heart,
  Wine,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Shield,
  MessageCircle,
  Copy,
  Quote
} from 'lucide-react';

// Types
type Locale = 'en' | 'zh';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'scenarioSolutionsPage' });
  
  return {
    title: `${t('scenarios.social.title')} - ${t('title')}`,
    description: t('scenarios.social.description'),
  };
}

export default async function SocialScenarioPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const dateStrategies = [
    {
      phase: locale === 'zh' ? t('common.约会前准备') : 'Pre-Date Preparation',
      icon: <Clock className="w-5 h-5" />,
      strategies: [
        locale === 'zh' ? t('common.提前3天开始记录经期') : 'Start tracking period symptoms 3 days in advance',
        locale === 'zh' ? t('common.准备小巧应急包止痛药') : 'Prepare compact emergency kit: pain meds, sanitary products, wipes',
        locale === 'zh' ? t('common.选择深色服装准备外套') : 'Choose dark clothing, prepare jacket for coverage',
        locale === 'zh' ? t('common.提前查询约会地点附近') : 'Research restroom locations near date venue'
      ]
    },
    {
      phase: locale === 'zh' ? t('common.约会中应对') : 'During Date Management',
      icon: <Heart className="w-5 h-5" />,
      strategies: [
        locale === 'zh' ? t('common.借口策略t('common.需要补妆')、t('common.接个重要电话')' : 'Excuse strategies: "Need to touch up makeup", "Important call"',
        locale === 'zh' ? t('common.选择座位时考虑快速离') : 'Choose seating considering quick exit convenience',
        locale === 'zh' ? t('common.控制饮水量避免频繁如') : 'Control water intake, avoid frequent bathroom trips',
        locale === 'zh' ? t('common.选择舒适的活动看电影') : 'Choose comfortable activities: movies, dining, walking'
      ]
    },
    {
      phase: locale === 'zh' ? t('common.突发状况处理') : 'Emergency Situation Handling',
      icon: <AlertTriangle className="w-5 h-5" />,
      strategies: [
        locale === 'zh' ? t('common.轻度不适深呼吸适当表') : 'Mild discomfort: deep breathing, express need for brief rest',
        locale === 'zh' ? t('common.剧烈痛经诚实说明身体') : 'Severe cramps: honestly explain discomfort, suggest rescheduling',
        locale === 'zh' ? t('common.情绪波动通过调整呼吸') : 'Mood swings: relieve through breathing rhythm adjustment',
        locale === 'zh' ? t('common.应急离场启动t('common.过敏预案')或"突发工作"' : 'Emergency exit: activate "allergy plan" or "urgent work"'
      ]
    }
  ];

  const partyFoodGuide = {
    recommended: [
      {
        category: locale === 'zh' ? t('common.主食选择') : 'Main Food Choices',
        items: [
          locale === 'zh' ? t('common.烤鸡胸肉富含蛋白质和') : 'Grilled chicken breast (rich in protein and iron)',
          locale === 'zh' ? t('common.烤三文鱼抗炎omeg') : 'Grilled salmon (anti-inflammatory omega-3)',
          locale === 'zh' ? t('common.蔬菜沙拉补充维生素') : 'Vegetable salad (vitamin supplement)',
          locale === 'zh' ? t('common.全麦面包复合碳水化合') : 'Whole grain bread (complex carbohydrates)'
        ]
      },
      {
        category: locale === 'zh' ? t('common.饮品选择') : 'Beverage Choices',
        items: [
          locale === 'zh' ? t('common.热苹果醋苏打水缓解胀') : 'Hot apple cider vinegar soda (relieves bloating)',
          locale === 'zh' ? t('common.紫薯姜奶暖宫饮品') : 'Purple sweet potato ginger milk (warming drink)',
          locale === 'zh' ? t('common.无糖茶类抗氧化') : 'Sugar-free teas (antioxidant)',
          locale === 'zh' ? t('common.温开水保持水分') : 'Warm water (maintain hydration)'
        ]
      }
    ],
    avoid: [
      {
        category: locale === 'zh' ? t('common.高风险食物') : 'High-Risk Foods',
        items: [
          locale === 'zh' ? t('common.冰淇淋冷饮导致子宫收') : 'Ice cream, cold drinks (cause uterine contractions)',
          locale === 'zh' ? t('common.薯片炸鸡高盐高脂') : 'Chips, fried chicken (high salt, high fat)',
          locale === 'zh' ? t('common.奶油蛋糕高糖导致血糖') : 'Cream cake (high sugar causes blood sugar fluctuations)',
          locale === 'zh' ? t('common.辛辣食物刺激肠胃') : 'Spicy foods (irritate digestive system)'
        ]
      },
      {
        category: locale === 'zh' ? t('common.酒精管理') : 'Alcohol Management',
        items: [
          locale === 'zh' ? t('common.烈酒加重痛经症状') : 'Hard liquor (worsens menstrual symptoms)',
          locale === 'zh' ? t('common.大量酒精影响经血流量') : 'Large amounts of alcohol (affects menstrual flow)',
          locale === 'zh' ? t('common.空腹饮酒加重身体负担') : 'Drinking on empty stomach (increases body burden)',
          locale === 'zh' ? t('common.含咖啡因鸡尾酒刺激神') : 'Caffeinated cocktails (stimulate nerves)'
        ]
      }
    ]
  };

  const alcoholStrategies = [
    {
      strategy: locale === 'zh' ? t('common.医学级拒酒话术') : 'Medical-Grade Alcohol Refusal',
      excuse: locale === 'zh' ? 't('common.正在服用抗生素不能饮')' : '"Taking antibiotics, cannot drink alcohol"',
      effectiveness: '95%'
    },
    {
      strategy: locale === 'zh' ? t('common.无醇起泡酒伪装术') : 'Non-Alcoholic Sparkling Wine Disguise',
      excuse: locale === 'zh' ? t('common.提前与服务员密约用无') : 'Pre-arrange with server to substitute non-alcoholic drinks',
      effectiveness: '90%'
    },
    {
      strategy: locale === 'zh' ? t('common.驾驶责任借口') : 'Driving Responsibility Excuse',
      excuse: locale === 'zh' ? 't('common.今晚我是指定司机')' : '"I\'m the designated driver tonight"',
      effectiveness: '85%'
    },
    {
      strategy: locale === 'zh' ? t('common.健康生活方式') : 'Healthy Lifestyle',
      excuse: locale === 'zh' ? 't('common.最近在调理身体暂时戒')' : '"Recently focusing on health, temporarily abstaining from alcohol"',
      effectiveness: '80%t('common.社交沟通模板c')zh' ? '与伴侣沟通' : 'Communicating with Partner',
      icon: '💕',
      userQuote: locale === 'zh' ? 't('common.本来约了喜欢的人吃饭')' : '"I had a dinner date with someone I like, but the pain made me completely lose interest, so I had to cancel. I feel like I missed an opportunity..."',
      templates: [
        {
          situation: locale === 'zh' ? t('common.约会改期') : 'Rescheduling Date',
          tone: locale === 'zh' ? t('common.温柔') : 'Gentle',
          template: locale === 'zh' ? 't('common.不好意思我今天身体有')' : '"Sorry, I\'m not feeling well today and might not be at my best. Can we reschedule? I\'m really looking forward to seeing you."',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        },
        {
          situation: locale === 'zh' ? t('common.寻求支持') : 'Seeking Support',
          tone: locale === 'zh' ? t('common.亲密') : 'Intimate',
          template: locale === 'zh' ? 't('common.我现在有些疼痛可能情')' : '"I\'m experiencing some pain and my emotions might fluctuate. Can you understand and give me some warm companionship?"',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.与朋友沟通') : 'Communicating with Friends',
      icon: '👭',
      userQuote: locale === 'zh' ? 't('common.参加朋友聚会担心突然')' : '"I\'m worried about sudden stomach pain at a friend\'s party, and I can\'t just lie down like at home. I\'m torn about whether to go."',
      templates: [
        {
          situation: locale === 'zh' ? t('common.聚会参与') : 'Party Participation',
          tone: locale === 'zh' ? t('common.随意') : 'Casual',
          template: locale === 'zh' ? 't('common.我可能会来聚会但可能')' : '"I might come to the party but may need to leave early or take breaks. If I look tired, please understand."',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        },
        {
          situation: locale === 'zh' ? t('common.寻求支持') : 'Seeking Support',
          tone: locale === 'zh' ? t('common.随意') : 'Casual',
          template: locale === 'zh' ? 't('common.姐妹我现在经期痛得厉')' : '"Girl, I\'m having severe period pain right now. Do you have any good relief methods? Or just chat with me would be nice."',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.会议参与') : 'Meeting Participation',
      icon: '🤝',
      userQuote: locale === 'zh' ? 't('common.我可能需要会议中途离')' : '"I might need to leave the meeting briefly, but I don\'t want everyone to think I\'m unprofessional..."',
      templates: [
        {
          situation: locale === 'zh' ? t('common.会议参与') : 'Meeting Participation',
          tone: locale === 'zh' ? t('common.正式') : 'Formal',
          template: locale === 'zh' ? 't('common.我可能需要会议中途离')' : '"I might need to step out briefly to handle urgent matters. If there\'s important content, please help me take notes. Thank you for your understanding."',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        },
        {
          situation: locale === 'zh' ? t('common.寻求支持') : 'Seeking Support',
          tone: locale === 'zh' ? t('common.正式') : 'Formal',
          template: locale === 'zh' ? 't('common.我今天身体有些不适可')' : '"I\'m feeling unwell today and it might affect my participation. If there\'s content I need to focus on, please remind me."',
          copyText: locale === 'zh' ? t('common.复制文本') : 'Copy Text'
        }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-neutral-600">
        <Link href={`/${locale}/scenario-solutions`} className="hover:text-primary-600 transition-colors">
          {t('title')}
        </Link>
        <span>/</span>
        <span className="text-neutral-800">{t('scenarios.social.title')}</span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {t('scenarios.social.title')}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {t('scenarios.social.description')}
        </p>
      </header>

      {/* Date Strategies Section */}
      <section className="bg-gradient-to-br from-pink-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <Heart className="w-6 h-6 text-pink-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.约会应急策略') : 'Date Emergency Strategies'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {dateStrategies.map((phase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-3">
                  {phase.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800">
                  {phase.phase}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {phase.strategies.map((strategy, strategyIndex) => (
                  <li key={strategyIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Party Food Guide Section */}
      <section>
        <div className="flex items-center mb-6">
          <Wine className="w-6 h-6 text-pink-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.聚会饮食智能选择') : 'Smart Party Food Choices'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              {locale === 'zh' ? t('common.推荐选择') : 'Recommended Choices'}
            </h3>
            {partyFoodGuide.recommended.map((category, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-medium text-green-800 mb-3">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">
              {locale === 'zh' ? t('common.避免选择') : 'Avoid These Choices'}
            </h3>
            {partyFoodGuide.avoid.map((category, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-medium text-red-800 mb-3">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-red-700">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alcohol Management Section */}
      <section>
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-pink-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.酒精应对手册') : 'Alcohol Management Handbook'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alcoholStrategies.map((strategy, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {strategy.strategy}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {locale === 'zh' ? t('common.成功率') : 'Success Rate'} {strategy.effectiveness}
                </span>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">
                  {locale === 'zh' ? t('common.话术示例') : 'Script Example:'}
                </p>
                <p className="text-blue-700 italic">"{strategy.excuse}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Communication Templates Section */}
      <section>
        <div className="flex items-center mb-6">
          <MessageCircle className="w-6 h-6 text-pink-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.社交沟通助手') : 'Social Communication Assistant'}
          </h2>
        </div>
        <p className="text-neutral-600 mb-8">
          {locale === 'zh' ? t('common.经期不适时如何与不同') : 'How to communicate effectively with different people during menstrual discomfort to gain understanding and support.'}
        </p>

        <div className="space-y-8">
          {socialCommunicationTemplates.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-neutral-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-neutral-800">
                  {category.scenario}
                </h3>
              </div>

              {/* User Quote */}
              <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-pink-300">
                <div className="flex items-start">
                  <Quote className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-700 italic text-sm leading-relaxed">
                    {category.userQuote}
                  </p>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  {locale === 'zh' ? t('common.来自用户语录') : '—— From user testimonials'}
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                {category.templates.map((template, templateIndex) => (
                  <div key={templateIndex} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-neutral-800">{template.situation}</h4>
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded-full">
                        {template.tone}
                      </span>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <p className="text-pink-800 leading-relaxed">
                        {template.template}
                      </p>
                    </div>

                    <div className="inline-flex items-center text-pink-600 text-sm font-medium">
                      <Copy className="w-4 h-4 mr-1" />
                      <span className="text-xs text-neutral-500">
                        {locale === 'zh' ? t('common.可复制使用') : 'Copy to use'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">
            {locale === 'zh' ? t('common.使用提示') : 'Usage Tips'}
          </h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• {locale === 'zh' ? t('common.根据关系亲密度选择合') : 'Choose appropriate communication style based on relationship intimacy'}</li>
            <li>• {locale === 'zh' ? t('common.诚实表达需求但无需过') : 'Express needs honestly without over-explaining'}</li>
            <li>• {locale === 'zh' ? t('common.提前准备话术避免临时') : 'Prepare scripts in advance to avoid last-minute nervousness'}</li>
          </ul>
        </div>
      </section>

      {/* Back to Overview */}
      <div className="text-center">
        <Link
          href={`/${locale}/scenario-solutions`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {locale === 'zh' ? t('common.返回场景解决方案总览') : 'Back to Scenario Solutions Overview'}
        </Link>
      </div>
    </div>
  );
}
