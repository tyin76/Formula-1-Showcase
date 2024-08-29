import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/This is Formula One (1).mp4'
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import poster from '../images/poster mclaren.avif'
import ferrariPoster from '../images/poster ferrari.avif'


function HomeVideo() {
    const [muted, setMuted] = useState(true)

    

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

  return (
    <div className='home-container'>
    <video src={F1HomeVideo} autoPlay loop muted={muted} preload="auto" poster={ferrariPoster}></video>

    <h1 className="title-header">FORMULA 1</h1>

    <Button className='mute-button' onClick={handleMute} variant='text'> {muted ? <i class="fa-solid fa-volume-high">  UNMUTE</i> : <i class="fa-solid fa-volume-xmark"> MUTE</i>} </Button>
    
    </div>
  )
}

export default HomeVideo
