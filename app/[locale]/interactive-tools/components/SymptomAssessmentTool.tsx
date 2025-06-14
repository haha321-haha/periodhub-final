'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Play,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Heart,
  Brain,
  Activity
} from 'lucide-react';
import { useSymptomAssessment } from '../shared/hooks/useSymptomAssessment';
import { useNotifications } from '../shared/hooks/useNotifications';
import NotificationContainer from '../shared/components/NotificationContainer';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import { AssessmentAnswer } from '../shared/types';
import { useSafeTranslations } from '@/hooks/useSafeTranslations';

interface SymptomAssessmentToolProps {
  locale: string;
}

export default function SymptomAssessmentTool({ locale }: SymptomAssessmentToolProps) {
  const { t } = useSafeTranslations('painTracker.assessmentt('tools.constsele')Result changed:', result);
  }, [result]);

  const {
    notifications,
    removeNotification,
    addSuccessNotification,
    addErrorNotification
  } = useNotifications();

  const handleStartAssessment = () => {
    console.log('Starting assessment with locale:', locale);
    startAssessment(locale);
  };

  const handleAnswerChange = (value: any) => {
    if (!currentQuestion) return;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));

    const answer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      value,
      timestamp: new Date().toISOString()
    };

    answerQuestion(answer);
  };

  const handleNext = () => {
    console.log('handleNext called:t('tools.currentQue')Completing assessment...');
      const assessmentResult = completeAssessment(t);
      console.log('Assessment result:', assessmentResult);

      if (assessmentResult) {
        addSuccessNotification(
          t('messages.assessmentComplete'),
          t('messages.assessmentCompleteDesct('tools.强制重新渲染以显示结')Result should be visible now:', result);
        }, 100);
      } else {
        console.error('Assessment result is null');
        addErrorNotification(
          t('messages.assessmentFailed'),
          t('messages.assessmentFailedDesc')
        );
      }
    } else {
      goToNextQuestion();
    }
  };

  const handlePrevious = () => {
    goToPreviousQuestion();
  };

  const isCurrentQuestionAnswered = () => {
    if (!currentQuestion) return false;
    const answer = selectedAnswers[currentQuestion.id];

    if (currentQuestion.validation?.required) {
      if (currentQuestion.type === 'multiple') {
        return Array.isArray(answer) && answer.length > 0;
      }
      return answer !== undefined && answer !== null && answer !== '';
    }

    return true;
  };

  // Start screen
  if (!currentSession) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('title', {}, locale === 'en' ? 'Symptom Assessment Tool' : t('tools.症状评估工具'))}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('subtitle', {}, locale === 'en' ? 'Professional symptom analysis tool to help you understand your health condition' : t('tools.专业的症状分析工具帮'))}
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              {t('start.title', {}, locale === 'en' ? 'Start Assessment' : t('tools.开始评估'))}
            </h3>
            <p className="text-blue-800 mb-4">
              {t('start.description', {}, locale === 'en' ? 'This assessment tool will help you understand the severity of your symptoms and provide personalized recommendations' : t('tools.这个评估工具将帮助您'))}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Heart,
                  text: locale === 'en' ? '12 Professional Questions' : t('tools.12个专业问题')
                },
                {
                  icon: Brain,
                  text: locale === 'en' ? 'Personalized Recommendations' : t('tools.个性化建议')
                },
                {
                  icon: CheckCircle,
                  text: locale === 'en' ? 'Scientific Assessment' : t('tools.科学评估')
                },
                {
                  icon: Activity,
                  text: locale === 'en' ? 'Instant Results' : t('tools.即时结果')
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleStartAssessment}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>{t('start.startButton', {}, locale === 'en' ? 'Start Assessment' : t('tools.开始评估'))}</span>
            </button>

            <p className="text-sm text-gray-500 mt-4">
              {t('start.disclaimer', {}, locale === 'en' ? 'This tool is for reference only and cannot replace professional medical advice' : t('tools.此工具仅供参考不能替'))}
            </p>
          </div>
        </div>

        <NotificationContainer
          notifications={notifications}
          onRemove={removeNotification}
        />
      </div>
    );
  }

  // Results screen
  if (result) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('result.title', {}, locale === 'en' ? 'Assessment Results' : t('tools.评估结果'))}
            </h2>
          </div>

          {/* Score and Severity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                {t('result.yourScore', {}, locale === 'en' ? 'Your Score' : t('tools.您的得分'))}
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                {result.score}/{result.maxScore}
              </p>
              <p className="text-sm text-gray-600">
                {Math.round(result.percentage)}%
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-lg text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                {t('result.severity')}
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {t(`severity.${result.severity}`)}
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                {t('result.type')}
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {t(`severity.${result.type}`)}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('result.summary')}
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">{result.message}</p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('result.recommendations')}
            </h3>
            <div className="space-y-4">
              {result.recommendations.map((recommendation) => (
                <div key={recommendation.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {recommendation.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      recommendation.priority === 'high' ? 'bg-red-100 text-red-800' :
                      recommendation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {t(`priority.${recommendation.priority}`)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{recommendation.description}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>{t('result.timeframe')}</strong> {recommendation.timeframe}
                  </p>

                  {recommendation.actionSteps && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">{t('result.actionSteps')}</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {(() => {
                          // Handle both array and string types for actionSteps
                          const steps = Array.isArray(recommendation.actionSteps)
                            ? recommendation.actionSteps
                            : typeof recommendation.actionSteps === 'string'
                            ? [recommendation.actionSteps]
                            : [];

                          return steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ));
                        })()}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetAssessment}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              {t('result.retakeAssessment')}
            </button>
            <button
              onClick={() => addSuccessNotification(
                t('messages.resultsSaved'),
                t('messages.resultsSavedDesc')
              )}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              {t('result.saveResults')}
            </button>
          </div>
        </div>

        <NotificationContainer
          notifications={notifications}
          onRemove={removeNotification}
        />
      </div>
    );
  }

  // Question screen
  console.log('Rendering question screen:', {
    currentQuestionIndex,
    totalQuestions,
    progress,
    currentQuestion: currentQuestion?.id
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 lg:p-8 mobile-safe-area">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 max-w-3xl mx-autot('tools.ProgressB')mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {t('progress.questionOf', {
                current: Math.min(currentQuestionIndex + 1, totalQuestions),
                total: totalQuestions
              })}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%t('tools.div')mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              {currentQuestion.title}
            </h2>
            {currentQuestion.description && (
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxedt('tools.currentQue')space-y-2 sm:space-y-3">
              {currentQuestion.type === 'single' && currentQuestion.options && (
                <div className="space-y-2 sm:space-y-3">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors mobile-touch-target ${
                        selectedAnswers[currentQuestion.id] === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400 active:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option.value}
                        checked={selectedAnswers[currentQuestion.id] === option.value}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 sm:w-4 sm:h-4 rounded-full border-2 mr-3 flex-shrink-0 ${
                        selectedAnswers[currentQuestion.id] === option.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion.id] === option.value && (
                          <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-white rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                      {option.icon && (
                        <span className="text-lg sm:text-base mr-2 sm:mr-3 flex-shrink-0">{option.icon}</span>
                      )}
                      <span className="text-sm sm:text-base text-gray-900 leading-relaxed">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiple' && currentQuestion.options && (
                <div className="space-y-2 sm:space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = Array.isArray(selectedAnswers[currentQuestion.id]) &&
                      selectedAnswers[currentQuestion.id].includes(option.value);

                    return (
                      <label
                        key={option.value}
                        className={`flex items-center p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors mobile-touch-target ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400 active:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => {
                            const currentValues = selectedAnswers[currentQuestion.id] || [];
                            let newValues: string[];

                            // Handle "none" options logic
                            const isNoneOption = option.value === 'none' || option.value === 'no_treatment';
                            const hasNoneSelected = currentValues.includes('none') || currentValues.includes('no_treatment');

                            if (isNoneOption) {
                              // If selecting a "none" option, clear all other selections
                              newValues = e.target.checked ? [String(option.value)] : [];
                            } else {
                              // If selecting a regular option, remove any "none" options first
                              const filteredValues = currentValues.filter((v: string) => v !== 'none' && v !== 'no_treatment');
                              newValues = e.target.checked
                                ? [...filteredValues, option.value]
                                : filteredValues.filter((v: any) => v !== option.value);
                            }

                            handleAnswerChange(newValues);
                          }}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 sm:w-4 sm:h-4 rounded border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <CheckCircle className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-white" />
                          )}
                        </div>
                        {option.icon && (
                          <span className="text-lg sm:text-base mr-2 sm:mr-3 flex-shrink-0">{option.icon}</span>
                        )}
                        <span className="text-sm sm:text-base text-gray-900 leading-relaxed">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'scale' && (
                <div className="space-y-6">
                  <div className="px-4 pain-scale-container">
                    <input
                      type="range"
                      min={currentQuestion.validation?.min || 1}
                      max={currentQuestion.validation?.max || 10}
                      value={selectedAnswers[currentQuestion.id] || (currentQuestion.validation?.min || 1)}
                      onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
                      className="w-full pain-scale cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-neutral-600 mt-2">
                      <span className="text-xs sm:text-sm">{t('painScale.levels.none', {}, locale === 'en' ? 'None' : t('assessment.noPain'))}</span>
                      <span className="text-xs sm:text-sm">{t('painScale.levels.mild', {}, locale === 'en' ? 'Mild' : t('tools.轻微'))}</span>
                      <span className="text-xs sm:text-sm">{t('painScale.levels.moderate', {}, locale === 'en' ? 'Moderate' : t('tools.中等'))}</span>
                      <span className="text-xs sm:text-sm">{t('painScale.levels.severe', {}, locale === 'en' ? 'Severe' : t('tools.严重'))}</span>
                      <span className="text-xs sm:text-sm">{t('painScale.levels.extreme', {}, locale === 'en' ? 'Extreme' : t('tools.极重t('tools.span')text-center">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-blue-50 to-purple-100 px-8 py-4 rounded-2xl shadow-lg border border-blue-200">
                      <span className="text-xl font-bold text-blue-800">
                        {t('painScale.title', {}, locale === 'en' ? 'Pain Level: ' : t('tools.疼痛程度'))}
                        <span className="text-3xl font-extrabold text-blue-600 mx-2">
                          {selectedAnswers[currentQuestion.id] || (currentQuestion.validation?.min || 1)}
                        </span>
                        <span className="text-base font-medium text-blue-700 ml-2">
                          ({(() => {
                            const value = selectedAnswers[currentQuestion.id] || (currentQuestion.validation?.min || 1);
                            if (value <= 2) return t('painScale.levels.none', {}, locale === 'en' ? 'None' : t('assessment.noPain'));
                            if (value <= 4) return t('painScale.levels.mild', {}, locale === 'en' ? 'Mild' : t('tools.轻微'));
                            if (value <= 6) return t('painScale.levels.moderate', {}, locale === 'en' ? 'Moderate' : t('tools.中等'));
                            if (value <= 8) return t('painScale.levels.severe', {}, locale === 'en' ? 'Severe' : t('tools.严重'));
                            return t('painScale.levels.extreme', {}, locale === 'en' ? 'Extreme' : t('tools.极重t('tools.span')bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl overflow-hidden border border-blue-200 shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                      <span>📖</span>
                      <span className="ml-2">{t('painScale.reference', {}, locale === 'en' ? 'Pain Level Reference' : t('tools.疼痛程度参考'))}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-700">
                      <div className="flex items-start break-words bg-white p-3 rounded-lg shadow-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>0-2:</strong> {t('painScale.descriptions.0-2', {}, locale === 'en' ? 'No pain or very mild discomfort' : t('tools.无痛或极轻微不适'))}</span>
                      </div>
                      <div className="flex items-start break-words bg-white p-3 rounded-lg shadow-sm">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>3-4:</strong> {t('painScale.descriptions.3-4', {}, locale === 'en' ? 'Mild pain, does not affect daily activities' : t('tools.轻微疼痛不影响日常活'))}</span>
                      </div>
                      <div className="flex items-start break-words bg-white p-3 rounded-lg shadow-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>5-7:</strong> {t('painScale.descriptions.5-7', {}, locale === 'en' ? 'Moderate pain, affects some activities' : t('tools.中等疼痛影响部分活动'))}</span>
                      </div>
                      <div className="flex items-start break-words bg-white p-3 rounded-lg shadow-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>8-10:</strong> {t('painScale.descriptions.8-10', {}, locale === 'en' ? 'Severe pain, seriously affects life' : t('tools.严重疼痛严重影响生活t('tools.span')flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-0 mt-6 sm:mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center justify-center sm:justify-start px-4 py-3 sm:py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed mobile-touch-target order-2 sm:order-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm sm:text-base">{t('navigation.previous')}</span>
          </button>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 order-1 sm:order-2">
            {!currentQuestion?.validation?.required && (
              <button
                onClick={handleNext}
                className="px-4 sm:px-6 py-3 sm:py-2 text-gray-600 hover:text-gray-900 mobile-touch-target text-sm sm:text-base"
              >
                {t('navigation.skip')}
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center mobile-touch-target text-sm sm:text-base"
            >
              {currentQuestionIndex >= totalQuestions - 1 ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t('navigation.finish')}
                </>
              ) : (
                <>
                  {t('navigation.next')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}
      </div>

      <NotificationContainer
        notifications={notifications}
        onRemove={removeNotification}
      />
    </div>
  );
}
