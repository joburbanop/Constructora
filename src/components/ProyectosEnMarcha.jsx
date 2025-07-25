import React from 'react';
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
   const listado = proyectosFiltrados || proyectos;
  const isProyectoProximamente = (titulo) => {
    // Proyectos próximamente (urbanizaciones de lujo)
    const proyectosProximamente = ['sanmiguel_titulo', 'marbella_titulo'];
    
    // Proyectos finalizados (todos deben estar deshabilitados)
    const proyectosEntregados = ['cana_title', 'palmeras_title', 'caña_dulce_title', 'puertas_sol_title'];
    
    return proyectosProximamente.includes(titulo) || proyectosEntregados.includes(titulo);
  };

  return (
    <section className="proyectos-marcha">
     
      <div className="proyectos-grid">
        {listado.map((proy, idx) => (
          <div className="proyecto-card" key={idx}>
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
              <Button
                className={`ambito-btn ${isProyectoProximamente(proy.titulo) ? 'gray lujo' : 'orange'}`}
                onClick={isProyectoProximamente(proy.titulo) ? undefined : () => handleProyectoNavigation(proy, navigate)}
                disabled={isProyectoProximamente(proy.titulo)}
                aria-label={isProyectoProximamente(proy.titulo) ? t.proyectos.proximamente : t.proyectos.boton}
              >
                {t.proyectos.boton || 'Ver más'}
                {isProyectoProximamente(proy.titulo) && (
                  <span className="proximamente-label">{t.proyectos.proximamente}</span>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 