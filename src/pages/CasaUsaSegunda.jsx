import React from 'react';
import '../styles/CasaUsaSegunda.css';
import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesCasaUsaSegunda';
import DetallesProyecto from "../components/DetallesProyecto";
import UbicacionMaps from '../components/UbicacionMaps';
import Footer from "../components/Footer";
import Expertos from '../components/Expertos';
import WhatsAppFloat from "../components/WhatsAppFloat";
import Header from '../components/Header';
import GaleriaProyecto from "../components/GaleriaProyecto";
import ContactoCTA from "../components/ContactoCTA";

const CasaUsaSegunda = () => {
 const jamundiCoord = {
      mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.456228064646!2d-81.93233099999999!3d26.686657000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db43955d4d3f3b%3A0x4090b22e7e28a181!2s2027%20NE%2018th%20St%2C%20Cape%20Coral%2C%20FL%2033909%2C%20EE.%20UU.!5e1!3m2!1ses-419!2sco!4v1753743726002!5m2!1ses-419!2sco"
   }; 


    return (
     <>
        <Header/>
       <section id="inicio">
        <Slider contenido={slidesUSA} namespace="casa_segunda_usa"/>
      </section>
       
         <DetallesProyecto id="casa_usa_segunda" />
         <GaleriaProyecto id="casa_usa_segunda" />
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

export default CasaUsaSegunda;