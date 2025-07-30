import React from "react";
import { useIdioma } from '../context/IdiomaContext';

const ColombiaBenefits = () => {
  const { t } = useIdioma();
  
  return (
    <section className="colombia-benefits" style={{textAlign: 'center', margin: '48px 0 32px 0'}}>
      <div style={{marginBottom: 8}}>
        <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#ff6600', fontFamily: 'Georgia, serif', display: 'block'}}>
          {t.proyectos.beneficio_titulo1 || 'Somos'} <b>expertos</b>
        </span>
        <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', display: 'block'}}>
          {t.proyectos.beneficio_titulo2 || 'constructores con 17 años de trayectoria'}
        </span>
      </div>
      <div style={{fontSize: '1.6rem', marginBottom: 32, fontFamily: 'Georgia, serif', color: '#222'}}>
        {t.proyectos.beneficio_sub || 'en el sur occidente colombiano'}
      </div>
    </section>
  );
};

export default ColombiaBenefits; 