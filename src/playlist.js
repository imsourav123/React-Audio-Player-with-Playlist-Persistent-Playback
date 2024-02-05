// Playlist.js
import React from 'react';

const Playlist = ({ files, onPlay }) => {
  return (
    <ul>
      {files.map((file, index) => (
        <li key={index} onClick={() => onPlay(file)}>
          {file.name}
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
