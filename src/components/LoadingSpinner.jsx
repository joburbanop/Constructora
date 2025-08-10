import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-text">Cargando...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
