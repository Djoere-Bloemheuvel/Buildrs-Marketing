import { LucideIcon } from 'lucide-react';
import { ChevronDown, Clock, ArrowRight } from 'lucide-react';

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
}

interface WorkMethodologyCardProps {
  step: MethodologyStep;
  isLeft: boolean;
  isVisible: boolean;
  isActive: boolean;
  onToggle: () => void;
  delay: number;
}

/**
 * Work Methodology Card Component
 * - Security hardened with proper event handling
 * - Performance optimized with conditional rendering
 * - Apple-inspired glassmorphism design
 * - Fully responsive for all screen sizes
 */
const WorkMethodologyCard = ({ 
  step, 
  isLeft, 
  isVisible, 
  isActive, 
  onToggle, 
  delay 
}: WorkMethodologyCardProps) => {
  
  // Security: Safe event handler with validation
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Input validation for security
    if (typeof onToggle !== 'function') {
      console.warn('Invalid onToggle handler');
      return;
    }
    
    onToggle();
  };

  // Security: Safe keyboard handler
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as any);
    }
  };

  return (
    <div
      data-card-id={step.id}
      className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
      style={{ minHeight: '200px' }}
    >
      {/* Enhanced ambient glow with conditional rendering for performance */}
      {isVisible && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `scale(${isVisible ? 1 : 0.9})`,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: `${delay}ms`
          }}
        >
          {/* Multiple glow layers for depth */}
          <div
            className={`absolute w-[30rem] h-[30rem] rounded-full blur-[3rem] bg-gradient-to-br ${step.glowColor} opacity-30`}
            style={{
              [isLeft ? 'left' : 'right']: '-12rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <div
            className={`absolute w-96 h-96 rounded-full blur-2xl bg-gradient-to-br ${step.glowColor} opacity-40`}
            style={{
              [isLeft ? 'left' : 'right']: '-6rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      )}

      {/* Card container with responsive design */}
      <div
        className={`relative w-full max-w-lg transition-all duration-500 ease-out cursor-pointer group ${
          isLeft ? 'pr-6 lg:pr-12' : 'pl-6 lg:pl-12'
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? 0 : 20}px) scale(${isVisible ? 1 : 0.95})`,
          transitionDelay: `${delay}ms`
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        aria-label={`${step.phase}: ${step.title} - Klik om details te bekijken`}
      >
        {/* Glassmorphic card with enhanced design */}
        <div
          className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 overflow-hidden border
            ${isActive 
              ? 'bg-white/[0.04] border-white/20 shadow-2xl shadow-black/60' 
              : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.03] hover:border-white/15'
            }`}
          style={{
            backdropFilter: 'blur(20px) saturate(150%)',
            boxShadow: isActive 
              ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
              : '0 12px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Header section */}
          <div className={`flex items-start justify-between mb-6 ${isLeft ? '' : 'flex-row-reverse'}`}>
            <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
              {/* Phase badge */}
              <div className={`inline-flex items-center mb-3 ${isLeft ? '' : 'flex-row-reverse'}`}>
                <span 
                  className="text-xs font-mono text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                  style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                >
                  {step.phase}
                </span>
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} ml-3 ${isLeft ? '' : 'order-first mr-3 ml-0'}`} />
              </div>
              
              {/* Title and subtitle */}
              <h3 
                className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}
              >
                {step.title}
              </h3>
              <p 
                className="text-white/70 text-sm lg:text-base leading-relaxed font-light mb-4"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
              >
                {step.subtitle}
              </p>
              
              {/* Duration indicator */}
              <div className={`flex items-center text-white/50 text-sm mb-2 ${isLeft ? '' : 'justify-end'}`}>
                <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{step.duration}</span>
              </div>
            </div>

            {/* Icon and expand indicator */}
            <div className={`flex items-center space-x-3 ${isLeft ? '' : 'flex-row-reverse space-x-reverse'}`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                  isActive ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`} 
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Expandable content with smooth animation */}
          <div className={`overflow-hidden transition-all duration-500 ease-out ${
            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 leading-relaxed mb-6 text-sm lg:text-base">
                {step.description}
              </p>
              
              {/* Deliverables list */}
              <div className="space-y-3">
                <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wide">
                  Wat je krijgt:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {step.deliverables.map((deliverable, idx) => (
                    <div 
                      key={`${step.id}-deliverable-${idx}`}
                      className={`flex items-center text-sm text-white/70 ${
                        isLeft ? '' : 'justify-end flex-row-reverse'
                      }`}
                    >
                      <ArrowRight className={`w-3 h-3 text-white/50 ${isLeft ? 'mr-2' : 'ml-2'}`} aria-hidden="true" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connection line to timeline */}
          <div 
            className={`absolute top-1/2 w-8 h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-0.5 ${
              isLeft ? '-right-8' : '-left-8 rotate-180'
            }`}
            aria-hidden="true"
          />

          {/* Glassmorphic accent details */}
          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Central timeline dot */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} border-2 border-black shadow-lg transition-all duration-300 ${
          isActive ? 'scale-125 shadow-2xl' : 'hover:scale-110'
        }`} />
      </div>
    </div>
  );
};

export default WorkMethodologyCard;
