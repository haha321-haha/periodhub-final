'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Circle, RotateCcw } from 'lucide-react';

export default function ConstitutionTestPage() {
  const locale = useLocale();
  const t = useTranslations();

  // 体质测试问题
  const questions = [
    {
      id: 1,
      question: locale === 'zh' ? '您平时怕冷吗？' : 'Do you usually feel cold?',
      options: [
        { value: 'cold', text: locale === 'zh' ? '经常怕冷，手脚冰凉' : 'Often feel cold, cold hands and feet', score: { cold: 3, hot: 0, balanced: 0 } },
        { value: 'normal', text: locale === 'zh' ? '偶尔怕冷，但不明显' : 'Occasionally feel cold, but not obvious', score: { cold: 1, hot: 0, balanced: 2 } },
        { value: 'hot', text: locale === 'zh' ? '很少怕冷，容易出汗' : 'Rarely feel cold, easy to sweat', score: { cold: 0, hot: 3, balanced: 0 } }
      ]
    },
    {
      id: 2,
      question: locale === 'zh' ? '您的月经量通常如何？' : 'How is your menstrual flow usually?',
      options: [
        { value: 'light', text: locale === 'zh' ? '量少，颜色淡' : 'Light flow, pale color', score: { cold: 2, hot: 0, balanced: 1 } },
        { value: 'normal', text: locale === 'zh' ? '量正常，颜色正常' : 'Normal flow, normal color', score: { cold: 0, hot: 0, balanced: 3 } },
        { value: 'heavy', text: locale === 'zh' ? '量多，颜色深红' : 'Heavy flow, dark red color', score: { cold: 0, hot: 3, balanced: 0 } }
      ]
    },
    {
      id: 3,
      question: locale === 'zh' ? '您的舌苔颜色通常是？' : 'What color is your tongue coating usually?',
      options: [
        { value: 'white', text: locale === 'zh' ? '舌苔白腻' : 'White and greasy coating', score: { cold: 3, hot: 0, balanced: 0 } },
        { value: 'normal', text: locale === 'zh' ? '舌苔薄白' : 'Thin white coating', score: { cold: 0, hot: 0, balanced: 3 } },
        { value: 'yellow', text: locale === 'zh' ? '舌苔黄厚' : 'Yellow and thick coating', score: { cold: 0, hot: 3, balanced: 0 } }
      ]
    },
    {
      id: 4,
      question: locale === 'zh' ? '您的精神状态如何？' : 'How is your mental state?',
      options: [
        { value: 'tired', text: locale === 'zh' ? '经常疲倦，精神不振' : 'Often tired, lack of energy', score: { cold: 2, hot: 0, balanced: 1 } },
        { value: 'normal', text: locale === 'zh' ? '精神状态良好' : 'Good mental state', score: { cold: 0, hot: 0, balanced: 3 } },
        { value: 'restless', text: locale === 'zh' ? '容易烦躁，失眠' : 'Easy to be irritable, insomnia', score: { cold: 0, hot: 2, balanced: 1 } }
      ]
    },
    {
      id: 5,
      question: locale === 'zh' ? '您的食欲如何？' : 'How is your appetite?',
      options: [
        { value: 'poor', text: locale === 'zh' ? '食欲不振，喜欢温热食物' : 'Poor appetite, prefer warm food', score: { cold: 3, hot: 0, balanced: 0 } },
        { value: 'normal', text: locale === 'zh' ? '食欲正常，不挑食' : 'Normal appetite, not picky', score: { cold: 0, hot: 0, balanced: 3 } },
        { value: 'strong', text: locale === 'zh' ? '食欲旺盛，喜欢冷饮' : 'Strong appetite, prefer cold drinks', score: { cold: 0, hot: 3, balanced: 0 } }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (questionId: number, option: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const scores = { cold: 0, hot: 0, balanced: 0 };
    
    Object.values(answers).forEach((answer: any) => {
      scores.cold += answer.score.cold;
      scores.hot += answer.score.hot;
      scores.balanced += answer.score.balanced;
    });

    let constitutionType = 'balanced';
    let maxScore = scores.balanced;

    if (scores.cold > maxScore) {
      constitutionType = 'cold';
      maxScore = scores.cold;
    }
    if (scores.hot > maxScore) {
      constitutionType = 'hot';
      maxScore = scores.hot;
    }

    const resultData = {
      type: constitutionType,
      scores,
      recommendations: getRecommendations(constitutionType)
    };

    setResult(resultData);
    setShowResult(true);
  };

  const getRecommendations = (type: string) => {
    switch (type) {
      case 'cold':
        return {
          title: locale === 'zh' ? '寒性体质' : 'Cold Constitution',
          description: locale === 'zh' ? '您的体质偏寒，需要温阳散寒的调理方法' : 'Your constitution is cold, needs warming yang and dispersing cold methods',
          foods: locale === 'zh' ? ['生姜', '桂圆', '红枣', '当归', '肉桂'] : ['Ginger', 'Longan', 'Red dates', 'Angelica', 'Cinnamon'],
          avoid: locale === 'zh' ? ['生冷食物', '冰饮', '寒性水果'] : ['Cold foods', 'Ice drinks', 'Cold fruits'],
          therapies: locale === 'zh' ? ['艾灸', '热敷', '温阳中药'] : ['Moxibustion', 'Hot compress', 'Yang-warming herbs']
        };
      case 'hot':
        return {
          title: locale === 'zh' ? '热性体质' : 'Hot Constitution',
          description: locale === 'zh' ? '您的体质偏热，需要清热凉血的调理方法' : 'Your constitution is hot, needs heat-clearing and blood-cooling methods',
          foods: locale === 'zh' ? ['绿豆', '莲子', '银耳', '菊花', '薄荷'] : ['Mung beans', 'Lotus seeds', 'White fungus', 'Chrysanthemum', 'Mint'],
          avoid: locale === 'zh' ? ['辛辣食物', '烧烤', '热性水果'] : ['Spicy foods', 'Barbecue', 'Hot fruits'],
          therapies: locale === 'zh' ? ['清热中药', '冷敷', '凉性食疗'] : ['Heat-clearing herbs', 'Cold compress', 'Cooling food therapy']
        };
      default:
        return {
          title: locale === 'zh' ? '平和体质' : 'Balanced Constitution',
          description: locale === 'zh' ? '您的体质比较平和，继续保持良好的生活习惯' : 'Your constitution is balanced, continue maintaining good lifestyle habits',
          foods: locale === 'zh' ? ['五谷杂粮', '新鲜蔬果', '优质蛋白'] : ['Whole grains', 'Fresh fruits and vegetables', 'Quality protein'],
          avoid: locale === 'zh' ? ['过度偏食', '暴饮暴食'] : ['Excessive picky eating', 'Overeating'],
          therapies: locale === 'zh' ? ['适量运动', '规律作息', '均衡饮食'] : ['Moderate exercise', 'Regular schedule', 'Balanced diet']
        };
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* 返回按钮 */}
          <div className="mb-6">
            <Link href={`/${locale}/natural-therapies`} className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {locale === 'zh' ? '返回平时调理' : 'Back to Natural Therapies'}
            </Link>
          </div>

          {/* 测试结果 */}
          <div className="glass-effect rounded-xl p-8 text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {locale === 'zh' ? '体质测试结果' : 'Constitution Test Result'}
            </h1>
            
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-purple-600 mb-3">
                {result.recommendations.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {result.recommendations.description}
              </p>
            </div>

            {/* 调理建议 */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">
                  {locale === 'zh' ? '推荐食物' : 'Recommended Foods'}
                </h3>
                <ul className="space-y-1">
                  {result.recommendations.foods.map((food: string, index: number) => (
                    <li key={index} className="text-sm text-gray-600">• {food}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">
                  {locale === 'zh' ? '避免食物' : 'Foods to Avoid'}
                </h3>
                <ul className="space-y-1">
                  {result.recommendations.avoid.map((food: string, index: number) => (
                    <li key={index} className="text-sm text-gray-600">• {food}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">
                  {locale === 'zh' ? '调理方法' : 'Therapy Methods'}
                </h3>
                <ul className="space-y-1">
                  {result.recommendations.therapies.map((therapy: string, index: number) => (
                    <li key={index} className="text-sm text-gray-600">• {therapy}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetTest}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {locale === 'zh' ? '重新测试' : 'Retake Test'}
              </button>
              
              <Link
                href={`/${locale}/natural-therapies`}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                {locale === 'zh' ? '查看调理方案' : 'View Therapy Plans'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link href={`/${locale}/natural-therapies`} className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'zh' ? '返回平时调理' : 'Back to Natural Therapies'}
          </Link>
        </div>

        {/* 进度条 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              {locale === 'zh' ? '进度' : 'Progress'}
            </span>
            <span className="text-sm text-gray-600">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* 问题卡片 */}
        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[questions[currentQuestion].id]?.value === option.value
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                }`}
              >
                <div className="flex items-center">
                  {answers[questions[currentQuestion].id]?.value === option.value ? (
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 mr-3" />
                  )}
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={nextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === questions.length - 1 
                ? (locale === 'zh' ? '查看结果' : 'View Result')
                : (locale === 'zh' ? '下一题' : 'Next')
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
