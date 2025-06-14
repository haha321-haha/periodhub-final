'use client';

import React, { useEffect, ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { ToastContainer } from './ToastSystem';
import { ModalManager } from './ModalSystem';
import { useAppStore } from '../../lib/stores/appStore';
import { performanceMonitor } from '../../lib/performance/monitort('common.interface')critical">
      <div className="app-container">
        {children}
        <ToastContainer />
        <ModalManager />
      </div>
    </ErrorBoundary>
  );
};

// 应用主题
function applyTheme(theme: 'light' | 'dark' | 'system') {
  const root = document.documentElement;
  
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }

  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  
  // 更新meta标签
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'dark' ? '#1f2937' : '#ffffff');
  }
}

// 应用字体大小
function applyFontSize(fontSize: 'small' | 'medium' | 'large') {
  const root = document.documentElement;
  
  root.classList.remove('text-sm', 'text-base', 'text-lg');
  
  switch (fontSize) {
    case 'small':
      root.classList.add('text-sm');
      break;
    case 'large':
      root.classList.add('text-lg');
      break;
    default:
      root.classList.add('text-base');
  }
}

// 应用可访问性设置
function applyAccessibilitySettings(accessibility: {
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}) {
  const root = document.documentElement;
  
  // 高对比度
  if (accessibility.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrastt('common.减少动画if')reduce-motion');
  } else {
    root.classList.remove('reduce-motiont('common.屏幕阅读器优化')screen-reader-optimized');
  } else {
    root.classList.remove('screen-reader-optimizedt('common.页面级别的Provi')${title} - Period Hub Health`;
    }

    // 更新meta描述
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // 更新meta关键词
    if (keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords.join(', '));
      }
    }
  }, [title, description, keywords]);

  return (
    <ErrorBoundary level="paget('common.children')component" 
      fallback={fallback}
      onError={(error, errorInfo) => {
        console.error(`Component error in ${name}:`, error, errorInfo);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

// 性能监控Hook
export const usePagePerformance = (pageName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    // 记录页面访问
    performanceMonitor.recordCustomInteraction('navigationt('common.pageName')navigation', `${pageName}_duration`, duration);
    };
  }, [pageName]);
};

// 用户行为追踪Hook
export const useUserTracking = () => {
  const recordInteraction = (type: string, element: string, data?: any) => {
    performanceMonitor.recordCustomInteraction(type as any, element);
    
    // 可以在这里添加更多的用户行为分析
    console.log('User interaction:', { type, element, data, timestamp: Date.now() });
  };

  return { recordInteraction };
};
