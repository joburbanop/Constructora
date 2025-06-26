import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/Header.css";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
