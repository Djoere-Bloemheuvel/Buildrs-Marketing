
/**
 * Work Methodology Background Component
 * - Completely different from Approach background
 * - Dynamic geometric patterns instead of nebula
 * - More tech-focused and process-oriented
 * - Animated grid and flowing lines
 * - Enhanced with prominent ambient nebula clouds behind steps
 */
const WorkMethodologyBackground = () => {
  return (
    <>
      {/* Base gradient - different from Approach */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
      {/* Enhanced ambient nebula clouds behind steps - more balanced and visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        {/* Step 1 - Discovery & Strategy - Emerald glow */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-emerald-500/20 to-teal-400/12"
          style={{
            top: '15%',
            left: '5%',
            animation: 'nebulaCloudWork 32s ease-in-out infinite',
          }}
        />
        
        {/* Step 2 - Rapid Prototype - Yellow/Orange glow */}
        <div 
          className="absolute w-[380px] h-[380px] rounded-full blur-3xl bg-gradient-to-br from-yellow-500/22 to-orange-400/14"
          style={{
            top: '10%',
            left: '30%',
            animation: 'nebulaCloudWork 28s ease-in-out infinite reverse',
            animationDelay: '8s'
          }}
        />
        
        {/* Step 3 - Iterative Build - Blue glow */}
        <div 
          className="absolute w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-br from-blue-500/20 to-indigo-400/12"
          style={{
            top: '12%',
            left: '55%',
            animation: 'nebulaCloudWork 35s ease-in-out infinite',
            animationDelay: '12s'
          }}
        />
        
        {/* Step 4 - Live & Optimization - Purple glow */}
        <div 
          className="absolute w-[390px] h-[390px] rounded-full blur-3xl bg-gradient-to-br from-purple-500/18 to-pink-400/10"
          style={{
            top: '8%',
            left: '80%',
            animation: 'nebulaCloudWork 30s ease-in-out infinite reverse',
            animationDelay: '15s'
          }}
        />
        
        {/* Additional prominent accent clouds for richness */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl bg-gradient-to-br from-emerald-400/15 to-blue-400/8"
          style={{
            bottom: '20%',
            left: '15%',
            animation: 'nebulaCloudWork 25s ease-in-out infinite',
            animationDelay: '18s'
          }}
        />
        
        <div 
          className="absolute w-[320px] h-[320px] rounded-full blur-2xl bg-gradient-to-br from-purple-400/16 to-indigo-400/9"
          style={{
            bottom: '15%',
            right: '20%',
            animation: 'nebulaCloudWork 27s ease-in-out infinite reverse',
            animationDelay: '22s'
          }}
        />

        {/* Additional mid-layer clouds for depth */}
        <div 
          className="absolute w-[250px] h-[250px] rounded-full blur-2xl bg-gradient-to-br from-teal-400/12 to-emerald-400/7"
          style={{
            top: '40%',
            left: '40%',
            animation: 'nebulaCloudWork 33s ease-in-out infinite',
            animationDelay: '25s'
          }}
        />
        
        <div 
          className="absolute w-[280px] h-[280px] rounded-full blur-2xl bg-gradient-to-br from-indigo-400/14 to-purple-400/8"
          style={{
            top: '50%',
            right: '35%',
            animation: 'nebulaCloudWork 29s ease-in-out infinite reverse',
            animationDelay: '30s'
          }}
        />
      </div>
      
      {/* Animated grid pattern - more subtle */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-flow 30s linear infinite'
        }}
      />

      {/* Flowing geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagonal shapes */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-8"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 15s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute bottom-32 right-32 w-24 h-24 opacity-10"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.25) 50%, transparent 70%)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            animation: 'float-hexagon 12s ease-in-out infinite reverse'
          }}
        />

        {/* Circuit-like lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-60" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-40" />
      </div>

      {/* Ambient corner glows - different colors and positions than Approach */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-3xl" />

      {/* Tech-inspired overlay pattern - more subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.6) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 50% 25%, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 25% 75%, rgba(52, 211, 153, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 120px 120px, 80px 80px, 140px 140px'
        }}
      />

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes grid-flow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          @keyframes float-hexagon {
            0%, 100% { 
              transform: rotate(0deg) translateY(0px) scale(1);
              opacity: 0.08;
            }
            50% { 
              transform: rotate(180deg) translateY(-20px) scale(1.1);
              opacity: 0.12;
            }
          }

          @keyframes nebulaCloudWork {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
              opacity: 1;
            }
            33% { 
              transform: translateY(-15px) translateX(8px) scale(1.05);
              opacity: 0.7;
            }
            66% { 
              transform: translateY(-25px) translateX(18px) scale(1.1);
              opacity: 0.85;
            }
          }
        `
      }} />
    </>
  );
};

export default WorkMethodologyBackground;
