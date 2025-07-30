import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CaracteristicasCards.css';

const CaracteristicasCards = ({ 
  titulo, 
  subtitulo, 
  caracteristicas, 
  className = '' 
}) => {
  return (
    <section className={`caracteristicas-cards-section ${className}`}>
      <div className="container">
        <div className="caracteristicas-cards-header">
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
        <div className="caracteristicas-grid">
          {caracteristicas.map((caracteristica, idx) => (
            <div key={idx} className="caracteristica-card">
              <div className="caracteristica-icon">
                {caracteristica.icon}
              </div>
              <h3>{caracteristica.titulo}</h3>
              <p>{caracteristica.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CaracteristicasCards.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  caracteristicas: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

export default CaracteristicasCards; 