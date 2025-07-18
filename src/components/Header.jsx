import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";
import { flags, languages } from "../utils/idiomas";
import { useIdioma } from "../context/IdiomaContext";
import { useNavigate } from "react-router-dom";

const Header = ({
  customNavItems = null,
  showDefaultNav = true,
  customLogoAction = null,
  className = "",
}) => {
  const { idioma, setIdioma, t } = useIdioma();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleIdiomaChange = (e) => setIdioma(e.target.value);
  const toggleMenu = () => setMenuAbierto((prev) => !prev);

  const handleLogoClick = () => {
    customLogoAction ? customLogoAction() : navigate("/");
    setMenuAbierto(false);
  };

  const renderNavItems = () => {
    if (customNavItems) return customNavItems;
    if (!showDefaultNav) return null;

    return (
      <ul className="nav-items">
        <li>
          <a
            href="#header"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuAbierto(false);
            }}
          >
            {t.header.inicio}
          </a>
        </li>
        <li>
          <a href="#proyectos" onClick={() => setMenuAbierto(false)}>
            {t.header.proyectos}
          </a>
        </li>
        <li>
          <a href="#nosotros" onClick={() => setMenuAbierto(false)}>
            {t.header.nosotros}
          </a>
        </li>
        <li>
          <a
            href="#contactanos"
            onClick={(e) => {
              e.preventDefault();
              const contactoSection = document.getElementById("contactanos");
              contactoSection
                ? contactoSection.scrollIntoView({ behavior: "smooth" })
                : (window.location.href = "/#contactanos");
              setMenuAbierto(false);
            }}
          >
            {t.header.contactanos}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <header className={`header animate-fadeInDown ${className}`} id="header">
      <div className="header__container">
            {/*Hamburguesa a la izquierda */}
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
              {/* Menú de navegación */}
            <nav className={`header__nav ${menuAbierto ? "activo" : ""}`}>
              {renderNavItems()}
            </nav>

            {/*Logo al centro */}
            <img
              src={logo}
              alt="Logo Constructora"
              className="header__logo"
              style={{ cursor: "pointer"}}
              onClick={handleLogoClick}
            />

          

            {/* Selector de idioma a la derecha */}
            <div  className="header__lang-select">
              <select value={idioma} onChange={handleIdiomaChange}>
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {flags[lang.code]} {lang.label}
                  </option>
                ))}
              </select>
            </div>

      </div>
    </header>
  );
};

export default Header;