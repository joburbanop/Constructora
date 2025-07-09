import React from "react";
import Header from "../components/Header";
import Hero from '../components/Slider';
import ProjectInfo from '../components/ProjectInfo';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import { useIdioma } from '../context/IdiomaContext';
import Button from '../components/Button';
import proyectos from "../utils/proyectos";
import coralLogo from '../assets/coral.png';
import { useNavigate } from 'react-router-dom';
import { navigateToSection } from '../utils/navigation';
import Expertos from '../components/Expertos';
import ContactoCTA from '../components/ContactoCTA';

const ProyectosUSA = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  
  // Filtrar proyectos de USA
  const proyectosUSA = proyectos.filter(p => p.ubicacion === 'usa');
  const proyecto = proyectosUSA[0];

  // Navegación específica para USA
  const usaNavItems = (
    <ul>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          {t.header.inicio}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/proyectos-colombia');
          }}
        >
          {t.proyectos.colombia_title || 'Proyectos Colombia'}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const expertosSection = document.getElementById('expertos');
            if (expertosSection) {
              expertosSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigateToSection('expertos', navigate);
            }
          }}
        >
          {t.header.nosotros}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const contactoSection = document.getElementById('contactanos');
            if (window.location.pathname === '/proyectos-usa' && contactoSection) {
              contactoSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/proyectos-usa');
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
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <Header 
        customNavItems={usaNavItems}
        showDefaultNav={false}
      />
      <Hero
        imagen={proyecto.imagen}
        titulo={t.proyectos.usa || "Proyectos en Estados Unidos"}
        subtitulo={t.proyectos.coral_desc || "Una gran oportunidad de inversión"}
      />
      <main>
        <ProjectInfo
          nombre={t.proyectos[proyecto.titulo]}
          subtitulo={t.proyectos.coral_subtitulo}
          descripcion={t.proyectos.coral_info}
          logo={coralLogo}
        />
        <ProjectDetails
          area={t.proyectos.coral_area}
          precio={t.proyectos.coral_precio}
          ubicacion={t.proyectos.coral_ubicacion}
          pdf={proyecto.pdf}
        />
      </main>
     
      <Expertos />
      <ContactoCTA />
      <Footer />
    </>
  );
};

export default ProyectosUSA; 