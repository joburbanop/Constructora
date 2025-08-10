import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
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

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    toggleVisibility();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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