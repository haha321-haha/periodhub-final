import { ConstitutionTypeInfo, ConstitutionRecommendations, ConstitutionType } from '../types/constitution';

export const constitutionTypeInfo: Record<string, Record<ConstitutionType, ConstitutionTypeInfo>> = {
  zh: {
    balanced: {
      name: t('tools.平和质'),
      description: t('tools.体质平和身心健康是最'),
      characteristics: [
        t('tools.精力充沛不易疲劳'),
        t('tools.睡眠良好情绪稳定'),
        t('tools.消化功能正常'),
        t('tools.对环境适应能力强')
      ],
      commonSymptoms: [
        t('tools.很少生病'),
        t('tools.恢复能力强'),
        t('tools.抵抗力好')
      ],
      menstrualFeatures: [
        t('tools.月经周期规律2830'),
        t('tools.经量适中'),
        t('tools.颜色正常红色'),
        t('tools.痛经轻微或无痛经')
      ]
    },
    qi_deficiency: {
      name: t('tools.气虚质'),
      description: t('tools.元气不足以疲乏气短自'),
      characteristics: [
        t('tools.容易疲劳精神不振'),
        t('tools.说话声音低不爱说话'),
        t('tools.容易出汗活动后更明显'),
        t('tools.抵抗力差容易感冒')
      ],
      commonSymptoms: [
        t('tools.气短懒言'),
        t('tools.容易疲劳'),
        t('tools.自汗'),
        t('tools.食欲不振')
      ],
      menstrualFeatures: [
        t('tools.月经量少颜色淡'),
        t('tools.周期可能延后'),
        t('tools.经期疲劳加重'),
        t('tools.可能有轻度痛经')
      ]
    },
    yang_deficiency: {
      name: t('tools.阳虚质'),
      description: t('tools.阳气不足以畏寒怕冷手'),
      characteristics: [
        t('tools.畏寒怕冷手足不温'),
        t('tools.喜热饮食不耐寒邪'),
        t('tools.精神不振睡眠偏多'),
        t('tools.大便溏薄小便清长')
      ],
      commonSymptoms: [
        t('tools.畏寒肢冷'),
        t('tools.精神萎靡'),
        t('tools.腰膝酸软'),
        t('tools.性功能减退')
      ],
      menstrualFeatures: [
        t('tools.月经量少颜色淡'),
        t('tools.周期延后'),
        t('tools.经期腹痛喜温喜按'),
        t('tools.经前或经期腰酸明显')
      ]
    },
    yin_deficiency: {
      name: t('tools.阴虚质'),
      description: t('tools.阴液亏少以口燥咽干手'),
      characteristics: [
        t('tools.手足心热口咽干燥'),
        t('tools.喜冷饮不耐暑热'),
        t('tools.大便干燥小便短赤'),
        t('tools.睡眠差性情急躁')
      ],
      commonSymptoms: [
        t('tools.五心烦热'),
        t('tools.口干咽燥'),
        t('tools.盗汗'),
        t('tools.失眠多梦')
      ],
      menstrualFeatures: [
        t('tools.月经量少或正常'),
        t('tools.周期可能提前'),
        t('tools.经色鲜红'),
        t('tools.经前烦躁失眠')
      ]
    },
    phlegm_dampness: {
      name: t('tools.痰湿质'),
      description: t('tools.痰湿凝聚以形体肥胖腹'),
      characteristics: [
        t('tools.形体肥胖腹部肥满松软'),
        t('tools.面部皮肤油脂较多'),
        t('tools.容易困倦身重不爽'),
        t('tools.口黏腻或甜喜食肥甘甜')
      ],
      commonSymptoms: [
        t('tools.身重困倦'),
        t('tools.胸闷痰多'),
        t('tools.口黏腻'),
        t('tools.大便正常或不实')
      ],
      menstrualFeatures: [
        t('tools.月经量多或正常'),
        t('tools.经色淡红'),
        t('tools.质地粘稠'),
        t('tools.经前胸闷水肿')
      ]
    },
    damp_heat: {
      name: t('tools.湿热质'),
      description: t('tools.湿热内蕴以面垢油腻口'),
      characteristics: [
        t('tools.面垢油腻易生痤疮'),
        t('tools.口苦口干身重困倦'),
        t('tools.大便黏滞不畅或燥结'),
        t('tools.小便短黄男易阴囊潮湿')
      ],
      commonSymptoms: [
        t('tools.面部油腻'),
        t('tools.口苦口干'),
        t('tools.身重困倦'),
        t('tools.大便黏滞')
      ],
      menstrualFeatures: [
        t('tools.月经量多颜色深红'),
        t('tools.周期可能提前'),
        t('tools.经前烦躁易怒'),
        t('tools.痛经较重喜冷恶热')
      ]
    },
    blood_stasis: {
      name: t('tools.血瘀质'),
      description: t('tools.血行不畅以肤色晦黯舌'),
      characteristics: [
        t('tools.肤色晦黯色素沉着'),
        t('tools.容易出现瘀斑'),
        t('tools.口唇黯淡舌下络脉紫黯'),
        t('tools.性情急躁健忘')
      ],
      commonSymptoms: [
        t('tools.肤色晦黯'),
        t('tools.易生色斑'),
        t('tools.疼痛如针刺'),
        t('tools.健忘')
      ],
      menstrualFeatures: [
        t('tools.月经有血块'),
        t('tools.经色暗红或紫黑'),
        t('tools.痛经明显拒按'),
        t('tools.经前乳房胀痛')
      ]
    },
    qi_stagnation: {
      name: t('tools.气郁质'),
      description: t('tools.气机郁滞以神情抑郁忧'),
      characteristics: [
        t('tools.神情抑郁情感脆弱'),
        t('tools.烦闷不乐容易紧张'),
        t('tools.多愁善感忧虑不安'),
        t('tools.对精神刺激适应能力较')
      ],
      commonSymptoms: [
        t('tools.情绪抑郁'),
        t('tools.胸胁胀满'),
        t('tools.善太息'),
        t('tools.咽中如有异物')
      ],
      menstrualFeatures: [
        t('tools.月经不规律'),
        t('tools.经前情绪波动大'),
        t('tools.乳房胀痛明显'),
        t('tools.痛经程度与情绪相关')
      ]
    },
    special_diathesis: {
      name: t('tools.特禀质'),
      description: t('tools.先天失常以生理缺陷过'),
      characteristics: [
        t('tools.先天禀赋不足'),
        t('tools.容易过敏'),
        t('tools.适应能力差'),
        t('tools.遗传性疾病家族史')
      ],
      commonSymptoms: [
        t('tools.过敏性疾病'),
        t('tools.遗传性疾病'),
        t('tools.胎传性疾病')
      ],
      menstrualFeatures: [
        t('tools.月经异常多样'),
        t('tools.可能伴随过敏症状'),
        t('tools.对环境变化敏感')
      ]
    }
  },
  en: {
    balanced: {
      name: 'Balanced Constitution',
      description: 'A harmonious constitution with balanced body and mind, representing the ideal health state.',
      characteristics: [
        'Energetic and not easily fatigued',
        'Good sleep and stable emotions',
        'Normal digestive function',
        'Strong adaptability to environment'
      ],
      commonSymptoms: [
        'Rarely gets sick',
        'Strong recovery ability',
        'Good resistance'
      ],
      menstrualFeatures: [
        'Regular menstrual cycle (28-30 days)',
        'Moderate flow',
        'Normal red color',
        'Mild or no menstrual pain'
      ]
    },
    qi_deficiency: {
      name: 'Qi Deficiency Constitution',
      description: 'Insufficient vital energy, characterized by fatigue, shortness of breath, and spontaneous sweating.',
      characteristics: [
        'Easily fatigued and low spirits',
        'Low voice, reluctant to speak',
        'Prone to sweating, especially after activity',
        'Poor resistance, easily catches cold'
      ],
      commonSymptoms: [
        'Shortness of breath and reluctance to speak',
        'Easy fatigue',
        'Spontaneous sweating',
        'Poor appetite'
      ],
      menstrualFeatures: [
        'Scanty menstruation with pale color',
        'Cycle may be delayed',
        'Increased fatigue during menstruation',
        'May have mild menstrual pain'
      ]
    },
    yang_deficiency: {
      name: 'Yang Deficiency Constitution',
      description: 'Insufficient yang qi, characterized by aversion to cold, cold limbs, and other cold manifestations.',
      characteristics: [
        'Aversion to cold, cold hands and feet',
        'Prefers warm food and drinks, intolerant to cold',
        'Low spirits, tends to sleep more',
        'Loose stools, clear and long urine'
      ],
      commonSymptoms: [
        'Aversion to cold and cold limbs',
        'Mental fatigue',
        'Sore and weak lower back and knees',
        'Decreased sexual function'
      ],
      menstrualFeatures: [
        'Scanty menstruation with pale color',
        'Delayed cycle',
        'Abdominal pain during menstruation, relieved by warmth and pressure',
        'Obvious lower back pain before or during menstruation'
      ]
    },
    yin_deficiency: {
      name: 'Yin Deficiency Constitution',
      description: 'Insufficient yin fluid, characterized by dry mouth and throat, hot palms and soles.',
      characteristics: [
        'Hot palms and soles, dry mouth and throat',
        'Prefers cold drinks, intolerant to heat',
        'Dry stools, short and yellow urine',
        'Poor sleep, irritable temperament'
      ],
      commonSymptoms: [
        'Five-center heat (palms, soles, chest)',
        'Dry mouth and throat',
        'Night sweats',
        'Insomnia and vivid dreams'
      ],
      menstrualFeatures: [
        'Scanty or normal menstruation',
        'Cycle may be advanced',
        'Bright red menstrual color',
        'Irritability and insomnia before menstruation'
      ]
    },
    phlegm_dampness: {
      name: 'Phlegm-Dampness Constitution',
      description: 'Accumulation of phlegm and dampness, characterized by obesity, abdominal fullness, and sticky mouth.',
      characteristics: [
        'Obese body with soft and full abdomen',
        'Oily facial skin',
        'Easily drowsy, heavy body feeling',
        'Sticky or sweet mouth, prefers fatty and sweet foods'
      ],
      commonSymptoms: [
        'Heavy body and drowsiness',
        'Chest tightness and phlegm',
        'Sticky mouth',
        'Normal or loose stools'
      ],
      menstrualFeatures: [
        'Heavy or normal menstruation',
        'Light red color',
        'Thick consistency',
        'Chest tightness and edema before menstruation'
      ]
    },
    damp_heat: {
      name: 'Damp-Heat Constitution',
      description: 'Internal accumulation of damp-heat, characterized by oily face, bitter mouth, and yellow greasy tongue coating.',
      characteristics: [
        'Oily face, prone to acne',
        'Bitter and dry mouth, heavy body feeling',
        'Sticky or dry stools',
        'Short and yellow urine, men prone to scrotal dampness'
      ],
      commonSymptoms: [
        'Oily face',
        'Bitter and dry mouth',
        'Heavy body and drowsiness',
        'Sticky stools'
      ],
      menstrualFeatures: [
        'Heavy menstruation with dark red color',
        'Cycle may be advanced',
        'Irritability before menstruation',
        'Severe menstrual pain, prefers cold and dislikes heat'
      ]
    },
    blood_stasis: {
      name: 'Blood Stasis Constitution',
      description: 'Poor blood circulation, characterized by dull complexion and purple tongue.',
      characteristics: [
        'Dull complexion with pigmentation',
        'Prone to bruising',
        'Dark lips, purple sublingual vessels',
        'Irritable temperament, forgetful'
      ],
      commonSymptoms: [
        'Dull complexion',
        'Prone to dark spots',
        'Needle-like pain',
        'Forgetfulness'
      ],
      menstrualFeatures: [
        'Menstruation with blood clots',
        'Dark red or purple-black color',
        'Obvious menstrual pain, refuses pressure',
        'Breast distension before menstruation'
      ]
    },
    qi_stagnation: {
      name: 'Qi Stagnation Constitution',
      description: 'Stagnant qi movement, characterized by depression, anxiety, and emotional fragility.',
      characteristics: [
        'Depressed mood, emotionally fragile',
        'Restless and easily tense',
        'Sentimental and anxious',
        'Poor adaptability to mental stimulation'
      ],
      commonSymptoms: [
        'Emotional depression',
        'Chest and hypochondriac distension',
        'Frequent sighing',
        'Feeling of foreign body in throat'
      ],
      menstrualFeatures: [
        'Irregular menstruation',
        'Large emotional fluctuations before menstruation',
        'Obvious breast distension',
        'Menstrual pain related to emotions'
      ]
    },
    special_diathesis: {
      name: 'Special Constitution',
      description: 'Congenital abnormalities, characterized by physiological defects and allergic reactions.',
      characteristics: [
        'Congenital insufficiency',
        'Prone to allergies',
        'Poor adaptability',
        'Family history of hereditary diseases'
      ],
      commonSymptoms: [
        'Allergic diseases',
        'Hereditary diseases',
        'Congenital diseases'
      ],
      menstrualFeatures: [
        'Various menstrual abnormalities',
        'May be accompanied by allergic symptoms',
        'Sensitive to environmental changes'
      ]
    }
  }
};
