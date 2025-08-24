
import { ExternalLink, Target, TrendingUp, Users } from 'lucide-react';

const Showcase = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-premium-gray via-premium-black to-premium-gray">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="apple-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-premium-silver/20 bg-premium-gray/50 backdrop-blur-sm mb-4">
                <span className="text-premium-silver text-sm font-medium">Showcase</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ScailUp:<br />
                <span className="text-gradient">Ons eigen succes</span>
              </h2>
              <p className="text-premium-silver/90 text-lg leading-relaxed mb-6">
                Een AI-gedreven outbound platform dat email, LinkedIn en ABM integreert. 
                Gebouwd met onze eigen methodologie. Bewijs van wat mogelijk is.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-premium-silver" />
                <span className="text-premium-silver/90">Hypergerichte prospectie</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-premium-silver" />
                <span className="text-premium-silver/90">AI-geoptimaliseerde messaging</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-premium-silver" />
                <span className="text-premium-silver/90">Multi-channel orchestratie</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="group inline-flex items-center text-premium-silver hover:text-white transition-colors duration-300 apple-button-hover">
                <span className="font-medium">Bekijk ScailUp</span>
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative apple-fade-in apple-stagger-2">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-premium-gray via-premium-silver/5 to-premium-gray border border-premium-silver/20 backdrop-blur-sm p-6 flex items-center justify-center">
              <div className="w-full h-full rounded-xl border border-premium-silver/30 bg-premium-black/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-premium-silver/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-premium-silver" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">ScailUp</h3>
                  <p className="text-premium-silver/80 text-sm">AI Outbound Platform</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-premium-silver/10 to-transparent rounded-2xl blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
