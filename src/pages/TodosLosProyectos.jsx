import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbSimple from "../components/BreadcrumbSimple";
import Footer from "../components/Footer";
import Expertos from "../components/Expertos";
import ContactoCTA from "../components/ContactoCTA";
import WhatsAppFloat from "../components/WhatsAppFloat";
import proyectos from "../utils/proyectos";
import { useIdioma } from '../context/IdiomaContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleProyectoNavigation } from '../utils/navigation';
import { MdLocationOn, MdLocationCity, MdHomeWork, MdStoreMallDirectory } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/TodosLosProyectos.css';
import renderRincon from '../assets/render_rincon.png';
import renderSanMiguel from '../assets/render_san_miguel.png';
import renderQuintas from '../assets/render_quintas.png';

const TodosLosProyectos = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const location = useLocation();
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [ubicacionFiltro, setUbicacionFiltro] = useState('todas');

  // Efecto para manejar scroll hacia arriba
  useEffect(() => {
    const scrollToTop = location.state?.scrollToTop;
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.state]);

  // Obtener renders para el hero slider
  const renders = [
    renderRincon,
    renderSanMiguel, 
    renderQuintas
  ];

  const iconosTipo = {
    urbanizacion: MdLocationCity,
    condominio: MdHomeWork,
    locales: MdStoreMallDirectory
  };

  // Filtros disponibles
  const filtros = [
    { id: 'todos', label: t.todos_proyectos?.todos || 'Todos' },
    { id: 'condominio', label: t.proyectos.condominio },
    { id: 'urbanizacion', label: t.proyectos.urbanizacion },
    { id: 'locales', label: t.proyectos.locales }
  ];

  const ubicaciones = [
    { id: 'todas', label: t.todos_proyectos?.todas_ubicaciones || 'Todas las ubicaciones' },
    { id: 'jamundi_colombia', label: t.proyectos.jamundi_colombia },
    { id: 'cope_coral', label: t.proyectos.cope_coral },
    { id: 'san_jose', label: t.proyectos.san_jose }
  ];

  // Filtrar proyectos
  const proyectosFiltrados = proyectos.filter(proy => {
    const cumpleFiltro = filtroActivo === 'todos' || proy.tipo === filtroActivo;
    const cumpleUbicacion = ubicacionFiltro === 'todas' || proy.ubicacion === ubicacionFiltro;
    return cumpleFiltro && cumpleUbicacion;
  });

  const isProyectoProximamente = (titulo) => {
    return titulo === 'sanmiguel_titulo' || titulo === 'marbella_titulo';
  };

  // Navegación personalizada para esta página
  const navItems = (
    <ul className="nav-items">
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
          {t.proyectos.colombia || 'Colombia'}
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/proyectos-usa');
          }}
        >
          {t.proyectos.usa || 'Estados Unidos'}
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
            if (contactoSection) {
              contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t.header.contactanos}
        </a>
      </li>
    </ul>
  );

  console.log('TodosLosProyectos component rendering');

  return (
    <div className="todos-proyectos-container">
      <Header 
        customNavItems={navItems}
        showDefaultNav={false}
      />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />
      
      {/* Hero Slider */}
      <section className="hero-slider">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          speed={1200}
          loop
          className="hero-swiper"
        >
          {renders.map((render, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="slide-bg"
                style={{
                  backgroundImage: `url(${render})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 35%',
                }}
              >
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h1 className="hero-title">
                      {t.todos_proyectos?.hero_titulo || 'NUESTROS PROYECTOS'}
                    </h1>
                    <h2 className="hero-subtitle">
                      {t.todos_proyectos?.hero_subtitulo || 'Descubre todas nuestras opciones'}
                    </h2>
                    <p className="hero-description">
                      {t.todos_proyectos?.hero_descripcion || 'Explora nuestra cartera completa de proyectos en Colombia y Estados Unidos'}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="todos-proyectos-main">
        {/* Filtros */}
        <section className="filtros-section">
          <div className="filtros-container">
            <div className="filtros-grupo">
              <h3>{t.todos_proyectos?.filtro_tipo || 'Tipo de proyecto'}</h3>
              <div className="filtros-botones">
                {filtros.map(filtro => (
                  <button
                    key={filtro.id}
                    className={`filtro-btn ${filtroActivo === filtro.id ? 'activo' : ''}`}
                    onClick={() => setFiltroActivo(filtro.id)}
                  >
                    {filtro.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filtros-grupo">
              <h3>{t.todos_proyectos?.filtro_ubicacion || 'Ubicación'}</h3>
              <div className="filtros-botones">
                {ubicaciones.map(ubicacion => (
                  <button
                    key={ubicacion.id}
                    className={`filtro-btn ${ubicacionFiltro === ubicacion.id ? 'activo' : ''}`}
                    onClick={() => setUbicacionFiltro(ubicacion.id)}
                  >
                    {ubicacion.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contador de resultados */}
        <div className="resultados-info">
          <p>
            {t.todos_proyectos?.mostrando || 'Mostrando'} {proyectosFiltrados.length} {t.todos_proyectos?.de_proyectos || 'de proyectos'}
          </p>
        </div>

        {/* Grid de proyectos */}
        <section className="proyectos-grid-section">
          <div className="proyectos-grid">
            {proyectosFiltrados.map((proy, idx) => (
              <div className="proyecto-card" key={idx}>
                <span 
                  className="proyecto-etiqueta" 
                  style={{background: proy.etiquetaColor}}
                >
                  {t.proyectos[proy.tipo]}
                </span>
                
                <div className="proyecto-img-wrap">
                  <img src={proy.imagen} alt={t.proyectos[proy.titulo]} className="proyecto-img" />
                </div>
                
                <div className="proyecto-info">
                  <div className="proyecto-titulo-row">
                    <span className="icono-circular-titulo">
                      {iconosTipo[proy.icono] && React.createElement(iconosTipo[proy.icono], { 
                        size: 32, 
                        color: proy.iconoColor || '#222' 
                      })}
                    </span>
                    <h3 className="proyecto-nombre">{t.proyectos[proy.titulo]}</h3>
                  </div>
                  
                  <p className="proyecto-desc">{t.proyectos[proy.descripcion]}</p>
                  
                  <div className="proyecto-ubicacion">
                    <span className="proyecto-ubicacion-icon">
                      <MdLocationOn style={{ 
                        color: '#ff6600', 
                        fontSize: '1.2em', 
                        marginRight: '0.2em', 
                        verticalAlign: 'middle' 
                      }} />
                    </span>
                    <span>{t.proyectos[proy.ubicacion]}</span>
                  </div>
                  
                  <button
                    className={`proyecto-btn ${isProyectoProximamente(proy.titulo) ? 'proximamente' : 'ver-mas'}`}
                    onClick={() => handleProyectoNavigation(proy, navigate)}
                    disabled={isProyectoProximamente(proy.titulo)}
                  >
                    {isProyectoProximamente(proy.titulo) 
                      ? t.proyectos.proximamente 
                      : t.proyectos.boton || 'Ver más'
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mensaje cuando no hay resultados */}
        {proyectosFiltrados.length === 0 && (
          <div className="sin-resultados">
            <h3>{t.todos_proyectos?.sin_resultados_titulo || 'No se encontraron proyectos'}</h3>
            <p>{t.todos_proyectos?.sin_resultados_desc || 'Intenta cambiar los filtros para ver más opciones'}</p>
            <button 
              className="limpiar-filtros-btn"
              onClick={() => {
                setFiltroActivo('todos');
                setUbicacionFiltro('todas');
              }}
            >
              {t.todos_proyectos?.limpiar_filtros || 'Limpiar filtros'}
            </button>
          </div>
        )}
      </main>

      <div className="expertos-section-todos">
        <Expertos />
      </div>
      <ContactoCTA />
      <section id="contactanos" className="footer-section">
        <Footer />
      </section>
      <WhatsAppFloat />
    </div>
  );
};

export default TodosLosProyectos; 