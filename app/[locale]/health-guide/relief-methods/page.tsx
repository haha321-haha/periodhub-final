import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/i18n';

// Generate metadata for the page
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const title = locale === 'zh' ? t('healthGuide.AZ缓解方法痛经') : 'A-Z Relief Methods - Health Guide';
  const description = locale === 'zh' 
    ? t('healthGuide.从A到Z的全面缓解方')
    : 'Comprehensive relief methods from A to Z, including immediate and long-term strategies to help you find the most suitable menstrual pain management plan.';
  
  return {
    title,
    description,
  };
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ReliefMethodsPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {

  const reliefMethods = [
    {
      letter: 'A',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.穴位按摩Acupr') : 'Acupressure',
          description: locale === 'zh' ? t('healthGuide.通过按压特定穴位来缓') : 'Relieve pain by pressing specific acupoints'
        },
        {
          name: locale === 'zh' ? t('healthGuide.芳香疗法Aroma') : 'Aromatherapy',
          description: locale === 'zh' ? t('healthGuide.使用精油进行放松和疼') : 'Use essential oils for relaxation and pain relief'
        }
      ]
    },
    {
      letter: 'B',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.呼吸练习Breat') : 'Breathing Exercises',
          description: locale === 'zh' ? t('healthGuide.深呼吸技巧帮助放松和') : 'Deep breathing techniques help relax and reduce pain'
        },
        {
          name: locale === 'zh' ? t('healthGuide.八段锦Baduan') : 'Baduanjin',
          description: locale === 'zh' ? t('healthGuide.传统中医气功练习') : 'Traditional Chinese qigong practice'
        }
      ]
    },
    {
      letter: 'C',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.冷敷ColdTh') : 'Cold Therapy',
          description: locale === 'zh' ? t('healthGuide.适用于炎症性疼痛') : 'Suitable for inflammatory pain'
        },
        {
          name: locale === 'zh' ? t('healthGuide.认知行为疗法CBT') : 'Cognitive Behavioral Therapy',
          description: locale === 'zh' ? t('healthGuide.改变对疼痛的认知和反') : 'Change cognition and response to pain'
        }
      ]
    },
    {
      letter: 'D',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.饮食调整Diet') : 'Diet Modification',
          description: locale === 'zh' ? t('healthGuide.抗炎饮食和营养补充') : 'Anti-inflammatory diet and nutritional supplements'
        },
        {
          name: locale === 'zh' ? t('healthGuide.舞蹈疗法Dance') : 'Dance Therapy',
          description: locale === 'zh' ? t('healthGuide.通过舞蹈运动缓解疼痛') : 'Relieve pain through dance movement'
        }
      ]
    },
    {
      letter: 'E',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.运动Exercis') : 'Exercise',
          description: locale === 'zh' ? t('healthGuide.适度运动促进血液循环') : 'Moderate exercise promotes blood circulation'
        },
        {
          name: locale === 'zh' ? t('healthGuide.精油按摩Essen') : 'Essential Oil Massage',
          description: locale === 'zh' ? t('healthGuide.结合按摩和芳香疗法') : 'Combine massage and aromatherapy'
        }
      ]
    },
    {
      letter: 'F',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.足部反射疗法Foo') : 'Foot Reflexology',
          description: locale === 'zh' ? t('healthGuide.通过足部按摩缓解全身') : 'Relieve whole body pain through foot massage'
        },
        {
          name: locale === 'zh' ? t('healthGuide.纤维补充Fiber') : 'Fiber Supplements',
          description: locale === 'zh' ? t('healthGuide.改善肠道健康减少炎症') : 'Improve gut health and reduce inflammation'
        }
      ]
    },
    {
      letter: 'G',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.生姜疗法Ginge') : 'Ginger Therapy',
          description: locale === 'zh' ? t('healthGuide.天然抗炎和止痛效果') : 'Natural anti-inflammatory and pain relief effects'
        },
        {
          name: locale === 'zh' ? t('healthGuide.引导冥想Guide') : 'Guided Meditation',
          description: locale === 'zh' ? t('healthGuide.通过冥想减轻疼痛感知') : 'Reduce pain perception through meditation'
        }
      ]
    },
    {
      letter: 'H',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.热疗HeatTh') : 'Heat Therapy',
          description: locale === 'zh' ? t('healthGuide.使用热敷缓解肌肉紧张') : 'Use heat to relieve muscle tension'
        },
        {
          name: locale === 'zh' ? t('healthGuide.草药茶Herbal') : 'Herbal Tea',
          description: locale === 'zh' ? t('healthGuide.洋甘菊薄荷等舒缓茶饮') : 'Soothing teas like chamomile and mint'
        }
      ]
    },
    {
      letter: 'I',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.冰敷疗法IceT') : 'Ice Therapy',
          description: locale === 'zh' ? t('healthGuide.减少炎症和麻痹疼痛') : 'Reduce inflammation and numb pain'
        },
        {
          name: locale === 'zh' ? t('healthGuide.意象疗法Image') : 'Imagery Therapy',
          description: locale === 'zh' ? t('healthGuide.通过想象缓解疼痛') : 'Relieve pain through visualization'
        }
      ]
    },
    {
      letter: 'J',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.日记记录Journ') : 'Journaling',
          description: locale === 'zh' ? t('healthGuide.记录疼痛模式和触发因') : 'Track pain patterns and triggers'
        },
        {
          name: locale === 'zh' ? t('healthGuide.慢跑Jogging') : 'Jogging',
          description: locale === 'zh' ? t('healthGuide.轻度有氧运动促进血液') : 'Light aerobic exercise promotes circulation'
        }
      ]
    },
    {
      letter: 'K',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.膝胸位Kneeto') : 'Knee-to-Chest Position',
          description: locale === 'zh' ? t('healthGuide.缓解下腹部疼痛的体位') : 'Position to relieve lower abdominal pain'
        },
        {
          name: locale === 'zh' ? t('healthGuide.昆达里尼瑜伽Kun') : 'Kundalini Yoga',
          description: locale === 'zh' ? t('healthGuide.特殊的瑜伽练习形式') : 'Special form of yoga practice'
        }
      ]
    },
    {
      letter: 'L',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.薰衣草精油Lave') : 'Lavender Oil',
          description: locale === 'zh' ? t('healthGuide.放松和镇静效果') : 'Relaxing and calming effects'
        },
        {
          name: locale === 'zh' ? t('healthGuide.生活方式调整Lif') : 'Lifestyle Changes',
          description: locale === 'zh' ? t('healthGuide.改善整体健康状况') : 'Improve overall health condition'
        }
      ]
    },
    {
      letter: 'M',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.按摩疗法Massa') : 'Massage Therapy',
          description: locale === 'zh' ? t('healthGuide.专业按摩缓解肌肉紧张') : 'Professional massage to relieve muscle tension'
        },
        {
          name: locale === 'zh' ? t('healthGuide.正念冥想Mindf') : 'Mindfulness Meditation',
          description: locale === 'zh' ? t('healthGuide.专注当下减轻疼痛感知') : 'Focus on present moment, reduce pain perception'
        }
      ]
    },
    {
      letter: 'N',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.营养补充Nutri') : 'Nutritional Supplements',
          description: locale === 'zh' ? t('healthGuide.镁维生素B等营养素') : 'Nutrients like magnesium and vitamin B'
        },
        {
          name: locale === 'zh' ? t('healthGuide.自然疗法Natur') : 'Natural Remedies',
          description: locale === 'zh' ? t('healthGuide.草药和天然治疗方法') : 'Herbal and natural treatment methods'
        }
      ]
    },
    {
      letter: 'O',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.Omega3脂肪酸') : 'Omega-3 Fatty Acids',
          description: locale === 'zh' ? t('healthGuide.抗炎和疼痛缓解效果') : 'Anti-inflammatory and pain relief effects'
        },
        {
          name: locale === 'zh' ? t('healthGuide.有机食品Organ') : 'Organic Foods',
          description: locale === 'zh' ? t('healthGuide.减少化学物质摄入') : 'Reduce chemical intake'
        }
      ]
    },
    {
      letter: 'P',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.渐进性肌肉放松Pr') : 'Progressive Muscle Relaxation',
          description: locale === 'zh' ? t('healthGuide.系统性放松肌肉群') : 'Systematically relax muscle groups'
        },
        {
          name: locale === 'zh' ? t('healthGuide.普拉提Pilate') : 'Pilates',
          description: locale === 'zh' ? t('healthGuide.核心力量和柔韧性训练') : 'Core strength and flexibility training'
        }
      ]
    },
    {
      letter: 'Q',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.气功Qigong') : 'Qigong',
          description: locale === 'zh' ? t('healthGuide.中医传统运动疗法') : 'Traditional Chinese movement therapy'
        },
        {
          name: locale === 'zh' ? t('healthGuide.安静休息Quiet') : 'Quiet Rest',
          description: locale === 'zh' ? t('healthGuide.在安静环境中休息恢复') : 'Rest and recover in quiet environment'
        }
      ]
    },
    {
      letter: 'R',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.放松技巧Relax') : 'Relaxation Techniques',
          description: locale === 'zh' ? t('healthGuide.各种放松身心的方法') : 'Various methods to relax body and mind'
        },
        {
          name: locale === 'zh' ? t('healthGuide.反射疗法Refle') : 'Reflexology',
          description: locale === 'zh' ? t('healthGuide.通过反射点缓解疼痛') : 'Relieve pain through reflex points'
        }
      ]
    },
    {
      letter: 'S',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.拉伸运动Stret') : 'Stretching',
          description: locale === 'zh' ? t('healthGuide.温和的拉伸缓解肌肉紧') : 'Gentle stretching to relieve muscle tension'
        },
        {
          name: locale === 'zh' ? t('healthGuide.睡眠优化Sleep') : 'Sleep Optimization',
          description: locale === 'zh' ? t('healthGuide.改善睡眠质量促进恢复') : 'Improve sleep quality to promote recovery'
        }
      ]
    },
    {
      letter: 'T',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.太极TaiChi') : 'Tai Chi',
          description: locale === 'zh' ? t('healthGuide.缓慢流畅的运动练习') : 'Slow and flowing movement practice'
        },
        {
          name: locale === 'zh' ? t('healthGuide.茶疗TeaThe') : 'Tea Therapy',
          description: locale === 'zh' ? t('healthGuide.药用茶饮缓解症状') : 'Medicinal teas to relieve symptoms'
        }
      ]
    },
    {
      letter: 'U',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.超声波疗法Ultr') : 'Ultrasound Therapy',
          description: locale === 'zh' ? t('healthGuide.深层组织加热治疗') : 'Deep tissue heating treatment'
        },
        {
          name: locale === 'zh' ? t('healthGuide.理解教育Under') : 'Understanding Education',
          description: locale === 'zh' ? t('healthGuide.了解痛经机制减少焦虑') : 'Understanding pain mechanisms reduces anxiety'
        }
      ]
    },
    {
      letter: 'V',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.可视化技巧Visu') : 'Visualization',
          description: locale === 'zh' ? t('healthGuide.心理意象缓解疼痛') : 'Mental imagery for pain relief'
        },
        {
          name: locale === 'zh' ? t('healthGuide.维生素疗法Vita') : 'Vitamin Therapy',
          description: locale === 'zh' ? t('healthGuide.补充必需维生素') : 'Supplement essential vitamins'
        }
      ]
    },
    {
      letter: 'W',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.温水浴WarmB') : 'Warm Bath',
          description: locale === 'zh' ? t('healthGuide.温水浸泡放松肌肉') : 'Warm water soaking to relax muscles'
        },
        {
          name: locale === 'zh' ? t('healthGuide.步行Walking') : 'Walking',
          description: locale === 'zh' ? t('healthGuide.轻度运动促进血液循环') : 'Light exercise to promote circulation'
        }
      ]
    },
    {
      letter: 'X',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.X光检查Xray') : 'X-ray Examination',
          description: locale === 'zh' ? t('healthGuide.排除器质性病变') : 'Rule out organic lesions'
        },
        {
          name: locale === 'zh' ? t('healthGuide.木糖醇Xylito') : 'Xylitol',
          description: locale === 'zh' ? t('healthGuide.天然甜味剂减少炎症') : 'Natural sweetener, reduce inflammation'
        }
      ]
    },
    {
      letter: 'Y',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.瑜伽Yoga') : 'Yoga',
          description: locale === 'zh' ? t('healthGuide.身心结合的练习方法') : 'Mind-body integrated practice'
        },
        {
          name: locale === 'zh' ? t('healthGuide.阴瑜伽YinYo') : 'Yin Yoga',
          description: locale === 'zh' ? t('healthGuide.深度放松的瑜伽形式') : 'Deep relaxation form of yoga'
        }
      ]
    },
    {
      letter: 'Z',
      methods: [
        {
          name: locale === 'zh' ? t('healthGuide.锌补充ZincS') : 'Zinc Supplements',
          description: locale === 'zh' ? t('healthGuide.支持免疫系统和愈合') : 'Support immune system and healing'
        },
        {
          name: locale === 'zh' ? t('healthGuide.禅修ZenMed') : 'Zen Meditation',
          description: locale === 'zh' ? t('healthGuide.深度冥想练习') : 'Deep meditation practice'
        }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-neutral-600">
        <Link href={`/${locale}`} className="hover:text-primary-600">
          {locale === 'zh' ? t('navigation.home') : 'Home'}
        </Link>
        <span className="mx-2">›</span>
        <Link href={`/${locale}/health-guide`} className="hover:text-primary-600">
          {locale === 'zh' ? t('pages.healthGuide.title') : 'Health Guide'}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-neutral-800">
          {locale === 'zh' ? t('healthGuide.AZ缓解方法') : 'A-Z Relief Methods'}
        </span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {locale === 'zh' ? t('healthGuide.AZ缓解方法') : 'A-Z Relief Methods'}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {locale === 'zh'
            ? t('healthGuide.从A到Z的全面缓解方')
            : 'Comprehensive relief methods from A to Z, including immediate and long-term strategies to help you find the most suitable menstrual pain management plan.'
          }
        </p>
      </header>

      {/* Introduction */}
      <section className="bg-gradient-to-br from-primary-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          {locale === 'zh' ? t('healthGuide.如何使用这个指南') : 'How to Use This Guide'}
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          {locale === 'zh'
            ? t('healthGuide.这个AZ指南包含了各')
            : 'This A-Z guide contains various proven menstrual pain relief methods. Since everyone\'s body responds differently, we recommend trying multiple approaches to find the combination that works best for you. Remember, consistency and patience are key to success.'
          }
        </p>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-neutral-800 mb-2">
            {locale === 'zh' ? t('healthGuide.使用建议') : 'Usage Tips:'}
          </h3>
          <ul className="list-disc list-inside text-neutral-600 space-y-1 text-sm">
            <li>{locale === 'zh' ? t('healthGuide.从简单易行的方法开始') : 'Start with simple and easy methods'}</li>
            <li>{locale === 'zh' ? t('healthGuide.记录哪些方法对您有效') : 'Record which methods work for you'}</li>
            <li>{locale === 'zh' ? t('healthGuide.结合多种方法以获得最') : 'Combine multiple methods for best results'}</li>
            <li>{locale === 'zh' ? t('healthGuide.如有疑问请咨询医疗专') : 'Consult healthcare professionals if in doubt'}</li>
          </ul>
        </div>
      </section>

      {/* A-Z Methods */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-8 text-center">
          {locale === 'zh' ? t('healthGuide.缓解方法大全') : 'Complete Relief Methods'}
        </h2>
        
        <div className="space-y-8">
          {reliefMethods.map((section) => (
            <div key={section.letter} className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {section.letter}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">
                  {locale === 'zh' ? `${section.letter} 开头的方法` : `Methods Starting with ${section.letter}`}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {section.methods.map((method, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-600 mb-2">
                      {method.name}
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-secondary-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
          {locale === 'zh' ? t('healthGuide.快速参考') : 'Quick Reference'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-green-600 mb-2">
              {locale === 'zh' ? t('common.instantRelief') : 'Immediate Relief'}
            </h3>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.热敷') : 'Heat therapy'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.深呼吸') : 'Deep breathing'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.穴位按摩') : 'Acupressure'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.温水浴') : 'Warm bath'}</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">
              {locale === 'zh' ? t('healthGuide.中期管理') : 'Medium-term Management'}
            </h3>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.规律运动') : 'Regular exercise'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.瑜伽练习') : 'Yoga practice'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.饮食调整') : 'Diet modification'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.压力管理') : 'Stress management'}</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-purple-600 mb-2">
              {locale === 'zh' ? t('healthGuide.长期预防') : 'Long-term Prevention'}
            </h3>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• {locale === 'zh' ? t('healthGuide.生活方式改变') : 'Lifestyle changes'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.营养补充') : 'Nutritional supplements'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.中医调理') : 'TCM conditioning'}</li>
              <li>• {locale === 'zh' ? t('healthGuide.定期检查') : 'Regular check-ups'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-accent-50 p-6 md:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          {locale === 'zh' ? t('healthGuide.相关资源') : 'Related Resources'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href={`/${locale}/scenario-solutions`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-primary-600 mb-2">
              {locale === 'zh' ? t('healthGuide.情景解决方案') : 'Scenario Solutions'}
            </h3>
            <p className="text-neutral-600 text-sm">
              {locale === 'zh' ? t('healthGuide.针对特定情况的专业解') : 'Professional solutions for specific situations'}
            </p>
          </Link>
          
          <Link href={`/${locale}/interactive-tools`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-primary-600 mb-2">
              {locale === 'zh' ? t('healthGuide.互动工具') : 'Interactive Tools'}
            </h3>
            <p className="text-neutral-600 text-sm">
              {locale === 'zh' ? t('healthGuide.个性化评估和追踪工具') : 'Personalized assessment and tracking tools'}
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-neutral-200">
        <Link 
          href={`/${locale}/health-guide/understanding-pain`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'zh' ? t('healthGuide.上一章理解痛经') : 'Previous: Understanding Pain'}
        </Link>
        
        <Link 
          href={`/${locale}/health-guide/lifestyle`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          {locale === 'zh' ? t('healthGuide.下一章生活方式管理') : 'Next: Lifestyle Management'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
