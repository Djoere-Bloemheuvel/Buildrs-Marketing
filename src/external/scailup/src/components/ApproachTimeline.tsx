import { useState } from 'react';
import { Clock, HandHeart, Layers, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface TimelineStep {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  features: string[];
}

const ApproachTimeline = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: TimelineStep[] = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      description: "We beginnen met een diepgaande analyse van uw behoeften en bouwen binnen 48-72 uur een eerste werkende versie.",
      icon: Clock,
      color: "from-cyan-400 to-blue-500",
      features: ["48-72u eerste versie", "Directe feedback", "Iteratieve ontwikkeling"]
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      description: "We nemen volledige verantwoordelijkheid en denken actief mee over de beste strategische keuzes voor uw business.",
      icon: HandHeart,
      color: "from-purple-500 to-pink-500",
      features: ["Strategische advisering", "Proactieve communicatie", "Lange-termijn visie"]
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      description: "Elk pixel, elke interactie wordt doordacht ontworpen voor de beste gebruikerservaring en maximale conversie.",
      icon: Layers,
      color: "from-emerald-400 to-cyan-400",
      features: ["UX/UI expertise", "Gebruikerstesten", "Conversie optimalisatie"]
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
      description: "We bouwen niet alleen technologie, we bouwen oplossingen die direct bijdragen aan uw bedrijfsresultaten.",
      icon: TrendingUp,
      color: "from-orange-400 to-red-500",
      features: ["Meetbare resultaten", "Data-driven beslissingen", "Continue optimalisatie"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Central vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-0.5" />
        
        {/* Timeline steps with alternating layout */}
        <div className="space-y-20">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                className={`relative flex items-center group cursor-pointer ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                {/* Content container */}
                <div className={`w-full max-w-md ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8 transition-all duration-500 group-hover:bg-white/8 group-hover:border-white/20 group-hover:shadow-2xl">
                    {/* Header */}
                    <div className={`flex items-start mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className={`flex items-center mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full mr-4">
                            {step.number}
                          </span>
                          <ArrowRight className={`w-4 h-4 text-white/60 transition-all duration-300 ${
                            activeStep === step.id 
                              ? 'rotate-90 text-white' 
                              : 'group-hover:translate-x-1'
                          }`} />
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-white">
                          {step.title}
                        </h3>
                        
                        <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expandable content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeStep === step.id 
                        ? 'max-h-96 opacity-100 mt-6' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-white/10 pt-6">
                        <p className="text-white/80 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className={`flex items-center text-sm text-white/70 ${
                              isLeft ? 'justify-end' : 'justify-start'
                            }`}>
                              {!isLeft && <Sparkles className="w-3 h-3 mr-2 text-cyan-400" />}
                              <span>{feature}</span>
                              {isLeft && <Sparkles className="w-3 h-3 ml-2 text-cyan-400" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central timeline dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Connecting line to content */}
                  <div className={`absolute top-1/2 w-8 h-px bg-gradient-to-r from-white/30 to-transparent transform -translate-y-0.5 ${
                    isLeft ? '-left-8' : '-right-8 rotate-180'
                  }`} />
                </div>

                {/* Connecting line to next step */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 w-px h-12 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApproachTimeline;
