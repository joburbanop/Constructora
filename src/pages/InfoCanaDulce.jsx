import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesCanaDulce from "../utils/slidesCanaDulce";
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
import "../styles/InfoCanaDulce.css";
import { useNavigate } from 'react-router-dom';
import UbicacionMaps from '../components/UbicacionMaps';
import expertos from '../utils/expertos';
import Expertos from "../components/Expertos";
import ContactoCTA from '../components/ContactoCTA';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import agentes from '../utils/expertos';
  

const InfoCanaDulce = () => {
   const { t } = useIdioma();
   const video = t.videos?.cana_dulce?.video_principal;
   const navigate = useNavigate();
   const zigzagCanaDulce = infoZigZag.datosCanaDulce;
   const [activeSection, setActiveSection] = useState('inicio');
  const nombresDeseados = ['sofia','ludivia','lina'];

  const asesores = agentes.filter(({ clave }) =>
  nombresDeseados.includes(clave)
  );

   const sanPedroCoord = {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.4209077290598!2d-76.2761726!3d4.032145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39dde3400ee8f7%3A0xaafd9c9c0f404f93!2sCa%C3%B1a%20Dulce!5e1!3m2!1ses-419!2sco!4v1754075037763!5m2!1ses-419!2sco"
   };
   const clavesDeseadas = ['sofia'];
   const listaFiltrada = expertos.filter(e => clavesDeseadas.includes(e.clave));

   // Efecto para detectar sección activa
   useEffect(() => {
     const handleScroll = () => {
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

     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleSectionNavigation = (sectionId) => {
     const section = document.getElementById(sectionId);
     if (section) {
       section.scrollIntoView({ behavior: 'smooth' });
     }
   };

   const canaDulceNavItems = (
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
     <div className="info-cana-dulce-container">
        <Header
          customNavItems={canaDulceNavItems}
          showDefaultNav={false}
        />

        {/* Breadcrumb Navigation */}
        <BreadcrumbSimple />

        <section id="inicio">
          <Slider contenido={slidesCanaDulce} namespace="cana_dulce"/>
        </section>

        <section className="detalles-proyecto">
          <DetallesProyecto id="cana_dulce" videoId={video.id} videoTitulo={video.titulo} />
        </section>
        
        <section className="area-precio-ubic">
          <AreaPrecioUbic proyectoKey="cana_dulce" />
        </section>
        
        <section className="galeria-proyecto">
          <GaleriaProyecto id="cana_dulce" />
        </section>
        
        
        <section className="info-zigzag">
          <InfoZigZag elementos={zigzagCanaDulce} textoKey="info_ZigZag_cana_dulce"/>
        </section>
        
        <section className="ubicacion-maps">
          <UbicacionMaps mapSrc={sanPedroCoord.mapSrc}/>
        </section>
        
        <div id="expertos" className="expertos-section-cana-dulce">
          <Expertos listaFiltrada={asesores} />
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

export default InfoCanaDulce;