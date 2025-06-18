'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Briefcase, Clock, Coffee, Users, MessageSquare, Utensils } from 'lucide-react';

export default function OfficeScenarioPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 办公室应急包清单
  const emergencyKit = [
    {
      category: locale === 'zh' ? '基础用品' : 'Basic Supplies',
      items: [
        locale === 'zh' ? '卫生巾/棉条（2-3片）' : 'Sanitary pads/tampons (2-3 pieces)',
        locale === 'zh' ? '湿巾（无香型）' : 'Wet wipes (unscented)',
        locale === 'zh' ? '一次性内裤' : 'Disposable underwear',
        locale === 'zh' ? '小包装垃圾袋' : 'Small garbage bags'
      ]
    },
    {
      category: locale === 'zh' ? '疼痛缓解' : 'Pain Relief',
      items: [
        locale === 'zh' ? '布洛芬（2粒装）' : 'Ibuprofen (2 tablets)',
        locale === 'zh' ? '暖宫贴（薄款）' : 'Heating patches (thin)',
        locale === 'zh' ? '薄荷膏（太阳穴按摩）' : 'Mint balm (temple massage)',
        locale === 'zh' ? '压缩毛巾' : 'Compressed towel'
      ]
    },
    {
      category: locale === 'zh' ? '隐蔽工具' : 'Discreet Tools',
      items: [
        locale === 'zh' ? '小镜子' : 'Small mirror',
        locale === 'zh' ? '免洗洗手液' : 'Hand sanitizer',
        locale === 'zh' ? '口香糖' : 'Chewing gum',
        locale === 'zh' ? '备用袜子' : 'Spare socks'
      ]
    }
  ];

  // 办公椅拉伸动作
  const chairStretches = [
    {
      name: locale === 'zh' ? '腰部旋转' : 'Waist Rotation',
      duration: locale === 'zh' ? '30秒' : '30 seconds',
      description: locale === 'zh' ? '坐在椅子上，双手放在腰间，缓慢左右旋转腰部' : 'Sit in chair, hands on waist, slowly rotate waist left and right',
      benefits: locale === 'zh' ? '缓解下腰部紧张，促进血液循环' : 'Relieves lower back tension, promotes blood circulation'
    },
    {
      name: locale === 'zh' ? '肩膀放松' : 'Shoulder Relaxation',
      duration: locale === 'zh' ? '1分钟' : '1 minute',
      description: locale === 'zh' ? '双肩向后画圆，然后向前画圆，配合深呼吸' : 'Roll shoulders backward in circles, then forward, with deep breathing',
      benefits: locale === 'zh' ? '减轻肩颈压力，改善上身血流' : 'Reduces shoulder and neck pressure, improves upper body blood flow'
    },
    {
      name: locale === 'zh' ? '脊柱伸展' : 'Spinal Stretch',
      duration: locale === 'zh' ? '45秒' : '45 seconds',
      description: locale === 'zh' ? '双手向上伸展，然后慢慢向左右两侧弯曲' : 'Stretch arms upward, then slowly bend to left and right sides',
      benefits: locale === 'zh' ? '拉伸脊柱，缓解背部僵硬' : 'Stretches spine, relieves back stiffness'
    }
  ];

  // 职场饮食管理
  const nutritionPlan = [
    {
      time: locale === 'zh' ? '早餐 (8:00)' : 'Breakfast (8:00)',
      foods: locale === 'zh' ? '燕麦粥+香蕉+核桃' : 'Oatmeal + banana + walnuts',
      benefits: locale === 'zh' ? '提供持续能量，富含镁元素缓解痉挛' : 'Provides sustained energy, rich in magnesium to relieve cramps'
    },
    {
      time: locale === 'zh' ? '上午茶 (10:30)' : 'Morning Tea (10:30)',
      foods: locale === 'zh' ? '红枣茶+全麦饼干' : 'Red date tea + whole wheat crackers',
      benefits: locale === 'zh' ? '补血养气，稳定血糖' : 'Nourishes blood and qi, stabilizes blood sugar'
    },
    {
      time: locale === 'zh' ? '午餐 (12:00)' : 'Lunch (12:00)',
      foods: locale === 'zh' ? '瘦肉+绿叶蔬菜+糙米饭' : 'Lean meat + leafy vegetables + brown rice',
      benefits: locale === 'zh' ? '补充铁质和蛋白质，维持体力' : 'Supplements iron and protein, maintains energy'
    },
    {
      time: locale === 'zh' ? '下午茶 (15:00)' : 'Afternoon Tea (15:00)',
      foods: locale === 'zh' ? '黑巧克力+温牛奶' : 'Dark chocolate + warm milk',
      benefits: locale === 'zh' ? '缓解情绪波动，补充镁元素' : 'Relieves mood swings, supplements magnesium'
    }
  ];

  // 沟通模板数据
  const communicationTemplates = [
    {
      scenario: locale === 'zh' ? '与同事沟通' : 'Communicating with Colleagues',
      icon: '👔',
      templates: [
        {
          situation: locale === 'zh' ? '请假申请' : 'Leave Request',
          tone: locale === 'zh' ? '正式' : 'Formal',
          template: locale === 'zh' ? '"您好，我今天身体不太舒服，可能需要请半天假处理健康问题。其他事务我会尽快处理。"' : '"Hello, I\'m not feeling well today and may need to take half a day off to address health issues. I\'ll handle other matters as soon as possible."',
          copyText: locale === 'zh' ? '复制文本' : 'Copy Text'
        },
        {
          situation: locale === 'zh' ? '工作调整' : 'Work Adjustment',
          tone: locale === 'zh' ? '正式' : 'Formal',
          template: locale === 'zh' ? '"不好意思，我今天身体有些不适，工作效率可能会受影响。请优先处理紧急事务，其他任务我会尽快完成。"' : '"Sorry, I\'m feeling unwell today and my work efficiency might be affected. Please prioritize urgent matters, and I\'ll complete other tasks as soon as possible."',
          copyText: locale === 'zh' ? '复制文本' : 'Copy Text'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? '与上司沟通' : 'Communicating with Supervisor',
      icon: '👨‍💼',
      templates: [
        {
          situation: locale === 'zh' ? '会议调整' : 'Meeting Adjustment',
          tone: locale === 'zh' ? '专业' : 'Professional',
          template: locale === 'zh' ? '"抱歉，由于健康原因，我今天可能无法参加长时间会议。能否安排电话会议或者改期？"' : '"Sorry, due to health reasons, I may not be able to attend long meetings today. Could we arrange a phone meeting or reschedule?"',
          copyText: locale === 'zh' ? '复制文本' : 'Copy Text'
        }
      ]
    }
  ];

  // 穴位按压技巧
  const acupressurePoints = [
    {
      name: locale === 'zh' ? '合谷穴' : 'Hegu Point',
      location: locale === 'zh' ? '虎口处，拇指和食指之间' : 'Tiger mouth area, between thumb and index finger',
      benefits: locale === 'zh' ? '疏肝理气，活血化瘀，缓解全身疼痛' : 'Soothes liver qi, promotes blood circulation, relieves general pain',
      technique: locale === 'zh' ? '用另一只手的拇指按压，力度适中，每次1-2分钟' : 'Press with thumb of other hand, moderate pressure, 1-2 minutes each time',
      officeUse: locale === 'zh' ? '可在开会时悄悄进行，不会被察觉' : 'Can be done discreetly during meetings without being noticed'
    },
    {
      name: locale === 'zh' ? '三阴交穴' : 'Sanyinjiao Point',
      location: locale === 'zh' ? '小腿内侧，踝关节上三寸' : 'Inner side of lower leg, three fingers above ankle',
      benefits: locale === 'zh' ? '调理气血，专门缓解妇科疼痛' : 'Regulates qi and blood, specifically relieves gynecological pain',
      technique: locale === 'zh' ? '用拇指按压，配合深呼吸，每次1-2分钟' : 'Press with thumb, coordinate with deep breathing, 1-2 minutes each time',
      officeUse: locale === 'zh' ? '可在桌下进行，脱掉鞋子按压效果更好' : 'Can be done under desk, better effect when shoes are removed'
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
              {locale === 'zh' ? '办公/职场场景' : 'Office/Workplace Scenarios'}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '办公/职场场景解决方案' : 'Office/Workplace Scenario Solutions'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '在专业工作环境中优雅地管理经期不适，保持职业形象的同时照顾好自己' : 'Gracefully manage menstrual discomfort in professional work environments while maintaining your professional image and taking care of yourself'}
          </p>
        </div>

        {/* 办公室应急包 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '办公室应急包清单' : 'Office Emergency Kit Checklist'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyKit.map((category, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">{index + 1}</span>
                  </span>
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 办公椅拉伸 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '办公椅拉伸动作' : 'Office Chair Stretches'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {chairStretches.map((stretch, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {stretch.name}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {stretch.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {stretch.description}
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 text-xs">
                    <strong>{locale === 'zh' ? '功效：' : 'Benefits: '}</strong>
                    {stretch.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 职场饮食管理 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Utensils className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '职场饮食管理' : 'Workplace Nutrition Management'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nutritionPlan.map((meal, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Coffee className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {meal.time}
                  </h3>
                </div>
                <p className="text-gray-700 mb-2 font-medium">
                  {meal.foods}
                </p>
                <p className="text-sm text-gray-600">
                  {meal.benefits}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 沟通模板 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '职场沟通模板' : 'Workplace Communication Templates'}
            </h2>
          </div>

          <div className="space-y-8">
            {communicationTemplates.map((category, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.scenario}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.templates.map((template, templateIndex) => (
                    <div key={templateIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-800">{template.situation}</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                          {template.tone}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-700 italic">
                          {template.template}
                        </p>
                      </div>
                      <button className="text-xs text-purple-600 hover:text-purple-800 transition-colors">
                        {template.copyText}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 穴位按压技巧 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '隐蔽穴位按压技巧' : 'Discreet Acupressure Techniques'}
            </h2>
          </div>

          <div className="space-y-6">
            {acupressurePoints.map((point, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.name}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {locale === 'zh' ? '位置：' : 'Location:'}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{point.location}</p>

                    <h4 className="font-medium text-gray-800 mb-2">
                      {locale === 'zh' ? '按压方法：' : 'Technique:'}
                    </h4>
                    <p className="text-gray-600 text-sm">{point.technique}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">
                      {locale === 'zh' ? '功效：' : 'Benefits:'}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{point.benefits}</p>

                    <div className="bg-red-50 rounded-lg p-3">
                      <h4 className="font-medium text-red-800 mb-2">
                        {locale === 'zh' ? '办公室使用技巧：' : 'Office Usage Tips:'}
                      </h4>
                      <p className="text-red-700 text-sm">{point.officeUse}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 专业提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">💼</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '职场健康管理提醒' : 'Workplace Health Management Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '在职场环境中，保持专业形象的同时照顾好自己的健康同样重要。不要因为工作压力而忽视身体的需求。如果疼痛严重影响工作效率，建议及时寻求医疗帮助。记住，健康的身体是职业成功的基础。' :
                  'In the workplace environment, maintaining a professional image while taking care of your health is equally important. Don\'t ignore your body\'s needs due to work pressure. If pain seriously affects work efficiency, seek medical help promptly. Remember, a healthy body is the foundation of professional success.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
