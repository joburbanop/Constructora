import { useCallback, useRef } from 'react';

/**
 * Hook para throttling de callbacks
 * @param {Function} callback - Función a ejecutar
 * @param {number} delay - Delay en milisegundos
 * @param {Object} options - Opciones adicionales
 * @returns {Function} - Función throttled
 */
export const useThrottledCallback = (callback, delay, options = {}) => {
  const { leading = true, trailing = true } = options;
  const lastCall = useRef(0);
  const lastCallTimer = useRef(null);

  return useCallback((...args) => {
    const now = Date.now();

    if (leading && now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    } else if (trailing) {
      if (lastCallTimer.current) {
        clearTimeout(lastCallTimer.current);
      }
      lastCallTimer.current = setTimeout(() => {
        lastCall.current = Date.now();
        callback(...args);
      }, delay - (now - lastCall.current));
    }
  }, [callback, delay, leading, trailing]);
};

/**
 * Hook para throttling usando requestAnimationFrame
 * @param {Function} callback - Función a ejecutar
 * @returns {Function} - Función throttled con RAF
 */
export const useRAFThrottledCallback = (callback) => {
  const rafId = useRef(null);

  return useCallback((...args) => {
    if (rafId.current) {
      return;
    }

    rafId.current = requestAnimationFrame(() => {
      callback(...args);
      rafId.current = null;
    });
  }, [callback]);
};
