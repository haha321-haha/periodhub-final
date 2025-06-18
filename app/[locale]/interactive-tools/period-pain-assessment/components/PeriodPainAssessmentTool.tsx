'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface AssessmentResult {
  type: string;
  severity: string;
  recommendation: string;
  needsConsultation: boolean;
}

export default function PeriodPainAssessmentTool({ locale }: { locale: string }) {
  const t = useTranslations();
  
  // 状态管理
  const [intensity, setIntensity] = useState<string>('');
  const [onset, setOnset] = useState<string>('');
  const [severeSymptoms, setSevereSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  // 处理严重症状选择
  const handleSevereSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSevereSymptoms([...severeSymptoms, symptom]);
    } else {
      setSevereSymptoms(severeSymptoms.filter(s => s !== symptom));
    }
  };

  // 评估逻辑
  const evaluateAssessment = () => {
    if (!intensity || !onset) {
      alert(t('interactiveTools.periodPainAssessment.validationMessage'));
      return;
    }

    let assessmentType = '';
    let needsConsultation = false;

    // 检查严重症状
    if (severeSymptoms.length > 0) {
      assessmentType = 'severe_symptoms';
      needsConsultation = true;
    }
    // 重度痛经 + 较晚开始
    else if (intensity === 'severe' && onset === 'later') {
      assessmentType = 'severe_late';
      needsConsultation = true;
    }
    // 重度痛经 + 早期开始
    else if (intensity === 'severe' && onset === 'early') {
      assessmentType = 'severe_early';
      needsConsultation = true;
    }
    // 中度痛经 + 较晚开始
    else if (intensity === 'moderate' && onset === 'later') {
      assessmentType = 'moderate_late';
      needsConsultation = true;
    }
    // 其他情况
    else {
      assessmentType = 'normal';
      needsConsultation = false;
    }

    const assessmentResult: AssessmentResult = {
      type: assessmentType,
      severity: intensity,
      recommendation: t(`interactiveTools.periodPainAssessment.results.${assessmentType}`),
      needsConsultation
    };

    setResult(assessmentResult);
    setShowResult(true);
  };

  // 重置评估
  const resetAssessment = () => {
    setIntensity('');
    setOnset('');
    setSevereSymptoms([]);
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="glass-effect rounded-xl p-4 sm:p-6 md:p-8 shadow-large">

        {!showResult ? (
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            
            {/* 痛经强度问题 */}
            <div className="form-group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 text-gray-800 leading-tight">
                {t('interactiveTools.periodPainAssessment.questions.intensity.title')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    value: 'mild',
                    label: t('interactiveTools.periodPainAssessment.questions.intensity.options.mild')
                  },
                  {
                    value: 'moderate',
                    label: t('interactiveTools.periodPainAssessment.questions.intensity.options.moderate')
                  },
                  {
                    value: 'severe',
                    label: t('interactiveTools.periodPainAssessment.questions.intensity.options.severe')
                  }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-3 sm:space-x-4 cursor-pointer touch-target p-4 sm:p-3 rounded-lg hover:bg-purple-50 active:bg-purple-100 transition-all duration-150 border-2 border-transparent hover:border-purple-200 active:border-purple-300 min-h-[56px] sm:min-h-[48px]"
                  >
                    <input
                      type="radio"
                      name="intensity"
                      value={option.value}
                      checked={intensity === option.value}
                      onChange={(e) => setIntensity(e.target.value)}
                      className="w-6 h-6 sm:w-5 sm:h-5 text-purple-600 mt-1 flex-shrink-0 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    />
                    <span className="text-gray-700 leading-relaxed flex-1 py-1 text-base sm:text-sm">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 痛经开始时间问题 */}
            <div className="form-group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 text-gray-800 leading-tight">
                {t('interactiveTools.periodPainAssessment.questions.onset.title')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    value: 'early',
                    label: t('interactiveTools.periodPainAssessment.questions.onset.options.recent')
                  },
                  {
                    value: 'later',
                    label: t('interactiveTools.periodPainAssessment.questions.onset.options.later')
                  }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-3 sm:space-x-4 cursor-pointer touch-target p-4 sm:p-3 rounded-lg hover:bg-purple-50 active:bg-purple-100 transition-all duration-150 border-2 border-transparent hover:border-purple-200 active:border-purple-300 min-h-[56px] sm:min-h-[48px]"
                  >
                    <input
                      type="radio"
                      name="onset"
                      value={option.value}
                      checked={onset === option.value}
                      onChange={(e) => setOnset(e.target.value)}
                      className="w-6 h-6 sm:w-5 sm:h-5 text-purple-600 mt-1 flex-shrink-0 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    />
                    <span className="text-gray-700 leading-relaxed flex-1 py-1 text-base sm:text-sm">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 严重症状问题 */}
            <div className="form-group">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 text-gray-800 leading-tight">
                {t('interactiveTools.periodPainAssessment.questions.symptoms.title')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    value: 'fever',
                    label: t('interactiveTools.periodPainAssessment.questions.symptoms.options.fever')
                  },
                  {
                    value: 'vomiting',
                    label: t('interactiveTools.periodPainAssessment.questions.symptoms.options.vomiting')
                  },
                  {
                    value: 'dizziness',
                    label: t('interactiveTools.periodPainAssessment.questions.symptoms.options.dizziness')
                  },
                  {
                    value: 'bleeding',
                    label: t('interactiveTools.periodPainAssessment.questions.symptoms.options.bleeding')
                  },
                  {
                    value: 'nonMenstrual',
                    label: t('interactiveTools.periodPainAssessment.questions.symptoms.options.nonMenstrual')
                  }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-3 sm:space-x-4 cursor-pointer touch-target p-4 sm:p-3 rounded-lg hover:bg-purple-50 active:bg-purple-100 transition-all duration-150 border-2 border-transparent hover:border-purple-200 active:border-purple-300 min-h-[56px] sm:min-h-[48px]"
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={severeSymptoms.includes(option.value)}
                      onChange={(e) => handleSevereSymptomChange(option.value, e.target.checked)}
                      className="w-6 h-6 sm:w-5 sm:h-5 text-purple-600 mt-1 flex-shrink-0 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                    />
                    <span className="text-gray-700 leading-relaxed flex-1 py-1 text-base sm:text-sm">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 评估按钮 */}
            <div className="pt-6 sm:pt-4 flex justify-center">
              <button
                onClick={evaluateAssessment}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:from-purple-800 active:to-pink-800 text-white font-bold w-full sm:w-auto sm:min-w-[240px] md:min-w-[200px] py-4 sm:py-3 px-8 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg touch-target min-h-[56px] sm:min-h-[48px] focus:ring-4 focus:ring-purple-300 focus:outline-none text-lg sm:text-base"
              >
                {t('interactiveTools.periodPainAssessment.actions.assess')}
              </button>
            </div>

          </div>
        ) : (
          /* 结果显示 */
          <div className="animate-fade-in">
            
            {/* 结果标题 */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                {t('interactiveTools.periodPainAssessment.results.title')}
              </h3>

              {result?.needsConsultation && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-5 mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-2">
                    <span className="text-red-600 text-2xl sm:text-xl">⚠️</span>
                    <span className="text-red-800 font-semibold text-base sm:text-sm">{t('interactiveTools.periodPainAssessment.results.consultTitle')}</span>
                  </div>
                  <p className="text-red-700 text-sm sm:text-xs leading-relaxed">
                    {t('interactiveTools.periodPainAssessment.results.consultAdvice')}
                  </p>
                </div>
              )}
            </div>

            {/* 详细建议 */}
            <div className="bg-gray-50 rounded-lg p-5 sm:p-6 mb-6 sm:mb-8">
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-sm">{t('interactiveTools.periodPainAssessment.results.analysisTitle')}</h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {result?.recommendation}
              </p>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={resetAssessment}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 active:bg-purple-100 px-6 sm:px-8 py-4 sm:py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 touch-target min-h-[56px] sm:min-h-[48px] focus:ring-4 focus:ring-purple-300 focus:outline-none order-2 sm:order-1 text-base sm:text-sm"
              >
                {t('interactiveTools.periodPainAssessment.actions.reset')}
              </button>
              <a
                href={`/${locale}/teen-health`}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 active:from-pink-700 active:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-3 font-semibold text-center rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg touch-target min-h-[56px] sm:min-h-[48px] focus:ring-4 focus:ring-pink-300 focus:outline-none order-1 sm:order-2 text-base sm:text-sm"
              >
                {t('interactiveTools.periodPainAssessment.actions.moreInfo')}
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
