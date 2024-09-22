import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);  // Using `any` to bypass type issues

  useEffect(() => {
    // Initialize video.js player
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: true,   // Set the player to autoplay
        preload: 'auto',
        muted: true,      // Start muted to comply with autoplay policy
      });

      // Autoplay and unmute the video after it starts
      playerRef.current.ready(() => {
        playerRef.current.muted(true);  // Ensure the video starts muted
        playerRef.current.play();       // Start playing the video
        
        // After the video has started playing, unmute and set volume
        playerRef.current.on('play', () => {
          setTimeout(() => {
            playerRef.current.muted(false); // Unmute after a short delay
            playerRef.current.volume(1);    // Set volume to 100%
          }, 400);  // Small delay to allow video to stabilize
        });
      });
    }

    return () => {
      // Dispose of the player when the component is unmounted
      if (playerRef.current) {
        // playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        controls
        preload="auto"
        autoPlay  // Explicitly set autoPlay in HTML as well
        muted     // Start muted to comply with autoplay policy
        width="600"
        height="300"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
