import React, { useState } from 'react'
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/videoplayback.mp4'




function HomeVideo() {
    const [muted, setMuted] = useState(true)
    
    function handleMute() {
        setMuted(!muted);
    }

  return (
    <div className='home-container'>
    <video src={F1HomeVideo} autoPlay loop muted={muted}></video>
    
    <button className='mute-button' onClick={handleMute}>{muted ? <i class="fa-solid fa-volume-high">  UNMUTE</i> : <i class="fa-solid fa-volume-xmark"> MUTE</i>}
    </button>
    </div>
  )
}

export default HomeVideo

