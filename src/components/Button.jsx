import React from "react";
import "../styles/Button.css";

const Button = ({ children, onClick, className = "", style, ...props }) => (
  <button
    className={`custom-btn ${className}`}
    onClick={onClick}
    style={style}
    {...props}
  >
    {children}
  </button>
);

export default Button;
