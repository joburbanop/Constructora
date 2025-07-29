import React, { useState, useEffect } from 'react';
import '../styles/AnnouncementModal.css';
import logo from '../assets/LOGO.png';

const AnnouncementModal = ({ 
  isOpen, 
  onClose, 
  title = "¡Bienvenido a Construct!",
  message = "Descubre nuestros proyectos inmobiliarios de alta calidad",
  imageUrl = null,
  showLogo = true,
  autoClose = false,
  autoCloseTime = 5000,
  showCloseButton = true,
  showOverlay = true,
  animation = "fadeIn",
  size = "medium" // small, medium, large
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      
      if (autoClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseTime);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, autoClose, autoCloseTime]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (showOverlay && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`announcement-modal-overlay ${showOverlay ? 'with-overlay' : ''} ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`announcement-modal modal-${size} modal-${animation} ${isClosing ? 'closing' : ''}`}>
        {/* Header con logo */}
        {showLogo && (
          <div className="modal-header">
            <div className="logo-container">
              <img src={logo} alt="Construct Logo" className="modal-logo" />
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <div className="modal-content">
          {/* Imagen del anuncio */}
          {imageUrl && (
            <div className="announcement-image-container">
              <img 
                src={imageUrl} 
                alt="Anuncio" 
                className="announcement-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Título */}
          {title && (
            <h2 className="announcement-title">{title}</h2>
          )}

          {/* Mensaje */}
          {message && (
            <p className="announcement-message">{message}</p>
          )}
        </div>

        {/* Botón de cerrar */}
        {showCloseButton && (
          <button 
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Cerrar anuncio"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Indicador de progreso para auto-close */}
        {autoClose && (
          <div className="auto-close-progress">
            <div 
              className="progress-bar"
              style={{ animationDuration: `${autoCloseTime}ms` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementModal; 