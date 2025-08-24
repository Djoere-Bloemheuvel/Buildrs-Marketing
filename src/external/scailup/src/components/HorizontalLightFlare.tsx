

interface HorizontalLightFlareProps {
  position?: 'top' | 'bottom';
  className?: string;
}

const HorizontalLightFlare = ({ position = 'bottom', className = '' }: HorizontalLightFlareProps) => {
  // Determine positioning classes based on the position prop
  const positionClasses = position === 'top' 
    ? 'top-0' 
    : 'bottom-0';

  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-none h-px pointer-events-none z-30 ${positionClasses} ${className}`}>
      {/* Primary horizontal light flare - made much wider */}
      <div className="relative w-full h-full">
        {/* Main glow strip - bluish/purple with enhanced intensity and wider spread */}
        <div 
          className="absolute inset-0 w-full h-full opacity-90"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.3) 5%, 
              rgba(34, 211, 238, 0.6) 15%, 
              rgba(147, 51, 234, 0.8) 50%, 
              rgba(34, 211, 238, 0.6) 85%, 
              rgba(59, 130, 246, 0.3) 95%, 
              transparent 100%
            )`,
            filter: 'blur(1px)',
            animation: 'horizontal-flare-pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glow layer for enhanced depth - wider */}
        <div 
          className="absolute inset-0 w-full h-full opacity-75"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(34, 211, 238, 0.15) 8%, 
              rgba(147, 51, 234, 0.5) 50%, 
              rgba(34, 211, 238, 0.15) 92%, 
              transparent 100%
            )`,
            filter: 'blur(3px)',
            animation: 'horizontal-flare-pulse 12s ease-in-out infinite reverse'
          }}
        />
        
        {/* Enhanced central accent line - wider core */}
        <div 
          className="absolute inset-0 w-full h-px opacity-95"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 10%, 
              rgba(34, 211, 238, 0.9) 50%, 
              transparent 90%, 
              transparent 100%
            )`,
            filter: 'blur(0.3px)',
            animation: 'horizontal-flare-shimmer 6s ease-in-out infinite'
          }}
        />
        
        {/* Extended ambient outer glow - much wider */}
        <div 
          className="absolute inset-0 w-full h-16 -top-8 opacity-45"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.08) 10%, 
              rgba(147, 51, 234, 0.15) 50%, 
              rgba(59, 130, 246, 0.08) 90%, 
              transparent 100%
            )`,
            filter: 'blur(8px)'
          }}
        />
        
        {/* Additional intense core glow - wider spread */}
        <div 
          className="absolute inset-0 w-full h-full opacity-70"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 20%, 
              rgba(147, 51, 234, 0.7) 40%, 
              rgba(34, 211, 238, 0.9) 50%, 
              rgba(147, 51, 234, 0.7) 60%, 
              transparent 80%, 
              transparent 100%
            )`,
            filter: 'blur(0.5px)',
            animation: 'horizontal-flare-shimmer 4s ease-in-out infinite'
          }}
        />
        
        {/* NEW: Ultra-wide base glow for maximum width */}
        <div 
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.1) 2%, 
              rgba(34, 211, 238, 0.2) 25%, 
              rgba(147, 51, 234, 0.4) 50%, 
              rgba(34, 211, 238, 0.2) 75%, 
              rgba(59, 130, 246, 0.1) 98%, 
              transparent 100%
            )`,
            filter: 'blur(6px)',
            animation: 'horizontal-flare-pulse 10s ease-in-out infinite'
          }}
        />
        
        {/* Downward aura glow - only show when position is bottom, made wider */}
        {position === 'bottom' && (
          <>
            {/* Primary downward aura - wider */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-40 opacity-35"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(147, 51, 234, 0.2) 0%, 
                  rgba(34, 211, 238, 0.15) 30%, 
                  rgba(59, 130, 246, 0.08) 60%, 
                  transparent 100%
                )`,
                filter: 'blur(10px)',
                animation: 'aura-pulse 10s ease-in-out infinite'
              }}
            />
            
            {/* Secondary wider aura - extended */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-48 opacity-25"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.12) 0%, 
                  rgba(147, 51, 234, 0.08) 40%, 
                  rgba(59, 130, 246, 0.04) 70%, 
                  transparent 100%
                )`,
                filter: 'blur(15px)',
                animation: 'aura-pulse 14s ease-in-out infinite reverse'
              }}
            />
            
            {/* Subtle particle-like glow points - wider */}
            <div 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[60%] h-32 opacity-30"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.15) 0%, 
                  rgba(147, 51, 234, 0.12) 50%, 
                  transparent 100%
                )`,
                filter: 'blur(6px)',
                animation: 'aura-shimmer 8s ease-in-out infinite'
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HorizontalLightFlare;

