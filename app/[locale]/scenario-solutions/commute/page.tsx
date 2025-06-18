'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Car, Bus, Train, Clock, MapPin, AlertTriangle } from 'lucide-react';

export default function CommuteScenarioPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 公共交通应对策略
  const publicTransportStrategies = [
    {
      transport: locale === 'zh' ? '地铁/轻轨' : 'Subway/Light Rail',
      icon: <Train className="w-6 h-6" />,
      strategies: [
        locale === 'zh' ? '选择女性专用车厢（如有）' : 'Choose women-only cars (if available)',
        locale === 'zh' ? '携带折叠式小凳子，站立时可支撑' : 'Carry foldable stool for support when standing',
        locale === 'zh' ? '使用手机应用查找最近的洗手间' : 'Use mobile apps to find nearest restrooms',
        locale === 'zh' ? '准备薄荷油，涂抹太阳穴缓解头痛' : 'Prepare mint oil, apply to temples for headache relief'
      ],
      emergencyTips: locale === 'zh' ? '如果突然疼痛加剧，可以按压手腕内侧的内关穴' : 'If pain suddenly intensifies, press the Neiguan point on inner wrist'
    },
    {
      transport: locale === 'zh' ? '公交车' : 'Bus',
      icon: <Bus className="w-6 h-6" />,
      strategies: [
        locale === 'zh' ? '选择靠近前门的座位，方便下车' : 'Choose seats near front door for easy exit',
        locale === 'zh' ? '携带小枕头或靠垫支撑腰部' : 'Carry small pillow or cushion for lower back support',
        locale === 'zh' ? '提前下载离线地图，避免错过站点' : 'Download offline maps to avoid missing stops',
        locale === 'zh' ? '准备塑料袋，以防恶心呕吐' : 'Prepare plastic bags in case of nausea'
      ],
      emergencyTips: locale === 'zh' ? '感到不适时，可以请求司机在安全地点临时停车' : 'When feeling unwell, request driver to stop temporarily at safe location'
    }
  ];

  // 自驾调整建议
  const drivingAdjustments = [
    {
      category: locale === 'zh' ? '座椅调整' : 'Seat Adjustment',
      adjustments: [
        locale === 'zh' ? '将座椅稍微向后倾斜，减少腹部压力' : 'Slightly recline seat to reduce abdominal pressure',
        locale === 'zh' ? '在腰部放置小枕头提供支撑' : 'Place small pillow at lower back for support',
        locale === 'zh' ? '调整后视镜，减少转头频率' : 'Adjust mirrors to reduce head turning frequency'
      ]
    },
    {
      category: locale === 'zh' ? '驾驶技巧' : 'Driving Techniques',
      adjustments: [
        locale === 'zh' ? '避免急刹车和急转弯' : 'Avoid sudden braking and sharp turns',
        locale === 'zh' ? '保持匀速行驶，减少颠簸' : 'Maintain steady speed to reduce jolting',
        locale === 'zh' ? '每30分钟停车休息一次' : 'Stop for rest every 30 minutes'
      ]
    },
    {
      category: locale === 'zh' ? '车内准备' : 'In-Car Preparation',
      adjustments: [
        locale === 'zh' ? '准备暖宫贴贴在座椅上' : 'Prepare heating patches on seat',
        locale === 'zh' ? '携带温水和止痛药' : 'Carry warm water and pain medication',
        locale === 'zh' ? '播放舒缓音乐减轻压力' : 'Play soothing music to reduce stress'
      ]
    }
  ];

  // 时间管理策略
  const timeManagement = [
    {
      phase: locale === 'zh' ? '出发前30分钟' : '30 Minutes Before Departure',
      actions: [
        locale === 'zh' ? '服用止痛药（如需要）' : 'Take pain medication (if needed)',
        locale === 'zh' ? '贴上暖宫贴' : 'Apply heating patches',
        locale === 'zh' ? '检查应急包物品' : 'Check emergency kit items',
        locale === 'zh' ? '查看路线和洗手间位置' : 'Check route and restroom locations'
      ]
    },
    {
      phase: locale === 'zh' ? '通勤途中' : 'During Commute',
      actions: [
        locale === 'zh' ? '保持深呼吸，放松身体' : 'Maintain deep breathing, relax body',
        locale === 'zh' ? '适时按压缓解穴位' : 'Press relief acupoints when appropriate',
        locale === 'zh' ? '避免看手机，减少眼部疲劳' : 'Avoid looking at phone to reduce eye strain',
        locale === 'zh' ? '注意身体信号，及时调整' : 'Pay attention to body signals, adjust promptly'
      ]
    },
    {
      phase: locale === 'zh' ? '到达后' : 'After Arrival',
      actions: [
        locale === 'zh' ? '立即寻找洗手间' : 'Immediately find restroom',
        locale === 'zh' ? '做简单拉伸运动' : 'Do simple stretching exercises',
        locale === 'zh' ? '补充温水' : 'Replenish warm water',
        locale === 'zh' ? '评估身体状况' : 'Assess physical condition'
      ]
    }
  ];

  // 通勤穴位按压
  const commuteAcupressure = [
    {
      name: locale === 'zh' ? '内关穴' : 'Neiguan Point',
      location: locale === 'zh' ? '手腕内侧，距离手腕横纹三指宽' : 'Inner wrist, three fingers width from wrist crease',
      benefits: locale === 'zh' ? '缓解恶心、胸闷，调节心率' : 'Relieves nausea, chest tightness, regulates heart rate',
      technique: locale === 'zh' ? '用拇指按压，每次30秒，可重复进行' : 'Press with thumb, 30 seconds each time, can repeat',
      commuteUse: locale === 'zh' ? '在任何交通工具上都可以悄悄进行' : 'Can be done discreetly on any mode of transport',
      userQuote: locale === 'zh' ? '每次坐地铁时按压这个穴位，恶心感明显减轻了。' : 'Pressing this point during subway rides significantly reduces my nausea.'
    },
    {
      name: locale === 'zh' ? '足三里穴' : 'Zusanli Point',
      location: locale === 'zh' ? '小腿外侧，膝盖下四指宽处' : 'Outer side of lower leg, four fingers below knee',
      benefits: locale === 'zh' ? '增强体力，缓解疲劳，调理脾胃' : 'Enhances energy, relieves fatigue, regulates spleen and stomach',
      technique: locale === 'zh' ? '用拇指画圆按摩，每次1-2分钟' : 'Massage in circles with thumb, 1-2 minutes each time',
      commuteUse: locale === 'zh' ? '适合在座位上进行，可以缓解长途通勤疲劳' : 'Suitable for doing in seat, relieves long commute fatigue',
      userQuote: locale === 'zh' ? '长途通勤时按摩这里，到达目的地时不会那么累。' : 'Massaging here during long commutes, I\'m not as tired when I arrive.'
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
              {locale === 'zh' ? '通勤场景' : 'Commute Scenarios'}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '通勤场景解决方案' : 'Commute Scenario Solutions'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '在通勤路上遇到经期不适时的应对策略，让您安全舒适地到达目的地' : 'Coping strategies for menstrual discomfort during commute, ensuring you arrive safely and comfortably at your destination'}
          </p>
        </div>

        {/* 公共交通应对策略 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Bus className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '公共交通应对策略' : 'Public Transport Coping Strategies'}
            </h2>
          </div>

          <div className="space-y-6">
            {publicTransportStrategies.map((strategy, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {strategy.transport}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      {locale === 'zh' ? '应对策略：' : 'Coping Strategies:'}
                    </h4>
                    <ul className="space-y-2">
                      {strategy.strategies.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      <h4 className="font-medium text-yellow-800">
                        {locale === 'zh' ? '紧急应对：' : 'Emergency Response:'}
                      </h4>
                    </div>
                    <p className="text-yellow-700 text-sm">{strategy.emergencyTips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 自驾调整建议 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Car className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '自驾调整建议' : 'Driving Adjustment Recommendations'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {drivingAdjustments.map((category, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.adjustments.map((adjustment, adjustmentIndex) => (
                    <li key={adjustmentIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{adjustment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 时间管理策略 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '通勤时间管理' : 'Commute Time Management'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timeManagement.map((phase, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {phase.phase}
                </h3>
                <ul className="space-y-3">
                  {phase.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start">
                      <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                        {actionIndex + 1}
                      </span>
                      <span className="text-sm text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 通勤穴位按压 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '通勤穴位按压技巧' : 'Commute Acupressure Techniques'}
            </h2>
          </div>

          <div className="space-y-8">
            {commuteAcupressure.map((point, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.name}
                </h3>

                {/* 用户语录 */}
                <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-green-300">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">"</span>
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      {point.userQuote}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {locale === 'zh' ? '—— 来自用户语录' : '—— From user testimonials'}
                  </p>
                </div>

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

                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-medium text-green-800 mb-2">
                        {locale === 'zh' ? '通勤使用技巧：' : 'Commute Usage Tips:'}
                      </h4>
                      <p className="text-green-700 text-sm">{point.commuteUse}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 安全提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '通勤安全提醒' : 'Commute Safety Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '通勤途中如果疼痛严重，不要勉强坚持。可以考虑改变路线寻找最近的医疗机构，或者联系家人朋友寻求帮助。驾车时如果感到不适，应立即在安全地点停车休息。您的安全比准时到达更重要。' :
                  'If you experience severe pain during commute, don\'t force yourself to continue. Consider changing route to find nearest medical facility, or contact family and friends for help. When driving, if you feel unwell, immediately stop at a safe location to rest. Your safety is more important than arriving on time.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
