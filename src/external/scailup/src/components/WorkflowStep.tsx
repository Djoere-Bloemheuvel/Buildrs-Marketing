import { useEffect, useRef } from 'react';

interface WorkflowStepProps {
  step: {
    number: string;
    title: string;
    subtitle: string;
  };
  delay: string;
  isLast?: boolean;
  verticalOffset?: number;
}

const WorkflowStep = ({ step, delay, isLast, verticalOffset = 0 }: WorkflowStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  // Get color scheme based on step number - darker colors matching "impact" gradient
  const getColorScheme = (stepNumber: string) => {
    switch (stepNumber) {
      case "1":
        // IM - Blue tones (darker)
        return {
          circle: "from-blue-700 via-blue-600 to-blue-500",
          glowBase: [
            "from-blue-600/35 via-blue-500/30 to-blue-400/25",
            "from-blue-500/25 via-blue-400/20 to-blue-300/15",
            "from-blue-400/20 via-blue-500/15 to-blue-600/15"
          ],
          glowAnimated: [
            "from-blue-600/25 via-blue-500/20 to-blue-400/15",
            "from-blue-500/20 via-blue-400/15 to-blue-300/10",
            "from-blue-400/15 via-blue-500/10 to-blue-600/10"
          ],
          connection: "from-blue-600/50 to-blue-500/50",
          connectionHover: "from-blue-600/70 to-blue-500/70"
        };
      case "2":
        // PA - Purple tones (darker)
        return {
          circle: "from-purple-700 via-purple-600 to-purple-500",
          glowBase: [
            "from-purple-600/35 via-purple-500/30 to-purple-400/25",
            "from-purple-500/25 via-purple-400/20 to-purple-300/15",
            "from-purple-400/20 via-purple-500/15 to-purple-600/15"
          ],
          glowAnimated: [
            "from-purple-600/25 via-purple-500/20 to-purple-400/15",
            "from-purple-500/20 via-purple-400/15 to-purple-300/10",
            "from-purple-400/15 via-purple-500/10 to-purple-600/10"
          ],
          connection: "from-purple-600/50 to-purple-500/50",
          connectionHover: "from-purple-600/70 to-purple-500/70"
        };
      case "3":
        // CT - Pink tones (darker)
        return {
          circle: "from-pink-700 via-pink-600 to-pink-500",
          glowBase: [
            "from-pink-600/35 via-pink-500/30 to-pink-400/25",
            "from-pink-500/25 via-pink-400/20 to-pink-300/15",
            "from-pink-400/20 via-pink-500/15 to-pink-600/15"
          ],
          glowAnimated: [
            "from-pink-600/25 via-pink-500/20 to-pink-400/15",
            "from-pink-500/20 via-pink-400/15 to-pink-300/10",
            "from-pink-400/15 via-pink-500/10 to-pink-600/10"
          ],
          connection: "from-pink-600/50 to-pink-500/50",
          connectionHover: "from-pink-600/70 to-pink-500/70"
        };
      default:
        return {
          circle: "from-white via-white to-gray-100",
          glowBase: [
            "from-blue-400/30 via-purple-300/25 to-cyan-400/20",
            "from-white/20 via-blue-200/15 to-purple-200/12",
            "from-cyan-300/15 via-white/12 to-blue-300/12"
          ],
          glowAnimated: [
            "from-blue-400/20 via-purple-300/15 to-cyan-400/10",
            "from-white/15 via-blue-200/10 to-purple-200/8",
            "from-cyan-300/10 via-white/8 to-blue-300/8"
          ],
          connection: "from-white/50 via-cyan-400/40",
          connectionHover: "from-white/70 via-cyan-400/60"
        };
    }
  };

  const colors = getColorScheme(step.number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    // Add premium glow animations
    const style = document.createElement('style');
    style.textContent = `
      /* Premium continuous glow animations */
      @keyframes premium-glow-pulse {
        0%, 100% { 
          opacity: 0.6;
          transform: scale(1);
          filter: blur(8px);
        }
        50% { 
          opacity: 0.9;
          transform: scale(1.15);
          filter: blur(12px);
        }
      }

      @keyframes premium-glow-pulse-delayed {
        0%, 100% { 
          opacity: 0.4;
          transform: scale(1);
          filter: blur(10px);
        }
        50% { 
          opacity: 0.8;
          transform: scale(1.2);
          filter: blur(15px);
        }
      }

      @keyframes premium-glow-pulse-tertiary {
        0%, 100% { 
          opacity: 0.5;
          transform: scale(1);
          filter: blur(15px);
        }
        50% { 
          opacity: 0.7;
          transform: scale(1.3);
          filter: blur(20px);
        }
      }

      @keyframes premium-shimmer-sweep {
        0% { 
          transform: translateX(-100%) rotate(-10deg);
          opacity: 0;
        }
        50% { 
          opacity: 0.4;
        }
        100% { 
          transform: translateX(200%) rotate(-10deg);
          opacity: 0;
        }
      }

      .premium-glow-pulse {
        animation: premium-glow-pulse 4s ease-in-out infinite;
      }

      .premium-glow-pulse-delayed {
        animation: premium-glow-pulse-delayed 6s ease-in-out infinite;
        animation-delay: 1.5s;
      }

      .premium-glow-pulse-tertiary {
        animation: premium-glow-pulse-tertiary 8s ease-in-out infinite;
        animation-delay: 3s;
      }

      .premium-shimmer-sweep {
        animation: premium-shimmer-sweep 12s ease-in-out infinite;
        animation-delay: 2s;
      }
    `;
    document.head.appendChild(style);

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="group relative text-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      style={{ 
        transitionDelay: delay,
        '--animate-delay': delay,
        transform: `translateY(${verticalOffset}px)`
      } as React.CSSProperties}
    >
      <div className="relative flex flex-col items-center space-y-8 p-8 lg:p-12 transition-all duration-500 ease-out group-hover:transform group-hover:[transform:perspective(1200px)_rotateX(3deg)_rotateY(3deg)_translateY(-12px)] cursor-pointer">
        
        {/* Enhanced number circle with step-specific colors */}
        <div className="relative">
          <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${colors.circle} flex items-center justify-center relative z-10 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-blue-500/30 group-hover:scale-110`}>
            <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight relative drop-shadow-lg">
              {step.number}
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
            </span>
            
            {/* Premium shimmer sweep effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="premium-shimmer-sweep absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          
          {/* Always-visible base glow layers with step-specific colors */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowBase[0]} scale-110 transition-all duration-700 group-hover:scale-125`} />
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowBase[1]} scale-125 transition-all duration-700 group-hover:scale-140`} />
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowBase[2]} scale-150 transition-all duration-700 group-hover:scale-175`} />
          
          {/* Multi-layered continuous glow effects with step-specific colors */}
          <div className={`premium-glow-pulse absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowAnimated[0]} scale-110 group-hover:scale-125 transition-all duration-700`} />
          <div className={`premium-glow-pulse-delayed absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowAnimated[1]} scale-125 group-hover:scale-140 transition-all duration-700`} />
          <div className={`premium-glow-pulse-tertiary absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowAnimated[2]} scale-150 group-hover:scale-175 transition-all duration-700`} />
          
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 animate-pulse" />
          
          {/* Premium orbital ring */}
          <div className="absolute inset-[-4px] rounded-full border border-gradient-to-r from-cyan-400/30 via-transparent to-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-[spin_8s_linear_infinite]" />
          
          {/* Connection line with step-specific colors */}
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-px">
              <div className={`w-full h-full bg-gradient-to-r ${colors.connection} to-transparent group-hover:${colors.connectionHover} transition-all duration-500`} />
              {/* Flowing accent */}
              <div className="absolute inset-0 w-8 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[slide-connection_2s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* Enhanced content with premium styling */}
        <div className="space-y-6 max-w-sm transition-all duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-500 relative group-hover:-translate-y-1 group-hover:text-white">
            {step.title}
            {/* Enhanced underline effect */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            {/* Subtle text shadow for premium feel */}
            <div className="absolute inset-0 text-blue-400/20 group-hover:text-blue-400/40 transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100">
              {step.title}
            </div>
          </h3>
          
          <p className="text-white/60 leading-relaxed text-lg lg:text-xl font-light tracking-wide transition-all duration-500 group-hover:text-white/85 group-hover:scale-105">
            {step.subtitle}
          </p>

          {/* Step indicator with visual hierarchy */}
          <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
            <span className="text-white/40 text-sm font-medium">Stap {step.number}</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Premium microinteraction elements */}
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/50 transition-all duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-cyan-400/30 group-hover:bg-cyan-400/60 transition-all duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
        <div className="absolute top-1/2 right-2 w-1 h-1 rounded-full bg-purple-400/40 group-hover:bg-purple-400/80 transition-all duration-500 group-hover:scale-200 opacity-0 group-hover:opacity-100" />

        {/* Mobile connecting line with enhanced styling */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-20">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400/40 via-purple-400/30 to-transparent group-hover:from-cyan-400/60 group-hover:via-purple-400/50 transition-all duration-500" />
          </div>
        )}
      </div>

      {/* Enhanced floating shadow with premium depth */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-3xl transform translate-y-8 group-hover:translate-y-12 group-hover:scale-110" />

      {/* Additional CSS for new animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-connection {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
        `
      }} />
    </div>
  );
};

export default WorkflowStep;
