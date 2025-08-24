import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, Variants, useReducedMotion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  accentColor: string;
  isSpecial?: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface CinematicServiceSectionProps {
  service: Service;
  index: number;
}

const CinematicServiceSection = ({ service, index }: CinematicServiceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isLowEndDevice, prefersReducedMotion, connectionSpeed } = usePerformanceOptimization();
  
  // Smart performance adjustments
  const shouldOptimizeForPerformance = isLowEndDevice || connectionSpeed === 'slow' || prefersReducedMotion;
  
  // More precise intersection observer for better performance
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px",
    amount: 0.2 
  });
  
  // Progressive enhancement - only animate once when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  
  // Cleanup function for memory management
  useEffect(() => {
    return () => {
      // Clean up any potential memory leaks
      if (sectionRef.current) {
        sectionRef.current.style.willChange = 'auto';
      }
    };
  }, []);
  
  // Determine layout order
  const isAutonomousAgents = service.id === 'autonomous-agents';
  const isEven = isAutonomousAgents ? true : (index % 2 === 1);
  
  // Ultra-smooth premium easing curves - veel smoother
  const ultraSmoothEasing = shouldOptimizeForPerformance ? "easeOut" : [0.25, 0.46, 0.45, 0.94]; // Veel soepeler
  const premiumEasing = shouldOptimizeForPerformance ? "easeOut" : [0.23, 1, 0.320, 1]; // Apple-style smoothness
  const springEasing = shouldOptimizeForPerformance ? "easeOut" : [0.175, 0.885, 0.32, 1.275]; // Zachte spring
  const glideEasing = shouldOptimizeForPerformance ? "easeOut" : [0.4, 0, 0.2, 1]; // Perfect gliding motion
  
  // Langere durations voor ultra-smooth motion
  const getOptimizedDuration = (baseMs: number) => shouldOptimizeForPerformance ? baseMs * 0.6 : baseMs * 1.2;

  // MAIN CONTAINER VARIANTS - Optimized for performance
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      willChange: 'opacity'
    },
    visible: {
      opacity: 1,
      willChange: 'auto', // Remove will-change after animation
      transition: {
        duration: getOptimizedDuration(800) / 1000, // Langere duration
        ease: ultraSmoothEasing,
        staggerChildren: getOptimizedDuration(120) / 1000, // Meer ruimte tussen animaties
        delayChildren: getOptimizedDuration(150) / 1000
      }
    }
  };

  // CONTENT VARIANTS - Performance optimized
  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldOptimizeForPerformance ? 10 : 40,
      scale: shouldOptimizeForPerformance ? 1 : 0.98,
      willChange: shouldOptimizeForPerformance ? 'auto' : 'opacity, transform'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      willChange: 'auto',
      transition: {
        duration: getOptimizedDuration(1200) / 1000, // Veel langer voor smoothness
        ease: premiumEasing,
        staggerChildren: getOptimizedDuration(100) / 1000,
        delayChildren: getOptimizedDuration(80) / 1000
      }
    }
  };

  // VISUAL ELEMENT VARIANTS - Optimized transforms
  const visualVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: shouldOptimizeForPerformance ? 1 : 0.9,
      y: shouldOptimizeForPerformance ? 0 : 25,
      rotateY: shouldOptimizeForPerformance ? 0 : -15,
      willChange: shouldOptimizeForPerformance ? 'auto' : 'opacity, transform'
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      willChange: 'auto',
      transition: {
        duration: getOptimizedDuration(1400) / 1000, // Langere visual animatie
        ease: springEasing,
        delay: getOptimizedDuration(200) / 1000
      }
    }
  };

  // TEXT ELEMENT VARIANTS - Respect motion preferences
  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldOptimizeForPerformance ? 0 : 20,
      x: shouldOptimizeForPerformance ? 0 : (isEven ? 10 : -10),
      willChange: shouldOptimizeForPerformance ? 'auto' : 'opacity, transform'
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      willChange: 'auto',
      transition: {
        duration: getOptimizedDuration(1000) / 1000, // Smooth text gliding
        ease: glideEasing
      }
    }
  };

  // BUTTON VARIANTS - Optimized for accessibility
  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldOptimizeForPerformance ? 0 : 15,
      scale: shouldOptimizeForPerformance ? 1 : 0.95,
      willChange: shouldOptimizeForPerformance ? 'auto' : 'opacity, transform'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      willChange: 'auto',
      transition: {
        duration: getOptimizedDuration(800) / 1000, // Langere button animaties
        ease: springEasing,
        delay: getOptimizedDuration(100) / 1000
      }
    }
  };

  // GLOW VARIANTS - Ambient glow fades in softly
  const glowVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  // SERVICE ROUTING LOGIC
  const isAIAutomations = service.id === 'ai-automations';
  const isCustomSaaS = service.id === 'custom-saas';
  const isConsultancy = service.id === 'consultancy';

  return (
    <motion.section 
      ref={sectionRef}
      data-service-section={index}
      className={`relative py-20 lg:py-28 flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b ${service.background}`}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      style={{
        // Performance optimization
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {/* Background pattern for special section */}
      {service.isSpecial && (
        <motion.div 
          className="absolute inset-0 opacity-10"
          variants={glowVariants}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }} />
        </motion.div>
      )}

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* CONTENT SECTION - Text and buttons */}
        <motion.div 
          className={`space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          variants={contentVariants}
        >
          {/* Typography with cascading entrance */}
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              variants={textVariants}
            >
              {service.title}
            </motion.h2>
            
            <motion.h3 
              className="text-xl md:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed"
              variants={textVariants}
            >
              {service.subtitle}
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-lg text-premium-silver/70 font-light leading-relaxed max-w-lg tracking-wide"
              variants={textVariants}
            >
              {service.description}
            </motion.p>
          </div>

          {/* CTA BUTTONS - Elastic entrance */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-8"
            variants={contentVariants}
          >
            <motion.button 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25"
              variants={buttonVariants}
            >
              <span className="relative z-10 text-sm font-medium">
                {service.primaryButtonText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            {isAIAutomations ? (
              <motion.a 
                href="/ai-automations"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10"
                variants={buttonVariants}
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <div className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ) : isCustomSaaS ? (
              <motion.a 
                href="/custom-ai-saas"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10"
                variants={buttonVariants}
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <div className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ) : isConsultancy ? (
              <motion.a 
                href="/consultancy"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10"
                variants={buttonVariants}
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <div className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ) : isAutonomousAgents ? (
              <motion.a 
                href="/autonomous-ai-agents"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10"
                variants={buttonVariants}
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <div className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ) : (
              <motion.button 
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:shadow-lg hover:shadow-white/10"
                variants={buttonVariants}
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <div className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        {/* VISUAL ELEMENT - Service icon with cinematic entrance */}
        <motion.div 
          className={`relative ${isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}
          variants={visualVariants}
        >
          <div className="group relative w-72 h-72 transition-all duration-500 ease-out hover:scale-105 will-change-transform">
            
            {/* Enhanced glow effect - Normal endstate (geen hover tijdens animatie) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-25 transition-all duration-700 ease-out group-hover:opacity-40 group-hover:scale-105 will-change-transform`} />
            
            {/* Main device container */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-3xl">
              
              {service.isSpecial ? (
                // Special animated core for unique services
                <div className="relative w-32 h-32">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-400/50"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  />
                  <motion.div 
                    className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/60 to-cyan-500/60"
                    animate={{ 
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity
                    }}
                  />
                  <motion.div 
                    className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-14 h-14 text-blue-300 drop-shadow-lg" />
                  </div>
                  
                  {/* Orbiting dots with smooth animation */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
                  </motion.div>
                </div>
              ) : (
                // Regular service visualization
                <div className="relative w-28 h-28">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-xl opacity-75 transition-all duration-500 ease-out group-hover:opacity-90 group-hover:shadow-2xl`}>
                    <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">
                      
                      {/* Icon */}
                      <service.icon className="w-14 h-14 text-white/80 relative z-10 drop-shadow-lg transition-all duration-300 ease-out group-hover:text-white" style={{
                        filter: `drop-shadow(0 0 6px ${service.accentColor.includes('blue') ? '#60a5fa' : 
                                                     service.accentColor.includes('purple') ? '#a855f7' : 
                                                     service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}30)`
                      }} />
                      
                      {/* Sweeping light */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full" 
                           style={{ 
                             animation: 'sweep 3s ease-in-out infinite',
                             animationDelay: `${index * 0.5}s`
                           }} />
                      
                      {/* Ambient glow */}
                      <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-6 transition-opacity duration-500 ease-out group-hover:opacity-12`} />
                    </div>
                  </div>
                  
                  {/* Floating accents */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-60 shadow-lg transition-all duration-700 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-75`} />
                  <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-55 shadow-lg transition-all duration-700 ease-out delay-75 group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-70`} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CinematicServiceSection;