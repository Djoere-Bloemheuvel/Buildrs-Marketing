
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimelineEnhanced = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -20px 0px'
      }
    );

    // Observe the first timeline card to trigger all animations
    const firstCard = document.querySelector('[data-timeline-trigger]');
    if (firstCard) observer.observe(firstCard);

    return () => observer.disconnect();
  }, [isVisible]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder concessies",
      subtitle: "We bouwen in dagen waar andere maanden over doen. Snelheid is niet optioneel.",
      icon: Clock,
      glowColor: "from-blue-500/20 to-cyan-400/15",
      glowColorHover: "from-blue-500/35 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Jullie succes is ons succes. We bouwen voor jullie alsof het ons eigen bedrijf is.",
      icon: HandHeart,
      glowColor: "from-purple-500/20 to-violet-400/15",
      glowColorHover: "from-purple-500/35 to-violet-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "High standards",
      subtitle: "Perfect is het vertrekpunt. We leveren niets wat we zelf niet zouden gebruiken.",
      icon: Target,
      glowColor: "from-purple-400/20 to-blue-500/15",
      glowColorHover: "from-purple-400/35 to-blue-500/25",
    },
    {
      id: 4,
      number: "04",
      title: "Functionele creativiteit",
      subtitle: "AI zonder creativiteit is kracht zonder richting. Wij sturen die kracht met visie.",
      icon: TrendingUp,
      glowColor: "from-green-500/20 to-blue-600/15",
      glowColorHover: "from-green-500/35 to-blue-600/25",
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced Title with subtle animation */}
      <div className="mb-16 text-center">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}>
          <span 
            className={`inline-block transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Gebouwd op principes.
          </span>
        </h2>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '400ms' }}
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Gedreven door resultaat.
          </span>
        </h2>
        <p className={`text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed mt-6 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
        style={{ 
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
          transitionDelay: '600ms'
        }}
        >
          Dit zijn de vier principes waarmee we elk project tot een succes maken.
        </p>
      </div>

      {/* Timeline container */}
      <div>
        {/* Enhanced central animated timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
          {/* Base line with enhanced gradient */}
          <div className={`w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} 
          style={{ 
            transformOrigin: 'top',
            transitionDelay: '800ms'
          }} />
          
          {/* Enhanced animated glow pulse */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
          >
            <div 
              className="w-full h-16 bg-gradient-to-b from-cyan-400/25 via-white/35 to-transparent blur-sm"
              style={{
                animation: isVisible ? 'timelinePulse 12s ease-in-out infinite' : 'none',
                transformOrigin: 'top'
              }}
            />
            <div 
              className="w-full h-8 bg-gradient-to-b from-blue-400/20 via-white/25 to-transparent blur-md"
              style={{
                animation: isVisible ? 'timelinePulse 14s ease-in-out infinite' : 'none',
                animationDelay: '3s',
                transformOrigin: 'top'
              }}
            />
          </div>
          
          {/* Enhanced timeline dots */}
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ 
                top: `${12 + (index * 18)}%`,
              }}
            >
              <div className={`relative transition-all duration-400 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ 
                transitionDelay: `${1000 + (index * 100)}ms`
              }}
              >
                <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent ${
                    isVisible ? 'animate-pulse' : ''
                  }`} />
                </div>
                {/* Enhanced outer glow */}
                <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-150 opacity-70 bg-white/15 ${
                  isVisible ? 'animate-pulse' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline cards with synchronized animation */}
        <div className="relative z-10 space-y-8 lg:space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-600 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${1200 + (index * 150)}ms`
              }}
              {...(index === 0 ? { 'data-timeline-trigger': 'true' } : {})}
            >
              <AppleTimelineCard
                step={step}
                isLeft={index % 2 === 0}
                delay={0}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced timeline animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes timelinePulse {
            0% { 
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            12% {
              opacity: 0.3;
              transform: translateY(-75%) scaleY(0.25);
            }
            20% {
              opacity: 0.5;
              transform: translateY(-55%) scaleY(0.5);
            }
            40% { 
              opacity: 1;
              transform: translateY(0%) scaleY(1);
            }
            65% {
              opacity: 0.8;
              transform: translateY(25%) scaleY(0.85);
            }
            80% {
              opacity: 0.6;
              transform: translateY(45%) scaleY(0.65);
            }
            100% { 
              transform: translateY(100vh) scaleY(0);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimelineEnhanced;
