import React, { useState, useEffect, useRef } from 'react';

const ScailUpMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => setIsVisible(true), 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const metrics = [
    {
      value: '+43%',
      label: 'Reply rate'
    },
    {
      value: '12',
      label: 'Afspraken in 30 dagen'
    },
    {
      value: '€250k',
      label: 'Pipeline in Q1'
    },
    {
      value: '94%',
      label: 'Deliverability'
    }
  ];

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
            Resultaten die spreken
          </h2>
          <p className="text-xl text-scailup-gray max-w-2xl mx-auto">
            Harde cijfers van echte campagnes. Dit is wat je kunt verwachten.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Metric Value with Gradient */}
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">
                  {metric.value}
                </span>
              </div>
              
              {/* Metric Label */}
              <p className="text-lg text-scailup-gray font-medium">
                {metric.label}
              </p>
              
              {/* Subtle underline effect */}
              <div className="w-8 h-0.5 bg-scailup-gradient mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA hint */}
        <div className={`text-center mt-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <p className="text-scailup-gray">
            *Gemiddelde resultaten over de afgelopen 6 maanden
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ScailUpMetrics;