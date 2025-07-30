import React, { useState, useEffect, useCallback } from 'react';
import performanceMonitor from '../utils/performanceMonitor';

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoizar la función de actualización para evitar re-renders
  const updateMetrics = useCallback(() => {
    const currentMetrics = performanceMonitor.getMetrics();
    setMetrics(currentMetrics);
  }, []);

  useEffect(() => {
    // Actualizar métricas cada 5 segundos en lugar de 2
    const interval = setInterval(updateMetrics, 5000);
    
    // Actualizar inicialmente después de un delay
    const initialTimer = setTimeout(updateMetrics, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, [updateMetrics]);

  // Memoizar el toggle para evitar re-renders
  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  if (!metrics) return null;

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        📊 Performance
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      fontFamily: 'monospace',
      minWidth: '300px',
      maxHeight: '400px',
      overflow: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#00ff00' }}>🚀 Performance Monitor</h3>
        <button
          onClick={toggleVisibility}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ color: '#00ff00', fontWeight: 'bold' }}>📊 Core Web Vitals:</div>
        <div>Page Load: {metrics.pageLoadTime.toFixed(0)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ color: '#00ff00', fontWeight: 'bold' }}>🖼️ Images Loaded:</div>
        <div>{Object.keys(metrics.imageLoadTimes).length} images</div>
        {Object.entries(metrics.imageLoadTimes).slice(0, 3).map(([src, time]) => (
          <div key={src} style={{ fontSize: '10px', color: '#ccc' }}>
            {src.split('/').pop()}: {time.toFixed(0)}ms
          </div>
        ))}
      </div>

      <div style={{ fontSize: '10px', color: '#888' }}>
        Last update: {new Date(metrics.timestamp).toLocaleTimeString()}
      </div>

      <button
        onClick={() => {
          const report = performanceMonitor.generateReport();
          console.log('📈 Full Performance Report:', report);
        }}
        style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '10px',
          marginTop: '10px'
        }}
      >
        Generate Report
      </button>
    </div>
  );
};

export default PerformanceDashboard; 