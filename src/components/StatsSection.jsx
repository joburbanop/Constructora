import React, { useState, useEffect } from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { 
  FaBuilding, 
  FaHome, 
  FaUsers, 
  FaAward, 
  FaCheckCircle, 
  FaStar,
  FaMapMarkerAlt,
  FaHandshake,
  FaEye,
  FaBullseye
} from 'react-icons/fa';
import { MdEngineering, MdSecurity, MdTrendingUp } from 'react-icons/md';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const { t } = useIdioma();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <MdEngineering />,
      number: '17',
      suffix: '+',
      label: t.stats?.anos_experiencia || 'Años de experiencia',
      description: t.stats?.anos_desc || 'Construyendo sueños',
      color: '#ff6600',
      bgColor: 'rgba(255, 102, 0, 0.1)',
      delay: 0
    },
    {
      icon: <FaAward />,
      number: '100',
      suffix: '%',
      label: t.stats?.garantia_calidad || 'Garantía de calidad',
      description: t.stats?.garantia_desc || 'Compromiso total',
      color: '#9b59b6',
      bgColor: 'rgba(155, 89, 182, 0.1)',
      delay: 100
    }
  ];

  const misionVision = [
    {
      icon: <FaBullseye />,
      title: 'Misión',
      description: 'Somos un equipo comprometido con la calidad y el cumplimiento de cada una de nuestras obras urbanísticas demostrando honestidad y solidez para brindar respaldo, confianza y satisfacción a clientes e inversionistas, promoviendo un desarrollo sostenible para mejorar la calidad de vida de los entornos en los cuales interactuamos.',
      color: '#2ecc71',
      bgColor: 'rgba(46, 204, 113, 0.1)',
      delay: 200
    },
    {
      icon: <FaEye />,
      title: 'Visión',
      description: 'Estamos comprometidos con el mejoramiento de cada proceso que involucre a clientes internos y externos para consolidar nuestro posicionamiento empresarial a nivel nacional e internacional para ser reconocidos como una de las empresas líderes del sur occidente colombiano en la prestación de servicios de construcción, ingeniería y arquitectura de proyectos urbanísticos.',
      color: '#3498db',
      bgColor: 'rgba(52, 152, 219, 0.1)',
      delay: 300
    }
  ];

  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: t.stats?.cobertura || 'Cobertura',
      description: t.stats?.cobertura_desc || 'Colombia y Estados Unidos'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-background">
        <div className="stats-pattern"></div>
      </div>
      
      <div className="stats-container">
        {/* Header Section */}
        <div className="stats-header">
          <div className="stats-title-container">
            <h2 className="stats-main-title">
              <span className="stats-highlight">{t.stats?.titulo_principal?.split(' ')[0] || 'Nuestros'}</span> {t.stats?.titulo_principal?.split(' ').slice(1).join(' ') || 'Logros'}
            </h2>
            <p className="stats-subtitle">
              {t.stats?.subtitulo || 'Más de una década construyendo sueños y transformando espacios'}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-item ${isVisible ? 'animate-in' : ''}`}
              style={{ 
                animationDelay: `${stat.delay}ms`,
                '--stat-color': stat.color,
                '--stat-bg-color': stat.bgColor
              }}
            >
              <div className="stat-icon-wrapper">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-icon-glow"></div>
              </div>
              
              <div className="stat-content">
                <div className="stat-number-container">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-description">{stat.description}</p>
              </div>
              
              <div className="stat-decoration">
                <div className="stat-line"></div>
                <div className="stat-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Misión y Visión Section */}
        <div className="mision-vision-section">
          <div className="mision-vision-grid">
            {misionVision.map((item, index) => (
              <div 
                key={index} 
                className={`mision-vision-item ${isVisible ? 'animate-in' : ''}`}
                style={{ 
                  animationDelay: `${item.delay}ms`,
                  '--item-color': item.color,
                  '--item-bg-color': item.bgColor
                }}
              >
                <div className="mision-vision-icon-wrapper">
                  <div className="mision-vision-icon">
                    {item.icon}
                  </div>
                  <div className="mision-vision-icon-glow"></div>
                </div>
                
                <div className="mision-vision-content">
                  <h3 className="mision-vision-title">{item.title}</h3>
                  <p className="mision-vision-description">{item.description}</p>
                </div>
                
                <div className="mision-vision-decoration">
                  <div className="mision-vision-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="stats-features">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="stats-cta">
          <div className="cta-content">
            <h3 className="cta-title">{t.stats?.cta_titulo || '¿Listo para construir tu sueño?'}</h3>
            <p className="cta-description">
              {t.stats?.cta_descripcion || 'Construye con la mejor constructora del sur occidente colombiano'}
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <FaHandshake />
                <span>{t.stats?.cta_contactar || 'Contáctanos'}</span>
              </button>
              <button className="cta-btn secondary">
                <FaStar />
                <span>{t.stats?.cta_ver_proyectos || 'Ver Proyectos'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 