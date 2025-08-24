
import { useEffect, useRef } from 'react';
import WorkflowStep from './WorkflowStep';

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -0.01; // Even more subtle parallax for better performance

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Add scroll-triggered animation styles
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }

      /* Enhanced floating particles */
      @keyframes float-gentle {
        0%, 100% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: 0.3;
        }
        25% {
          transform: translateY(-8px) translateX(4px) rotate(90deg);
          opacity: 0.6;
        }
        50% {
          transform: translateY(-4px) translateX(-2px) rotate(180deg);
          opacity: 0.4;
        }
        75% {
          transform: translateY(-12px) translateX(6px) rotate(270deg);
          opacity: 0.7;
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
          opacity: 0.4;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.1);
        }
      }

      /* Premium nebula background animations */
      @keyframes nebula-drift-1 {
        0%, 100% {
          transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          opacity: 0.15;
        }
        25% {
          transform: translateX(-30px) translateY(-20px) scale(1.1) rotate(90deg);
          opacity: 0.25;
        }
        50% {
          transform: translateX(40px) translateY(10px) scale(0.9) rotate(180deg);
          opacity: 0.2;
        }
        75% {
          transform: translateX(-10px) translateY(30px) scale(1.05) rotate(270deg);
          opacity: 0.18;
        }
      }

      @keyframes nebula-drift-2 {
        0%, 100% {
          transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          opacity: 0.12;
        }
        33% {
          transform: translateX(50px) translateY(-30px) scale(1.2) rotate(120deg);
          opacity: 0.22;
        }
        66% {
          transform: translateX(-40px) translateY(20px) scale(0.8) rotate(240deg);
          opacity: 0.16;
        }
      }

      @keyframes nebula-drift-3 {
        0%, 100% {
          transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          opacity: 0.1;
        }
        40% {
          transform: translateX(-60px) translateY(40px) scale(1.3) rotate(144deg);
          opacity: 0.2;
        }
        80% {
          transform: translateX(30px) translateY(-50px) scale(0.7) rotate(288deg);
          opacity: 0.15;
        }
      }

      @keyframes stardust-float {
        0%, 100% {
          transform: translateY(0px) translateX(0px);
          opacity: 0.2;
        }
        50% {
          transform: translateY(-15px) translateX(10px);
          opacity: 0.5;
        }
      }

      .floating-particle {
        animation: float-gentle 8s ease-in-out infinite;
      }

      .pulse-particle {
        animation: pulse-glow 4s ease-in-out infinite;
      }

      .nebula-drift-1 {
        animation: nebula-drift-1 45s ease-in-out infinite;
      }

      .nebula-drift-2 {
        animation: nebula-drift-2 60s ease-in-out infinite;
      }

      .nebula-drift-3 {
        animation: nebula-drift-3 75s ease-in-out infinite;
      }

      .stardust-float {
        animation: stardust-float 12s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const steps = [{
    number: "1",
    title: "Strategie & Analyse",
    subtitle: "Samen brengen we je businessdoelen, kansen en AI-potentieel in kaart."
  }, {
    number: "2",
    title: "Ontwerp & Bouw",
    subtitle: "We ontwerpen en bouwen een eerste versie binnen 2–4 weken."
  }, {
    number: "3",
    title: "Optimalisatie & Schaling",
    subtitle: "Samen perfectioneren we het product en koppelen het aan je systemen."
  }];

  // Vertical offsets for each step - positioned slightly lower
  const stepOffsets = [-40, 20, 80]; // Step 1: 40px higher, Step 2: 20px lower, Step 3: 80px lower

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-4 relative overflow-hidden bg-black transition-transform duration-75 ease-out">
      {/* Premium nebula background with moving stardust */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base nebula layers */}
        <div className="nebula-drift-1 absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        <div className="nebula-drift-2 absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-radial from-cyan-400/6 via-blue-500/3 to-transparent rounded-full blur-2xl" />
        <div className="nebula-drift-3 absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-radial from-purple-400/7 via-pink-500/3 to-transparent rounded-full blur-3xl" />

        {/* Stardust particles */}
        <div className="stardust-float absolute top-20 left-20 w-1 h-1 bg-white/30 rounded-full blur-sm" style={{ animationDelay: '0s' }} />
        <div className="stardust-float absolute top-40 right-32 w-0.5 h-0.5 bg-blue-300/40 rounded-full blur-sm" style={{ animationDelay: '3s' }} />
        <div className="stardust-float absolute bottom-32 left-32 w-1 h-1 bg-purple-300/35 rounded-full blur-sm" style={{ animationDelay: '6s' }} />
        <div className="stardust-float absolute bottom-20 right-20 w-0.5 h-0.5 bg-cyan-300/40 rounded-full blur-sm" style={{ animationDelay: '9s' }} />
        <div className="stardust-float absolute top-3/4 left-3/4 w-1 h-1 bg-white/25 rounded-full blur-sm" style={{ animationDelay: '12s' }} />
        <div className="stardust-float absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-pink-300/30 rounded-full blur-sm" style={{ animationDelay: '15s' }} />
      </div>

      {/* Enhanced multi-layered background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-[1000px] h-[800px] bg-gradient-radial from-blue-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="w-[600px] h-[400px] bg-gradient-radial from-cyan-400/6 via-white/3 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Dynamic floating particles inspired by hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="floating-particle absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full" style={{
          animationDelay: '0s'
        }} />
        <div className="floating-particle absolute top-40 right-20 w-1 h-1 bg-purple-400/80 rounded-full" style={{
          animationDelay: '2s'
        }} />
        <div className="floating-particle absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-400/50 rounded-full" style={{
          animationDelay: '4s'
        }} />
        <div className="floating-particle pulse-particle absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-emerald-400/70 rounded-full" style={{
          animationDelay: '1s'
        }} />
        <div className="floating-particle absolute top-1/2 left-1/4 w-1 h-1 bg-violet-400/60 rounded-full" style={{
          animationDelay: '3s'
        }} />
        <div className="pulse-particle absolute top-3/4 right-1/3 w-2 h-2 bg-blue-300/40 rounded-full" style={{
          animationDelay: '5s'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Enhanced header with more visual interest */}
        <div className="text-left mb-6 lg:mb-8">
          {/* Subtle accent line above title */}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6 apple-fade-in apple-stagger-1" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 apple-fade-in apple-stagger-2 tracking-tight leading-tight">
            In drie heldere stappen van{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                idee
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-full animate-pulse" />
            </span>{' '}
            naar{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                impact
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full animate-pulse" style={{
                animationDelay: '0.5s'
              }} />
            </span>
            .
          </h2>

          <p className="text-white/70 text-xl lg:text-2xl font-light tracking-wide apple-fade-in apple-stagger-3 max-w-4xl leading-relaxed">
            Onze bewezen aanpak voor succesvolle AI-implementatie.
          </p>

          {/* Premium stats or badges */}
          <div className="flex flex-wrap gap-4 mt-8 apple-fade-in apple-stagger-4">



          </div>
        </div>

        {/* Enhanced timeline with better visual hierarchy */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced connecting line with animated flow */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse" />

              {/* Flowing light effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[slide-right_3s_ease-in-out_infinite]" style={{
                  animation: 'slide-right 4s ease-in-out infinite',
                  animationDelay: '1s'
                }} />
              </div>
            </div>
          </div>

          {/* Steps Grid with enhanced spacing and vertical offsets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12">
            {steps.map((step, index) => (
              <WorkflowStep
                key={step.number}
                step={step}
                delay={`${0.3 + index * 0.15}s`}
                isLast={index === steps.length - 1}
                verticalOffset={stepOffsets[index] || 0}
              />
            ))}
          </div>
        </div>

        {/* Call-to-action area */}
        <div className="text-center mt-20 lg:mt-24">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 apple-fade-in apple-stagger-6">
            <p className="text-white/70 text-lg">
              <span className="text-white font-medium">Klaar om te beginnen?</span> Laten we uw AI-journey starten.
            </p>
          </div>
        </div>
      </div>

      {/* Additional CSS for new animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-right {
            0% { transform: translateX(-100px); opacity: 0; }
            50% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(100px); opacity: 0; }
          }
        `
      }} />
    </section>
  );
};

export default Workflow;
