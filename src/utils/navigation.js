/**
 * Utilidades para manejar la navegación de manera consistente
 */

/**
 * Navega a una sección específica
 * @param {string} seccion - ID de la sección
 * @param {Function} navigate - Función de navegación de React Router
 */
export const navigateToSection = (seccion, navigate) => {
  navigate('/');
  setTimeout(() => {
    const target = document.getElementById(seccion);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

/**
 * Maneja la navegación de proyectos de manera inteligente
 * @param {Object} proyecto - Objeto del proyecto
 * @param {Function} navigate - Función de navegación de React Router
 */
export const handleProyectoNavigation = (proyecto, navigate) => {
  // Proyectos próximamente - no hacer nada
  
  
  // Navegación específica por proyecto
  if (proyecto.titulo === 'coral_titulo') {
    navigate('/coral-mall');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    return;
  }
  if (proyecto.titulo === 'rincon_titulo') {

  navigate('/rincon-del-lago');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
  if (proyecto.titulo === 'puertas_sol_title') {
  navigate('/puertas-sol');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'palmeras_title') {
  navigate('/palmeras-italia');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'caña_dulce_title') {
  navigate('/cana-dulce');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'cana_title') {
  navigate('/cana-brava');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'casa_usa_1_title') {
  navigate('/casa-usa-primera');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
  if (proyecto.titulo === 'casa_usa_2_title') {
  navigate('/casa-usa-segunda');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'terrenos_usa_title') {
  navigate('/terrenos-construccion');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
  if (proyecto.titulo === 'sanmiguel_titulo') {
  navigate('/san-miguel');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  return;
}
if (proyecto.titulo === 'marbella_titulo') {
  navigate('/quintas-marbella');
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
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
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  } else if (proyecto.ubicacion === 'cope_coral') {
    navigate('/proyectos-usa');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  }
};

 