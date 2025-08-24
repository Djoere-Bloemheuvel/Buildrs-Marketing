import { motion } from 'framer-motion';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  accentColor: string;
  isSpecial?: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ServiceSectionProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const ServiceSection = ({ service, index, isVisible }: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Determine layout order - Autonomous AI Agents should have text on right, visual on left
  const isAutonomousAgents = service.id === 'autonomous-agents';
  // For Autonomous AI Agents: force isEven to true (visual left, text right)
  // For others: use normal alternating pattern
  const isEven = isAutonomousAgents ? true : (index % 2 === 1);

  // Determine service type for routing
  const isAIAutomations = service.id === 'ai-automations';
  const isCustomSaaS = service.id === 'custom-saas';
  const isConsultancy = service.id === 'consultancy';

  return (
    <section
      ref={sectionRef}
      data-service-section={index}
      className={`relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${service.background}`}
    >
      {/* Background pattern for special section */}
      {service.isSpecial && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

        {/* Content - Left for normal sections, Right for Autonomous AI Agents */}
        <div className={`space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 ${isEven ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
          <div>

            {/* Typography */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
                {service.title}
              </h2>

              <h3 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed">
                {service.subtitle}
              </h3>

              <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg text-premium-silver/70 font-light leading-relaxed max-w-none sm:max-w-lg md:max-w-none tracking-wide">
                {service.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 pt-4 xs:pt-5 sm:pt-6 md:pt-8 justify-center md:justify-start">

              {isAIAutomations ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/ai-automations"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium text-xs xs:text-sm sm:text-sm md:text-base rounded-full overflow-hidden"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isCustomSaaS ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/custom-ai-saas"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isConsultancy ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/consultancy"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isAutonomousAgents ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/autonomous-ai-agents"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Visual Element - Right for normal sections, Left for Autonomous AI Agents */}
        <div className={`relative ${isEven ? 'md:order-1 md:justify-self-start' : 'md:order-2 md:justify-self-end'} flex justify-center`}>
          <div style={{ isolation: 'isolate' }}>
            <motion.div
              className="group relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
              style={{ isolation: 'isolate' }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
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

              {/* Responsive backlight glow with Framer Motion - subtler on mobile */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-xl sm:blur-2xl md:blur-3xl`}
                style={{ zIndex: 1 }}
                animate={{
                  scale: isHovered ? 1.04 : 1,
                }}
                transition={{
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              <motion.div
                className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-lg sm:blur-xl md:blur-2xl opacity-30 sm:opacity-40 md:opacity-55`}
                style={{ zIndex: 1 }}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                }}
                transition={{
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />

              {/* Main device with enhanced glassmorphism */}
              <div className="relative h-full rounded-2xl xs:rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-12 xs:p-16 sm:p-20 flex items-center justify-center shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-3xl" style={{ zIndex: 2, isolation: 'isolate' }}>

                {service.isSpecial ? (
                  // Special animated core for Studio service with steady glow instead of pulsing
                  <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-400/50" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/60 to-cyan-500/60" />
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-300 drop-shadow-lg" />
                    </div>

                    {/* Orbiting dots with enhanced visibility but no pulsing */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-blue-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-cyan-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
                    </div>
                  </div>
                ) : (
                  // Regular service visualization with steady glow instead of pulsing
                  <div className="relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-xl opacity-60 sm:opacity-75 md:opacity-90 transition-all duration-800 ease-out group-hover:opacity-70 group-hover:sm:opacity-85 group-hover:md:opacity-95 group-hover:shadow-2xl`}>
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">

                        {/* Static icon with steady glow instead of pulsing */}
                        <service.icon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-800 ease-out ease-out group-hover:text-white" style={{
                          filter: `drop-shadow(0 0 8px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                       service.accentColor.includes('purple') ? '#a855f7' :
                                                       service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}40)`
                        }} />

                        {/* Enhanced sweeping light scan with Framer Motion */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{
                            x: '100%',
                            transition: {
                              duration: 3,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              delay: index * 0.5
                            }
                          }}
                          whileHover={{
                            transition: {
                              duration: 2,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              delay: 0
                            }
                          }}
                        />


                        {/* Ambient base glow inside icon container - responsive opacity */}
                        <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-5 sm:opacity-8 md:opacity-10 transition-opacity duration-800 ease-out group-hover:opacity-3 group-hover:sm:opacity-4 group-hover:md:opacity-5`} />
                      </div>
                    </div>

                    {/* Enhanced floating accent elements - responsive opacity */}
                    <div className={`absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-30 sm:opacity-40 md:opacity-50 shadow-lg transition-all duration-1000 ease-in-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-35 group-hover:sm:opacity-45 group-hover:md:opacity-55`} />
                    <div className={`absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-45 sm:opacity-60 md:opacity-75 shadow-lg transition-all duration-1000 ease-in-out delay-75 group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-30 group-hover:sm:opacity-45 group-hover:md:opacity-50`} />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;