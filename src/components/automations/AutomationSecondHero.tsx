
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
const AutomationSecondHero = () => {
  return <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Exact same background as first hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-indigo-950/20 to-purple-950/30" />
      
      {/* Smooth vertical fade to black at bottom - 25% height */}
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
      
      {/* Same ambient lighting effects as first hero - responsive positioning */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 md:w-[600px] md:h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Same animated particles as first hero - responsive positioning with fade overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top and middle particles - full opacity */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
        animationDelay: '0s',
        animationDuration: '4s'
      }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
        animationDelay: '2s',
        animationDuration: '3s'
      }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-pulse" style={{
        animationDelay: '3s',
        animationDuration: '4s'
      }} />
        
        {/* Bottom particles - reduced opacity for fade effect */}
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/25 rounded-full animate-pulse" style={{
        animationDelay: '1s',
        animationDuration: '5s'
      }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Zet je bedrijf op autopilot
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Van eerste contact tot factuur — volledig geautomatiseerd.
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Wij bouwen intelligente automatiseringen die je dagelijkse processen naadloos laten verlopen. Geen handmatig werk meer — alleen slimme systemen die 24/7 voor je werken.
            </p>

            <div className="pt-2 md:pt-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => {
              // Basic spam protection - simple rate limiting
              const lastClick = localStorage.getItem('cta-last-click');
              const now = Date.now();
              if (lastClick && now - parseInt(lastClick) < 2000) return;
              localStorage.setItem('cta-last-click', now.toString());

              // Scroll to next section
              const nextSection = document.querySelector('section:nth-of-type(3)'); // Skip to third section
              if (nextSection) {
                nextSection.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                Ontdek de mogelijkheden
              </Button>
            </div>

            {/* Subtiele benefits sectie - responsive grid */}
            
          </div>

          {/* Right side - AI Automation Visual with Cog Icon - responsive */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-8 md:py-12 lg:py-0">
            {/* Central AI Automation Icon - responsive sizing */}
            <div className="relative">
              {/* Outer glow ring - responsive */}
              <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
              animationDuration: '4s'
            }} />
              
              {/* Middle glow ring - responsive */}
              <div className="absolute inset-6 sm:inset-8 md:inset-10 lg:inset-12 rounded-full animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
              animationDuration: '3s',
              animationDelay: '-1s'
            }} />
              
              {/* Inner core - responsive */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center" style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: `
                  0 0 60px rgba(59, 130, 246, 0.3),
                  0 0 120px rgba(168, 85, 247, 0.2),
                  inset 0 0 60px rgba(99, 102, 241, 0.1)
                `
            }}>
                <Settings className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-blue-300 drop-shadow-2xl animate-spin" style={{
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
                animationDuration: '20s'
              }} />
              </div>
              
              {/* Orbiting automation elements - responsive */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Orbiting automation dots - responsive positioning */}
                {[0, 1, 2, 3, 4, 5].map(i => <div key={i} className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full animate-spin" style={{
                background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)',
                animationDuration: `${8 + i * 2}s`,
                transform: `rotate(${i * 60}deg) translateY(-${90 + i * 15}px)`,
                transformOrigin: '50% 50%',
                boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)'}`
              }} />)}
              </div>
            </div>

            {/* Process flow connections - responsive */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Automation flow lines - responsive sizing and positioning */}
              <div className="absolute top-1/4 left-1/4 w-24 md:w-32 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent transform rotate-45 animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-18 md:w-24 h-0.5 bg-gradient-to-l from-purple-400/40 to-transparent transform -rotate-45 animate-pulse" style={{
              animationDelay: '1s'
            }} />
              <div className="absolute bottom-1/3 left-1/3 w-20 md:w-28 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent transform rotate-12 animate-pulse" style={{
              animationDelay: '2s'
            }} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AutomationSecondHero;
