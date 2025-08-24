import { motion } from 'framer-motion';
import { Database, Bot, Calendar, BarChart, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const EmailProductDetailsSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    {
      id: 'prospect-database',
      icon: Database,
      title: "Prospect Database",
      subtitle: "500k+ Nederlandse decision makers",
      description: "Complete database met contactgegevens van beslissers in Nederland. Inclusief real-time verificatie en GDPR-compliance.",
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      keywords: "prospect database nederland, b2b contacten, decision makers"
    },
    {
      id: 'ai-personalization',
      icon: Bot,
      title: "AI Personalisatie",
      subtitle: "Unieke berichten per prospect",
      description: "Geavanceerde AI analyseert elke prospect en schrijft gepersonaliseerde berichten die resoneren met hun specifieke situatie.",
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      keywords: "AI personalisatie, gepersonaliseerde emails, artificial intelligence marketing"
    },
    {
      id: 'meeting-scheduling',
      icon: Calendar,
      title: "Meeting Scheduling",
      subtitle: "Automatische agenda-integratie",
      description: "Geïnteresseerde prospects kunnen direct een meeting inplannen via geautomatiseerde scheduling zonder handmatig werk.",
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      keywords: "meeting scheduling, automatische afspraken, agenda integratie"
    },
    {
      id: 'performance-analytics',
      icon: BarChart,
      title: "Performance Analytics",
      subtitle: "Real-time campagne resultaten",
      description: "Uitgebreide rapportage met open rates, response rates, meeting bookings en ROI tracking voor continue optimalisatie.",
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      keywords: "email marketing analytics, campagne resultaten, roi tracking"
    }
  ];

  return (
    <div className="relative bg-black" id="diensten">
      {/* Section header */}
      <motion.div
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white mb-6 sm:mb-8"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            E-mail Marketing Diensten
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Complete AI-gedreven e-mailcampagne service van targeting tot meeting booking
          </p>
        </div>
      </motion.div>

      {/* Service sections - split screen like ServiceSection */}
      {services.map((service, index) => {
        const isEven = index % 2 === 1;
        const isHovered = hoveredService === index;

        return (
          <section
            key={service.id}
            className={`relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${service.background}`}
          >
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

              {/* Content */}
              <motion.div 
                className={`space-y-6 sm:space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div>
                  {/* Typography */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                      {service.title}
                    </h3>

                    <h4 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed">
                      {service.subtitle}
                    </h4>

                    <p className="text-sm xs:text-base sm:text-base md:text-lg text-premium-silver/70 font-light leading-relaxed max-w-none sm:max-w-lg tracking-wide">
                      {service.description}
                    </p>
                  </div>

                  {/* SEO keywords (hidden) */}
                  <div className="sr-only" aria-label={`Keywords: ${service.keywords}`}>
                    {service.keywords}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 sm:pt-8">
                    <div className="relative group">
                      {/* External glow aura */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                      
                      <motion.button 
                        className="group relative inline-flex items-center justify-center px-8 xs:px-12 sm:px-16 md:px-20 py-3 xs:py-3.5 sm:py-4 bg-black text-white font-medium text-sm xs:text-sm sm:text-base rounded-full"
                        whileHover={{
                          scale: 1.05,
                          transition: {
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1]
                          }
                        }}
                        whileTap={{
                          scale: 0.98,
                          y: 0
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        style={{
                          filter: "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.2))"
                        }}
                      >
                        {/* Animated gradient border */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                          <div className="w-full h-full rounded-full bg-premium-black" />
                        </div>
                        {/* Rotating gradient border on hover */}
                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                          <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                            <div className="w-full h-full rounded-full bg-premium-black" />
                          </div>
                        </div>
                        <span className="relative z-10 text-xs xs:text-sm font-medium">Meer informatie</span>
                        <motion.div
                          className="relative z-10 ml-2"
                          animate={{ x: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div 
                className={`relative ${isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div style={{ isolation: 'isolate' }}>
                  <motion.div
                    className="group relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-80 md:h-80"
                    style={{ isolation: 'isolate' }}
                    onHoverStart={() => setHoveredService(index)}
                    onHoverEnd={() => setHoveredService(null)}
                    whileHover={{
                      scale: 1.08,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >

                    {/* Strong backlight glow - ROUND */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-full blur-3xl`}
                      style={{ zIndex: 1, opacity: 0.5 }}
                      animate={{
                        scale: isHovered ? 1.04 : 1,
                      }}
                      transition={{
                        duration: 0.4, 
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />
                    <motion.div
                      className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-full blur-2xl`}
                      style={{ zIndex: 1, opacity: 0.55 }}
                      animate={{
                        scale: isHovered ? 1.03 : 1,
                      }}
                      transition={{
                        duration: 0.4, 
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    />

                    {/* Main device with glassmorphism - ROUND */}
                    <div className="relative h-full rounded-full bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-3xl" style={{ zIndex: 2, isolation: 'isolate' }}>

                      {/* Round service visualization */}
                      <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.accentColor} p-0.5 shadow-xl opacity-90 transition-all duration-800 ease-out group-hover:opacity-95 group-hover:shadow-2xl`}>
                          <div className="w-full h-full rounded-full bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">

                            {/* Static icon with steady glow */}
                            <service.icon className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-800 ease-out group-hover:text-white" style={{
                              filter: 'drop-shadow(0 0 8px #60a5fa40)'
                            }} />

                            {/* Enhanced circular light scan */}
                            <motion.div
                              className="absolute inset-0 rounded-full overflow-hidden"
                              animate={{
                                rotate: 360,
                              }}
                              transition={{
                                duration: 3,
                                ease: 'linear',
                                repeat: Infinity,
                                delay: index * 0.5
                              }}
                            >
                              <div 
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: 'conic-gradient(from 0deg, transparent 70%, rgba(255,255,255,0.3) 85%, rgba(255,255,255,0.1) 95%, transparent 100%)'
                                }}
                              />
                            </motion.div>

                            {/* Ambient base glow inside icon container */}
                            <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${service.accentColor} opacity-10 transition-opacity duration-800 ease-out group-hover:opacity-5`} />
                          </div>
                        </div>

                        {/* Enhanced floating accent elements - ALL ROUND */}
                        <div className={`absolute -top-3 -right-3 xs:-top-4 xs:-right-4 w-6 h-6 xs:w-8 xs:h-8 rounded-full bg-gradient-to-br ${service.accentColor} opacity-50 shadow-lg transition-all duration-1000 ease-in-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-55`} />
                        <div className={`absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 w-4 h-4 xs:w-6 xs:h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-75 shadow-lg transition-all duration-1000 ease-in-out delay-75 group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-50`} />
                        <div className={`absolute top-1 -left-4 xs:top-2 xs:-left-6 w-3 h-3 xs:w-4 xs:h-4 rounded-full bg-gradient-to-br ${service.accentColor} opacity-60 shadow-md transition-all duration-1000 ease-in-out delay-150 group-hover:-translate-x-0.5 group-hover:opacity-70`} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Additional SEO content sections */}
      <div className="relative py-20 lg:py-28 bg-black">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          
          {/* Cold Email Marketing Nederland */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-6"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Cold Email Marketing Nederland
            </h3>
            <p className="text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              Gespecialiseerd in <strong className="text-white/80">cold email campaigns</strong> voor de Nederlandse markt. 
              Onze AI-gedreven aanpak zorgt voor hoogste <strong className="text-white/80">inbox delivery rates</strong> en 
              <strong className="text-white/80"> response rates</strong> in de industrie.
            </p>
          </motion.div>

          {/* Outbound Marketing Automation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-6"
                style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Outbound Marketing Automation
            </h3>
            <p className="text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              Volledige <strong className="text-white/80">marketing automation</strong> van prospect research tot meeting booking. 
              Onze <strong className="text-white/80">outbound marketing</strong> strategie combineert data-driven targeting 
              met persoonlijke touchpoints voor maximale conversie.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        className="relative py-20 bg-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-white/60 mb-8 text-lg font-light">
            Wil je meer weten over onze specifieke diensten?
          </p>
          <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-full font-light text-lg transition-all duration-300">
            Bekijk alle diensten
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailProductDetailsSection;