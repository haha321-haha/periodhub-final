import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Moon, 
  Volume2, 
  Bed, 
  Coffee,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Thermometer,
  Heart
} from 'lucide-react';

// Types
type Locale = 'en' | 'zh';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'scenarioSolutionsPage' });
  
  return {
    title: `${t('scenarios.sleep.title')} - ${t('title')}`,
    description: t('scenarios.sleep.description'),
  };
}

export default async function SleepScenarioPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const audioSystems = [
    {
      type: locale === 'zh' ? t('common.白噪音音频') : 'White Noise Audio',
      icon: <Volume2 className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
      description: locale === 'zh' ? t('common.雨声海浪声风声鸟鸣声') : 'Rain, ocean waves, wind, bird sounds and other natural white noise',
      benefits: [
        locale === 'zh' ? t('common.掩盖环境杂音创造安静') : 'Mask environmental noise, create quiet sleep environment',
        locale === 'zh' ? t('common.稳定频率刺激大脑产生') : 'Stable frequency stimulates brain to produce alpha waves',
        locale === 'zh' ? t('common.持续3060分钟缓解') : 'Play for 30-60 minutes, relieves insomnia and anxiety'
      ]
    },
    {
      type: locale === 'zh' ? t('common.冥想引导音频') : 'Guided Meditation Audio',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
      description: locale === 'zh' ? t('common.专业冥想导师引导的睡') : 'Sleep meditation practices guided by professional meditation instructors',
      benefits: [
        locale === 'zh' ? t('common.引导深呼吸身体扫描放') : 'Guides deep breathing, body scanning, relaxation meditation',
        locale === 'zh' ? t('common.将注意力从疼痛转移到') : 'Shifts attention from pain to inner peace',
        locale === 'zh' ? t('common.1520分钟逐步放松') : '15-20 minutes gradually relaxing each body part'
      ]
    },
    {
      type: locale === 'zh' ? t('common.生物反馈音乐') : 'Biofeedback Music',
      icon: <Thermometer className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600',
      description: locale === 'zh' ? t('common.528Hz修复频率抑') : '528Hz healing frequency, inhibits PGF2α synthase activity',
      benefits: [
        locale === 'zh' ? t('common.科学频率缓解生理疼痛') : 'Scientific frequency relieves physiological pain',
        locale === 'zh' ? t('common.促进细胞修复和再生') : 'Promotes cell repair and regeneration',
        locale === 'zh' ? t('common.降低心率放松肌肉') : 'Lowers heart rate, relaxes muscles'
      ]
    }
  ];

  const sleepPositions = [
    {
      position: locale === 'zh' ? t('common.左侧卧位') : 'Left Side Position',
      effectiveness: '68%',
      description: locale === 'zh' ? t('common.双腿夹孕妇枕骨盆倾斜') : 'Pregnancy pillow between legs, pelvis tilted 15°',
      benefits: [
        locale === 'zh' ? t('common.减轻子宫对腹主动脉的') : 'Reduces uterine pressure on abdominal aorta',
        locale === 'zh' ? t('common.改善子宫血液供应减少') : 'Improves uterine blood supply, reduces pain',
        locale === 'zh' ? t('common.促进经血顺畅排出') : 'Promotes smooth menstrual flow'
      ],
      tools: [locale === 'zh' ? t('common.长条形抱枕') : 'Long body pillow', locale === 'zh' ? t('common.孕妇枕') : 'Pregnancy pillow']
    },
    {
      position: locale === 'zh' ? t('common.半仰卧位') : 'Semi-Supine Position',
      effectiveness: '55%',
      description: locale === 'zh' ? t('common.膝下垫楔形枕腰部完全') : 'Wedge pillow under knees, lower back completely suspended',
      benefits: [
        locale === 'zh' ? t('common.促进盆腔血液回流') : 'Promotes pelvic blood return',
        locale === 'zh' ? t('common.减轻盆腔充血和肿胀') : 'Reduces pelvic congestion and swelling',
        locale === 'zh' ? t('common.缓解下腹部疼痛') : 'Relieves lower abdominal pain'
      ],
      tools: [locale === 'zh' ? t('common.楔形枕') : 'Wedge pillow', locale === 'zh' ? t('common.腿部抬高垫') : 'Leg elevation pad']
    },
    {
      position: locale === 'zh' ? t('common.蜷卧位胎儿式') : 'Fetal Position',
      effectiveness: '62%',
      description: locale === 'zh' ? t('common.双膝间夹枕头类似子宫') : 'Pillow between knees, similar to in-utero position',
      benefits: [
        locale === 'zh' ? t('common.带来安全感和舒适感') : 'Provides sense of security and comfort',
        locale === 'zh' ? t('common.缓解身体紧张和疼痛') : 'Relieves body tension and pain',
        locale === 'zh' ? t('common.减轻髋部和腰部压力') : 'Reduces hip and lower back pressure'
      ],
      tools: [locale === 'zh' ? t('common.膝间枕') : 'Knee pillow', locale === 'zh' ? t('common.可微波暖宫枕') : 'Microwaveable warming pillow']
    }
  ];

  const bedtimeFoods = {
    recommended: [
      {
        food: locale === 'zh' ? t('common.温牛奶蜂蜜') : 'Warm Milk + Honey',
        component: locale === 'zh' ? t('common.色氨酸天然糖分') : 'Tryptophan + Natural sugars',
        benefit: locale === 'zh' ? t('common.促进褪黑素分泌帮助快') : 'Promotes melatonin secretion, helps fall asleep quickly'
      },
      {
        food: locale === 'zh' ? t('common.香蕉杏仁奶') : 'Banana + Almond Milk',
        component: locale === 'zh' ? t('common.镁色氨酸') : 'Magnesium + Tryptophan',
        benefit: locale === 'zh' ? t('common.放松肌肉缓解痉挛') : 'Relaxes muscles, relieves cramps'
      },
      {
        food: locale === 'zh' ? t('common.樱桃汁') : 'Cherry Juice',
        component: locale === 'zh' ? t('common.天然褪黑素') : 'Natural melatonin',
        benefit: locale === 'zh' ? t('common.调节睡眠节律改善睡眠') : 'Regulates sleep rhythm, improves sleep quality'
      },
      {
        food: locale === 'zh' ? t('common.全麦面包坚果') : 'Whole Grain Bread + Nuts',
        component: locale === 'zh' ? t('common.复合碳水镁') : 'Complex carbs + Magnesium',
        benefit: locale === 'zh' ? t('common.稳定血糖持续释放能量') : 'Stabilizes blood sugar, sustained energy release'
      }
    ],
    avoid: [
      {
        item: locale === 'zh' ? t('common.咖啡因饮料') : 'Caffeinated beverages',
        reason: locale === 'zh' ? t('common.睡前6小时内避免刺激') : 'Avoid 6 hours before bed, stimulates nervous system'
      },
      {
        item: locale === 'zh' ? t('common.酒精') : 'Alcohol',
        reason: locale === 'zh' ? t('common.影响深度睡眠可能增加') : 'Affects deep sleep, may increase menstrual flow'
      },
      {
        item: locale === 'zh' ? t('common.高糖食物') : 'High-sugar foods',
        reason: locale === 'zh' ? t('common.造成血糖波动影响睡眠') : 'Causes blood sugar fluctuations, affects sleep stability'
      },
      {
        item: locale === 'zh' ? t('common.辛辣食物') : 'Spicy foods',
        reason: locale === 'zh' ? t('common.刺激肠胃可能影响睡眠') : 'Irritates digestive system, may affect sleep quality'
      }
    ]
  };

  const sleepEnvironment = [
    {
      aspect: locale === 'zh' ? t('common.声波疗法') : 'Sound Therapy',
      details: locale === 'zh' ? t('common.432Hz子宫修复频') : '432Hz uterine healing frequency audio',
      icon: <Volume2 className="w-5 h-5" />
    },
    {
      aspect: locale === 'zh' ? t('common.光环境') : 'Light Environment',
      details: locale === 'zh' ? t('common.琥珀色夜灯抑制褪黑素') : 'Amber night light (prevents melatonin interference)',
      icon: <Moon className="w-5 h-5" />
    },
    {
      aspect: locale === 'zh' ? t('common.触觉反馈') : 'Tactile Feedback',
      details: locale === 'zh' ? t('common.重力被79kg压力缓') : 'Weighted blanket (7-9kg pressure relieves anxiety)',
      icon: <Bed className="w-5 h-5" />
    },
    {
      aspect: locale === 'zh' ? t('common.温度控制') : 'Temperature Control',
      details: locale === 'zh' ? t('common.室温1822湿度50') : 'Room temp 18-22℃, humidity 50-60%',
      icon: <Thermometer className="w-5 h-5" />
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
        <span className="text-neutral-800">{t('scenarios.sleep.title')}</span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Moon className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {t('scenarios.sleep.title')}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {t('scenarios.sleep.description')}
        </p>
      </header>

      {/* Audio Systems Section */}
      <section className="bg-gradient-to-br from-purple-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <Volume2 className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.三维助眠音频系统') : 'Three-Dimensional Sleep Audio System'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {audioSystems.map((audio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${audio.color} mb-4`}>
                {audio.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                {audio.type}
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                {audio.description}
              </p>
              <ul className="space-y-2">
                {audio.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sleep Positions Section */}
      <section>
        <div className="flex items-center mb-6">
          <Bed className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.科学睡姿矩阵') : 'Scientific Sleep Position Matrix'}
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {sleepPositions.map((position, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {position.position}
                </h3>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {locale === 'zh' ? t('common.缓解率') : 'Relief Rate'} {position.effectiveness}
                </span>
              </div>
              
              <p className="text-neutral-600 mb-4 text-sm">
                <strong>{locale === 'zh' ? t('common.实施要点') : 'Key Points: '}</strong>
                {position.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-neutral-800 mb-2">
                  {locale === 'zh' ? t('common.功效') : 'Benefits:'}
                </h4>
                <ul className="space-y-1">
                  {position.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-neutral-700">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 mb-2">
                  {locale === 'zh' ? t('common.辅助工具') : 'Support Tools:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {position.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bedtime Nutrition Section */}
      <section>
        <div className="flex items-center mb-6">
          <Coffee className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.睡前饮食建议') : 'Bedtime Nutrition Recommendations'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              {locale === 'zh' ? t('common.推荐食物') : 'Recommended Foods'}
            </h3>
            <div className="space-y-4">
              {bedtimeFoods.recommended.map((food, index) => (
                <div key={index} className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-green-800">{food.food}</h4>
                  <p className="text-sm text-green-600 mb-1">
                    <strong>{locale === 'zh' ? t('common.主要成分') : 'Key Components: '}</strong>
                    {food.component}
                  </p>
                  <p className="text-sm text-green-700">{food.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">
              {locale === 'zh' ? t('common.避免食物') : 'Foods to Avoid'}
            </h3>
            <div className="space-y-4">
              {bedtimeFoods.avoid.map((item, index) => (
                <div key={index} className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-red-800">{item.item}</h4>
                  <p className="text-sm text-red-700">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sleep Environment Section */}
      <section>
        <div className="flex items-center mb-6">
          <Moon className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.睡眠环境优化') : 'Sleep Environment Optimization'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sleepEnvironment.map((env, index) => (
            <div key={index} className="card text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {env.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {env.aspect}
              </h3>
              <p className="text-sm text-neutral-600">
                {env.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sleep Tips */}
      <section className="bg-yellow-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          {locale === 'zh' ? t('common.睡眠时间管理') : 'Sleep Time Management'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-yellow-700">
          <div>
            <h4 className="font-medium mb-2">{locale === 'zh' ? t('common.睡前2小时') : '2 Hours Before Bed'}</h4>
            <ul className="space-y-1">
              <li>• {locale === 'zh' ? t('common.停止进食避免消化负担') : 'Stop eating, avoid digestive burden'}</li>
              <li>• {locale === 'zh' ? t('common.开始播放助眠音频') : 'Start playing sleep audio'}</li>
              <li>• {locale === 'zh' ? t('common.调暗室内灯光') : 'Dim room lighting'}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">{locale === 'zh' ? t('common.睡前1小时') : '1 Hour Before Bed'}</h4>
            <ul className="space-y-1">
              <li>• {locale === 'zh' ? t('common.温水洗澡放松身心') : 'Warm bath, relax body and mind'}</li>
              <li>• {locale === 'zh' ? t('common.进行轻柔拉伸运动') : 'Gentle stretching exercises'}</li>
              <li>• {locale === 'zh' ? t('common.避免使用电子设备') : 'Avoid electronic devices'}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">{locale === 'zh' ? t('common.睡前30分钟') : '30 Minutes Before Bed'}</h4>
            <ul className="space-y-1">
              <li>• {locale === 'zh' ? t('common.调整到最佳睡姿') : 'Adjust to optimal sleep position'}</li>
              <li>• {locale === 'zh' ? t('common.使用暖宫贴或热水袋') : 'Use warming patches or hot water bottle'}</li>
              <li>• {locale === 'zh' ? t('common.进行深呼吸练习') : 'Practice deep breathing'}</li>
            </ul>
          </div>
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
