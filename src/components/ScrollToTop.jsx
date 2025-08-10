import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useRAFThrottledCallback } from '../hooks/useThrottledCallback';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario hace scroll más de 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hacer scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Usar throttling con requestAnimationFrame
  const throttledToggleVisibility = useRAFThrottledCallback(toggleVisibility);

  useEffect(() => {
    window.addEventListener('scroll', throttledToggleVisibility, { passive: true });
    toggleVisibility(); // Verificar estado inicial
    return () => {
      window.removeEventListener('scroll', throttledToggleVisibility);
    };
  }, [throttledToggleVisibility]);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Volver al inicio de la página"
          title="Volver al inicio"
        >
          <FaArrowUp className="scroll-to-top-icon" style={{ color: 'white' }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 