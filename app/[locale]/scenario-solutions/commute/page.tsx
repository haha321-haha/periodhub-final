import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Car,
  Train,
  Bus,
  Bike,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Clock,
  MapPin,
  Shield,
  Hand,
  Wind,
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
    title: `${t('scenarios.commute.title')} - ${t('title')}`,
    description: t('scenarios.commute.description'),
  };
}

export default async function CommuteScenarioPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const emergencyKit = [
    {
      item: locale === 'zh' ? t('common.隐形热敷系统') : 'Invisible Heat System',
      description: locale === 'zh' ? t('common.可粘贴暖宝宝Ther') : 'Adhesive heat patches (ThermaCare invisible patches)',
      usage: locale === 'zh' ? t('common.贴在腹部或腰部持续发') : 'Apply to abdomen or lower back, continuous heat for 6 hours'
    },
    {
      item: locale === 'zh' ? t('common.迷你电热护腰') : 'Mini Electric Heating Pad',
      description: locale === 'zh' ? t('common.USB充电款会议中可') : 'USB rechargeable, wearable during meetings',
      usage: locale === 'zh' ? t('common.隐蔽穿戴温度可调节') : 'Discreet wear, adjustable temperature'
    },
    {
      item: locale === 'zh' ? t('common.姜茶冲剂条') : 'Ginger Tea Sachets',
      description: locale === 'zh' ? t('common.无糖配方30秒速溶') : 'Sugar-free formula, dissolves in 30 seconds',
      usage: locale === 'zh' ? t('common.用温水冲泡缓解痉挛') : 'Mix with warm water, relieves cramps'
    },
    {
      item: locale === 'zh' ? t('common.穴位按摩工具') : 'Acupressure Tools',
      description: locale === 'zh' ? t('common.内关穴按摩戒指隐形设') : 'Neiguan point massage ring (invisible design)',
      usage: locale === 'zh' ? t('common.单手操作隐蔽按压') : 'One-handed operation, discreet pressure'
    }
  ];

  const transportStrategies = [
    {
      type: locale === 'zh' ? t('common.地铁公交') : 'Subway/Bus',
      icon: <Train className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
      strategies: [
        locale === 'zh' ? t('common.选择中间车厢减少加减') : 'Choose middle cars (reduce acceleration/deceleration impact)',
        locale === 'zh' ? t('common.优先座智能申请经期电') : 'Priority seat smart application (period electronic certificate)',
        locale === 'zh' ? t('common.靠墙骨盆支撑法微屈膝') : 'Wall pelvic support method: slightly bend knees against carriage wall',
        locale === 'zh' ? t('common.佩戴降噪耳机播放43') : 'Wear noise-canceling headphones with 432Hz pain relief audio'
      ]
    },
    {
      type: locale === 'zh' ? t('common.自驾出行') : 'Self-Driving',
      icon: <Car className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600',
      strategies: [
        locale === 'zh' ? t('common.座椅加热腰椎气垫每3') : 'Seat heating + lumbar air cushion (auto inflate/deflate every 30 min)',
        locale === 'zh' ? t('common.方向盘生命体征监测') : 'Steering wheel vital signs monitoring',
        locale === 'zh' ? t('common.车载迷你微波炉加热暖') : 'Car mini microwave (heat warming patches)',
        locale === 'zh' ? t('common.避免疼痛时强行驾驶反') : 'Avoid forced driving during pain (reaction speed decreases 30%)'
      ]
    },
    {
      type: locale === 'zh' ? t('common.共享单车') : 'Bike Sharing',
      icon: <Bike className="w-6 h-6" />,
      color: 'bg-orange-50 text-orange-600',
      strategies: [
        locale === 'zh' ? t('common.硅胶坐垫套减震恒温') : 'Silicone seat cover (shock absorption + constant temperature)',
        locale === 'zh' ? t('common.束腹带稳定核心防骑行') : 'Abdominal belt for core stability (prevent riding sway)',
        locale === 'zh' ? t('common.单次不超过20分钟中') : 'No more than 20 minutes per session, rest in between',
        locale === 'zh' ? t('common.调整座椅高度减少会阴') : 'Adjust seat height to reduce perineal pressure'
      ]
    },
    {
      type: locale === 'zh' ? t('common.网约车出租车') : 'Ride-hailing/Taxi',
      icon: <Bus className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
      strategies: [
        locale === 'zh' ? t('common.座椅加热等级设定通过') : 'Seat heating level setting (send instructions via app in advance)',
        locale === 'zh' ? t('common.空气净化模式过滤PM') : 'Air purification mode (filter PM2.5 and volatile substances)',
        locale === 'zh' ? t('common.选择t('common.舒适型t('common.车型空间宽敞') : 'Choose "comfort" vehicle type (spacious)',
        locale === 'zh' ? t('common.使用t('common.医疗紧急模式t('common.部分APP支持') : 'Use "medical emergency mode" (supported by some apps)'
      ]
    }
  ];

  const timeManagement = [
    {
      phase: locale === 'zh' ? t('common.出发前20分钟') : '20 Minutes Before Departure',
      actions: [
        locale === 'zh' ? t('common.饮用300ml生姜肉') : 'Drink 300ml ginger cinnamon beverage',
        locale === 'zh' ? t('common.贴敷远红外暖宫贴持续') : 'Apply far-infrared warming patches (6-hour continuous heat)',
        locale === 'zh' ? t('common.服用止痛药提前服用更') : 'Take pain medication (more effective when taken in advance)'
      ]
    },
    {
      phase: locale === 'zh' ? t('common.通勤途中') : 'During Commute',
      actions: [
        locale === 'zh' ? t('common.单脚踩台阶形成骨盆倾') : 'Step on platform with one foot to create pelvic tilt (relieves back pain)',
        locale === 'zh' ? t('common.手拉吊环时轻微拉伸侧') : 'Gently stretch side waist muscles when holding handrails',
        locale === 'zh' ? t('common.478呼吸法吸气4秒') : '4-7-8 breathing: inhale 4 sec → hold 7 sec → exhale 8 sec'
      ]
    },
    {
      phase: locale === 'zh' ? t('common.到达后10分钟') : '10 Minutes After Arrival',
      actions: [
        locale === 'zh' ? t('common.进行3分钟骨盆复位操') : 'Perform 3-minute pelvic reset exercises',
        locale === 'zh' ? t('common.靠墙深蹲激活臀肌') : 'Wall squats (activate glutes)',
        locale === 'zh' ? t('common.脊柱逐节伸展改善循环') : 'Spinal segmental stretching (improve circulation)'
      ]
    }
  ];

  const emergencyPlans = [
    {
      situation: locale === 'zh' ? t('common.突发疼痛升级') : 'Sudden Pain Escalation',
      solutions: [
        locale === 'zh' ? t('common.地铁公交启动t('common.假装低血糖t('common.预案') : 'Subway/Bus: Activate "fake hypoglycemia" plan',
        locale === 'zh' ? t('common.含服葡萄糖片请求让座') : 'Take glucose tablets + request seat',
        locale === 'zh' ? t('common.网约车使用t('common.医疗紧急模式')' : 'Ride-hailing: Use "medical emergency mode"'
      ]
    },
    {
      situation: locale === 'zh' ? t('common.卫生用品短缺') : 'Sanitary Product Shortage',
      solutions: [
        locale === 'zh' ? t('common.便利店速购向店员出示')Code Redt('common.手势') : 'Convenience store quick purchase: Show "Code Red" gesture to clerk',
        locale === 'zh' ? t('common.共享卫生巾机地图导航') : 'Shared sanitary pad machine: Navigate to nearest location',
        locale === 'zh' ? t('common.参与商家提供免费应急') : 'Participating merchants provide free emergency kits'
      ]
    },
    {
      situation: locale === 'zh' ? t('common.衣物污染处理') : 'Clothing Contamination',
      solutions: [
        locale === 'zh' ? t('common.喷洒含酶预处理剂分解') : 'Spray enzyme pre-treatment agent (breaks down blood protein)',
        locale === 'zh' ? t('common.用冷水轻拍禁用热水') : 'Gently pat with cold water (no hot water!)',
        locale === 'zh' ? t('common.外套反系腰间时尚伪装') : 'Tie jacket around waist backwards (fashionable camouflage)t('common.通勤穴位按压技巧')zh' ? '合谷穴' : 'Hegu Point',
      location: locale === 'zh' ? '虎口处，拇指和食指之间' : 'Tiger mouth area, between thumb and index finger',
      benefits: locale === 'zh' ? t('common.疏肝理气活血化瘀通用') : 'Soothes liver qi, promotes blood circulation, highly versatile',
      technique: locale === 'zh' ? t('common.拇指或食指指腹点按揉') : 'Press and rub with thumb or index finger pad, moderate pressure',
      commuteUse: locale === 'zh' ? t('common.在包包下衣物遮挡下隐') : 'Perform discreetly under bag or clothing, use handrails or backrests for assistance',
      userQuote: locale === 'zh' ? 't('common.挤地铁已经够累了痛经')' : '"The subway is already exhausting, and when period pain hits, it\'s just adding insult to injury. I just want to get home and lie down."'
    },
    {
      name: locale === 'zh' ? t('common.内关穴') : 'Neiguan Point',
      location: locale === 'zh' ? t('common.手腕内侧距离腕横纹约') : 'Inner side of wrist, about three fingers width from wrist crease',
      benefits: locale === 'zh' ? t('common.缓解恶心心烦等伴随症') : 'Relieves nausea, irritability and other accompanying symptoms, regulates emotions',
      technique: locale === 'zh' ? t('common.用拇指按压可采用断续') : 'Press with thumb, can use intermittent or continuous pressure',
      commuteUse: locale === 'zh' ? t('common.可在握扶手时同时进行') : 'Can be done while holding handrails, very discreet',
      userQuote: locale === 'zh' ? 't('common.开车时肚子痛会影响注')' : '"Stomach pain while driving affects concentration and feels dangerous. But I can\'t just stop anywhere."'
    },
    {
      name: locale === 'zh' ? t('common.太冲穴') : 'Taichong Point',
      location: locale === 'zh' ? t('common.足背大脚趾和二脚趾之') : 'Top of foot, about one finger width up between big toe and second toe',
      benefits: locale === 'zh' ? t('common.疏肝理气行气止痛专门') : 'Soothes liver qi, promotes qi circulation and pain relief, specifically for mood swings',
      technique: locale === 'zh' ? t('common.脱掉鞋子用拇指按压配') : 'Remove shoes, press with thumb, coordinate with deep breathing',
      commuteUse: locale === 'zh' ? t('common.适合坐着时进行可在座') : 'Suitable when sitting, can quietly remove shoes and press while seated',
      userQuote: locale === 'zh' ? 't('common.在地铁里按了太冲穴感')' : '"Pressing Taichong point on the subway made me feel much calmer emotionally, and the pain was also reduced."t('common.驾车呼吸放松方法')zh' ? '方框呼吸法' : 'Box Breathing',
      description: locale === 'zh' ? '4-4-4-4节奏，帮助调节自主神经系统' : '4-4-4-4 rhythm, helps regulate autonomic nervous system',
      steps: [
        locale === 'zh' ? t('common.吸气4秒肚子鼓起') : 'Inhale 4 seconds (belly rises)',
        locale === 'zh' ? t('common.屏气4秒') : 'Hold breath 4 seconds',
        locale === 'zh' ? t('common.呼气4秒肚子收回') : 'Exhale 4 seconds (belly falls)',
        locale === 'zh' ? t('common.屏气4秒重复循环') : 'Hold breath 4 seconds, repeat cycle'
      ],
      benefits: locale === 'zh' ? t('common.降低心率和压力缓解肌') : 'Reduces heart rate and stress, relieves muscle tension',
      safetyTip: locale === 'zh' ? t('common.只在等红灯或安全停车') : 'Only practice fully when stopped at red lights or safely parked'
    },
    {
      name: locale === 'zh' ? t('common.腹式呼吸') : 'Diaphragmatic Breathing',
      description: locale === 'zh' ? t('common.专注于腹部起伏促进血') : 'Focus on abdominal movement, promotes blood circulation',
      steps: [
        locale === 'zh' ? t('common.一手放胸部一手放腹部') : 'One hand on chest, one hand on abdomen',
        locale === 'zh' ? t('common.吸气时腹部手上升胸部') : 'When inhaling, abdominal hand rises, chest hand stays still',
        locale === 'zh' ? t('common.呼气时腹部手下降') : 'When exhaling, abdominal hand falls',
        locale === 'zh' ? t('common.保持缓慢深长的呼吸节') : 'Maintain slow, deep breathing rhythm'
      ],
      benefits: locale === 'zh' ? t('common.增加氧气供应缓解腹部') : 'Increases oxygen supply, relieves abdominal cramps',
      safetyTip: locale === 'zh' ? t('common.可在驾驶中进行但注意') : 'Can be done while driving, but attention must remain on road conditions'
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
        <span className="text-neutral-800">{t('scenarios.commute.title')}</span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Car className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {t('scenarios.commute.title')}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {t('scenarios.commute.description')}
        </p>
      </header>

      {/* Emergency Kit Section */}
      <section className="bg-gradient-to-br from-green-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.通勤应急工具包') : 'Commute Emergency Kit'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {emergencyKit.map((kit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                {kit.item}
              </h3>
              <p className="text-neutral-600 mb-3">
                {kit.description}
              </p>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">{kit.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transport Strategies Section */}
      <section>
        <div className="flex items-center mb-6">
          <MapPin className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.交通方式适配策略') : 'Transport Mode Adaptation Strategies'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {transportStrategies.map((transport, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${transport.color} mr-4`}>
                  {transport.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800">
                  {transport.type}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {transport.strategies.map((strategy, strategyIndex) => (
                  <li key={strategyIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Time Management Section */}
      <section>
        <div className="flex items-center mb-6">
          <Clock className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.通勤时段管理指南') : 'Commute Time Management Guide'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {timeManagement.map((phase, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                {phase.phase}
              </h3>
              <ul className="space-y-3">
                {phase.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                      {actionIndex + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Plans Section */}
      <section>
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.极端情况应急预案') : 'Emergency Response Plans'}
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {emergencyPlans.map((plan, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-red-700 mb-4">
                {plan.situation}
              </h3>
              <ul className="space-y-3">
                {plan.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Acupressure Points Section */}
      <section>
        <div className="flex items-center mb-6">
          <Hand className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.地铁公交穴位按压技巧') : 'Subway/Bus Acupressure Techniques'}
          </h2>
        </div>
        <p className="text-neutral-600 mb-8">
          {locale === 'zh' ? t('common.在拥挤的空间里这些简') : 'In crowded spaces, these simple and easy-to-learn acupressure techniques can quickly relieve pain during commuting.'}
        </p>

        <div className="space-y-8">
          {commuteAcupressure.map((point, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-neutral-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                {point.name}
              </h3>

              {/* User Quote */}
              <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-green-300">
                <div className="flex items-start">
                  <Quote className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-700 italic text-sm leading-relaxed">
                    {point.userQuote}
                  </p>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  {locale === 'zh' ? t('common.来自用户语录') : '—— From user testimonials'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">
                      {locale === 'zh' ? t('common.位置') : 'Location:'}
                    </h4>
                    <p className="text-neutral-600 text-sm">{point.location}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">
                      {locale === 'zh' ? t('common.功效') : 'Benefits:'}
                    </h4>
                    <p className="text-neutral-600 text-sm">{point.benefits}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">
                      {locale === 'zh' ? t('common.按压方法') : 'Technique:'}
                    </h4>
                    <p className="text-neutral-600 text-sm">{point.technique}</p>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-1 text-sm">
                      {locale === 'zh' ? t('common.通勤应用') : 'Commute Application:'}
                    </h4>
                    <p className="text-green-700 text-sm">{point.commuteUse}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Driving Breathing Techniques Section */}
      <section>
        <div className="flex items-center mb-6">
          <Wind className="w-6 h-6 text-green-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.驾车场景呼吸放松方法') : 'Driving Breathing Relaxation Methods'}
          </h2>
        </div>
        <p className="text-neutral-600 mb-8">
          {locale === 'zh' ? t('common.开车需要高度专注经期') : 'Driving requires high concentration, and period pain can be distracting. Learn these simple breathing techniques to help relieve discomfort while driving and ensure safety.'}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {drivingBreathingTechniques.map((technique, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                {technique.name}
              </h3>

              <p className="text-neutral-600 mb-4 text-sm">
                {technique.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-neutral-700 mb-2 text-sm">
                  {locale === 'zh' ? t('common.步骤') : 'Steps:'}
                </h4>
                <ol className="space-y-2">
                  {technique.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start text-sm text-neutral-700">
                      <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-neutral-700 mb-2 text-sm">
                  {locale === 'zh' ? t('common.益处') : 'Benefits:'}
                </h4>
                <p className="text-neutral-600 text-sm">{technique.benefits}</p>
              </div>

              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium text-red-800 mb-1 text-sm">
                  {locale === 'zh' ? t('common.安全提示') : 'Safety Tip:'}
                </h4>
                <p className="text-red-700 text-sm">{technique.safetyTip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">
            {locale === 'zh' ? t('common.科学依据') : 'Scientific Basis'}
          </h4>
          <p className="text-blue-700 text-sm">
            {locale === 'zh' ? t('common.深呼吸练习通过调节自') : 'Deep breathing exercises regulate the autonomic nervous system, reducing heart rate and stress response, relieving muscle tension. Research shows that regular breathing exercises can promote endorphin release, the body\'s natural painkillers.'}
          </p>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="bg-yellow-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4">
          {locale === 'zh' ? t('common.安全提示') : 'Safety Tips'}
        </h3>
        <ul className="space-y-2 text-sm text-yellow-700">
          <li>• {locale === 'zh' ? t('common.药物携带布洛芬需原包') : 'Medication carrying: Ibuprofen should be carried in original packaging to avoid security questions'}</li>
          <li>• {locale === 'zh' ? t('common.隐私保护使用分装盒存') : 'Privacy protection: Use compartment boxes to store sanitary products, avoid exposure'}</li>
          <li>• {locale === 'zh' ? t('common.数据记录通勤疼痛发作')疼痛开始时间+交通方式"' : 'Data recording: When commute pain occurs, use app to record "pain start time + transport mode"'}</li>
          <li>• {locale === 'zh' ? t('common.严重疼痛时禁止驾驶疼') : 'No driving during severe pain: When severe pain affects driving safety, must immediately pull over to rest or seek help'}</li>
        </ul>
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
