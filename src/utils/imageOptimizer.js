// Utilidades para optimización de imágenes

// Función para comprimir imagen usando Canvas
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calcular nuevas dimensiones manteniendo aspect ratio
      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Dibujar imagen comprimida
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convertir a blob con calidad especificada
      canvas.toBlob(resolve, 'image/webp', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Función para crear thumbnail
export const createThumbnail = (file, size = 300) => {
  return compressImage(file, 0.6, size);
};

// Función para optimizar imagen existente
export const optimizeExistingImage = (imageUrl, quality = 0.8) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob(resolve, 'image/webp', quality);
    };
    
    img.src = imageUrl;
  });
};

// Función para detectar si la imagen está optimizada
export const isImageOptimized = (imageUrl) => {
  return imageUrl.includes('.webp') || imageUrl.includes('optimized');
};

// Función para obtener el tamaño de archivo en formato legible
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Función para preload de imágenes críticas
export const preloadCriticalImages = (imageUrls) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve; // Resolver incluso si hay error
      img.src = url;
    });
  });
  
  return Promise.all(promises);
}; 