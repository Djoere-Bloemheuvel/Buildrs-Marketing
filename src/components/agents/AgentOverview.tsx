
import { Clock, Target, Workflow } from 'lucide-react';

const AgentOverview = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-purple-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* AI Agent Dashboard Visual */}
          <div className="relative lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Dashboard Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-purple-950/40 border border-purple-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Persoonlijke AI Assistent</span>
                  </div>
                  
                  {/* Activity indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Actief</span>
                    </div>
                  </div>
                </div>

                {/* Agent Workflows */}
                <div className="space-y-4">
                  {/* Active Workflows */}
                  <div className="space-y-3">
                    <div className="text-xs text-premium-silver/70 mb-3">Actieve workflows</div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                          <span className="text-sm text-premium-silver/90">Lead opvolging</span>
                        </div>
                        <div className="text-xs text-green-400">Lopend</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                          <span className="text-sm text-premium-silver/90">Rapportage genereren</span>
                        </div>
                        <div className="text-xs text-yellow-400">In behandeling</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-emerald-400/20 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                          <span className="text-sm text-premium-silver/90">Data verwerking</span>
                        </div>
                        <div className="text-xs text-green-400">Voltooid</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-premium-silver/70">Uptime</span>
                      </div>
                      <div className="text-xl font-bold text-white">24/7</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-violet-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-4 h-4 text-violet-400" />
                        <span className="text-xs text-premium-silver/70">Nauwkeurigheid</span>
                      </div>
                      <div className="text-xl font-bold text-white">99.2%</div>
                    </div>
                  </div>

                  {/* Learning Progress */}
                  <div className="rounded-xl bg-black/40 p-4 border border-pink-400/20">
                    <div className="text-xs text-premium-silver/70 mb-3">Leervoortgang</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs text-premium-silver/70">Nieuw patroon gedetecteerd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-xs text-premium-silver/70">Workflow geoptimaliseerd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-xs text-premium-silver/70">Kennisbank uitgebreid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Workflow className="w-8 h-8 text-purple-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Jouw persoonlijke digitale assistent
            </h2>
            
            <div className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light space-y-6">
              <p>
                Onze agents zijn afgestemd op jouw processen: van leadopvolging tot rapportage, van support tot data-verwerking. Ze zijn 24/7 actief, werken foutloos en leren bij.
              </p>
              
              <p>
                We bouwen agents die niet alleen reageren, maar zelf initiatief nemen — zodat jij je kunt focussen op strategie.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proactief handelen</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Neemt zelf initiatief en anticipeert op veranderingen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Altijd beschikbaar</h3>
                  <p className="text-premium-silver/70 leading-relaxed">24/7 operationeel zonder pauzes of onderhoud</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Slimme integratie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Verbindt naadloos alle systemen en tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentOverview;
