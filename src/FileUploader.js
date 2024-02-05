// FileUploader.js
import React from 'react';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  return (
    <input type="file" accept=".mp3" onChange={handleFileChange} />
  );
};

export default FileUploader;
