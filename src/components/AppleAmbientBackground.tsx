
import { useEffect, useRef } from 'react';

const AppleAmbientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = (size: string, position: { x: string; y: string }, opacity: number, duration: number) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full blur-sm';
      particle.style.width = size;
      particle.style.height = size;
      particle.style.left = position.x;
      particle.style.top = position.y;
      particle.style.background = `radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, transparent 70%)`;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * duration}s`;
      container.appendChild(particle);
      return particle;
    };

    // Create subtle particles
    const particles = [
      createParticle('1px', { x: '10%', y: '20%' }, 0.3, 8),
      createParticle('1px', { x: '80%', y: '30%' }, 0.2, 12),
      createParticle('1px', { x: '30%', y: '60%' }, 0.4, 10),
      createParticle('1px', { x: '70%', y: '80%' }, 0.25, 15),
      createParticle('2px', { x: '50%', y: '40%' }, 0.15, 20),
      createParticle('1px', { x: '20%', y: '90%' }, 0.35, 9),
      createParticle('1px', { x: '90%', y: '10%' }, 0.2, 11),
      createParticle('1px', { x: '60%', y: '70%' }, 0.3, 14),
    ];

    return () => {
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-60" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
      
      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: 'scanline 25s linear infinite',
            top: '0%'
          }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            animation: 'scanline 30s linear infinite',
            animationDelay: '10s',
            top: '0%'
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { 
              transform: translateY(0) scale(1);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-20px) scale(1.1);
              opacity: 0.8;
            }
          }
          
          @keyframes scanline {
            0% { transform: translateY(-100vh); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `
      }} />
    </>
  );
};

export default AppleAmbientBackground;
