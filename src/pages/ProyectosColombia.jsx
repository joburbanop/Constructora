import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import proyectos from "../utils/proyectos";
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';

const ProyectosColombia = () => {
  const { t } = useIdioma();
  // Filtrar proyectos de Colombia
  const proyectosColombia = proyectos.filter(p => p.ubicacion === 'jamundi_colombia');

  return (
    <>
      <Header />
      <Slider />
      <main style={{ maxWidth: 1200, margin: '40px auto', padding: 20 }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: 32 }}>{t.proyectos.colombia_title || 'Proyectos Colombia'}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {proyectosColombia.map((proy, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: 24 }}>
              <img src={proy.imagen} alt={t.proyectos[proy.titulo]} style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
              <h2 style={{ color: '#222', fontSize: '1.3rem', marginBottom: 8 }}>{t.proyectos[proy.titulo]}</h2>
              <p style={{ color: '#444', marginBottom: 12 }}>{t.proyectos[proy.descripcion]}</p>
              <Button onClick={() => window.open(proy.enlace, '_blank')}>{t.proyectos.boton || 'Ver más'}</Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Button onClick={() => window.location.href = '/'}>Volver al inicio</Button>
        </div>
      </main>
    </>
  );
};

export default ProyectosColombia; 