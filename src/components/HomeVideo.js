import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/videoplayback.mp4'
import Button from '@mui/material/Button';





function HomeVideo() {
    const [muted, setMuted] = useState(true)
    
    function handleMute() {
        setMuted(!muted);
    }

  return (
    <div className='home-container'>
    <video src={F1HomeVideo} autoPlay loop muted={muted}></video>

    <h1 className="title-header">FORMULA 1</h1>

    <Button className='mute-button' onClick={handleMute} variant='text'> {muted ? <i class="fa-solid fa-volume-high">  UNMUTE</i> : <i class="fa-solid fa-volume-xmark"> MUTE</i>} </Button>
    
    </div>
  )
}

export default HomeVideo

