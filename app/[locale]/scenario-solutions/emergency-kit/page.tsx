import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Package,
  Briefcase,
  Car,
  Dumbbell,
  Bed,
  Users,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Info,
  School,
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
    title: `${locale === 'zh' ? t('common.多场景应急包清单') : 'Multi-Scenario Emergency Kit List'} - ${t('title')}`,
    description: locale === 'zh' ? t('common.详细的经期应急包准备') : 'Detailed period emergency kit preparation list covering office, commute, exercise, sleep, social and other scenarios',
  };
}

export default async function EmergencyKitPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const emergencyKitScenarios = [
    {
      scenario: locale === 'zh' ? t('common.青少年校园') : 'Teen/Campus',
      icon: <School className="w-6 h-6" />,
      color: 'bg-pink-50 text-pink-600',
      description: locale === 'zh' ? t('common.专为1218岁青少年') : 'Campus emergency kit designed specifically for teens aged 12-18, helping handle period discomfort confidently in school, dorm, and other environments.',
      items: [
        {
          item: locale === 'zh' ? t('common.迷你热敷贴暖宝宝') : 'Mini Heat Patches/Hand Warmers',
          usage: locale === 'zh' ? t('common.贴在小腹或腰部随时随') : 'Apply to abdomen or lower back for warmth anytime, anywhere. Compact size allows discreet use without attracting classmates\' attention. Especially suitable for classroom use.',
          tip: locale === 'zh' ? t('common.选择可长时间发热且恒') : 'Choose products with long-lasting, constant temperature heat. Use over clothing to avoid burns. Can apply before going to school.'
        },
        {
          item: locale === 'zh' ? t('common.止痛药家长同意下') : 'Pain Medication (With Parental Consent)',
          usage: locale === 'zh' ? t('common.在家长同意和指导下随') : 'Carry safe pain medication with parental consent and guidance. Take when body first feels discomfort for effective, quick pain relief.',
          tip: locale === 'zh' ? t('common.务必在家长或医生指导') : 'Must use under parental or medical guidance. Understand dosage and timing. Do not share medication with classmates.'
        },
        {
          item: locale === 'zh' ? t('common.热水杯保温杯') : 'Hot Water Bottle/Thermos',
          usage: locale === 'zh' ? t('common.和学校沟通看看能不能') : 'Communicate with school about using during particularly difficult periods. Replenish warm water anytime to help relieve bloating and muscle tension.',
          tip: locale === 'zh' ? t('common.选择保温效果好的杯子') : 'Choose cups with good insulation. Can use during breaks or lunch. If school doesn\'t allow, drink warm water at water stations during breaks.'
        },
        {
          item: locale === 'zh' ? t('common.小零食巧克力糖果') : 'Small Snacks (Chocolate/Candy)',
          usage: locale === 'zh' ? t('common.一块巧克力或少量糖果') : 'A piece of chocolate or small candy can help distract attention and provide energy. Eat when feeling tired or down.',
          tip: locale === 'zh' ? t('common.选择独立包装方便携带') : 'Choose individually packaged for easy carrying. Don\'t eat during class, enjoy during breaks or lunch.'
        },
        {
          item: locale === 'zh' ? t('common.舒适的备用衣物') : 'Comfortable Spare Clothing',
          usage: locale === 'zh' ? t('common.准备一件宽松的外套或') : 'Prepare a loose jacket or scarf for when feeling cold or needing extra warmth. Can also provide psychological comfort when abdomen feels uncomfortable.',
          tip: locale === 'zh' ? t('common.选择容易搭配的颜色和') : 'Choose colors and styles that are easy to match. Can keep in dorm or locker as backup.'
        },
        {
          item: locale === 'zh' ? t('common.沟通卡片便条') : 'Communication Cards/Notes',
          usage: locale === 'zh' ? t('common.提前准备好简单的便条t('common.我身体不太舒服可以去t('common.方便在不好意思开口时') : 'Prepare simple notes in advance, like "I\'m not feeling well, may I go to the nurse\'s office?" for use when too shy to speak up.',
          tip: locale === 'zh' ? t('common.可以准备中英文版本也') : 'Can prepare Chinese and English versions. Also communicate with trusted classmates or teachers in advance to build understanding and support.'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.办公职场') : 'Office/Workplace',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
      description: locale === 'zh' ? t('common.在办公室面对突然来袭') : 'Facing sudden period pain in the office requires quick, convenient methods that don\'t affect work.',
      items: [
        {
          item: locale === 'zh' ? t('common.迷你热敷贴暖宝宝') : 'Mini Heat Patches/Hand Warmers',
          usage: locale === 'zh' ? t('common.贴在小腹或腰部提供持') : 'Apply to abdomen or lower back. Provides continuous warmth, relaxes muscles, relieves cramps. Compact size for discreet use.',
          tip: locale === 'zh' ? t('common.选择可长时间发热且恒') : 'Choose products with long-lasting, constant temperature heat. Use over clothing to avoid low-temperature burns.'
        },
        {
          item: locale === 'zh' ? t('common.随身止痛药') : 'Portable Pain Medication',
          usage: locale === 'zh' ? t('common.在身体刚感觉不适时服') : 'Take when body first feels discomfort. Effectively relieves pain quickly. Must carry and use under doctor or pharmacist guidance.',
          tip: locale === 'zh' ? t('common.了解药品的剂量服用时') : 'Understand dosage, timing, and possible side effects. Do not increase dosage without authorization.'
        },
        {
          item: locale === 'zh' ? t('common.红糖姜茶包速溶温饮') : 'Brown Sugar Ginger Tea/Instant Warm Drinks',
          usage: locale === 'zh' ? t('common.在茶水间用热水冲泡饮') : 'Brew with hot water in tea room. Warm drinks help promote blood circulation, relieve bloating and cold stagnation.',
          tip: locale === 'zh' ? t('common.选择独立包装方便携带') : 'Choose individually packaged for easy carrying and brewing.'
        },
        {
          item: locale === 'zh' ? t('common.小巧的按摩工具') : 'Compact Massage Tools',
          usage: locale === 'zh' ? t('common.在办公椅上或休息时轻') : 'Gently massage waist and hand acupoints while in office chair or resting. Distracts attention, relieves local muscle tension.',
          tip: locale === 'zh' ? t('common.无需大幅度动作可在衣') : 'No large movements needed, can be done under clothing.'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.通勤') : 'Commute',
      icon: <Car className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600',
      description: locale === 'zh' ? t('common.在路上遭遇经期不适特') : 'Encountering period discomfort on the road, especially on public transport, requires quick, discreet emergency methods.',
      items: [
        {
          item: locale === 'zh' ? t('common.迷你暖宝宝') : 'Mini Hand Warmers',
          usage: locale === 'zh' ? t('common.上路前贴好长时间提供') : 'Apply before departure. Provides long-term warmth, especially suitable for long periods of standing or sitting during commute.',
          tip: locale === 'zh' ? t('common.确保粘性好不易脱落') : 'Ensure good adhesion and won\'t fall off easily.'
        },
        {
          item: locale === 'zh' ? t('common.小瓶温水或保温杯') : 'Small Bottle of Warm Water or Thermos',
          usage: locale === 'zh' ? t('common.随时补充水分小口饮用') : 'Replenish fluids anytime, sip warm water. Warm water helps relieve bloating and muscle tension.',
          tip: locale === 'zh' ? t('common.冬季尤其重要如果乘坐') : 'Especially important in winter. If inconvenient on transport, replenish before boarding or after alighting.'
        },
        {
          item: locale === 'zh' ? t('common.耳机') : 'Headphones',
          usage: locale === 'zh' ? t('common.听舒缓音乐白噪音或播') : 'Listen to soothing music, white noise, or podcasts. Distracts attention, calms emotions.',
          tip: locale === 'zh' ? t('common.可尝试声波疗法中推荐') : 'Try soothing audio recommended in sound therapy.'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.运动户外') : 'Exercise/Outdoor',
      icon: <Dumbbell className="w-6 h-6" />,
      color: 'bg-orange-50 text-orange-600',
      description: locale === 'zh' ? t('common.经期适度运动有益健康') : 'Moderate exercise during menstruation is beneficial for health, but encountering pain during exercise or outdoor environments requires special preparation and response.',
      items: [
        {
          item: locale === 'zh' ? t('common.轻薄防风外套') : 'Lightweight Windproof Jacket',
          usage: locale === 'zh' ? t('common.运动出汗后及时穿上避') : 'Put on immediately after sweating from exercise to avoid catching cold. Especially important in outdoor environments.',
          tip: locale === 'zh' ? t('common.受凉可能加重疼痛选择') : 'Catching cold may worsen pain. Choose breathable, moisture-wicking professional sportswear.'
        },
        {
          item: locale === 'zh' ? t('common.个人卫生用品运动专用') : 'Personal Hygiene Products (Sports-specific)',
          usage: locale === 'zh' ? t('common.如运动型卫生巾棉条月') : 'Such as sports sanitary pads/tampons/menstrual cups. Ensure leak protection and comfort during exercise.',
          tip: locale === 'zh' ? t('common.根据运动强度和自身流') : 'Choose appropriate products based on exercise intensity and personal flow.'
        },
        {
          item: locale === 'zh' ? t('common.充足的饮用水电解质饮') : 'Adequate Drinking Water/Electrolyte Drinks',
          usage: locale === 'zh' ? t('common.运动中及时补充水分和') : 'Replenish fluids and electrolytes during exercise. Avoid dehydration, helps body maintain normal function, partially relieves fatigue and cramps.',
          tip: locale === 'zh' ? t('common.温水更佳避免空腹运动') : 'Warm water is better. Avoid exercising on an empty stomach.'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.睡眠') : 'Sleep',
      icon: <Bed className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
      description: locale === 'zh' ? t('common.夜间的经期疼痛会严重') : 'Nighttime period pain can seriously affect sleep, good preparation helps ensure restful sleep.',
      items: [
        {
          item: locale === 'zh' ? t('common.热水袋电热毯暖宝宝') : 'Hot Water Bottle/Electric Blanket/Hand Warmers',
          usage: locale === 'zh' ? t('common.睡前敷在小腹或腰部提') : 'Apply to abdomen or lower back before sleep. Provides continuous warmth, relaxes abdominal muscles, significantly relieves cramping pain.',
          tip: locale === 'zh' ? t('common.注意温度避免烫伤电热') : 'Pay attention to temperature to avoid burns. Electric blankets/hot water bottles require safe use. Hand warmers are suitable for all-night use.'
        },
        {
          item: locale === 'zh' ? t('common.抱枕或靠垫') : 'Body Pillow or Cushion',
          usage: locale === 'zh' ? t('common.睡觉时放在膝下或抱在') : 'Place under knees or hug while sleeping (with left side lying). Helps body maintain comfortable position, reduces abdominal pressure.',
          tip: locale === 'zh' ? t('common.可以尝试在双腿中间夹') : 'Try placing a pillow between legs or under abdomen for support.'
        },
        {
          item: locale === 'zh' ? t('common.睡前助眠音频') : 'Bedtime Sleep Audio',
          usage: locale === 'zh' ? t('common.睡前播放调节神经分散') : 'Play before sleep to regulate nerves, distract from pain, help relax and fall asleep.',
          tip: locale === 'zh' ? t('common.可佩戴舒适的耳机选择') : 'Can wear comfortable headphones. Choose moderate volume, calm content audio.'
        }
      ]
    },
    {
      scenario: locale === 'zh' ? t('common.社交') : 'Social',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-pink-50 text-pink-600',
      description: locale === 'zh' ? t('common.参与社交活动如约会聚') : 'When participating in social activities (such as dates, parties, dining out) while dealing with period discomfort, requires clever handling and advance preparation.',
      items: [
        {
          item: locale === 'zh' ? t('common.迷你暖宝宝') : 'Mini Hand Warmers',
          usage: locale === 'zh' ? t('common.外出前贴好提供持续温') : 'Apply before going out. Provides continuous warmth, not easily noticed by others.',
          tip: locale === 'zh' ? t('common.选择体积小巧贴合性好') : 'Choose compact products with good adhesion.'
        },
        {
          item: locale === 'zh' ? t('common.舒适且便于行动的衣物') : 'Comfortable and Movement-friendly Clothing',
          usage: locale === 'zh' ? t('common.选择不会勒紧腹部同时') : 'Choose clothing that doesn\'t constrict the abdomen while allowing for discreet small adjustments.',
          tip: locale === 'zh' ? t('common.美观与舒适兼顾') : 'Balance beauty and comfort.'
        },
        {
          item: locale === 'zh' ? t('common.一条小巧舒适的围巾或') : 'Small Comfortable Scarf or Shawl',
          usage: locale === 'zh' ? t('common.在空调环境或感到畏寒') : 'Use in air-conditioned environments or when feeling cold. Protects abdomen and waist.',
          tip: locale === 'zh' ? t('common.既是配饰也能提供保暖') : 'Serves as both accessory and provides warmth and security.'
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
        <span className="text-neutral-800">
          {locale === 'zh' ? t('common.应急包清单') : 'Emergency Kit List'}
        </span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Package className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {locale === 'zh' ? t('common.多场景经期应急包清单') : 'Multi-Scenario Period Emergency Kit List'}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {locale === 'zh' ? t('common.从容应对自在生活经期') : 'Handle with confidence, live comfortably: You\'re not fighting period discomfort alone. This list provides emergency preparation and item suggestions for various scenarios, helping you handle any situation with confidence and control your state.t('common.phe')bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 border border-pink-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-pink-100 rounded-full p-3 mr-3">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {locale === 'zh' ? t('common.青少年专区新增') : '🌸 New Teen Section Added!'}
              </h2>
              <p className="text-sm text-pink-600 font-medium">
                {locale === 'zh' ? t('common.专为1218岁女孩设') : 'Campus emergency kit designed for girls aged 12-18'}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-4xl mx-auto">
            {locale === 'zh'
              ? t('common.我们特别为青少年朋友')
              : 'We\'ve specially added a campus emergency kit list for our teen friends! From classroom emergencies to dorm management, from communicating with teachers to peer support, comprehensive help for confidently handling periods in campus environments.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/teen-health`}
              className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {locale === 'zh' ? t('common.探索青少年专区') : 'Explore Teen Zone'}
              <Heart className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href={`/${locale}/teen-health/campus-guide`}
              className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full font-medium border-2 border-pink-200 hover:bg-pink-50 transition-colors"
            >
              {locale === 'zh' ? t('common.校园应急指南') : 'Campus Emergency Guide'}
            </Link>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              {locale === 'zh' ? t('common.重要提示') : 'Important Notice'}
            </h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              {locale === 'zh' ? t('common.本清单提供的建议为辅') : 'The suggestions in this list are auxiliary relief measures. If you experience severe period pain or other abnormal symptoms, please seek medical attention promptly. Use of pain medications should be under the guidance of a doctor or pharmacist.'}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Kit Scenarios */}
      <section>
        <div className="space-y-12">
          {emergencyKitScenarios.map((scenario, index) => (
            <div key={index} className="bg-gradient-to-br from-neutral-50 to-white p-6 md:p-8 rounded-xl border border-neutral-200">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${scenario.color} mr-4`}>
                  {scenario.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-800">
                    {locale === 'zh' ? t('common.场景') : 'Scenario: '}{scenario.scenario}
                  </h2>
                  <p className="text-neutral-600 mt-2">
                    {scenario.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {scenario.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      {item.item}
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1 text-sm">
                          {locale === 'zh' ? t('common.使用提示理由') : 'Usage Tips/Reason:'}
                        </h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {item.usage}
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-1 text-sm">
                          {locale === 'zh' ? t('common.相关建议') : 'Related Suggestions:'}
                        </h4>
                        <p className="text-blue-700 text-sm leading-relaxed">
                          {item.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary and Tips */}
      <section className="bg-gradient-to-br from-blue-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <Info className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.总结与建议') : 'Summary and Recommendations'}
          </h2>
        </div>

        <div className="space-y-4 text-neutral-700">
          <p className="leading-relaxed">
            {locale === 'zh' ? t('common.这份清单为你提供了一') : 'This list provides a basic framework. The specific emergency kit contents and preparation methods can be adjusted according to your personal situation, pain level, lifestyle habits, and specific environment. Most importantly:'}
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{locale === 'zh' ? t('common.了解你的身体') : 'Know your body: '}</strong>
                {locale === 'zh' ? t('common.关注经期疼痛的规律和') : 'Pay attention to the patterns and characteristics of menstrual pain.'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{locale === 'zh' ? t('common.提前做好准备') : 'Prepare in advance: '}</strong>
                {locale === 'zh' ? t('common.防患于未然将应急物品') : 'Be prepared, make emergency items a regular part of your bag.'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{locale === 'zh' ? t('common.倾听身体的声音') : 'Listen to your body: '}</strong>
                {locale === 'zh' ? t('common.不要硬撑如果疼痛严重') : 'Don\'t push through, if pain seriously affects normal life, seek rest or medical help promptly.'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{locale === 'zh' ? t('common.勇敢寻求帮助') : 'Seek help bravely: '}</strong>
                {locale === 'zh' ? t('common.在需要时告诉家人朋友') : 'When needed, tell family, friends, or trusted people about your discomfort to gain their understanding and support.'}
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{locale === 'zh' ? t('common.青少年特别提醒') : 'Special reminder for teens: '}</strong>
                {locale === 'zh' ? t('common.如果你是1218岁的') : 'If you\'re a 12-18 year old student, remember to communicate with parents about emergency kit preparation, and bravely seek help from teachers or school nurses when facing difficulties at school.'}
              </span>
            </li>
          </ul>

          <p className="leading-relaxed mt-6 text-center font-medium text-blue-800">
            {locale === 'zh' ? t('common.希望这份清单能帮助你') : 'Hope this list helps you face various life scenarios with more confidence and comfort during your period!'}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-red-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-lg font-semibold text-red-800 mb-4">
          {locale === 'zh' ? t('common.免责声明') : 'Disclaimer'}
        </h3>
        <p className="text-red-700 text-sm leading-relaxed">
          {locale === 'zh' ? t('common.本清单提供的建议仅供') : 'The suggestions in this list are for informational reference only and cannot replace professional medical diagnosis, treatment, or advice. Please follow doctor or pharmacist guidance for medication use. Individual situations vary, please adjust according to your own feelings. If your menstrual pain is severe and unbearable, or accompanied by other abnormal symptoms (such as fever, severe vomiting, abnormal bleeding, etc.), please seek medical attention immediately.'}
        </p>
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
