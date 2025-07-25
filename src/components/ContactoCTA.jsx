import React from "react";
import { useIdioma } from '../context/IdiomaContext';
import Button from './Button';

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
      <Button
        whatsapp={true}
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.4rem',
          padding: '18px 56px',
          border: 'none',
          borderRadius: 50,
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(37, 211, 102, 0.3)',
          letterSpacing: 1,
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12
        }}
      >
        {t.cta?.boton || '¡Contáctanos por WhatsApp!'}
      </Button>
    </section>
  );
};

export default ContactoCTA; 