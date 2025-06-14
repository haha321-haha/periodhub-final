'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ReadingProgressProps {
  locale: 'zh' | 'en';
}

export default function ReadingProgress({ locale }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scrollt('common.updateProg')scroll', updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const t = {
    zh: {
      backToTop: t('common.返回顶部'),
      readingProgress: t('common.阅读进度')
    },
    en: {
      backToTop: 'Back to Top',
      readingProgress: 'Reading Progresst('common.consttext')fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbart('common.ariavaluen')fixed bottom-6 right-6 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-200 z-40 flex items-center justify-center"
          aria-label={text.backToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
