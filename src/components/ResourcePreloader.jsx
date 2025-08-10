import { useEffect } from 'react';

/**
 * Componente para precargar recursos críticos
 */
const ResourcePreloader = ({ resources = [] }) => {
  useEffect(() => {
    // Preload critical images
    resources.forEach(resource => {
      if (resource.type === 'image') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource.href;
        if (resource.type) {
          link.type = resource.type;
        }
        document.head.appendChild(link);
      } else if (resource.type === 'font') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.href = resource.href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      } else if (resource.type === 'style') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource.href;
        document.head.appendChild(link);
      }
    });

    // Cleanup function
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (resources.some(resource => resource.href === link.href)) {
          link.remove();
        }
      });
    };
  }, [resources]);

  return null; // This component doesn't render anything
};

export default ResourcePreloader;
