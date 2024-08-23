import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/This is Formula One (1).mp4'
import F1RainVideo from '../videos/This is Formula One _ Rain EditionTrimmed (1).mp4'
import F1VisorVideo from '../videos/VisorVideoTrimmed.mp4'
import Button from '@mui/material/Button';
import { useEffect } from 'react';




const importVideo = (index) => {
  switch(index) {
    case 0:
      return import('../videos/This is Formula One (1).mp4');
    case 1:
      return import('../videos/This is Formula One _ Rain EditionTrimmed (1).mp4');
    case 2:
      return import('../videos/VisorVideoTrimmed.mp4');
    default:
      return null;
  }
};

function HomeVideo() {
  const [muted, setMuted] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const loadInitialVideo = async () => {
      const randomIndex = Math.floor(Math.random() * 3);
      const module = await importVideo(randomIndex);
      setCurrentVideo(module.default);
    };
    loadInitialVideo();

    document.documentElement.classList.add('home-page');
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.classList.remove('home-page');
    };
  }, []);

  const handleMute = () => {
    setMuted(!muted);
  };

  console.log(currentVideo);

  const handleVideoEnded = async () => {
    // there are 3 videos 
    const nextIndex = (getCurrentVideoIndex() + 1) % 3;
    const module = await importVideo(nextIndex);
    setCurrentVideo(module.default);
  };

  const getCurrentVideoIndex = () => {
    if (currentVideo.includes('This is Formula One (1)')) return 0;
    if (currentVideo.includes('This is Formula One _ Rain EditionTrimmed (1)')) return 1;
    if (currentVideo.includes('VisorVideoTrimmed')) return 2;
    return 0;
  }

  return (
    <div className='home-container'>
      {currentVideo && (
        <video 
          src={currentVideo} 
          autoPlay 
          loop={false} 
          muted={muted} 
          onEnded={handleVideoEnded} 
          preload='auto'
        />
      )}
      <h1 className="title-header">FORMULA 1</h1>
      {currentVideo && <h3 className='video-count-header'>Video: {getCurrentVideoIndex() + 1} of 3</h3>}
      <Button className='mute-button' onClick={handleMute} variant='text'>
        {muted ? <i className="fa-solid fa-volume-high"> UNMUTE</i> : <i className="fa-solid fa-volume-xmark"> MUTE</i>}
      </Button>
    </div>
  );
}

export default HomeVideo;

