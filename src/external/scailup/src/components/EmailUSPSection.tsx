import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Clock } from 'lucide-react';

const EmailUSPSection = () => {
  const usps = [
    {
      icon: Shield,
      title: "85% Inbox Rate",
      description: "Geen spam, wel resultaat"
    },
    {
      icon: Zap,
      title: "12% Response Rate",
      description: "10x beter dan gemiddeld"
    },
    {
      icon: TrendingUp,
      title: "3% Meeting Rate",
      description: "Direct in jouw agenda"
    },
    {
      icon: Clock,
      title: "Volledig Geautomatiseerd",
      description: "Setup in 48 uur"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle fade to black - top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Enhanced backlights - living and breathing with more intensity */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[600px] bg-gradient-to-r from-blue-600/25 via-blue-400/32 to-blue-500/25 rounded-full blur-3xl transform -rotate-12 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[400px] bg-gradient-to-l from-blue-500/20 to-blue-300/16 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-[600px] h-[300px] bg-blue-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-[400px] h-[200px] bg-gradient-to-br from-blue-300/16 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[250px] bg-gradient-to-tr from-blue-200/12 to-blue-500/16 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s' }}></div>
      </div>

      {/* Subtle fade to black - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-6 tracking-tight leading-tight" 
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Designed to <span className="font-light bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">deliver.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light">
            Elk detail is geoptimaliseerd voor maximale conversie.
          </p>
        </motion.div>

        {/* USP Cards - Apple inspired clean design */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            
            return (
              <motion.div
                key={index}
                className="relative text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 group-hover:bg-white/15 transition-all duration-500">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white/90" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 sm:mb-3 transition-colors duration-300"
                    style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {usp.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Apple inspired clean button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-white hover:bg-white/90 text-black px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Bekijk hoe het werkt
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailUSPSection;