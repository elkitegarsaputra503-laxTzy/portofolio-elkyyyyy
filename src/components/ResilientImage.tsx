import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  isPortrait?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Editorial Visual',
  isPortrait = false,
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1D1A15] to-[#151310] border border-[rgba(197,160,101,0.25)] p-6 text-center ${
          isPortrait ? 'min-h-[380px] rounded-2xl' : ''
        }`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full border border-[rgba(197,160,101,0.3)] flex items-center justify-center text-[#C5A065] mb-3">
          {isPortrait ? (
            <span className="font-display-anton text-xl tracking-wider">ES</span>
          ) : (
            <ImageOff className="w-5 h-5" />
          )}
        </div>
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D5B7] font-medium">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
