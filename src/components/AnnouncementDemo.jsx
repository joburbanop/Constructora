import React, { useState } from 'react';
import AnnouncementModal from './AnnouncementModal';
import useAnnouncementModal from '../hooks/useAnnouncementModal';
import renderRincon from '../assets/render_rincon.png';
import coralRender from '../assets/coral_render.png';
import marbella from '../assets/Marbella.png';

const AnnouncementDemo = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Diferentes tipos de modales para demostración
  const welcomeModal = useAnnouncementModal('demo-welcome', {
    showOnFirstVisit: false,
    showOnReload: false
  });

  const promotionModal = useAnnouncementModal('demo-promotion', {
    showOnFirstVisit: false,
    showOnReload: false
  });

  const notificationModal = useAnnouncementModal('demo-notification', {
    showOnFirstVisit: false,
    showOnReload: false
  });

  const projectModal = useAnnouncementModal('demo-project', {
    showOnFirstVisit: false,
    showOnReload: false
  });

  const handleShowModal = (modalType) => {
    setActiveModal(modalType);
    switch (modalType) {
      case 'welcome':
        welcomeModal.forceShow();
        break;
      case 'promotion':
        promotionModal.forceShow();
        break;
      case 'notification':
        notificationModal.forceShow();
        break;
      case 'project':
        projectModal.forceShow();
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="announcement-demo">
      <div className="demo-header">
        <h2>Demostración de Anuncios Modales</h2>
        <p>Haz clic en los botones para ver diferentes tipos de anuncios</p>
      </div>

      <div className="demo-buttons">
        <button 
          className="demo-btn welcome-btn"
          onClick={() => handleShowModal('welcome')}
        >
          🏠 Modal de Bienvenida
        </button>

        <button 
          className="demo-btn promotion-btn"
          onClick={() => handleShowModal('promotion')}
        >
          🎉 Modal de Promoción
        </button>

        <button 
          className="demo-btn notification-btn"
          onClick={() => handleShowModal('notification')}
        >
          🔔 Modal de Notificación
        </button>

        <button 
          className="demo-btn project-btn"
          onClick={() => handleShowModal('project')}
        >
          🏗️ Modal de Proyecto
        </button>
      </div>

      {/* Modal de Bienvenida */}
      <AnnouncementModal
        isOpen={welcomeModal.isOpen}
        onClose={() => {
          welcomeModal.closeModal();
          handleCloseModal();
        }}
        title="¡Bienvenido a Construct!"
        message="Descubre nuestros proyectos inmobiliarios de alta calidad en Colombia y Estados Unidos. Construimos sueños, creamos hogares."
        imageUrl={renderRincon}
        showLogo={true}
        autoClose={false}
        showCloseButton={true}
        showOverlay={true}
        animation="bounceIn"
        size="medium"
      />

      {/* Modal de Promoción */}
      <AnnouncementModal
        isOpen={promotionModal.isOpen}
        onClose={() => {
          promotionModal.closeModal();
          handleCloseModal();
        }}
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

      {/* Modal de Notificación */}
      <AnnouncementModal
        isOpen={notificationModal.isOpen}
        onClose={() => {
          notificationModal.closeModal();
          handleCloseModal();
        }}
        title="Nuevo Proyecto Disponible"
        message="Acabamos de lanzar nuestro nuevo proyecto 'Quintas de Marbella'. ¡Conócelo ahora!"
        imageUrl={marbella}
        showLogo={false}
        autoClose={true}
        autoCloseTime={4000}
        showCloseButton={true}
        showOverlay={true}
        animation="fadeIn"
        size="large"
      />

      {/* Modal de Proyecto */}
      <AnnouncementModal
        isOpen={projectModal.isOpen}
        onClose={() => {
          projectModal.closeModal();
          handleCloseModal();
        }}
        title="Coral Mall - Nuevo Desarrollo"
        message="Presentamos nuestro nuevo centro comercial en una ubicación privilegiada. Inversión segura y rentable."
        imageUrl={coralRender}
        showLogo={true}
        autoClose={false}
        showCloseButton={true}
        showOverlay={true}
        animation="scaleIn"
        size="medium"
      />

      <style jsx>{`
        .announcement-demo {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .demo-header {
          margin-bottom: 2rem;
        }

        .demo-header h2 {
          color: #333;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .demo-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .demo-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .demo-btn {
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .welcome-btn {
          background: linear-gradient(135deg, #ff6600, #ff914d);
          color: white;
        }

        .promotion-btn {
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
        }

        .notification-btn {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
        }

        .project-btn {
          background: linear-gradient(135deg, #6f42c1, #e83e8c);
          color: white;
        }

        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .demo-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .announcement-demo {
            padding: 1rem;
          }

          .demo-buttons {
            grid-template-columns: 1fr;
          }

          .demo-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementDemo; 