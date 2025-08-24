
import { Rocket, Code2, Layers3 } from 'lucide-react';

const CustomSaaSOverview = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-blue-950/10 to-premium-black">
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
              {/* Main Flow Visualization */}
              <div className="relative">
                {/* MVP Stage */}
                <div className="relative mb-8">
                  <div className="rounded-2xl bg-gradient-to-br from-green-900/40 to-emerald-950/40 border border-emerald-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">MVP Development</h3>
                        <p className="text-emerald-400/80 text-sm">2-4 weken</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-emerald-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full w-4/5 animate-pulse" />
                      </div>
                      <p className="text-premium-silver/70 text-sm">Prototype & Core Features</p>
                    </div>
                  </div>
                </div>

                {/* AI Integration Stage */}
                <div className="relative mb-8 ml-8">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-950/40 border border-blue-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">AI Integration</h3>
                        <p className="text-blue-400/80 text-sm">3-6 weken</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-blue-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-3/5 animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                      <p className="text-premium-silver/70 text-sm">Machine Learning & Automation</p>
                    </div>
                  </div>
                </div>

                {/* Scale Stage */}
                <div className="relative ml-16">
                  <div className="rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-950/40 border border-purple-400/30 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Layers3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Scale & Launch</h3>
                        <p className="text-purple-400/80 text-sm">4-8 weken</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-purple-400/20 rounded-full">
                        <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-full animate-pulse" style={{ animationDelay: '2s' }} />
                      </div>
                      <p className="text-premium-silver/70 text-sm">Production Ready & Deployment</p>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-20 left-6 w-8 h-8 border-l-2 border-b-2 border-premium-silver/20 rounded-bl-lg" />
                <div className="absolute top-48 left-14 w-8 h-8 border-l-2 border-b-2 border-premium-silver/20 rounded-bl-lg" />
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Van idee tot schaalbaar product
            </h2>
            
            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light">
              Of je nu een eerste MVP (Minimum Viable Product) wilt ontwikkelen, een bestaand platform wilt verrijken met AI-functionaliteiten of een compleet nieuw AI SaaS product wilt lanceren – wij begeleiden je van start tot schaal. Dankzij onze no-code en low-code werkwijze kunnen we razendsnel prototypes opleveren, testen met echte gebruikers en direct doorontwikkelen naar een schaalbare oplossing. Alles wordt gebouwd op een flexibele en veilige AI-architectuur, klaar voor groei.
            </p>

            {/* Process Benefits */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Snelle MVP Development</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Van concept naar werkend prototype in weken, niet maanden</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Naadloze AI Integratie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Geavanceerde AI-functionaliteit zonder technische complexiteit</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Schaalbare Lancering</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Gebouwd om duizenden gebruikers en miljoenen transacties aan te kunnen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSaaSOverview;
