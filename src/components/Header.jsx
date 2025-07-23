import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";
import { flags, languages } from "../utils/idiomas";
import { useIdioma } from "../context/IdiomaContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

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

  const handleIdiomaChange = (e) => setIdioma(e.target.value);
  const toggleMenu = () => setMenuAbierto((prev) => !prev);

  const handleLogoClick = () => {
    customLogoAction ? customLogoAction() : navigate("/");
    setMenuAbierto(false);
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
  };

  const renderNavItems = () => {
    if (customNavItems) return customNavItems;
    if (!showDefaultNav) return null;

    return (
      <ul className="nav-items">
        <li>
          <Link
            to="/"
            state={{ scrollToTop: true }}
            onClick={() => setMenuAbierto(false)}>
            {t.header.inicio}
          </Link>
        </li>
        <li>
          <Link to="/proyectos-colombia" onClick={() => setMenuAbierto(false)}>
            {t.header.proyectos}
          </Link>
        </li>
        <li className="buttom-item" >
          <Link
              to="/"
              state={{ seccionDestino: "nosotros" }}
              onClick={() => setMenuAbierto(false)}>
                 {t.header.nosotros}
          </Link>
        </li>
        <li  className="buttom-item">
          <Link
            to="/"
              state={{ seccionDestino: "contactanos" }}
              onClick={() => setMenuAbierto(false)}>
            {t.header.contactanos}
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header className={`header animate-fadeInDown ${className}`} id="header">
      <div className="header__container">
        <button
          className={`menu-toggle ${menuAbierto ? "ocultar-en-movil" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <img
          src={logo}
          alt="Logo Constructora"
          className={`header__logo ${menuAbierto ? "ocultar-en-movil" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        />

        <nav className={`header__nav ${menuAbierto ? "activo" : "ocultar"}`}>
          <ul className="nav-items">
            {renderNavItems()}
            {menuAbierto && (
              <li>
                <button
                  className="cerrar-menu"
                  onClick={() => setMenuAbierto(false)}
                >
                  ✖
                </button>
              </li>
            )}
          </ul>
        </nav>

        <div
          className={`header__lang-select ${
            menuAbierto ? "ocultar-en-movil" : ""
          }`}
        >
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
