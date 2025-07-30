import React from 'react';
import PropTypes from 'prop-types';
import { FaCrown, FaShieldAlt, FaStar, FaMapMarkerAlt, FaHome, FaUsers } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';
import '../styles/CaracteristicasLujo.css';

const CaracteristicasLujo = ({ 
  titulo, 
  subtitulo, 
  descripcion, 
  caracteristicas, 
  imagen, 
  className = '' 
}) => {
  const iconMap = {
    crown: FaCrown,
    shield: FaShieldAlt,
    star: FaStar,
    map: FaMapMarkerAlt,
    home: FaHome,
    users: FaUsers
  };

  return (
    <section className={`caracteristicas-lujo-section ${className}`}>
      <div className="container">
        <div className="caracteristicas-lujo-header">
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
        
        <div className="caracteristicas-lujo-content">
          <div className="caracteristicas-lujo-text">
            <h3>{descripcion.titulo}</h3>
            <p>{descripcion.texto}</p>
            
            <h3>{descripcion.subtitulo}</h3>
            <ul className="lujo-features-prominent">
              {caracteristicas.map((caracteristica, index) => {
                const IconComponent = iconMap[caracteristica.icono] || FaCrown;
                return (
                  <li key={index}>
                    <IconComponent /> {caracteristica.texto}
                  </li>
                );
              })}
            </ul>
          </div>
          
          {imagen && (
            <div className="caracteristicas-lujo-image">
              <OptimizedImage
                {...imagen}
                className="caracteristicas-lujo-optimized-image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

CaracteristicasLujo.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descripcion: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
  }).isRequired,
  caracteristicas: PropTypes.arrayOf(
    PropTypes.shape({
      icono: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired
    })
  ).isRequired,
  imagen: PropTypes.object,
  className: PropTypes.string
};

export default CaracteristicasLujo; 