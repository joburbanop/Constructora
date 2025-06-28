import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";
import { flags, languages } from '../utils/idiomas';
import { useIdioma } from '../context/IdiomaContext';

const Header = () => {
  const { idioma, setIdioma, t } = useIdioma();

  const handleIdiomaChange = (e) => {
    setIdioma(e.target.value);
  };

  return (
    <header className="header animate-fadeInDown" id="header">
      <div className="header__container">
        <img src={logo} alt="Logo Constructora" className="header__logo" />
        <nav className="header__nav">
          <ul>
            <li>
              <a
                href="#header"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {t.header.inicio}
              </a>
            </li>
            <li><a href="#proyectos">{t.header.proyectos}</a></li>
            <li><a href="#nosotros">{t.header.nosotros}</a></li>
            <li><a href="#contactanos">{t.header.contactanos}</a></li>
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
