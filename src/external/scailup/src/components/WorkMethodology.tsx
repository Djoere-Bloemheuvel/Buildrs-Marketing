import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, CheckCircle } from 'lucide-react';
import WorkMethodologyProcess from './WorkMethodologyProcess';
import HorizontalLightFlare from './HorizontalLightFlare';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
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

/**
 * Work Methodology Section - Horizontal Process Flow Design
 * - Completely different from Approach section with horizontal workflow
 * - Interactive process steps with hover animations
 * - Modern card-based design instead of timeline
 * - Focus on process flow rather than principles
 * - Unique accent colors per step for enhanced visual branding
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          console.log('🔥 WorkMethodology entrance animation triggered');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Methodology steps focused on practical workflow with unique accent colors
  const methodologySteps: MethodologyStep[] = useMemo(() => [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We starten met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan.",
      icon: Target,
      color: "from-emerald-400 to-teal-500", // Keep original for fallback
      glowColor: "emerald-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Strategisch plan", "Technische architectuur", "ROI projectie"],
      accentColor: {
        primary: "from-blue-500 to-cyan-600", // Consultancy page hero color
        glow: "blue-500/20",
        border: "border-blue-500/30",
        subtle: "blue-500/5"
      }
    },
    {
      id: 2,
      phase: "Dag 1-3", 
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen drie dagen hebben jullie een werkende proof-of-concept in handen. Zo kunnen jullie direct ervaren hoe de oplossing werkt en feedback geven.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500", // Keep original for fallback
      glowColor: "yellow-400/25", // Keep original for fallback
      duration: "3 dagen",
      deliverables: ["Werkende demo", "User interface", "Feedback sessie"],
      accentColor: {
        primary: "from-purple-500 to-violet-600", // Custom AI SaaS hero color
        glow: "purple-500/20",
        border: "border-purple-500/30",
        subtle: "purple-500/5"
      }
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Bouw", 
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zien jullie nieuwe functionaliteiten. We bouwen stapsgewijs uit met jullie feedback, zodat het eindresultaat perfect aansluit bij jullie wensen.",
      icon: Users,
      color: "from-blue-400 to-indigo-500", // Keep original for fallback
      glowColor: "blue-400/25", // Keep original for fallback
      duration: "2-4 weken",
      deliverables: ["Weekly updates", "Live demonstraties", "Gebruikerstests"],
      accentColor: {
        primary: "from-emerald-400 to-teal-500", // Autonomous AI Agents hero color (mint green)
        glow: "emerald-400/20",
        border: "border-emerald-400/30",
        subtle: "emerald-400/5"
      }
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Live & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We gaan live en optimaliseren direct op basis van echte data. Jullie team krijgt volledige training en we blijven monitoren voor perfecte prestaties.",
      icon: CheckCircle,
      color: "from-purple-400 to-pink-500", // Keep original for fallback
      glowColor: "purple-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Live deployment", "Team training", "Performance monitoring"],
      accentColor: {
        primary: "from-orange-500 to-amber-600", // New orange variant
        glow: "orange-500/20",
        border: "border-orange-500/30",
        subtle: "orange-500/5"
      }
    }
  ], []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(current => current >= methodologySteps.length ? 1 : current + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, methodologySteps.length]);

  const handleStepSelect = (stepId: number) => {
    setActiveStep(stepId);
    setIsPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 overflow-hidden bg-black"
      aria-label="Onze werk methodologie - stap voor stap proces"
    >
      {/* Horizontal light flare at top for section separation */}
      <HorizontalLightFlare position="top" className="-top-8" />

      {/* Custom ambient glow underneath the flare line - scoped to this section only - 25% MORE INTENSE */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-80 pointer-events-none z-5">
        <div 
          className="w-full h-full opacity-25"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
              rgba(34, 211, 238, 0.9) 0%, 
              rgba(59, 130, 246, 0.75) 30%, 
              rgba(147, 51, 234, 0.5) 50%, 
              rgba(34, 211, 238, 0.25) 70%, 
              transparent 100%
            )`,
            filter: 'blur(100px)'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with premium animations like Approach section */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Hero title with premium animations */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {/* First line - "Van visie naar uitvoering." - depth blur reveal with ambient glow */}
            <div className="relative">
              <motion.h2 
                className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
                }}
                initial={{ 
                  opacity: 0, 
                  filter: 'blur(4px)'
                }}
                whileInView={{ 
                  opacity: 1, 
                  filter: 'blur(0px)'
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                Van visie naar uitvoering.
              </motion.h2>
              
              {/* Ambient glow pulse */}
              <motion.div
                className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight pointer-events-none"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                  filter: 'blur(20px)',
                  color: '#22d3ee'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2.0,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                Van visie naar uitvoering.
              </motion.div>
            </div>
            
            {/* Second line - "Zo brengen we de principes tot leven." - depth blur reveal with ambient glow */}
            <div className="relative">
              <motion.div 
                className="relative text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
                }}
                initial={{ 
                  opacity: 0, 
                  filter: 'blur(4px)'
                }}
                whileInView={{ 
                  opacity: 1, 
                  filter: 'blur(0px)'
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                Zo brengen we de principes tot leven.
              </motion.div>
              
              {/* Ambient glow pulse */}
              <motion.div
                className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight pointer-events-none"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                  filter: 'blur(20px)',
                  color: '#22d3ee'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2.2,
                  delay: 1.0,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                Zo brengen we de principes tot leven.
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal process flow with enhanced accent colors */}
        <WorkMethodologyProcess 
          steps={methodologySteps}
          activeStep={activeStep}
          onStepSelect={handleStepSelect}
          isVisible={isVisible}
        />
      </div>

      {/* Gradient fade to black effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default WorkMethodology;
