
const AICoreCenter = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Main AI Core Container */}
      <div className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px]">
        
        {/* Central AI Core Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
          <div className="relative w-full h-full">
            {/* Core ring - main glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-emerald-400/25 ai-core-glow blur-sm animate-ai-core-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/40 via-white/10 to-violet-400/30 animate-ai-core-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Inner core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-white/80 via-cyan-400/60 to-violet-400/40 ai-core-intense-glow animate-ai-core-breathe"></div>
            
            {/* Core accent ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border border-cyan-400/20 animate-ai-core-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Rotating Outer Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* First rotating ring */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] animate-ai-ring-rotate-slow">
            <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400/10 via-transparent via-transparent to-violet-400/15 ring-mask"></div>
          </div>
          
          {/* Second rotating ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] lg:w-[580px] lg:h-[580px] animate-ai-ring-rotate-reverse">
            <div className="w-full h-full rounded-full border border-transparent bg-gradient-to-r from-emerald-400/8 via-transparent via-transparent to-pink-400/12 ring-mask"></div>
          </div>
        </div>

        {/* Circuit Lines - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Top circuit line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0.5 h-32 bg-gradient-to-t from-cyan-400/40 to-transparent animate-ai-circuit-pulse"></div>
          
          {/* Right circuit line */}
          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-violet-400/40 to-transparent animate-ai-circuit-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Bottom circuit line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-32 bg-gradient-to-b from-emerald-400/40 to-transparent animate-ai-circuit-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Left circuit line */}
          <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-32 h-0.5 bg-gradient-to-l from-pink-400/40 to-transparent animate-ai-circuit-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Circuit Connection Points - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Connection points at circuit line ends */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400/60 animate-ai-signal-pulse ai-point-glow"></div>
          <div className="absolute top-1/2 -right-32 transform -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400/60 animate-ai-signal-pulse ai-point-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400/60 animate-ai-signal-pulse ai-point-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 -left-32 transform -translate-y-1/2 w-3 h-3 rounded-full bg-pink-400/60 animate-ai-signal-pulse ai-point-glow" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Ambient Particles - Simplified for mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-ai-particle-float blur-sm"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${25 + (i * 8)}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + (i % 3) * 2}s`
              }}
            />
          ))}
        </div>

        {/* Glossy Reflection Base - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[400px] h-32 lg:w-[600px] lg:h-48">
          <div className="w-full h-full bg-gradient-to-t from-white/[0.03] via-white/[0.01] to-transparent rounded-full blur-2xl animate-ai-reflection-shimmer"></div>
        </div>
      </div>

      {/* Scan Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-ai-scan-horizontal top-1/3"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-violet-400/15 to-transparent animate-ai-scan-horizontal-delayed bottom-1/3"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ai-core-pulse {
            0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          }

          @keyframes ai-core-breathe {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
          }

          @keyframes ai-ring-rotate-slow {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes ai-ring-rotate-reverse {
            0% { transform: translate(-50%, -50%) rotate(360deg); }
            100% { transform: translate(-50%, -50%) rotate(0deg); }
          }

          @keyframes ai-circuit-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }

          @keyframes ai-signal-pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }

          @keyframes ai-particle-float {
            0%, 100% { transform: translateY(0) scale(0.8); opacity: 0.3; }
            50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
          }

          @keyframes ai-reflection-shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
          }

          @keyframes ai-scan-horizontal {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(200%); opacity: 0; }
          }

          @keyframes ai-scan-horizontal-delayed {
            0% { transform: translateX(200%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }

          .ai-core-glow {
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.2), 0 0 120px rgba(139, 92, 246, 0.1);
          }

          .ai-core-intense-glow {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(34, 211, 238, 0.3);
          }

          .ai-point-glow {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
          }

          .ring-mask {
            mask: linear-gradient(45deg, transparent 25%, black 40%, black 60%, transparent 75%);
          }

          .animate-ai-core-pulse {
            animation: ai-core-pulse 4s ease-in-out infinite;
          }

          .animate-ai-core-breathe {
            animation: ai-core-breathe 3s ease-in-out infinite;
          }

          .animate-ai-ring-rotate-slow {
            animation: ai-ring-rotate-slow 40s linear infinite;
          }

          .animate-ai-ring-rotate-reverse {
            animation: ai-ring-rotate-reverse 35s linear infinite;
          }

          .animate-ai-circuit-pulse {
            animation: ai-circuit-pulse 5s ease-in-out infinite;
          }

          .animate-ai-signal-pulse {
            animation: ai-signal-pulse 2s ease-in-out infinite;
          }

          .animate-ai-particle-float {
            animation: ai-particle-float 8s ease-in-out infinite;
          }

          .animate-ai-reflection-shimmer {
            animation: ai-reflection-shimmer 12s ease-in-out infinite;
          }

          .animate-ai-scan-horizontal {
            animation: ai-scan-horizontal 20s linear infinite;
          }

          .animate-ai-scan-horizontal-delayed {
            animation: ai-scan-horizontal-delayed 25s linear infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .animate-ai-ring-rotate-slow {
              animation-duration: 30s;
            }
            
            .animate-ai-ring-rotate-reverse {
              animation-duration: 25s;
            }
            
            .animate-ai-core-pulse,
            .animate-ai-core-breathe {
              animation-duration: 3s;
            }
          }
        `
      }} />
    </div>
  );
};

export default AICoreCenter;
