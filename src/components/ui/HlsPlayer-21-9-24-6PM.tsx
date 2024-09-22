"use client";

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HlsPlayerProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
}

const HlsPlayer: React.FC<HlsPlayerProps> = ({ src, autoPlay = false, controls = true, width = '100%', height = 'auto' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      if (videoRef.current) {
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      }

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      style={{ width, height }}
      autoPlay={autoPlay}
      controls={controls}
    />
  );
};

export default HlsPlayer;
