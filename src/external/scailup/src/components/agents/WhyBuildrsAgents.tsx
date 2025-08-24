
import { Zap, Shield, Users, Settings } from 'lucide-react';

const WhyBuildrsAgents = () => {
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
                Buildrs bouwt AI Agents die écht zelfstandig werken. We combineren slimme AI-modellen met veilige infrastructuur en UX op maat.
              </p>
              
              <p>
                Of het nu gaat om een assistant die afspraken plant, leads opvolgt of data verwerkt: wij bouwen het. Razendsnel, schaalbaar en afgestemd op jouw realiteit.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-400/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Strategisch meedenken</h3>
                </div>
                <p className="text-premium-silver/70 text-sm leading-relaxed">
                  We analyseren je processen en bouwen agents die echt waarde toevoegen
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-400/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Razendsnel resultaat</h3>
                </div>
                <p className="text-premium-silver/70 text-sm leading-relaxed">
                  Van concept tot werkende agent binnen 2-4 weken
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-400/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Veilig & schaalbaar</h3>
                </div>
                <p className="text-premium-silver/70 text-sm leading-relaxed">
                  Enterprise-grade beveiliging en infrastructuur die meegroeit
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Geen tech team nodig</h3>
                </div>
                <p className="text-premium-silver/70 text-sm leading-relaxed">
                  Wij regelen alles: ontwikkeling, implementatie en onderhoud
                </p>
              </div>
            </div>
          </div>

          {/* Agent Intelligence Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Intelligence Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-indigo-950/40 border border-indigo-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Intelligence Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Buildrs AI Agent</span>
                  </div>
                  
                  {/* Capability indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Advanced</span>
                    </div>
                  </div>
                </div>

                {/* Intelligence Metrics */}
                <div className="space-y-4">
                  {/* Core Capabilities */}
                  <div className="space-y-3">
                    <div className="text-xs text-premium-silver/70 mb-3">Kern mogelijkheden</div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Zap className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-premium-silver/90">Strategische beslissingen</span>
                        </div>
                        <div className="text-xs text-green-400">97% nauwkeurig</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-emerald-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Settings className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-premium-silver/90">Proces optimalisatie</span>
                        </div>
                        <div className="text-xs text-green-400">85% efficiënter</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-premium-silver/90">Veiligheid & compliance</span>
                        </div>
                        <div className="text-xs text-green-400">100% compliant</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-premium-silver/70">Implementaties</span>
                      </div>
                      <div className="text-xl font-bold text-white">200+</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-violet-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-violet-400" />
                        <span className="text-xs text-premium-silver/70">Gemiddelde ROI</span>
                      </div>
                      <div className="text-xl font-bold text-white">340%</div>
                    </div>
                  </div>

                  {/* Agent Learning */}
                  <div className="rounded-xl bg-black/40 p-4 border border-pink-400/20">
                    <div className="text-xs text-premium-silver/70 mb-3">Buildrs voordelen</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs text-premium-silver/70">Maatwerk architectuur</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-xs text-premium-silver/70">24/7 ondersteuning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-xs text-premium-silver/70">Doorlopende verbetering</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Excellence Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 backdrop-blur-md flex items-center justify-center">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrsAgents;
