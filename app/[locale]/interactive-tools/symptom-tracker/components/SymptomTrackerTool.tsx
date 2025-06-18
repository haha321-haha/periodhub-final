'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface SymptomEntry {
  id: string;
  date: string;
  symptoms: {
    [key: string]: {
      intensity: number; // 1-5
      duration: string; // 'short' | 'medium' | 'long'
      notes?: string;
    }
  };
  mood: number; // 1-5
  energy: number; // 1-5
  sleep: number; // 1-5
  generalNotes?: string;
}

interface SymptomStats {
  mostCommon: string[];
  averageIntensity: number;
  moodTrend: number;
  energyTrend: number;
}

const SYMPTOM_CATEGORIES = {
  physical: {
    name: '身体症状',
    icon: '🩺',
    symptoms: [
      { key: 'cramps', name: '腹痛/痉挛', icon: '😣' },
      { key: 'backPain', name: '腰痛', icon: '🔙' },
      { key: 'headache', name: '头痛', icon: '🤕' },
      { key: 'breastTenderness', name: '乳房胀痛', icon: '💔' },
      { key: 'bloating', name: '腹胀', icon: '🎈' },
      { key: 'nausea', name: '恶心', icon: '🤢' },
      { key: 'fatigue', name: '疲劳', icon: '😴' },
      { key: 'dizziness', name: '头晕', icon: '💫' }
    ]
  },
  emotional: {
    name: '情绪症状',
    icon: '💭',
    symptoms: [
      { key: 'irritability', name: '易怒', icon: '😠' },
      { key: 'anxiety', name: '焦虑', icon: '😰' },
      { key: 'sadness', name: '悲伤', icon: '😢' },
      { key: 'moodSwings', name: '情绪波动', icon: '🎭' },
      { key: 'stress', name: '压力', icon: '😵' },
      { key: 'depression', name: '抑郁', icon: '😞' }
    ]
  },
  behavioral: {
    name: '行为症状',
    icon: '🏃‍♀️',
    symptoms: [
      { key: 'foodCravings', name: '食欲变化', icon: '🍫' },
      { key: 'sleepIssues', name: '睡眠问题', icon: '🛏️' },
      { key: 'concentration', name: '注意力不集中', icon: '🧠' },
      { key: 'socialWithdrawal', name: '社交回避', icon: '🚪' }
    ]
  }
};

export default function SymptomTrackerTool({ locale }: { locale: string }) {
  const t = useTranslations();

  // 状态管理
  const [entries, setEntries] = useState<SymptomEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Partial<SymptomEntry>>({});
  const [activeTab, setActiveTab] = useState<'record' | 'history' | 'analysis'>('record');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [dateError, setDateError] = useState<string>('');
  const [stats, setStats] = useState<SymptomStats | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // 从本地存储加载数据
  useEffect(() => {
    const savedEntries = localStorage.getItem('symptom-entries');
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      setEntries(parsedEntries);
      calculateStats(parsedEntries);
    }

    // 检查今天是否已有记录
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = entries.find(entry => entry.date === today);
    if (todayEntry) {
      setCurrentEntry(todayEntry);
      setIsEditing(true);
    } else {
      initializeNewEntry(today);
    }
  }, []);

  // 初始化新记录
  const initializeNewEntry = (date: string) => {
    setCurrentEntry({
      id: Date.now().toString(),
      date: date,
      symptoms: {},
      mood: 3,
      energy: 3,
      sleep: 3,
      generalNotes: ''
    });
    setIsEditing(false);
  };

  // 保存数据到本地存储
  const saveEntries = (newEntries: SymptomEntry[]) => {
    localStorage.setItem('symptom-entries', JSON.stringify(newEntries));
    setEntries(newEntries);
    calculateStats(newEntries);
  };

  // 计算统计数据
  const calculateStats = (entryData: SymptomEntry[]) => {
    if (entryData.length === 0) return;

    // 统计最常见症状
    const symptomCounts: { [key: string]: number } = {};
    let totalIntensity = 0;
    let intensityCount = 0;
    let totalMood = 0;
    let totalEnergy = 0;

    entryData.forEach(entry => {
      Object.keys(entry.symptoms).forEach(symptom => {
        symptomCounts[symptom] = (symptomCounts[symptom] || 0) + 1;
        totalIntensity += entry.symptoms[symptom].intensity;
        intensityCount++;
      });
      totalMood += entry.mood;
      totalEnergy += entry.energy;
    });

    const mostCommon = Object.entries(symptomCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([symptom]) => symptom);

    // 计算趋势 (最近7天 vs 之前7天)
    const recent = entryData.slice(0, 7);
    const previous = entryData.slice(7, 14);

    const recentMoodAvg = recent.reduce((sum, entry) => sum + entry.mood, 0) / recent.length;
    const previousMoodAvg = previous.length > 0 ? previous.reduce((sum, entry) => sum + entry.mood, 0) / previous.length : recentMoodAvg;

    const recentEnergyAvg = recent.reduce((sum, entry) => sum + entry.energy, 0) / recent.length;
    const previousEnergyAvg = previous.length > 0 ? previous.reduce((sum, entry) => sum + entry.energy, 0) / previous.length : recentEnergyAvg;

    setStats({
      mostCommon,
      averageIntensity: intensityCount > 0 ? totalIntensity / intensityCount : 0,
      moodTrend: recentMoodAvg - previousMoodAvg,
      energyTrend: recentEnergyAvg - previousEnergyAvg
    });
  };

  // 更新症状
  const updateSymptom = (symptomKey: string, field: string, value: any) => {
    setCurrentEntry((prev: Partial<SymptomEntry>) => {
      const currentSymptom = prev.symptoms?.[symptomKey] || { intensity: 1, duration: 'short' };
      const updatedEntry: Partial<SymptomEntry> = {
        ...prev,
        symptoms: {
          ...prev.symptoms,
          [symptomKey]: {
            ...currentSymptom,
            [field]: value
          }
        }
      };
      return updatedEntry;
    });
  };

  // 移除症状
  const removeSymptom = (symptomKey: string) => {
    setCurrentEntry((prev: Partial<SymptomEntry>) => {
      const newSymptoms = { ...prev.symptoms };
      delete newSymptoms[symptomKey];
      const updatedEntry: Partial<SymptomEntry> = {
        ...prev,
        symptoms: newSymptoms
      };
      return updatedEntry;
    });
  };

  // 保存当前记录
  const saveCurrentEntry = () => {
    if (!currentEntry.date) return;

    const entryToSave: SymptomEntry = {
      id: currentEntry.id || Date.now().toString(),
      date: currentEntry.date,
      symptoms: currentEntry.symptoms || {},
      mood: currentEntry.mood || 3,
      energy: currentEntry.energy || 3,
      sleep: currentEntry.sleep || 3,
      generalNotes: currentEntry.generalNotes || ''
    };

    const existingIndex = entries.findIndex(entry => entry.date === entryToSave.date);
    let newEntries;

    if (existingIndex >= 0) {
      newEntries = [...entries];
      newEntries[existingIndex] = entryToSave;
    } else {
      newEntries = [entryToSave, ...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    saveEntries(newEntries);
    setIsEditing(false);

    // 显示成功提示
    alert(t('painTracker.messages.saveSuccess'));
  };

  // 获取症状名称
  const getSymptomName = (key: string) => {
    for (const category of Object.values(SYMPTOM_CATEGORIES)) {
      const symptom = category.symptoms.find(s => s.key === key);
      if (symptom) return symptom.name;
    }
    return key;
  };

  // 获取今天日期
  const getTodayDate = () => new Date().toISOString().split('T')[0];

  // 处理日期变化（复制自参考项目）
  const handleDateChange = (selectedDate: string) => {
    const today = getTodayDate();

    if (selectedDate > today) {
      setDateError(t('dateValidation.futureDate'));
      return;
    }

    setDateError('');
    setSelectedDate(selectedDate);
    const existingEntry = entries.find(entry => entry.date === selectedDate);
    if (existingEntry) {
      setCurrentEntry(existingEntry);
      setIsEditing(true);
    } else {
      initializeNewEntry(selectedDate);
    }
  };

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* 标签导航 */}
      <div className="glass-effect rounded-xl p-2 mb-6">
        <div className="flex space-x-1">
          {[
            { key: 'record', label: '记录症状', icon: '📝' },
            { key: 'history', label: '历史记录', icon: '📊' },
            { key: 'analysis', label: '数据分析', icon: '📈' }
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

      {/* 记录症状标签 */}
      {activeTab === 'record' && (
        <div className="glass-effect rounded-xl p-6 md:p-8">

          {/* 日期选择 */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              选择日期
            </label>
            <input
              type="date"
              value={selectedDate}
              max={getTodayDate()}
              onChange={(e) => handleDateChange(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                dateError ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            />
            {dateError && (
              <div className="mt-2 flex items-start space-x-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-600">{dateError}</p>
              </div>
            )}
          </div>

          {/* 症状选择 */}
          <div className="space-y-8">
            {Object.entries(SYMPTOM_CATEGORIES).map(([categoryKey, category]) => (
              <div key={categoryKey}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.symptoms.map((symptom) => {
                    const isSelected = currentEntry.symptoms?.[symptom.key];

                    return (
                      <div key={symptom.key} className={`border rounded-lg p-4 transition-all duration-200 ${
                        isSelected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'
                      }`}>

                        {/* 症状选择 */}
                        <div className="flex items-center justify-between mb-3">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={!!isSelected}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  updateSymptom(symptom.key, 'intensity', 3);
                                  updateSymptom(symptom.key, 'duration', 'medium');
                                } else {
                                  removeSymptom(symptom.key);
                                }
                              }}
                              className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                            />
                            <span className="text-lg">{symptom.icon}</span>
                            <span className="font-medium text-gray-800">{symptom.name}</span>
                          </label>
                        </div>

                        {/* 症状详情 */}
                        {isSelected && (
                          <div className="space-y-3 animate-fade-in">

                            {/* 强度选择 */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                强度 (1-5)
                              </label>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((level) => (
                                  <button
                                    key={level}
                                    onClick={() => updateSymptom(symptom.key, 'intensity', level)}
                                    className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                                      currentEntry.symptoms?.[symptom.key]?.intensity === level
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                  >
                                    {level}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* 持续时间 */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                持续时间
                              </label>
                              <div className="flex space-x-2">
                                {[
                                  { value: 'short', label: '短暂' },
                                  { value: 'medium', label: '中等' },
                                  { value: 'long', label: '持续' }
                                ].map((duration) => (
                                  <button
                                    key={duration.value}
                                    onClick={() => updateSymptom(symptom.key, 'duration', duration.value)}
                                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                                      currentEntry.symptoms?.[symptom.key]?.duration === duration.value
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                  >
                                    {duration.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* 备注 */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                备注 (可选)
                              </label>
                              <input
                                type="text"
                                value={currentEntry.symptoms?.[symptom.key]?.notes || ''}
                                onChange={(e) => updateSymptom(symptom.key, 'notes', e.target.value)}
                                placeholder="描述具体情况..."
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500 focus:border-transparent"
                              />
                            </div>

                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* 整体状态评估 */}
          <div className="mt-8 space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">整体状态评估</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 心情 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  心情 (1-5)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setCurrentEntry(prev => ({ ...prev, mood: level }))}
                      className={`w-10 h-10 rounded-full text-lg transition-all duration-200 ${
                        currentEntry.mood === level
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {level === 1 ? '😢' : level === 2 ? '😕' : level === 3 ? '😐' : level === 4 ? '😊' : '😄'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 精力 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  精力 (1-5)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setCurrentEntry(prev => ({ ...prev, energy: level }))}
                      className={`w-10 h-10 rounded-full text-lg transition-all duration-200 ${
                        currentEntry.energy === level
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {level === 1 ? '🔋' : level === 2 ? '🔋' : level === 3 ? '🔋' : level === 4 ? '⚡' : '⚡'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 睡眠 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  睡眠质量 (1-5)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setCurrentEntry(prev => ({ ...prev, sleep: level }))}
                      className={`w-10 h-10 rounded-full text-lg transition-all duration-200 ${
                        currentEntry.sleep === level
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {level === 1 ? '😴' : level === 2 ? '😪' : level === 3 ? '😐' : level === 4 ? '😌' : '😴'}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* 总体备注 */}
          <div className="mt-6">
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              今日总结 (可选)
            </label>
            <textarea
              value={currentEntry.generalNotes || ''}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, generalNotes: e.target.value }))}
              placeholder="记录今天的整体感受、特殊情况或其他想法..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          {/* 保存按钮 */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={saveCurrentEntry}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg touch-target"
            >
              {isEditing ? '更新记录' : '保存记录'}
            </button>
          </div>

        </div>
      )}

      {/* 历史记录标签 */}
      {activeTab === 'history' && (
        <div className="glass-effect rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">症状历史记录</h3>

          {entries.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-2xl">📊</span>
              </div>
              <p className="text-gray-600">暂无记录，开始记录您的第一个症状吧！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <div key={entry.id} className="bg-white rounded-lg p-6 border border-gray-200">

                  {/* 日期和整体状态 */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {formatDate(entry.date)}
                      </h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>心情: {['😢', '😕', '😐', '😊', '😄'][entry.mood - 1]}</span>
                        <span>精力: {entry.energy}/5</span>
                        <span>睡眠: {entry.sleep}/5</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {Object.keys(entry.symptoms).length} 个症状
                    </span>
                  </div>

                  {/* 症状列表 */}
                  {Object.keys(entry.symptoms).length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 mb-2">记录的症状:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(entry.symptoms).map(([symptomKey, symptomData]) => (
                          <div key={symptomKey} className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium text-gray-800">
                                {getSymptomName(symptomKey)}
                              </span>
                              <span className="text-sm text-gray-600">
                                强度: {symptomData.intensity}/5
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              持续时间: {
                                symptomData.duration === 'short' ? '短暂' :
                                symptomData.duration === 'medium' ? '中等' : '持续'
                              }
                            </div>
                            {symptomData.notes && (
                              <div className="text-sm text-gray-600 mt-1">
                                备注: {symptomData.notes}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 总结备注 */}
                  {entry.generalNotes && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h5 className="font-medium text-blue-800 mb-1">今日总结:</h5>
                      <p className="text-blue-700 text-sm">{entry.generalNotes}</p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 数据分析标签 */}
      {activeTab === 'analysis' && (
        <div className="glass-effect rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">数据分析</h3>

          {!stats || entries.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-500 text-2xl">📈</span>
              </div>
              <p className="text-gray-600">需要更多数据才能进行分析，请继续记录症状</p>
            </div>
          ) : (
            <div className="space-y-8">

              {/* 统计概览 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">{entries.length}</div>
                  <div className="text-purple-100">记录天数</div>
                </div>

                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">{stats.averageIntensity.toFixed(1)}</div>
                  <div className="text-pink-100">平均症状强度</div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">
                    {stats.moodTrend > 0 ? '↗️' : stats.moodTrend < 0 ? '↘️' : '→'}
                  </div>
                  <div className="text-green-100">心情趋势</div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">
                    {stats.energyTrend > 0 ? '↗️' : stats.energyTrend < 0 ? '↘️' : '→'}
                  </div>
                  <div className="text-blue-100">精力趋势</div>
                </div>

              </div>

              {/* 最常见症状 */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">最常见症状 (Top 5)</h4>
                <div className="space-y-3">
                  {stats.mostCommon.map((symptomKey, index) => {
                    const count = entries.reduce((acc, entry) =>
                      acc + (entry.symptoms[symptomKey] ? 1 : 0), 0
                    );
                    const percentage = (count / entries.length) * 100;

                    return (
                      <div key={symptomKey} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-800">
                              {getSymptomName(symptomKey)}
                            </span>
                            <span className="text-sm text-gray-600">
                              {count} 次 ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 健康建议 */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">💡 个性化健康建议</h4>
                <div className="space-y-3 text-blue-700">

                  {stats.averageIntensity > 3.5 && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p>您的症状强度较高，建议咨询医生了解缓解方法</p>
                    </div>
                  )}

                  {stats.moodTrend < -0.5 && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p>最近心情有下降趋势，建议关注情绪健康，适当放松</p>
                    </div>
                  )}

                  {stats.energyTrend < -0.5 && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p>精力水平有所下降，建议保证充足睡眠和适量运动</p>
                    </div>
                  )}

                  {stats.mostCommon.includes('cramps') && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p>腹痛是您的常见症状，可以尝试热敷、轻度运动等缓解方法</p>
                    </div>
                  )}

                  {stats.mostCommon.includes('moodSwings') && (
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p>情绪波动较为常见，建议学习情绪管理技巧，保持规律作息</p>
                    </div>
                  )}

                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <p>继续坚持记录症状，有助于发现更多健康模式</p>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
}