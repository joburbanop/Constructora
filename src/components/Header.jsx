import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";
import { flags, languages } from '../utils/idiomas';

const Header = () => {
  const [idioma, setIdioma] = useState("es");

  const handleIdiomaChange = (e) => {
    setIdioma(e.target.value);
    // Aquí podrías disparar lógica de traducción global
  };

  return (
    <header className="header animate-fadeInDown">
      <div className="header__container">
        <img src={logo} alt="Logo Constructora" className="header__logo" />
        <nav className="header__nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </nav>
        <div className="header__lang-select">
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
