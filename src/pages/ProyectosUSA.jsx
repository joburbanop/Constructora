import React from 'react';
import Header from '../components/Header';
import ProyectoCard from '../components/ProyectoCardSimple';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';
import Footer from '../components/Footer';
import proyectos from '../utils/proyectos';
import { useNavigate } from 'react-router-dom';
import { handleProyectoNavigation } from '../utils/navigation';
import { useIdioma } from '../context/IdiomaContext';
import '../styles/ProyectosUSA.css';
import Slider from '../components/Slider';
import slidesUSA from '../utils/slidesUSA';

export default function ProyectosUSA() {
  const { t } = useIdioma();
  const navigate = useNavigate();

  const colombiaNavItems = (
     <ul className="nav-items">
         <li><a href="#" onClick={(e) => {e.preventDefault();
             navigate('/');}}>
           {t.header.inicio}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             navigate('/proyectos-usa');}}>
           {t.proyectos.usa || 'Proyectos USA'}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             const expertosSection = document.getElementById('expertos');
             if (expertosSection) {
               expertosSection.scrollIntoView({ behavior: 'smooth' });
             } else {
               navigateToSection('expertos', navigate);
             }
           }}>
           {t.header.nosotros}
         </a></li>

       <li><a href="#" onClick={(e) => {e.preventDefault();
             const contactoSection = document.getElementById('contactanos');
             if (window.location.pathname === '/proyectos-colombia' && contactoSection) {
               contactoSection.scrollIntoView({ behavior: 'smooth' });
             } else {
               navigate('/proyectos-colombia');
               setTimeout(() => {
                 const contactoSection = document.getElementById('contactanos');
                 if (contactoSection) {
                   contactoSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }, 500);
             }
           }}
         >
           {t.header.contactanos}
         </a></li>
     </ul>
   );

  const proyectosUSA = proyectos.filter(p => p.ubicacion === 'cope_coral');

  const handleNavigate = (proyecto) => {
    handleProyectoNavigation(proyecto, navigate);
  };

  return (
    <>
      <Header  
         customNavItems={colombiaNavItems}
         showDefaultNav={false}
      />
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

      <Expertos />
      <ContactoCTA />
      <Footer />
    </>
  );
}