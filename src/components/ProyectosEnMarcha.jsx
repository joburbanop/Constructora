import React from 'react';
import proyectos from '../utils/proyectos';
import Button from './Button';
import '../styles/ProyectosEnMarcha.css';

export default function ProyectosEnMarcha() {
  return (
    <section className="proyectos-marcha">
      <h2 className="proyectos-titulo">Proyectos en marcha</h2>
      <p className="proyectos-sub">Somos expertos constructores con 17 años de trayectoria en el sur occidente colombiano y ahora en Estados Unidos.</p>
      <div className="proyectos-grid">
        {proyectos.map((proy, idx) => (
          <div className="proyecto-card" key={idx}>
            <div className="proyecto-img-wrap">
              <img src={proy.imagen} alt={proy.titulo} className="proyecto-img" />
              <span className="proyecto-etiqueta" style={{background: proy.etiquetaColor}}>{proy.tipo}</span>
            </div>
            <div className="proyecto-info">
              <h3 className="proyecto-nombre">{proy.titulo}</h3>
              <p className="proyecto-desc">{proy.descripcion}</p>
              <div className="proyecto-ubicacion">
                <span className="proyecto-ubicacion-icon">📍</span>
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