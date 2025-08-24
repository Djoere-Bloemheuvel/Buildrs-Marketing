import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Zap } from 'lucide-react';

const CasesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => setIsVisible(true), 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const cases = [
    {
      icon: Building2,
      company: 'TechScale B.V.',
      description: 'E-commerce platform wilde enterprise klanten aantrekken via LinkedIn outreach.',
      context: 'Lange verkoopcyclus, hoge deal values, complexe besluitvorming.',
      result: '18 gekwalificeerde leads in 45 dagen, €180k pipeline opgebouwd'
    },
    {
      icon: Zap,
      company: 'InnovatieStudio',
      description: 'SaaS startup zocht early adopters voor hun nieuwe AI-tool via e-mailcampagnes.',
      context: 'Onbekend merk, competitieve markt, beperkt budget.',
      result: '32% open rate, 8% reply rate, 12 demo\'s ingepland'
    },
    {
      icon: Users,
      company: 'GrowthPartners',
      description: 'Consultancy wilde C-level executives bereiken met ABM-campagnes.',
      context: 'Moeilijk bereikbare doelgroep, premium positionering vereist.',
      result: '6 strategiegesprekken met Fortune 500 bedrijven'
    }
  ];

  const handleAllCasesClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/cases';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Echte resultaten, echte klanten
          </h2>
          <p className="text-xl text-scailup-gray max-w-2xl mx-auto">
            Ontdek hoe andere bedrijven hun agenda hebben gevuld met onze aanpak.
          </p>
        </div>
        
        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`glass p-8 group hover:shadow-scailup-glow transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Company Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-scailup-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <caseStudy.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Company Name */}
              <h3 className="text-xl font-bold text-white mb-3">
                {caseStudy.company}
              </h3>
              
              {/* Description */}
              <p className="text-scailup-gray text-sm mb-3 leading-relaxed">
                {caseStudy.description}
              </p>
              
              {/* Context */}
              <p className="text-scailup-gray/80 text-xs mb-4 italic">
                {caseStudy.context}
              </p>
              
              {/* Result - highlighted */}
              <div className="pt-4 border-t border-scailup-border">
                <p className="text-white font-semibold text-sm">
                  {caseStudy.result}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-scailup-blue text-sm font-medium">
                  Lees volledig case study →
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Cases Button */}
        <div className={`text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <Button
            onClick={handleAllCasesClick}
            variant="outline"
            className="glass border-scailup-border hover:border-scailup-blue text-white px-8 py-4 text-lg font-semibold rounded-xl focus-ring group"
          >
            Bekijk alle case studies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default CasesPreview;