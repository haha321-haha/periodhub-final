'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ClientImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
}

export default function ClientImage({
  src,
  alt,
  fill,
  sizes,
  priority,
  className,
  width,
  height,
  fallbackSrc,
  ...props
}: ClientImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: any) => {
    if (!hasError) {
      setHasError(true);
      
      // Use provided fallback or default fallback
      const fallback = fallbackSrc || 'https://placehold.co/600x400?text=Image+Loading+Error';
      setImageSrc(fallback);

      // Default error logging
      console.error('Image failed to load:', src, e);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  );
}
