import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const { t, idioma } = useIdioma();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+573204210000'; 
    const message = idioma === 'es' 
      ? 'Hola! Me interesa conocer más sobre sus proyectos inmobiliarios.'
      : 'Hello! I am interested in learning more about your real estate projects.';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-float">
      {/* Botón principal de WhatsApp */}
      <button 
        className="whatsapp-button"
        onClick={handleWhatsAppClick}
        aria-label="Contactar por WhatsApp"
        title={t.whatsapp?.contactar || 'Contactar por WhatsApp'}
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-tooltip">
          {t.whatsapp?.contactar || '¡Chatea con nosotros!'}
        </span>
      </button>

      {/* Botón de chat flotante */}
      <button 
        className={`chat-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Abrir chat"
        title={t.whatsapp?.abrir_chat || 'Abrir chat'}
      >
        {isOpen ? <FaTimes className="chat-icon" /> : <FaComments className="chat-icon" />}
      </button>

      {/* Panel de chat */}
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-avatar">
              <FaWhatsapp className="avatar-icon" />
            </div>
            <div className="chat-info">
              <h4>{t.whatsapp?.titulo || 'Constructora'}</h4>
              <p className="chat-status">{t.whatsapp?.en_linea || 'En línea'}</p>
            </div>
            <button 
              className="close-chat"
              onClick={toggleChat}
              aria-label="Cerrar chat"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chat-messages">
            <div className="message received">
              <p>{t.whatsapp?.mensaje_bienvenida || '¡Hola! ¿En qué podemos ayudarte?'}</p>
              <span className="message-time">Ahora</span>
            </div>
          </div>
          
          <div className="chat-actions">
            <button 
              className="action-button whatsapp-action"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp />
              <span>{t.whatsapp?.abrir_whatsapp || 'Abrir WhatsApp'}</span>
            </button>
            
            <button 
              className="action-button call-action"
              onClick={() => window.open('tel:+573001234567')}
            >
              <span>📞</span>
              <span>{t.whatsapp?.llamar || 'Llamar'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat; 