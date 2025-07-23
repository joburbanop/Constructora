import React, { useEffect } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbSimple from '../components/BreadcrumbSimple';
import ProyectoCard from '../components/ProyectoCardSimple';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import proyectos from '../utils/proyectos';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation, navigateToSection } from '../utils/navigation';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/ProyectosUSA.css';
import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesUSA';

export default function ProyectosUSA() {
  const { t } = useIdioma();
  const navigate = useNavigate();

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);



  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const usaNavItems = (
     <ul className="nav-items">
         <li><a href="#" onClick={(e) => {e.preventDefault();
             navigate('/');}}>
           {t.header.inicio}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             navigate('/proyectos-colombia');}}>
           {t.proyectos.colombia || 'Proyectos Colombia'}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             handleSectionNavigation('expertos');
           }}>
           {t.header.nosotros}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             handleSectionNavigation('contactanos');
           }}>
           {t.header.contactanos}
         </a></li>
     </ul>
   );

  const proyectosUSA = proyectos.filter(p => p.ubicacion === 'cope_coral');

  const handleNavigate = (proyecto) => {
    handleProyectoNavigation(proyecto, navigate);
  };

  return (
    <div className="proyectos-usa-container">
      <Header  
         customNavItems={usaNavItems}
         showDefaultNav={false}
      />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />
      
       <Slider contenido={slidesUSA} namespace="usa"/>

      <main className="usa-main">
        <h2 className="classtitulo">{t.proyectos_usa.titulo}</h2>
        <p className="clasdescripcion">{t.proyectos_usa.descripcion}</p>

        <div className="usa-grid">
          {proyectosUSA.map((proy, idx) => (
            <ProyectoCard
              key={idx}
              proyecto={proy}
              t={t}
              onNavigate={handleNavigate}
              idiomaKey="proyectos_card_simple"
            />
          ))}
        </div>
      </main>

      <div id="expertos" className="expertos-section-usa">
        <Expertos />
      </div>
      <ContactoCTA />
      <section id="contactanos" className="footer-section">
        <Footer />
      </section>
      <WhatsAppFloat />
    </div>
  );
}