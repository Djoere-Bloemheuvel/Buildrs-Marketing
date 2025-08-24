import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScailUpHeaderProps {
  showAlways?: boolean;
}

const ScailUpHeader = ({ showAlways = false }: ScailUpHeaderProps) => {
  const [isVisible, setIsVisible] = useState(showAlways);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Set current path on mount
    setCurrentPath(window.location.pathname);
    
    // Function to setup scroll listener
    const setupScrollListener = () => {
      const mainContainer = document.getElementById('main-content');
      
      if (mainContainer) {
        // Simplified scroll handler for header visibility
        const handleScroll = () => {
          const scrollY = mainContainer.scrollTop;
          const shouldBeVisible = showAlways || scrollY > 100; // Show always if prop is true
          setIsVisible(shouldBeVisible);
        };

        mainContainer.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
          mainContainer.removeEventListener('scroll', handleScroll);
        };
      } else {
        // Retry after a short delay if container not found yet
        setTimeout(setupScrollListener, 100);
      }
    };

    // Navigation change handler
    const handleNavigation = () => {
      if (typeof window !== 'undefined') {
        setCurrentPath(window.location.pathname);
      }
    };

    // Setup scroll listener with retry mechanism
    const cleanupScroll = setupScrollListener();
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleNavigation);
      }
    };
  }, []);

  const navItems = [
    { label: 'Services', href: '/services', path: '/services' },
    { label: 'Cases', href: '/cases', path: '/cases' },
    { label: 'Over ons', href: '/over-ons', path: '/over-ons' },
    { label: 'Contact', href: '/contact', path: '/contact' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    return item.path === currentPath;
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Navigate to page
    window.location.href = item.href;
  };

  const handleLogoClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/';
  };

  const handleCTAClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/contact';
  };

  return (
    <>
      {/* CSS to disable hover effects but preserve glassmorphism */}
      <style jsx global>{`
        header,
        header *,
        header button {
          transition: none !important;
        }
        
        header *:hover,
        header button:hover {
          background-color: transparent !important;
          box-shadow: none !important;
          transform: none !important;
          filter: none !important;
          border-color: inherit !important;
          color: inherit !important;
          opacity: inherit !important;
        }
        
        /* Preserve glassmorphism but make it much lighter */
        header {
          background: rgba(0, 0, 0, 0.05) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }
        
        header:hover {
          background: rgba(0, 0, 0, 0.05) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }
      `}</style>
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9999] border-b border-scailup-border/20 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ 
          transition: 'none',
          top: 0, 
          margin: 0, 
          padding: 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          background: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              
              {/* Logo */}
              <button
                onClick={handleLogoClick}
                className="flex items-center space-x-2 rounded-lg px-2 py-1"
                style={{ transition: 'none', outline: 'none' }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-scailup-gradient rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-sm sm:text-xl font-bold text-white">S</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">
                  ScailUp
                </span>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm font-medium rounded-lg ${
                      isActive(item)
                        ? 'text-scailup-blue bg-scailup-blue/10'
                        : 'text-scailup-gray'
                    }`}
                    style={{ transition: 'none', outline: 'none' }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Desktop CTA + Mobile Menu Button */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Desktop CTA Button */}
                <Button
                  onClick={handleCTAClick}
                  className="hidden md:inline-flex bg-scailup-gradient text-white px-3 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-semibold rounded-lg"
                  style={{ transition: 'none', outline: 'none' }}
                >
                  <span className="hidden lg:inline">Plan gesprek</span>
                  <span className="lg:hidden">Plan</span>
                  <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-1.5 sm:p-2 text-scailup-gray rounded-lg"
                  style={{ transition: 'none', outline: 'none' }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-scailup-border"
            >
              <div className="px-4 pt-16 sm:pt-20 pb-6">
                {/* Mobile Navigation */}
                <nav className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`block w-full text-left px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl focus-ring ${
                        isActive(item)
                          ? 'text-scailup-blue bg-scailup-blue/10 border border-scailup-blue/20'
                          : 'text-scailup-gray'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <Button
                  onClick={handleCTAClick}
                  className="w-full bg-scailup-gradient text-white px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold rounded-xl focus-ring"
                >
                  <span className="sm:hidden">Plan gesprek</span>
                  <span className="hidden sm:inline">Plan een strategiegesprek</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScailUpHeader;