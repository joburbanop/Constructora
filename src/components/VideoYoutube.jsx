import React from 'react';
import '../styles/VideoYoutube.css';

export default function VideoYoutube({ videoId, titulo }) {
  if (!videoId) return null;

  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-youtube">
      {titulo && <h3 className="video-titulo">{titulo}</h3>}
      <div className="video-container">
        <iframe
          src={url}
          title={titulo || 'Video YouTube'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}