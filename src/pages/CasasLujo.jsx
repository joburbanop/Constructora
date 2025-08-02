import React, { useEffect } from 'react';
import Header from '../components/Header';
import BreadcrumbSimple from '../components/BreadcrumbSimple';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useIdioma } from '../context/IdiomaContext';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaUsers, FaEnvelope, FaMapMarkerAlt, FaDraftingCompass, FaStar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import Slider from '../components/Slider';
import slidesCasasLujo from '../utils/slidesCasasLujo';
import Expertos from '../components/Expertos';
import agentes from '../utils/expertos';
import '../styles/CasasLujo.css';

// Importar imágenes para la galería
import casaLujo4 from '../assets/Casas_de_Lujo/DJI_0013.webp';
import casaLujo5 from '../assets/Casas_de_Lujo/DJI_0014.webp';
import casaLujo6 from '../assets/Casas_de_Lujo/DJI_0294.webp';
import casaLujo7 from '../assets/Casas_de_Lujo/IMG_20200130_161320.webp';
import casaLujo8 from '../assets/Casas_de_Lujo/IMG_20200130_161526.webp';
import casaLujo9 from '../assets/Casas_de_Lujo/IMG_20200130_162746.webp';
import casaLujo10 from '../assets/Casas_de_Lujo/IMG_20200130_165328.webp';
import casaLujo11 from '../assets/Casas_de_Lujo/IMG_20200130_180430.webp';

const CasasLujo = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtrar asesores para la sección de expertos
  const asesores = agentes.filter(agente =>
    ['lina', 'sofia', 'ludivia'].includes(agente.id)
  );

  // Definir los elementos de navegación para la página de Casas de Lujo
  const casasLujoNavItems = [
    { id: 'inicio', label: t.header?.inicio || 'Inicio', icon: <FaHome />, path: '/' },
    { id: 'casas-lujo', label: t.proyectos?.lujo_title || 'Casas de Lujo', icon: <FaBuilding />, path: '/casas-lujo' },
    { id: 'servicios', label: t.casas_lujo?.servicios_title || 'Servicios', icon: <FaCheckCircle />, path: '#servicios' },
    { id: 'galeria', label: t.casas_lujo?.galeria_title || 'Galería', icon: <FaBuilding />, path: '#galeria' },
    { id: 'expertos', label: t.header?.nosotros || 'Expertos', icon: <FaUsers />, path: '#expertos' },
    { id: 'contacto', label: t.header?.contactanos || 'Contacto', icon: <FaEnvelope />, path: '#contacto' },
  ];

  const galleryImages = [
    casaLujo4,
    casaLujo5,
    casaLujo6,
    casaLujo7,
    casaLujo8,
    casaLujo9,
    casaLujo10,
    casaLujo11,
  ];

  return (
    <div className="casas-lujo-container">
      <Header />
      
      <BreadcrumbSimple />
      
      {/* Hero Section with Slider */}
      <section className="casas-lujo-hero-section">
        <Slider
          contenido={slidesCasasLujo}
          namespace="casas_lujo"
        />
      </section>

      {/* Info Principal Section */}
      <section id="info-principal" className="casas-lujo-info-section">
        <div className="casas-lujo-container-inner">
          <div className="casas-lujo-info-content">
            <div className="casas-lujo-info-text">
              <h2 className="casas-lujo-info-title">{t.casas_lujo?.info_principal_title || 'Casas de Lujo Exclusivas'}</h2>
              <p className="casas-lujo-info-description">{t.casas_lujo?.info_principal_description || 'Diseñamos y construimos casas de lujo a la altura de sus sueños con máxima calidad.'}</p>
              <div className="casas-lujo-features">
                <div className="casas-lujo-feature-item">
                  <div className="casas-lujo-feature-icon"><FaDraftingCompass /></div>
                  <div className="casas-lujo-feature-content">
                    <h4>{t.casas_lujo?.feature1_title || 'Diseño Personalizado'}</h4>
                    <p>{t.casas_lujo?.feature1_desc || 'Creamos diseños únicos que reflejen su estilo de vida y personalidad.'}</p>
                  </div>
                </div>
                <div className="casas-lujo-feature-item">
                  <div className="casas-lujo-feature-icon"><FaStar /></div>
                  <div className="casas-lujo-feature-content">
                    <h4>{t.casas_lujo?.feature2_title || 'Materiales Premium'}</h4>
                    <p>{t.casas_lujo?.feature2_desc || 'Utilizamos los mejores materiales para garantizar durabilidad y elegancia.'}</p>
                  </div>
                </div>
                <div className="casas-lujo-feature-item">
                  <div className="casas-lujo-feature-icon"><FaMapMarkerAlt /></div>
                  <div className="casas-lujo-feature-content">
                    <h4>{t.casas_lujo?.feature3_title || 'Ubicaciones Estratégicas'}</h4>
                    <p>{t.casas_lujo?.feature3_desc || 'Construimos en los sectores más exclusivos de Jamundí, Pance y Cali.'}</p>
                  </div>
                </div>
                <div className="casas-lujo-feature-item">
                  <div className="casas-lujo-feature-icon"><FaShieldAlt /></div>
                  <div className="casas-lujo-feature-content">
                    <h4>{t.casas_lujo?.feature4_title || 'Construcción de Calidad'}</h4>
                    <p>{t.casas_lujo?.feature4_desc || 'Garantizamos la máxima calidad en cada etapa del proceso constructivo.'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="casas-lujo-info-image">
              <img src={casaLujo4} alt="Casa de Lujo" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="casas-lujo-servicios-section">
        <div className="casas-lujo-container-inner">
          <div className="casas-lujo-section-header">
            <h2 className="casas-lujo-section-title">{t.casas_lujo?.servicios_title || 'Diseñamos y Construimos'}</h2>
            <p className="casas-lujo-section-subtitle">{t.casas_lujo?.servicios_subtitle || 'Casas de lujo a la altura de sus sueños con máxima calidad'}</p>
          </div>
          <div className="casas-lujo-servicios-grid">
            <div className="casas-lujo-servicio-card">
              <div className="casas-lujo-servicio-icon"><FaDraftingCompass /></div>
              <h3>{t.casas_lujo?.servicio_diseno_titulo || 'Diseño Personalizado'}</h3>
              <p>{t.casas_lujo?.servicio_diseno_desc || 'Creamos diseños únicos que reflejen su estilo de vida y personalidad, adaptados a sus necesidades específicas.'}</p>
            </div>
            <div className="casas-lujo-servicio-card">
              <div className="casas-lujo-servicio-icon"><FaBuilding /></div>
              <h3>{t.casas_lujo?.servicio_construccion_titulo || 'Construcción Premium'}</h3>
              <p>{t.casas_lujo?.servicio_construccion_desc || 'Utilizamos los mejores materiales y técnicas constructivas para garantizar durabilidad y elegancia.'}</p>
            </div>
            <div className="casas-lujo-servicio-card">
              <div className="casas-lujo-servicio-icon"><FaMapMarkerAlt /></div>
              <h3>{t.casas_lujo?.servicio_ubicacion_titulo || 'Ubicaciones Exclusivas'}</h3>
              <p>{t.casas_lujo?.servicio_ubicacion_desc || 'Construimos en los sectores más exclusivos de Jamundí, Pance y Cali, ofreciendo el mejor entorno.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="casas-lujo-galeria-section">
        <div className="casas-lujo-container-inner">
          <div className="casas-lujo-section-header">
            <h2 className="casas-lujo-section-title">{t.casas_lujo?.galeria_title || 'Nuestra Galería de Lujo'}</h2>
            <p className="casas-lujo-section-subtitle">{t.casas_lujo?.galeria_subtitle || 'Explore nuestros proyectos más destacados y encuentre inspiración para su hogar soñado.'}</p>
          </div>
          <div className="casas-lujo-galeria-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="casas-lujo-galeria-item">
                <img src={image} alt={`Casa de Lujo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertos Section */}
      <section id="expertos" className="casas-lujo-expertos-section">
        <div className="casas-lujo-container-inner">
          <Expertos listaFiltrada={asesores} />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CasasLujo; 