
const CinematicAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Optimized Cinematic Entrance Animation - Much faster */
        @keyframes cinematic-entrance {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        /* AI Core Floating Animations */
        @keyframes cinematic-float-1 {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-8px) scale(1.01);
            opacity: 1;
          }
        }

        @keyframes cinematic-float-2 {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-12px) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes cinematic-float-3 {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-6px) scale(1.02);
            opacity: 1;
          }
        }

        @keyframes cinematic-float-4 {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-10px) scale(1.03);
            opacity: 1;
          }
        }

        /* Core Pulsing Animations */
        @keyframes cinematic-core-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.2), 0 0 40px rgba(147, 51, 234, 0.1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.15);
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(147, 51, 234, 0.2);
          }
        }

        /* Ring Pulse Animation */
        @keyframes cinematic-ring-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.02) rotate(2deg);
          }
        }

        /* Circuit Pulse Animations */
        @keyframes cinematic-pulse-fast {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 10px currentColor;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }

        @keyframes cinematic-pulse-medium {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 8px currentColor;
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 16px currentColor, 0 0 24px currentColor;
          }
        }

        @keyframes cinematic-pulse-slow {
          0%, 100% {
            opacity: 0.2;
            box-shadow: 0 0 6px currentColor;
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 12px currentColor, 0 0 18px currentColor;
          }
        }

        /* Glass Shimmer Effect */
        @keyframes cinematic-glass-shimmer {
          0%, 100% {
            opacity: 1;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%);
          }
          50% {
            opacity: 0.8;
            background: linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.04) 50%, transparent 80%);
          }
        }

        /* Scan Line Animations */
        @keyframes cinematic-scan-horizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%);
            opacity: 0;
          }
        }

        @keyframes cinematic-scan-horizontal-delayed {
          0% {
            transform: translateX(200%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        /* Depth Float Animation */
        @keyframes cinematic-depth-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-10px) scale(0.9);
            opacity: 0.5;
          }
        }

        /* Apply Optimized Cinematic Animations - Much faster entrance */
        .cinematic-entrance {
          animation: cinematic-entrance 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .animate-cinematic-float-1 {
          animation: cinematic-float-1 8s ease-in-out infinite;
        }

        .animate-cinematic-float-2 {
          animation: cinematic-float-2 6s ease-in-out infinite;
        }

        .animate-cinematic-float-3 {
          animation: cinematic-float-3 10s ease-in-out infinite;
        }

        .animate-cinematic-float-4 {
          animation: cinematic-float-4 7s ease-in-out infinite;
        }

        .animate-cinematic-core-pulse {
          animation: cinematic-core-pulse 4s ease-in-out infinite;
        }

        .animate-cinematic-ring-pulse {
          animation: cinematic-ring-pulse 12s ease-in-out infinite;
        }

        .animate-cinematic-pulse-fast {
          animation: cinematic-pulse-fast 3s ease-in-out infinite;
        }

        .animate-cinematic-pulse-medium {
          animation: cinematic-pulse-medium 5s ease-in-out infinite;
        }

        .animate-cinematic-pulse-slow {
          animation: cinematic-pulse-slow 8s ease-in-out infinite;
        }

        .animate-cinematic-glass-shimmer {
          animation: cinematic-glass-shimmer 15s ease-in-out infinite;
        }

        .animate-cinematic-scan-horizontal {
          animation: cinematic-scan-horizontal 20s ease-in-out infinite;
        }

        .animate-cinematic-scan-horizontal-delayed {
          animation: cinematic-scan-horizontal-delayed 25s ease-in-out infinite;
        }

        .animate-cinematic-depth-float {
          animation: cinematic-depth-float 12s ease-in-out infinite;
        }

        /* Enhanced Mobile & Performance Optimizations */
        @media (max-width: 768px) {
          .animate-cinematic-pulse-fast,
          .animate-cinematic-pulse-medium,
          .animate-cinematic-pulse-slow {
            animation-duration: 3s;
          }

          .animate-cinematic-float-1,
          .animate-cinematic-float-2,
          .animate-cinematic-float-3,
          .animate-cinematic-float-4 {
            animation-duration: 4s;
          }

          .animate-cinematic-core-pulse {
            animation-duration: 2s;
          }

          .animate-cinematic-glass-shimmer {
            animation-duration: 6s;
          }

          /* Reduce motion for better mobile performance */
          .cinematic-entrance {
            animation-duration: 0.5s;
          }
        }

        /* Performance optimizations for all devices */
        .cinematic-entrance,
        .animate-cinematic-float-1,
        .animate-cinematic-float-2,
        .animate-cinematic-float-3,
        .animate-cinematic-float-4 {
          will-change: transform, opacity;
        }
      `
    }} />
  );
};

export default CinematicAnimations;
