import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdHome, MdChevronRight, MdLocationOn } from 'react-icons/md';

const BreadcrumbSimple = () => {
  const location = useLocation();
  
  // Obtener información del estado de navegación si está disponible
  const navigationState = location.state || {};
  const previousPath = navigationState.previousPath || null;

  // Función para generar el breadcrumb inteligente basado en la ruta
  const generateSmartBreadcrumb = () => {
    const pathname = location.pathname;
    const segments = pathname.split('/').filter(segment => segment !== '');

    // Mapeo completo de rutas con sus etiquetas y rutas padre
    const routeMap = {
      'proyectos-colombia': {
        label: 'Colombia',
        parent: null,
        icon: <MdLocationOn />
      },
      'proyectos-usa': {
        label: 'Estados Unidos',
        parent: null,
        icon: <MdLocationOn />
      },
      'todos-los-proyectos': {
        label: 'Nuestros Proyectos',
        parent: null,
        icon: <MdLocationOn />
      },
      'rincon-del-lago': {
        label: 'Rincón del Lago',
        parent: 'proyectos-colombia', // Viene de Colombia
        icon: <MdLocationOn />
      },
      'coral-mall': {
        label: 'Coral Mall',
        parent: 'proyectos-usa', // Viene de Estados Unidos
        icon: <MdLocationOn />
      },
                        'cana-dulce': {
                    label: 'Caña Dulce',
                    parent: 'proyectos-colombia', // Viene de Colombia
                    icon: <MdLocationOn />
                  },
                  'puertas-sol': {
                    label: 'Puertas del Sol',
                    parent: 'proyectos-colombia', // Viene de Colombia
                    icon: <MdLocationOn />
      }
    };

    // Lógica para determinar la ruta padre basada en el contexto y navegación
    const determineParentRoute = (currentSegment, allSegments) => {
      // Si es un proyecto específico, determinar de dónde viene
      if (currentSegment === 'rincon-del-lago') {
        // Siempre mostrar Colombia como padre para proyectos colombianos
        return 'proyectos-colombia';
      }
      
      if (currentSegment === 'coral-mall') {
        // Si hay información de navegación previa, usarla
        if (previousPath) {
          if (previousPath.includes('todos-los-proyectos')) {
            return 'todos-los-proyectos';
          } else if (previousPath.includes('proyectos-usa')) {
            return 'proyectos-usa';
          }
        }
        // Si el usuario vino de todos-los-proyectos, mostrar esa ruta
        if (allSegments.includes('todos-los-proyectos')) {
          return 'todos-los-proyectos';
        }
        // Por defecto, viene de Estados Unidos
        return 'proyectos-usa';
      }
      
      if (currentSegment === 'cana-dulce') {
        // Siempre mostrar Colombia como padre para proyectos colombianos
        return 'proyectos-colombia';
      }
      
      if (currentSegment === 'puertas-sol') {
        // Siempre mostrar Colombia como padre para proyectos colombianos
        return 'proyectos-colombia';
      }
      
      return null;
    };

    const breadcrumbs = [
      {
        label: 'Inicio',
        path: '/',
        icon: <MdHome />
      }
    ];

    let currentPath = '';
    const breadcrumbPath = [];

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      if (routeMap[segment]) {
        const route = routeMap[segment];
        
        // Determinar la ruta padre dinámicamente
        const dynamicParent = determineParentRoute(segment, segments);
        
        // Si tiene padre dinámico, agregar el padre primero (si no está ya agregado)
        if (dynamicParent && !breadcrumbPath.includes(dynamicParent)) {
          const parentRoute = routeMap[dynamicParent];
          if (parentRoute) {
            breadcrumbs.push({
              label: parentRoute.label,
              path: `/${dynamicParent}`,
              icon: parentRoute.icon
            });
            breadcrumbPath.push(dynamicParent);
          }
        }
        
        // Agregar la ruta actual
        breadcrumbs.push({
          label: route.label,
          path: currentPath,
          icon: route.icon
        });
        breadcrumbPath.push(segment);
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateSmartBreadcrumb();

  if (breadcrumbs.length <= 1) {
    return null; // No mostrar breadcrumb en la página principal
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderBottom: '2px solid #e2e8f0',
      padding: '15px 0',
      width: '100%',
      marginTop: '90px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '16px',
          color: '#64748b',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              flexShrink: 0
            }}>
              {index === breadcrumbs.length - 1 ? (
                // Página actual
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 12px',
                  color: '#ffffff',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #ff6600 0%, #ff8533 100%)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(255, 102, 0, 0.3)'
                }}>
                  {breadcrumb.icon}
                  {breadcrumb.label}
                </span>
              ) : (
                // Enlaces navegables
                <Link 
                  to={breadcrumb.path} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 12px',
                    color: '#64748b',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    border: '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ff6600';
                    e.target.style.background = 'rgba(255, 102, 0, 0.1)';
                    e.target.style.borderColor = '#ff6600';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#64748b';
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {breadcrumb.icon}
                  {breadcrumb.label}
                </Link>
              )}
              
              {/* Separador */}
              {index < breadcrumbs.length - 1 && (
                <span style={{ 
                  color: '#94a3b8', 
                  fontSize: '18px',
                  margin: '0 5px'
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

export default BreadcrumbSimple; 