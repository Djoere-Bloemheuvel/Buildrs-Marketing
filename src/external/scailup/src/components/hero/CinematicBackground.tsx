
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';
import PremiumOrbs from './PremiumOrbs';

interface CinematicBackgroundProps {
  hideGlassContainer?: boolean;
}

const CinematicBackground = ({
  hideGlassContainer = false
}: CinematicBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Brain Network Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/brain-network.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      {/* Dark overlay to maintain text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Ambient Lighting Layer - Behind all content */}
      <AmbientLighting />

      {/* Premium Orbs - Added to the background */}
      <PremiumOrbs />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Only show if hideGlassContainer is false */}
      {!hideGlassContainer && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[75vh] sm:h-[69vh] md:h-[64vh] lg:h-[67vh] xl:h-[72vh] transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
            {/* Glass container - immediately visible with teal/cyan colors */}
            <div className="absolute inset-0 rounded-3xl premium-glass-container-ambient" style={{
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(20, 184, 166, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(34, 211, 238, 0.009) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.01),
                0 16px 32px rgba(20, 184, 166, 0.025),
                0 8px 16px rgba(34, 211, 238, 0.02),
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                inset 0 -1px 0 rgba(255, 255, 255, 0.03),
                inset 0 0 100px rgba(20, 184, 166, 0.008),
                inset 0 0 80px rgba(34, 211, 238, 0.005)
              `,
              opacity: 1
            }} />
            
            {/* Colored edge lighting layers - teal/cyan colors */}
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-teal-ambient opacity-60" />
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-cyan opacity-50" />
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald-ambient opacity-55" />
          </div>
        </div>
      )}

      {/* Updated animations with teal/cyan colors */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-glass-shimmer-ambient {
            0%, 100% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(20, 184, 166, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(34, 211, 238, 0.009) 0%, transparent 50%);
            }
            33% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(20, 184, 166, 0.015) 50%, rgba(34, 211, 238, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(20, 184, 166, 0.018) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(34, 211, 238, 0.012) 0%, transparent 50%);
            }
            66% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0%, rgba(34, 211, 238, 0.012) 50%, rgba(16, 185, 129, 0.018) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(20, 184, 166, 0.009) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(34, 211, 238, 0.015) 0%, transparent 50%);
            }
          }

          @keyframes premium-edge-glow-teal-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(20, 184, 166, 0.12),
                0 0 60px rgba(20, 184, 166, 0.06),
                inset 0 0 1px rgba(20, 184, 166, 0.18),
                inset 0 0 80px rgba(20, 184, 166, 0.01);
            }
            50% { 
              box-shadow: 
                0 0 45px rgba(20, 184, 166, 0.18),
                0 0 90px rgba(20, 184, 166, 0.09),
                inset 0 0 1px rgba(20, 184, 166, 0.28),
                inset 0 0 100px rgba(20, 184, 166, 0.015);
            }
          }

          @keyframes premium-edge-glow-cyan {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(34, 211, 238, 0.1),
                0 0 70px rgba(34, 211, 238, 0.05),
                inset 0 0 1px rgba(34, 211, 238, 0.15),
                inset 0 0 60px rgba(34, 211, 238, 0.008);
            }
            66% { 
              box-shadow: 
                0 0 50px rgba(34, 211, 238, 0.15),
                0 0 100px rgba(34, 211, 238, 0.08),
                inset 0 0 1px rgba(34, 211, 238, 0.22),
                inset 0 0 80px rgba(34, 211, 238, 0.012);
            }
          }

          @keyframes premium-edge-glow-emerald-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(16, 185, 129, 0.08),
                0 0 70px rgba(16, 185, 129, 0.04),
                inset 0 0 1px rgba(16, 185, 129, 0.12),
                inset 0 0 60px rgba(16, 185, 129, 0.005);
            }
            50% { 
              box-shadow: 
                0 0 50px rgba(16, 185, 129, 0.12),
                0 0 100px rgba(16, 185, 129, 0.06),
                inset 0 0 1px rgba(16, 185, 129, 0.18),
                inset 0 0 80px rgba(16, 185, 129, 0.008);
            }
          }

          @keyframes premium-ambient-diffusion-enhanced {
            0%, 100% { 
              background: radial-gradient(
                ellipse at center,
                rgba(20, 184, 166, 0.028) 0%,
                rgba(16, 185, 129, 0.02) 35%,
                rgba(34, 211, 238, 0.018) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.032) 0%,
                rgba(34, 211, 238, 0.025) 35%,
                rgba(20, 184, 166, 0.02) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(34, 211, 238, 0.025) 0%,
                rgba(20, 184, 166, 0.022) 35%,
                rgba(16, 185, 129, 0.018) 70%,
                transparent 100%
              );
            }
          }

          .premium-glass-container-ambient {
            animation: premium-glass-shimmer-ambient 20s ease-in-out infinite;
          }

          .premium-edge-glow-teal-ambient {
            animation: premium-edge-glow-teal-ambient 14s ease-in-out infinite;
          }

          .premium-edge-glow-cyan {
            animation: premium-edge-glow-cyan 15s ease-in-out infinite;
            animation-delay: -5s;
          }

          .premium-edge-glow-emerald-ambient {
            animation: premium-edge-glow-emerald-ambient 16s ease-in-out infinite;
            animation-delay: -8s;
          }

          .premium-ambient-diffusion-enhanced {
            animation: premium-ambient-diffusion-enhanced 22s ease-in-out infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .premium-edge-glow-teal-ambient,
            .premium-edge-glow-cyan,
            .premium-edge-glow-emerald-ambient {
              animation-duration: 25s;
            }
            
            .premium-edge-glow-cyan {
              opacity: 0.3 !important;
            }
            
            .premium-edge-glow-emerald-ambient {
              opacity: 0.35 !important;
            }
            
            .premium-ambient-diffusion-enhanced {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-container-ambient,
            .premium-edge-glow-teal-ambient,
            .premium-edge-glow-cyan,
            .premium-edge-glow-emerald-ambient,
            .premium-ambient-diffusion-enhanced {
              animation: none;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
