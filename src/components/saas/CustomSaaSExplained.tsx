
import { Brain, Database, Cpu } from 'lucide-react';

const CustomSaaSExplained = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-purple-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Wat is Custom AI SaaS?
            </h2>
            
            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light">
              Custom AI SaaS is software die volledig op maat wordt gebouwd voor jouw bedrijf, waarbij kunstmatige intelligentie de motor vormt achter alle functionaliteiten. In tegenstelling tot generieke tools, creëren wij intelligente oplossingen die perfect aansluiten op jouw interne processen, klantinteracties en datastromen. Of het nu gaat om predictive analytics, AI-gedreven dashboards of automatisering van klantvragen: wij bouwen een AI-oplossing die past als een handschoen.
            </p>

            {/* Key Points */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI als kernmotor</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Intelligentie ingebouwd in elke functie en workflow</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Volledig maatwerk</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Gebouwd rondom jouw unieke bedrijfsprocessen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Schaalbare architectuur</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Groeit mee met jouw organisatie en ambities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Dashboard Mockup */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-purple-950/40 border border-purple-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">AI Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400/60 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="w-3 h-3 rounded-full bg-red-400/60 animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20">
                      <div className="text-2xl font-bold text-white">94%</div>
                      <div className="text-xs text-premium-silver/70">Efficiency</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20">
                      <div className="text-2xl font-bold text-white">2.4x</div>
                      <div className="text-xs text-premium-silver/70">Growth</div>
                    </div>
                  </div>

                  {/* AI Activity Feed */}
                  <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <div className="text-xs text-premium-silver/70">AI model optimized</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="text-xs text-premium-silver/70">Workflow automated</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="text-xs text-premium-silver/70">Data processed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none" />
              </div>

              {/* Floating Nodes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Database className="w-8 h-8 text-purple-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md flex items-center justify-center">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSaaSExplained;
