import React, { useState } from 'react';
import '../styles/VideoYoutube.css';

export default function VideoYoutube({ videoId, titulo }) {
  if (!videoId) return null;
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Solo cargar el iframe cuando el usuario haga click
  const handlePlayClick = () => {
    setIsLoading(true);
    setShowPlayer(true);
  };

  return (
    <div className="video-youtube">
      {titulo && <h3 className="video-titulo">{titulo}</h3>}
      <div className="video-container">
        {showPlayer ? (
          <div className="video-iframe-container">
            {isLoading && (
              <div className="video-loading">
                <div className="loading-spinner"></div>
                <p>Cargando video...</p>
              </div>
            )}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={titulo || 'Video YouTube'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ border: 'none' }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        ) : (
          <div className="video-placeholder" onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
            <img 
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} 
              alt={titulo || 'Video YouTube'} 
              loading="lazy" 
              decoding="async" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div className="video-play-button" aria-label="Reproducir video">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="rgba(0,0,0,0.6)" />
                <polygon points="40,30 75,50 40,70" fill="#fff" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}