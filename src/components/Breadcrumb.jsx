import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useIdioma } from '../context/IdiomaContext';
import { MdHome, MdChevronRight, MdLocationOn } from 'react-icons/md';

const Breadcrumb = ({ customPath = null }) => {
  const { t } = useIdioma();
  const location = useLocation();

  // Función para generar el path basado en la ubicación actual
  const generateBreadcrumbPath = () => {
    if (customPath) return customPath;

    const pathname = location.pathname;
    const segments = pathname.split('/').filter(segment => segment !== '');

    const breadcrumbMap = {
      'proyectos-colombia': {
        label: t.proyectos?.colombia || 'Colombia',
        path: '/proyectos-colombia'
      },
      'proyectos-usa': {
        label: t.proyectos?.usa || 'Estados Unidos',
        path: '/proyectos-usa'
      },
      'todos-los-proyectos': {
        label: t.todos_proyectos?.hero_titulo || 'Nuestros Proyectos',
        path: '/todos-los-proyectos'
      },
      'rincon-del-lago': {
        label: t.rincon_detalle?.titulo || 'Rincón del Lago',
        path: '/rincon-del-lago'
      },
      'coral-mall': {
        label: t.coral_detalle?.titulo || 'Coral Mall',
        path: '/coral-mall'
      }
    };

    const breadcrumbs = [
      {
        label: t.header?.inicio || 'Inicio',
        path: '/',
        icon: <MdHome />
      }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      if (breadcrumbMap[segment]) {
        breadcrumbs.push({
          label: breadcrumbMap[segment].label,
          path: currentPath,
          icon: <MdLocationOn />
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbPath();

  console.log('Breadcrumb component rendering:', {
    pathname: location.pathname,
    breadcrumbsLength: breadcrumbs.length,
    breadcrumbs: breadcrumbs
  });

  // No mostrar breadcrumb en la página principal
  if (breadcrumbs.length <= 1) {
    console.log('Breadcrumb not showing - only home page');
    return null;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderBottom: '1px solid #e2e8f0',
      padding: '12px 0',
      position: 'relative',
      zIndex: 10,
      width: '100%',
      marginTop: '90px' // Ajustar para el header fijo
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '14px',
          color: '#64748b',
          overflowX: 'auto'
        }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0
            }}>
              {index === breadcrumbs.length - 1 ? (
                // Último elemento (página actual)
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  color: '#ffffff',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #ff6600 0%, #ff8533 100%)',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {breadcrumb.icon}
                  </span>
                  <span>{breadcrumb.label}</span>
                </span>
              ) : (
                // Elementos navegables
                <Link 
                  to={breadcrumb.path} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 12px',
                    color: '#64748b',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ff6600';
                    e.target.style.background = 'rgba(255, 102, 0, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64748b';
                    e.target.style.background = 'transparent';
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {breadcrumb.icon}
                  </span>
                  <span>{breadcrumb.label}</span>
                </Link>
              )}
              
              {/* Separador */}
              {index < breadcrumbs.length - 1 && (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  color: '#94a3b8',
                  margin: '0 4px',
                  fontSize: '16px'
                }}>
                  <MdChevronRight />
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb; 