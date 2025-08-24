import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  connectionSpeed: 'fast' | 'slow' | 'unknown';
}

export const usePerformanceOptimization = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowEndDevice: false,
    prefersReducedMotion: false,
    connectionSpeed: 'unknown'
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Detect low-end device based on hardware concurrency and memory
    const isLowEnd = navigator.hardwareConcurrency <= 2 || 
      // @ts-ignore - deviceMemory is experimental but useful
      (navigator.deviceMemory && navigator.deviceMemory <= 4);

    // Detect connection speed
    // @ts-ignore - connection is experimental but widely supported
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let connectionSpeed: 'fast' | 'slow' | 'unknown' = 'unknown';
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      connectionSpeed = ['4g', '3g'].includes(effectiveType) ? 'fast' : 'slow';
    }

    setMetrics({
      isLowEndDevice: isLowEnd,
      prefersReducedMotion: mediaQuery.matches,
      connectionSpeed
    });

    // Listen for changes in motion preferences
    const handleChange = (e: MediaQueryListEvent) => {
      setMetrics(prev => ({ ...prev, prefersReducedMotion: e.matches }));
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return metrics;
};