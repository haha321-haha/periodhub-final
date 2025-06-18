'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface CycleData {
  id: string;
  startDate: string;
  endDate?: string;
  flow: 'light' | 'medium' | 'heavy';
  symptoms: string[];
  notes?: string;
}

interface CyclePrediction {
  nextPeriod: string;
  ovulation: string;
  cycleLength: number;
  confidence: number;
}

export default function CycleTrackerTool({ locale }: { locale: string }) {
  const t = useTranslations();
  
  // 状态管理
  const [cycles, setCycles] = useState<CycleData[]>([]);
  const [currentCycle, setCurrentCycle] = useState<Partial<CycleData>>({});
  const [prediction, setPrediction] = useState<CyclePrediction | null>(null);
  const [activeTab, setActiveTab] = useState<'record' | 'history' | 'prediction'>('record');
  const [isRecording, setIsRecording] = useState(false);

  // 从本地存储加载数据
  useEffect(() => {
    const savedCycles = localStorage.getItem('period-cycles');
    if (savedCycles) {
      const parsedCycles = JSON.parse(savedCycles);
      setCycles(parsedCycles);
      if (parsedCycles.length >= 2) {
        calculatePrediction(parsedCycles);
      }
    }
  }, []);

  // 保存数据到本地存储
  const saveCycles = (newCycles: CycleData[]) => {
    localStorage.setItem('period-cycles', JSON.stringify(newCycles));
    setCycles(newCycles);
  };

  // 计算周期预测
  const calculatePrediction = (cycleData: CycleData[]) => {
    if (cycleData.length < 2) return;

    const completeCycles = cycleData.filter(cycle => cycle.endDate);
    if (completeCycles.length < 2) return;

    // 计算平均周期长度
    const cycleLengths = completeCycles.slice(0, -1).map((cycle, index) => {
      const startDate = new Date(cycle.startDate);
      const nextStartDate = new Date(completeCycles[index + 1].startDate);
      return Math.round((nextStartDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    });

    const avgCycleLength = Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length);
    const lastCycle = completeCycles[completeCycles.length - 1];
    const lastStartDate = new Date(lastCycle.startDate);
    
    // 预测下次月经
    const nextPeriodDate = new Date(lastStartDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + avgCycleLength);
    
    // 预测排卵期 (通常在下次月经前14天)
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(ovulationDate.getDate() - 14);

    // 计算预测置信度
    const variance = cycleLengths.reduce((acc, length) => acc + Math.pow(length - avgCycleLength, 2), 0) / cycleLengths.length;
    const confidence = Math.max(60, Math.min(95, 95 - variance * 2));

    setPrediction({
      nextPeriod: nextPeriodDate.toISOString().split('T')[0],
      ovulation: ovulationDate.toISOString().split('T')[0],
      cycleLength: avgCycleLength,
      confidence: Math.round(confidence)
    });
  };

  // 获取今天日期
  const getTodayDate = () => new Date().toISOString().split('T')[0];

  // 开始记录新周期
  const startNewCycle = () => {
    const today = getTodayDate();
    setCurrentCycle({
      id: Date.now().toString(),
      startDate: today,
      flow: 'medium',
      symptoms: []
    });
    setIsRecording(true);
  };

  // 结束当前周期
  const endCurrentCycle = () => {
    if (!currentCycle.startDate) return;

    // 如果没有设置结束日期，使用今天
    const endDate = currentCycle.endDate || getTodayDate();

    // 简单验证：结束日期不能早于开始日期
    if (currentCycle.endDate && new Date(endDate) < new Date(currentCycle.startDate)) {
      // 使用更友好的错误提示，而不是alert
      return;
    }

    const completedCycle: CycleData = {
      id: currentCycle.id || Date.now().toString(),
      startDate: currentCycle.startDate,
      endDate: endDate,
      flow: currentCycle.flow || 'medium',
      symptoms: currentCycle.symptoms || [],
      notes: currentCycle.notes
    };

    const newCycles = [completedCycle, ...cycles];
    saveCycles(newCycles);
    calculatePrediction(newCycles);
    setCurrentCycle({});
    setIsRecording(false);
  };

  // 更新当前周期信息
  const updateCurrentCycle = (field: keyof CycleData, value: any) => {
    setCurrentCycle(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 处理症状选择
  const handleSymptomToggle = (symptom: string) => {
    const currentSymptoms = currentCycle.symptoms || [];
    const updatedSymptoms = currentSymptoms.includes(symptom)
      ? currentSymptoms.filter(s => s !== symptom)
      : [...currentSymptoms, symptom];
    
    updateCurrentCycle('symptoms', updatedSymptoms);
  };

  // 格式化日期显示
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 计算距离天数
  const getDaysUntil = (dateString: string) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      {/* 标签导航 */}
      <div className="glass-effect rounded-xl p-2 mb-4 sm:mb-6">
        <div className="flex space-x-1">
          {[
            { key: 'record', label: t('interactiveTools.cycleTracker.tabs.record'), icon: '📝' },
            { key: 'history', label: t('interactiveTools.cycleTracker.tabs.history'), icon: '📊' },
            { key: 'prediction', label: t('interactiveTools.cycleTracker.tabs.prediction'), icon: '🔮' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 touch-target ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 记录周期标签 */}
      {activeTab === 'record' && (
        <div className="glass-effect rounded-xl p-6 md:p-8">
          
          {!isRecording ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">📅</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {t('interactiveTools.cycleTracker.record.startTitle')}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                {t('interactiveTools.cycleTracker.record.startDescription')}
              </p>
              <button
                onClick={startNewCycle}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target min-h-[56px] sm:min-h-[48px] text-base sm:text-sm"
              >
                {t('interactiveTools.cycleTracker.record.startButton')}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {t('interactiveTools.cycleTracker.record.recordingTitle')}
                </h3>
              </div>

              {/* 开始日期选择 */}
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">{t('interactiveTools.cycleTracker.record.startDate')}</h4>
                <div className="relative">
                  <input
                    type="date"
                    value={currentCycle.startDate || ''}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      updateCurrentCycle('startDate', selectedDate);
                    }}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <div className="mt-2 text-xs sm:text-sm text-gray-500">
                    {t('interactiveTools.cycleTracker.record.startDateHint')}
                  </div>
                </div>
              </div>

              {/* 经血流量选择 */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">{t('interactiveTools.cycleTracker.record.flowTitle')}</h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { value: 'light', label: t('interactiveTools.cycleTracker.record.flowOptions.light'), color: 'bg-green-100 text-green-800' },
                    { value: 'medium', label: t('interactiveTools.cycleTracker.record.flowOptions.medium'), color: 'bg-yellow-100 text-yellow-800' },
                    { value: 'heavy', label: t('interactiveTools.cycleTracker.record.flowOptions.heavy'), color: 'bg-red-100 text-red-800' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateCurrentCycle('flow', option.value)}
                      className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-200 touch-target min-h-[56px] sm:min-h-[48px] text-sm sm:text-base ${
                        currentCycle.flow === option.value
                          ? 'ring-2 ring-purple-500 ' + option.color
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 症状选择 */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">{t('interactiveTools.cycleTracker.record.symptomsTitle')}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { key: 'abdominalPain', label: t('interactiveTools.cycleTracker.record.symptoms.abdominalPain') },
                    { key: 'backPain', label: t('interactiveTools.cycleTracker.record.symptoms.backPain') },
                    { key: 'headache', label: t('interactiveTools.cycleTracker.record.symptoms.headache') },
                    { key: 'breastTenderness', label: t('interactiveTools.cycleTracker.record.symptoms.breastTenderness') },
                    { key: 'moodSwings', label: t('interactiveTools.cycleTracker.record.symptoms.moodSwings') },
                    { key: 'fatigue', label: t('interactiveTools.cycleTracker.record.symptoms.fatigue') },
                    { key: 'nausea', label: t('interactiveTools.cycleTracker.record.symptoms.nausea') },
                    { key: 'bloating', label: t('interactiveTools.cycleTracker.record.symptoms.bloating') },
                    { key: 'insomnia', label: t('interactiveTools.cycleTracker.record.symptoms.insomnia') },
                    { key: 'appetiteChanges', label: t('interactiveTools.cycleTracker.record.symptoms.appetiteChanges') },
                    { key: 'skinChanges', label: t('interactiveTools.cycleTracker.record.symptoms.skinChanges') },
                    { key: 'other', label: t('interactiveTools.cycleTracker.record.symptoms.other') }
                  ].map((symptom) => (
                    <button
                      key={symptom.key}
                      onClick={() => handleSymptomToggle(symptom.label)}
                      className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-200 touch-target text-xs sm:text-sm min-h-[56px] sm:min-h-[48px] ${
                        currentCycle.symptoms?.includes(symptom.label)
                          ? 'bg-purple-100 text-purple-800 ring-2 ring-purple-500'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {symptom.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 结束日期选择（可选） */}
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                  {t('interactiveTools.cycleTracker.record.endDate')}
                </h4>
                <div className="relative">
                  <input
                    type="date"
                    value={currentCycle.endDate || ''}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      updateCurrentCycle('endDate', selectedDate);
                    }}
                    min={currentCycle.startDate}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <div className="mt-2 text-xs sm:text-sm text-gray-500">
                    {t('interactiveTools.cycleTracker.record.endDateHint')}
                  </div>
                </div>
              </div>

              {/* 备注 */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">{t('interactiveTools.cycleTracker.record.notesTitle')}</h4>
                <textarea
                  value={currentCycle.notes || ''}
                  onChange={(e) => updateCurrentCycle('notes', e.target.value)}
                  placeholder={t('interactiveTools.cycleTracker.record.notesPlaceholder')}
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm sm:text-base"
                  rows={3}
                />
              </div>

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={endCurrentCycle}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target min-h-[56px] sm:min-h-[48px] text-base sm:text-sm"
                >
                  {t('interactiveTools.cycleTracker.record.endCycleButton')}
                </button>
                <button
                  onClick={() => {
                    setIsRecording(false);
                    setCurrentCycle({});
                  }}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-4 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 touch-target min-h-[56px] sm:min-h-[48px] text-base sm:text-sm"
                >
                  {t('interactiveTools.cycleTracker.record.cancelButton')}
                </button>
              </div>

            </div>
          )}

        </div>
      )}

      {/* 历史记录标签 */}
      {activeTab === 'history' && (
        <div className="glass-effect rounded-xl p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">{t('interactiveTools.cycleTracker.history.title')}</h3>

          {cycles.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-2xl">📊</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{t('interactiveTools.cycleTracker.history.noRecords')}</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cycles.map((cycle) => (
                <div key={cycle.id} className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {formatDate(cycle.startDate)} - {cycle.endDate ? formatDate(cycle.endDate) : t('interactiveTools.cycleTracker.history.ongoing')}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {t('interactiveTools.cycleTracker.history.flow')}: <span className={`px-2 py-1 rounded text-xs ${
                          cycle.flow === 'light' ? 'bg-green-100 text-green-800' :
                          cycle.flow === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {cycle.flow === 'light' ? t('interactiveTools.cycleTracker.record.flowOptions.light') :
                           cycle.flow === 'medium' ? t('interactiveTools.cycleTracker.record.flowOptions.medium') :
                           t('interactiveTools.cycleTracker.record.flowOptions.heavy')}
                        </span>
                      </p>
                    </div>
                    {cycle.endDate && (
                      <span className="text-xs sm:text-sm text-gray-500">
                        {Math.round((new Date(cycle.endDate).getTime() - new Date(cycle.startDate).getTime()) / (1000 * 60 * 60 * 24))} {t('interactiveTools.cycleTracker.history.days')}
                      </span>
                    )}
                  </div>

                  {cycle.symptoms.length > 0 && (
                    <div className="mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{t('interactiveTools.cycleTracker.history.symptoms')}:</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {cycle.symptoms.map((symptom) => (
                          <span key={symptom} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cycle.notes && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      <strong>{t('interactiveTools.cycleTracker.history.notes')}:</strong> {cycle.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 智能预测标签 */}
      {activeTab === 'prediction' && (
        <div className="glass-effect rounded-xl p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">{t('interactiveTools.cycleTracker.prediction.title')}</h3>

          {!prediction ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-2xl">🔮</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{t('interactiveTools.cycleTracker.prediction.noData')}</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">

              {/* 预测卡片 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4 sm:p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🩸</span>
                    <h4 className="text-base sm:text-lg font-semibold">{t('interactiveTools.cycleTracker.prediction.nextPeriod')}</h4>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-2">{formatDate(prediction.nextPeriod)}</p>
                  <p className="text-pink-100 text-sm sm:text-base">
                    {getDaysUntil(prediction.nextPeriod) > 0
                      ? t('interactiveTools.cycleTracker.prediction.daysLeft', { days: getDaysUntil(prediction.nextPeriod) })
                      : getDaysUntil(prediction.nextPeriod) === 0
                      ? t('interactiveTools.cycleTracker.prediction.today')
                      : t('interactiveTools.cycleTracker.prediction.daysPast', { days: Math.abs(getDaysUntil(prediction.nextPeriod)) })
                    }
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4 sm:p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">🥚</span>
                    <h4 className="text-base sm:text-lg font-semibold">{t('interactiveTools.cycleTracker.prediction.ovulation')}</h4>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-2">{formatDate(prediction.ovulation)}</p>
                  <p className="text-purple-100 text-sm sm:text-base">
                    {getDaysUntil(prediction.ovulation) > 0
                      ? t('interactiveTools.cycleTracker.prediction.daysLeft', { days: getDaysUntil(prediction.ovulation) })
                      : getDaysUntil(prediction.ovulation) === 0
                      ? t('interactiveTools.cycleTracker.prediction.today')
                      : t('interactiveTools.cycleTracker.prediction.daysPast', { days: Math.abs(getDaysUntil(prediction.ovulation)) })
                    }
                  </p>
                </div>

              </div>

              {/* 周期统计 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">{t('interactiveTools.cycleTracker.prediction.statistics')}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-purple-600">{prediction.cycleLength}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{t('interactiveTools.cycleTracker.prediction.avgCycleLength')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-pink-600">{prediction.confidence}%</p>
                    <p className="text-xs sm:text-sm text-gray-600">{t('interactiveTools.cycleTracker.prediction.accuracy')}</p>
                  </div>
                  <div className="text-center col-span-2 sm:col-span-1">
                    <p className="text-xl sm:text-2xl font-bold text-indigo-600">{cycles.length}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{t('interactiveTools.cycleTracker.prediction.recordedCycles')}</p>
                  </div>
                </div>
              </div>

              {/* 健康建议 */}
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200">
                <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-3 sm:mb-4">{t('interactiveTools.cycleTracker.prediction.recommendations')}</h4>
                <div className="space-y-2 sm:space-y-3 text-blue-700 text-sm sm:text-base">
                  {prediction.cycleLength < 21 && (
                    <p>• {t('interactiveTools.cycleTracker.prediction.shortCycle')}</p>
                  )}
                  {prediction.cycleLength > 35 && (
                    <p>• {t('interactiveTools.cycleTracker.prediction.longCycle')}</p>
                  )}
                  {prediction.confidence < 70 && (
                    <p>• {t('interactiveTools.cycleTracker.prediction.irregularCycle')}</p>
                  )}
                  <p>• {t('interactiveTools.cycleTracker.prediction.ovulationTip')}</p>
                  <p>• {t('interactiveTools.cycleTracker.prediction.lifestyleTip')}</p>
                </div>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
}
