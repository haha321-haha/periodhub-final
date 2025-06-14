'use client';

import { useState } from 'react';

interface ClientIframeProps {
  src: string;
  allow?: string;
  allowFullScreen?: boolean;
  title?: string;
  className?: string;
}

export default function ClientIframe({
  src,
  allow,
  allowFullScreen,
  title,
  className,
  ...props
}: ClientIframeProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: any) => {
    if (!hasError) {
      setHasError(true);
      
      // Default error handling
      console.error('Iframe failed to load:', src, e);

      // Replace iframe with error message
      const target = e.target as HTMLIFrameElement;
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = '<div class="flex items-center justify-center h-full bg-neutral-200 text-neutral-600">Video unavailable</div>';
      }
    }
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full bg-neutral-200 text-neutral-600">
        Video unavailable
      </div>
    );
  }

  return (
    <iframe
      src={src}
      allow={allow}
      allowFullScreen={allowFullScreen}
      title={title}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
