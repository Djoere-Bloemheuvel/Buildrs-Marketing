
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AppleTimelineCard from './AppleTimelineCard';

interface AppleTimelineProps {
  isVisible: boolean;
}

const AppleTimeline = ({ isVisible }: AppleTimelineProps) => {
  // Use will-change for performance optimization
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && timelineRef.current) {
      // Remove will-change after animations complete for better performance
      const timer = setTimeout(() => {
        if (timelineRef.current) {
          timelineRef.current.style.willChange = 'auto';
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder concessies",
      subtitle: "We bouwen in dagen waar andere maanden over doen. Snelheid is niet optioneel.",
      icon: Clock,
      glowColor: "from-blue-500/20 to-cyan-400/15", // AI Automations blue
      glowColorHover: "from-blue-500/35 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02",
      title: "Ownership mentaliteit",
      subtitle: "Jullie succes is ons succes. We bouwen voor jullie alsof het ons eigen bedrijf is.",
      icon: HandHeart,
      glowColor: "from-blue-500/20 to-blue-400/15", // ScailUp variation - blue to lighter blue (was card 4 color)
      glowColorHover: "from-blue-500/35 to-blue-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "High standards",
      subtitle: "Perfect is het vertrekpunt. We leveren niets wat we zelf niet zouden gebruiken.",
      icon: Target,
      glowColor: "from-blue-400/20 to-blue-600/15", // ScailUp variation - light to dark blue
      glowColorHover: "from-blue-400/35 to-blue-600/25",
    },
    {
      id: 4,
      number: "04",
      title: "Functionele creativiteit",
      subtitle: "AI zonder creativiteit is kracht zonder richting. Wij sturen die kracht met visie.",
      icon: TrendingUp,
      glowColor: "from-blue-600/20 to-blue-500/15", // ScailUp variation - darker blue (was card 2 color)
      glowColorHover: "from-blue-600/35 to-blue-500/25",
    }
  ];

  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto" style={{ willChange: isVisible ? 'auto' : 'transform' }}>
      {/* Subtle central timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with gentle fade-in */}
        <div className={`w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent transition-opacity duration-1200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDelay: '450ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }} />

        {/* Subtle animated glow - only after main elements load */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
        >
          <div
            className="w-full h-12 bg-gradient-to-b from-cyan-400/15 via-white/20 to-transparent blur-sm"
            style={{
              animation: isVisible ? 'subtleTimelineGlow 25s ease-in-out infinite' : 'none',
              transformOrigin: 'top'
            }}
          />
        </div>

        {/* Timeline dots with subtle entrance */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: `${12 + (index * 18)}%`,
            }}
          >
            <div className={`relative transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{
              transitionDelay: `${600 + (index * 60)}ms`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              willChange: 'transform, opacity'
            }}
            >
              <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: `${1000 + (index * 80)}ms` }} />
              </div>
              {/* Subtle outer glow */}
              <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-125 opacity-50 bg-white/10 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: `${1200 + (index * 80)}ms` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline cards without animations */}
      <div className="relative z-10 space-y-8 lg:space-y-10">
        {steps.map((step, index) => (
          <div key={step.id}>
            <AppleTimelineCard
              step={step}
              isLeft={index % 2 === 0}
              delay={0}
            />
          </div>
        ))}
      </div>

      {/* Subtle timeline glow animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtleTimelineGlow {
            0%, 100% {
              transform: translateY(-100%);
              opacity: 0;
            }
            2% {
              opacity: 0.1;
            }
            8% {
              opacity: 0.3;
              transform: translateY(-60%);
            }
            25% {
              opacity: 0.6;
              transform: translateY(0%);
            }
            75% {
              opacity: 0.4;
              transform: translateY(60%);
            }
            92% {
              opacity: 0.1;
              transform: translateY(90%);
            }
            98%, 100% {
              opacity: 0;
              transform: translateY(100vh);
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
