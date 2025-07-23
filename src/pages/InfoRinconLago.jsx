import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Slider from "../components/Slider";
import slidesRinconLago from "../utils/slidesRinconLago";
import Button from "../components/Button";
import DetallesProyecto from "../components/DetallesProyecto";
import GaleriaProyecto from "../components/GaleriaProyecto";
import { useIdioma } from '../context/IdiomaContext';
import EspaciosSociales from "../components/EspaciosSociales";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import AreaPrecioUbic from "../components/AreaPrecioUbic";
import InfoZigZag from "../components/InfoZigZag";
import infoZigZag  from "../utils/infoZigZag";
import VideoYoutube from "../components/VideoYoutube";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/VideoYoutube.css";
import "../styles/InfoRinconLago.css";
import { useNavigate } from 'react-router-dom';
import UbicacionMaps from '../components/UbicacionMaps';
import {mapaRinconLago} from "../utils/imgadicional";
import expertos from '../utils/expertos';
import Expertos from "../components/Expertos";
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
const InfoRinconLago = () => {
   const { t } = useIdioma();
   const video = t.videos?.rincon?.rincon_lago_nuevo_sur;
   const video2 = t.videos?.rincon?.render;
   const navigate = useNavigate();
   const zigzagrincon=infoZigZag.datosRinconLago;
   const [activeSection, setActiveSection] = useState('inicio');
   
   const jamundiCoord = {
      lat: 3.2758,  // Latitud de Jamundí
      lng: -76.5408,// Longitud de Jamundí
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.240232958078!2d-76.56931072524975!3d3.2498028525261127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3099e34939565f%3A0x7c4a30a48d886678!2sRinc%C3%B3n%20del%20LAGO!5e1!3m2!1ses-419!2sco!4v1753214846388!5m2!1ses-419!2sco"
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

   const rinconNavItems = (
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
   <div className="info-rincon-container">
      <Header
        customNavItems={rinconNavItems}
        showDefaultNav={false}
      />

      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />

      <section id="inicio">
        <Slider contenido={slidesRinconLago} namespace="rincon"/>
      </section>
      <DetallesProyecto id="rincon"  videoId={video.id} videoTitulo={video.titulo} />
      
              <SectionDivider textKey="espacios" variant="subtle" />
      <EspaciosSociales id="rincon" claves={t.rincon_detalle.espacios} />
      
      <SectionDivider textKey="detalles" variant="subtle" />
      <AreaPrecioUbic proyectoKey="rincon_lago" />

      <SectionDivider textKey="ubicacion" variant="subtle" />
      <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>

      <SectionDivider textKey="video" variant="subtle" />
      <VideoYoutube videoId={video2.id} titulo={video2.titulo} />


      <SectionDivider textKey="detalles" variant="subtle" />
      <InfoZigZag elementos={zigzagrincon} textoKey="info_ZigZag_rincon"/>
      

      <SectionDivider textKey="mapa_obra" variant="subtle" />
      <div>
      <img 
         src={mapaRinconLago}
         alt={t.imagenes_add.mapa_rincon} 
         style={{ width: "100%", maxWidth: "600px", display: "block", margin: "0 auto" }} 
      />

      </div>

      <SectionDivider textKey="galeria" variant="subtle" />
      <GaleriaProyecto id="rincon" />
      <div id="expertos" className="expertos-section-rincon">
        <Expertos listaFiltrada={listaFiltrada}/>
      </div>
      <section id="contactanos" className="footer-section">
        <Footer/>
      </section>
      <WhatsAppFloat />

   
   </div>
  );
};

export default InfoRinconLago;
