import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CinematicBackground from './hero/CinematicBackground';

const EndingCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center py-20"
    >
      {/* Enhanced fade to black effects - top and bottom */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black via-black/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />
      
      {/* CinematicBackground - positioned behind main content with glass container hidden */}
      <div className="absolute inset-0 z-5">
        <CinematicBackground hideGlassContainer={true} />
      </div>

      {/* Repositioned background glow - moved to the right side */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-radial from-cyan-500/8 via-violet-500/4 to-transparent opacity-40 blur-3xl" />

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Premium Glass Container */}
        <motion.div
          className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl"
          style={{
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Main Title */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
                  <motion.span 
                    className="text-white tracking-wide"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    Zonder AI{" "}
                  </motion.span>
                  <motion.span 
                    className="text-gray-300 font-medium"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    loop je achter.
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-lg md:text-xl font-light text-white/90 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Wij brengen je grootste AI-kansen in kaart, zonder verplichtingen. In 30 minuten ontdek je waar jouw bedrijf het meeste rendement uit AI kan halen.
                </motion.p>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.button
                  onClick={handleContactClick}
                  aria-label="Plan mijn AI Scan - Start een gesprek met Buildrs.AI"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full border border-white/20 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.08,
                    y: -6,
                    rotateY: 2,
                    rotateX: -1,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)'
                  }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{
                    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Button background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center">
                    <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Plan mijn AI Scan</span>
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Visual Element - Enhanced AI Brain */}
            <motion.div
              className="relative flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                
                {/* Animated rings */}
                {[1, 2, 3].map((ring, i) => (
                  <motion.div
                    key={ring}
                    className="absolute border border-blue-400/20 rounded-full"
                    style={{
                      width: `${120 + i * 40}px`,
                      height: `${120 + i * 40}px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                ))}

                {/* Central brain with enhanced effects */}
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    y: [-4, 4, -4],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      rotateY: 5,
                      rotateX: -2
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Brain 
                      className="w-24 h-24 text-white drop-shadow-2xl" 
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))'
                      }}
                    />
                    
                    {/* Pulsing glow behind brain */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Orbiting particles */}
                {[0, 1, 2, 3, 4, 5].map((particle, i) => (
                  <motion.div
                    key={particle}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    style={{
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                    }}
                    animate={{
                      rotate: 360,
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      rotate: { duration: 15 + i * 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3 + i * 0.5, repeat: Infinity },
                      opacity: { duration: 2 + i * 0.3, repeat: Infinity }
                    }}
                    initial={{
                      x: Math.cos((i * 60) * Math.PI / 180) * (100 + i * 10),
                      y: Math.sin((i * 60) * Math.PI / 180) * (100 + i * 10)
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
                rotateY: 1
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Buildrs.AI</h3>
              <p className="text-white/70 italic text-sm max-w-md">
                Elite AI Engineering. Exclusief voor visionairs die de toekomst vormgeven.
              </p>
            </motion.div>
            
            <div className="text-center md:text-right">
              <p className="text-white/50 text-sm mb-1">© 2024 Buildrs.AI</p>
              <p className="text-white/40 text-xs italic">Designed for disruption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EndingCTA;