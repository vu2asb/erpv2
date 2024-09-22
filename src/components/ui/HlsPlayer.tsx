"use client"

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HlsPlayerProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
}

const HlsPlayer: React.FC<HlsPlayerProps> = ({ src, autoPlay = true, controls = true, width = '100%', height = 'auto' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;

      if (videoRef.current) {
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);

        // Handle errors to ensure smooth playback
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.error("A network error occurred, retrying...");
                hls.startLoad(); // Retry loading
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.error("A media error occurred, attempting recovery...");
                hls.recoverMediaError(); // Try to recover from media errors
                break;
              default:
                console.error("Unrecoverable error, destroying the player.");
                hls.destroy(); // Destroy on unrecoverable errors
                break;
            }
          }
        });

        // Retry loading if it stalls
        // hls.on(Hls.Events.BUFFER_STALLED, () => {
        //   console.warn("Buffer stalled, trying to recover...");
        //   hls.startLoad();
        // });
      }

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support for Safari
      videoRef.current.src = src;
    }
  }, [src]);

  // Unmute the video after it starts playing with a delay of 2 seconds
  const handlePlay = () => {
    if (videoRef.current) {
        videoRef.current.muted = false; // Unmute after delay
      }
  };

  return (
    <video
      ref={videoRef}
      style={{ width, height }}
      autoPlay={autoPlay}
      controls={controls}
      muted={true}          // Initially muted for autoplay
      onPlay={handlePlay}   // Unmute after 2 seconds when the video starts playing
    />
  );
};

export default HlsPlayer;
