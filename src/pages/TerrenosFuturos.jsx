import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesTerrenos';
import React from 'react';
import { lands } from '../utils/terrenos';
import '../styles/TerrenosFuturos.css';
import { useIdioma } from '../context/IdiomaContext';
import agentes from '../utils/expertos';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';
import ContactoCTA from '../components/ContactoCTA';
import Header from '../components/Header';
function TerrenosFuturos() {
     const { t } = useIdioma();
      const nombresDeseados = ['yulei','wiliam'];
     
       const asesores = agentes.filter(({ clave }) =>
       nombresDeseados.includes(clave)
       );
    return (
        <>
           <Header/>
        <section id="inicio">
        <Slider contenido={slidesUSA} namespace="terrenos"/>
      </section>
         <div className="wrapper">
      <h1 className="heading">{t.terrenos.titulo}</h1>
      
      <div className="grid">
        {lands.map((land, index) => (
          <div key={index} className="card">
            <h2 className="title">{land.title}</h2>
            <a
              href={land.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              📍 {t.terrenos.ver_maps}
            </a>
          </div>
        ))}
      </div>
    </div>
      <div id="expertos" className="expertos-section-usa">
            <Expertos listaFiltrada={asesores} />
          </div>
          <ContactoCTA />
          <section id="contactanos" className="footer-section">
            <Footer />
          </section>
        </>
    );
}

export default TerrenosFuturos;