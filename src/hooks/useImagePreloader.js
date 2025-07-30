import { useEffect, useState } from 'react';

const useImagePreloader = (imageUrls) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setLoading(false);
      return;
    }

    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, url]));
            resolve(url);
          };
          img.onerror = () => {
            console.warn(`Failed to preload image: ${url}`);
            reject(url);
          };
          img.src = url;
        });
      });

      try {
        await Promise.allSettled(promises);
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setLoading(false);
      }
    };

    preloadImages();
  }, [imageUrls]);

  return { loadedImages, loading };
};

export default useImagePreloader; 