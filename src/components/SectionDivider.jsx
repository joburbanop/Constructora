import React from 'react';
import PropTypes from 'prop-types';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/SectionDivider.css';

/**
 * Separador de secciones profesional y elegante.
 * Diseñado para crear división visual sutil entre secciones sin ser intrusivo.
 * @param {string} text Texto opcional a mostrar en el centro.
 * @param {string} textKey Clave para obtener el texto traducido.
 * @param {React.ReactNode} icon Ícono opcional a mostrar en el centro.
 * @param {string} variant Variante del separador: 'subtle', 'accent', 'bold'.
 * @param {string} className Clases adicionales.
 */
export default function SectionDivider({ 
  text, 
  textKey, 
  icon = null, 
  variant = 'subtle', 
  className = '' 
}) {
  const { t } = useIdioma();
  const displayText = textKey ? t.dividers?.[textKey] : text;

  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          container: 'section-divider-accent',
          line: 'divider-line-accent',
          content: 'divider-content-accent'
        };
      case 'bold':
        return {
          container: 'section-divider-bold',
          line: 'divider-line-bold',
          content: 'divider-content-bold'
        };
      default:
        return {
          container: 'section-divider-subtle',
          line: 'divider-line-subtle',
          content: 'divider-content-subtle'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`section-divider ${styles.container} ${className}`.trim()}>
      <div className={`divider-line ${styles.line}`} />
      {(icon || displayText) && (
        <div className={`divider-content ${styles.content}`}>
          {icon && <span className="divider-icon">{icon}</span>}
          {displayText && <span className="divider-text">{displayText}</span>}
        </div>
      )}
      <div className={`divider-line ${styles.line}`} />
    </div>
  );
}

SectionDivider.propTypes = {
  text: PropTypes.string,
  textKey: PropTypes.string,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['subtle', 'accent', 'bold']),
  className: PropTypes.string,
}; 