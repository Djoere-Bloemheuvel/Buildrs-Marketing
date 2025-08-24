
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyBuildrsMinimal = () => {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Ultra minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-gray-950/10 to-premium-black" />
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-gradient-radial from-white/[0.02] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Apple-style spacing and typography */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Waarom Buildrs?
            </h2>
            
            {/* Three core statements with Apple-style hierarchy */}
            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                Geen agency. <span className="font-medium">Geen buzzwords.</span>
              </p>
              
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                Wij bouwen <span className="font-medium">wat anderen beloven.</span>
              </p>
              
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                Elite team. <span className="font-medium">Enterprise resultaten.</span>
              </p>
            </div>
          </div>

          {/* Minimal CTA */}
          <div className="pt-8">
            <Button
              onClick={handleContactClick}
              className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
              }}
            >
              <span className="relative z-10 flex items-center">
                Ervaar het verschil
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrsMinimal;
