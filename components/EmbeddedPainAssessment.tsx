'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface EmbeddedPainAssessmentProps {
  locale?: string;
  className?: string;
}

const EmbeddedPainAssessment: React.FC<EmbeddedPainAssessmentProps> = ({
  locale = 'zh',
  className = ''
}) => {
  const [intensity, setIntensity] = useState<string>('');
  const [showQuickResult, setShowQuickResult] = useState(false);

  const getQuickAssessment = () => {
    if (!intensity) {
      alert(locale === 'en' ? 'Please select pain intensity first' : t('common.请先选择痛经强度'));
      return;
    }

    setShowQuickResult(true);
  };

  const getResultMessage = () => {
    if (intensity === 'mild') {
      return locale === 'en'
        ? 'Your menstrual pain is mild. You can try natural relief methods like heat therapy and light exercise.'
        : t('common.您的痛经程度较轻可以');
    } else if (intensity === 'moderate') {
      return locale === 'en'
        ? 'Your menstrual pain is moderate. Consider combining multiple relief methods, and over-the-counter pain medication if needed.'
        : t('common.您的痛经程度中等建议');
    } else {
      return locale === 'en'
        ? 'Your menstrual pain is severe. We recommend consulting a doctor for professional assessment and treatment advice.'
        : t('common.您的痛经程度较重建议');
    }
  };

  const getResultColor = () => {
    if (intensity === 'mild') return 'border-green-500 bg-green-50 text-green-700';
    if (intensity === 'moderate') return 'border-yellow-500 bg-yellow-50 text-yellow-700';
    return 'border-red-500 bg-red-50 text-red-700';
  };

  return (
    <div className={`bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-primary-700 mb-2">
          {locale === 'en' ? '💡 Quick Pain Assessment' : t('common.痛经快速自测')}
        </h3>
        <p className="text-gray-600 text-sm">
          {locale === 'en'
            ? 'Understand your pain level in 1 minute and get initial recommendations'
            : t('common.1分钟了解您的痛经程')
          }
        </p>
      </div>

      {!showQuickResult ? (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-3 text-gray-800">
              {locale === 'en' ? 'How intense is your menstrual pain?' : t('common.您的痛经强度如何')}
            </h4>
            <div className="space-y-2">
              {[
                {
                  value: 'mild',
                  label: locale === 'en' ? 'Mild (tolerable, doesn\'t affect daily activities)' : t('common.轻微可以忍受不影响日'),
                  emoji: '😊'
                },
                {
                  value: 'moderate',
                  label: locale === 'en' ? 'Moderate (affects some activities, but manageable)' : t('common.中度影响部分活动但能'),
                  emoji: '😐'
                },
                {
                  value: 'severe',
                  label: locale === 'en' ? 'Severe (completely affects daily activities, need rest)' : t('common.重度完全影响日常活动'),
                  emoji: '😰'
                }
              ].map((option) => (
                <label 
                  key={option.value} 
                  className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="intensity"
                    value={option.value}
                    checked={intensity === option.value}
                    onChange={(e) => setIntensity(e.target.value)}
                    className="w-4 h-4 text-primary-600"
                  />
                  <span className="text-lg">{option.emoji}</span>
                  <span className="text-sm text-gray-700 flex-1">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={getQuickAssessment}
              className="flex-1 btn-primary text-sm py-2 px-4 font-semibold"
            >
              {locale === 'en' ? 'Get Advice' : t('common.获取建议')}
            </button>
            <Link
              href={`/${locale}/interactive-tools/period-pain-assessment`}
              className="flex-1 btn-outline text-sm py-2 px-4 font-semibold text-center"
            >
              {locale === 'en' ? 'Detailed Assessment' : t('common.详细评估')}
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border-l-4 ${getResultColor()}`}>
            <h4 className="font-medium mb-2">
              {locale === 'en' ? 'Assessment Result' : t('common.评估结果')}
            </h4>
            <p className="text-sm leading-relaxed">
              {getResultMessage()}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setShowQuickResult(false);
                setIntensity('');
              }}
              className="flex-1 btn-outline text-sm py-2 px-4 font-semibold"
            >
              {locale === 'en' ? 'Test Again' : t('common.重新测试')}
            </button>
            <Link
              href={`/${locale}/interactive-tools/period-pain-assessment`}
              className="flex-1 btn-primary text-sm py-2 px-4 font-semibold text-center"
            >
              {locale === 'en' ? 'Full Assessment' : t('common.完整评估')}
            </Link>
          </div>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          {locale === 'en'
            ? '⚠️ This tool is for reference only and cannot replace professional medical advice'
            : t('common.此工具仅供参考不能替')
          }
        </p>
      </div>
    </div>
  );
};

export default EmbeddedPainAssessment;
