import SmoothHoverAnimations from './SmoothHoverAnimations';

const HeroAnimations = () => {
  return (
    <>
      <SmoothHoverAnimations />
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Premium Animation Keyframes - Enhanced with smooth transitions */
        @keyframes premium-fade-in {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes premium-orb-float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        @keyframes premium-orb-float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes premium-orb-float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes premium-orb-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes premium-core-pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%); }
          50% { opacity: 1; transform: translate(-50%, -50%); }
        }

        /* Enhanced icon float animations with smooth hover states */
        @keyframes premium-icon-float-1 {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          33% { transform: translateX(-50%) translateY(-15px) rotate(1deg); }
          66% { transform: translateX(-50%) translateY(-5px) rotate(-0.5deg); }
        }

        @keyframes premium-icon-float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes premium-icon-float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          40% { transform: translateY(-10px) rotate(-1deg); }
          80% { transform: translateY(-18px) rotate(1.5deg); }
        }

        @keyframes premium-icon-float-4 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          60% { transform: translateY(-12px) rotate(-2deg); }
        }

        @keyframes premium-icon-float-5 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes premium-icon-float-6 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          30% { transform: translateY(-14px) rotate(-1deg); }
          70% { transform: translateY(-6px) rotate(2deg); }
        }

        @keyframes premium-icon-float-7 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1.5deg); }
        }

        @keyframes premium-icon-float-8 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          45% { transform: translateY(-11px) rotate(-1.5deg); }
          85% { transform: translateY(-3px) rotate(0.5deg); }
        }

        @keyframes premium-icon-breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        /* Enhanced glow animations with smooth hover transitions */
        @keyframes premium-icon-glow-silver {
          0%, 100% {
            box-shadow: 0 0 20px rgba(192, 192, 192, 0.2), 0 0 40px rgba(192, 192, 192, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(192, 192, 192, 0.3), 0 0 60px rgba(192, 192, 192, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transform: scale(1.02);
          }
        }

        @keyframes premium-icon-glow-blue {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(59, 130, 246, 0.3); }
        }

        @keyframes premium-icon-glow-purple {
          0%, 100% { box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(147, 51, 234, 0.2); }
          50% { box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(147, 51, 234, 0.3); }
        }

        @keyframes premium-icon-glow-green {
          0%, 100% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(34, 197, 94, 0.2); }
          50% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(34, 197, 94, 0.3); }
        }

        @keyframes premium-icon-glow-cyan {
          0%, 100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.3), 0 0 30px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.4), 0 0 50px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(34, 211, 238, 0.3); }
        }

        @keyframes premium-icon-glow-orange {
          0%, 100% { box-shadow: 0 0 15px rgba(249, 115, 22, 0.3), 0 0 30px rgba(249, 115, 22, 0.15), inset 0 1px 0 rgba(249, 115, 22, 0.2); }
          50% { box-shadow: 0 0 25px rgba(249, 115, 22, 0.4), 0 0 50px rgba(249, 115, 22, 0.2), inset 0 1px 0 rgba(249, 115, 22, 0.3); }
        }

        @keyframes premium-icon-glow-pink {
          0%, 100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.3), 0 0 30px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(236, 72, 153, 0.2); }
          50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.4), 0 0 50px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(236, 72, 153, 0.3); }
        }

        @keyframes premium-icon-glow-indigo {
          0%, 100% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(99, 102, 241, 0.2); }
          50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.4), 0 0 50px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(99, 102, 241, 0.3); }
        }

        @keyframes premium-icon-shimmer {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0.8; }
          100% { opacity: 0; transform: translateX(100%); }
        }

        /* Enhanced scan animations with smooth hover */
        @keyframes premium-scan-sweep-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes premium-scan-sweep-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }

        @keyframes premium-scan-sweep-diagonal {
          0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateX(200%) translateY(200%); opacity: 0; }
        }

        @keyframes premium-connection-pulse {
          0%, 100% { opacity: 0.1; stroke-width: 1; }
          50% { opacity: 0.4; stroke-width: 1.5; }
        }

        @keyframes premium-ambient-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes premium-scroll-pulse {
          0%, 100% { opacity: 0.5; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(12px); }
        }

        @keyframes premium-particle-trail {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        /* Enhanced button and scale hover with smooth transitions */
        @keyframes premium-button-hover {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.02) translateY(-2px); }
        }

        @keyframes premium-scale-hover {
          0% { transform: scale(1); }
          100% { transform: scale(1.02); }
        }

        /* Existing ecosystem and robot animations */
        @keyframes ai-ecosystem-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes ai-ecosystem-float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }

        @keyframes ai-ecosystem-float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        @keyframes ai-ecosystem-float-center {
          0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-25px) rotate(1deg); }
        }

        @keyframes ai-ecosystem-float-autonomous {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-18px) rotate(47deg); }
        }

        @keyframes ai-ecosystem-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes ai-ecosystem-glow-blue {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1); }
        }

        @keyframes ai-ecosystem-glow-purple {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.1); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(147, 51, 234, 0.1); }
        }

        @keyframes ai-ecosystem-glow-gray {
          0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.1); }
          50% { box-shadow: 0 0 30px rgba(156, 163, 175, 0.2), inset 0 0 15px rgba(156, 163, 175, 0.1); }
        }

        @keyframes ai-ecosystem-glow-cyan {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.1); }
          50% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.3), inset 0 0 25px rgba(34, 211, 238, 0.1); }
        }

        @keyframes ai-ecosystem-glow-green {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1); }
        }

        @keyframes ai-ecosystem-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ai-ecosystem-data-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes ai-ecosystem-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ai-ecosystem-brain-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes ai-ecosystem-message-type {
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.6; }
        }

        @keyframes ai-ecosystem-message-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-analytics-pulse {
          0%, 100% { opacity: 0.4; height: 60%; }
          50% { opacity: 1; height: 100%; }
        }

        @keyframes ai-ecosystem-server-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-status-blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes ai-ecosystem-agent-pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        @keyframes ai-ecosystem-float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.7; }
        }

        @keyframes scan-sweep-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes scan-sweep-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }

        @keyframes scan-sweep-diagonal {
          0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) translateY(200%); opacity: 0; }
        }

        @keyframes ai-ecosystem-connection-pulse {
          0%, 100% { opacity: 0.2; stroke-width: 1; }
          50% { opacity: 0.8; stroke-width: 2; }
        }

        /* Apply Premium Animations with enhanced smooth hover support */
        .premium-fade-in {
          animation: premium-fade-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .premium-stagger-1 {
          animation-delay: 0.1s;
        }

        .premium-stagger-2 {
          animation-delay: 0.2s;
        }

        .premium-stagger-3 {
          animation-delay: 0.3s;
        }

        /* Enhanced floating animations with smooth hover interaction */
        .premium-orb-float-slow {
          animation: premium-orb-float-slow 12s ease-in-out infinite;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .premium-orb-float-slow:hover {
          animation-play-state: paused;
          transform: translateY(-10px) scale(1.05);
        }

        .premium-orb-float-medium {
          animation: premium-orb-float-medium 9s ease-in-out infinite;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .premium-orb-float-medium:hover {
          animation-play-state: paused;
          transform: translateY(-8px) scale(1.03);
        }

        .premium-orb-float-fast {
          animation: premium-orb-float-fast 6s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .premium-orb-float-fast:hover {
          animation-play-state: paused;
          transform: translateY(-6px) scale(1.02);
        }

        .premium-orb-pulse {
          animation: premium-orb-pulse 4s ease-in-out infinite;
          transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .premium-orb-pulse:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .premium-core-pulse {
          animation: premium-core-pulse 3s ease-in-out infinite;
          transition: opacity 0.4s ease-out;
        }

        .premium-core-pulse:hover {
          opacity: 1;
        }

        /* Enhanced icon animations with smooth hover support */
        .premium-icon-float-1, .premium-icon-float-2, .premium-icon-float-3,
        .premium-icon-float-4, .premium-icon-float-5, .premium-icon-float-6,
        .premium-icon-float-7, .premium-icon-float-8 {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .premium-icon-float-1:hover, .premium-icon-float-2:hover, .premium-icon-float-3:hover,
        .premium-icon-float-4:hover, .premium-icon-float-5:hover, .premium-icon-float-6:hover,
        .premium-icon-float-7:hover, .premium-icon-float-8:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.1) rotate(5deg);
        }

        .premium-icon-breathe {
          animation: premium-icon-breathe 5s ease-in-out infinite;
          transition: all 0.4s ease-out;
        }

        .premium-icon-breathe:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        /* Enhanced glow animations with smooth hover interaction */
        .premium-icon-glow-silver, .premium-icon-glow-blue, .premium-icon-glow-purple,
        .premium-icon-glow-green, .premium-icon-glow-cyan, .premium-icon-glow-orange,
        .premium-icon-glow-pink, .premium-icon-glow-indigo {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-icon-glow-silver:hover {
          box-shadow: 0 0 40px rgba(192, 192, 192, 0.4), 0 0 80px rgba(192, 192, 192, 0.2);
          transform: scale(1.05);
        }

        .premium-icon-glow-blue:hover {
          box-shadow: 0 0 35px rgba(59, 130, 246, 0.5), 0 0 70px rgba(59, 130, 246, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-purple:hover {
          box-shadow: 0 0 35px rgba(147, 51, 234, 0.5), 0 0 70px rgba(147, 51, 234, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-green:hover {
          box-shadow: 0 0 35px rgba(34, 197, 94, 0.5), 0 0 70px rgba(34, 197, 94, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-cyan:hover {
          box-shadow: 0 0 35px rgba(34, 211, 238, 0.5), 0 0 70px rgba(34, 211, 238, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-orange:hover {
          box-shadow: 0 0 35px rgba(249, 115, 22, 0.5), 0 0 70px rgba(249, 115, 22, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-pink:hover {
          box-shadow: 0 0 35px rgba(236, 72, 153, 0.5), 0 0 70px rgba(236, 72, 153, 0.25);
          transform: scale(1.05);
        }

        .premium-icon-glow-indigo:hover {
          box-shadow: 0 0 35px rgba(99, 102, 241, 0.5), 0 0 70px rgba(99, 102, 241, 0.25);
          transform: scale(1.05);
        }

        /* Smooth button and scale hover enhancements */
        .premium-button-hover {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, box-shadow;
        }

        .premium-button-hover:hover {
          transform: scale(1.02) translateY(-3px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .premium-scale-hover {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .premium-scale-hover:hover {
          transform: scale(1.02);
        }
        `
    }} />
    </>
  );
};

export default HeroAnimations;
