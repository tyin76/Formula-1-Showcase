import React, { useState, useRef, useEffect } from 'react';
import '../styles/HomeVideo.css'
import F1HomeVideo from '../videos/This is Formula One (1).mp4'
import Button from '@mui/material/Button';

const HomeVideo = () => {
  const [muted, setMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add('home-page');
    window.scrollTo(0, 0);
    
    return () => {
      document.documentElement.classList.remove('home-page');
    };
  }, []);

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`home-container ${isLoading || hasError ? 'loading' : ''}`}>
      <div className="video-background" />
      <video
        ref={videoRef}
        src={F1HomeVideo}
        autoPlay
        loop
        muted={muted}
        preload="auto"
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        className={`home-video ${isLoading ? 'hidden' : ''}`}
      />
      
      <h1 className="title-header">FORMULA 1</h1>

      <Button 
        className="mute-button" 
        onClick={handleMute}
      >
        {muted ? (
          <i className="fa-solid fa-volume-high"> UNMUTE</i>
        ) : (
          <i className="fa-solid fa-volume-xmark"> MUTE</i>
        )}
      </Button>
    </div>
  );
};

export default HomeVideo;