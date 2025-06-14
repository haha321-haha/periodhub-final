import { ConstitutionQuestion } from '../types/constitution';

export const constitutionQuestions: Record<string, ConstitutionQuestion[]> = {
  zh: [
    {
      id: 'energy_level',
      type: 'single',
      category: 'basic',
      weight: 2,
      title: t('tools.您平时的精力状态如何'),
      description: t('tools.选择最符合您日常状态'),
      validation: { required: true },
      options: [
        { 
          value: 'energetic', 
          label: t('tools.精力充沛很少感到疲劳'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'moderate', 
          label: t('tools.精力一般偶尔感到疲劳'), 
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        { 
          value: 'tired', 
          label: t('tools.经常感到疲劳精力不足'), 
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        { 
          value: 'exhausted', 
          label: t('tools.总是感到疲惫不堪'), 
          weight: 4,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'cold_tolerance',
      type: 'single',
      category: 'temperature',
      weight: 2,
      title: t('tools.您对寒冷的耐受性如何'),
      description: t('tools.比较您与同龄人的耐寒'),
      validation: { required: true },
      options: [
        { 
          value: 'very_tolerant', 
          label: t('tools.很耐寒手脚总是温暖'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'normal', 
          label: t('tools.一般与大多数人差不多'), 
          weight: 2,
          constitutionType: 'balanced'
        },
        { 
          value: 'sensitive', 
          label: t('tools.比较怕冷手脚容易凉'), 
          weight: 3,
          constitutionType: 'yang_deficiency'
        },
        { 
          value: 'very_sensitive', 
          label: t('tools.非常怕冷即使夏天也手'), 
          weight: 4,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'digestive_health',
      type: 'single',
      category: 'digestion',
      weight: 2,
      title: t('tools.您的消化功能如何'),
      description: t('tools.选择最符合您消化状况'),
      validation: { required: true },
      options: [
        { 
          value: 'excellent', 
          label: t('tools.消化很好食欲正常很少'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'good', 
          label: t('tools.消化一般偶尔腹胀或消'), 
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        { 
          value: 'poor', 
          label: t('tools.经常腹胀消化不良食欲'), 
          weight: 3,
          constitutionType: 'phlegm_dampness'
        },
        { 
          value: 'very_poor', 
          label: t('tools.消化很差经常腹泻或便'), 
          weight: 4,
          constitutionType: 'phlegm_dampness'
        }
      ]
    },
    {
      id: 'sleep_quality',
      type: 'single',
      category: 'sleep',
      weight: 2,
      title: t('tools.您的睡眠质量如何'),
      description: t('tools.评估您的整体睡眠状况'),
      validation: { required: true },
      options: [
        { 
          value: 'excellent', 
          label: t('tools.睡眠很好容易入睡睡得'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'light_sleep', 
          label: t('tools.睡眠较浅容易醒多梦'), 
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        { 
          value: 'insomnia', 
          label: t('tools.经常失眠难以入睡'), 
          weight: 4,
          constitutionType: 'qi_stagnation'
        },
        { 
          value: 'drowsy', 
          label: t('tools.总是感到困倦睡不够'), 
          weight: 3,
          constitutionType: 'phlegm_dampness'
        }
      ]
    },
    {
      id: 'emotional_state',
      type: 'single',
      category: 'emotion',
      weight: 2,
      title: t('tools.您的情绪状态通常如何'),
      description: t('tools.选择最符合您情绪特点'),
      validation: { required: true },
      options: [
        { 
          value: 'stable', 
          label: t('tools.情绪稳定心情愉快'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'anxious', 
          label: t('tools.容易焦虑心情烦躁'), 
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        { 
          value: 'depressed', 
          label: t('tools.经常感到抑郁情绪低落'), 
          weight: 4,
          constitutionType: 'qi_stagnation'
        },
        { 
          value: 'irritable', 
          label: t('tools.容易发脾气情绪波动大'), 
          weight: 3,
          constitutionType: 'damp_heat'
        }
      ]
    },
    {
      id: 'menstrual_pattern',
      type: 'single',
      category: 'menstruation',
      weight: 3,
      title: t('tools.您的月经特点是'),
      description: t('tools.选择最符合您月经情况'),
      validation: { required: true },
      options: [
        { 
          value: 'regular_normal', 
          label: t('tools.周期规律量适中颜色正'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'light_delayed', 
          label: t('tools.量少周期延后颜色淡'), 
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        { 
          value: 'heavy_early', 
          label: t('tools.量多周期提前颜色深红'), 
          weight: 3,
          constitutionType: 'damp_heat'
        },
        { 
          value: 'clots_dark', 
          label: t('tools.有血块颜色暗红或紫黑'), 
          weight: 4,
          constitutionType: 'blood_stasis'
        },
        { 
          value: 'irregular', 
          label: t('tools.周期不规律时多时少'), 
          weight: 3,
          constitutionType: 'qi_stagnation'
        }
      ]
    },
    {
      id: 'body_type',
      type: 'single',
      category: 'physical',
      weight: 2,
      title: t('tools.您的体型特点是'),
      description: t('tools.选择最符合您体型的描'),
      validation: { required: true },
      options: [
        { 
          value: 'normal', 
          label: t('tools.体型匀称不胖不瘦'), 
          weight: 3,
          constitutionType: 'balanced'
        },
        { 
          value: 'thin', 
          label: t('tools.偏瘦不容易长胖'), 
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        { 
          value: 'overweight', 
          label: t('tools.偏胖容易水肿'), 
          weight: 3,
          constitutionType: 'phlegm_dampness'
        },
        { 
          value: 'muscular', 
          label: t('tools.体格健壮肌肉结实'), 
          weight: 2,
          constitutionType: 'balanced'
        }
      ]
    },
    {
      id: 'skin_condition',
      type: 'single',
      category: 'appearance',
      weight: 1,
      title: t('tools.您的皮肤状态如何'),
      description: t('tools.选择最符合您皮肤特点'),
      validation: { required: true },
      options: [
        {
          value: 'healthy',
          label: t('tools.皮肤润泽有光泽很少长'),
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'dry',
          label: t('tools.皮肤干燥缺乏光泽'),
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        {
          value: 'oily_acne',
          label: t('tools.皮肤油腻容易长痘'),
          weight: 3,
          constitutionType: 'damp_heat'
        },
        {
          value: 'dull',
          label: t('tools.皮肤暗沉色斑较多'),
          weight: 3,
          constitutionType: 'blood_stasist('tools.新增痛经相关问题')menstrual_pain_severity',
      type: 'scale',
      category: 'menstrual',
      weight: 3,
      title: t('tools.您经期疼痛的程度如何'),
      description: t('tools.请在滑块上选择您的疼'),
      validation: { required: true, min: 0, max: 10 },
      options: Array.from({ length: 11 }, (_, i) => ({
        value: i,
        label: i === 0 ? t('assessment.noPain') : i <= 3 ? t('tools.轻微') : i <= 6 ? t('tools.中等') : i <= 8 ? t('tools.严重') : t('tools.剧烈'),
        weight: i <= 2 ? 3 : i <= 4 ? 2 : i <= 7 ? 3 : 4,
        constitutionType: i <= 2 ? 'balanced' : i <= 4 ? 'qi_deficiency' : i <= 7 ? 'blood_stasis' : 'qi_stagnation'
      }))
    },
    {
      id: 'pain_nature',
      type: 'single',
      category: 'menstrual',
      weight: 2,
      title: t('tools.您的经期疼痛性质主要'),
      description: t('tools.选择最符合您疼痛感受'),
      validation: { required: true },
      options: [
        {
          value: 'cramping',
          label: t('tools.绞痛一阵一阵的收缩感'),
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'dull_ache',
          label: t('tools.钝痛持续的隐隐作痛'),
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'sharp_pain',
          label: t('tools.刺痛像针扎一样'),
          weight: 4,
          constitutionType: 'blood_stasis'
        },
        {
          value: 'cold_pain',
          label: t('tools.冷痛遇冷加重喜温喜按'),
          weight: 3,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'menstrual_symptoms',
      type: 'multiple',
      category: 'menstrual',
      weight: 2,
      title: t('tools.您在经期还有哪些伴随'),
      description: t('tools.可以选择多个症状'),
      validation: { required: false },
      options: [
        {
          value: 'bloating',
          label: t('tools.腹胀'),
          weight: 2,
          constitutionType: 'phlegm_dampness'
        },
        {
          value: 'nausea',
          label: t('tools.恶心呕吐'),
          weight: 3,
          constitutionType: 'damp_heat'
        },
        {
          value: 'headache',
          label: t('tools.头痛'),
          weight: 2,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'mood_swings',
          label: t('tools.情绪波动大'),
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'fatigue',
          label: t('tools.极度疲劳'),
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'back_pain',
          label: t('tools.腰痛'),
          weight: 2,
          constitutionType: 'yang_deficiency'
        },
        {
          value: 'breast_tenderness',
          label: t('tools.乳房胀痛'),
          weight: 2,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'none',
          label: t('tools.以上都没有'),
          weight: 1,
          constitutionType: 'balanced'
        }
      ]
    }
  ],
  en: [
    {
      id: 'energy_level',
      type: 'single',
      category: 'basic',
      weight: 2,
      title: 'How is your usual energy level?',
      description: 'Choose the option that best describes your daily state',
      validation: { required: true },
      options: [
        {
          value: 'energetic',
          label: 'Energetic, rarely feel tired',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'moderate',
          label: 'Moderate energy, occasionally feel tired',
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'tired',
          label: 'Often feel tired, lack of energy',
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'exhausted',
          label: 'Always feel exhausted',
          weight: 4,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'cold_tolerance',
      type: 'single',
      category: 'temperature',
      weight: 2,
      title: 'How is your tolerance to cold?',
      description: 'Compare your cold tolerance with people of your age',
      validation: { required: true },
      options: [
        {
          value: 'very_tolerant',
          label: 'Very cold-tolerant, hands and feet always warm',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'normal',
          label: 'Normal, similar to most people',
          weight: 2,
          constitutionType: 'balanced'
        },
        {
          value: 'sensitive',
          label: 'Quite sensitive to cold, hands and feet easily get cold',
          weight: 3,
          constitutionType: 'yang_deficiency'
        },
        {
          value: 'very_sensitive',
          label: 'Very sensitive to cold, hands and feet cold even in summer',
          weight: 4,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'digestive_health',
      type: 'single',
      category: 'digestion',
      weight: 2,
      title: 'How is your digestive function?',
      description: 'Choose the description that best fits your digestive condition',
      validation: { required: true },
      options: [
        {
          value: 'excellent',
          label: 'Excellent digestion, normal appetite, rarely bloated',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'good',
          label: 'Fair digestion, occasional bloating or indigestion',
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'poor',
          label: 'Often bloated, indigestion, poor appetite',
          weight: 3,
          constitutionType: 'phlegm_dampness'
        },
        {
          value: 'very_poor',
          label: 'Very poor digestion, often diarrhea or constipation',
          weight: 4,
          constitutionType: 'phlegm_dampness'
        }
      ]
    },
    {
      id: 'sleep_quality',
      type: 'single',
      category: 'sleep',
      weight: 2,
      title: 'How is your sleep quality?',
      description: 'Assess your overall sleep condition',
      validation: { required: true },
      options: [
        {
          value: 'excellent',
          label: 'Excellent sleep, fall asleep easily, sleep deeply',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'light_sleep',
          label: 'Light sleep, wake up easily, many dreams',
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        {
          value: 'insomnia',
          label: 'Often insomnia, difficult to fall asleep',
          weight: 4,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'drowsy',
          label: 'Always feel drowsy, never get enough sleep',
          weight: 3,
          constitutionType: 'phlegm_dampness'
        }
      ]
    },
    {
      id: 'emotional_state',
      type: 'single',
      category: 'emotion',
      weight: 2,
      title: 'How is your emotional state usually?',
      description: 'Choose the description that best fits your emotional characteristics',
      validation: { required: true },
      options: [
        {
          value: 'stable',
          label: 'Emotionally stable, happy mood',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'anxious',
          label: 'Easily anxious, irritable mood',
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'depressed',
          label: 'Often feel depressed, low mood',
          weight: 4,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'irritable',
          label: 'Easily lose temper, large mood swings',
          weight: 3,
          constitutionType: 'damp_heat'
        }
      ]
    },
    {
      id: 'menstrual_pattern',
      type: 'single',
      category: 'menstruation',
      weight: 3,
      title: 'What are your menstrual characteristics?',
      description: 'Choose the description that best fits your menstrual condition',
      validation: { required: true },
      options: [
        {
          value: 'regular_normal',
          label: 'Regular cycle, moderate flow, normal color',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'light_delayed',
          label: 'Light flow, delayed cycle, pale color',
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'heavy_early',
          label: 'Heavy flow, early cycle, dark red color',
          weight: 3,
          constitutionType: 'damp_heat'
        },
        {
          value: 'clots_dark',
          label: 'Blood clots, dark red or purple-black color',
          weight: 4,
          constitutionType: 'blood_stasis'
        },
        {
          value: 'irregular',
          label: 'Irregular cycle, variable flow',
          weight: 3,
          constitutionType: 'qi_stagnation'
        }
      ]
    },
    {
      id: 'body_type',
      type: 'single',
      category: 'physical',
      weight: 2,
      title: 'What are your body type characteristics?',
      description: 'Choose the description that best fits your body type',
      validation: { required: true },
      options: [
        {
          value: 'normal',
          label: 'Well-proportioned, neither fat nor thin',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'thin',
          label: 'Lean, not easy to gain weight',
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        {
          value: 'overweight',
          label: 'Overweight, prone to edema',
          weight: 3,
          constitutionType: 'phlegm_dampness'
        },
        {
          value: 'muscular',
          label: 'Strong build, firm muscles',
          weight: 2,
          constitutionType: 'balanced'
        }
      ]
    },
    {
      id: 'skin_condition',
      type: 'single',
      category: 'appearance',
      weight: 1,
      title: 'How is your skin condition?',
      description: 'Choose the description that best fits your skin characteristics',
      validation: { required: true },
      options: [
        {
          value: 'healthy',
          label: 'Moist skin, glossy, rarely get acne',
          weight: 3,
          constitutionType: 'balanced'
        },
        {
          value: 'dry',
          label: 'Dry skin, lack of luster',
          weight: 3,
          constitutionType: 'yin_deficiency'
        },
        {
          value: 'oily_acne',
          label: 'Oily skin, prone to acne',
          weight: 3,
          constitutionType: 'damp_heat'
        },
        {
          value: 'dull',
          label: 'Dull skin, many dark spots',
          weight: 3,
          constitutionType: 'blood_stasis'
        }
      ]
    },
    // New menstrual pain related questions
    {
      id: 'menstrual_pain_severity',
      type: 'scale',
      category: 'menstrual',
      weight: 3,
      title: 'How severe is your menstrual pain?',
      description: 'Please select your pain level on the slider (0=No pain, 10=Severe pain)',
      validation: { required: true, min: 0, max: 10 },
      options: Array.from({ length: 11 }, (_, i) => ({
        value: i,
        label: i === 0 ? 'No pain' : i <= 3 ? 'Mild' : i <= 6 ? 'Moderate' : i <= 8 ? 'Severe' : 'Extreme',
        weight: i <= 2 ? 3 : i <= 4 ? 2 : i <= 7 ? 3 : 4,
        constitutionType: i <= 2 ? 'balanced' : i <= 4 ? 'qi_deficiency' : i <= 7 ? 'blood_stasis' : 'qi_stagnation'
      }))
    },
    {
      id: 'pain_nature',
      type: 'single',
      category: 'menstrual',
      weight: 2,
      title: 'What is the nature of your menstrual pain?',
      description: 'Choose the description that best matches your pain sensation',
      validation: { required: true },
      options: [
        {
          value: 'cramping',
          label: 'Cramping, wave-like contractions',
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'dull_ache',
          label: 'Dull ache, continuous mild pain',
          weight: 3,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'sharp_pain',
          label: 'Sharp pain, like needle pricks',
          weight: 4,
          constitutionType: 'blood_stasis'
        },
        {
          value: 'cold_pain',
          label: 'Cold pain, worsens with cold, improves with warmth',
          weight: 3,
          constitutionType: 'yang_deficiency'
        }
      ]
    },
    {
      id: 'menstrual_symptoms',
      type: 'multiple',
      category: 'menstrual',
      weight: 2,
      title: 'What other symptoms do you experience during menstruation?',
      description: 'You can select multiple symptoms',
      validation: { required: false },
      options: [
        {
          value: 'bloating',
          label: 'Bloating',
          weight: 2,
          constitutionType: 'phlegm_dampness'
        },
        {
          value: 'nausea',
          label: 'Nausea and vomiting',
          weight: 3,
          constitutionType: 'damp_heat'
        },
        {
          value: 'headache',
          label: 'Headache',
          weight: 2,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'mood_swings',
          label: 'Severe mood swings',
          weight: 3,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'fatigue',
          label: 'Extreme fatigue',
          weight: 2,
          constitutionType: 'qi_deficiency'
        },
        {
          value: 'back_pain',
          label: 'Back pain',
          weight: 2,
          constitutionType: 'yang_deficiency'
        },
        {
          value: 'breast_tenderness',
          label: 'Breast tenderness',
          weight: 2,
          constitutionType: 'qi_stagnation'
        },
        {
          value: 'none',
          label: 'None of the above',
          weight: 1,
          constitutionType: 'balanced'
        }
      ]
    }
  ]
};
