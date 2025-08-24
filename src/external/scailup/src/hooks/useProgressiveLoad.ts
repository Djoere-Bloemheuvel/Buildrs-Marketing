import { useEffect, useState } from 'react';

export const useProgressiveLoad = (delay: number = 0) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

export const useStaggeredLoad = (index: number, baseDelay: number = 50) => {
  return useProgressiveLoad(index * baseDelay);
};
