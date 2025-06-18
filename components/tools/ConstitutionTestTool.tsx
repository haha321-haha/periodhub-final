'use client';

import { useState } from 'react';

interface ConstitutionResult {
  type: string;
  name: string;
  description: string;
  characteristics: string[];
  recommendations: string[];
  color: string;
}

const CONSTITUTION_TYPES: { [key: string]: ConstitutionResult } = {
  balanced: {
    type: 'balanced',
    name: '平和质',
    description: '阴阳气血调和，体质状态良好',
    characteristics: [
      '面色红润有光泽',
      '精力充沛，不易疲劳',
      '睡眠质量好',
      '食欲正常，消化良好',
      '情绪稳定，适应能力强'
    ],
    recommendations: [
      '保持规律作息',
      '适量运动，如散步、太极',
      '饮食均衡，不偏食',
      '保持心情愉悦'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  qi_deficiency: {
    type: 'qi_deficiency',
    name: '气虚质',
    description: '元气不足，以疲乏、气短为主要特征',
    characteristics: [
      '容易疲劳，精神不振',
      '说话声音低弱',
      '容易出汗',
      '容易感冒',
      '舌淡红，脉弱'
    ],
    recommendations: [
      '多食补气食物：人参、黄芪、山药',
      '避免过度劳累',
      '适当运动，如八段锦',
      '保证充足睡眠'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  yang_deficiency: {
    type: 'yang_deficiency',
    name: '阳虚质',
    description: '阳气不足，以畏寒怕冷为主要特征',
    characteristics: [
      '手脚冰凉，怕冷',
      '喜欢热饮热食',
      '精神不振',
      '面色苍白',
      '大便溏薄'
    ],
    recommendations: [
      '多食温阳食物：羊肉、生姜、肉桂',
      '避免生冷食物',
      '适当晒太阳',
      '艾灸调理'
    ],
    color: 'from-orange-500 to-red-500'
  },
  yin_deficiency: {
    type: 'yin_deficiency',
    name: '阴虚质',
    description: '阴液不足，以口燥咽干、手足心热为主要特征',
    characteristics: [
      '手足心热',
      '口干咽燥',
      '容易失眠',
      '皮肤干燥',
      '舌红少苔'
    ],
    recommendations: [
      '多食滋阴食物：银耳、百合、枸杞',
      '避免辛辣燥热食物',
      '保持充足睡眠',
      '适当静养'
    ],
    color: 'from-blue-500 to-purple-500'
  },
  phlegm_dampness: {
    type: 'phlegm_dampness',
    name: '痰湿质',
    description: '痰湿凝聚，以形体肥胖、腹部肥满为主要特征',
    characteristics: [
      '形体肥胖，腹部肥满',
      '面部皮肤油脂较多',
      '容易困倦',
      '胸闷痰多',
      '舌苔厚腻'
    ],
    recommendations: [
      '多食化痰祛湿食物：薏米、冬瓜、海带',
      '少食肥甘厚腻',
      '加强运动，促进代谢',
      '保持环境干燥'
    ],
    color: 'from-teal-500 to-cyan-500'
  }
};

const QUESTIONS = [
  {
    id: 1,
    question: '您平时的精神状态如何？',
    options: [
      { text: '精力充沛，很少感到疲劳', scores: { balanced: 2, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 1, phlegm_dampness: 0 } },
      { text: '容易疲劳，精神不振', scores: { balanced: 0, qi_deficiency: 2, yang_deficiency: 1, yin_deficiency: 0, phlegm_dampness: 1 } },
      { text: '时好时坏，波动较大', scores: { balanced: 1, qi_deficiency: 1, yang_deficiency: 1, yin_deficiency: 1, phlegm_dampness: 1 } }
    ]
  },
  {
    id: 2,
    question: '您对寒冷的感受如何？',
    options: [
      { text: '不怕冷，适应能力强', scores: { balanced: 2, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 1, phlegm_dampness: 0 } },
      { text: '比较怕冷，手脚容易冰凉', scores: { balanced: 0, qi_deficiency: 1, yang_deficiency: 2, yin_deficiency: 0, phlegm_dampness: 0 } },
      { text: '一般，季节变化时需要注意', scores: { balanced: 1, qi_deficiency: 1, yang_deficiency: 1, yin_deficiency: 1, phlegm_dampness: 1 } }
    ]
  },
  {
    id: 3,
    question: '您的睡眠质量如何？',
    options: [
      { text: '睡眠很好，很少失眠', scores: { balanced: 2, qi_deficiency: 1, yang_deficiency: 1, yin_deficiency: 0, phlegm_dampness: 1 } },
      { text: '容易失眠，睡眠浅', scores: { balanced: 0, qi_deficiency: 1, yang_deficiency: 0, yin_deficiency: 2, phlegm_dampness: 0 } },
      { text: '嗜睡，容易困倦', scores: { balanced: 0, qi_deficiency: 1, yang_deficiency: 1, yin_deficiency: 0, phlegm_dampness: 2 } }
    ]
  },
  {
    id: 4,
    question: '您的皮肤状态如何？',
    options: [
      { text: '皮肤润泽有光泽', scores: { balanced: 2, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 0, phlegm_dampness: 0 } },
      { text: '皮肤干燥，缺乏光泽', scores: { balanced: 0, qi_deficiency: 1, yang_deficiency: 1, yin_deficiency: 2, phlegm_dampness: 0 } },
      { text: '皮肤油腻，毛孔粗大', scores: { balanced: 0, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 0, phlegm_dampness: 2 } }
    ]
  },
  {
    id: 5,
    question: '您的消化情况如何？',
    options: [
      { text: '食欲正常，消化良好', scores: { balanced: 2, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 1, phlegm_dampness: 0 } },
      { text: '食欲不振，容易腹胀', scores: { balanced: 0, qi_deficiency: 2, yang_deficiency: 1, yin_deficiency: 0, phlegm_dampness: 1 } },
      { text: '大便不成形，容易腹泻', scores: { balanced: 0, qi_deficiency: 1, yang_deficiency: 2, yin_deficiency: 0, phlegm_dampness: 1 } }
    ]
  },
  {
    id: 6,
    question: '您的情绪状态如何？',
    options: [
      { text: '情绪稳定，心情愉悦', scores: { balanced: 2, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 0, phlegm_dampness: 0 } },
      { text: '容易烦躁，心情波动大', scores: { balanced: 0, qi_deficiency: 0, yang_deficiency: 0, yin_deficiency: 2, phlegm_dampness: 0 } },
      { text: '容易忧郁，缺乏活力', scores: { balanced: 0, qi_deficiency: 2, yang_deficiency: 1, yin_deficiency: 0, phlegm_dampness: 1 } }
    ]
  }
];

export default function ConstitutionTestTool() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [result, setResult] = useState<ConstitutionResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: { [key: number]: number }) => {
    const scores: { [key: string]: number } = {
      balanced: 0,
      qi_deficiency: 0,
      yang_deficiency: 0,
      yin_deficiency: 0,
      phlegm_dampness: 0
    };

    // 计算各体质得分
    Object.entries(finalAnswers).forEach(([questionIndex, answerIndex]) => {
      const question = QUESTIONS[parseInt(questionIndex)];
      const selectedOption = question.options[answerIndex];
      
      Object.entries(selectedOption.scores).forEach(([constitution, score]) => {
        scores[constitution] += score;
      });
    });

    // 找出得分最高的体质
    const maxScore = Math.max(...Object.values(scores));
    const resultType = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] || 'balanced';
    
    setResult(CONSTITUTION_TYPES[resultType]);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowResult(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResult && result) {
    return (
      <div className="bg-white rounded-xl p-6 border border-gray-200 my-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 体质测试结果</h3>
          <div className={`w-20 h-20 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <span className="text-white text-2xl font-bold">{result.name[0]}</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">{result.name}</h4>
          <p className="text-gray-600">{result.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* 体质特征 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-bold text-blue-800 mb-3 flex items-center">
              <span className="mr-2">📋</span>
              主要特征
            </h5>
            <ul className="space-y-2">
              {result.characteristics.map((char, index) => (
                <li key={index} className="text-blue-700 text-sm flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {char}
                </li>
              ))}
            </ul>
          </div>

          {/* 调理建议 */}
          <div className="bg-green-50 rounded-lg p-4">
            <h5 className="font-bold text-green-800 mb-3 flex items-center">
              <span className="mr-2">💡</span>
              调理建议
            </h5>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="text-green-700 text-sm flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-center">
          <button
            onClick={resetTest}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            重新测试
          </button>
        </div>

        <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <p className="text-yellow-800 text-sm text-center">
            <strong>⚠️ 提醒：</strong>此测试结果仅供参考，具体体质判断建议咨询专业中医师。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 my-8">
      
      {/* 测试头部 */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">🏥 中医体质测试</h3>
        <p className="text-gray-600 mb-4">
          通过6个问题，了解您的中医体质类型，获得个性化调理建议
        </p>
        
        {/* 进度条 */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500">
          问题 {currentQuestion + 1} / {QUESTIONS.length}
        </p>
      </div>

      {/* 当前问题 */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
          {QUESTIONS[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {QUESTIONS[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 transform hover:scale-105"
            >
              <div className="flex items-center">
                <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 导航按钮 */}
      <div className="flex justify-between">
        <button
          onClick={goBack}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentQuestion === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          上一题
        </button>
        
        <button
          onClick={resetTest}
          className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-all duration-200"
        >
          重新开始
        </button>
      </div>

    </div>
  );
}
