
import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top on component mount (page load)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTop;
