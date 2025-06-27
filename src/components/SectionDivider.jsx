import React from 'react';
import PropTypes from 'prop-types';

/**
 * Separador de secciones reutilizable con línea, degradado, ícono y texto opcional.
 * @param {string} text Texto opcional a mostrar en el centro.
 * @param {React.ReactNode} icon Ícono opcional a mostrar en el centro.
 * @param {string} color Color principal del separador (por defecto #ff6600).
 * @param {string} className Clases adicionales.
 */
export default function SectionDivider({ text = '', icon = null, color = '#ff6600', className = '' }) {
  return (
    <div className={`section-divider ${className}`.trim()}>
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      {(icon || text) && (
        <span className="divider-content" style={{ color }}>
          {icon && <span className="divider-icon">{icon}</span>}
          {text && <span className="divider-text">{text}</span>}
        </span>
      )}
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </div>
  );
}

SectionDivider.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
}; 