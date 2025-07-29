import { useState, useEffect } from 'react';

const useAnnouncementModal = (announcementId, options = {}) => {
  const {
    showOnFirstVisit = true,
    showOnReload = false,
    autoClose = false,
    autoCloseTime = 5000,
    localStorageKey = 'announcementModal'
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const storageKey = `${localStorageKey}_${announcementId}`;
    const hasShownBefore = localStorage.getItem(storageKey);

    // Determinar si debe mostrar el modal
    let shouldShow = false;

    if (showOnFirstVisit && !hasShownBefore) {
      shouldShow = true;
    } else if (showOnReload) {
      shouldShow = true;
    }

    if (shouldShow) {
      // Pequeño delay para asegurar que la página esté completamente cargada
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        
        // Marcar como mostrado en localStorage
        if (showOnFirstVisit) {
          localStorage.setItem(storageKey, 'true');
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [announcementId, showOnFirstVisit, showOnReload, localStorageKey]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const resetModal = () => {
    const storageKey = `${localStorageKey}_${announcementId}`;
    localStorage.removeItem(storageKey);
    setHasShown(false);
    setIsOpen(false);
  };

  const forceShow = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    hasShown,
    closeModal,
    resetModal,
    forceShow
  };
};

export default useAnnouncementModal; 