// import React, { useState } from 'react'
import React, { useRef, useState } from 'react';

function Music() {
    // src/AudioControl.js
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div>
      <audio 
        ref={audioRef} 
        onTimeUpdate={updateCurrentTime} 
        controls 
        src="your-audio-file-url.mp3" 
      />
      <div>
        <label>Volume: </label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
        />
      </div>
      <div>
        <label>Progress: </label>
        <input 
          type="range" 
          min="0" 
          max={audioRef.current?.duration || 0} 
          step="0.1" 
          value={currentTime} 
          onChange={handleTimeChange} 
        />
      </div>
    </div>
  );
};

export default Music