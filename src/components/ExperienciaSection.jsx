import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ExperienciaSection.css';

const ExperienciaSection = ({ 
  titulo, 
  descripcion, 
  estadisticas, 
  className = '' 
}) => {
  return (
    <section className={`experiencia-section ${className}`}>
      <div className="container">
        <div className="experiencia-content">
          <div className="experiencia-text">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <div className="experiencia-stats">
              {estadisticas.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat-number">{stat.numero}</span>
                  <span className="stat-label">{stat.etiqueta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExperienciaSection.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  estadisticas: PropTypes.arrayOf(
    PropTypes.shape({
      numero: PropTypes.string.isRequired,
      etiqueta: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

export default ExperienciaSection; 