
import { Brain, Zap, Shield } from 'lucide-react';

const AgentSecondaryHero = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient matching the first hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-teal-950/20 to-emerald-950/30" />
      
      {/* Smooth vertical fade to black at bottom - 30% height */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      {/* Ambient lighting effects matching the first hero */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 md:w-[600px] md:h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      {/* Animated particles matching the first hero - with fade overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top particles - full opacity */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        
        {/* Bottom particles - faded */}
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-blue-400/25 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-teal-400/30 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Header Section with enhanced text glow */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative">
            {/* Enhanced text background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-teal-500/8 via-emerald-500/4 to-transparent blur-2xl scale-110" />
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
              Autonoom. Intelligent. <span className="text-teal-300">Onmisbaar.</span>
            </h2>
          </div>
          <div className="relative">
            {/* Enhanced subtitle background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-emerald-500/6 via-teal-500/3 to-transparent blur-2xl scale-105" />
            <p className="relative text-lg md:text-xl lg:text-2xl text-premium-silver/80 leading-relaxed max-w-4xl mx-auto">
              Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen,
              <br className="hidden md:block" />
              en automatiseren repetitieve workflows zonder handmatige input.
            </p>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Card 1 - Zelfstandig beslissen */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/15 backdrop-blur-sm border border-teal-400/15 hover:border-teal-400/25 transition-all duration-300 hover:transform hover:scale-105">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.3))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Zelfstandig beslissen
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    AI-agents die denken, redeneren en handelen zonder menselijke tussenkomst.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - 24/7 operationeel */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/15 backdrop-blur-sm border border-teal-400/15 hover:border-teal-400/25 transition-all duration-300 hover:transform hover:scale-105">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.3))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    24/7 operationeel
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    Altijd alert, altijd actief - geen pauzes, geen fouten, maximale efficiëntie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Veilig & compliant */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/15 backdrop-blur-sm border border-teal-400/15 hover:border-teal-400/25 transition-all duration-300 hover:transform hover:scale-105">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.3))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Veilig & compliant
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSecondaryHero;
