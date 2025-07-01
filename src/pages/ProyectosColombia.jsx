import React from "react";
import Header from "../components/Header";
import renders from "../utils/renders";
import proyectos from "../utils/proyectos";
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';
import ColombiaBenefits from '../components/ColombiaBenefits';
import Footer from '../components/Footer';
import Expertos from '../components/Expertos';

const ProyectosColombia = () => {
  const { t } = useIdioma();
  // Filtrar proyectos de Colombia
  const proyectosColombia = proyectos.filter(p => p.ubicacion === 'jamundi_colombia');
  // Usar el primer render como imagen de hero
  const heroImg = renders[0]?.imagen;

  return (
    <>
      <Header />
      <section
        style={{
          width: '100%',
          height: '520px',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          left: 0, right: 0, top: 0, bottom: 0,
          background: 'linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.15) 60%,rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
          width: '100%',
          padding: '2rem 1rem',
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
            EXPERTOS EN CONSTRUCCIÓN
          </h1>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 500, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Proyectos Colombia
          </h2>
        </div>
      </section>
      <main style={{ maxWidth: 1200, margin: '40px auto', padding: 20 }}>
        <ColombiaBenefits />
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
       
      </main>
      <Expertos />
      <Footer />
    </>
  );
};

export default ProyectosColombia; 