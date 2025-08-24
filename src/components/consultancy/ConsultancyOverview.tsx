
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

const ConsultancyOverview = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-purple-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Visual Element - Left side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* AI Implementation Flow Mockup */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-blue-950/40 border border-blue-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Implementation Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400/60 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-blue-400/60 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="w-3 h-3 rounded-full bg-purple-400/60 animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>
                </div>

                {/* Implementation Metrics */}
                <div className="space-y-4">
                  {/* Progress Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20">
                      <div className="text-2xl font-bold text-white">89%</div>
                      <div className="text-xs text-premium-silver/70">Success Rate</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20">
                      <div className="text-2xl font-bold text-white">3.2x</div>
                      <div className="text-xs text-premium-silver/70">ROI Increase</div>
                    </div>
                  </div>

                  {/* Implementation Steps */}
                  <div className="rounded-xl bg-black/40 p-4 border border-indigo-400/20">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <div className="text-xs text-premium-silver/70">Data analyse voltooid</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full border-2 border-blue-400 animate-pulse" />
                        <div className="text-xs text-premium-silver/70">AI-modellen in training</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full border border-premium-silver/30" />
                        <div className="text-xs text-premium-silver/50">Testing & optimalisatie</div>
                      </div>
                    </div>
                  </div>

                  {/* Flowchart Visual */}
                  <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                    <div className="flex items-center justify-between text-xs text-premium-silver/70">
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        </div>
                        <span>Analyse</span>
                      </div>
                      
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 to-purple-400/40 mx-2" />
                      
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                        <span>Selectie</span>
                      </div>
                      
                      <div className="flex-1 h-px bg-gradient-to-r from-purple-400/40 to-indigo-400/40 mx-2" />
                      
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>
                        <span>Deploy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Van analyse tot implementatie
            </h2>
            
            <div className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light space-y-6">
              <p>
                De meeste AI-trajecten falen niet door technologie, maar door gebrek aan richting. Daarom beginnen we altijd met een grondige analyse van je organisatie: van dataflows tot klantbehoeften.
              </p>
              
              <p>
                Op basis daarvan selecteren we samen de juiste AI-tools, modellen en platforms. Vervolgens helpen we bij de implementatie, inclusief interne training, testing en optimalisatie.
              </p>
              
              <p>
                Zo zorgen we dat AI-oplossingen ook echt gebruikt worden – en duurzame impact maken. Onze consultants werken met no-code, low-code en maatwerkoplossingen om maximale flexibiliteit te garanderen.
              </p>
            </div>

            {/* Process Benefits */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategische richting</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Heldere roadmap voorkomt kostbare misstappen en zorgt voor focus</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Praktische implementatie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van concept naar werkende oplossing met meetbare resultaten</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Duurzame adoptie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Training en support zorgen voor succesvolle acceptatie binnen je team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyOverview;
