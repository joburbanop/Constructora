import React, { useState, useEffect } from "react";
import logo from "../assets/logo_CYL_SAS_LLC.webp";
import "../styles/Header.css";
import { flags, languages } from "../utils/idiomas";
import { useIdioma } from "../context/IdiomaContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useActiveSection from '../hooks/useActiveSection';
import { 
  FaBars, 
  FaTimes, 
  FaGlobe, 
  FaHome, 
  FaBuilding, 
  FaUsers, 
  FaEnvelope
} from "react-icons/fa";

const Header = ({
  customNavItems = null,
  showDefaultNav = true,
  customLogoAction = null,
  className = "",
}) => {
  const { idioma, setIdioma, t } = useIdioma();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const observedActive = useActiveSection(['inicio', 'ambito', 'proyectos', 'stats', 'proyectos-entregados', 'expertos', 'contactanos']);
  useEffect(() => {
    if (observedActive) setActiveSection(observedActive);
  }, [observedActive]);

  // Efecto para barra scrolleada + activeSection con IntersectionObserver
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleIdiomaChange = (e) => setIdioma(e.target.value);
  
  const toggleMenu = () => {
    setMenuAbierto((prev) => !prev);
    document.body.style.overflow = !menuAbierto ? 'hidden' : 'unset';
  };

  const handleLogoClick = () => {
    if (customLogoAction) {
      customLogoAction();
    } else {
      navigate("/", { state: { scrollToTop: true } });
    }
    setMenuAbierto(false);
    document.body.style.overflow = 'unset';
  };

  const irASeccionEnHome = (idSeccion) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { seccionDestino: idSeccion } });
    } else {
      const target = document.getElementById(idSeccion);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuAbierto(false);
    document.body.style.overflow = 'unset';
  };

  const renderNavItems = () => {
    if (customNavItems) {
      // Si estamos en la página todos-los-proyectos, no agregar el botón de proyectos
      if (location.pathname === "/todos-los-proyectos") {
        return customNavItems;
      }
      
      // Si hay customNavItems, agregar el botón de proyectos después de inicio
      const children = React.Children.toArray(customNavItems.props.children);
      
      // Encontrar el índice del botón de inicio (primer elemento)
      const inicioIndex = 0;
      
      // Crear el botón de proyectos
      const proyectosButton = (
        <li key="proyectos-nav-item" className="proyectos-nav-item">
          <Link
            to="/todos-los-proyectos"
            state={{ scrollToTop: true }}
            onClick={() => {
              setMenuAbierto(false);
              document.body.style.overflow = 'unset';
            }}
          >
            <span className="nav-icon"><FaBuilding /></span>
            <span className="nav-text">{t.header.proyectos}</span>
          </Link>
        </li>
      );
      
      // Insertar el botón de proyectos después del botón de inicio
      children.splice(inicioIndex + 1, 0, proyectosButton);
      
      return (
        <ul className="nav-items">
          {children}
        </ul>
      );
    }
    if (!showDefaultNav) return null;

    const navItems = [
      {
        to: "/",
        state: { scrollToTop: true },
        icon: <FaHome />,
        text: t.header.inicio,
        section: 'inicio'
      },
      {
        to: "/todos-los-proyectos",
        state: { scrollToTop: true },
        icon: <FaBuilding />,
        text: t.header.proyectos,
        section: 'proyectos'
      },
      {
        to: "/",
        state: { seccionDestino: "stats" },
        icon: <FaUsers />,
        text: t.header.nosotros,
        section: 'nosotros'
      },
      {
        to: "/",
        state: { seccionDestino: "expertos" },
        icon: <FaEnvelope />,
        text: t.header.contactanos,
        section: 'contactanos'
      }
    ];

    return (
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <li key={index} className={item.section === activeSection ? "active" : ""}>
            <Link
              to={item.to}
              state={item.state}
              onClick={() => {
                setMenuAbierto(false);
                document.body.style.overflow = 'unset';
              }}
              className={item.section === activeSection ? "active" : ""}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${className}`} id="header">
      <div className="header__container">
        <button
          className={`menu-toggle ${menuAbierto ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>

        <img
          src={logo}
          alt="Logo Constructora"
          className={`header__logo ${menuAbierto ? "hidden" : ""}`}
          onClick={handleLogoClick}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <nav className={`header__nav ${menuAbierto ? "active" : ""}`}>
          {renderNavItems()}
        </nav>

        <div className={`header__lang-select ${menuAbierto ? "hidden" : ""}`}>
          <div className="lang-select-wrapper">
            <FaGlobe className="lang-icon" />
            <select value={idioma} onChange={handleIdiomaChange}>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {flags[lang.code]} {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Overlay para cerrar menú en móvil */}
      {menuAbierto && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
