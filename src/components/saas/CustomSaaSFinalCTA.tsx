
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const CustomSaaSFinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Much darker background overlay */}
      <div className="absolute inset-0 bg-black/95" />
      
      {/* Additional darkening layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      
      {/* Use the same cinematic background as the hero section but hide glass container */}
      <div className="absolute inset-0 opacity-30">
        <CinematicBackground hideGlassContainer={true} />
      </div>
      
      {/* Additional bottom corner ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bottom-left corner glow */}
        <div 
          className="absolute -bottom-1/3 -left-1/4 w-96 h-96 rounded-full opacity-40 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, rgba(139, 92, 246, 0.18) 35%, rgba(124, 58, 237, 0.08) 60%, transparent 85%)',
            filter: 'blur(100px)',
            animationDuration: '8s'
          }}
        />
        
        {/* Bottom-right corner glow */}
        <div 
          className="absolute -bottom-1/3 -right-1/4 w-80 h-80 rounded-full opacity-35 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(37, 99, 235, 0.15) 40%, rgba(29, 78, 216, 0.06) 70%, transparent 90%)',
            filter: 'blur(90px)',
            animationDuration: '6s',
            animationDelay: '-3s'
          }}
        />
        
        {/* Additional bottom center accent glow */}
        <div 
          className="absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(147, 51, 234, 0.12) 50%, rgba(124, 58, 237, 0.04) 80%, transparent 95%)',
            filter: 'blur(80px)',
            animationDuration: '10s',
            animationDelay: '-5s'
          }}
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Single glassmorphism container */}
        <div className="relative rounded-[24px] p-12 md:p-16 backdrop-blur-xl border border-white/[0.15] shadow-2xl"
             style={{
               background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
               boxShadow: '0 32px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
             }}>
          
          {/* Single subtle glow effect */}
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-lg opacity-40 -z-10" />
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Premium headline with enhanced gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white">Jouw AI SaaS </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                begint hier
              </span>
            </h2>
            
            {/* Enhanced subtitle */}
            <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl mx-auto">
              Plan een gratis strategiesessie en ontdek hoe een AI SaaS-oplossing op maat jouw organisatie kan helpen versnellen, schalen en concurreren in een datagedreven wereld.
            </p>

            {/* Premium CTA button with enhanced effects */}
            <div className="pt-6">
                             <Button 
                 onClick={() => window.location.href = '/contact'}
                 className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-12 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
                 style={{
                   background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                   boxShadow: `
                     0 20px 60px rgba(0, 0, 0, 0.4), 
                     inset 0 1px 0 rgba(255, 255, 255, 0.9),
                     0 0 0 1px rgba(255, 255, 255, 0.1),
                     0 0 20px rgba(147, 51, 234, 0.1),
                     0 0 40px rgba(59, 130, 246, 0.05)
                   `
                 }}
               >
                <span className="relative z-10 flex items-center">
                  Plan een consult
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
                
                {/* Enhanced shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              </Button>
            </div>

            {/* Enhanced disclaimer text */}
            <p className="text-premium-silver/70 text-sm mt-8 italic font-light">
              Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
            </p>
          </div>
          
          {/* Subtle floating accent elements */}
          <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-br from-purple-400/40 to-transparent animate-pulse" />
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default CustomSaaSFinalCTA;
