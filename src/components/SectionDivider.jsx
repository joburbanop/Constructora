import React from 'react';
import PropTypes from 'prop-types';
import { useIdioma } from '../context/IdiomaContext';

/**
 * Separador de secciones reutilizable con línea, degradado, ícono y texto opcional.
 * @param {string} text Texto opcional a mostrar en el centro.
 * @param {string} textKey Clave para obtener el texto traducido.
 * @param {React.ReactNode} icon Ícono opcional a mostrar en el centro.
 * @param {string} color Color principal del separador (por defecto #ff6600).
 * @param {string} className Clases adicionales.
 */
export default function SectionDivider({ text, textKey, icon = null, color = '#ff6600', className = '' }) {
  const { t } = useIdioma();
  const displayText = textKey ? t.dividers[textKey] : text;

  return (
    <div className={`section-divider ${className}`.trim()}>
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      {(icon || displayText) && (
        <span className="divider-content" style={{ color }}>
          {icon && <span className="divider-icon">{icon}</span>}
          {displayText && <span className="divider-text">{displayText}</span>}
        </span>
      )}
      <div className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </div>
  );
}

SectionDivider.propTypes = {
  text: PropTypes.string,
  textKey: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
}; 