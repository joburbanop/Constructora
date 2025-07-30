import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ExpertosSection.css';

const ExpertosSection = ({ 
  titulo, 
  subtitulo, 
  expertos, 
  className = '' 
}) => {
  return (
    <section className={`expertos-section ${className}`}>
      <div className="container">
        <div className="expertos-header">
          <h2>
            {titulo} <span className="expertos-highlight">{subtitulo}</span>
          </h2>
        </div>
        
        <div className="expertos-grid">
          {expertos.map((experto, idx) => (
            <div key={idx} className="experto-card">
              <div className="experto-avatar">
                <img
                  src={experto.imagen}
                  alt={experto.nombre}
                  className="experto-img"
                />
              </div>
              <div className="experto-info">
                <h3 className="experto-nombre">{experto.nombre}</h3>
                <p className="experto-cargo">
                  {experto.especialidadClave}
                </p>
                <p className="experto-telefono">
                  {experto.telefono}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ExpertosSection.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  expertos: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      especialidadClave: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

export default ExpertosSection; 