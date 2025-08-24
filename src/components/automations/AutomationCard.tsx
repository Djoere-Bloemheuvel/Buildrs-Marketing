
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface AutomationCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    accent: string;
    glowColor: string;
    borderGlow: string;
    iconGlow: string;
    delay: number;
  };
  index: number;
  isVisible: boolean;
  isEven: boolean;
}

const AutomationCard = ({ feature, index, isVisible, isEven }: AutomationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      data-automation-item
      data-index={index}
      className={`
        group relative transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
        ${!isEven ? 'lg:mt-24' : ''}
        transform-gpu will-change-transform
      `}
      style={{ 
        transitionDelay: `${feature.delay}ms`,
        transform: 'translateZ(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card container with premium glassmorphism */}
      <div className={`
        relative p-8 lg:p-10 rounded-[24px] backdrop-blur-xl 
        border border-white/[0.12] bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent 
        hover:from-white/[0.10] hover:via-white/[0.06] hover:to-white/[0.02]
        transition-all duration-700 ease-out will-change-transform
        group-hover:scale-[1.02] group-hover:translate-y-[-8px]
        ${feature.glowColor} hover:shadow-2xl
      `}>
        
        {/* Ambient background glow - intensified */}
        <div className={`
          absolute inset-0 rounded-[24px] bg-gradient-to-r ${feature.accent} 
          opacity-35 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none
          will-change-opacity
        `} />
        
        {/* Enhanced border glow on hover - intensified */}
        <div className={`
          absolute inset-0 rounded-[24px] border ${feature.borderGlow}
          opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none
        `} />
        
        {/* Icon container with premium styling */}
        <div className="relative mb-8">
          <div className="relative w-20 h-20 mx-auto lg:mx-0">
            {/* Multi-layered icon background with ambient glow - intensified */}
            <div className={`
              absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} 
              opacity-40 group-hover:opacity-65 transition-all duration-500
              will-change-opacity
            `} />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-premium-black/85 to-premium-gray/30 backdrop-blur-sm" />
            
            {/* Icon with intensified glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <feature.icon 
                className={`
                  w-9 h-9 text-white/90 transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:${feature.iconGlow} group-hover:text-white
                  will-change-transform
                  drop-shadow-md group-hover:drop-shadow-xl
                `}
                style={{
                  filter: `drop-shadow(0 2px 12px rgba(255, 255, 255, 0.2)) ${isHovered ? `drop-shadow(0 4px 20px rgba(59, 130, 246, 0.5))` : ''}`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>
            
            {/* Stable ambient ring - intensified */}
            <div className={`
              absolute inset-[-2px] rounded-2xl bg-gradient-to-r ${feature.accent} 
              opacity-25 group-hover:opacity-45 transition-opacity duration-500 blur-sm
              will-change-opacity
            `} />
          </div>
        </div>

        {/* Content with refined typography */}
        <div className="text-center lg:text-left space-y-4">
          {/* Title with intensified glow */}
          <h3 className={`
            text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight
            transition-all duration-500 group-hover:${feature.iconGlow}
            will-change-color drop-shadow-sm group-hover:drop-shadow-md
          `}>
            {feature.title}
          </h3>
          
          {/* Subtitle with enhanced readability */}
          <p className="text-base lg:text-lg text-premium-silver/90 font-light leading-relaxed max-w-sm mx-auto lg:mx-0 transition-colors duration-500 group-hover:text-premium-silver">
            {feature.subtitle}
          </p>
        </div>

        {/* Subtle microinteraction elements - intensified */}
        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-all duration-500 group-hover:scale-125" />
        <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-white/15 group-hover:bg-white/35 transition-all duration-500 group-hover:scale-150" />
      </div>

      {/* Premium floating shadow with ambient lighting - intensified */}
      <div className={`
        absolute inset-0 rounded-[24px] ${feature.glowColor} 
        opacity-30 group-hover:opacity-55 transition-opacity duration-700 -z-10 blur-2xl
        will-change-opacity
      `} style={{ transform: 'translateY(12px)' }} />
    </div>
  );
};

export default AutomationCard;
