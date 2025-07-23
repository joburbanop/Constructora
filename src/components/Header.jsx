import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";
import { flags, languages } from "../utils/idiomas";
import { useIdioma } from "../context/IdiomaContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
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

  // Efecto para detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Detectar sección activa
      const sections = ['inicio', 'ambito', 'proyectos', 'stats', 'proyectos-entregados', 'expertos', 'contactanos'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          // Si estamos en la sección de stats, marcar como 'nosotros'
          if (sections[i] === 'stats') {
            setActiveSection('nosotros');
          } 
          // Si estamos en la sección de expertos, marcar como 'contactanos'
          else if (sections[i] === 'expertos') {
            setActiveSection('contactanos');
          } else {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    if (customNavItems) return customNavItems;
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
