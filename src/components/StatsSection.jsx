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
  FaHandshake
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
      icon: <FaBuilding />,
      number: '50',
      suffix: '+',
      label: t.stats?.proyectos_completados || 'Proyectos completados',
      description: t.stats?.proyectos_desc || 'Entregados con éxito',
      color: '#2ecc71',
      bgColor: 'rgba(46, 204, 113, 0.1)',
      delay: 100
    },
    {
      icon: <FaUsers />,
      number: '200',
      suffix: '+',
      label: t.stats?.clientes_satisfechos || 'Clientes satisfechos',
      description: t.stats?.clientes_desc || 'Confían en nosotros',
      color: '#3498db',
      bgColor: 'rgba(52, 152, 219, 0.1)',
      delay: 200
    },
    {
      icon: <FaAward />,
      number: '100',
      suffix: '%',
      label: t.stats?.garantia_calidad || 'Garantía de calidad',
      description: t.stats?.garantia_desc || 'Compromiso total',
      color: '#9b59b6',
      bgColor: 'rgba(155, 89, 182, 0.1)',
      delay: 300
    }
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'Certificaciones',
      description: 'ISO 9001, ISO 14001, OHSAS 18001'
    },
    {
      icon: <MdSecurity />,
      title: 'Seguridad',
      description: 'Protocolos de seguridad certificados'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Cobertura',
      description: 'Colombia y Estados Unidos'
    },
    {
      icon: <FaHandshake />,
      title: 'Confianza',
      description: 'Más de 200 familias confían en nosotros'
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
              <span className="stats-highlight">Nuestros</span> Logros
            </h2>
            <p className="stats-subtitle">
              Más de una década construyendo sueños y transformando espacios
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
            <h3 className="cta-title">¿Listo para construir tu sueño?</h3>
            <p className="cta-description">
              Únete a más de 200 familias que ya confían en nosotros
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <FaHandshake />
                <span>Contáctanos</span>
              </button>
              <button className="cta-btn secondary">
                <FaStar />
                <span>Ver Proyectos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 