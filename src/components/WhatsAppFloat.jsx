import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaComments } from 'react-icons/fa';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const { t, idioma } = useIdioma();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverOrange, setIsOverOrange] = useState(false);
  const buttonRef = useRef(null);

  // Mostrar el botón después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Detectar si el botón está sobre un fondo anaranjado
  useEffect(() => {
    const checkBackgroundColor = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Obtener el elemento en esa posición
      const elementAtPoint = document.elementFromPoint(centerX, centerY);
      if (!elementAtPoint) return;

      // Obtener el color de fondo del elemento
      const computedStyle = window.getComputedStyle(elementAtPoint);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Detectar específicamente el mismo color anaranjado del botón (#ff6600)
      const isSameOrange = backgroundColor.includes('255, 102, 0') || 
                          backgroundColor.includes('rgb(255, 102, 0)') ||
                          backgroundColor.includes('rgba(255, 102, 0') ||
                          backgroundColor.includes('#ff6600');

      setIsOverOrange(isSameOrange);
    };

    // Verificar cada 300ms para mayor responsividad
    const interval = setInterval(checkBackgroundColor, 300);
    
    // También verificar al hacer scroll
    window.addEventListener('scroll', checkBackgroundColor);
    window.addEventListener('resize', checkBackgroundColor);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', checkBackgroundColor);
      window.removeEventListener('resize', checkBackgroundColor);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-float">
      {/* Botón de chat flotante */}
      <button 
        ref={buttonRef}
        className={`chat-button ${isOpen ? 'active' : ''} ${isOverOrange ? 'orange-contrast' : ''}`}
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
              <FaComments className="avatar-icon" />
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
              onClick={() => {
                const phoneNumber = '+573234708860'; 
                const message = idioma === 'es' 
                  ? 'Hola! Me interesa conocer más sobre sus proyectos inmobiliarios.'
                  : 'Hello! I am interested in learning more about your real estate projects.';
                
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <span>📱</span>
              <span>{t.whatsapp?.abrir_whatsapp || 'Abrir WhatsApp'}</span>
            </button>
            
            <button 
              className="action-button call-action"
              onClick={() => window.open('tel:+573234708860')}
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