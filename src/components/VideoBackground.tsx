'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log('Video can play');
      setVideoLoaded(true);
      video.classList.add('loaded');
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setVideoLoaded(true);
      video.classList.add('loaded');
    };

    const handleError = (e: Event) => {
      console.log('Video failed to load:', e);
      setVideoError(true);
    };

    const handleLoadStart = () => {
      console.log('Video load start');
    };

    const handleProgress = () => {
      console.log('Video loading progress');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="video-fallback"></div>
      {videoError && (
        <div className="video-debug error">
          Video Error - Using Fallback
        </div>
      )}
      {!videoLoaded && !videoError && (
        <div className="video-debug loading">
          Loading Video...
        </div>
      )}
      <video 
        ref={videoRef}
        className="background-video"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        crossOrigin="anonymous"
      >
        <source src="/videos/small-test.mp4" type="video/mp4" />
        <source src="/videos/test-video.mp4" type="video/mp4" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
