import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Zap } from 'lucide-react';

const EmailClosingCTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Premium gradient background - more intense for finale */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[1600px] h-[800px] bg-gradient-to-r from-blue-600/30 via-blue-400/35 to-blue-600/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 z-20 text-center">
        
        {/* Hard push headline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-8 leading-none"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Benieuwd hoe dit voor <br />
            <span className="font-light bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 100%' }}>jouw bedrijf</span> werkt?
          </h2>
          
          <p className="text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            Stop met gokken. Start met een bewezen systeem dat werkt.<br />
            <span className="font-medium text-white">85% inbox rate. 12% response rate. Gegarandeerd.</span>
          </p>
        </motion.div>

        {/* Value proposition bullets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white/90" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Setup binnen 48u</h3>
            <p className="text-white/60 text-center font-light">Direct aan de slag zonder gedoe</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white/90" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Eerste meetings in 2 weken</h3>
            <p className="text-white/60 text-center font-light">Geen maanden wachten op resultaat</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
              <ArrowRight className="w-8 h-8 text-white/90" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">30 dagen geld terug</h3>
            <p className="text-white/60 text-center font-light">100% risico-vrij uitproberen</p>
          </div>
        </motion.div>

        {/* Main CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group bg-white hover:bg-white/90 text-black px-12 py-6 rounded-full font-medium text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Plan een gesprek
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="bg-white/10 hover:bg-white/15 text-white border border-white/30 hover:border-white/40 px-12 py-6 rounded-full font-light text-xl transition-all duration-300"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Bekijk case studies
          </button>
        </motion.div>

        {/* Urgency/scarcity */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-white/60 text-lg font-light">
            Beperkte capaciteit. Maximum 5 nieuwe klanten per maand.
          </p>
          <p className="text-white/40 text-sm font-light mt-2">
            Gratis strategiesessie • Geen verplichtingen • Setup binnen 48u
          </p>
        </motion.div>

        {/* Final social proof */}
        <motion.div
          className="border-t border-white/10 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/60">
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">300+</div>
              <div className="text-sm">Klanten geholpen</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">€12M+</div>
              <div className="text-sm">Revenue gegenereerd</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-1">4.9/5</div>
              <div className="text-sm">Klantenwaardering</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default EmailClosingCTASection;