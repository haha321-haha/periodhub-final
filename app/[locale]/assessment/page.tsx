'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

interface AssessmentData {
  painIntensity: number;
  dailyImpact: string;
  painTiming: string;
  painDuration: string;
  painCharacteristics: string[];
  painLocation: string[];
  ageGroup: string;
  cycleRegularity: string;
}

export default function AssessmentPage() {
  const locale = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    painIntensity: 5,
    dailyImpact: '',
    painTiming: '',
    painDuration: '',
    painCharacteristics: [],
    painLocation: [],
    ageGroup: '',
    cycleRegularity: ''
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAssessmentData = (field: keyof AssessmentData, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const painLabels = [
    t('assessment.noPain'), t('assessment.非常轻微'), t('assessment.轻微'), t('assessment.mild'), t('assessment.轻中度'), 
    t('assessment.中等'), t('assessment.moderate'), t('assessment.severe'), t('assessment.严重'), t('assessment.非常严重'), t('assessment.极度疼痛')
  ];

  if (showResults) {
    return <AssessmentResults data={assessmentData} locale={locale} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-semibold text-neutral-800">
              {locale === 'zh' ? t('assessment.智能症状评估') : 'Smart Symptom Assessment'}
            </h1>
            <span className="text-sm text-neutral-600">
              {currentStep}/{totalSteps}
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            
            {/* Step 1: Pain Intensity */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                    {locale === 'zh' ? t('assessment.疼痛强度评估') : 'Pain Intensity Assessment'}
                  </h2>
                  <p className="text-neutral-600">
                    {locale === 'zh' 
                      ? t('assessment.请选择您通常经历的最')
                      : 'Please select the highest pain intensity you typically experience (0=no pain, 10=unbearable pain)'
                    }
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-neutral-600">0</span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      value={assessmentData.painIntensity}
                      onChange={(e) => updateAssessmentData('painIntensity', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-neutral-600">10</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-red-600">
                      {assessmentData.painIntensity}
                    </span>
                    <span className="text-sm text-neutral-600 ml-2">
                      {painLabels[assessmentData.painIntensity]}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Daily Impact */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                    {locale === 'zh' ? t('assessment.对日常生活的影响') : 'Impact on Daily Life'}
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { value: 'no_impact', label: locale === 'zh' ? t('assessment.几乎无影响可以正常进') : 'Almost no impact, can perform all activities normally' },
                    { value: 'mild_impact', label: locale === 'zh' ? t('assessment.轻微影响可能需要放慢') : 'Mild impact, may need to slow down' },
                    { value: 'moderate_impact', label: locale === 'zh' ? t('assessment.中度影响难以专注工作') : 'Moderate impact, difficult to focus on work or study' },
                    { value: 'severe_impact', label: locale === 'zh' ? t('assessment.严重影响无法正常工作') : 'Severe impact, unable to work or study normally' },
                    { value: 'bedridden', label: locale === 'zh' ? t('assessment.需要卧床休息无法进行') : 'Need bed rest, unable to perform basic activities' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer">
                      <input
                        type="radio"
                        name="dailyImpact"
                        value={option.value}
                        checked={assessmentData.dailyImpact === option.value}
                        onChange={(e) => updateAssessmentData('dailyImpact', e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Pain Timing */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                    {locale === 'zh' ? t('assessment.疼痛通常什么时候开始') : 'When does pain usually start?'}
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { value: 'before_menstruation', label: locale === 'zh' ? t('assessment.月经来潮前13天') : '1-3 days before menstruation' },
                    { value: 'with_menstruation', label: locale === 'zh' ? t('assessment.月经开始时') : 'When menstruation starts' },
                    { value: 'after_start', label: locale === 'zh' ? t('assessment.月经开始后12天') : '1-2 days after menstruation starts' },
                    { value: 'throughout', label: locale === 'zh' ? t('assessment.整个月经期') : 'Throughout the entire menstrual period' },
                    { value: 'unpredictable', label: locale === 'zh' ? t('assessment.时间不固定') : 'Unpredictable timing' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer">
                      <input
                        type="radio"
                        name="painTiming"
                        value={option.value}
                        checked={assessmentData.painTiming === option.value}
                        onChange={(e) => updateAssessmentData('painTiming', e.target.value)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-3 text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-2 border border-neutral-300 rounded-lg text-neutral-600 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {locale === 'zh' ? t('common.previous') : 'Previous'}
              </button>
              
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {currentStep === totalSteps 
                  ? (locale === 'zh' ? t('assessment.查看结果') : 'View Results')
                  : (locale === 'zh' ? t('common.next') : 'Nextt('assessment.button')container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {locale === 'zh' ? '您的评估结果' : 'Your Assessment Results'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">
                {locale === 'zh' ? t('assessment.疼痛强度') : 'Pain Intensity'}
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {data.painIntensity}/10
              </div>
              <p className="text-red-700">
                {data.painIntensity <= 3 ? (locale === 'zh' ? t('assessment.轻度疼痛') : 'Mild Pain') :
                 data.painIntensity <= 6 ? (locale === 'zh' ? t('assessment.中度疼痛') : 'Moderate Pain') :
                 (locale === 'zh' ? t('assessment.重度疼痛') : 'Severe Pain')}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                {locale === 'zh' ? t('assessment.建议行动') : 'Recommended Actions'}
              </h3>
              <ul className="space-y-2 text-blue-700">
                {data.painIntensity >= 7 ? (
                  <li>• {locale === 'zh' ? t('assessment.建议咨询医生') : 'Consult a doctor'}</li>
                ) : (
                  <li>• {locale === 'zh' ? t('assessment.尝试自然缓解方法') : 'Try natural relief methods'}</li>
                )}
                <li>• {locale === 'zh' ? t('assessment.记录疼痛模式') : 'Track pain patterns'}</li>
                <li>• {locale === 'zh' ? t('assessment.改善生活方式') : 'Improve lifestyle'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
