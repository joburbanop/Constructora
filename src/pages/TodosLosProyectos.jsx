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
import { MdLocationOn, MdLocationCity, MdHomeWork, MdStoreMallDirectory, MdFilterList, MdClear, MdSearch, MdInfo } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/TodosLosProyectos.css';
import renderRincon from '../assets/render_rincon.png';
import renderSanMiguel from '../assets/render_san_miguel.png';
import renderQuintas from '../assets/render_quintas.png';
import { FaHome, FaBuilding, FaUsers, FaEnvelope } from 'react-icons/fa';
import agentes from '../utils/expertos';
import Slider from '../components/Slider';
const TodosLosProyectos = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  const location = useLocation();
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [ubicacionFiltro, setUbicacionFiltro] = useState('todas');
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [lastFilterChange, setLastFilterChange] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const nombresDeseados = ['yulei','sofia','ludivia','lina'];
   
  const asesores = agentes.filter(({ clave }) =>
  nombresDeseados.includes(clave)
  );
  // Efecto para hacer scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Efecto para manejar scroll hacia arriba y filtros desde SearchFilters
  useEffect(() => {
    const scrollToTop = location.state?.scrollToTop;
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Aplicar filtros si vienen desde SearchFilters
    const filtrosDesdeSearch = location.state?.filtros;
    if (filtrosDesdeSearch) {
      if (filtrosDesdeSearch.ubicacion) {
        setUbicacionFiltro(filtrosDesdeSearch.ubicacion);
      }
      if (filtrosDesdeSearch.tipoProyecto) {
        setFiltroActivo(filtrosDesdeSearch.tipoProyecto);
      }
    }
  }, [location.state]);

  // Efecto para detectar sección activa
  useEffect(() => {
    const updateOnScroll = () => {
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
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cambiar filtros sin efectos de carga
  const handleFilterChange = (type, value) => {
    if (type === 'tipo') {
      setFiltroActivo(value);
    } else {
      setUbicacionFiltro(value);
    }
  };

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
    { id: 'todos', label: t.todos_proyectos?.todos || 'Todos', count: proyectos.length },
    { id: 'condominio', label: t.proyectos.condominio, count: proyectos.filter(p => p.tipo === 'condominio').length },
    { id: 'urbanizacion', label: t.proyectos.urbanizacion, count: proyectos.filter(p => p.tipo === 'urbanizacion').length },
    { id: 'locales', label: t.proyectos.locales, count: proyectos.filter(p => p.tipo === 'locales').length },
    { id: 'casas', label: t.proyectos.casas, count: proyectos.filter(p => p.tipo === 'casas').length }
  ];

  const ubicaciones = [
    { id: 'todas', label: t.todos_proyectos?.todas_ubicaciones || 'Todas las ubicaciones', count: proyectos.length },
    { id: 'jamundi_colombia', label: t.proyectos.jamundi_colombia, count: proyectos.filter(p => p.ubicacion === 'jamundi_colombia').length },
    { id: 'rozo_palmira', label: t.proyectos.rozo_palmira, count: proyectos.filter(p => p.ubicacion === 'rozo_palmira').length },
    { id: 'san_pedro', label: t.proyectos.san_pedro, count: proyectos.filter(p => p.ubicacion === 'san_pedro').length },
    { id: 'cope_coral', label: t.proyectos.cope_coral, count: proyectos.filter(p => p.ubicacion === 'cope_coral').length }
  ];

  // Filtrar proyectos
  const proyectosFiltrados = proyectos.filter(proy => {
    const cumpleFiltro = filtroActivo === 'todos' || proy.tipo === filtroActivo;
    const cumpleUbicacion = ubicacionFiltro === 'todas' || proy.ubicacion === ubicacionFiltro;
    return cumpleFiltro && cumpleUbicacion;
  });

  const isProyectoProximamente = (titulo) => {
    return ;
  };

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navegación personalizada para esta página
  const navItems = (
    <ul className="nav-items">
      <li className={activeSection === 'inicio' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <span className="nav-icon">{<FaHome />}</span>
          <span className="nav-text">{t.header.inicio}</span>
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
          <span className="nav-icon">{<FaBuilding />}</span>
          <span className="nav-text">{t.proyectos.colombia || 'Colombia'}</span>
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
          <span className="nav-icon">{<FaBuilding />}</span>
          <span className="nav-text">{t.proyectos.usa || 'Estados Unidos'}</span>
        </a>
      </li>
      <li className={activeSection === 'expertos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('expertos');
          }}
        >
          <span className="nav-icon">{<FaUsers />}</span>
          <span className="nav-text">{t.header.nosotros}</span>
        </a>
      </li>
      <li className={activeSection === 'contactanos' ? "active" : ""}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation('contactanos');
          }}
        >
          <span className="nav-icon">{<FaEnvelope />}</span>
          <span className="nav-text">{t.header.contactanos}</span>
        </a>
      </li>
    </ul>
  );

 

  return (
    <div className="todos-proyectos-container">
      <Header 
        customNavItems={navItems}
        showDefaultNav={false}
      />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbSimple />
      
      {/* Hero Slider */}
      <section id="inicio" className="hero-slider">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            }
          }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          effect="fade"
          speed={800}
          loop
          className="hero-swiper"
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
        >
          {renders.map((render, idx) => (
            <SwiperSlide key={idx}>
              <div className="slide-bg">
                <img 
                  src={render} 
                  alt="Proyecto inmobiliario" 
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  decoding="async" 
                  className="slide-bg-img"
                />
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
        {/* Header de la sección con toggle de filtros */}
        <div className="section-header">
          <div className="section-header-content">
            <h2 className="section-title">
              <MdSearch className="section-icon" />
              {t.todos_proyectos?.titulo_seccion || 'Explorar Proyectos'}
            </h2>
            <button 
              className="toggle-filters-btn"
              onClick={() => setShowFilters(!showFilters)}
              aria-label={showFilters ? t.todos_proyectos?.ocultar_filtros : t.todos_proyectos?.mostrar_filtros}
            >
              <MdFilterList />
              {showFilters ? t.todos_proyectos?.ocultar_filtros : t.todos_proyectos?.mostrar_filtros}
            </button>
          </div>
        </div>

        {/* Indicador de filtros aplicados */}
        {(filtroActivo !== 'todos' || ubicacionFiltro !== 'todas') && (
          <section className="filtros-aplicados-section">
            <div className="filtros-aplicados-container">
              <div className="filtros-aplicados-info">
                <MdInfo className="filtros-info-icon" />
                <span className="filtros-aplicados-texto">
                  {t.todos_proyectos?.filtros_aplicados || 'Filtros aplicados:'}
                </span>
                {filtroActivo !== 'todos' && (
                  <span className="filtro-tag">
                    {filtros.find(f => f.id === filtroActivo)?.label}
                    <span className="filtro-count">({filtros.find(f => f.id === filtroActivo)?.count})</span>
                  </span>
                )}
                {ubicacionFiltro !== 'todas' && (
                  <span className="filtro-tag">
                    {ubicaciones.find(u => u.id === ubicacionFiltro)?.label}
                    <span className="filtro-count">({ubicaciones.find(u => u.id === ubicacionFiltro)?.count})</span>
                  </span>
                )}
              </div>
              <button 
                className="limpiar-filtros-btn"
                onClick={() => {
                  setFiltroActivo('todos');
                  setUbicacionFiltro('todas');
                }}
                aria-label="Limpiar todos los filtros"
              >
                <MdClear />
                {t.todos_proyectos?.limpiar_filtros || 'Limpiar filtros'}
              </button>
            </div>
          </section>
        )}

        {/* Filtros colapsables */}
        <section className={`filtros-section ${showFilters ? 'show' : 'hide'}`}>
          <div className="filtros-container">
            <div className="filtros-grupo">
              <h3 className="filtro-grupo-titulo">
                <MdLocationCity className="filtro-icon" />
                {t.todos_proyectos?.filtro_tipo || 'Tipo de proyecto'}
              </h3>
              <div className="filtros-botones">
                {filtros.map(filtro => (
                  <button
                    key={filtro.id}
                    className={`filtro-btn ${filtroActivo === filtro.id ? 'activo' : ''}`}
                    onClick={() => handleFilterChange('tipo', filtro.id)}
                    aria-pressed={filtroActivo === filtro.id}
                  >
                    <span className="filtro-label">{filtro.label}</span>
                    <span className="filtro-count-badge">{filtro.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="filtros-grupo">
              <h3 className="filtro-grupo-titulo">
                <MdLocationOn className="filtro-icon" />
                {t.todos_proyectos?.filtro_ubicacion || 'Ubicación'}
              </h3>
              <div className="filtros-botones">
                {ubicaciones.map(ubicacion => (
                  <button
                    key={ubicacion.id}
                    className={`filtro-btn ${ubicacionFiltro === ubicacion.id ? 'activo' : ''}`}
                    onClick={() => handleFilterChange('ubicacion', ubicacion.id)}
                    aria-pressed={ubicacionFiltro === ubicacion.id}
                  >
                    <span className="filtro-label">{ubicacion.label}</span>
                    <span className="filtro-count-badge">{ubicacion.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contador de resultados con animación */}
        <div className="resultados-info">
          <div className="resultados-stats">
            
            <span className="resultados-text">
              {t.todos_proyectos?.mostrando || 'Mostrando'} {proyectosFiltrados.length} {t.todos_proyectos?.de_proyectos || 'de proyectos'}
            </span>
          </div>
        </div>

        {/* Grid de proyectos */}
        <section className="proyectos-grid-section">
          <div className="proyectos-grid">
            {proyectosFiltrados.map((proy, idx) => (
              <div 
                className="proyecto-card" 
                key={idx}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span 
                  className="proyecto-etiqueta" 
                  style={{background: proy.etiquetaColor}}
                >
                  {t.proyectos[proy.tipo]}
                </span>
                
                <div className="proyecto-img-wrap">
                  <img 
                    src={proy.imagen} 
                    alt={t.proyectos[proy.titulo]} 
                    className="proyecto-img"
                    loading="lazy"
                  />
                  <div className="proyecto-overlay">
                    <div className="proyecto-overlay-content">
                      <span className="overlay-text">Ver detalles</span>
                    </div>
                  </div>
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
                    aria-label={isProyectoProximamente(proy.titulo) ? 'Proyecto próximamente disponible' : `Ver detalles de ${t.proyectos[proy.titulo]}`}
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
            <div className="sin-resultados-icon">
              <MdSearch />
            </div>
            <h3>{t.todos_proyectos?.sin_resultados_titulo || 'No se encontraron proyectos'}</h3>
            <p>{t.todos_proyectos?.sin_resultados_desc || 'Intenta cambiar los filtros para ver más opciones'}</p>
            <button 
              className="limpiar-filtros-btn"
              onClick={() => {
                setFiltroActivo('todos');
                setUbicacionFiltro('todas');
              }}
            >
              <MdClear />
              {t.todos_proyectos?.limpiar_filtros || 'Limpiar filtros'}
            </button>
          </div>
        )}
      </main>

      <div id="expertos" className="expertos-section-todos">
        <Expertos listaFiltrada={asesores} />
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