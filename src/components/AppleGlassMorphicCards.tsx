
import { useEffect, useRef, useState } from 'react';
import { Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';

const AppleGlassMorphicCards = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      icon: Clock,
      glowColor: "from-blue-500/30 to-cyan-400/20",
      glowColorHover: "from-blue-500/40 to-cyan-400/30",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      glowColor: "from-purple-500/30 to-violet-400/20",
      glowColorHover: "from-purple-500/40 to-violet-400/30",
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      glowColor: "from-pink-500/30 to-rose-400/20",
      glowColorHover: "from-pink-500/40 to-rose-400/30",
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      glowColor: "from-emerald-500/30 to-teal-400/20",
      glowColorHover: "from-emerald-500/40 to-teal-400/30",
    }
  ];

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isVisible = visibleCards[index];
        
        return (
          <div
            key={step.id}
            ref={el => cardsRef.current[index] = el}
            className={`
              relative group premium-card-smooth gpu-accelerated
              ${isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
            `}
            style={{ 
              transitionDelay: `${index * 150}ms`,
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Enhanced Ambient Glow with smooth hover transitions */}
            <div 
              className={`
                absolute inset-0 rounded-3xl blur-3xl opacity-0 scale-110
                bg-gradient-to-br ${step.glowColorHover}
                transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-125
              `}
            />
            
            {/* Base ambient glow with smooth hover enhancement */}
            <div 
              className={`
                absolute inset-0 rounded-3xl blur-2xl opacity-60
                bg-gradient-to-br ${step.glowColor}
                transition-all duration-600 ease-out group-hover:opacity-80 group-hover:scale-110
              `}
            />

            {/* Enhanced Glassmorphic Card with smooth hover */}
            <div className={`
              relative z-10 p-6 lg:p-8 rounded-2xl cursor-pointer glass-hover-smooth hover-only-smooth
              bg-white/[0.03] backdrop-blur-xl
              border border-white/[0.08]
              hover:bg-white/[0.08] hover:border-white/[0.18]
              hover:shadow-2xl hover:shadow-white/[0.08]
              hover:-translate-y-3 hover:scale-[1.02]
              transition-all duration-600 cubic-bezier(0.34, 1.56, 0.64, 1)
              will-change: transform, background-color, border-color, box-shadow
            `}>
              {/* Step Number Badge with smooth hover */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center backdrop-blur-sm transition-all duration-400 ease-out group-hover:bg-white/[0.15] group-hover:border-white/[0.20]">
                    <span className="text-sm font-bold text-white tracking-tight transition-colors duration-300 ease-out group-hover:text-white/95">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center backdrop-blur-sm opacity-60 group-hover:opacity-100 icon-hover-smooth">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content with smooth hover transitions */}
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight text-hover-smooth group-hover:text-white/95">
                  {step.title}
                </h3>
                
                <p className="text-white/65 text-base leading-relaxed font-light text-hover-smooth group-hover:text-white/80">
                  {step.subtitle}
                </p>
              </div>

              {/* Enhanced highlight line with smooth hover */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              
              {/* Additional smooth hover accents */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 opacity-0 group-hover:opacity-60 transition-all duration-400 ease-out group-hover:scale-125" />
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white/15 opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out group-hover:scale-150" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppleGlassMorphicCards;
