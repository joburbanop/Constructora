import React from 'react';
import proyectos from '../utils/proyectos';
import Button from './Button';
import { MdLocationOn, MdLocationCity, MdHomeWork, MdStoreMallDirectory } from 'react-icons/md';
import '../styles/ProyectosEnMarcha.css';

const iconosTipo = {
  urbanizacion: MdLocationCity,
  condominio: MdHomeWork,
  locales: MdStoreMallDirectory
};

export default function ProyectosEnMarcha() {
  return (
    <section className="proyectos-marcha">
      <h2 className="proyectos-titulo">Proyectos en marcha</h2>
      <p className="proyectos-sub">Somos expertos constructores con 17 años de trayectoria en el sur occidente colombiano y ahora en Estados Unidos.</p>
      <div className="proyectos-grid">
        {proyectos.map((proy, idx) => (
          <div className="proyecto-card" key={idx}>
            <span className="proyecto-etiqueta" style={{background: proy.etiquetaColor}}>{proy.tipo}</span>
            <div className="proyecto-img-wrap">
              <img src={proy.imagen} alt={proy.titulo} className="proyecto-img" />
            </div>
            <div className="proyecto-info">
              <div className="proyecto-titulo-row">
                <span className="icono-circular-titulo">
                  {iconosTipo[proy.icono] && React.createElement(iconosTipo[proy.icono], { size: 32, color: proy.iconoColor || '#222' })}
                </span>
                <h3 className="proyecto-nombre">{proy.titulo}</h3>
              </div>
              <p className="proyecto-desc">{proy.descripcion}</p>
              <div className="proyecto-ubicacion">
                <span className="proyecto-ubicacion-icon">
                  <MdLocationOn style={{ color: '#ff6600', fontSize: '1.2em', marginRight: '0.2em', verticalAlign: 'middle' }} />
                </span>
                <span>{proy.ubicacion}</span>
              </div>
              <Button className="proyecto-btn" onClick={() => window.open(proy.enlace, '_blank')}>Ver</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 