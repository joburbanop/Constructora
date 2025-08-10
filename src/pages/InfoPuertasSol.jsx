import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesPuertasSol from "../utils/slidesPuertasSol";
import '../utils/testImages';
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import EspaciosSociales from "../components/EspaciosSociales";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import AreaPrecioUbic from "../components/AreaPrecioUbic";
import InfoZigZag from "../components/InfoZigZag";
import infoZigZag from "../utils/infoZigZag";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/InfoPuertasSol.css";
import { useNavigate } from 'react-router-dom';
import UbicacionMaps from '../components/UbicacionMaps';
import expertos from '../utils/expertos';
import Expertos from "../components/Expertos";
import ContactoCTA from '../components/ContactoCTA';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import agentes from '../utils/expertos';

const InfoPuertasSol = () => {
   const { t } = useIdioma();
   const video = t.videos?.puertas_sol?.video_principal;
   const navigate = useNavigate();
   const zigzagPuertasSol = infoZigZag.datosPuertasSol;
   const [activeSection, setActiveSection] = useState('inicio');
   const nombresDeseados = ['sofia','ludivia','lina'];
  
  const asesores = agentes.filter(({ clave }) =>
  nombresDeseados.includes(clave)
  );

   const jamundiCoord = {
      mapSrc:  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4756.276195077414!2d-76.558599!3d3.23861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMTQnMTkuMCJOIDc2wrAzMyczMS4wIlc!5e1!3m2!1ses-419!2sco!4v1754073391725!5m2!1ses-419!2sco"
   };
   const clavesDeseadas = ['sofia'];
   const listaFiltrada = expertos.filter(e => clavesDeseadas.includes(e.clave));

   // Efecto para detectar sección activa
  useEffect(() => {
    const updateOnScroll = () => {
      const sections = ['inicio', 'expertos', 'contactanos'];
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

   const handleSectionNavigation = (sectionId) => {
     const section = document.getElementById(sectionId);
     if (section) {
       section.scrollIntoView({ behavior: 'smooth' });
     }
   };

   const puertasSolNavItems = (
     <ul className="nav-items">
       <li className={activeSection === 'inicio' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault(); navigate('/');}}>
           <span className="nav-icon">{<FaHome />}</span>
           <span className="nav-text">{t.header.inicio}</span>
         </a>
       </li>
       <li className={activeSection === 'expertos' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault(); handleSectionNavigation('expertos');}}>
           <span className="nav-icon">{<FaUsers />}</span>
           <span className="nav-text">{t.header.nosotros}</span>
         </a>
       </li>
       <li className={activeSection === 'contactanos' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault(); handleSectionNavigation('contactanos');}}>
           <span className="nav-icon">{<FaEnvelope />}</span>
           <span className="nav-text">{t.header.contactanos}</span>
         </a>
       </li>
     </ul>
   );

    return (
     <div className="info-puertas-sol-container">
        <Header
          customNavItems={puertasSolNavItems}
          showDefaultNav={false}
        />

        {/* Breadcrumb Navigation */}
        <BreadcrumbSimple />

        <section id="inicio">
          <Slider contenido={slidesPuertasSol} namespace="puertas_sol"/>
        </section>

        <section className="detalles-proyecto">
          <DetallesProyecto id="puertas_sol" videoId={video.id} videoTitulo={video.titulo} />
        </section>
        
        <section className="area-precio-ubic">
          <AreaPrecioUbic proyectoKey="puertas_sol" />
        </section>
        
        <section className="galeria-proyecto">
          <GaleriaProyecto id="puertas_sol" />
        </section>
        
       
        
        <section className="info-zigzag">
          <InfoZigZag elementos={zigzagPuertasSol} textoKey="info_ZigZag_puertas_sol"/>
        </section>
        
        <section className="ubicacion-maps">
          <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>
        </section>
        
        <div id="expertos" className="expertos-section-puertas-sol">
          <Expertos listaFiltrada={asesores}/>
        </div>
        
        <section className="contacto-cta">
          <ContactoCTA />
        </section>
        
        <section id="contactanos" className="footer-section">
          <Footer/>
        </section>
        
        <WhatsAppFloat />
        </div>
    );
};

export default InfoPuertasSol;