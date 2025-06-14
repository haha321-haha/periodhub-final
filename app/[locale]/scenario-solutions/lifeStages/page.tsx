import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  BookOpen,
  Baby,
  Flower,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Shield,
  Users,
  Download,
  ExternalLink
} from 'lucide-react';

// Types
type Locale = 'en' | 'zh';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'scenarioSolutionsPage' });
  
  return {
    title: `${t('scenarios.lifeStages.title')} - ${t('title')}`,
    description: t('scenarios.lifeStages.description'),
  };
}

export default async function LifeStagesScenarioPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');
  const commonT = await getTranslations('common');

  const lifeStages = [
    {
      stage: locale === 'zh' ? t('common.青春期专项方案') : 'Adolescence Program',
      ageRange: t('common.1218岁'),
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200',
      description: locale === 'zh' ? t('common.初潮教育与校园应对策') : 'Menarche education and campus coping strategies',
      keyFeatures: [
        {
          title: locale === 'zh' ? t('common.基础科普与心理疏导') : 'Basic Education & Psychological Guidance',
          details: [
            locale === 'zh' ? t('common.全面的痛经知识科普消') : 'Comprehensive menstrual pain education, eliminate fear and shame',
            locale === 'zh' ? t('common.正确的健康观念和应对') : 'Correct health concepts and confidence in pain management',
            locale === 'zh' ? t('common.学校健康教育课程和讲') : 'School health education courses and lectures'
          ]
        },
        {
          title: locale === 'zh' ? t('common.生活方式调整指导') : 'Lifestyle Adjustment Guidance',
          details: [
            locale === 'zh' ? t('common.规律作息保证89小时') : 'Regular schedule, ensure 8-9 hours of sleep',
            locale === 'zh' ? t('common.合理饮食增加铁蛋白质') : 'Balanced diet, increase iron, protein, vitamin intake',
            locale === 'zh' ? t('common.适当运动每周35次有') : 'Appropriate exercise, 3-5 times aerobic exercise per week'
          ]
        },
        {
          title: locale === 'zh' ? t('common.校园应急支持措施') : 'Campus Emergency Support Measures',
          details: [
            locale === 'zh' ? t('common.宿舍和教室配备卫生用') : 'Dormitories and classrooms equipped with sanitary products and emergency medicines',
            locale === 'zh' ? t('common.健康咨询室和心理辅导') : 'Health consultation room and psychological counseling room',
            locale === 'zh' ? t('common.专业校医和心理咨询师') : 'Professional school doctor and psychological counselor services'
          ]
        }
      ],
      emergencyKit: [
        locale === 'zh' ? t('common.防漏警报内裤') : 'Leak-proof alarm underwear',
        locale === 'zh' ? t('common.无声暖贴') : 'Silent warming patches',
        locale === 'zh' ? t('common.经期知识漫画手册') : 'Menstrual knowledge comic handbook',
        locale === 'zh' ? t('common.舒缓运动视频课程') : 'Soothing exercise video courses'
      ]
    },
    {
      stage: locale === 'zh' ? t('common.备孕期专项方案') : 'Pre-pregnancy Program',
      ageRange: t('common.2535岁'),
      icon: <Baby className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200',
      description: locale === 'zh' ? t('common.自然疗法与生育健康优') : 'Natural therapy and reproductive health optimization',
      keyFeatures: [
        {
          title: locale === 'zh' ? t('common.自然疗法与饮食调理') : 'Natural Therapy & Dietary Adjustment',
          details: [
            locale === 'zh' ? t('common.热敷按摩瑜伽等天然缓') : 'Natural relief methods like heat therapy, massage, yoga',
            locale === 'zh' ? t('common.富含维生素B6钙镁欧') : 'Foods rich in vitamin B6, calcium, magnesium, omega-3',
            locale === 'zh' ? t('common.规律饮食习惯避免过度') : 'Regular eating habits, avoid excessive dieting or overeating'
          ]
        },
        {
          title: locale === 'zh' ? t('common.医生咨询与药物管理') : 'Medical Consultation & Medication Management',
          details: [
            locale === 'zh' ? t('common.孕前全面身体检查特别') : 'Comprehensive pre-pregnancy physical examination, especially reproductive system',
            locale === 'zh' ? t('common.排除继发性痛经可能子') : 'Rule out secondary dysmenorrhea (endometriosis, etc.)',
            locale === 'zh' ? t('common.在医生指导下合理使用') : 'Rational use of medication under doctor\'s guidance'
          ]
        },
        {
          title: locale === 'zh' ? t('common.生活方式与习惯调整') : 'Lifestyle & Habit Adjustment',
          details: [
            locale === 'zh' ? t('common.戒烟戒酒避免熬夜减少') : 'Quit smoking and drinking, avoid staying up late, reduce caffeine intake',
            locale === 'zh' ? t('common.每周34次中等强度有') : '3-4 times moderate-intensity aerobic exercise and strength training per week',
            locale === 'zh' ? t('common.保持良好心理状态缓解') : 'Maintain good mental state, relieve psychological burden of pregnancy preparation'
          ]
        }
      ],
      emergencyKit: [
        locale === 'zh' ? t('common.基础体温智能分析系统') : 'Basal body temperature intelligent analysis system',
        locale === 'zh' ? t('common.子宫内膜血流检测食谱') : 'Endometrial blood flow detection recipes',
        locale === 'zh' ? t('common.黄体期专属瑜伽序列') : 'Luteal phase exclusive yoga sequence',
        locale === 'zh' ? t('common.备孕营养补充指南') : 'Pre-pregnancy nutrition supplement guide'
      ]
    },
    {
      stage: locale === 'zh' ? t('common.围绝经期专项方案') : 'Perimenopause Program',
      ageRange: t('common.4555岁'),
      icon: <Flower className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200',
      description: locale === 'zh' ? t('common.荷尔蒙疗法与综合管理') : 'Hormone therapy and comprehensive management',
      keyFeatures: [
        {
          title: locale === 'zh' ? t('common.荷尔蒙疗法与医生指导') : 'Hormone Therapy & Medical Guidance',
          details: [
            locale === 'zh' ? t('common.在医生评估下考虑荷尔') : 'Consider hormone therapy under doctor\'s evaluation to relieve symptoms',
            locale === 'zh' ? t('common.调节内分泌平衡减轻痛') : 'Regulate endocrine balance, reduce dysmenorrhea and menstrual irregularities',
            locale === 'zh' ? t('common.定期身体检查和监测注') : 'Regular physical examination and monitoring, pay attention to risks and side effects'
          ]
        },
        {
          title: locale === 'zh' ? t('common.生活方式调整与自我保') : 'Lifestyle Adjustment & Self-care',
          details: [
            locale === 'zh' ? t('common.增加富含植物雌激素的') : 'Increase foods rich in phytoestrogens (soy products, flaxseed)',
            locale === 'zh' ? t('common.保证78小时睡眠适当') : 'Ensure 7-8 hours of sleep, appropriately increase nap time',
            locale === 'zh' ? t('common.散步太极拳瑜伽等舒缓') : 'Gentle exercise programs like walking, tai chi, yoga'
          ]
        },
        {
          title: locale === 'zh' ? t('common.心理支持与社交活动') : 'Psychological Support & Social Activities',
          details: [
            locale === 'zh' ? t('common.参加心理辅导课程和围') : 'Participate in psychological counseling courses and perimenopause women support groups',
            locale === 'zh' ? t('common.积极参加文化活动旅游') : 'Actively participate in cultural activities, travel, volunteer services',
            locale === 'zh' ? t('common.保持积极乐观心态增强') : 'Maintain positive and optimistic attitude, enhance confidence and life enjoyment'
          ]
        }
      ],
      emergencyKit: [
        locale === 'zh' ? t('common.潮热预警手环') : 'Hot flash warning bracelet',
        locale === 'zh' ? t('common.骨骼密度保护食谱') : 'Bone density protection recipes',
        locale === 'zh' ? t('common.情绪管理音频课程') : 'Emotional management audio courses',
        locale === 'zh' ? t('common.围绝经期症状追踪表') : 'Perimenopause symptom tracking chart'
      ]
    }
  ];

  const commonChallenges = [
    {
      challenge: locale === 'zh' ? t('common.心理压力管理') : 'Psychological Stress Management',
      solutions: [
        locale === 'zh' ? t('common.建立正确的健康观念消') : 'Establish correct health concepts, eliminate fear of dysmenorrhea',
        locale === 'zh' ? t('common.寻求专业心理咨询和家') : 'Seek professional psychological counseling and family support',
        locale === 'zh' ? t('common.参加同龄人支持小组分') : 'Join peer support groups, share experiences'
      ]
    },
    {
      challenge: locale === 'zh' ? t('common.生活方式调整') : 'Lifestyle Adjustment',
      solutions: [
        locale === 'zh' ? t('common.制定个性化的作息时间') : 'Create personalized schedule',
        locale === 'zh' ? t('common.选择适合年龄段的运动') : 'Choose age-appropriate exercise methods',
        locale === 'zh' ? t('common.建立健康的饮食习惯和') : 'Establish healthy eating habits and nutritional combinations'
      ]
    },
    {
      challenge: locale === 'zh' ? t('common.医疗资源获取') : 'Medical Resource Access',
      solutions: [
        locale === 'zh' ? t('common.定期进行专业医疗检查') : 'Regular professional medical examinations and consultations',
        locale === 'zh' ? t('common.了解不同生理阶段的特') : 'Understand special needs of different physiological stages',
        locale === 'zh' ? t('common.建立与医疗专业人士的') : 'Establish long-term relationships with medical professionals'
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
        <span className="text-neutral-800">{t('scenarios.lifeStages.title')}</span>
      </nav>

      {/* Page Header */}
      <header className="text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {t('scenarios.lifeStages.title')}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {t('scenarios.lifeStages.description')}
        </p>
      </header>

      {/* Life Stages Section */}
      <section className="space-y-12">
        {lifeStages.map((stage, index) => (
          <div key={index} className={`border-2 rounded-xl p-6 md:p-8 ${stage.borderColor}`}>
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${stage.color} mr-4`}>
                {stage.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-800 mb-2">
                  {stage.stage}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                    {stage.ageRange}
                  </span>
                  <p className="text-neutral-600">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {stage.keyFeatures.map((feature, featureIndex) => (
                <div key={featureIndex} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={`${stage.color.replace('text-', 'bg-').replace('-600', '-100')} p-4 rounded-lg`}>
              <h4 className={`font-semibold mb-3 ${stage.color.replace('bg-', 'text-').replace('-50', '-800')}`}>
                {locale === 'zh' ? t('common.专项工具包') : 'Specialized Toolkit:'}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {stage.emergencyKit.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-3 rounded text-center">
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Resources for Adolescence Program */}
            {index === 0 && (
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-4 text-blue-800 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  {locale === 'zh' ? t('common.相关PDF资源下载') : 'Related PDF Resources'}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href={`/downloads/campus-emergency-checklist${locale === 'en' ? '-en' : ''}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100 hover:border-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-800 text-sm">
                        {locale === 'zh' ? t('common.校园应急清单') : 'Campus Emergency Checklist'}
                      </div>
                      <div className="text-xs text-blue-600">
                        {locale === 'zh' ? t('common.校园经期应急处理指南') : 'Campus menstrual emergency guide'}
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/downloads/parent-communication-guide${locale === 'en' ? '-en' : ''}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100 hover:border-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-800 text-sm">
                        {locale === 'zh' ? t('common.家长沟通指导手册') : 'Parent Communication Guide'}
                      </div>
                      <div className="text-xs text-blue-600">
                        {locale === 'zh' ? t('common.帮助家长与青春期女儿') : 'Help parents communicate with teenage daughters'}
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/downloads/teacher-health-manual${locale === 'en' ? '-en' : ''}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100 hover:border-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-800 text-sm">
                        {locale === 'zh' ? t('common.教师健康管理手册') : 'Teacher Health Manual'}
                      </div>
                      <div className="text-xs text-blue-600">
                        {locale === 'zh' ? t('common.教师和学校卫生人员指') : 'Guide for teachers and school health personnel'}
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`/downloads/teacher-collaboration-handbook${locale === 'en' ? '-en' : ''}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-blue-100 hover:border-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-blue-800 text-sm">
                        {locale === 'zh' ? t('common.教师协作手册') : 'Teacher Collaboration Handbook'}
                      </div>
                      <div className="text-xs text-blue-600">
                        {locale === 'zh' ? t('common.理解与支持经期不适的') : 'Understanding and supporting adolescent students with menstrual discomfort'}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Common Challenges Section */}
      <section>
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-red-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? t('common.跨阶段共同挑战') : 'Cross-Stage Common Challenges'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {commonChallenges.map((item, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                {item.challenge}
              </h3>
              <ul className="space-y-3">
                {item.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5 flex-shrink-0">
                      {solutionIndex + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Support */}
      <section className="bg-yellow-50 p-6 md:p-8 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          {locale === 'zh' ? t('common.专业支持网络') : 'Professional Support Network'}
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-700">
          <div>
            <h4 className="font-medium mb-2">{locale === 'zh' ? t('common.医疗专业人士') : 'Medical Professionals'}</h4>
            <ul className="space-y-1">
              <li>• {locale === 'zh' ? t('common.妇产科医生专业诊断和') : 'Gynecologists: Professional diagnosis and treatment advice'}</li>
              <li>• {locale === 'zh' ? t('common.内分泌科医生激素水平') : 'Endocrinologists: Hormone level regulation'}</li>
              <li>• {locale === 'zh' ? t('common.营养师个性化饮食指导') : 'Nutritionists: Personalized dietary guidance'}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">{locale === 'zh' ? t('common.心理健康支持') : 'Mental Health Support'}</h4>
            <ul className="space-y-1">
              <li>• {locale === 'zh' ? t('common.心理咨询师情绪管理和') : 'Psychologists: Emotional management and stress relief'}</li>
              <li>• {locale === 'zh' ? t('common.同龄人支持小组经验分') : 'Peer support groups: Experience sharing and mutual aid'}</li>
              <li>• {locale === 'zh' ? t('common.家庭支持系统理解和关') : 'Family support system: Understanding and care'}</li>
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
