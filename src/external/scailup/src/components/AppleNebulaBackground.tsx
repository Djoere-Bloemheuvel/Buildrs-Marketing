
import { useEffect, useRef } from 'react';

const AppleNebulaBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create enhanced stardust particles with more variety
    const createStarDust = (size: string, position: { x: string; y: string }, opacity: number, duration: number, color: string) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full blur-[0.5px]';
      particle.style.width = size;
      particle.style.height = size;
      particle.style.left = position.x;
      particle.style.top = position.y;
      particle.style.background = color;
      particle.style.animation = `nebulaFloat ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * duration}s`;
      particle.style.opacity = opacity.toString();
      container.appendChild(particle);
      return particle;
    };

    // Enhanced nebula particles with more density and variety
    const particles = [
      // Dense micro stardust layer
      createStarDust('1px', { x: '12%', y: '18%' }, 0.7, 14, 'rgba(255,255,255,0.9)'),
      createStarDust('1px', { x: '88%', y: '12%' }, 0.5, 16, 'rgba(59,130,246,0.7)'),
      createStarDust('1px', { x: '28%', y: '72%' }, 0.8, 11, 'rgba(255,255,255,0.8)'),
      createStarDust('1px', { x: '78%', y: '88%' }, 0.4, 19, 'rgba(147,51,234,0.6)'),
      createStarDust('1px', { x: '42%', y: '32%' }, 0.6, 15, 'rgba(236,72,153,0.5)'),
      createStarDust('1px', { x: '68%', y: '58%' }, 0.9, 12, 'rgba(255,255,255,0.7)'),
      createStarDust('1px', { x: '8%', y: '62%' }, 0.5, 17, 'rgba(6,182,212,0.7)'),
      createStarDust('1px', { x: '92%', y: '38%' }, 0.7, 13, 'rgba(255,255,255,0.6)'),
      
      // Medium particles for depth
      createStarDust('1.5px', { x: '22%', y: '42%' }, 0.4, 18, 'rgba(59,130,246,0.4)'),
      createStarDust('1.5px', { x: '72%', y: '28%' }, 0.3, 21, 'rgba(147,51,234,0.3)'),
      createStarDust('1.5px', { x: '52%', y: '82%' }, 0.5, 16, 'rgba(236,72,153,0.4)'),
      
      // Larger ambient dots
      createStarDust('2px', { x: '35%', y: '25%' }, 0.2, 22, 'rgba(59,130,246,0.3)'),
      createStarDust('2px', { x: '65%', y: '75%' }, 0.15, 25, 'rgba(147,51,234,0.25)'),
      createStarDust('2px', { x: '48%', y: '92%' }, 0.25, 20, 'rgba(236,72,153,0.2)'),
      
      // Additional micro particles for richness
      createStarDust('0.5px', { x: '18%', y: '55%' }, 0.6, 10, 'rgba(255,255,255,0.8)'),
      createStarDust('0.5px', { x: '82%', y: '65%' }, 0.4, 13, 'rgba(6,182,212,0.6)'),
      createStarDust('0.5px', { x: '38%', y: '15%' }, 0.7, 11, 'rgba(255,255,255,0.9)'),
      createStarDust('0.5px', { x: '62%', y: '45%' }, 0.5, 14, 'rgba(147,51,234,0.4)'),
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
      {/* Enhanced stardust container */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-50" />
      
      {/* Dark fog gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      
      {/* Enhanced ambient nebula clouds with more layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-blue-500/12 to-cyan-400/8"
          style={{
            top: '5%',
            left: '15%',
            animation: 'nebulaCloud 28s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-purple-500/10 to-violet-400/6"
          style={{
            top: '55%',
            right: '10%',
            animation: 'nebulaCloud 35s ease-in-out infinite reverse',
            animationDelay: '8s'
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-br from-pink-500/8 to-rose-400/4"
          style={{
            bottom: '15%',
            left: '55%',
            animation: 'nebulaCloud 40s ease-in-out infinite',
            animationDelay: '12s'
          }}
        />
        {/* Additional smaller clouds for richness */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl bg-gradient-to-br from-emerald-500/6 to-teal-400/3"
          style={{
            top: '35%',
            left: '75%',
            animation: 'nebulaCloud 32s ease-in-out infinite',
            animationDelay: '15s'
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes nebulaFloat {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.3;
            }
            25% { 
              transform: translateY(-8px) translateX(3px) scale(1.05);
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-12px) translateX(-2px) scale(1.1);
              opacity: 1;
            }
            75% { 
              transform: translateY(-6px) translateX(-5px) scale(0.95);
              opacity: 0.6;
            }
          }
          
          @keyframes nebulaCloud {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.25;
            }
            33% { 
              transform: translateY(-15px) translateX(8px) scale(1.05);
              opacity: 0.15;
            }
            66% { 
              transform: translateY(-25px) translateX(18px) scale(1.1);
              opacity: 0.2;
            }
          }
        `
      }} />
    </>
  );
};

export default AppleNebulaBackground;
