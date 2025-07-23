import React, { useState } from 'react';
import { useIdioma } from '../context/IdiomaContext';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn, MdHomeWork, MdLocationCity, MdStoreMallDirectory, MdSearch, MdClear } from 'react-icons/md';
import '../styles/SearchFilters.css';

const SearchFilters = () => {
  const { t } = useIdioma();
  const navigate = useNavigate();
  
  const [filtros, setFiltros] = useState({
    ubicacion: '',
    tipoProyecto: ''
  });

  // Opciones de ubicación
  const ubicaciones = [
    { value: 'jamundi_colombia', label: t.proyectos?.jamundi_colombia || 'Jamundí, Colombia' },
    { value: 'cope_coral', label: t.proyectos?.cope_coral || 'Cope Coral, Florida' },
    { value: 'san_jose', label: t.proyectos?.san_jose || 'San Jose, San Pedro' }
  ];

  // Opciones de tipo de proyecto
  const tiposProyecto = [
    { value: 'condominio', label: t.proyectos?.condominio || 'Condominio', icon: <MdHomeWork /> },
    { value: 'urbanizacion', label: t.proyectos?.urbanizacion || 'Urbanización', icon: <MdLocationCity /> },
    { value: 'locales', label: t.proyectos?.locales || 'Locales', icon: <MdStoreMallDirectory /> }
  ];

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleBuscar = () => {
    // Navegar a la página de todos los proyectos con los filtros aplicados
    navigate('/todos-los-proyectos', { 
      state: { 
        filtros: filtros,
        scrollToTop: true 
      } 
    });
  };

  const handleLimpiar = () => {
    setFiltros({
      ubicacion: '',
      tipoProyecto: ''
    });
  };

  return (
    <section className="search-filters-section">
      <div className="search-filters-content">
            {/* Título */}
            <div className="search-title">
             
              <p>{t.search?.subtitulo || 'Selecciona la ubicación y el tipo de proyecto que deseas'}</p>
            </div>

            {/* Filtros */}
            <div className="filters-row">
              {/* Filtro de ubicación */}
              <div className="filter-group">
                <label className="filter-label">
                  <MdLocationOn className="filter-icon" />
                  {t.search?.ubicacion || 'Ubicación'}
                </label>
                <select
                  value={filtros.ubicacion}
                  onChange={(e) => handleFiltroChange('ubicacion', e.target.value)}
                  className="filter-select"
                >
                  <option value="">{t.search?.seleccionar_ubicacion || 'Selecciona una ubicación'}</option>
                  {ubicaciones.map((ubicacion) => (
                    <option key={ubicacion.value} value={ubicacion.value}>
                      {ubicacion.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro de tipo de proyecto */}
              <div className="filter-group">
                <label className="filter-label">
                  <MdHomeWork className="filter-icon" />
                  {t.search?.tipo_proyecto || 'Tipo de proyecto'}
                </label>
                <select
                  value={filtros.tipoProyecto}
                  onChange={(e) => handleFiltroChange('tipoProyecto', e.target.value)}
                  className="filter-select"
                >
                  <option value="">{t.search?.seleccionar_tipo || 'Selecciona un tipo'}</option>
                  {tiposProyecto.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botones */}
              <div className="filter-buttons">
                <button 
                  onClick={handleBuscar}
                  className="btn-buscar"
                  disabled={!filtros.ubicacion && !filtros.tipoProyecto}
                >
                  <MdSearch />
                  <span>{t.search?.buscar || 'Buscar'}</span>
                </button>
                
                <button 
                  onClick={handleLimpiar}
                  className="btn-limpiar"
                >
                  <MdClear />
                  <span>{t.search?.limpiar || 'Limpiar filtros'}</span>
                </button>
              </div>
            </div>

           
          </div>
    </section>
  );
};

export default SearchFilters; 