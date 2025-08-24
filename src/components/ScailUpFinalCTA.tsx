import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const ScailUpFinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => setIsVisible(true), 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleStrategicTalkClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-4 bg-scailup-gradient overflow-hidden ambient"
    >
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-scailup-blue/90 via-scailup-cyan/90 to-scailup-blue/90" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        
        {/* Main CTA Content */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Klaar om je agenda te vullen?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Geen lange contracten. Geen verborgen kosten. Wel meer gekwalificeerde afspraken.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <Button
              onClick={handleStrategicTalkClick}
              className="bg-white hover:bg-gray-100 text-scailup-black px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 focus-ring shadow-lg hover:shadow-xl group"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Plan een strategiegesprek
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          {/* Supporting Text */}
          <p className="text-white/80 text-sm max-w-md mx-auto">
            30 minuten gesprek • Gratis strategie-audit • Concrete aanbevelingen
          </p>
          
        </div>
        
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
    </section>
  );
};

export default ScailUpFinalCTA;