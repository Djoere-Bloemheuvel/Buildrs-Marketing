import { motion } from 'framer-motion';
import { Search, Play, Target } from 'lucide-react';

const EmailProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Ontdek",
      subtitle: "AI analyseert jouw ideale prospect",
      description: "Onze database van 500k+ decision makers wordt gefilterd op jouw perfecte doelgroep. AI identificeert de beste prospects voor jouw product."
    },
    {
      icon: Play,
      title: "Activeer",
      subtitle: "Gepersonaliseerde campagne start automatisch",
      description: "Elk bericht wordt uniek gepersonaliseerd met AI. Campagnes starten direct en worden 24/7 geoptimaliseerd voor maximale response."
    },
    {
      icon: Target,
      title: "Resultaat",
      subtitle: "Meetings landen direct in jouw agenda",
      description: "Geïnteresseerde prospects worden automatisch gescreend en gekwalificeerd. Alleen warme leads boeken een meeting in jouw agenda."
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-black overflow-hidden" id="how-it-works">
      {/* Subtle fade to black - top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Enhanced living backlights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-[1400px] h-[700px] bg-gradient-to-r from-blue-600/28 via-blue-400/35 to-blue-500/28 rounded-full blur-3xl transform -rotate-6 animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-[900px] h-[500px] bg-gradient-to-l from-blue-500/22 to-blue-300/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '13s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-[700px] h-[350px] bg-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-[600px] h-[300px] bg-gradient-to-br from-blue-300/18 to-blue-600/22 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11s' }}></div>
        <div className="absolute bottom-1/5 left-2/3 w-[500px] h-[250px] bg-gradient-to-tr from-blue-200/14 to-blue-500/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-[400px] h-[200px] bg-gradient-to-t from-blue-400/12 to-blue-600/16 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Subtle fade to black - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section header - Apple style */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-6 tracking-tight leading-tight"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Engineered for <span className="font-light bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 100%' }}>results.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Van AI tot agenda. Volledig geautomatiseerd.
          </p>
        </motion.div>

        {/* Process timeline - Apple inspired clean design */}
        <div className="relative">
          {/* Enhanced connection lines with animation */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={index}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  {/* Step icon and number - enhanced */}
                  <div className="relative mb-10">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-white/15 to-white/5 border border-white/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-white/25 group-hover:to-white/10 transition-all duration-500"
                         style={{ 
                           backdropFilter: 'blur(20px)',
                           WebkitBackdropFilter: 'blur(20px)'
                         }}>
                      <IconComponent className="w-14 h-14 lg:w-16 lg:h-16 text-white/90 group-hover:text-white transition-all duration-500" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-xl transition-all duration-500">
                      {index + 1}
                    </div>
                    {/* Floating particles effect */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: `${index * 0.5}s`, animationDuration: '3s' }}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-light text-white mb-3"
                      style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {step.title}
                  </h3>
                  <h4 className="text-base lg:text-lg text-white/70 font-light mb-4 leading-relaxed">
                    {step.subtitle}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-sm lg:text-base font-light max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/60 mb-6 text-lg lg:text-xl font-light">
            Ready to scale up?
          </p>
          <button 
            className="group bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-white px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="relative z-10">Plan een gesprek</span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
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

export default EmailProcessSection;