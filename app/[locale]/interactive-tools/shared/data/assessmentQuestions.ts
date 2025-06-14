import { Question } from '../typest('tools.exportcon')age_range',
      type: 'single',
      category: 'basic',
      weight: 1,
      title: t('tools.您的年龄范围是'),
      description: t('tools.这有助于我们提供更准'),
      validation: { required: true },
      options: [
        { value: '12-17', label: t('tools.1217岁'), weight: 1 },
        { value: '18-25', label: t('tools.1825岁'), weight: 1 },
        { value: '26-35', label: t('tools.2635岁'), weight: 1 },
        { value: '36-45', label: t('tools.3645岁'), weight: 1.2 },
        { value: '46+', label: t('tools.46岁以上'), weight: 1.5 }
      ]
    },
    {
      id: 'cycle_regularity',
      type: 'single',
      category: 'basic',
      weight: 2,
      title: t('tools.您的月经周期规律吗'),
      description: t('tools.月经周期通常为213'),
      validation: { required: true },
      options: [
        { value: 'very_regular', label: t('tools.非常规律误差2天'), weight: 0 },
        { value: 'mostly_regular', label: t('tools.基本规律误差5天'), weight: 1 },
        { value: 'irregular', label: t('tools.不太规律误差5天'), weight: 2 },
        { value: 'very_irregular', label: t('tools.非常不规律t('tools.weight3')pain_severity',
      type: 'scale',
      category: 'pain',
      weight: 3,
      title: t('tools.您经期疼痛的平均强度'),
      description: t('tools.1表示几乎无痛10表'),
      validation: { required: true, min: 1, max: 10 },
      options: Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`,
        weight: i + 1
      }))
    },
    {
      id: 'pain_duration',
      type: 'single',
      category: 'pain',
      weight: 2,
      title: t('tools.疼痛通常持续多长时间'),
      validation: { required: true },
      options: [
        { value: 'few_hours', label: t('tools.几小时'), weight: 1 },
        { value: 'half_day', label: t('tools.半天'), weight: 2 },
        { value: 'one_day', label: t('tools.1天'), weight: 3 },
        { value: 'two_days', label: t('tools.2天'), weight: 4 },
        { value: 'three_plus_days', label: t('tools.3天或更长'), weight: 5 }
      ]
    },
    {
      id: 'pain_location',
      type: 'multiple',
      category: 'pain',
      weight: 2,
      title: t('tools.疼痛主要出现在哪些部'),
      description: t('tools.可以选择多个部位'),
      validation: { required: true },
      options: [
        { value: 'lower_abdomen', label: t('tools.下腹部'), icon: '🤰', weight: 2 },
        { value: 'lower_back', label: t('tools.下背部'), icon: '🔙', weight: 2 },
        { value: 'upper_back', label: t('tools.上背部'), icon: '⬆️', weight: 1 },
        { value: 'thighs', label: t('tools.大腿内侧'), icon: '🦵', weight: 1 },
        { value: 'head', label: t('tools.头部'), icon: '🧠', weight: 1 },
        { value: 'chest', label: t('tools.胸部乳房'), icon: '💗', weight: 1 }
      ]
    },
    {
      id: 'pain_impact',
      type: 'single',
      category: 'pain',
      weight: 3,
      title: t('tools.疼痛对您日常活动的影'),
      validation: { required: true },
      options: [
        { value: 'no_impact', label: t('tools.几乎无影响'), weight: 0 },
        { value: 'mild_impact', label: t('tools.轻微影响但能正常活动'), weight: 1 },
        { value: 'moderate_impact', label: t('tools.中等影响需要调整活动'), weight: 2 },
        { value: 'severe_impact', label: t('tools.严重影响难以进行日常'), weight: 3 },
        { value: 'unable_function', label: t('tools.无法正常活动需要卧床t('tools.weight4')accompanying_symptoms',
      type: 'multiple',
      category: 'symptoms',
      weight: 2,
      title: t('tools.您还有哪些伴随症状'),
      description: t('tools.可以选择多个症状'),
      options: [
        { value: 'nausea', label: t('tools.恶心'), icon: '🤢', weight: 2 },
        { value: 'vomiting', label: t('tools.呕吐'), icon: '🤮', weight: 3 },
        { value: 'diarrhea', label: t('tools.腹泻'), icon: '💩', weight: 2 },
        { value: 'constipation', label: t('tools.便秘'), icon: '🚫', weight: 1 },
        { value: 'bloating', label: t('tools.腹胀'), icon: '🎈', weight: 1 },
        { value: 'headache', label: t('tools.头痛'), icon: '🤕', weight: 2 },
        { value: 'dizziness', label: t('tools.头晕'), icon: '💫', weight: 2 },
        { value: 'fatigue', label: t('tools.极度疲劳'), icon: '😴', weight: 2 },
        { value: 'mood_swings', label: t('tools.情绪波动'), icon: '😤', weight: 1 },
        { value: 'anxiety', label: t('tools.焦虑'), icon: '😰', weight: 2 },
        { value: 'depression', label: t('tools.情绪低落'), icon: '😢t('tools.weight2')exercise_frequency',
      type: 'single',
      category: 'lifestyle',
      weight: 1,
      title: t('tools.您平时的运动频率是'),
      validation: { required: true },
      options: [
        { value: 'daily', label: t('tools.每天'), weight: 0 },
        { value: 'few_times_week', label: t('tools.每周几次'), weight: 0 },
        { value: 'weekly', label: t('tools.每周一次'), weight: 1 },
        { value: 'monthly', label: t('tools.每月几次'), weight: 2 },
        { value: 'rarely', label: t('tools.很少运动'), weight: 3 }
      ]
    },
    {
      id: 'stress_level',
      type: 'scale',
      category: 'lifestyle',
      weight: 2,
      title: t('tools.您最近的压力水平如何'),
      description: t('tools.1表示无压力10表示'),
      validation: { required: true, min: 1, max: 10 },
      options: Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`,
        weight: Math.floor(i / 3)
      }))
    },
    {
      id: 'sleep_quality',
      type: 'single',
      category: 'lifestyle',
      weight: 1,
      title: t('tools.您的睡眠质量如何'),
      validation: { required: true },
      options: [
        { value: 'excellent', label: t('tools.很好睡眠充足'), weight: 0 },
        { value: 'good', label: t('tools.良好'), weight: 0 },
        { value: 'fair', label: t('tools.一般'), weight: 1 },
        { value: 'poor', label: t('tools.较差经常失眠'), weight: 2 },
        { value: 'very_poor', label: t('tools.很差严重失眠t('tools.weight3')previous_treatment',
      type: 'multiple',
      category: 'medical',
      weight: 1,
      title: t('tools.您曾经尝试过哪些治疗'),
      description: t('tools.可以选择多个选项'),
      options: [
        { value: 'otc_painkillers', label: t('tools.非处方止痛药'), weight: 0 },
        { value: 'prescription_meds', label: t('tools.处方药物'), weight: 1 },
        { value: 'birth_control', label: t('tools.避孕药'), weight: 1 },
        { value: 'heat_therapy', label: t('tools.热敷'), weight: 0 },
        { value: 'massage', label: t('tools.按摩'), weight: 0 },
        { value: 'acupuncture', label: t('tools.针灸'), weight: 0 },
        { value: 'yoga', label: t('tools.瑜伽'), weight: 0 },
        { value: 'dietary_changes', label: t('tools.饮食调整'), weight: 0 },
        { value: 'no_treatment', label: t('tools.从未尝试过任何治疗'), weight: 2 }
      ]
    },
    {
      id: 'medical_conditions',
      type: 'multiple',
      category: 'medical',
      weight: 3,
      title: t('tools.您是否有以下医疗状况'),
      description: t('tools.请如实选择这有助于提'),
      options: [
        { value: 'endometriosis', label: t('tools.子宫内膜异位症'), weight: 4 },
        { value: 'fibroids', label: t('tools.子宫肌瘤'), weight: 3 },
        { value: 'pcos', label: t('tools.多囊卵巢综合征'), weight: 2 },
        { value: 'thyroid', label: t('tools.甲状腺疾病'), weight: 2 },
        { value: 'diabetes', label: t('tools.糖尿病'), weight: 2 },
        { value: 'heart_disease', label: t('tools.心脏病'), weight: 3 },
        { value: 'mental_health', label: t('tools.心理健康问题'), weight: 2 },
        { value: 'none', label: t('tools.以上都没有'), weight: 0 }
      ]
    }
  ],
  
  en: [
    // Basic Information
    {
      id: 'age_range',
      type: 'single',
      category: 'basic',
      weight: 1,
      title: 'What is your age range?',
      description: 'This helps us provide more accurate recommendations',
      validation: { required: true },
      options: [
        { value: '12-17', label: '12-17 years', weight: 1 },
        { value: '18-25', label: '18-25 years', weight: 1 },
        { value: '26-35', label: '26-35 years', weight: 1 },
        { value: '36-45', label: '36-45 years', weight: 1.2 },
        { value: '46+', label: '46+ years', weight: 1.5 }
      ]
    },
    {
      id: 'cycle_regularity',
      type: 'single',
      category: 'basic',
      weight: 2,
      title: 'Is your menstrual cycle regular?',
      description: 'A typical cycle is 21-35 days',
      validation: { required: true },
      options: [
        { value: 'very_regular', label: 'Very regular (±2 days)', weight: 0 },
        { value: 'mostly_regular', label: 'Mostly regular (±5 days)', weight: 1 },
        { value: 'irregular', label: 'Somewhat irregular (>5 days)', weight: 2 },
        { value: 'very_irregular', label: 'Very irregular', weight: 3 }
      ]
    },
    
    // Pain-related questions
    {
      id: 'pain_severity',
      type: 'scale',
      category: 'pain',
      weight: 3,
      title: 'What is the average intensity of your menstrual pain?',
      description: '1 means almost no pain, 10 means severe pain',
      validation: { required: true, min: 1, max: 10 },
      options: Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`,
        weight: i + 1
      }))
    },
    {
      id: 'pain_timing',
      type: 'multiple',
      category: 'pain',
      weight: 2,
      title: 'When do you usually experience pain?',
      description: 'You can select multiple options',
      validation: { required: true },
      options: [
        { value: 'before_period', label: 'Before period starts', weight: 1 },
        { value: 'first_day', label: 'First day of period', weight: 2 },
        { value: 'first_few_days', label: 'First few days', weight: 2 },
        { value: 'throughout', label: 'Throughout entire period', weight: 3 },
        { value: 'end_period', label: 'End of period', weight: 1 }
      ]
    },
    {
      id: 'pain_location',
      type: 'multiple',
      category: 'pain',
      weight: 2,
      title: 'Where do you mainly experience pain?',
      description: 'You can select multiple areas',
      validation: { required: true },
      options: [
        { value: 'lower_abdomen', label: 'Lower abdomen', icon: '🤰', weight: 2 },
        { value: 'lower_back', label: 'Lower back', icon: '🔙', weight: 2 },
        { value: 'upper_back', label: 'Upper back', icon: '⬆️', weight: 1 },
        { value: 'thighs', label: 'Inner thighs', icon: '🦵', weight: 1 },
        { value: 'head', label: 'Head', icon: '🧠', weight: 1 },
        { value: 'chest', label: 'Chest/breasts', icon: '💗', weight: 1 }
      ]
    },
    {
      id: 'pain_impact',
      type: 'single',
      category: 'pain',
      weight: 3,
      title: 'How much does pain affect your daily activities?',
      validation: { required: true },
      options: [
        { value: 'no_impact', label: 'Almost no impact', weight: 0 },
        { value: 'mild_impact', label: 'Mild impact, but can function normally', weight: 1 },
        { value: 'moderate_impact', label: 'Moderate impact, need to adjust activities', weight: 2 },
        { value: 'severe_impact', label: 'Severe impact, difficult to do daily activities', weight: 3 },
        { value: 'unable_function', label: 'Unable to function normally, need bed rest', weight: 4 }
      ]
    },

    // Symptoms
    {
      id: 'accompanying_symptoms',
      type: 'multiple',
      category: 'symptoms',
      weight: 2,
      title: 'What other symptoms do you experience during your period?',
      description: 'Select all that apply',
      validation: { required: false },
      options: [
        { value: 'nausea', label: 'Nausea/vomiting', icon: '🤢', weight: 2 },
        { value: 'headache', label: 'Headache', icon: '🤕', weight: 1 },
        { value: 'diarrhea', label: 'Diarrhea', icon: '💩', weight: 1 },
        { value: 'constipation', label: 'Constipation', icon: '🚫', weight: 1 },
        { value: 'bloating', label: 'Bloating', icon: '🎈', weight: 1 },
        { value: 'breast_tenderness', label: 'Breast tenderness', icon: '💗', weight: 1 },
        { value: 'mood_changes', label: 'Mood changes', icon: '😤', weight: 1 },
        { value: 'fatigue', label: 'Fatigue', icon: '😴', weight: 1 },
        { value: 'dizziness', label: 'Dizziness', icon: '💫', weight: 1 },
        { value: 'depression', label: 'Low mood', icon: '😢', weight: 2 }
      ]
    },

    // Lifestyle
    {
      id: 'exercise_frequency',
      type: 'single',
      category: 'lifestyle',
      weight: 1,
      title: 'How often do you exercise?',
      validation: { required: true },
      options: [
        { value: 'daily', label: 'Daily', weight: 0 },
        { value: 'few_times_week', label: 'Few times a week', weight: 0 },
        { value: 'weekly', label: 'Once a week', weight: 1 },
        { value: 'monthly', label: 'Few times a month', weight: 2 },
        { value: 'rarely', label: 'Rarely exercise', weight: 3 }
      ]
    },
    {
      id: 'stress_level',
      type: 'scale',
      category: 'lifestyle',
      weight: 2,
      title: 'What is your recent stress level?',
      description: '1 means no stress, 10 means extremely stressed',
      validation: { required: true, min: 1, max: 10 },
      options: Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`,
        weight: Math.floor(i / 3)
      }))
    },
    {
      id: 'sleep_quality',
      type: 'single',
      category: 'lifestyle',
      weight: 1,
      title: 'How is your sleep quality?',
      validation: { required: true },
      options: [
        { value: 'excellent', label: 'Excellent, sufficient sleep', weight: 0 },
        { value: 'good', label: 'Good', weight: 0 },
        { value: 'fair', label: 'Fair', weight: 1 },
        { value: 'poor', label: 'Poor, often have insomnia', weight: 2 },
        { value: 'very_poor', label: 'Very poor, severe insomnia', weight: 3 }
      ]
    },
    {
      id: 'diet_habits',
      type: 'multiple',
      category: 'lifestyle',
      weight: 1,
      title: 'Which of the following describes your diet habits?',
      description: 'Select all that apply',
      validation: { required: true },
      options: [
        { value: 'balanced', label: 'Balanced diet with fruits and vegetables', weight: 0 },
        { value: 'high_sugar', label: 'Often eat sweets and desserts', weight: 2 },
        { value: 'high_caffeine', label: 'Drink a lot of coffee/tea', weight: 1 },
        { value: 'irregular_meals', label: 'Irregular meal times', weight: 2 },
        { value: 'processed_foods', label: 'Often eat processed foods', weight: 2 },
        { value: 'adequate_water', label: 'Drink enough water daily', weight: 0 }
      ]
    },

    // Treatment history
    {
      id: 'current_treatments',
      type: 'multiple',
      category: 'lifestyle',
      weight: 1,
      title: 'What methods do you currently use to manage menstrual pain?',
      description: 'Select all that apply',
      validation: { required: false },
      options: [
        { value: 'pain_medication', label: 'Pain medication (ibuprofen, etc.)', weight: 0 },
        { value: 'heat_therapy', label: 'Heat therapy (heating pad, hot water bottle)', weight: 0 },
        { value: 'exercise', label: 'Light exercise', weight: 0 },
        { value: 'rest', label: 'Rest and sleep', weight: 1 },
        { value: 'massage', label: 'Massage', weight: 0 },
        { value: 'herbal_remedies', label: 'Herbal remedies', weight: 0 },
        { value: 'birth_control', label: 'Birth control pills', weight: 0 },
        { value: 'none', label: 'No specific treatment', weight: 2 }
      ]
    }
  ]
};
