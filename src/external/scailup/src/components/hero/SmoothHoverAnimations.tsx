
const SmoothHoverAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Smooth Hover Base Classes */
        .smooth-hover-base {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity, box-shadow;
        }

        .smooth-hover-scale {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .smooth-hover-glow {
          transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out;
          will-change: box-shadow, opacity;
        }

        .smooth-hover-fade {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }

        /* Enhanced Card Hover Effects */
        .premium-card-smooth {
          transition: 
            transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
            background-color 0.4s ease-out,
            border-color 0.4s ease-out,
            box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, background-color, border-color, box-shadow;
        }

        .premium-card-smooth:hover {
          transform: translateY(-8px) scale(1.02);
        }

        /* Glassmorphic Hover Enhancements */
        .glass-hover-smooth {
          transition: 
            backdrop-filter 0.5s ease-out,
            background-color 0.4s ease-out,
            border-color 0.4s ease-out,
            transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: backdrop-filter, background-color, border-color, transform;
        }

        .glass-hover-smooth:hover {
          backdrop-filter: blur(20px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* Icon Hover Animations */
        .icon-hover-smooth {
          transition: 
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
            color 0.3s ease-out,
            filter 0.4s ease-out;
          will-change: transform, color, filter;
        }

        .icon-hover-smooth:hover {
          transform: rotate(12deg) scale(1.1);
          filter: drop-shadow(0 4px 20px rgba(59, 130, 246, 0.5));
        }

        /* Button Hover Enhancements */
        .button-hover-smooth {
          position: relative;
          overflow: hidden;
          transition: 
            transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.3s ease-out;
          will-change: transform, box-shadow, background-color;
        }

        .button-hover-smooth:hover {
          transform: translateY(-4px) scale(1.02);
        }

        .button-hover-smooth::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .button-hover-smooth:hover::before {
          left: 100%;
        }

        /* Glow Effect Animations */
        .glow-hover-smooth {
          position: relative;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glow-hover-smooth::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: inherit;
          filter: blur(20px);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glow-hover-smooth:hover::after {
          opacity: 0.6;
        }

        /* Text Hover Effects */
        .text-hover-smooth {
          transition: color 0.4s ease-out;
          will-change: color;
        }

        .text-gradient-hover-smooth {
          background-size: 200% 100%;
          transition: background-position 0.6s ease-out;
          will-change: background-position;
        }

        .text-gradient-hover-smooth:hover {
          background-position: 100% 0;
        }

        /* Staggered Animation Delays */
        .stagger-delay-1 {
          transition-delay: 0.1s;
        }

        .stagger-delay-2 {
          transition-delay: 0.2s;
        }

        .stagger-delay-3 {
          transition-delay: 0.3s;
        }

        .stagger-delay-4 {
          transition-delay: 0.4s;
        }

        /* Floating Elements Smooth Hover */
        .floating-smooth {
          animation: floating-base 6s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-smooth:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.05);
        }

        @keyframes floating-base {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Responsive Hover - Only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .hover-only-smooth {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        @media (hover: none) {
          .hover-only-smooth {
            transition: none;
          }
        }

        /* Performance Optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Enhanced Timeline Card Hover */
        .timeline-card-smooth {
          transition: 
            transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
            background-color 0.4s ease-out,
            backdrop-filter 0.5s ease-out,
            border-color 0.4s ease-out;
          will-change: transform, background-color, backdrop-filter, border-color;
        }

        .timeline-card-smooth:hover {
          transform: translateY(-6px) scale(1.015);
        }

        /* CTA Section Smooth Hover */
        .cta-hover-smooth {
          transition: 
            transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow;
        }

        .cta-hover-smooth:hover {
          transform: translateY(-3px) scale(1.01);
        }
      `
    }} />
  );
};

export default SmoothHoverAnimations;
