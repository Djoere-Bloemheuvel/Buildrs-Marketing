
import { Shield, Zap, Users } from 'lucide-react';

const WhyBuildrs = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-indigo-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Waarom kiezen voor Buildrs?
            </h2>
            
            <div className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light space-y-6">
              <p>
                Buildrs helpt bedrijven om repetitieve processen te automatiseren met slimme AI-oplossingen. We combineren strategisch inzicht met technische uitvoering en bouwen binnen weken een werkende oplossing – zonder complexiteit.
              </p>
              
              <p>
                Ons team denkt mee over efficiëntie, veiligheid en schaalbaarheid, zodat jij je kunt focussen op groei. We zorgen dat de technologie precies aansluit op jouw bedrijfsprocessen.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Snelle implementatie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van idee naar werkende automatisering in 2-4 weken</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Betrouwbaar & veilig</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Enterprise-grade beveiliging met volledige compliance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Persoonlijke begeleiding</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Dedicated support van strategie tot doorlopende optimalisatie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract AI Dashboard Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Dashboard Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-indigo-950/40 border border-indigo-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Automatisering Dashboard</span>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Actief</span>
                    </div>
                  </div>
                </div>

                {/* Business Metrics */}
                <div className="space-y-4">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-premium-silver/70">Efficiëntie</span>
                      </div>
                      <div className="text-xl font-bold text-white">+85%</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-premium-silver/70">Tevredenheid</span>
                      </div>
                      <div className="text-xl font-bold text-white">9.4/10</div>
                    </div>
                  </div>

                  {/* Process Status */}
                  <div className="rounded-xl bg-black/40 p-4 border border-indigo-400/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <Shield className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs text-premium-silver/70">Proces Status</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">Leadgeneratie</span>
                        <span className="text-green-400">✓ Actief</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">Offertes</span>
                        <span className="text-green-400">✓ Actief</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">Follow-up</span>
                        <span className="text-green-400">✓ Actief</span>
                      </div>
                    </div>
                  </div>

                  {/* Results Overview */}
                  <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                    <div className="text-xs text-premium-silver/70 mb-3">Resultaten deze maand</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs text-premium-silver/70">147 leads gegenereerd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-xs text-premium-silver/70">63 offertes verstuurd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-xs text-premium-silver/70">28 nieuwe klanten</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Strategic Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 backdrop-blur-md flex items-center justify-center">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrs;
