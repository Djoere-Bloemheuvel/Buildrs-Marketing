
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // Track loading performance
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.log('Performance Metrics:', {
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
        });
      }

      // Track route changes
      let routeChangeStart = performance.now();
      
      const observer = new MutationObserver(() => {
        const routeChangeEnd = performance.now();
        const routeChangeTime = routeChangeEnd - routeChangeStart;
        
        if (routeChangeTime > 100) { // Only log significant route changes
          console.log('Route change time:', Math.round(routeChangeTime), 'ms');
        }
        
        routeChangeStart = routeChangeEnd;
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measurePerformance);
    } else {
      measurePerformance();
    }

    // Clean up
    return () => {
      document.removeEventListener('DOMContentLoaded', measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
