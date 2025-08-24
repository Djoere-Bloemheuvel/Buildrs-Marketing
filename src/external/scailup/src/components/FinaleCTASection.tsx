import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinaleCTASection = () => {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 bg-black overflow-hidden">
      
      {/* Fade to black effects */}
      <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black via-black/60 to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black via-black/60 to-transparent z-30 pointer-events-none" />
      
      {/* Premium ambient lighting */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/3 left-1/4 w-[50rem] h-[25rem] bg-blue-500 rounded-[50%] blur-3xl" 
          style={{ 
            animation: 'float-orbit 12s ease-in-out infinite, scale-pulse 8s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[40rem] h-[20rem] bg-blue-400 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '4s',
            animation: 'float-smooth 10s ease-in-out infinite, scale-pulse 6s ease-in-out infinite reverse'
          }} 
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-8 z-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-5xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-[0.9]" 
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Dit is hoe outbound<br />hoort te zijn.
          </h2>
          
          <p className="text-xl lg:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Transparant. Persoonlijk. Meetbaar.<br />
            <span className="text-blue-300">En eindelijk effectief.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="group relative bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold text-lg lg:text-xl px-12 lg:px-16 py-4 lg:py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]">
            <span className="flex items-center justify-center gap-3">
              Plan een gesprek
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Premium glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinaleCTASection;