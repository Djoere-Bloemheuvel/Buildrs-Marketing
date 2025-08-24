import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Set current path on mount and listen for changes
    setCurrentPath(window.location.pathname);
    
    // Check if we're on kenniscentrum page and set header visible immediately
    if (window.location.pathname.startsWith('/kenniscentrum')) {
      setIsVisible(true);
    }
    
    // SIMPLIFIED SCROLL HANDLER - geen over-throttling meer
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isKenniscentrum = window.location.pathname.startsWith('/kenniscentrum');
      
      // Header altijd zichtbaar op kenniscentrum pagina's
      if (isKenniscentrum) {
        setIsVisible(true);
        return;
      }
      
      const triggerHeight = window.location.pathname === '/' ? 100 : 80;
      const shouldBeVisible = scrollY > triggerHeight;
      
      // Direct state update - geen ref complexity
      setIsVisible(shouldBeVisible);
    };

    // Listen for navigation changes (for Astro)
    const handleNavigation = () => {
      if (typeof window !== 'undefined') {
        setCurrentPath(window.location.pathname);
        // Check if we navigated to kenniscentrum and make header visible
        if (window.location.pathname.startsWith('/kenniscentrum')) {
          setIsVisible(true);
        }
      }
    };

    // Add event listeners - ALLEEN passive scroll voor performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('popstate', handleNavigation);
      }
    };
  }, []); // Empty dependency array to prevent double runs

  const navItems = [
    { label: 'Services', href: '#services', path: '/' },
    { label: 'AI Automations', href: '/ai-automations', path: '/ai-automations' },
    { label: 'Custom AI SaaS', href: '/custom-ai-saas', path: '/custom-ai-saas' },
    { label: 'Consultancy', href: '/consultancy', path: '/consultancy' },
    { label: 'Autonomous AI Agents', href: '/autonomous-ai-agents', path: '/autonomous-ai-agents' },
    { label: 'Kenniscentrum', href: '/kenniscentrum', path: '/kenniscentrum' },
    { label: 'Aanpak', href: '#approach', path: '/' },
    { label: 'Contact', href: '#contact', path: '/' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    // Check for exact page matches
    if (item.path === currentPath && item.path !== '/') {
      return true;
    }
    // Check for kenniscentrum subpages
    if (item.path === '/kenniscentrum' && currentPath.startsWith('/kenniscentrum')) {
      return true;
    }
    // Check for homepage sections
    return currentPath === '/' && item.path === '/';
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Handle subpage navigation
    if (item.path !== '/') {
      window.location.href = item.href;
      return;
    }

    // For homepage sections, scroll to anchor if on homepage
    if (currentPath === '/' && item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href.startsWith('#')) {
      // Navigate to homepage first, then scroll
      window.location.href = `/${item.href}`;
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ 
        opacity: 0, 
        y: -8,
        pointerEvents: 'none'
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -8,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut"
      }}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Glassmorphic container */}
      <div
        className="w-full border-b border-white/10 backdrop-blur-xl bg-black/70"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Buildrs Logo */}
            <div className="text-white font-bold text-xl tracking-wider font-mono">
              <a href="/" className="bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">
                BUILDRS
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                if (item.path !== '/') {
                  // Render as links for subpages
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`transition-colors duration-200 text-sm font-medium ${
                        isActive(item)
                          ? 'text-white border-b-2 border-white/50 pb-1'
                          : 'text-premium-silver hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }

                // Render as buttons for homepage sections
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`transition-colors duration-200 text-sm font-medium cursor-pointer ${
                      isActive(item)
                        ? 'text-white border-b-2 border-white/50 pb-1'
                        : 'text-premium-silver hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 text-sm px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
                variant="outline"
                onClick={() => handleNavClick({ label: 'Contact', href: '#contact', path: '/' })}
              >
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden overflow-hidden"
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
              marginTop: isMobileMenuOpen ? 16 : 0
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
            style={{
              willChange: 'height, opacity'
            }}
          >
            <nav className="flex flex-col space-y-3 pt-2 border-t border-white/10">
              {navItems.map((item) => {
                if (item.path !== '/') {
                  // Render as links for subpages
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`transition-colors duration-200 text-sm py-2 ${
                        isActive(item)
                          ? 'text-white font-semibold'
                          : 'text-premium-silver hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                // Render as buttons for homepage sections
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`transition-colors duration-200 text-sm py-2 text-left ${
                      isActive(item)
                        ? 'text-white font-semibold'
                        : 'text-premium-silver hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <Button
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 text-sm px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 w-full mt-2"
                variant="outline"
                onClick={() => {
                  handleNavClick({ label: 'Contact', href: '#contact', path: '/' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default ScrollHeader;