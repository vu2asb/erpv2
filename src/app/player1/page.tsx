"use client";

import VideoPlayer1 from '@/components/ui/VideoPlayer1';
import path from 'path';

export default function Home() {
  // Assuming the video file is in the public folder
  const videoSrc = "/hitched.mp4";

  return (
    <div>
      <h1>Watch the Video</h1>
      <VideoPlayer1 src={videoSrc} />
    </div>
  );
}
