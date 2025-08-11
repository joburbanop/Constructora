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
import casaLujo12 from '../assets/Casas_de_Lujo/IMG_20200130_115403.webp';
import casaLujo13 from '../assets/Casas_de_Lujo/IMG_20200130_182939.webp';

const CasasLujo = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
   // Expertos específicos para Casas de Lujo con información personalizada
 const nombresDeseados = ['lina','ludivia','sofia'];
 const asesores = agentes.filter(({ clave }) =>
    nombresDeseados.includes(clave)
    );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

 
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
    casaLujo12,
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


      {/* Servicios Section */}
      <section id="servicios" className="casas-lujo-servicios-section">
        <div className="casas-lujo-container-inner">
          <div className="casas-lujo-section-header">
            <h2 className="casas-lujo-section-title">{t.casas_lujo?.servicios_title || 'Nuestro Proceso de Construcción'}</h2>
            <p className="casas-lujo-section-subtitle">{t.casas_lujo?.servicios_subtitle || 'Descubra cómo transformamos sus sueños en realidad'}</p>
          </div>
          
          {/* Zigzag Layout */}
          <div className="casas-lujo-zigzag-container">
            {/* Primera fila: Imagen a la izquierda, texto a la derecha */}
            <div className="casas-lujo-zigzag-item reverse">
              <div className="casas-lujo-zigzag-image">
                <img src={casaLujo4} alt="Diseño Arquitectónico Exclusivo" />
              </div>
              <div className="casas-lujo-zigzag-content">
                <div className="casas-lujo-zigzag-number">01</div>
                <h3>Diseño Arquitectónico Exclusivo</h3>
                <p>Transformamos su visión en realidad con diseños únicos que combinan elegancia y funcionalidad. Nuestros arquitectos crean espacios que reflejan su personalidad y estilo de vida, desde el concepto inicial hasta el último detalle.</p>
                <div className="casas-lujo-zigzag-features">
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Diseño personalizado 100%</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Renders 3D fotorrealistas</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Planos técnicos detallados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda fila: Texto a la izquierda, imagen a la derecha */}
            <div className="casas-lujo-zigzag-item">
              <div className="casas-lujo-zigzag-content">
                <div className="casas-lujo-zigzag-number">02</div>
                <h3>Construcción Premium</h3>
                <p>Utilizamos los mejores materiales y técnicas constructivas del mercado para garantizar que su casa no solo sea visualmente impresionante, sino también estructuralmente sólida y duradera para las próximas generaciones.</p>
                <div className="casas-lujo-zigzag-features">
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Materiales premium certificados</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Supervisión técnica 24/7</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Garantía extendida</span>
                  </div>
                </div>
              </div>
              <div className="casas-lujo-zigzag-image">
                <img src={casaLujo12} alt="Construcción Premium" />
              </div>
            </div>

            {/* Tercera fila: Imagen a la izquierda, texto a la derecha */}
            <div className="casas-lujo-zigzag-item reverse">
              <div className="casas-lujo-zigzag-image">
                <img src={casaLujo9} alt="Acabados de Lujo" />
              </div>
              <div className="casas-lujo-zigzag-content">
                <div className="casas-lujo-zigzag-number">03</div>
                <h3>Acabados de Lujo</h3>
                <p>Los acabados son el alma de su hogar. Seleccionamos cuidadosamente cada material, textura y color para crear ambientes que transmitan sofisticación y confort, transformando su casa en un verdadero santuario de lujo.</p>
                <div className="casas-lujo-zigzag-features">
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Acabados premium importados</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Sistemas de iluminación inteligente</span>
                  </div>
                  <div className="casas-lujo-zigzag-feature">
                    <span className="casas-lujo-zigzag-icon">✓</span>
                    <span>Detalles artesanales únicos</span>
                  </div>
                </div>
              </div>
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

      <section className="footer-section">
        <Footer />
      </section>
      <WhatsAppFloat />
    </div>
  );
};

export default CasasLujo; 