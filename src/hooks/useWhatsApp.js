import { useIdioma } from '../context/IdiomaContext';

export const useWhatsApp = () => {
  const { idioma } = useIdioma();
  
  const openWhatsApp = (customMessage = null) => {
    const phoneNumber = '+573234708860';
    
    // Mensaje profesional según el idioma
    const defaultMessage = idioma === 'es' 
      ? 'Hola! Me interesa conocer más sobre sus proyectos inmobiliarios. ¿Podrían brindarme información detallada sobre sus opciones disponibles?'
      : 'Hello! I am interested in learning more about your real estate projects. Could you provide me with detailed information about your available options?';
    
    const message = customMessage || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  return { openWhatsApp };
}; 