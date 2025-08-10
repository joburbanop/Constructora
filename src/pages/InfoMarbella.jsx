// Componente funcional básico
import React from 'react';
import Slider from '../components/Slider';
import slidesMarbella from '../utils/slidesMarbella';
import Header from '../components/Header';
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import agentes from '../utils/expertos';
import Expertos from "../components/Expertos";
import DetallesProyecto from "../components/DetallesProyecto";
import { useIdioma } from '../context/IdiomaContext';
import InfoZigZag from "../components/InfoZigZag";
import infoZigZag  from "../utils/infoZigZag";
import ContactoCTA from '../components/ContactoCTA';
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import GaleriaProyecto from "../components/GaleriaProyecto";
import UbicacionMaps from '../components/UbicacionMaps';
import AreaPrecioUbic from "../components/AreaPrecioUbic";
const InfoMarbella = () => {
    const { t } = useIdioma();
    const nombresDeseados = ['sofia','ludivia','lina'];
    const video = t.videos?.marbella?.video_principal;
    const zigzagmarbella=infoZigZag.datosQuintasMarbella;
  const asesores = agentes.filter(({ clave }) =>
  nombresDeseados.includes(clave)
  );
  const jamundiCoord = {
      mapSrc:  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3646.24297798336!2d-76.52254687589681!3d3.2354696279669084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMTQnMDguNiJOIDc2wrAzMScxNy43Ilc!5e1!3m2!1ses-419!2sco!4v1754083788503!5m2!1ses-419!2sco" 
   };
 
    return (
    <>
     <Header/>
      <BreadcrumbSimple />
        <section id="inicio">
            <Slider contenido={slidesMarbella} namespace="quintas_marbella"/>
        </section>
   
      <DetallesProyecto id="quintas_marbella"  videoId={video.id} videoTitulo={video.titulo} />
      <section className="area-precio-ubic">
          <AreaPrecioUbic proyectoKey="quintas_marbella" />
        </section>
      <GaleriaProyecto id="quintas_marbella" />
      
      <InfoZigZag elementos={zigzagmarbella} textoKey="info_ZigZag_quintas_marbella"/>
       
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
       
    </>
   
  );
};

export default InfoMarbella;
