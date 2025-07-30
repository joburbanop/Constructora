import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar la navegación de secciones
 * @param {string[]} sections - Array de IDs de secciones a monitorear
 * @param {number} offset - Offset para el scroll (default: 100)
 * @returns {Object} - activeSection y handleSectionNavigation
 */
export const useSectionNavigation = (sections = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState(sections[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    activeSection,
    handleSectionNavigation
  };
}; 