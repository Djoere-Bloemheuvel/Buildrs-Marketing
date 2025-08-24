
import { Brain, Database, Target } from 'lucide-react';

const ConsultancyExplained = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-blue-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Wat doet onze AI-consultancy?
            </h2>
            
            <div className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light space-y-6">
              <p>
                AI-consultancy draait om het slim benutten van kunstmatige intelligentie binnen jouw organisatie. Bij Buildrs helpen we bedrijven om kansen te identificeren, AI-strategieën te ontwikkelen en slimme toepassingen te implementeren.
              </p>
              
              <p>
                We brengen structuur in ongestructureerde data, analyseren je processen en tonen aan waar AI direct impact kan maken – denk aan klantinteractie, interne workflows of marketingautomatisering.
              </p>
              
              <p>
                Onze consultancy-aanpak is pragmatisch en resultaatgericht: geen ingewikkelde theorie, maar heldere stappen richting automatisering, schaalbaarheid en winstgevendheid.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategische AI-planning</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van visie naar concrete roadmap voor succesvolle implementatie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data-gedreven inzichten</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Transformeer ruwe data naar waardevolle business intelligence</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Gerichte procesverbetering</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Identificeer en automatiseer de processen met de grootste impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Strategy Roadmap Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Strategy Visualization */}
              <div className="relative">
                {/* Step 1 - Analysis */}
                <div className="relative mb-8">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-950/40 border border-blue-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Analyse & Strategie</h3>
                        <p className="text-blue-400/80 text-sm">Fase 1</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-blue-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-full animate-pulse" />
                      </div>
                      <p className="text-premium-silver/70 text-sm">Procesanalyse & AI-kansen identificatie</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Selection */}
                <div className="relative mb-8 ml-8">
                  <div className="rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-950/40 border border-purple-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Tool Selectie</h3>
                        <p className="text-purple-400/80 text-sm">Fase 2</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-purple-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-4/5 animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                      <p className="text-premium-silver/70 text-sm">AI-platforms & technologie matching</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Implementation */}
                <div className="relative ml-16">
                  <div className="rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-950/40 border border-indigo-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Implementatie</h3>
                        <p className="text-indigo-400/80 text-sm">Fase 3</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-indigo-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full w-3/5 animate-pulse" style={{ animationDelay: '2s' }} />
                      </div>
                      <p className="text-premium-silver/70 text-sm">Training, testing & optimalisatie</p>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-20 left-6 w-8 h-8 border-l-2 border-b-2 border-premium-silver/20 rounded-bl-lg" />
                <div className="absolute top-48 left-14 w-8 h-8 border-l-2 border-b-2 border-premium-silver/20 rounded-bl-lg" />
                
                {/* Pulsing dots */}
                <div className="absolute top-16 right-4 w-2 h-2 rounded-full bg-blue-400/60 animate-pulse" />
                <div className="absolute bottom-16 left-4 w-1.5 h-1.5 rounded-full bg-purple-400/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyExplained;
