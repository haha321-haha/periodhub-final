'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Dumbbell, Mountain, Waves, Clock, Heart, Activity } from 'lucide-react';

export default function ExerciseScenarioPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // 经期徒步指南
  const hikingGuide = {
    preparation: [
      {
        category: locale === 'zh' ? '三层防护体系' : 'Three-Layer Protection System',
        items: [
          locale === 'zh' ? '基础层：速干抗菌内裤（推荐Knix品牌）' : 'Base layer: Quick-dry antibacterial underwear (Knix brand recommended)',
          locale === 'zh' ? '保暖层：石墨烯发热护腰（持续6小时恒温）' : 'Insulation layer: Graphene heating waist support (6-hour constant temperature)',
          locale === 'zh' ? '外层：带暗袋的登山裤（内置卫生用品隔层）' : 'Outer layer: Hiking pants with hidden pockets (built-in sanitary product compartment)'
        ]
      },
      {
        category: locale === 'zh' ? '专业装备清单' : 'Professional Equipment List',
        items: [
          locale === 'zh' ? '超轻量卫生用品包（防水密封）' : 'Ultra-light sanitary product pack (waterproof sealed)',
          locale === 'zh' ? '电解质补充片（预防脱水和痉挛）' : 'Electrolyte tablets (prevent dehydration and cramps)',
          locale === 'zh' ? '便携式加热垫（USB充电式）' : 'Portable heating pad (USB rechargeable)',
          locale === 'zh' ? '紧急止痛药（布洛芬+对乙酰氨基酚）' : 'Emergency pain medication (Ibuprofen + Acetaminophen)'
        ]
      }
    ],
    routePlanning: [
      locale === 'zh' ? '选择有洗手间设施的热门路线' : 'Choose popular routes with restroom facilities',
      locale === 'zh' ? '下载离线地图，标记医疗点和避难所' : 'Download offline maps, mark medical points and shelters',
      locale === 'zh' ? '告知同伴您的身体状况，制定应急计划' : 'Inform companions of your condition, make emergency plan',
      locale === 'zh' ? '准备备用路线，缩短50%距离' : 'Prepare backup route, reduce distance by 50%'
    ]
  };

  // 泳池卫生管理
  const poolHygiene = [
    {
      phase: locale === 'zh' ? '入水前准备' : 'Pre-Swimming Preparation',
      steps: [
        locale === 'zh' ? '使用高吸收性棉条（Super或Ultra级别）' : 'Use high-absorbency tampons (Super or Ultra level)',
        locale === 'zh' ? '涂抹防水润滑剂，减少摩擦' : 'Apply waterproof lubricant to reduce friction',
        locale === 'zh' ? '穿着深色泳衣，选择高腰设计' : 'Wear dark-colored swimsuit, choose high-waist design',
        locale === 'zh' ? '准备防水袋存放更换用品' : 'Prepare waterproof bag for replacement supplies'
      ]
    },
    {
      phase: locale === 'zh' ? '游泳期间' : 'During Swimming',
      steps: [
        locale === 'zh' ? '避免仰泳和蝶泳，选择自由泳或蛙泳' : 'Avoid backstroke and butterfly, choose freestyle or breaststroke',
        locale === 'zh' ? '每30分钟检查一次，及时更换' : 'Check every 30 minutes, replace promptly',
        locale === 'zh' ? '注意水温，避免过冷导致痉挛' : 'Pay attention to water temperature, avoid cold-induced cramps',
        locale === 'zh' ? '保持适中强度，避免剧烈运动' : 'Maintain moderate intensity, avoid vigorous exercise'
      ]
    },
    {
      phase: locale === 'zh' ? '游泳后护理' : 'Post-Swimming Care',
      steps: [
        locale === 'zh' ? '立即冲洗，使用温水清洁' : 'Rinse immediately with warm water',
        locale === 'zh' ? '更换干燥内衣，避免细菌滋生' : 'Change to dry underwear, prevent bacterial growth',
        locale === 'zh' ? '补充电解质，预防脱水' : 'Replenish electrolytes, prevent dehydration',
        locale === 'zh' ? '观察身体反应，记录不适症状' : 'Monitor body reactions, record discomfort symptoms'
      ]
    }
  ];

  // 瑜伽体式库
  const yogaPoses = [
    {
      name: locale === 'zh' ? '猫牛式' : 'Cat-Cow Pose',
      sanskrit: 'Marjaryasana-Bitilasana',
      duration: locale === 'zh' ? '1-2分钟' : '1-2 minutes',
      benefits: locale === 'zh' ? '缓解下背部紧张，促进脊柱灵活性，减轻腹部痉挛' : 'Relieves lower back tension, promotes spinal flexibility, reduces abdominal cramps',
      instructions: [
        locale === 'zh' ? '四肢着地，手腕在肩膀下方' : 'Start on hands and knees, wrists under shoulders',
        locale === 'zh' ? '吸气时拱背，头部向上' : 'Inhale, arch back, lift head up',
        locale === 'zh' ? '呼气时弓背，下巴贴胸' : 'Exhale, round back, chin to chest',
        locale === 'zh' ? '缓慢重复，配合呼吸节奏' : 'Repeat slowly, coordinate with breathing rhythm'
      ]
    },
    {
      name: locale === 'zh' ? '儿童式' : 'Child\'s Pose',
      sanskrit: 'Balasana',
      duration: locale === 'zh' ? '3-5分钟' : '3-5 minutes',
      benefits: locale === 'zh' ? '深度放松，缓解压力，减轻下腹部疼痛' : 'Deep relaxation, stress relief, reduces lower abdominal pain',
      instructions: [
        locale === 'zh' ? '跪坐，大脚趾相触，膝盖分开' : 'Kneel, big toes touching, knees apart',
        locale === 'zh' ? '向前折叠，额头触地' : 'Fold forward, forehead to ground',
        locale === 'zh' ? '手臂向前伸展或放在身体两侧' : 'Arms extended forward or alongside body',
        locale === 'zh' ? '专注于深呼吸，完全放松' : 'Focus on deep breathing, complete relaxation'
      ]
    },
    {
      name: locale === 'zh' ? '仰卧扭转式' : 'Supine Spinal Twist',
      sanskrit: 'Supta Matsyendrasana',
      duration: locale === 'zh' ? '每侧2-3分钟' : '2-3 minutes each side',
      benefits: locale === 'zh' ? '按摩内脏器官，缓解下背部疼痛，促进消化' : 'Massages internal organs, relieves lower back pain, aids digestion',
      instructions: [
        locale === 'zh' ? '仰卧，双臂呈T字形' : 'Lie on back, arms in T-shape',
        locale === 'zh' ? '右膝弯曲，向左侧倒下' : 'Bend right knee, drop to left side',
        locale === 'zh' ? '头部转向右侧，保持肩膀贴地' : 'Turn head to right, keep shoulders grounded',
        locale === 'zh' ? '换边重复，保持呼吸平稳' : 'Repeat on other side, maintain steady breathing'
      ]
    }
  ];

  // 运动强度调整
  const intensityAdjustments = [
    {
      day: locale === 'zh' ? '月经第1-2天' : 'Menstrual Days 1-2',
      intensity: locale === 'zh' ? '低强度' : 'Low Intensity',
      activities: [
        locale === 'zh' ? '温和瑜伽（阴瑜伽）' : 'Gentle yoga (Yin yoga)',
        locale === 'zh' ? '慢走或散步' : 'Slow walking or strolling',
        locale === 'zh' ? '拉伸和冥想' : 'Stretching and meditation',
        locale === 'zh' ? '呼吸练习' : 'Breathing exercises'
      ],
      avoid: locale === 'zh' ? '避免：倒立、剧烈跳跃、重量训练' : 'Avoid: Inversions, vigorous jumping, weight training'
    },
    {
      day: locale === 'zh' ? '月经第3-5天' : 'Menstrual Days 3-5',
      intensity: locale === 'zh' ? '中等强度' : 'Moderate Intensity',
      activities: [
        locale === 'zh' ? '轻度有氧运动' : 'Light aerobic exercise',
        locale === 'zh' ? '游泳（如适合）' : 'Swimming (if suitable)',
        locale === 'zh' ? '普拉提' : 'Pilates',
        locale === 'zh' ? '自行车骑行' : 'Cycling'
      ],
      avoid: locale === 'zh' ? '避免：高强度间歇训练、长距离跑步' : 'Avoid: High-intensity interval training, long-distance running'
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
              {locale === 'zh' ? '运动/户外场景' : 'Exercise/Outdoor Scenarios'}
            </span>
          </div>
        </nav>

        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Dumbbell className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {locale === 'zh' ? '运动/户外场景解决方案' : 'Exercise/Outdoor Scenario Solutions'}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {locale === 'zh' ? '在运动和户外活动中安全管理经期，享受健康生活的同时保护身体' : 'Safely manage menstruation during sports and outdoor activities, enjoying a healthy lifestyle while protecting your body'}
          </p>
        </div>

        {/* 经期徒步指南 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Mountain className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '经期徒步指南' : 'Menstrual Hiking Guide'}
            </h2>
          </div>

          <div className="space-y-8">
            {/* 装备准备 */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {locale === 'zh' ? '专业装备准备' : 'Professional Equipment Preparation'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {hikingGuide.preparation.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-3">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 路线规划 */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {locale === 'zh' ? '智能路线规划' : 'Smart Route Planning'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {hikingGuide.routePlanning.map((tip, index) => (
                  <div key={index} className="flex items-start bg-green-50 rounded-lg p-4">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-green-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 泳池卫生管理 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Waves className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '泳池卫生管理' : 'Pool Hygiene Management'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {poolHygiene.map((phase, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">{index + 1}</span>
                  </span>
                  {phase.phase}
                </h3>
                <ul className="space-y-3">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 瑜伽体式库 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '经期瑜伽体式库' : 'Menstrual Yoga Pose Library'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {yogaPoses.map((pose, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pose.name}
                  </h3>
                  <span className="text-xs text-gray-500 italic">
                    {pose.sanskrit}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {pose.duration}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  <strong>{locale === 'zh' ? '功效：' : 'Benefits: '}</strong>
                  {pose.benefits}
                </p>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    {locale === 'zh' ? '练习步骤：' : 'Instructions:'}
                  </h4>
                  <ol className="space-y-1">
                    {pose.instructions.map((instruction, instructionIndex) => (
                      <li key={instructionIndex} className="flex items-start">
                        <span className="w-4 h-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                          {instructionIndex + 1}
                        </span>
                        <span className="text-xs text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 运动强度调整 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Activity className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {locale === 'zh' ? '运动强度调整指南' : 'Exercise Intensity Adjustment Guide'}
            </h2>
          </div>

          <div className="space-y-6">
            {intensityAdjustments.map((adjustment, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {adjustment.day}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    adjustment.intensity === '低强度' || adjustment.intensity === 'Low Intensity'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {adjustment.intensity}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      {locale === 'zh' ? '推荐活动：' : 'Recommended Activities:'}
                    </h4>
                    <ul className="space-y-2">
                      {adjustment.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 mb-2">
                      {locale === 'zh' ? '注意事项：' : 'Precautions:'}
                    </h4>
                    <p className="text-red-700 text-sm">{adjustment.avoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 运动安全提醒 */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {locale === 'zh' ? '运动安全提醒' : 'Exercise Safety Reminder'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'zh' ?
                  '经期运动应该以舒适为主，不要勉强自己达到平时的运动强度。如果出现异常疼痛、大量出血或其他不适症状，应立即停止运动并寻求医疗帮助。记住，倾听身体的声音比坚持运动计划更重要。' :
                  'Exercise during menstruation should prioritize comfort, don\'t force yourself to reach your usual exercise intensity. If you experience abnormal pain, heavy bleeding, or other discomfort symptoms, stop exercising immediately and seek medical help. Remember, listening to your body is more important than sticking to an exercise plan.'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
