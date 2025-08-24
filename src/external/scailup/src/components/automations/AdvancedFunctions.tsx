
import { CheckCircle, Cog } from 'lucide-react';

const AdvancedFunctions = () => {
  const features = [
    'Intelligent document processing met 99.9% nauwkeurigheid',
    'Automatische data extractie uit ongestructureerde bronnen',
    'Smart workflow orchestration voor complexe processen',
    'Real-time monitoring met proactieve alerts',
    'Seamless integratie met bestaande systemen',
    'Custom business rule engine voor unieke logica'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-premium-black via-blue-950/10 to-premium-black relative overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '4s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-green-400/70 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left-aligned text content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Enterprise-Grade Functies
            </h2>
            <p className="text-lg text-premium-silver/70 mb-10 leading-relaxed">
              Geavanceerde AI die verder gaat dan scripts. Intelligente systemen die 
              leren, beslissen en evolueren met uw organisatie.
            </p>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-premium-silver leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Engine visual on the right */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border border-premium-silver/20 backdrop-blur-md p-8 overflow-hidden">
              {/* Animated automation visual */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                   radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
                }} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center">
                {/* Enhanced glow effect with more base presence */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-40" />
                
                {/* Main device with enhanced glassmorphism */}
                <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md flex items-center justify-center shadow-2xl mb-6">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 transition-all duration-500 shadow-xl opacity-90">
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Static icon with steady glow */}
                        <Cog className="w-14 h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300 animate-spin" style={{
                          filter: 'drop-shadow(0 0 8px #60a5fa40)',
                          animationDuration: '4s'
                        }} />
                        
                        {/* Enhanced sweeping light scan */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full" 
                             style={{ 
                               animation: 'sweep 3s ease-in-out infinite'
                             }} />
                        
                        {/* Ambient base glow inside icon container */}
                        <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-10" />
                      </div>
                    </div>
                    
                    {/* Enhanced floating accent elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 shadow-lg" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-75 shadow-lg" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">Automation Engine</h3>
                  <p className="text-premium-silver/60 text-sm">Actief en lerend</p>
                </div>

                {/* Status indicators */}
                <div className="absolute top-12 left-12 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-premium-silver/40">Live</span>
                </div>

                {/* Floating data points */}
                <div className="absolute top-12 left-12 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-20 right-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-16 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sweep {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </section>
  );
};

export default AdvancedFunctions;
