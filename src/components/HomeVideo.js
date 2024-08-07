import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/This is Formula One (1).mp4'
import F1RainVideo from '../videos/This is Formula One _ Rain EditionTrimmed (1).mp4'
import F1VisorVideo from '../videos/VisorVideoTrimmed.mp4'
import Button from '@mui/material/Button';
import { useEffect } from 'react';





function HomeVideo() {
    const [muted, setMuted] = useState(true)
    const videos = [F1HomeVideo, F1RainVideo, F1VisorVideo];

    const getRandomIndex = () => Math.floor(Math.random() * videos.length);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(getRandomIndex())

    

    useEffect(() => {
      document.documentElement.classList.add('home-page');
      window.scrollTo(0, 0);
      return () => {
          document.documentElement.classList.remove('home-page');
      };
  }, []);
    
    function handleMute() {
        setMuted(!muted);
    }

    function handleVideoEnded() {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length)
    }

  return (
    <div className='home-container'>
    <video src={videos[currentVideoIndex]} autoPlay loop={false} muted={muted} onEnded={handleVideoEnded}></video>

    <h1 className="title-header">FORMULA 1</h1>

    <Button className='mute-button' onClick={handleMute} variant='text'> {muted ? <i class="fa-solid fa-volume-high">  UNMUTE</i> : <i class="fa-solid fa-volume-xmark"> MUTE</i>} </Button>
    
    </div>
  )
}

export default HomeVideo

