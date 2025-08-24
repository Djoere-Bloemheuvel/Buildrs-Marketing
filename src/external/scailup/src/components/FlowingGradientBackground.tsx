
import { useEffect, useRef } from 'react';

const FlowingGradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating gradient orbs
    const createOrb = (delay: number, size: string, position: { x: string; y: string }, colors: string[]) => {
      const orb = document.createElement('div');
      orb.className = 'absolute rounded-full blur-3xl opacity-20 animate-pulse';
      orb.style.width = size;
      orb.style.height = size;
      orb.style.left = position.x;
      orb.style.top = position.y;
      orb.style.background = `radial-gradient(circle, ${colors[0]}, ${colors[1]}, transparent)`;
      orb.style.animationDelay = `${delay}s`;
      orb.style.animationDuration = `${8 + Math.random() * 4}s`;
      container.appendChild(orb);
      return orb;
    };

    const orbs = [
      createOrb(0, '400px', { x: '10%', y: '20%' }, ['rgba(6, 182, 212, 0.3)', 'rgba(59, 130, 246, 0.2)']),
      createOrb(2, '300px', { x: '70%', y: '10%' }, ['rgba(147, 51, 234, 0.3)', 'rgba(219, 39, 119, 0.2)']),
      createOrb(4, '350px', { x: '20%', y: '70%' }, ['rgba(16, 185, 129, 0.3)', 'rgba(6, 182, 212, 0.2)']),
      createOrb(6, '250px', { x: '80%', y: '60%' }, ['rgba(249, 115, 22, 0.3)', 'rgba(239, 68, 68, 0.2)']),
      createOrb(1, '200px', { x: '50%', y: '40%' }, ['rgba(139, 92, 246, 0.2)', 'rgba(168, 85, 247, 0.1)']),
    ];

    return () => {
      orbs.forEach(orb => {
        if (container.contains(orb)) {
          container.removeChild(orb);
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      {/* Flowing mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-blue-500/10 to-orange-500/5 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Animated scanlines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-slide-down" style={{
          animation: 'slideDown 15s linear infinite',
          top: '0%'
        }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-slide-down" style={{
          animation: 'slideDown 20s linear infinite',
          animationDelay: '5s',
          top: '0%'
        }} />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            0% { transform: translateY(-100vh); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `
      }} />
    </>
  );
};

export default FlowingGradientBackground;
