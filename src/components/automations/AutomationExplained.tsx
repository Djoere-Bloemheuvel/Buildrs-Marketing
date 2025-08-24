import { Brain } from 'lucide-react';

const AutomationExplained = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/98 to-premium-black" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Visual */}
          <div className="relative lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-3xl blur-3xl opacity-60" />
              
              {/* Main visual container */}
              <div className="relative w-72 h-72 mx-auto rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
                  }} />
                </div>
                
                {/* AI Brain Icon with premium styling */}
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/60 to-purple-600/60 p-0.5 transition-all duration-500 shadow-xl">
                    <div className="w-full h-full rounded-2xl bg-premium-black/90 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                      {/* Central AI brain icon */}
                      <Brain className="w-14 h-14 text-white/90 drop-shadow-lg" />
                      
                      {/* Sweeping light effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full" 
                           style={{ 
                             animation: 'sweep 3s ease-in-out infinite'
                           }} />
                      
                      {/* Ambient base glow */}
                      <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
                    </div>
                  </div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/80 to-purple-500/80 transition-all duration-700 shadow-lg" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400/75 to-blue-500/75 transition-all duration-700 delay-100 shadow-lg" />
                </div>

                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-80" />
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-80" />
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-80" />
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-80" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:order-2 max-w-2xl">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Wat is <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI Automatisering</span>?
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl">
                  AI automatisering combineert slimme algoritmes met dagelijkse workflows om repetitieve taken te vervangen door zelflerende systemen. In plaats van handmatige processen kunnen bedrijven nu vertrouwen op slimme agents die e-mails verzenden, leads opvolgen, documenten genereren of klantvragen automatisch afhandelen.
                </p>
                
                <p className="text-base md:text-lg text-premium-silver/80 leading-relaxed font-light">
                  Dit leidt tot hogere efficiëntie, lagere kosten en meer focus op strategisch werk. Automatisering voor bedrijven betekent dat uw team zich kan richten op wat écht belangrijk is: innovatie en groei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationExplained;
