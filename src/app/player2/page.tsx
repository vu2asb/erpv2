import React from 'react';
import HlsPlayer from '@/components/ui/HlsPlayer';

const Home: React.FC = () => {
  return (
    <div>
      <h1>HLS Video Player</h1>
      <HlsPlayer
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        autoPlay={true}
        controls={true}
        width="640px"
        height="360px"
      />
    </div>
  );
};

export default Home;
