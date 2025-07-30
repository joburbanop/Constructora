import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import OptimizedImage from "../components/OptimizedImage";
import Slider from "../components/Slider";
import { getCasasLujoHeroResponsiveForOptimizedImage } from "../utils/casasLujoConfig";
import { getCasasLugoResponsiveForOptimizedImage } from "../utils/casasLugoImages";
import { getCasasLujoSlides, casasLujoSliderConfig } from "../utils/slidesCasasLujo";
import { useIdioma } from '../context/IdiomaContext';
import expertos from '../utils/expertos';
import Button from '../components/Button';
import Footer from '../components/Footer';
import ContactoCTA from '../components/ContactoCTA';
import WhatsAppFloat from "../components/WhatsAppFloat";
import CaracteristicasLujo from '../components/CaracteristicasLujo';
import CaracteristicasCards from '../components/CaracteristicasCards';
import InterioresLujo from '../components/InterioresLujo';
import ExperienciaSection from '../components/ExperienciaSection';
import ExpertosSection from '../components/ExpertosSection';
import { FaHome, FaBuilding, FaUsers, FaEnvelope, FaMapMarkerAlt, FaStar, FaShieldAlt, FaCrown } from 'react-icons/fa';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import '../styles/CasasLujo.css';

const CasasLujo = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  
  // Hook personalizado para navegación de secciones
  const { activeSection, handleSectionNavigation } = useSectionNavigation([
    'inicio', 'proyectos', 'expertos', 'contactanos'
  ]);

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Navegación específica para Casas de Lujo
  const casasLujoNavItems = (
    <ul className="nav-items">
      <li className={activeSection === 'inicio' ? "active" : ""}>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/", { state: { scrollToTop: true } });
          }}
        >
          <FaHome />
          {t.casas_lujo.breadcrumb_inicio}
        </a>
      </li>
      <li className={activeSection === 'expertos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('expertos');
          }}
        >
          <FaUsers />
          {t.casas_lujo.expertos_titulo.split(' ').pop()}
        </a>
      </li>
      <li className={activeSection === 'contactanos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('contactanos');
          }}
        >
          <FaEnvelope />
          {t.header.contactanos}
        </a>
      </li>
    </ul>
  );

  // Configuración de imágenes optimizadas
  const heroImage = getCasasLujoHeroResponsiveForOptimizedImage();
  const lugoImage = getCasasLugoResponsiveForOptimizedImage();

  // Características de las casas de lujo
  const caracteristicas = [
    {
      icon: <FaCrown size={32} color="#ff6600" />,
      titulo: t.casas_lujo.card_1_titulo,
      descripcion: t.casas_lujo.card_1_desc
    },
    {
      icon: <FaShieldAlt size={32} color="#ff6600" />,
      titulo: t.casas_lujo.card_2_titulo,
      descripcion: t.casas_lujo.card_2_desc
    },
    {
      icon: <FaStar size={32} color="#ff6600" />,
      titulo: t.casas_lujo.card_3_titulo,
      descripcion: t.casas_lujo.card_3_desc
    },
    {
      icon: <FaMapMarkerAlt size={32} color="#ff6600" />,
      titulo: 'Ubicación Privilegiada',
      descripcion: 'Zonas exclusivas con fácil acceso y proximidad a servicios de lujo.'
    }
  ];

  return (
    <div className="casas-lujo-container">
      <Header 
        customNavItems={casasLujoNavItems}
        showDefaultNav={false}
      />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />
      
      {/* Hero Slider Section */}
      <section id="inicio" className="hero-slider-section">
        <Slider 
          contenido={getCasasLujoSlides(t)}
          namespace="casas-lujo"
          customConfig={casasLujoSliderConfig}
        />
      </section>

      {/* Sección principal de características de lujo - PROMINENTE */}
      <CaracteristicasLujo
        id="proyectos"
        titulo={t.casas_lujo.caracteristicas_cards_titulo}
        subtitulo={t.casas_lujo.caracteristicas_cards_subtitulo}
        descripcion={{
          titulo: t.casas_lujo.caracteristicas_titulo,
          texto: t.casas_lujo.caracteristicas_descripcion,
          subtitulo: t.casas_lujo.caracteristicas_subtitulo
        }}
        caracteristicas={[
          { icono: 'crown', texto: t.casas_lujo.caracteristica_1 },
          { icono: 'shield', texto: t.casas_lujo.caracteristica_2 },
          { icono: 'star', texto: t.casas_lujo.caracteristica_3 },
          { icono: 'map', texto: t.casas_lujo.caracteristica_4 },
          { icono: 'home', texto: t.casas_lujo.caracteristica_5 },
          { icono: 'users', texto: t.casas_lujo.caracteristica_6 }
        ]}
        imagen={lugoImage}
      />

      {/* Sección de características en cards - COMPLEMENTARIA */}
      <CaracteristicasCards
        titulo={t.casas_lujo.caracteristicas_cards_titulo}
        subtitulo={t.casas_lujo.caracteristicas_cards_subtitulo}
        caracteristicas={caracteristicas}
      />

      {/* Sección de interiores de lujo */}
      <InterioresLujo
        titulo={t.casas_lujo.interiores_titulo}
        subtitulo={t.casas_lujo.interiores_subtitulo}
        descripcion={t.casas_lujo.interiores_descripcion}
        caracteristicas={[
          { icono: 'home', texto: t.casas_lujo.interior_1 },
          { icono: 'star', texto: t.casas_lujo.interior_2 },
          { icono: 'crown', texto: t.casas_lujo.interior_3 },
          { icono: 'users', texto: t.casas_lujo.interior_4 },
          { icono: 'shield', texto: t.casas_lujo.interior_5 },
          { icono: 'map', texto: t.casas_lujo.interior_6 }
        ]}
        imagen={{
          src: "/src/assets/casas_lujo/casas_lugo_large.jpg",
          alt: "Interior de lujo - Espacios elegantes y sofisticados"
        }}
      />

      {/* Sección de experiencia */}
      <ExperienciaSection
        titulo={t.casas_lujo.experiencia_titulo}
        descripcion={t.casas_lujo.experiencia_descripcion}
        estadisticas={[
          { numero: '17+', etiqueta: 'Años de Experiencia' },
          { numero: '100%', etiqueta: 'Satisfacción' }
        ]}
      />

      {/* Sección de expertos personalizada para Casas de Lujo */}
      <section 
        id="expertos" 
        className="section-expertos"
        aria-label="Nuestro equipo de expertos"
      >
        <div className="section-container">
          <ExpertosSection
            titulo={t.casas_lujo.expertos_titulo}
            subtitulo={t.casas_lujo.expertos_subtitulo}
            expertos={expertos}
          />
        </div>
      </section>

      {/* CTA de contacto */}
      <ContactoCTA />

      {/* Footer */}
      <section id="contactanos" className="footer-section">
        <Footer />
      </section>

      {/* WhatsApp Float */}
      <WhatsAppFloat />
    </div>
  );
};

export default CasasLujo; 