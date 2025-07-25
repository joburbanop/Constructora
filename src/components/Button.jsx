import React from "react";
import { useWhatsApp } from '../hooks/useWhatsApp';
import "../styles/Button.css";

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  style, 
  whatsapp = false,
  ...props 
}) => {
  const { openWhatsApp } = useWhatsApp();
  
  const handleClick = (e) => {
    if (whatsapp) {
      e.preventDefault();
      openWhatsApp();
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`custom-btn ${className} ${whatsapp ? 'whatsapp-btn' : ''}`}
      onClick={handleClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
