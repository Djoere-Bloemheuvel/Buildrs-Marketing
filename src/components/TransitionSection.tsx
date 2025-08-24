import { motion } from 'framer-motion';

const TransitionSection = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      
      {/* Minimal ambient light */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-blue-500 rounded-[50%] blur-3xl" 
          style={{ 
            animation: 'scale-pulse 8s ease-in-out infinite'
          }} 
        />
      </div>

      {/* Fade to black at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)'
        }}
      />

      {/* Fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-8 z-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-tight" 
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Maar er is een betere manier.
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Wat niet meer werkt, vervangen door wat wél werkt.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TransitionSection;