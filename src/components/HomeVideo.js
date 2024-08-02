import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/This is Formula One.mp4'
import F1RainVideo from '../videos/This is Formula One _ Rain Edition.mp4'
import Button from '@mui/material/Button';
import { useEffect } from 'react';





function HomeVideo() {
    const [muted, setMuted] = useState(true)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const videos = [F1HomeVideo, F1RainVideo];

    useEffect(() => {
      document.documentElement.classList.add('home-page');
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

