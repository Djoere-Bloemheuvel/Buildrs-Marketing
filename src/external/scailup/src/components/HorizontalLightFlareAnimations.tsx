
const HorizontalLightFlareAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Horizontal Light Flare Animations */
        @keyframes horizontal-flare-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.02);
          }
        }

        @keyframes horizontal-flare-shimmer {
          0%, 100% {
            opacity: 0.8;
            transform: scaleX(1);
          }
          33% {
            opacity: 1;
            transform: scaleX(1.05);
          }
          66% {
            opacity: 0.9;
            transform: scaleX(0.98);
          }
        }

        /* NEW: Downward aura glow animations */
        @keyframes aura-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scaleY(1.1);
          }
        }

        @keyframes aura-shimmer {
          0%, 100% {
            opacity: 0.25;
            transform: translateX(-50%) scaleX(1);
          }
          33% {
            opacity: 0.4;
            transform: translateX(-50%) scaleX(1.05);
          }
          66% {
            opacity: 0.3;
            transform: translateX(-50%) scaleX(0.95);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .horizontal-light-flare {
            width: 90%;
          }
          
          @keyframes horizontal-flare-pulse {
            0%, 100% {
              opacity: 0.5;
              transform: scaleX(1);
            }
            50% {
              opacity: 0.8;
              transform: scaleX(1.01);
            }
          }
          
          @keyframes aura-pulse {
            0%, 100% {
              opacity: 0.2;
              transform: translateX(-50%) scaleY(1);
            }
            50% {
              opacity: 0.35;
              transform: translateX(-50%) scaleY(1.08);
            }
          }
        }
      `
    }} />
  );
};

export default HorizontalLightFlareAnimations;
