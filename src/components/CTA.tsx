
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-4 bg-premium-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-premium-silver/8 via-premium-silver/3 to-transparent rounded-full blur-3xl smooth-hover-fade hover:from-premium-silver/12 hover:via-premium-silver/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-premium-gray/10 via-transparent to-premium-gray/10 smooth-hover-fade hover:from-premium-gray/15 hover:to-premium-gray/15"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="relative premium-card-smooth rounded-3xl p-12 md:p-16 apple-fade-in gpu-accelerated">
          {/* Premium border glow effect with smooth transitions */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-silver/10 via-transparent to-premium-silver/10 blur-sm transition-all duration-500 ease-out hover:from-premium-silver/15 hover:to-premium-silver/15"></div>
          <div className="absolute inset-[1px] rounded-[23px] bg-black"></div>

          <div className="relative z-10">
            {/* Floating icons with smooth hover */}
            <div className="absolute -top-3 left-6 opacity-40 floating-smooth" aria-hidden="true">
              <Sparkles className="w-5 h-5 text-premium-silver" />
            </div>
            <div className="absolute -top-2 right-8 opacity-30 floating-smooth" style={{animationDelay: '1s'}} aria-hidden="true">
              <Zap className="w-4 h-4 text-premium-silver" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 apple-fade-in apple-stagger-2 text-gradient-hover-smooth">
              Laat ons je <span className="text-gradient-premium">AI potentieel</span> ontdekken
            </h2>

            <p className="text-premium-silver/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light apple-fade-in apple-stagger-3 text-hover-smooth hover:text-premium-silver">
              Een strategische verkenning van 60 minuten.
              <br />
              <span className="text-white font-normal hover:text-white/90 transition-colors duration-300 ease-out">Geen sales pitch. Wel concrete inzichten en een maatwerkvoorstel.</span>
            </p>

            <div className="apple-fade-in apple-stagger-4">
              <a
                href="/contact"
                className="group relative button-hover-smooth cta-hover-smooth px-12 py-8 text-xl font-semibold rounded-xl overflow-hidden shadow-xl gpu-accelerated inline-block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: 'transform, box-shadow, background'
                }}
              >
                <span className="relative z-10 flex items-center text-black transition-colors duration-300 ease-out group-hover:text-gray-800">
                  Start met een AI-verkenning
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-400 ease-out group-hover:translate-x-3" />
                </span>

                {/* Enhanced shimmer effect with smooth animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"></div>
              </a>
            </div>

            <p className="text-premium-silver/60 text-base mt-6 italic apple-fade-in apple-stagger-5 text-hover-smooth hover:text-premium-silver/80">
              Investering: 60 minuten van uw tijd. ROI: onbetaalbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
