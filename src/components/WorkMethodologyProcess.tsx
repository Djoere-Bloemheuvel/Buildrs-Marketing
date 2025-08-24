
import { useState } from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  duration: string;
  deliverables: string[];
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

interface WorkMethodologyProcessProps {
  steps: MethodologyStep[];
  activeStep: number;
  onStepSelect: (stepId: number) => void;
}

/**
 * Horizontal Process Flow Component
 * - Fixed collapsed (185px) and expanded (450px) heights
 * - Fast, responsive animations (200-250ms, ease-out)
 * - Glassmorphism overlay on hover
 * - Enhanced with unique accent colors per step
 * - Added subtle glows behind each card for visual clarity
 */
const WorkMethodologyProcess = ({ steps, activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Enhanced scrollbar and animation styles as CSS string
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.02); opacity: 0.4; }
    }
    
    @keyframes shimmer {
      0% { background-position: -200px 0; }
      100% { background-position: calc(200px + 100%) 0; }
    }
  `;

  // Define specific glow colors for each step
  const getStepGlowColor = (stepId: number) => {
    const glowMap: { [key: number]: string } = {
      1: '#4484FF', // Blue for Discovery & Strategy
      2: '#AA66FF', // Purple for Rapid Prototype
      3: '#33FFAA', // Green for Iterative Build
      4: '#FF9944'  // Orange for Live & Optimization
    };
    return glowMap[stepId] || '#4484FF';
  };

  return (
    <div className="relative">
      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Progress connector */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/10 hidden lg:block z-10">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-1000 ease-out"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Process steps grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isHovered = hoveredStep === step.id;
          const stepGlowColor = getStepGlowColor(step.id);
          
          // Safe access to accent color properties with explicit fallbacks
          const accentColor = step.accentColor || {
            primary: 'from-blue-500 to-cyan-600',
            glow: 'blue-500/20',
            border: 'border-blue-500/30',
            subtle: 'blue-500/5'
          };

          // Extract base color from primary gradient for glow effects
          const getGlowColor = () => {
            const colorMap: { [key: string]: string } = {
              'from-blue-500': '59, 130, 246',
              'from-purple-500': '139, 92, 246', 
              'from-emerald-400': '52, 211, 153',
              'from-orange-500': '249, 115, 22'
            };
            
            const primaryGradient = accentColor.primary;
            if (!primaryGradient || typeof primaryGradient !== 'string') {
              return '59, 130, 246';
            }
            
            const primaryColor = primaryGradient.split(' ')[0];
            if (!primaryColor) {
              return '59, 130, 246';
            }
            
            return colorMap[primaryColor] || '59, 130, 246';
          };
          
          const glowColor = getGlowColor();

          // Enhanced icon container styles with solid black background and full inner fill glow
          const getIconContainerStyles = () => {
            const baseStyles = {
              backgroundColor: '#000000',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            };

            if (isActive) {
              // Active state: Full inner fill glow that covers entire circle + outer glow
              return {
                ...baseStyles,
                boxShadow: [
                  `inset 0 0 48px rgba(${glowColor}, 0.6)`, // Large inner glow to fill entire circle
                  `inset 0 0 24px rgba(${glowColor}, 0.8)`, // Inner core glow for intensity
                  `0 0 32px rgba(${glowColor}, 0.25)`, // Outer halo - larger spread
                  `0 0 16px rgba(${glowColor}, 0.4)`, // Outer core glow
                  `0 4px 12px rgba(0, 0, 0, 0.4)` // Drop shadow for depth
                ].join(', ')
              };
            } else if (isHovered) {
              // Hover state: Enhanced inner fill glow + outer glow
              return {
                ...baseStyles,
                boxShadow: [
                  `inset 0 0 40px rgba(${glowColor}, 0.5)`, // Large inner glow to fill circle
                  `inset 0 0 20px rgba(${glowColor}, 0.7)`, // Inner core glow
                  `0 0 28px rgba(${glowColor}, 0.2)`, // Outer halo - increased spread
                  `0 0 14px rgba(${glowColor}, 0.35)`, // Outer core glow
                  `0 3px 10px rgba(0, 0, 0, 0.3)` // Drop shadow for depth
                ].join(', ')
              };
            } else {
              // Default state: Moderate inner fill glow + outer glow
              return {
                ...baseStyles,
                boxShadow: [
                  `inset 0 0 32px rgba(${glowColor}, 0.4)`, // Inner glow to fill most of circle
                  `inset 0 0 16px rgba(${glowColor}, 0.6)`, // Inner core glow
                  `0 0 24px rgba(${glowColor}, 0.15)`, // Outer halo - subtle spread
                  `0 0 12px rgba(${glowColor}, 0.25)`, // Outer core glow
                  `0 2px 8px rgba(0, 0, 0, 0.25)` // Drop shadow for depth
                ].join(', ')
              };
            }
          };

          // Subtle, widespread card glow with less intensity but more reach
          const getCardBoxShadow = () => {
            if (isActive) {
              return [
                `0 25px 50px rgba(0, 0, 0, 0.4)`, // Main drop shadow
                `0 0 80px rgba(${glowColor}, 0.08)`, // Very wide outer glow - subtle
                `0 0 120px rgba(${glowColor}, 0.05)`, // Ultra-wide ambient glow
                `inset 0 0 100px rgba(${glowColor}, 0.06)`, // Large, subtle inner glow throughout card
                `inset 0 0 60px rgba(${glowColor}, 0.08)`, // Inner mid-range glow
                `inset 0 0 30px rgba(${glowColor}, 0.12)`, // Inner core glow
                `inset 0 1px 0 rgba(255, 255, 255, 0.1)` // Top highlight
              ].join(', ');
            } else if (isHovered) {
              return [
                `0 12px 24px rgba(0, 0, 0, 0.3)`, // Main drop shadow
                `0 0 60px rgba(${glowColor}, 0.06)`, // Wide outer glow - very subtle
                `0 0 100px rgba(${glowColor}, 0.04)`, // Ultra-wide ambient glow
                `inset 0 0 80px rgba(${glowColor}, 0.05)`, // Large, subtle inner glow throughout card
                `inset 0 0 50px rgba(${glowColor}, 0.07)`, // Inner mid-range glow
                `inset 0 0 25px rgba(${glowColor}, 0.10)`, // Inner core glow
                `inset 0 1px 0 rgba(255, 255, 255, 0.08)` // Top highlight
              ].join(', ');
            } else {
              return [
                `0 0 40px rgba(${glowColor}, 0.03)`, // Subtle outer glow
                `0 0 80px rgba(${glowColor}, 0.02)`, // Very wide ambient glow
                `inset 0 0 60px rgba(${glowColor}, 0.04)`, // Large, very subtle inner glow
                `inset 0 0 40px rgba(${glowColor}, 0.05)`, // Inner mid-range glow
                `inset 0 0 20px rgba(${glowColor}, 0.06)`, // Inner core glow
                `inset 0 1px 0 rgba(255, 255, 255, 0.05)` // Top highlight
              ].join(', ');
            }
          };
          
          return (
            <div
              key={step.id}
              className="relative cursor-pointer group transition-all duration-700 ease-out"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepSelect(step.id)}
              style={{
                transform: isHovered && !isActive ? 'translateY(-8px) scale(1.02)' : 
                          isActive ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Background glow layers - positioned behind the card */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* Primary glow - wide and soft */}
                <div 
                  className="absolute inset-0 rounded-3xl transition-all duration-500 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 150% 120% at center, ${stepGlowColor}15 0%, ${stepGlowColor}08 40%, transparent 70%)`,
                    opacity: isActive ? 0.6 : isHovered ? 0.4 : 0.25,
                    transform: isActive ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)',
                    filter: 'blur(8px)'
                  }}
                />
                
                {/* Secondary glow - more focused */}
                <div 
                  className="absolute inset-4 rounded-3xl transition-all duration-400 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 120% 100% at center, ${stepGlowColor}20 0%, ${stepGlowColor}10 50%, transparent 80%)`,
                    opacity: isActive ? 0.5 : isHovered ? 0.3 : 0.2,
                    transform: isActive ? 'scale(1.08)' : isHovered ? 'scale(1.04)' : 'scale(1)',
                    filter: 'blur(4px)'
                  }}
                />
                
                {/* Accent glow - inner highlight */}
                <div 
                  className="absolute inset-8 rounded-3xl transition-all duration-300 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 100% 80% at center, ${stepGlowColor}25 0%, ${stepGlowColor}12 40%, transparent 70%)`,
                    opacity: isActive ? 0.4 : isHovered ? 0.25 : 0.15,
                    transform: isActive ? 'scale(1.06)' : isHovered ? 'scale(1.03)' : 'scale(1)',
                    filter: 'blur(2px)'
                  }}
                />
              </div>

              {/* Step number indicator with solid black background and enhanced glow effects */}
              <div className="flex items-center justify-center mb-6 relative z-10">
                <div 
                  className="relative w-12 h-12 rounded-full group-hover:scale-110"
                  style={{
                    ...getIconContainerStyles(),
                    transform: isActive ? 'scale(1.15) rotate(360deg)' : 
                              isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <step.icon 
                    className="w-5 h-5 absolute top-1/2 left-1/2" 
                    strokeWidth={2}
                    style={{ 
                      color: isActive || isHovered ? '#FFFFFF' : '#E5E7EB',
                      transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                      transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Pulsing ring effect voor active state */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        background: `rgba(${glowColor}, 0.3)`,
                        animationDuration: '2s'
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Step card with fixed heights and subtle widespread glow - COLLAPSED: 185px, EXPANDED: 450px */}
              <div 
                className={`relative p-6 rounded-3xl backdrop-blur-sm flex flex-col overflow-hidden z-10 ${
                  isActive 
                    ? `bg-gradient-to-br from-${accentColor.subtle} to-${accentColor.subtle}/50 ${accentColor.border} shadow-2xl h-[450px]` 
                    : isHovered
                      ? `bg-gradient-to-br from-${accentColor.subtle} to-transparent border-white/20 h-[185px]`
                      : `bg-gradient-to-br from-${accentColor.subtle}/20 to-transparent ${accentColor.border} opacity-60 hover:opacity-80 h-[185px]`
                } border`}
                style={{
                  boxShadow: getCardBoxShadow(),
                  transform: isActive ? 'rotateX(2deg) rotateY(-1deg)' : 
                            isHovered ? 'rotateX(1deg) rotateY(-0.5deg)' : 'rotateX(0deg) rotateY(0deg)',
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Enhanced Glassmorphism overlay on hover */}
                {isHovered && !isActive && (
                  <div 
                    className="absolute inset-0 rounded-3xl backdrop-blur-md border animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.03) 0%, 
                        rgba(${glowColor}, 0.08) 50%, 
                        rgba(255, 255, 255, 0.02) 100%)`,
                      border: `1px solid rgba(${glowColor}, 0.15)`,
                      boxShadow: `
                        inset 0 1px 0 rgba(255, 255, 255, 0.15), 
                        inset 0 -1px 0 rgba(${glowColor}, 0.1),
                        0 0 30px rgba(${glowColor}, 0.15),
                        0 0 60px rgba(${glowColor}, 0.08)`,
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                )}
                
                {/* Active state special overlay */}
                {isActive && (
                  <div 
                    className="absolute inset-0 rounded-3xl backdrop-blur-lg border"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(${glowColor}, 0.05) 0%, 
                        rgba(${glowColor}, 0.12) 30%,
                        rgba(255, 255, 255, 0.03) 70%, 
                        rgba(${glowColor}, 0.08) 100%)`,
                      border: `1px solid rgba(${glowColor}, 0.25)`,
                      boxShadow: `
                        inset 0 2px 0 rgba(255, 255, 255, 0.2), 
                        inset 0 -2px 0 rgba(${glowColor}, 0.15),
                        0 0 40px rgba(${glowColor}, 0.2),
                        0 0 80px rgba(${glowColor}, 0.1)`,
                      transition: 'all 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                )}

                {/* Enhanced Phase badge with subtle accent */}
                <div className="mb-4 flex-shrink-0 relative z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ease-out ${
                    isActive 
                      ? `bg-gradient-to-r ${accentColor.primary} text-white ${accentColor.border} animate-pulse`
                      : isHovered
                        ? `bg-gradient-to-r ${accentColor.primary} opacity-80 text-white ${accentColor.border} scale-105`
                        : `bg-gradient-to-r ${accentColor.primary} opacity-60 text-white ${accentColor.border} hover:opacity-80`
                  }`}
                  style={{
                    boxShadow: isActive ? `0 0 20px rgba(${glowColor}, 0.4)` : 
                              isHovered ? `0 0 15px rgba(${glowColor}, 0.3)` : 
                              `0 0 10px rgba(${glowColor}, 0.2)`
                  }}>
                    {step.phase}
                  </span>
                </div>

                {/* Enhanced Title and subtitle - fixed space */}
                <div className="flex-shrink-0 mb-4 relative z-10">
                  <h3 className={`text-xl font-bold mb-3 leading-tight transition-all duration-300 ease-out ${
                    isActive ? 'text-white text-shadow-glow' :
                    isHovered ? 'text-white/95' : 'text-white/85'
                  }`}
                  style={{
                    textShadow: isActive ? `0 0 20px rgba(${glowColor}, 0.5)` :
                               isHovered ? `0 0 10px rgba(${glowColor}, 0.3)` : 'none'
                  }}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-snug transition-all duration-300 ease-out ${
                    isActive ? 'text-white/80' :
                    isHovered ? 'text-white/75' : 'text-white/70'
                  }`}>
                    {step.subtitle}
                  </p>
                </div>

                {/* Content area - different behavior for collapsed vs expanded */}
                <div className="flex-1 relative">
                  {/* Collapsed state content with bottom-right hover text */}
                  {!isActive && (
                    <div className="absolute inset-0">
                      {/* Enhanced Bottom right hover text with ArrowUpRight icon */}
                      <div className="absolute bottom-0 right-0 flex items-center">
                        <div 
                          className={`flex items-center text-xs ${
                            isHovered 
                              ? 'opacity-70 translate-y-0 scale-100' 
                              : 'opacity-0 translate-y-2 scale-95'
                          }`}
                          style={{ 
                            color: isHovered ? `rgb(${glowColor})` : '#9CA3AF',
                            textShadow: isHovered ? `0 0 10px rgba(${glowColor}, 0.5)` : 'none',
                            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                          }}
                        >
                          <span className="mr-1 font-medium">Klik voor details</span>
                          <ArrowUpRight 
                            className={`w-3 h-3 ${
                              isHovered ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-1 -rotate-12'
                            }`}
                            style={{
                              filter: isHovered ? `drop-shadow(0 0 4px rgba(${glowColor}, 0.6))` : 'none',
                              transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded state content with scrollable area */}
                  {isActive && (
                    <div className="absolute inset-0">
                      <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                        <div className={`pt-4 border-t transition-colors duration-200 ${
                          isActive ? accentColor.border : 'border-white/10'
                        }`}>
                          <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {step.description}
                          </p>
                          
                          {/* Deliverables with accent color bullets */}
                          <div className="space-y-3">
                            <h4 className="text-white/90 font-medium text-xs uppercase tracking-wider">
                              Deliverables:
                            </h4>
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start text-xs text-white/70">
                                <div 
                                  className="w-1 h-1 rounded-full mr-2 mt-2 flex-shrink-0"
                                  style={{
                                    background: `linear-gradient(135deg, rgba(${glowColor}, 1), rgba(${glowColor}, 0.8))`
                                  }}
                                />
                                <span className="leading-relaxed font-light">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accent line at bottom for active cards */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-px opacity-60 flex-shrink-0"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${glowColor}, 0.8), transparent)`
                    }}
                  />
                )}
              </div>

              {/* Connection line to next step (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 -right-3 w-6 h-0.5 bg-white/20 hidden lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkMethodologyProcess;
