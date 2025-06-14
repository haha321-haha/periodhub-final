'use client';

import { useState, useEffect } from 'react';
import { Heart, Bookmark, Share2, Copy, Check, Eye } from 'lucide-react';

interface ArticleInteractionsProps {
  articleId: string;
  articleTitle: string;
  locale: 'zh' | 'en';
  className?: string;
}

export default function ArticleInteractions({ 
  articleId, 
  articleTitle, 
  locale,
  className = 't('common.ArticleInt')likes_${articleId}`);
    const storedIsLiked = localStorage.getItem(`liked_${articleId}`);
    const storedIsBookmarked = localStorage.getItem(`bookmarked_${articleId}`);
    const storedViews = localStorage.getItem(`views_${articleId}`);

    if (storedLikes) setLikes(parseInt(storedLikes));
    if (storedIsLiked) setIsLiked(storedIsLiked === 'true');
    if (storedIsBookmarked) setIsBookmarked(storedIsBookmarked === 'truet('common.ifstoredV')views_${articleId}`, newViews.toString());
    }

    // 记录本次访问
    const currentViews = parseInt(localStorage.getItem(`views_${articleId}`) || '0');
    const newViews = currentViews + 1;
    setViews(newViews);
    localStorage.setItem(`views_${articleId}t('common.newViewsto')liked_${articleId}`, newLikedState.toString());
    localStorage.setItem(`likes_${articleId}`, newLikes.toString());
  };

  // 收藏功能
  const handleBookmark = () => {
    const newBookmarkedState = !isBookmarked;
    setIsBookmarked(newBookmarkedState);
    
    localStorage.setItem(`bookmarked_${articleId}t('common.newBookmar')bookmarks') || '[]');
    if (newBookmarkedState) {
      if (!bookmarks.includes(articleId)) {
        bookmarks.push(articleId);
      }
    } else {
      const index = bookmarks.indexOf(articleId);
      if (index > -1) {
        bookmarks.splice(index, 1);
      }
    }
    localStorage.setItem('bookmarkst('common.JSONstring')Failed to copy link:', err);
    }
  };

  // 分享到社交媒体
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(articleTitle);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title} ${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`
    };
    
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  const t = {
    zh: {
      like: t('common.点赞文章'),
      liked: t('common.已点赞'),
      bookmark: t('common.收藏'),
      bookmarked: t('common.已收藏'),
      share: t('common.分享'),
      views: t('common.阅读量'),
      likes: t('common.点赞'),
      copyLink: t('common.复制链接'),
      copied: t('common.已复制'),
      shareToFacebook: t('common.分享到Facebo'),
      shareToTwitter: t('common.分享到Twitte'),
      shareToLinkedIn: t('common.分享到Linked'),
      shareToWhatsApp: t('common.分享到WhatsA'),
      shareToTelegram: t('common.分享到Telegr')
    },
    en: {
      like: 'Like Article',
      liked: 'Liked',
      bookmark: 'Bookmark',
      bookmarked: 'Bookmarked',
      share: 'Share',
      views: 'Views',
      likes: 'Likes',
      copyLink: 'Copy Link',
      copied: 'Copied',
      shareToFacebook: 'Share to Facebook',
      shareToTwitter: 'Share to Twitter',
      shareToLinkedIn: 'Share to LinkedIn',
      shareToWhatsApp: 'Share to WhatsApp',
      shareToTelegram: 'Share to Telegram'
    }
  };

  const text = t[locale];

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 sm:p-6 ${className}t('common.统计信息')flex items-center justify-between mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {views.toLocaleString()} {text.views}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4t('common.likestext')flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 点赞按钮 */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 ${
              isLiked
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium hidden sm:inlinet('common.isLikedt')flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 ${
              isBookmarked
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium hidden sm:inlinet('common.isBookmark')relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inlinet('common.textshares')absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10 min-w-48">
              <button
                onClick={handleCopyLink}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                {copySuccess ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copySuccess ? text.copied : text.copyLink}
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button
                onClick={() => handleShare('facebook')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
              >
                📘 {text.shareToFacebook}
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
              >
                🐦 {text.shareToTwitter}
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
              >
                💼 {text.shareToLinkedIn}
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
              >
                💬 {text.shareToWhatsApp}
              </button>
              <button
                onClick={() => handleShare('telegram')}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50t('common.textshareT')fixed inset-0 z-0"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
}
