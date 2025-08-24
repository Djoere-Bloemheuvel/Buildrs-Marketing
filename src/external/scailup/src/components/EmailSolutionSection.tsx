import { motion } from 'framer-motion';
import { Sparkles, Zap, Target } from 'lucide-react';

const EmailSolutionSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Wij prospecteer. Jij sluit.",
      description: "Van onderzoek tot opvolging. AI doet het zware werk. Jouw team focust op wat ze het beste kunnen: deals sluiten."
    },
    {
      icon: Zap,
      title: "Wij personaliseren. Jij oogst.",
      description: "Elke mail uniek. Elke prospect geanalyseerd. 500k+ warme leads die perfect passen bij jouw propositie."
    },
    {
      icon: Target,
      title: "Wij kwalificeren. Jij casht.",
      description: "Alleen geïnteresseerde prospects boeken meetings. Je agenda vult zich met warme gesprekken die converteren."
    }
  ];

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Subtle fade to black effect - top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 w-[1400px] h-[700px] bg-gradient-to-r from-blue-600/20 via-blue-400/25 to-blue-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 z-20">
        
        {/* Hero statement - Agency focused */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-8 leading-none"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Wij doen het <span className="font-light bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 100%' }}>voor je.</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
            Jouw team focust op sluiten. Wij zorgen voor de pipeline.<br />
            <span className="font-medium">Full-service. Volledig geautomatiseerd.</span>
          </p>
        </motion.div>

        {/* Feature cards - Apple minimalism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-white/90" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple proof statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          <p className="text-lg text-white/60 font-light">
            85% inbox rate. 12% response rate. 3% meeting rate.
          </p>
          <p className="text-lg text-white/60 font-light mt-2">
            Gemiddeld over 300+ klanten.
          </p>
        </motion.div>
      </div>

      {/* Subtle fade to black effect - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

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

export default EmailSolutionSection;