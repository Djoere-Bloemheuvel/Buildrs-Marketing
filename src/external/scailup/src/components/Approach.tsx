
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AppleTimeline from './AppleTimeline';

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 bg-black"
    >
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header with refined typography */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Hero title with ultra-smooth animations */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {/* First line with smooth word-by-word reveal */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
            }}>
              {['Gebouwd', 'op', 'principes.'].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline mr-2"
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    filter: 'blur(6px)',
                    scale: 0.95
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    filter: 'blur(0px)',
                    scale: 1
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.8,
                    delay: 0.2 + (index * 0.22),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Second line with ultra-smooth fade in / slide up */}
            <motion.div 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
              }}
              initial={{ 
                opacity: 0, 
                y: 30,
                filter: 'blur(10px)',
                scale: 0.96
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                filter: 'blur(0px)',
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2.0,
                delay: 0.7,
                ease: [0.12, 1, 0.24, 1]
              }}
            >
              Gedreven door resultaat.
            </motion.div>
          </motion.div>

          {/* Subtitle with letter-by-letter reveal */}
          <motion.div 
            className="text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {['Dit', 'zijn', 'de', 'vier', 'principes', 'waarmee', 'we', 'elk', 'project', 'tot', 'een', 'succes', 'maken.'].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ 
                  opacity: 0, 
                  y: 15,
                  filter: 'blur(4px)'
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)'
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 1.0 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Apple-style vertical timeline with staggered animation */}
        <AppleTimeline isVisible={isVisible} />

      </div>
    </section>
  );
};

export default Approach;
