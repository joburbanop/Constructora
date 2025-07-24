import React, { useEffect, useState } from 'react';
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
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';

export default function ProyectosUSA() {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('inicio');

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  const usaNavItems = (
     <ul className="nav-items">
         <li className={activeSection === 'inicio' ? "active" : ""}>
           <a href="#" onClick={(e) => {e.preventDefault();
             navigate('/');}}>
             <span className="nav-icon">{<FaHome />}</span>
             <span className="nav-text">{t.header.inicio}</span>
           </a>
         </li>

       <li>
         <a href="#" onClick={(e) => {e.preventDefault();
             navigate('/proyectos-colombia');}}>
           <span className="nav-icon">{<FaBuilding />}</span>
           <span className="nav-text">{t.proyectos.colombia || 'Proyectos Colombia'}</span>
         </a>
       </li>

       <li className={activeSection === 'expertos' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault();
             handleSectionNavigation('expertos');
           }}>
           <span className="nav-icon">{<FaUsers />}</span>
           <span className="nav-text">{t.header.nosotros}</span>
         </a>
       </li>

       <li className={activeSection === 'contactanos' ? "active" : ""}>
         <a href="#" onClick={(e) => {e.preventDefault();
             handleSectionNavigation('contactanos');
           }}>
           <span className="nav-icon">{<FaEnvelope />}</span>
           <span className="nav-text">{t.header.contactanos}</span>
         </a>
       </li>
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
      
      <section id="inicio">
        <Slider contenido={slidesUSA} namespace="usa"/>
      </section>

      

      <main className="usa-main">
        <div className='class-title'>

          <div className='title-ini'>
            <h2 className="classtitulo">{t.proyectos_usa.titulo}</h2>
            <h2  style={{color:'#ff6600'}} className="classtitulo">{t.proyectos_usa.titulo_2}</h2>
            <h2 className="classtitulo">{t.proyectos_usa.titulo_3}</h2>
          </div>
        
          <div className='dec-usa'>
                  <p className="clasdescripcion">{t.proyectos_usa.descripcion}</p>
                  <p style={{ fontWeight: 'bold'}} className="clasdescripcion">{t.proyectos_usa.descripcion_2}</p>
          </div>
        </div>
       
        

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