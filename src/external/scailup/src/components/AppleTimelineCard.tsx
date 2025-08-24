import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AppleTimelineCardProps {
  step: {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    icon: LucideIcon | null;
    glowColor: string;
    glowColorHover: string;
    isTransition?: boolean;
  };
  isLeft: boolean;
  delay: number;
}

const AppleTimelineCard = ({ step, isLeft }: AppleTimelineCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  // Special styling for transition step
  const isTransitionStep = step.isTransition;
  const cardWidth = isTransitionStep ? 'max-w-xs' : 'max-w-sm';
  const cardScale = isTransitionStep ? 'scale-90' : 'scale-100';

  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      {/* Enhanced Ambient Glow with subtle pulse animation */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-100 scale-100"
        animate={{
          opacity: step.id === 1 
            ? [0.95, 1.25, 1.55, 1.35, 1.65, 1.45, 1.05, 0.95]
            : step.id === 2 
            ? [0.90, 1.20, 1.50, 1.60, 1.50, 1.25, 1.00, 0.90]
            : step.id === 3
            ? [0.85, 1.15, 1.40, 1.20, 1.30, 1.10, 0.95, 0.85]
            : [0.80, 1.10, 1.30, 1.35, 1.20, 1.00, 0.90, 0.80],
          scale: step.id === 1
            ? [0.98, 1.02, 1.04, 1.01, 0.99, 0.98]
            : step.id === 2
            ? [0.97, 1.01, 1.05, 1.03, 0.98, 0.97]
            : step.id === 3
            ? [0.99, 1.03, 1.02, 1.04, 1.0, 0.99]
            : [0.96, 1.0, 1.06, 1.02, 0.97, 0.96],
          x: step.id === 1
            ? [0, isLeft ? -1.2 : 1.2, 0, isLeft ? 0.8 : -0.8, 0]
            : step.id === 2
            ? [0, isLeft ? -0.8 : 0.8, 0.3, isLeft ? 0.5 : -0.5, 0]
            : step.id === 3
            ? [0, isLeft ? -0.5 : 0.5, 0, isLeft ? 1.0 : -1.0, 0]
            : [0, isLeft ? -1.5 : 1.5, -0.2, isLeft ? 0.3 : -0.3, 0],
          y: step.id === 1
            ? [0, -1.2, -0.8, 0.5, 0.8, 0.3, -0.4, 0]
            : step.id === 2
            ? [0, -0.5, 0.9, 0.2, -0.3, 1.1, -0.6, 0]
            : step.id === 3
            ? [0, -0.9, 0.6, -1.0, 0.4, -0.7, 0.8, 0]
            : [0, -0.7, 1.0, -0.4, 0.9, -0.8, 0.5, 0],
          rotate: step.id === 1
            ? [0, isLeft ? -0.3 : 0.3, 0, isLeft ? 0.15 : -0.15, 0]
            : step.id === 2
            ? [0, isLeft ? -0.1 : 0.1, 0.2, isLeft ? 0.05 : -0.05, 0]
            : step.id === 3
            ? [0, isLeft ? -0.25 : 0.25, 0, isLeft ? 0.2 : -0.2, 0]
            : [0, isLeft ? -0.15 : 0.15, -0.1, isLeft ? 0.25 : -0.25, 0]
        }}
        transition={{
          duration: 6 + (step.id * 0.5),
          ease: [0.4, 0, 0.6, 1],
          repeat: Infinity,
          delay: step.id * 0.8,
          times: [0, 0.14, 0.28, 0.42, 0.56, 0.70, 0.84, 1]
        }}
      >
        {/* Enhanced glow layers with progressive fade and randomness */}
        <div
          className={`
            absolute rounded-full blur-[3rem]
            bg-gradient-to-br ${step.glowColor}
            ${isLeft ? '-left-36 top-1/2 -translate-y-1/2' : '-right-36 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-72 h-80 opacity-100' : 'w-88 h-104 opacity-100'}
          `}
          style={{
            background: `radial-gradient(ellipse ${isLeft ? '75% 90%' : '90% 75%'} at center, 
              ${step.id === 1 ? 'rgba(59, 130, 246, 0.8)' :
                step.id === 2 ? 'rgba(59, 130, 246, 0.8)' :
                step.id === 3 ? 'rgba(96, 165, 250, 0.8)' :
                'rgba(37, 99, 235, 0.8)'} 0%, 
              ${step.id === 1 ? 'rgba(59, 130, 246, 0.4)' :
                step.id === 2 ? 'rgba(59, 130, 246, 0.4)' :
                step.id === 3 ? 'rgba(96, 165, 250, 0.4)' :
                'rgba(37, 99, 235, 0.4)'} 50%, 
              transparent 75%)`
          }}
        />

        <div
          className={`
            absolute rounded-full blur-3xl
            bg-gradient-to-br ${step.glowColor}
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-56 h-64 opacity-100' : 'w-72 h-80 opacity-100'}
          `}
          style={{
            background: `radial-gradient(ellipse ${isLeft ? '85% 70%' : '70% 85%'} at center, 
              ${step.id === 1 ? 'rgba(59, 130, 246, 0.7)' :
                step.id === 2 ? 'rgba(59, 130, 246, 0.7)' :
                step.id === 3 ? 'rgba(96, 165, 250, 0.7)' :
                'rgba(37, 99, 235, 0.7)'} 0%, 
              transparent 60%)`
          }}
        />

        <div
          className={`
            absolute rounded-full blur-xl
            bg-gradient-to-br ${step.glowColorHover}
            ${isLeft ? '-left-8 top-1/2 -translate-y-1/2' : '-right-8 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-32 h-40 opacity-100' : 'w-40 h-48 opacity-100'}
          `}
          style={{
            background: `radial-gradient(ellipse ${isLeft ? '90% 75%' : '75% 90%'} at center, 
              ${step.id === 1 ? 'rgba(34, 211, 238, 0.9)' :
                step.id === 2 ? 'rgba(34, 211, 238, 0.9)' :
                step.id === 3 ? 'rgba(37, 99, 235, 0.9)' :
                'rgba(59, 130, 246, 0.9)'} 0%, 
              transparent 50%)`
          }}
        />

        {!isTransitionStep && (
          <div
            className={`
              absolute w-[26rem] h-[30rem] rounded-full blur-[3.5rem]
              ${isLeft ? '-left-52 top-1/2 -translate-y-1/2' : '-right-52 top-1/2 -translate-y-1/2'}
              opacity-90
            `}
            style={{
              background: `radial-gradient(ellipse ${isLeft ? '65% 85%' : '85% 65%'} at center, 
                ${step.id === 1 ? 'rgba(59, 130, 246, 0.6)' :
                  step.id === 2 ? 'rgba(59, 130, 246, 0.6)' :
                  step.id === 3 ? 'rgba(96, 165, 250, 0.6)' :
                  'rgba(37, 99, 235, 0.6)'} 0%, 
                transparent 70%)`
            }}
          />
        )}
      </motion.div>

      {/* Enhanced Card Container with subtle hover */}
      <motion.div 
        className={`relative w-full ${cardWidth} ${cardScale}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.03,
          y: -6,
          rotateY: isLeft ? 2 : -2,
          rotateX: -1
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* Glassmorphic Card */}
        <div className={`
          relative z-10
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <motion.div 
            className={`
              relative rounded-3xl
              backdrop-blur-xl shadow-2xl border
              ${isTransitionStep
                ? 'p-5 lg:p-6 border-white/[0.08] shadow-black/20'
                : 'p-6 lg:p-7 border-white/[0.12] shadow-black/40'
              }
            `}
            style={{
              background: step.id === 1 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(34, 211, 238, 0.06) 50%, rgba(59, 130, 246, 0.04) 100%)' :
                         step.id === 2 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(34, 211, 238, 0.08) 50%, rgba(59, 130, 246, 0.06) 100%)' :
                         step.id === 3 ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(37, 99, 235, 0.08) 50%, rgba(96, 165, 250, 0.06) 100%)' :
                         'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(37, 99, 235, 0.06) 100%)'
            }}
          >

            {/* Enhanced Step Number */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className={`
                  font-black leading-none mb-2 font-mono
                  ${isTransitionStep
                    ? 'text-3xl lg:text-4xl text-white/8'
                    : 'text-4xl lg:text-5xl text-white/10'
                  }
                `}>
                  {step.number}
                </div>
                <div className={`
                  absolute top-0.5 left-0.5 font-black
                  bg-gradient-to-br leading-none font-mono
                  bg-clip-text text-transparent
                  ${isTransitionStep
                    ? 'text-3xl lg:text-4xl from-white/60 via-white/45 to-white/35'
                    : 'text-4xl lg:text-5xl from-white/90 via-white/70 to-white/50'
                  }
                `}>
                  {step.number}
                </div>
              </div>

              {/* Enhanced Icon - only if not transition step */}
              {step.icon && (
                <div className="w-5 h-5 text-white/40">
                  <step.icon className="w-full h-full" />
                </div>
              )}
            </div>

            {/* Enhanced Content */}
            <div className="space-y-3">
              <h3 className={`
                font-bold leading-tight tracking-tight font-sans
                ${isTransitionStep
                  ? 'text-base lg:text-lg text-white/80'
                  : 'text-lg lg:text-xl text-white/95'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              }}>
                {step.title}
              </h3>

              <p className={`
                font-light leading-relaxed
                ${isTransitionStep
                  ? 'text-white/50 text-xs lg:text-sm'
                  : 'text-white/65 text-sm lg:text-base'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
              }}>
                {step.subtitle}
              </p>
            </div>

            {/* Enhanced Connection line */}
            <div className={`
              absolute top-1/2 -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isTransitionStep
                ? 'w-4 lg:w-6 h-px opacity-60'
                : 'w-6 lg:w-10 h-px'
              }
              ${isLeft ? '-right-4 lg:-right-6 origin-left' : '-left-4 lg:-left-6 rotate-180 origin-right'}
            `}>
              <div className={`absolute inset-0 w-1 h-full rounded-full ${
                isTransitionStep
                  ? 'bg-gradient-to-r from-white/20 to-transparent'
                  : 'bg-gradient-to-r from-cyan-400/40 to-transparent'
              }`} />
            </div>

            {/* Enhanced glassmorphic details */}
            <div className={`
              absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent to-transparent
              ${isTransitionStep ? 'via-white/8' : 'via-white/15'}
            `} />

            <div className={`
              absolute top-4 left-0 w-px h-8 bg-gradient-to-b to-transparent
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
            `} />

            <div className={`
              absolute top-4 right-0 w-px h-8 bg-gradient-to-b to-transparent
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
            `} />

            {/* Enhanced glass reflection */}
            <div className={`
              absolute top-2 left-2 rounded-full blur-sm
              bg-gradient-to-br to-transparent
              ${isTransitionStep
                ? 'w-12 h-12 from-white/[0.04]'
                : 'w-16 h-16 from-white/[0.08]'
              }
            `} />

            {/* Static overlay for transition step */}
            {isTransitionStep && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppleTimelineCard;