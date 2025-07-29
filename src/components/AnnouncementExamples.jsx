import React from 'react';
import AnnouncementModal from './AnnouncementModal';
import useAnnouncementModal from '../hooks/useAnnouncementModal';

// Ejemplo de diferentes tipos de anuncios
const AnnouncementExamples = () => {
  // Modal de bienvenida (se muestra solo en la primera visita)
  const welcomeModal = useAnnouncementModal('welcome', {
    showOnFirstVisit: true,
    showOnReload: false,
    autoClose: false
  });

  // Modal de promoción (se muestra en cada recarga)
  const promotionModal = useAnnouncementModal('promotion', {
    showOnFirstVisit: false,
    showOnReload: true,
    autoClose: true,
    autoCloseTime: 6000
  });

  // Modal de notificación (se puede forzar)
  const notificationModal = useAnnouncementModal('notification', {
    showOnFirstVisit: false,
    showOnReload: false,
    autoClose: true,
    autoCloseTime: 4000
  });

  return (
    <div>
      {/* Modal de bienvenida */}
      <AnnouncementModal
        isOpen={welcomeModal.isOpen}
        onClose={welcomeModal.closeModal}
        title="¡Bienvenido a Construct!"
        message="Descubre nuestros proyectos inmobiliarios de alta calidad en Colombia y Estados Unidos. Construimos sueños, creamos hogares."
        showLogo={true}
        autoClose={false}
        showCloseButton={true}
        showOverlay={true}
        animation="bounceIn"
        size="medium"
      />

      {/* Modal de promoción */}
      <AnnouncementModal
        isOpen={promotionModal.isOpen}
        onClose={promotionModal.closeModal}
        title="¡Oferta Especial!"
        message="Aprovecha nuestros descuentos especiales en proyectos seleccionados. ¡No te pierdas esta oportunidad única!"
        showLogo={true}
        autoClose={true}
        autoCloseTime={6000}
        showCloseButton={true}
        showOverlay={true}
        animation="slideIn"
        size="small"
      />

      {/* Modal de notificación */}
      <AnnouncementModal
        isOpen={notificationModal.isOpen}
        onClose={notificationModal.closeModal}
        title="Nuevo Proyecto Disponible"
        message="Acabamos de lanzar nuestro nuevo proyecto 'Quintas de Marbella'. ¡Conócelo ahora!"
        showLogo={false}
        autoClose={true}
        autoCloseTime={4000}
        showCloseButton={true}
        showOverlay={true}
        animation="fadeIn"
        size="large"
      />
    </div>
  );
};

export default AnnouncementExamples; 