'use client';

import { useEffect } from 'react';

interface NSAIDContentProps {
  content: string;
}

// Function to process NSAID content and convert Markdown to HTML while preserving HTML blocks
function processNSAIDContent(content: string): string {
  // First, protect HTML blocks by replacing them with placeholders
  const htmlBlocks: string[] = [];
  let processedContent = content.replace(/<div[\s\S]*?<\/div>/g, (match) => {
    const index = htmlBlocks.length;
    htmlBlocks.push(match);
    return `__HTML_BLOCK_${index}__`;
  });

  // Process Markdown syntax
  processedContent = processedContent
    // Convert headers
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    
    // Convert bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // Convert blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    
    // Convert code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    
    // Convert links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    
    // Convert tables - improved table processing with center alignment for first column
    .replace(/\|(.+)\|\n\|[-\s|]+\|\n((?:\|.+\|\n?)*)/g, (match, header, rows) => {
      const headerCells = header.split('|').map((cell: string) => cell.trim()).filter(Boolean);
      const headerRow = '<tr>' + headerCells.map((cell: string, index: number) => {
        const alignment = index === 0 ? 'text-center' : 'text-left';
        return `<th class="border border-gray-300 px-4 py-3 bg-primary-100 font-semibold ${alignment} text-primary-800">${cell}</th>`;
      }).join('') + '</tr>';

      const bodyRows = rows.trim().split('\n').map((row: string) => {
        const cells = row.replace(/^\||\|$/g, '').split('|').map((cell: string) => cell.trim());
        return '<tr class="even:bg-gray-50 hover:bg-primary-25">' + cells.map((cell: string, index: number) => {
          const alignment = index === 0 ? 'text-center' : 'text-left';
          return `<td class="border border-gray-300 px-4 py-3 text-neutral-700 ${alignment}">${cell}</td>`;
        }).join('') + '</tr>';
      }).join('');

      return `<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm"><thead class="bg-primary-50">${headerRow}</thead><tbody>${bodyRows}</tbody></table></div>`;
    })
    
    // Convert line breaks and paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    
    // Wrap in paragraphs (but not HTML blocks)
    .replace(/^(?!<[h1-6]|<div|<blockquote|<pre|<ul|<ol|<li|__HTML_BLOCK)(.+)/gim, '<p>$1</p>');

  // Restore HTML blocks
  htmlBlocks.forEach((block, index) => {
    processedContent = processedContent.replace(`__HTML_BLOCK_${index}__`, block);
  });

  // Ensure video element has proper attributes for visibility
  processedContent = processedContent.replace(
    /<video([^>]*id="nsaidAnimationPlayer"[^>]*)>/g,
    '<video$1 style="display: block !important; width: 100% !important; height: auto !important; min-height: 250px !important; background: #000 !important; opacity: 1 !important; visibility: visible !important; position: relative !important; z-index: 100 !important;" controls playsinline>'
  );

  // Debug: Log the processed content to see if video element is present
  if (processedContent.includes('nsaidAnimationPlayer')) {
    console.log('🎬 Video element found in processed content');
  } else {
    console.warn('❌ Video element NOT found in processed content');
  }

  return processedContent;
}

export default function NSAIDContent({ content }: NSAIDContentProps) {
  useEffect(() => {
    console.log('🔧 NSAIDContent component initialized');

    const timer = setTimeout(() => {
      // NSAID Calculator functionality
      const calculateButton = document.getElementById('calculate-dose-button');
      if (calculateButton) {
        const btn = calculateButton as HTMLButtonElement;
        btn.style.setProperty('background', '#1e40af', 'important');
        btn.style.setProperty('color', '#ffffff', 'important');
        btn.style.setProperty('border', '2px solid #1d4ed8', 'important');
        btn.style.setProperty('cursor', 'pointer', 'important');
        console.log('✅ Calculate button styled');
      }

      // Video player initialization
      const videoPlayer = document.getElementById('nsaidAnimationPlayer') as HTMLVideoElement;
      const prevButton = document.getElementById('nsaidPrevButton');
      const nextButton = document.getElementById('nsaidNextButton');
      const sceneIndicator = document.getElementById('nsaidSceneIndicator');
      const sceneTitle = document.getElementById('nsaidSceneTitle');
      const narrationText = document.getElementById('nsaidNarrationText');

      console.log('🎬 Animation controls found:', {
        videoPlayer: !!videoPlayer,
        prevButton: !!prevButton,
        nextButton: !!nextButton,
        sceneIndicator: !!sceneIndicator,
        sceneTitle: !!sceneTitle,
        narrationText: !!narrationText
      });

      if (videoPlayer) {
        // Scene data
        const scenes = [
          {
            id: 1,
            title: t('common.场景1开场表现痛'),
            videoUrl: "https://v3.fal.media/files/monkey/OMrBMAEeA1my97zJzH64q_output.mp4",
            text: t('common.很多女性每个月都会经')
          },
          {
            id: 2,
            title: t('common.场景2解释痛经原因'),
            text: t('common.月经期间子宫内膜会释t('common.前列腺素t('common.的物质前列腺素会引起'),
            videoUrl: 'https://v3.fal.media/files/panda/DJlINSBKErKOTTRW4scwG_output.mp4'
          },
          {
            id: 3,
            title: t('common.场景3引出NSAID'),
            text: t('common.而非甾体抗炎药简称N'),
            videoUrl: 'https://v3.fal.media/files/monkey/sRVoOWjzmaoyzF7cure1m_output.mp4'
          }
        ];

        let currentSceneIndex = 0;

        // Scene loading function
        function loadScene(index: number) {
          if (index < 0 || index >= scenes.length) return;
          
          currentSceneIndex = index;
          const scene = scenes[currentSceneIndex];

          // Update UI elements
          if (sceneTitle) sceneTitle.textContent = scene.title;
          if (narrationText) narrationText.textContent = scene.text;
          if (sceneIndicator) sceneIndicator.textContent = `场景 ${scene.id} / ${scenes.length}`;

          // Load video
          if (videoPlayer && scene.videoUrl) {
            videoPlayer.src = scene.videoUrl;
            videoPlayer.load();
            videoPlayer.play().catch(error => {
              console.warn("Autoplay prevented:", error);
            });
          }

          // Update navigation buttons
          if (prevButton) (prevButton as HTMLButtonElement).disabled = currentSceneIndex === 0;
          if (nextButton) (nextButton as HTMLButtonElement).disabled = currentSceneIndex === scenes.length - 1;
        }

        // Navigation functions
        function playNextScene() {
          if (currentSceneIndex < scenes.length - 1) {
            loadScene(currentSceneIndex + 1);
          }
        }

        function playPrevScene() {
          if (currentSceneIndex > 0) {
            loadScene(currentSceneIndex - 1);
          }
        }

        // Event listeners
        if (prevButton) {
          prevButton.addEventListener('click', playPrevScene);
        }

        if (nextButton) {
          nextButton.addEventListener('click', playNextScene);
        }

        if (videoPlayer) {
          videoPlayer.addEventListener('ended', playNextScene);
          videoPlayer.addEventListener('error', (e) => {
            console.error('Video error:', e);
            if (narrationText) narrationText.textContent = t('common.抱歉视频加载失败请检');
          });
        }

        // Initialize with first scene
        loadScene(0);

        // Enhanced video player setup
        videoPlayer.controls = true;
        videoPlayer.style.width = '100%';
        videoPlayer.style.height = 'auto';
        videoPlayer.style.minHeight = '250px';
        videoPlayer.style.background = '#000';
        videoPlayer.style.display = 'block';

        console.log('✅ Video player initialized successfully');
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        className="nsaid-article-content"
        dangerouslySetInnerHTML={{
          __html: processNSAIDContent(content)
        }}
      />
    </>
  );
}
