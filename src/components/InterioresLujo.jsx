import React from 'react';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';
import { FaHome, FaStar, FaCrown, FaUsers, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/InterioresLujo.css';

const InterioresLujo = ({ 
  titulo, 
  subtitulo, 
  descripcion, 
  caracteristicas, 
  imagen, 
  className = '' 
}) => {
  const iconMap = {
    home: FaHome,
    star: FaStar,
    crown: FaCrown,
    users: FaUsers,
    shield: FaShieldAlt,
    map: FaMapMarkerAlt
  };

  return (
    <section className={`interiores-lujo-section ${className}`}>
      <div className="container">
        <div className="interiores-lujo-content">
          <div className="interiores-lujo-image">
            <OptimizedImage
              {...imagen}
              className="interiores-lujo-optimized-image"
            />
          </div>
          
          <div className="interiores-lujo-text">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            
            <h3>{subtitulo}</h3>
            <ul className="interiores-features">
              {caracteristicas.map((caracteristica, index) => {
                const IconComponent = iconMap[caracteristica.icono] || FaHome;
                return (
                  <li key={index}>
                    <IconComponent /> {caracteristica.texto}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

InterioresLujo.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  caracteristicas: PropTypes.arrayOf(
    PropTypes.shape({
      icono: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired
    })
  ).isRequired,
  imagen: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default InterioresLujo; 