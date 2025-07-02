/**
 * Utilidades para manejar la navegación de manera consistente
 */

/**
 * Maneja la navegación de proyectos de manera inteligente
 * @param {Object} proyecto - Objeto del proyecto
 * @param {Function} navigate - Función de navegación de React Router
 */
export const handleProyectoNavigation = (proyecto, navigate) => {
  // Proyectos próximamente - no hacer nada
  if (proyecto.titulo === 'sanmiguel_titulo' || proyecto.titulo === 'marbella_titulo') {
    return;
  }
  
  // Navegación específica por proyecto
  if (proyecto.titulo === 'coral_titulo') {
    navigate('/proyectos-usa');
    return;
  }
  
  // Enlaces externos - solo si es un enlace real (no '#')
  if (proyecto.enlace && proyecto.enlace !== '#') {
    window.open(proyecto.enlace, '_blank', 'noopener,noreferrer');
    return;
  }
  
  // Navegación interna por ubicación
  if (proyecto.ubicacion === 'jamundi_colombia') {
    navigate('/proyectos-colombia');
  } else if (proyecto.ubicacion === 'usa') {
    navigate('/proyectos-usa');
  }
};

/**
 * Navega a una sección específica en la página Home
 * @param {string} sectionId - ID de la sección
 * @param {Function} navigate - Función de navegación de React Router
 */
export const navigateToSection = (sectionId, navigate) => {
  navigate('/');
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}; 