import { useCallback, useRef } from 'react';

/**
 * Custom hook for throttling scroll events using requestAnimationFrame
 * Optimized for smooth performance across all devices
 */
export const useThrottledScroll = (callback: () => void, delay: number = 16) => {
  const timeoutRef = useRef<number | null>(null);
  const isThrottledRef = useRef<boolean>(false);
  
  const throttledCallback = useCallback(() => {
    // If already throttling, skip
    if (isThrottledRef.current) return;
    
    isThrottledRef.current = true;
    
    timeoutRef.current = requestAnimationFrame(() => {
      callback();
      isThrottledRef.current = false;
      timeoutRef.current = null;
    });
  }, [callback]);
  
  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      cancelAnimationFrame(timeoutRef.current);
      timeoutRef.current = null;
      isThrottledRef.current = false;
    }
  }, []);
  
  return { throttledCallback, cleanup };
};