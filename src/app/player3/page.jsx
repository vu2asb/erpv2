"use client";

import VideoPlayer from "@/components/ui/VideoPlayer"

const Player = () => {
    console.log("Page calling VideoPlayer component");
  return (
    <div>
        <VideoPlayer src={"video/eternals.m3u8"}></VideoPlayer>
        {/* https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8 */}
        {/* video/eternals.m3u8 */}
        
    </div>
  )
}

export default Player
