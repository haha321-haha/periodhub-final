'use client';

import { useState, useEffect, useRef } from 'react';

interface BreathingPattern {
  id: string;
  name: string;
  description: string;
  inhale: number;
  hold: number;
  exhale: number;
  holdAfterExhale?: number;
  cycles: number;
  benefits: string[];
  icon: string;
  color: string;
}

const BREATHING_PATTERNS: BreathingPattern[] = [
  {
    id: '4-7-8',
    name: '4-7-8 呼吸法',
    description: '放松神经系统，缓解焦虑和压力',
    inhale: 4,
    hold: 7,
    exhale: 8,
    cycles: 4,
    benefits: ['缓解焦虑', '改善睡眠', '降低压力', '平静心情'],
    icon: '🌙',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'box-breathing',
    name: '方形呼吸法',
    description: '平衡自律神经，提高专注力',
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdAfterExhale: 4,
    cycles: 6,
    benefits: ['提高专注力', '平衡情绪', '减少压力', '增强控制力'],
    icon: '📦',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'coherent-breathing',
    name: '协调呼吸法',
    description: '平衡心率变异性，促进身心和谐',
    inhale: 5,
    hold: 0,
    exhale: 5,
    cycles: 10,
    benefits: ['平衡心率', '减轻疼痛', '改善情绪', '增强免疫'],
    icon: '💫',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'energizing-breath',
    name: '活力呼吸法',
    description: '快速提升精力和注意力',
    inhale: 3,
    hold: 1,
    exhale: 2,
    cycles: 8,
    benefits: ['提升精力', '增强警觉', '改善循环', '激活身体'],
    icon: '⚡',
    color: 'from-orange-500 to-red-500'
  }
];

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'holdAfterExhale' | 'rest';

export default function BreathingExerciseTool() {
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern>(BREATHING_PATTERNS[0]);
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<BreathingPhase>('rest');
  const [currentCycle, setCurrentCycle] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const phaseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 计算总时间
  useEffect(() => {
    const cycleTime = selectedPattern.inhale + selectedPattern.hold + selectedPattern.exhale + (selectedPattern.holdAfterExhale || 0);
    setTotalTime(cycleTime * selectedPattern.cycles);
  }, [selectedPattern]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
    };
  }, []);

  const startExercise = () => {
    setIsActive(true);
    setCurrentCycle(0);
    setSessionComplete(false);
    setCurrentPhase('inhale');
    setTimeRemaining(selectedPattern.inhale);
    
    runBreathingCycle();
  };

  const stopExercise = () => {
    setIsActive(false);
    setCurrentPhase('rest');
    setCurrentCycle(0);
    setTimeRemaining(0);
    setSessionComplete(false);
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
  };

  const runBreathingCycle = () => {
    let cycle = 0;
    
    const nextPhase = () => {
      if (cycle >= selectedPattern.cycles) {
        setSessionComplete(true);
        setIsActive(false);
        setCurrentPhase('rest');
        return;
      }

      const phases: { phase: BreathingPhase; duration: number }[] = [
        { phase: 'inhale', duration: selectedPattern.inhale },
        { phase: 'hold', duration: selectedPattern.hold },
        { phase: 'exhale', duration: selectedPattern.exhale }
      ];

      if (selectedPattern.holdAfterExhale) {
        phases.push({ phase: 'holdAfterExhale', duration: selectedPattern.holdAfterExhale });
      }

      let phaseIndex = 0;

      const runPhase = () => {
        if (phaseIndex >= phases.length) {
          cycle++;
          setCurrentCycle(cycle);
          phaseIndex = 0;
          if (cycle < selectedPattern.cycles) {
            setTimeout(runPhase, 500); // 短暂休息
          } else {
            nextPhase();
          }
          return;
        }

        const currentPhaseData = phases[phaseIndex];
        setCurrentPhase(currentPhaseData.phase);
        setTimeRemaining(currentPhaseData.duration);

        // 倒计时
        let timeLeft = currentPhaseData.duration;
        intervalRef.current = setInterval(() => {
          timeLeft--;
          setTimeRemaining(timeLeft);
          
          if (timeLeft <= 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            phaseIndex++;
            setTimeout(runPhase, 100);
          }
        }, 1000);
      };

      runPhase();
    };

    nextPhase();
  };

  const getPhaseText = (phase: BreathingPhase) => {
    switch (phase) {
      case 'inhale': return '吸气';
      case 'hold': return '屏息';
      case 'exhale': return '呼气';
      case 'holdAfterExhale': return '暂停';
      case 'rest': return '准备开始';
      default: return '';
    }
  };

  const getPhaseColor = (phase: BreathingPhase) => {
    switch (phase) {
      case 'inhale': return 'from-blue-400 to-blue-600';
      case 'hold': return 'from-yellow-400 to-orange-500';
      case 'exhale': return 'from-green-400 to-green-600';
      case 'holdAfterExhale': return 'from-purple-400 to-purple-600';
      case 'rest': return 'from-gray-400 to-gray-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getBreathingCircleScale = () => {
    if (!isActive) return 'scale-100';
    
    switch (currentPhase) {
      case 'inhale': return 'scale-150';
      case 'exhale': return 'scale-75';
      case 'hold':
      case 'holdAfterExhale':
      default: return 'scale-125';
    }
  };

  const getBreathingCircleAnimation = () => {
    if (!isActive) return '';
    
    const duration = timeRemaining;
    switch (currentPhase) {
      case 'inhale': return `animate-pulse`;
      case 'exhale': return `animate-pulse`;
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 my-8">
      
      {/* 工具标题 */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">🫁 呼吸练习工具</h3>
        <p className="text-gray-600">
          通过科学的呼吸练习，缓解经期不适，改善身心状态
        </p>
      </div>

      {/* 呼吸模式选择 */}
      {!isActive && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">选择呼吸模式</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BREATHING_PATTERNS.map((pattern) => (
              <div
                key={pattern.id}
                onClick={() => setSelectedPattern(pattern)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedPattern.id === pattern.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{pattern.icon}</span>
                  <div>
                    <h5 className="font-bold text-gray-800">{pattern.name}</h5>
                    <p className="text-sm text-gray-600">{pattern.description}</p>
                  </div>
                </div>
                
                {/* 呼吸节奏 */}
                <div className="mb-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">节奏:</span>
                    <span className="bg-blue-100 px-2 py-1 rounded mr-1">{pattern.inhale}s 吸</span>
                    {pattern.hold > 0 && (
                      <span className="bg-yellow-100 px-2 py-1 rounded mr-1">{pattern.hold}s 憋</span>
                    )}
                    <span className="bg-green-100 px-2 py-1 rounded mr-1">{pattern.exhale}s 呼</span>
                    {pattern.holdAfterExhale && (
                      <span className="bg-purple-100 px-2 py-1 rounded">{pattern.holdAfterExhale}s 停</span>
                    )}
                  </div>
                </div>

                {/* 益处 */}
                <div className="flex flex-wrap gap-1">
                  {pattern.benefits.slice(0, 2).map((benefit) => (
                    <span key={benefit} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 呼吸指导界面 */}
      <div className="text-center mb-8">
        
        {/* 呼吸圆圈 */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center h-64">
            <div
              className={`w-32 h-32 rounded-full bg-gradient-to-r ${getPhaseColor(currentPhase)} 
                         transition-all duration-1000 ease-in-out ${getBreathingCircleScale()} ${getBreathingCircleAnimation()}
                         flex items-center justify-center shadow-lg`}
            >
              <div className="text-white text-center">
                <div className="text-lg font-bold">{getPhaseText(currentPhase)}</div>
                {isActive && (
                  <div className="text-2xl font-bold">{timeRemaining}</div>
                )}
              </div>
            </div>
          </div>
          
          {/* 呼吸指导文字 */}
          <div className="text-center">
            {isActive ? (
              <div>
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {getPhaseText(currentPhase)}
                </p>
                <p className="text-gray-600">
                  第 {currentCycle + 1} / {selectedPattern.cycles} 轮
                </p>
              </div>
            ) : sessionComplete ? (
              <div>
                <p className="text-xl font-semibold text-green-600 mb-2">
                  🎉 练习完成！
                </p>
                <p className="text-gray-600">
                  很棒！您已经完成了 {selectedPattern.cycles} 轮呼吸练习
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedPattern.name}
                </p>
                <p className="text-gray-600">
                  准备进行 {selectedPattern.cycles} 轮呼吸练习
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 进度条 */}
        {isActive && (
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentCycle * (selectedPattern.inhale + selectedPattern.hold + selectedPattern.exhale + (selectedPattern.holdAfterExhale || 0)) + 
                           (selectedPattern.inhale + selectedPattern.hold + selectedPattern.exhale + (selectedPattern.holdAfterExhale || 0)) - timeRemaining) / totalTime) * 100}%` 
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              预计剩余时间: {Math.ceil((totalTime - (currentCycle * (selectedPattern.inhale + selectedPattern.hold + selectedPattern.exhale + (selectedPattern.holdAfterExhale || 0)) + 
                                    (selectedPattern.inhale + selectedPattern.hold + selectedPattern.exhale + (selectedPattern.holdAfterExhale || 0)) - timeRemaining)) / 60)} 分钟
            </p>
          </div>
        )}

        {/* 控制按钮 */}
        <div className="flex justify-center space-x-4">
          {!isActive ? (
            <button
              onClick={startExercise}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              {sessionComplete ? '重新开始' : '开始练习'}
            </button>
          ) : (
            <button
              onClick={stopExercise}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              停止练习
            </button>
          )}
        </div>
      </div>

      {/* 当前模式信息 */}
      {!isActive && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">{selectedPattern.icon}</span>
            {selectedPattern.name} - 益处
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {selectedPattern.benefits.map((benefit) => (
              <div key={benefit} className="text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 使用提示 */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h5 className="font-bold text-blue-800 mb-2 flex items-center">
          <span className="mr-2">💡</span>
          使用建议
        </h5>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• 选择安静舒适的环境进行练习</li>
          <li>• 采用舒适的坐姿或躺姿</li>
          <li>• 专注于呼吸，让思绪自然流淌</li>
          <li>• 经期不适时可以增加练习频率</li>
          <li>• 如有不适请立即停止并咨询医生</li>
        </ul>
      </div>

    </div>
  );
}
