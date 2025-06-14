'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

// Note: Metadata generation moved to layout or parent component since this is now a Client Component

export default function NaturalTherapiesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Get translations for the natural therapies page
  const t = useTranslations('naturalTherapiesPage');
  const commonT = useTranslations('common');

  // State for managing expanded therapy cards
  const [expandedTherapy, setExpandedTherapy] = useState<string | null>(null);

  // Helper functions for dynamic classes
  const getCardClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'bg-gradient-to-br from-red-50 to-red-50 hover:from-red-100 hover:to-red-100',
      green: 'bg-gradient-to-br from-green-50 to-green-50 hover:from-green-100 hover:to-green-100',
      blue: 'bg-gradient-to-br from-blue-50 to-blue-50 hover:from-blue-100 hover:to-blue-100',
      purple: 'bg-gradient-to-br from-purple-50 to-purple-50 hover:from-purple-100 hover:to-purple-100',
      pink: 'bg-gradient-to-br from-pink-50 to-pink-50 hover:from-pink-100 hover:to-pink-100',
      yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-50 hover:from-yellow-100 hover:to-yellow-100',
      indigo: 'bg-gradient-to-br from-indigo-50 to-indigo-50 hover:from-indigo-100 hover:to-indigo-100',
      teal: 'bg-gradient-to-br from-teal-50 to-teal-50 hover:from-teal-100 hover:to-teal-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getExpandedCardClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
      green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
      blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
      purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
      pink: 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
      yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
      indigo: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200',
      teal: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getTextClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-800',
      green: 'text-green-800',
      blue: 'text-blue-800',
      purple: 'text-purple-800',
      pink: 'text-pink-800',
      yellow: 'text-yellow-800',
      indigo: 'text-indigo-800',
      teal: 'text-teal-800'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getSubtitleClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-600',
      green: 'text-green-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      pink: 'text-pink-600',
      yellow: 'text-yellow-600',
      indigo: 'text-indigo-600',
      teal: 'text-teal-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getBorderClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'border-red-200',
      green: 'border-green-200',
      blue: 'border-blue-200',
      purple: 'border-purple-200',
      pink: 'border-pink-200',
      yellow: 'border-yellow-200',
      indigo: 'border-indigo-200',
      teal: 'border-teal-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getMethodCardClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'bg-red-50 border-red-200',
      green: 'bg-green-50 border-green-200',
      blue: 'bg-blue-50 border-blue-200',
      purple: 'bg-purple-50 border-purple-200',
      pink: 'bg-pink-50 border-pink-200',
      yellow: 'bg-yellow-50 border-yellow-200',
      indigo: 'bg-indigo-50 border-indigo-200',
      teal: 'bg-teal-50 border-teal-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getMethodTextClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-800',
      green: 'text-green-800',
      blue: 'text-blue-800',
      purple: 'text-purple-800',
      pink: 'text-pink-800',
      yellow: 'text-yellow-800',
      indigo: 'text-indigo-800',
      teal: 'text-teal-800'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getMethodDescClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-700',
      green: 'text-green-700',
      blue: 'text-blue-700',
      purple: 'text-purple-700',
      pink: 'text-pink-700',
      yellow: 'text-yellow-700',
      indigo: 'text-indigo-700',
      teal: 'text-teal-700'
    };
    return colorMap[color] || colorMap.blue;
  };

  // Define therapy categories with detailed content
  const therapyCategories = [
    {
      id: 'physical',
      title: locale === 'zh' ? t('common.物理疗法') : 'Physical Therapy',
      subtitle: locale === 'zh' ? t('common.热敷按摩TENS等') : 'Heat therapy, massage, TENS, etc.',
      icon: '🔥',
      color: 'red',
      details: {
        description: locale === 'zh'
          ? t('common.物理疗法通过外部物理')
          : 'Physical therapy improves blood circulation and relieves muscle tension through external physical means, making it the most direct and effective method for menstrual pain relief.',
        methods: locale === 'zh' ? [
          { name: t('common.热敷疗法'), description: t('common.使用热水袋暖宫贴等温') },
          { name: t('common.按摩疗法'), description: t('common.腹部顺时针按摩腰部按') },
          { name: t('common.TENS疗法'), description: t('common.经皮神经电刺激阻断疼') },
          { name: t('common.温水浴'), description: t('common.3840C温水浸泡1') }
        ] : [
          { name: 'Heat Therapy', description: 'Use hot water bottles, heating pads at 40-45°C for 15-20 minutes' },
          { name: 'Massage Therapy', description: 'Clockwise abdominal massage, lower back pressure to promote circulation' },
          { name: 'TENS Therapy', description: 'Transcutaneous electrical nerve stimulation blocks pain signal transmission' },
          { name: 'Warm Bath', description: 'Soak in 38-40°C warm water for 15-20 minutes for full body relaxation' }
        ]
      }
    },
    {
      id: 'herbal',
      title: locale === 'zh' ? t('common.草药疗法') : 'Herbal Therapy',
      subtitle: locale === 'zh' ? t('common.草药茶中药补充剂等') : 'Herbal teas, TCM, supplements, etc.',
      icon: '🌿',
      color: 'green',
      details: {
        description: locale === 'zh'
          ? t('common.草药疗法利用植物的天')
          : 'Herbal therapy uses natural active compounds from plants to regulate hormonal balance and reduce inflammation, providing gentle yet effective conditioning.',
        methods: locale === 'zh' ? [
          { name: t('common.姜茶'), description: t('common.生姜具有抗炎作用每日') },
          { name: t('common.当归补血汤'), description: t('common.传统中药方剂调理气血') },
          { name: t('common.洋甘菊茶'), description: t('common.具有镇静和抗痉挛作用') },
          { name: t('common.月见草油'), description: t('common.富含亚麻酸调节前列腺') }
        ] : [
          { name: 'Ginger Tea', description: 'Ginger has anti-inflammatory properties, 2-3 cups of warm ginger tea daily' },
          { name: 'Angelica Blood Tonic', description: 'Traditional Chinese medicine formula for qi and blood regulation, consult TCM practitioner' },
          { name: 'Chamomile Tea', description: 'Has sedative and antispasmodic effects, drink before bedtime' },
          { name: 'Evening Primrose Oil', description: 'Rich in γ-linolenic acid, helps balance prostaglandins' }
        ]
      }
    },
    {
      id: 'dietary',
      title: locale === 'zh' ? t('common.饮食调整') : 'Dietary Adjustment',
      subtitle: locale === 'zh' ? t('common.抗炎饮食营养补充等') : 'Anti-inflammatory diet, nutrition, etc.',
      icon: '🍎',
      color: 'blue',
      details: {
        description: locale === 'zh'
          ? t('common.通过科学的饮食调整补')
          : 'Through scientific dietary adjustments and key nutrient supplementation, reduce inflammatory responses and fundamentally improve menstrual pain symptoms.',
        methods: locale === 'zh' ? [
          { name: t('common.增加Omega3'), description: t('common.深海鱼亚麻籽核桃等每') },
          { name: t('common.补充镁元素'), description: t('common.黑巧克力香蕉杏仁每日') },
          { name: t('common.减少糖分摄入'), description: t('common.避免精制糖和加工食品') },
          { name: t('common.增加纤维'), description: t('common.全谷物蔬菜水果促进激') }
        ] : [
          { name: 'Increase Omega-3', description: 'Deep sea fish, flaxseeds, walnuts, 2-3 times per week' },
          { name: 'Magnesium Supplement', description: 'Dark chocolate, bananas, almonds, 300-400mg daily' },
          { name: 'Reduce Sugar Intake', description: 'Avoid refined sugar and processed foods, stabilize blood sugar' },
          { name: 'Increase Fiber', description: 'Whole grains, fruits and vegetables, promote hormone metabolism' }
        ]
      }
    },
    {
      id: 'yoga',
      title: locale === 'zh' ? t('common.瑜伽运动') : 'Yoga & Exercise',
      subtitle: locale === 'zh' ? t('common.瑜伽体式温和运动等') : 'Yoga poses, gentle exercise, etc.',
      icon: '🧘‍♀️',
      color: 'purple',
      details: {
        description: locale === 'zh'
          ? t('common.特定的瑜伽体式和温和')
          : 'Specific yoga poses and gentle exercises can relieve pelvic tension, improve blood circulation, and release endorphins to alleviate pain.',
        methods: locale === 'zh' ? [
          { name: t('common.猫牛式'), description: t('common.缓解下背部紧张促进脊') },
          { name: t('common.婴儿式'), description: t('common.放松骨盆区域缓解腹部') },
          { name: t('common.扭转体式'), description: t('common.刺激腹部器官改善消化') },
          { name: t('common.温和散步'), description: t('common.每日2030分钟促进') }
        ] : [
          { name: 'Cat-Cow Pose', description: 'Relieves lower back tension, promotes spinal flexibility' },
          { name: 'Child\'s Pose', description: 'Relaxes pelvic area, relieves abdominal pressure' },
          { name: 'Twisting Poses', description: 'Stimulates abdominal organs, improves digestion and circulation' },
          { name: 'Gentle Walking', description: '20-30 minutes daily, promotes endorphin release' }
        ]
      }
    },
    {
      id: 'aromatherapy',
      title: locale === 'zh' ? t('common.芳香疗法') : 'Aromatherapy',
      subtitle: locale === 'zh' ? t('common.精油按摩香薰等') : 'Essential oil massage, diffusion, etc.',
      icon: '🌸',
      color: 'pink',
      details: {
        description: locale === 'zh'
          ? t('common.精油的天然芳香分子可')
          : 'Natural aromatic molecules in essential oils can affect the brain through the olfactory system, while topical massage can relieve local pain.',
        methods: locale === 'zh' ? [
          { name: t('common.薰衣草精油'), description: t('common.具有镇静和止痛作用可') },
          { name: t('common.快乐鼠尾草'), description: t('common.调节激素平衡缓解经前') },
          { name: t('common.甜橙精油'), description: t('common.提升情绪减少焦虑和抑') },
          { name: t('common.腹部按摩'), description: t('common.稀释精油按摩下腹部顺') }
        ] : [
          { name: 'Lavender Essential Oil', description: 'Has sedative and analgesic effects, use for massage or diffusion' },
          { name: 'Clary Sage', description: 'Regulates hormonal balance, relieves PMS symptoms' },
          { name: 'Sweet Orange Oil', description: 'Uplifts mood, reduces anxiety and depression' },
          { name: 'Abdominal Massage', description: 'Massage lower abdomen with diluted oils in clockwise direction' }
        ]
      }
    },
    {
      id: 'acupuncture',
      title: locale === 'zh' ? t('common.针灸艾灸') : 'Acupuncture & Moxibustion',
      subtitle: locale === 'zh' ? t('common.传统中医疗法') : 'Traditional Chinese medicine',
      icon: '📍',
      color: 'yellow',
      details: {
        description: locale === 'zh'
          ? t('common.传统中医针灸通过刺激')
          : 'Traditional Chinese acupuncture regulates qi and blood flow by stimulating specific acupoints, while moxibustion achieves conditioning effects through warm stimulation.',
        methods: locale === 'zh' ? [
          { name: t('common.三阴交穴'), description: t('common.位于小腿内侧调节妇科') },
          { name: t('common.关元穴'), description: t('common.位于下腹部温补肾阳调') },
          { name: t('common.血海穴'), description: t('common.位于大腿内侧活血化瘀') },
          { name: t('common.艾灸疗法'), description: t('common.在相关穴位进行艾灸温') }
        ] : [
          { name: 'Sanyinjiao Point', description: 'Located on inner calf, important acupoint for gynecological conditions' },
          { name: 'Guanyuan Point', description: 'Located on lower abdomen, tonifies kidney yang, regulates menstruation' },
          { name: 'Xuehai Point', description: 'Located on inner thigh, promotes blood circulation, regulates menstruation' },
          { name: 'Moxibustion Therapy', description: 'Apply moxibustion to relevant acupoints to warm meridians and dispel cold' }
        ]
      }
    },
    {
      id: 'psychological',
      title: locale === 'zh' ? t('common.心理调节') : 'Psychological Techniques',
      subtitle: locale === 'zh' ? t('common.冥想呼吸法等') : 'Meditation, breathing techniques, etc.',
      icon: '🧠',
      color: 'indigo',
      details: {
        description: locale === 'zh'
          ? t('common.心理调节技巧可以激活')
          : 'Psychological techniques can activate the parasympathetic nervous system, reduce pain sensitivity, and decrease anxiety and stress.',
        methods: locale === 'zh' ? [
          { name: t('common.深呼吸练习'), description: t('common.腹式呼吸吸气4秒屏息') },
          { name: t('common.正念冥想'), description: t('common.专注当下感受接纳疼痛') },
          { name: t('common.渐进性肌肉放松'), description: t('common.从头到脚依次紧张和放') },
          { name: t('common.引导想象'), description: t('common.想象温暖的光芒照射疼') }
        ] : [
          { name: 'Deep Breathing Exercise', description: 'Abdominal breathing: inhale 4 sec - hold 4 sec - exhale 6 sec' },
          { name: 'Mindfulness Meditation', description: 'Focus on present sensations, accept pain without resistance' },
          { name: 'Progressive Muscle Relaxation', description: 'Systematically tense and relax muscle groups from head to toe' },
          { name: 'Guided Imagery', description: 'Visualize warm light radiating to the painful area' }
        ]
      }
    },
    {
      id: 'comprehensive',
      title: locale === 'zh' ? t('common.综合方案') : 'Comprehensive Plans',
      subtitle: locale === 'zh' ? t('common.个性化组合疗法') : 'Personalized combination therapy',
      icon: '🎯',
      color: 'teal',
      details: {
        description: locale === 'zh'
          ? t('common.结合多种自然疗法制定')
          : 'Combine multiple natural therapies to create personalized comprehensive treatment plans for more significant and lasting effects.',
        methods: locale === 'zh' ? [
          { name: t('common.轻度痛经方案'), description: t('common.热敷瑜伽草药茶饮食调') },
          { name: t('common.中度痛经方案'), description: t('common.按摩针灸营养补充心理') },
          { name: t('common.重度痛经方案'), description: t('common.多种物理疗法中药调理') },
          { name: t('common.预防性方案'), description: t('common.日常调理定期评估生活') }
        ] : [
          { name: 'Mild Pain Plan', description: 'Heat therapy + Yoga + Herbal tea + Dietary adjustment' },
          { name: 'Moderate Pain Plan', description: 'Massage + Acupuncture + Nutrition + Psychological techniques' },
          { name: 'Severe Pain Plan', description: 'Multiple physical therapies + TCM + Professional guidance' },
          { name: 'Prevention Plan', description: 'Daily conditioning + Regular assessment + Lifestyle optimization' }
        ]
      }
    }
  ];

  // Define the four pillars of conditioning
  const conditioningPillars = [
    {
      id: 'nutrition',
      title: locale === 'zh' ? t('common.营养疗法') : 'Nutritional Therapy',
      subtitle: locale === 'zh' ? t('common.通过科学饮食调节激素') : 'Regulate hormonal balance and reduce inflammation through scientific diet',
      color: 'green',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      id: 'exercise',
      title: locale === 'zh' ? t('common.运动疗法') : 'Exercise Therapy',
      subtitle: locale === 'zh' ? t('common.规律运动促进内啡肽释') : 'Regular exercise promotes endorphin release and improves circulation',
      color: 'blue',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      )
    },
    {
      id: 'stress',
      title: locale === 'zh' ? t('common.压力管理') : 'Stress Management',
      subtitle: locale === 'zh' ? t('common.慢性压力是痛经加重的') : 'Chronic stress is an important factor in worsening menstrual pain',
      color: 'purple',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      id: 'sleep',
      title: locale === 'zh' ? t('common.睡眠优化') : 'Sleep Optimization',
      subtitle: locale === 'zh' ? t('common.优质睡眠是激素平衡的') : 'Quality sleep is the foundation of hormonal balance',
      color: 'indigo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locale === 'zh' ? t('common.平时调理方案') : 'Daily Conditioning Plan'}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              {locale === 'zh'
                ? t('common.通过科学的生活方式调')
                : 'Prevent and reduce menstrual pain fundamentally through scientific lifestyle adjustments'
              }
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold mb-3">
                🌱 {locale === 'zh' ? t('common.长期改善') : 'Long-term Improvement'}
              </h2>
              <p className="text-sm opacity-90">
                {locale === 'zh'
                  ? t('common.坚持科学的调理方法3')
                  : 'Stick to scientific conditioning methods for significant improvement in menstrual pain within 3-6 monthst('common.p')py-16 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-autot('common.专栏标题')text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🌿 {locale === 'zh' ? t('common.痛经自然疗法大全') : 'Complete Guide to Natural Menstrual Pain Relief'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {locale === 'zh'
                  ? t('common.科学验证的非药物缓解')
                  : 'Scientifically validated non-pharmaceutical relief solutions to naturally soothe menstrual paint('common.p')bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    {locale === 'zh' ? t('common.重要医疗免责声明') : 'Important Medical Disclaimer'}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      {locale === 'zh'
                        ? t('common.本页面提供的自然疗法')
                        : 'The natural therapy information provided on this page is for educational and reference purposes only and cannot replace professional medical advice, diagnosis or treatment. Before trying any natural therapy, especially if you have the following conditions, please consult a qualified healthcare provider:'
                      }
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>{locale === 'zh' ? t('common.严重或持续的痛经症状') : 'Severe or persistent menstrual pain symptoms'}</li>
                      <li>{locale === 'zh' ? t('common.正在服用处方药物') : 'Currently taking prescription medications'}</li>
                      <li>{locale === 'zh' ? t('common.有慢性疾病或过敏史') : 'History of chronic diseases or allergies'}</li>
                      <li>{locale === 'zh' ? t('common.怀孕或哺乳期') : 'Pregnancy or breastfeeding'}</li>
                      <li>{locale === 'zh' ? t('common.症状突然加重或性质改') : 'Sudden worsening or change in symptom nature'}</li>
                    </ul>
                    <p className="mt-2">
                      {locale === 'zh'
                        ? t('common.如果出现剧烈疼痛发热')
                        : 'If you experience severe pain, fever, abnormal bleeding or other symptoms, seek medical attention immediately.t('common.p')bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                📋 {locale === 'zh' ? '快速导航' : 'Quick Navigation'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <button
                  onClick={() => document.getElementById('pain-assessment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left p-3 rounded-lg border border-rose-200 hover:border-rose-300 hover:bg-rose-50 transition-colors"
                >
                  <div className="text-rose-600 font-medium text-sm">🎯 {locale === 'zh' ? t('common.痛经自测') : 'Pain Assessment'}</div>
                </button>
                <button
                  onClick={() => document.getElementById('emergency-relief')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left p-3 rounded-lg border border-red-200 hover:border-red-300 hover:bg-red-50 transition-colors"
                >
                  <div className="text-red-600 font-medium text-sm">⚡ {locale === 'zh' ? t('common.5分钟急救') : '5-Min Emergency'}</div>
                </button>
                <button
                  onClick={() => document.getElementById('therapy-overview')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left p-3 rounded-lg border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="text-blue-600 font-medium text-sm">📚 {locale === 'zh' ? t('common.疗法概述') : 'Therapy Overview'}</div>
                </button>
                <button
                  onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left p-3 rounded-lg border border-green-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                >
                  <div className="text-green-600 font-medium text-sm">📥 {locale === 'zh' ? t('common.工具下载') : 'Tool Downloadst('common.div')pain-assessment" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 {locale === 'zh' ? t('common.痛经程度自测') : 'Menstrual Pain Assessment'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'zh'
                  ? t('common.在探索自然疗法前了解')
                  : 'Understanding your menstrual pain level before exploring natural therapies can help choose the most suitable approach.'
                }
              </p>

              <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-rose-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale === 'zh' ? t('common.使用现有的痛经评估工') : 'Use Existing Pain Assessment Tool'}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {locale === 'zh'
                      ? t('common.我们已经为您准备了专')
                      : 'We have prepared a professional menstrual pain assessment tool for you. Click the button below to start the test.'
                    }
                  </p>
                  <Link
                    href={`/${locale}/interactive-tools/period-pain-assessment`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
                  >
                    {locale === 'zh' ? t('common.开始痛经评估') : 'Start Pain Assessment'}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6t('common.path')emergency-relief" className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚡ {locale === 'zh' ? t('common.5分钟急救方案') : '5-Minute Emergency Relief'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'zh'
                  ? t('common.正在经历痛经这些方法')
                  : 'Currently experiencing menstrual pain? These methods can start providing relief within 5 minutes.'
                }
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🔥</span>
                    <h4 className="font-semibold text-lg">{locale === 'zh' ? t('common.立即热敷') : 'Immediate Heat Therapy'}</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {locale === 'zh' ? t('common.热水袋放在下腹部') : 'Place hot water bottle on lower abdomen'}</li>
                    <li>• {locale === 'zh' ? t('common.温度4045C持续1') : 'Temperature 40-45°C, for 15 minutes'}</li>
                    <li>• {locale === 'zh' ? t('common.可同时热敷腰部') : 'Can simultaneously apply to lower back'}</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-400">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🫁</span>
                    <h4 className="font-semibold text-lg">{locale === 'zh' ? t('common.深呼吸放松') : 'Deep Breathing Relaxation'}</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {locale === 'zh' ? t('common.腹式呼吸吸气4秒') : 'Abdominal breathing, inhale for 4 seconds'}</li>
                    <li>• {locale === 'zh' ? t('common.屏息4秒呼气6秒') : 'Hold for 4 seconds, exhale for 6 seconds'}</li>
                    <li>• {locale === 'zh' ? t('common.重复10次') : 'Repeat 10 times'}</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">👐</span>
                    <h4 className="font-semibold text-lg">{locale === 'zh' ? t('common.穴位按压') : 'Acupressure Points'}</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {locale === 'zh' ? t('common.按压合谷穴30秒') : 'Press Hegu point for 30 seconds'}</li>
                    <li>• {locale === 'zh' ? t('common.按压三阴交穴30秒') : 'Press Sanyinjiao point for 30 seconds'}</li>
                    <li>• {locale === 'zh' ? t('common.轻柔按摩关元穴') : 'Gently massage Guanyuan point'}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
                <p className="text-sm text-red-700">
                  <strong>{locale === 'zh' ? t('common.紧急提醒') : 'Emergency Alert:'}</strong>
                  {locale === 'zh'
                    ? t('common.如果疼痛剧烈且持续伴')
                    : 'If pain is severe and persistent, accompanied by fever, nausea, vomiting, or abnormal bleeding, seek medical attention immediately.t('common.p')therapy-overview" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📚 {locale === 'zh' ? t('common.自然疗法概述') : 'Natural Therapy Overview'}
              </h3>

              <div className="prose max-w-none mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {locale === 'zh'
                    ? t('common.痛经医学术语痛经症经')
                    : 'Dysmenorrhea refers to lower abdominal pain that occurs during or around menstruation, often accompanied by back pain, headaches, nausea and other symptoms. According to World Health Organization (WHO) data, approximately 50-90% of women of reproductive age worldwide have experienced varying degrees of menstrual pain, with about 10-20% suffering from severe menstrual pain that seriously affects quality of life.t('common.p')mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  🔬 {locale === 'zh' ? t('common.自然疗法的科学基础') : 'Scientific Foundation of Natural Therapies'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {locale === 'zh'
                    ? t('common.痛经主要由子宫内膜释')
                    : 'Menstrual pain is primarily caused by excessive prostaglandins released by the endometrium, which cause strong uterine contractions and reduced blood flow, resulting in pain. The mechanisms of natural therapies mainly include:'
                  }
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-600 text-xl mr-2">🩸</span>
                      <h5 className="font-semibold text-blue-800">{locale === 'zh' ? t('common.改善血液循环') : 'Improve Blood Circulation'}</h5>
                    </div>
                    <p className="text-sm text-blue-700">
                      {locale === 'zh'
                        ? t('common.热敷特定运动和按摩等')
                        : 'Physical therapies such as heat therapy, specific exercises and massage can increase pelvic blood circulation, relieve muscle tension, and reduce pain.'
                      }
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-purple-600 text-xl mr-2">🧠</span>
                      <h5 className="font-semibold text-purple-800">{locale === 'zh' ? t('common.调节神经系统') : 'Regulate Nervous System'}</h5>
                    </div>
                    <p className="text-sm text-purple-700">
                      {locale === 'zh'
                        ? t('common.冥想深呼吸等心理技巧')
                        : 'Psychological techniques such as meditation and deep breathing can activate the parasympathetic nervous system and reduce pain sensitivity.'
                      }
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-green-600 text-xl mr-2">⚖️</span>
                      <h5 className="font-semibold text-green-800">{locale === 'zh' ? t('common.调节荷尔蒙平衡') : 'Balance Hormones'}</h5>
                    </div>
                    <p className="text-sm text-green-700">
                      {locale === 'zh'
                        ? t('common.某些草药和饮食调整可')
                        : 'Certain herbs and dietary adjustments can help balance estrogen and progesterone levels.'
                      }
                    </p>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-600 text-xl mr-2">🔥</span>
                      <h5 className="font-semibold text-orange-800">{locale === 'zh' ? t('common.减少炎症') : 'Reduce Inflammation'}</h5>
                    </div>
                    <p className="text-sm text-orange-700">
                      {locale === 'zh'
                        ? t('common.姜黄素omega3脂')
                        : 'Natural anti-inflammatory components like curcumin and omega-3 fatty acids can suppress inflammatory responses and reduce prostaglandin production.'
                      }
                    </p>
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-pink-600 text-xl mr-2">💪</span>
                      <h5 className="font-semibold text-pink-800">{locale === 'zh' ? t('common.缓解肌肉紧张') : 'Relieve Muscle Tension'}</h5>
                    </div>
                    <p className="text-sm text-pink-700">
                      {locale === 'zh'
                        ? t('common.特定的瑜伽姿势伸展运')
                        : 'Specific yoga poses and stretching exercises can relax muscles in the pelvic region.t('common.p')mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  🗂️ {locale === 'zh' ? '自然疗法分类' : 'Natural Therapy Categories'}
                </h4>
                <p className="text-gray-600 mb-6">
                  {locale === 'zh'
                    ? t('common.点击下方卡片了解每种')
                    : 'Click the cards below to learn detailed information and specific methods for each therapy.'
                  }
                </p>

                <div className="space-y-4">
                  {therapyCategories.map((therapy) => (
                    <div key={therapy.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedTherapy(expandedTherapy === therapy.id ? null : therapy.id)}
                        className={`w-full p-6 text-left transition-all duration-200 ${
                          expandedTherapy === therapy.id
                            ? getExpandedCardClasses(therapy.color)
                            : getCardClasses(therapy.color)
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-3xl mr-4">{therapy.icon}</span>
                            <div>
                              <h5 className={`font-semibold text-lg ${getTextClasses(therapy.color)} mb-1`}>
                                {therapy.title}
                              </h5>
                              <p className={`text-sm ${getSubtitleClasses(therapy.color)}`}>
                                {therapy.subtitle}
                              </p>
                            </div>
                          </div>
                          <svg
                            className={`w-5 h-5 ${getSubtitleClasses(therapy.color)} transform transition-transform duration-200 ${
                              expandedTherapy === therapy.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </button>

                      {expandedTherapy === therapy.id && (
                        <div className={`p-6 bg-white border-t ${getBorderClasses(therapy.color)}`}>
                          <p className="text-gray-700 mb-6">{therapy.details.description}</p>

                          <h6 className="font-semibold text-gray-900 mb-4">
                            {locale === 'zh' ? t('common.具体方法') : 'Specific Methods:'}
                          </h6>

                          <div className="grid md:grid-cols-2 gap-4">
                            {therapy.details.methods.map((method, index) => (
                              <div key={index} className={`p-4 ${getMethodCardClasses(therapy.color)} border rounded-lg`}>
                                <h6 className={`font-medium ${getMethodTextClasses(therapy.color)} mb-2 block`}>
                                  {method.name}
                                </h6>
                                <p className={`text-sm ${getMethodDescClasses(therapy.color)}t('common.methoddesc')bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      {locale === 'zh' ? t('common.重要提示') : 'Important Note'}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {locale === 'zh'
                        ? t('common.本指南中的自然疗法主')
                        : 'The natural therapies in this guide are primarily suitable for primary dysmenorrhea (menstrual pain without organic pathology). If you suspect you may have endometriosis, uterine fibroids, or other conditions, or experience abnormally severe menstrual pain, please consult a medical professional first. Natural therapies should be part of a comprehensive pain management strategy, not a replacement for necessary medical diagnosis and treatment.t('common.p')downloads" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📥 {locale === 'zh' ? t('common.实用工具下载') : 'Practical Tool Downloads'}
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'zh'
                  ? t('common.我们为您准备了专业的')
                  : 'We have prepared professional menstrual pain management tools to help you better track symptoms and evaluate treatment effectiveness.'
                }
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-green-200">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">📋</span>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {locale === 'zh' ? t('common.痛经症状追踪表') : 'Pain Tracking Form'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {locale === 'zh'
                      ? t('common.追踪您的症状变化和治')
                      : 'Track your symptom changes and treatment effects to help identify the most effective relief methods.'
                    }
                  </p>
                  <div className="space-y-2">
                    <a
                      href={locale === 'zh' ? "/downloads/pain-tracking-form.pdf" : "/downloads/pain-tracking-form-en.pdf"}
                      className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locale === 'zh' ? t('common.下载表格') : 'Download Form'}
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">📊</span>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {locale === 'zh' ? t('common.自然疗法效果评估表') : 'Natural Therapy Assessment'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {locale === 'zh'
                      ? t('common.评估不同自然疗法的个')
                      : 'Evaluate the personal effectiveness of different natural therapies to find the treatment combination that works best for you.'
                    }
                  </p>
                  <div className="space-y-2">
                    <a
                      href={locale === 'zh' ? "/downloads/natural-therapy-assessment.pdf" : "/downloads/natural-therapy-assessment-en.pdf"}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locale === 'zh' ? t('common.下载评估表') : 'Download Assessment'}
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-200">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🍎</span>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {locale === 'zh' ? t('common.月经周期营养计划') : 'Menstrual Cycle Nutrition Plan'}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {locale === 'zh'
                      ? t('common.个性化的饮食和运动安')
                      : 'Personalized diet and exercise arrangements for scientific conditioning in sync with your menstrual cycle.'
                    }
                  </p>
                  <div className="space-y-2">
                    <a
                      href={locale === 'zh' ? "/downloads/menstrual-cycle-nutrition-plan.pdf" : "/downloads/menstrual-cycle-nutrition-plan-en.pdf"}
                      className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {locale === 'zh' ? t('common.下载营养计划') : 'Download Nutrition Plan'}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-600">
                    {locale === 'zh'
                      ? t('common.提示建议打印这些表格')
                      : '💡 Tip: We recommend printing these forms - handwritten records are more helpful for building healthy habits than electronic records.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Conditioning Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {locale === 'zh' ? t('common.调理核心原则') : 'Core Conditioning Principles'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Prevention First */}
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {locale === 'zh' ? t('common.预防为主') : 'Prevention First'}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'zh'
                    ? t('common.建立长期健康习惯从根')
                    : 'Establish long-term healthy habits to prevent menstrual pain from the root cause'
                  }
                </p>
              </div>

              {/* Gradual Progress */}
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {locale === 'zh' ? t('common.循序渐进') : 'Gradual Progress'}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'zh'
                    ? t('common.逐步调整生活方式避免')
                    : 'Gradually adjust lifestyle, avoid radical changes'
                  }
                </p>
              </div>

              {/* Personalized Adjustment */}
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {locale === 'zh' ? t('common.个性化调整') : 'Personalized Adjustment'}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'zh'
                    ? t('common.根据个人体质和反应调')
                    : 'Adjust plans based on individual constitution and response'
                  }
                </p>
              </div>

              {/* Persistent Commitment */}
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {locale === 'zh' ? t('common.持续坚持') : 'Persistent Commitment'}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'zh'
                    ? t('common.调理需要时间坚持36')
                    : 'Conditioning takes time, persist for 3-6 months to see results'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars of Conditioning */}
      <section className="py-16 bg-gray-100 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {locale === 'zh' ? t('common.四大调理支柱') : 'Four Pillars of Conditioning'}
            </h2>

            {/* Nutritional Therapy */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    {locale === 'zh' ? t('common.营养疗法') : 'Nutritional Therapy'}
                  </h3>
                  <p className="text-green-600">
                    {locale === 'zh' ? t('common.通过科学饮食调节激素') : 'Regulate hormonal balance and reduce inflammation through scientific diet'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Anti-inflammatory Foods */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">
                    {locale === 'zh' ? t('common.抗炎食物') : 'Anti-inflammatory Foods'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">🐟</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.深海鱼类') : 'Deep Sea Fish'}</strong>
                        <p className="text-sm text-green-600">
                          {locale === 'zh' ? t('common.富含Omega3脂肪') : 'Rich in Omega-3 fatty acids, 2-3 times per week'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">🥬</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.绿叶蔬菜') : 'Leafy Greens'}</strong>
                        <p className="text-sm text-green-600">
                          {locale === 'zh' ? t('common.菠菜羽衣甘蓝富含镁和') : 'Spinach, kale, rich in magnesium and folate'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">🫐</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.莓类水果') : 'Berries'}</strong>
                        <p className="text-sm text-green-600">
                          {locale === 'zh' ? t('common.蓝莓草莓抗氧化剂丰富') : 'Blueberries, strawberries, rich in antioxidants'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">🥜</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.坚果种子') : 'Nuts & Seeds'}</strong>
                        <p className="text-sm text-green-600">
                          {locale === 'zh' ? t('common.核桃亚麻籽健康脂肪源') : 'Walnuts, flaxseeds, healthy fat sources'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Key Nutrients */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">
                    {locale === 'zh' ? t('common.关键营养素') : 'Key Nutrients'}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <strong className="text-blue-600">
                        {locale === 'zh' ? t('common.镁300400mg') : 'Magnesium (300-400mg/day)'}
                      </strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.放松肌肉减少痉挛') : 'Relax muscles, reduce spasms'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {locale === 'zh' ? t('common.来源黑巧克力香蕉杏仁') : 'Sources: Dark chocolate, bananas, almonds'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong className="text-blue-600">
                        {locale === 'zh' ? t('common.维生素D10002') : 'Vitamin D (1000-2000IU/day)'}
                      </strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.调节免疫减少炎症') : 'Regulate immunity, reduce inflammation'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {locale === 'zh' ? t('common.来源阳光照射鱼肝油') : 'Sources: Sunlight exposure, fish oil'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong className="text-blue-600">
                        {locale === 'zh' ? t('common.Omega312g') : 'Omega-3 (1-2g/day)'}
                      </strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.抑制前列腺素合成') : 'Inhibit prostaglandin synthesis'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {locale === 'zh' ? t('common.来源鱼油亚麻籽油') : 'Sources: Fish oil, flaxseed oil'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Foods to Limit */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-700 mb-4">
                    {locale === 'zh' ? t('common.建议限制') : 'Recommended Limits'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">⚠️</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.精制糖') : 'Refined Sugar'}</strong>
                        <p className="text-sm text-red-600">
                          {locale === 'zh' ? t('common.加重炎症反应影响激素') : 'Worsen inflammatory response, affect hormonal balance'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">☕</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.过量咖啡因') : 'Excessive Caffeine'}</strong>
                        <p className="text-sm text-red-600">
                          {locale === 'zh' ? t('common.可能增加紧张感限制在') : 'May increase tension, limit to 2 cups/day'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">🧂</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.高钠食物') : 'High Sodium Foods'}</strong>
                        <p className="text-sm text-red-600">
                          {locale === 'zh' ? t('common.加重水肿和腹胀') : 'Worsen edema and bloating'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">🥩</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.过多红肉') : 'Excessive Red Meat'}</strong>
                        <p className="text-sm text-red-600">
                          {locale === 'zh' ? t('common.可能促进炎症适量食用') : 'May promote inflammation, consume in moderation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Meal Plan */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4">
                  💡 {locale === 'zh' ? t('common.调理期推荐食谱') : 'Recommended Recipes for Conditioning Period'}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-600">{locale === 'zh' ? t('common.早餐') : 'Breakfast'}</strong>
                    <p className="text-sm text-gray-700">
                      {locale === 'zh' ? t('common.燕麦蓝莓核桃') : 'Oats + Blueberries + Walnuts + Soy Milk'}
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-600">{locale === 'zh' ? t('common.午餐') : 'Lunch'}</strong>
                    <p className="text-sm text-gray-700">
                      {locale === 'zh' ? t('common.三文鱼糙米蒸') : 'Salmon + Brown Rice + Steamed Vegetables'}
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-600">{locale === 'zh' ? t('common.晚餐') : 'Dinner'}</strong>
                    <p className="text-sm text-gray-700">
                      {locale === 'zh' ? t('common.豆腐菠菜汤少') : 'Tofu + Spinach Soup + Small Amount of Brown Rice'}
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <strong className="text-green-600">{locale === 'zh' ? t('common.零食') : 'Snacks'}</strong>
                    <p className="text-sm text-gray-700">
                      {locale === 'zh' ? t('common.杏仁绿茶黑巧') : 'Almonds + Green Tea + Dark Chocolate'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercise Therapy */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">
                    {locale === 'zh' ? t('common.运动疗法') : 'Exercise Therapy'}
                  </h3>
                  <p className="text-blue-600">
                    {locale === 'zh' ? t('common.规律运动促进内啡肽释') : 'Regular exercise promotes endorphin release and improves circulation'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Aerobic Exercise */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">
                    {locale === 'zh' ? t('common.有氧运动') : 'Aerobic Exercise'}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">{locale === 'zh' ? t('common.强度') : 'Intensity'}</p>
                      <p className="text-xs text-blue-600">{locale === 'zh' ? t('common.中等强度') : 'Moderate'}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.快走') : 'Brisk Walking:'}</strong>
                        {locale === 'zh' ? t('common.30分钟每周45次') : '30 min, 4-5 times/week'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.游泳') : 'Swimming:'}</strong>
                        {locale === 'zh' ? t('common.25分钟每周3次') : '25 min, 3 times/week'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.骑行') : 'Cycling:'}</strong>
                        {locale === 'zh' ? t('common.45分钟每周23次') : '45 min, 2-3 times/week'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.舞蹈') : 'Dancing:'}</strong>
                        {locale === 'zh' ? t('common.30分钟每周23次') : '30 min, 2-3 times/week'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Yoga */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-700 mb-4">
                    {locale === 'zh' ? t('common.瑜伽练习') : 'Yoga Practice'}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">{locale === 'zh' ? t('common.频率') : 'Frequency'}</p>
                      <p className="text-xs text-purple-600">{locale === 'zh' ? t('common.每周34次') : '3-4 times/week'}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.扭转体式') : 'Twisting Poses:'}</strong>
                        {locale === 'zh' ? t('common.缓解腹部紧张') : 'Relieve abdominal tension'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.前屈体式') : 'Forward Bends:'}</strong>
                        {locale === 'zh' ? t('common.放松神经系统') : 'Relax nervous system'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.髋部开启') : 'Hip Openers:'}</strong>
                        {locale === 'zh' ? t('common.改善盆腔血流') : 'Improve pelvic circulation'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.倒立体式') : 'Inversions:'}</strong>
                        {locale === 'zh' ? t('common.调节内分泌') : 'Regulate endocrine system'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strength Training */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">
                    {locale === 'zh' ? t('common.力量训练') : 'Strength Training'}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">{locale === 'zh' ? t('common.重点') : 'Focus'}</p>
                      <p className="text-xs text-green-600">{locale === 'zh' ? t('common.核心稳定') : 'Core Stability'}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.平板支撑') : 'Plank:'}</strong>
                        {locale === 'zh' ? t('common.3060秒3组') : '30-60 sec × 3 sets'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.桥式') : 'Bridge:'}</strong>
                        {locale === 'zh' ? t('common.1520次3组') : '15-20 reps × 3 sets'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.深蹲') : 'Squats:'}</strong>
                        {locale === 'zh' ? t('common.1215次3组') : '12-15 reps × 3 sets'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.鸟狗式') : 'Bird Dog:'}</strong>
                        {locale === 'zh' ? t('common.10次侧2组') : '10 reps/side × 2 sets'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pelvic Floor */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-700 mb-4">
                    {locale === 'zh' ? t('common.盆底训练') : 'Pelvic Floor Training'}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">{locale === 'zh' ? t('common.专项') : 'Specialized'}</p>
                      <p className="text-xs text-orange-600">{locale === 'zh' ? t('common.每日练习') : 'Daily Practice'}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.凯格尔运动') : 'Kegel Exercise:'}</strong>
                        {locale === 'zh' ? t('common.收缩5秒10次') : '5 sec hold × 10 reps'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.深呼吸') : 'Deep Breathing:'}</strong>
                        {locale === 'zh' ? t('common.配合盆底收放') : 'With pelvic floor engagement'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.臀桥变式') : 'Bridge Variations:'}</strong>
                        {locale === 'zh' ? t('common.加强盆底肌群') : 'Strengthen pelvic floor'}
                      </div>
                      <div className="bg-white rounded p-2 text-sm">
                        <strong>{locale === 'zh' ? t('common.猫牛式') : 'Cat-Cow:'}</strong>
                        {locale === 'zh' ? t('common.活动骨盆') : 'Mobilize pelvis'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise Schedule */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-4">
                  📅 {locale === 'zh' ? t('common.周运动计划') : 'Weekly Exercise Plan'}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="p-2 text-left">{locale === 'zh' ? t('common.日期') : 'Day'}</th>
                        <th className="p-2 text-left">{locale === 'zh' ? t('common.运动类型') : 'Exercise Type'}</th>
                        <th className="p-2 text-left">{locale === 'zh' ? t('common.时长') : 'Duration'}</th>
                        <th className="p-2 text-left">{locale === 'zh' ? t('common.注意事项') : 'Notes'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周一') : 'Monday'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.有氧运动盆底训练') : 'Aerobic + Pelvic Floor'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.45分钟') : '45 min'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.记录心率') : 'Monitor heart rate'}</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周二') : 'Tuesday'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.瑜伽伸展') : 'Yoga + Stretching'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.60分钟') : '60 min'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.专注呼吸') : 'Focus on breathing'}</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周三') : 'Wednesday'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.力量训练') : 'Strength Training'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.30分钟') : '30 min'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.轻重量多次数') : 'Light weight, high reps'}</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周四') : 'Thursday'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.有氧运动') : 'Aerobic Exercise'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.40分钟') : '40 min'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.保持中等强度') : 'Maintain moderate intensity'}</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周五') : 'Friday'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.瑜伽冥想') : 'Yoga + Meditation'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.50分钟') : '50 min'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.放松为主') : 'Focus on relaxation'}</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="p-2 font-semibold">{locale === 'zh' ? t('common.周末') : 'Weekend'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.户外活动休息') : 'Outdoor Activity / Rest'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.自由安排') : 'Flexible'}</td>
                        <td className="p-2">{locale === 'zh' ? t('common.享受运动乐趣') : 'Enjoy movement'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Stress Management */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">
                    {locale === 'zh' ? t('common.压力管理') : 'Stress Management'}
                  </h3>
                  <p className="text-purple-600">
                    {locale === 'zh' ? t('common.慢性压力是痛经加重的') : 'Chronic stress is a major factor in worsening menstrual pain'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mindfulness */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-700 mb-4">
                    {locale === 'zh' ? t('common.正念练习') : 'Mindfulness Practice'}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.正念冥想') : 'Mindful Meditation'}</strong>
                      <p className="text-sm text-purple-600 mt-1">
                        {locale === 'zh' ? t('common.每日1520分钟专注') : '15-20 min daily, focus on present'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.身体扫描') : 'Body Scan'}</strong>
                      <p className="text-sm text-purple-600 mt-1">
                        {locale === 'zh' ? t('common.觉察身体感受释放紧张') : 'Awareness of body sensations, release tension'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.正念饮食') : 'Mindful Eating'}</strong>
                      <p className="text-sm text-purple-600 mt-1">
                        {locale === 'zh' ? t('common.慢食品味每一口') : 'Slow eating, savor each bite'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Relaxation Techniques */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">
                    {locale === 'zh' ? t('common.放松技巧') : 'Relaxation Techniques'}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.渐进性肌肉放松') : 'Progressive Muscle Relaxation'}</strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.从头到脚逐一放松') : 'Head to toe, systematic relaxation'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.芳香疗法') : 'Aromatherapy'}</strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.薰衣草洋甘菊精油') : 'Lavender, chamomile essential oils'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.音乐治疗') : 'Music Therapy'}</strong>
                      <p className="text-sm text-blue-600 mt-1">
                        {locale === 'zh' ? t('common.舒缓音乐降低皮质醇') : 'Soothing music, reduce cortisol'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lifestyle Adjustments */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">
                    {locale === 'zh' ? t('common.生活调整') : 'Lifestyle Adjustments'}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.时间管理') : 'Time Management'}</strong>
                      <p className="text-sm text-green-600 mt-1">
                        {locale === 'zh' ? t('common.合理安排避免过度疲劳') : 'Reasonable scheduling, avoid overexertion'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.社交支持') : 'Social Support'}</strong>
                      <p className="text-sm text-green-600 mt-1">
                        {locale === 'zh' ? t('common.与朋友分享获得理解') : 'Share with friends, gain understanding'}
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <strong>{locale === 'zh' ? t('common.兴趣爱好') : 'Hobbies'}</strong>
                      <p className="text-sm text-green-600 mt-1">
                        {locale === 'zh' ? t('common.培养爱好转移注意力') : 'Develop hobbies, redirect attention'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sleep Optimization */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                    {locale === 'zh' ? t('common.睡眠优化') : 'Sleep Optimization'}
                  </h3>
                  <p className="text-indigo-600">
                    {locale === 'zh' ? t('common.优质睡眠是激素平衡的') : 'Quality sleep is the foundation of hormonal balance'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-700 mb-4">
                    {locale === 'zh' ? t('common.睡眠卫生') : 'Sleep Hygiene'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">🕙</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.固定作息') : 'Fixed Schedule'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.每天同一时间睡觉和起') : 'Sleep and wake at the same time daily'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">🌙</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.睡前仪式') : 'Bedtime Ritual'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.洗澡阅读轻柔音乐') : 'Bath, reading, soft music'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">📱</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.电子设备') : 'Electronic Devices'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.睡前1小时停用手机平') : 'Stop using devices 1 hour before bed'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">🌡️</span>
                      <div>
                        <strong>{locale === 'zh' ? t('common.睡眠环境') : 'Sleep Environment'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.凉爽1820C黑暗安') : 'Cool (18-20°C), dark, quiet'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-indigo-700 mb-4">
                    {locale === 'zh' ? t('common.经期睡眠调整') : 'Menstrual Sleep Adjustments'}
                  </h4>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="border-l-3 border-indigo-400 pl-3">
                        <strong>{locale === 'zh' ? t('common.经前期') : 'Pre-menstrual'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.可能需要额外30分钟') : 'May need extra 30 minutes of sleep'}
                        </p>
                      </div>
                      <div className="border-l-3 border-indigo-400 pl-3">
                        <strong>{locale === 'zh' ? t('common.经期中') : 'During Menstruation'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.使用热垫缓解不适保证') : 'Use heating pad for comfort, ensure sleep quality'}
                        </p>
                      </div>
                      <div className="border-l-3 border-indigo-400 pl-3">
                        <strong>{locale === 'zh' ? t('common.经期后') : 'Post-menstrual'}</strong>
                        <p className="text-sm text-indigo-600">
                          {locale === 'zh' ? t('common.恢复正常作息补充体力') : 'Return to normal schedule, restore energy'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-gray-50 border border-gray-300 rounded p-4">
                    <h5 className="font-semibold mb-2">
                      {locale === 'zh' ? t('common.促进睡眠的天然方法') : 'Natural Sleep Aids'}
                    </h5>
                    <ul className="text-sm space-y-1">
                      <li>• {locale === 'zh' ? t('common.洋甘菊茶睡前1小时') : 'Chamomile tea (1 hour before bed)'}</li>
                      <li>• {locale === 'zh' ? t('common.镁补充剂200300') : 'Magnesium supplement (200-300mg)'}</li>
                      <li>• {locale === 'zh' ? t('common.薰衣草精油芳香疗法') : 'Lavender essential oil aromatherapy'}</li>
                      <li>• {locale === 'zh' ? t('common.温水泡脚睡前20分钟') : 'Warm foot soak (20 min before bed)'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                    {locale === 'zh' ? t('common.调理进度跟踪') : 'Progress Tracking'}
                  </h3>
                  <p className="text-emerald-600">
                    {locale === 'zh' ? t('common.监测改善效果调整调理') : 'Monitor improvement and adjust treatment plan'}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-center">
                  📊 {locale === 'zh' ? t('common.预期改善时间线') : 'Expected Improvement Timeline'}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-yellow-600 font-bold">
                          {locale === 'zh' ? t('common.2周') : '2wk'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded p-4 ml-4">
                      <h4 className="font-semibold text-yellow-700">
                        {locale === 'zh' ? t('common.初期适应') : 'Initial Adaptation'}
                      </h4>
                      <p className="text-sm text-yellow-600">
                        {locale === 'zh' ? t('common.身体开始适应新的生活') : 'Body begins adapting to new lifestyle, sleep quality may improve'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-orange-600 font-bold">
                          {locale === 'zh' ? t('common.1月') : '1mo'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-orange-50 border border-orange-200 rounded p-4 ml-4">
                      <h4 className="font-semibold text-orange-700">
                        {locale === 'zh' ? t('common.初步改善') : 'Initial Improvement'}
                      </h4>
                      <p className="text-sm text-orange-600">
                        {locale === 'zh' ? t('common.压力水平降低部分女性') : 'Stress levels decrease, some women begin to feel pain intensity reduction'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-blue-600 font-bold">
                          {locale === 'zh' ? t('common.3月') : '3mo'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded p-4 ml-4">
                      <h4 className="font-semibold text-blue-700">
                        {locale === 'zh' ? t('common.显著改善') : 'Significant Improvement'}
                      </h4>
                      <p className="text-sm text-blue-600">
                        {locale === 'zh' ? t('common.激素平衡改善疼痛频率') : 'Hormonal balance improves, pain frequency and intensity significantly decrease, overall health improves'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-20 flex-shrink-0 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-green-600 font-bold">
                          {locale === 'zh' ? t('common.6月') : '6mo'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-green-50 border border-green-200 rounded p-4 ml-4">
                      <h4 className="font-semibold text-green-700">
                        {locale === 'zh' ? t('common.稳定改善') : 'Stable Improvement'}
                      </h4>
                      <p className="text-sm text-green-600">
                        {locale === 'zh' ? t('common.新的健康习惯完全建立') : 'New healthy habits fully established, menstrual pain symptoms reach expected improvement'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    💡 {locale === 'zh' ? t('common.成功的关键') : 'Keys to Success'}
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• {locale === 'zh' ? t('common.坚持性每天执行计划形') : 'Consistency: Execute plan daily, form habits'}</li>
                    <li>• {locale === 'zh' ? t('common.耐心改善需要时间不要') : 'Patience: Improvement takes time, don\'t rush'}</li>
                    <li>• {locale === 'zh' ? t('common.记录使用痛经追踪器记') : 'Recording: Use pain tracker to record progress'}</li>
                    <li>• {locale === 'zh' ? t('common.调整根据效果和感受及') : 'Adjustment: Modify plan based on results and feelings'}</li>
                    <li>• {locale === 'zh' ? t('common.专业指导必要时咨询医') : 'Professional guidance: Consult doctor when necessary'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
        <p className="text-neutral-700">
          <strong className="text-primary-700">
            {locale === 'zh' ? t('common.免责声明') : 'Disclaimer:'}
          </strong>
          {locale === 'zh'
            ? t('common.有关自然疗法的信息仅')
            : 'The information on natural therapies is for educational purposes only. It is not intended to replace professional medical advice. Always consult with a healthcare provider for any health concerns or before making any changes to your health regimen.'
          }
        </p>
      </section>
    </div>
  );
}
