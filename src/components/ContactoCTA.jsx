import React from "react";
import { useIdioma } from '../context/IdiomaContext';

const ContactoCTA = () => {
  const { t } = useIdioma();
  return (
    <section style={{ textAlign: 'center', padding: '64px 0 48px 0', background: '#fff' }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: 800,
        color: '#111c2b',
        marginBottom: 32,
        lineHeight: 1.1,
        fontFamily: 'Montserrat, Arial, sans-serif'
      }}>
        {t.cta?.titulo1 || '¿Listo para hacer realidad'}<br />
        {t.cta?.titulo2 || 'tu proyecto'}{' '}
        <span style={{ color: '#ff6600' }}>{t.cta?.inmobiliario || 'inmobiliario'}</span>?
      </h2>
      <div style={{ fontSize: '1.5rem', color: '#111c2b', marginBottom: 40, fontWeight: 400 }}>
        {t.cta?.desc1 || 'Encuentra el lugar ideal para construir tu futuro.'}<br />
        {t.cta?.desc2 || 'Estamos listos para asesorarte en cada paso.'}
      </div>
      <button
        style={{
          background: '#111c2b',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.4rem',
          padding: '18px 56px',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          letterSpacing: 1,
          transition: 'background 0.2s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12
        }}
        onClick={() => {
          const el = document.getElementById('contactanos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {t.cta?.boton || 'Contáctanos'}
        <span style={{ fontSize: '1.5rem', display: 'inline-block', transform: 'translateY(2px)' }}>→</span>
      </button>
    </section>
  );
};

export default ContactoCTA; 