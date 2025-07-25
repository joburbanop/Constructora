import React from "react";
import { useIdioma } from '../context/IdiomaContext';

const ContactoCTA = () => {
  const { t } = useIdioma();
  return (
    <section id="contactanos" style={{ textAlign: 'center', padding: '64px 0 48px 0', background: '#fff' }}>
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
          background: 'linear-gradient(135deg, #ff6600 0%, #ff914d 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.4rem',
          padding: '18px 56px',
          border: 'none',
          borderRadius: 50,
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(255, 102, 0, 0.3)',
          letterSpacing: 1,
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12
        }}
        onClick={() => {
          const el = document.getElementById('contactanos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 8px 32px rgba(255, 102, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 24px rgba(255, 102, 0, 0.3)';
        }}
      >
        {t.cta?.boton || 'Contáctanos'}
        <span style={{ fontSize: '1.5rem', display: 'inline-block', transform: 'translateY(2px)' }}>→</span>
      </button>
    </section>
  );
};

export default ContactoCTA; 