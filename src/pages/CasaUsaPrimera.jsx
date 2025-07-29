import React from 'react';
import '../styles/CasaUsaPrimera.css';
import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesCasaUsaPrimera';
import DetallesProyecto from "../components/DetallesProyecto";
import UbicacionMaps from '../components/UbicacionMaps';
import Footer from "../components/Footer";
import Expertos from '../components/Expertos';
import WhatsAppFloat from "../components/WhatsAppFloat";
import Header from '../components/Header';
import GaleriaProyecto from "../components/GaleriaProyecto";
import ContactoCTA from "../components/ContactoCTA";
const CasaUsaPrimera = () => {
   const jamundiCoord = {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.466718696111!2d-81.93471705813184!3d26.685602048661842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db43955bc9064b%3A0x6c57e1bb2a7a070f!2s2032%20NE%2018th%20St%2C%20Cape%20Coral%2C%20FL%2033909%2C%20EE.%20UU.!5e1!3m2!1ses-419!2sco!4v1753734547793!5m2!1ses-419!2sco" 
   }; 

 
    return (
    <>
        <Header/>
       <section id="inicio">
        <Slider contenido={slidesUSA} namespace="casa_primera_usa"/>
      </section>
       
         <DetallesProyecto id="casa_usa_primera" />
         <GaleriaProyecto id="casa_usa_primera" />
         <UbicacionMaps mapSrc={jamundiCoord.mapSrc}/>
          <div id="expertos" className="expertos-section-coral">
         <Expertos />
       </div>
         <ContactoCTA />
      <section id="contactanos" className="footer-section">
        <Footer/>
      </section>
      <WhatsAppFloat />
    </>
   
    );
};

export default CasaUsaPrimera;