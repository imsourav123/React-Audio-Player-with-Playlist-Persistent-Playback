// AudioPlayer.js
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ currentFile, onEnded }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentFile) {
      audioRef.current.src = URL.createObjectURL(currentFile);
      audioRef.current.play();
    }
  }, [currentFile]);

  return (
    <audio ref={audioRef} controls onEnded={onEnded} />
  );
};

export default AudioPlayer;
