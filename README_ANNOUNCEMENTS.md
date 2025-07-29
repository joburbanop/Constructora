# Sistema de Anuncios Modales - Construct

## 🎯 Descripción

He creado un sistema completo de anuncios modales profesional y reutilizable para tu aplicación Construct. Este sistema permite mostrar anuncios, notificaciones y mensajes importantes a los usuarios de manera elegante y efectiva.

## ✨ Características Principales

### 🎨 Diseño Profesional
- **Diseño moderno y elegante** con gradientes y sombras
- **Animaciones suaves** con múltiples opciones de entrada
- **Logo de la empresa** integrado automáticamente
- **Responsive design** que se adapta a todos los dispositivos

### 🔧 Totalmente Reutilizable
- **Configuración flexible** para diferentes tipos de anuncios
- **Hook personalizado** para manejo de estado
- **Persistencia inteligente** con localStorage
- **Múltiples tamaños** y animaciones disponibles

### 🚀 Funcionalidades Avanzadas
- **Auto-close** con indicador de progreso
- **Diferentes tipos de activación** (primera visita, recarga, manual)
- **Soporte para imágenes** de anuncios
- **Accesibilidad completa** con navegación por teclado

## 📁 Archivos Creados

```
src/
├── components/
│   ├── AnnouncementModal.jsx          # Componente principal
│   ├── AnnouncementExamples.jsx       # Ejemplos de uso
│   └── AnnouncementDemo.jsx           # Demostración interactiva
├── hooks/
│   └── useAnnouncementModal.js        # Hook personalizado
├── styles/
│   └── AnnouncementModal.css          # Estilos profesionales
└── components/
    └── AnnouncementModal.md           # Documentación completa
```

## 🚀 Cómo Usar

### 1. Uso Básico (Ya implementado en App.jsx)

```jsx
import AnnouncementModal from './components/AnnouncementModal';
import useAnnouncementModal from './hooks/useAnnouncementModal';

function App() {
  const modal = useAnnouncementModal('welcome', {
    showOnFirstVisit: true,
    showOnReload: false
  });

  return (
    <AnnouncementModal
      isOpen={modal.isOpen}
      onClose={modal.closeModal}
      title="¡Bienvenido a Construct!"
      message="Descubre nuestros proyectos inmobiliarios..."
      imageUrl={renderRincon}
      animation="bounceIn"
      size="medium"
    />
  );
}
```

### 2. Diferentes Tipos de Anuncios

#### Modal de Bienvenida (Primera Visita)
```jsx
const welcomeModal = useAnnouncementModal('welcome', {
  showOnFirstVisit: true,
  showOnReload: false,
  autoClose: false
});
```

#### Modal de Promoción (Cada Recarga)
```jsx
const promotionModal = useAnnouncementModal('promotion', {
  showOnFirstVisit: false,
  showOnReload: true,
  autoClose: true,
  autoCloseTime: 6000
});
```

#### Modal de Notificación (Manual)
```jsx
const notificationModal = useAnnouncementModal('notification', {
  showOnFirstVisit: false,
  showOnReload: false,
  autoClose: true,
  autoCloseTime: 4000
});

// Para mostrar manualmente
notificationModal.forceShow();
```

### 3. Configuraciones Disponibles

#### Props del Componente
- `isOpen` - Controla si el modal está abierto
- `onClose` - Función llamada al cerrar
- `title` - Título del anuncio
- `message` - Mensaje del anuncio
- `imageUrl` - URL de la imagen (opcional)
- `showLogo` - Muestra el logo de la empresa
- `autoClose` - Cierre automático
- `autoCloseTime` - Tiempo para auto-close (ms)
- `showCloseButton` - Muestra botón de cerrar
- `showOverlay` - Muestra overlay de fondo
- `animation` - Tipo de animación
- `size` - Tamaño del modal

#### Opciones de Animación
- `"fadeIn"` - Aparece con fade
- `"slideIn"` - Se desliza desde la izquierda
- `"scaleIn"` - Aparece escalando
- `"bounceIn"` - Aparece con rebote

#### Opciones de Tamaño
- `"small"` - 400px de ancho
- `"medium"` - 500px de ancho
- `"large"` - 600px de ancho

## 🎨 Personalización

### Cambiar Colores
Modifica las variables CSS en `src/styles/AnnouncementModal.css`:

```css
:root {
  --modal-primary-color: #ff6600;
  --modal-secondary-color: #ff914d;
  --modal-background: #ffffff;
  --modal-border-radius: 20px;
}
```

### Agregar Nuevas Animaciones
Añade nuevas animaciones en el archivo CSS:

```css
@keyframes myCustomAnimation {
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}
```

## 📱 Responsive Design

El componente se adapta automáticamente a:
- **Desktop** - Tamaño completo con todas las características
- **Tablet** - Ajustes de padding y tamaños
- **Mobile** - Diseño optimizado para pantallas pequeñas

## ♿ Accesibilidad

- **Navegación por teclado** - ESC para cerrar
- **Lectores de pantalla** - Textos alternativos incluidos
- **Contraste adecuado** - Cumple estándares WCAG
- **Reducción de movimiento** - Respeta preferencias del usuario

## 🔧 Mantenimiento

### Para Agregar Nuevos Anuncios

1. **Crear el hook**:
```jsx
const newModal = useAnnouncementModal('nuevo-anuncio', {
  showOnFirstVisit: true,
  autoClose: false
});
```

2. **Agregar el componente**:
```jsx
<AnnouncementModal
  isOpen={newModal.isOpen}
  onClose={newModal.closeModal}
  title="Tu título"
  message="Tu mensaje"
  // ... otras props
/>
```

### Para Modificar Comportamiento

- **Cambiar persistencia**: Modifica las opciones del hook
- **Cambiar estilos**: Edita `AnnouncementModal.css`
- **Cambiar animaciones**: Añade nuevas en el CSS

## 🎯 Casos de Uso Recomendados

1. **Bienvenida** - Primera visita del usuario
2. **Promociones** - Ofertas especiales y descuentos
3. **Notificaciones** - Nuevos proyectos o actualizaciones
4. **Eventos** - Lanzamientos y presentaciones
5. **Recordatorios** - Información importante

## 🚀 Próximas Mejoras

- [ ] **Sistema de plantillas** para anuncios comunes
- [ ] **Analytics integrado** para tracking de interacciones
- [ ] **A/B testing** para optimizar mensajes
- [ ] **Sistema de prioridades** para múltiples anuncios
- [ ] **Integración con CMS** para gestión de contenido

## 📞 Soporte

Si necesitas ayuda o tienes preguntas sobre el sistema de anuncios:

1. Revisa la documentación en `src/components/AnnouncementModal.md`
2. Consulta los ejemplos en `src/components/AnnouncementExamples.jsx`
3. Prueba la demostración en `src/components/AnnouncementDemo.jsx`

---

**¡El sistema está listo para usar!** 🎉

El modal de bienvenida ya está integrado en tu aplicación y se mostrará automáticamente en la primera visita de cada usuario. 