
import { Zap, Clock, Target, Workflow } from 'lucide-react';

const WhyAutomations = () => {
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
                Buildrs helpt bedrijven om repetitieve processen te automatiseren met slimme AI-oplossingen. We combineren strategisch inzicht met technische uitvoering en bouwen binnen weken een werkende oplossing – zonder complexiteit. Ons team denkt mee over efficiëntie, veiligheid en schaalbaarheid, zodat jij je kunt focussen op groei.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Snelle resultaten</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van strategie naar implementatie in weken, niet maanden</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Veilig & compliant</h3>
                  <p className="text-premium-silver/70 leading-relaxed">AI-implementaties die voldoen aan alle privacy- en beveiligingseisen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Volledige ondersteuning</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van advies tot implementatie tot doorlopende optimalisatie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Automation Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Workflow Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-indigo-950/40 border border-indigo-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Workflow Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">AI Process Automation</span>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-green-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="space-y-4">
                  {/* Process Steps */}
                  <div className="space-y-3">
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20 relative">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm text-premium-silver/90">Input Processing</span>
                        <div className="ml-auto text-xs text-green-400">✓ 2.3s</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20 relative">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <span className="text-sm text-premium-silver/90">AI Analysis</span>
                        <div className="ml-auto text-xs text-green-400">✓ 1.8s</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-indigo-400/20 relative">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-sm text-premium-silver/90">Decision Engine</span>
                        <div className="ml-auto text-xs text-green-400">✓ 0.9s</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20 relative">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                        <span className="text-sm text-premium-silver/90">Output Generation</span>
                        <div className="ml-auto text-xs text-green-400">✓ 1.2s</div>
                      </div>
                    </div>
                  </div>

                  {/* Efficiency Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-emerald-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-premium-silver/70">Speed</span>
                      </div>
                      <div className="text-xl font-bold text-white">6.2s</div>
                      <div className="text-xs text-emerald-400">vs 8hrs manual</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-orange-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-4 h-4 text-orange-400" />
                        <span className="text-xs text-premium-silver/70">Accuracy</span>
                      </div>
                      <div className="text-xl font-bold text-white">99.8%</div>
                      <div className="text-xs text-orange-400">Zero errors</div>
                    </div>
                  </div>

                  {/* Workflow Status */}
                  <div className="rounded-xl bg-black/40 p-4 border border-violet-400/20">
                    <div className="text-xs text-premium-silver/70 mb-3">Automation Status</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs text-premium-silver/70">24/7 operational</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-xs text-premium-silver/70">Self-optimizing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-xs text-premium-silver/70">Scalable processing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Process Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 backdrop-blur-md flex items-center justify-center">
                <Workflow className="w-8 h-8 text-indigo-400" />
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

export default WhyAutomations;
