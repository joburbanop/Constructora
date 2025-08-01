import React, { useState } from 'react';
import proyectos from '../utils/proyectos';
import Button from './Button';
import { MdLocationOn, MdLocationCity, MdHomeWork, MdStoreMallDirectory } from 'react-icons/md';
import '../styles/ProyectosEnMarcha.css';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from './SectionDivider';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation } from '../utils/navigation';

const iconosTipo = {
  urbanizacion: MdLocationCity,
  condominio: MdHomeWork,
  locales: MdStoreMallDirectory
};

export default function ProyectosEnMarcha({ proyectosFiltrados = null }) {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const [tooltipVisible, setTooltipVisible] = useState(null);
  
  const listado = proyectosFiltrados || proyectos;
  
  const isProyectoProximamente = (titulo) => {
    // Proyectos próximamente (urbanizaciones de lujo + los nuevos)
    const proyectosProximamente = [
      'marbella_titulo',    // Urbanización abierta
      'palmeras_title'      // Palmeras de la Italia
    ];
    
    // Proyectos finalizados (ninguno está deshabilitado - todos tienen botón "Ver más")
    const proyectosEntregados = [];
    
    return proyectosProximamente.includes(titulo) || proyectosEntregados.includes(titulo);
  };

  const handleMouseEnter = (titulo) => {
    if (isProyectoProximamente(titulo)) {
      setTooltipVisible(titulo);
    }
  };

  const handleMouseLeave = () => {
    setTooltipVisible(null);
  };

  return (
    <section className="proyectos-marcha">
     
      <div className="proyectos-grid">
        {listado.map((proy, idx) => (
          <div className="proyecto-card" key={idx} data-proyecto={proy.titulo}>
            <span className="proyecto-etiqueta" style={{background: proy.etiquetaColor}}>{t.proyectos[proy.tipo]}</span>
            <div className="proyecto-img-wrap">
              <img src={proy.imagen} alt={proy.titulo} className="proyecto-img-marcha" />
            </div>
            <div className="proyecto-info-marcha">
              <div className="proyecto-titulo-row">
                <span className="icono-circular-titulo">
                  {iconosTipo[proy.icono] && React.createElement(iconosTipo[proy.icono], { size: 32, color: proy.iconoColor || '#222' })}
                </span>
                <h3 className="proyecto-nombre">{t.proyectos[proy.titulo]}</h3>
              </div>
              <p className="proyecto-desc-marcha">{t.proyectos[proy.descripcion]}</p>
              <div className="proyecto-ubicacion-marcha">
                <span className="proyecto-ubicacion-icon">
                  <MdLocationOn style={{ color: '#ff6600', fontSize: '1.2em', marginRight: '0.2em', verticalAlign: 'middle' }} />
                </span>
                <span>{t.proyectos[proy.ubicacion]}</span>
              </div>
              <div className="button-container" style={{ position: 'relative' }}>
                <Button
                  className={`ambito-btn ${isProyectoProximamente(proy.titulo) ? 'gray lujo proximamente' : 'orange'}`}
                  onClick={isProyectoProximamente(proy.titulo) ? undefined : () => handleProyectoNavigation(proy, navigate)}
                  disabled={isProyectoProximamente(proy.titulo)}
                  onMouseEnter={() => handleMouseEnter(proy.titulo)}
                  onMouseLeave={handleMouseLeave}
                  aria-label={isProyectoProximamente(proy.titulo) ? t.proyectos.proximamente : t.proyectos.boton}
                >
                  {isProyectoProximamente(proy.titulo) ? t.proyectos.proximamente : (t.proyectos.boton || 'Ver más')}
                </Button>
                {tooltipVisible === proy.titulo && isProyectoProximamente(proy.titulo) && (
                  <div className="tooltip-proximamente">
                    {t.proyectos.proximamente}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 