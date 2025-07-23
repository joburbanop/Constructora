import Header from '../components/Header';
import Slider from '../components/Slider';
import AmbitoAccion from '../components/AmbitoAccion';
import ProyectosEnMarcha from '../components/ProyectosEnMarcha';
import RendersDestacados from '../components/RendersDestacados';
import ProyectosEntregados from '../components/ProyectosEntregados';
import Expertos from '../components/Expertos';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StatsSection from '../components/StatsSection';
import slides from '../utils/slides';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import proyectos from '../utils/proyectos';
import { useIdioma } from '../context/IdiomaContext';
import SectionDivider from '../components/SectionDivider';
import '../styles/Home.css';

export default function Home() {
  const { t } = useIdioma();
  const location = useLocation();
  
  // Proyectos en marcha (filtrados)
  const titulosDeseados = ['rincon_titulo', 'coral_titulo', 'marbella_titulo', 'sanmiguel_titulo'];
  const proyectosFiltrados = proyectos.filter(p => titulosDeseados.includes(p.titulo));
  
  // Proyectos entregados (filtrados)
  const titulosDeseados2 = ['cana_title', 'palmeras_title', 'caña_dulce_title', 'puertas_sol_title'];
  const proyectosFiltrados2 = proyectos.filter(p => titulosDeseados2.includes(p.titulo));

  // Efecto para manejar navegación y scroll
  useEffect(() => {
    const destino = location.state?.seccionDestino;
    const scrollToTop = location.state?.scrollToTop;

    if (scrollToTop) {
      // Aumentar el delay para asegurar que la página se haya cargado completamente
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    }

    if (destino) {
      setTimeout(() => {
        const seccion = document.getElementById(destino);
        if (seccion) {
          seccion.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);

  // Efecto para hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    // Si no hay estado específico, hacer scroll hacia arriba por defecto
    if (!location.state?.seccionDestino && !location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <Header />
      
      {/* Hero Section con Slider */}
      <section className="hero-section">
        <Slider contenido={slides} namespace="home" />
      </section>

      {/* Sección Ámbito de Acción */}
      <section id="ambito" className="section-ambito">
        <div className="section-container">
          <AmbitoAccion />
        </div>
      </section>

      {/* Sección Proyectos en Marcha */}
      <section id="proyectos" className="section-proyectos">
        <div className="section-container">
          <div className="section-header">
            <SectionDivider textKey="proyectos" icon={<i className="fas fa-building"></i>} />
            <div className="section-title-container">
              <h2 className="section-title">{t.proyectos.titulo}</h2>
              <p className="section-subtitle">{t.proyectos.subtitulo}</p>
            </div>
          </div>
          <ProyectosEnMarcha proyectosFiltrados={proyectosFiltrados} />
        </div>
      </section>


      {/* Sección de Estadísticas */}
      <section className="section-stats">
        <StatsSection />
      </section>

      {/* Sección Proyectos Entregados */}
      <section id="proyectos-entregados" className="section-entregados">
        <div className="section-container">
          <div className="section-header">
            <SectionDivider textKey="proyectos" />
            <div className="section-title-container">
              <h2 className="section-title">{t.entregados.titulo}</h2>
              <p className="section-subtitle">{t.entregados.subtitulo || 'Proyectos completados con éxito'}</p>
            </div>
          </div>
          <ProyectosEnMarcha proyectosFiltrados={proyectosFiltrados2} />
        </div>
      </section>

      {/* Sección Expertos */}
      <section id="expertos" className="section-expertos">
        <div className="section-container">
          <Expertos />
        </div>
      </section>

      {/* Footer */}
      <section id="contactanos" className="footer-section">
        <Footer />
      </section>

      {/* WhatsApp Float */}
      <WhatsAppFloat />
    </div>
  );
}
