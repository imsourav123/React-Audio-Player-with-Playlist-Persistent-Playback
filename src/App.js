// App.js
import React, { useState, useEffect } from 'react';
import FileUploader from './FileUploader';
import Playlist from './playlist.js';
import AudioPlayer from './AudioPlayer';
import './style.css'

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
  };

  const handlePlay = (file) => {
    const index = files.indexOf(file);
    setCurrentFileIndex(index);
  };

  const handleEnded = () => {
    if (currentFileIndex < files.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  useEffect(() => {
    // Save and load currentFileIndex in local storage for persistence
    localStorage.setItem('currentFileIndex', JSON.stringify(currentFileIndex));
  }, [currentFileIndex]);

  useEffect(() => {
    // Load currentFileIndex from local storage on page reload
    const savedIndex = JSON.parse(localStorage.getItem('currentFileIndex'));
    if (savedIndex !== null && savedIndex < files.length) {
      setCurrentFileIndex(savedIndex);
    }
  }, [files]);

  return (
    <div>
      <FileUploader onFileUpload={handleFileUpload} />
      <Playlist files={files} onPlay={handlePlay} />
      <AudioPlayer
        currentFile={files[currentFileIndex]}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default App;
