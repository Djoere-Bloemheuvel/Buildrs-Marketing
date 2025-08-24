import { motion } from 'framer-motion';
import { Database, Target, Mail, Users, Building, Bot, MessageCircle, BarChart3, TrendingUp, Shield } from 'lucide-react';

const SimpleApproach = () => {
  const principles = [
    {
      id: 1,
      icon: Database,
      title: 'Van Data Tot Doelgroep',
      description: (
        <>
          500.000+ decision makers in <span className="font-bold text-white">onze eigen database</span>. Met AI-segmentatie vinden we direct jouw perfecte doelgroep.
        </>
      ),
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
    {
      id: 2,
      icon: Mail,
      title: 'Van Inbox Tot Meeting',
      description: (
        <>
          <span className="font-bold text-white">E-mailcampagnes</span> voor massa en bereik. In korte tijd bereiken we duizenden prospects met berichten die opvallen.
        </>
      ),
      color: 'from-blue-400 to-blue-300',
      cardGradient: 'from-blue-400/70 to-blue-300/70',
      bgGradient: 'from-blue-400/[0.015] via-black to-blue-300/[0.015]'
    },
    {
      id: 3,
      icon: Users,
      title: 'Van Connect Tot Client',
      description: (
        <>
          Conversiegerichte <span className="font-bold text-white">LinkedIn-outreach</span>. We bouwen je netwerk uit met connecties die daadwerkelijk klant worden.
        </>
      ),
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
    {
      id: 4,
      icon: Building,
      title: 'Van Account Tot Deal',
      description: (
        <>
          <span className="font-bold text-white">Account Based Marketing</span> met impact. We analyseren je hele target account met AI en benaderen meerdere decision makers tegelijk.
        </>
      ),
      color: 'from-blue-400 to-blue-300',
      cardGradient: 'from-blue-400/70 to-blue-300/70',
      bgGradient: 'from-blue-400/[0.015] via-black to-blue-300/[0.015]'
    },
    {
      id: 5,
      icon: Bot,
      title: 'Van Bulk Tot Persoonlijk',
      description: (
        <>
          Met <span className="font-bold text-white">AI</span> verzamelen we alles wat er online te vinden is over je prospect. Zo voelt elk bericht persoonlijk en levert het daadwerkelijk reacties.
        </>
      ),
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
    {
      id: 6,
      icon: MessageCircle,
      title: 'Van Reactie Tot Afspraken',
      description: (
        <>
          Wij nemen de <span className="font-bold text-white">opvolging volledig uit handen</span>. Antwoorden worden door ons omgezet in gesprekken die direct in jouw agenda belanden.
        </>
      ),
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
    {
      id: 7,
      icon: TrendingUp,
      title: 'Van Analyse Tot Groei',
      description: (
        <>
          A/B-testen en AI best practices zorgen dat we jouw campagnes steeds <span className="font-bold text-white">slimmer maken</span>. Succesvolle strategieën schalen we door.
        </>
      ),
      color: 'from-blue-400 to-blue-300',
      cardGradient: 'from-blue-400/70 to-blue-300/70',
      bgGradient: 'from-blue-400/[0.015] via-black to-blue-300/[0.015]'
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Van Inzicht Tot Vertrouwen',
      description: (
        <>
          Volledige transparantie met wekelijkse <span className="font-bold text-white">rapportages en heldere cijfers</span>. Jij hebt altijd 100% inzage in de resultaten.
        </>
      ),
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 pb-12 sm:pb-16 md:pb-24 lg:pb-32 w-full bg-black overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Apple-style Header - Responsive */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-none px-2" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Onze Aanpak
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-light max-w-2xl mx-auto px-4 sm:px-0">
            Zo pakken wij het aan, geen geheimzinnige trucjes, gewoon eerlijk werk dat resultaat oplevert
          </p>
        </motion.div>

        {/* Timeline Layout - Compact Cards */}
        <div className="relative">
          {/* Central Timeline Line - Always visible on all screens */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 opacity-20 sm:opacity-30" />
          
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={principle.id}
                className={`relative flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {/* Card container - Responsive for all screen sizes */}
                <div className={`group w-2/5 sm:w-5/12 md:w-2/5 lg:w-2/5 xl:w-5/12 ${
                  isEven 
                    ? 'pr-2 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-12' 
                    : 'pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-12'
                } relative`}>

                  <motion.div
                    className="relative border border-white/8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/12 z-10"
                    whileHover={{ 
                      scale: 1.015,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                    }}
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: `
                        0 4px 16px -4px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(255, 255, 255, 0.04),
                        inset 0 1px 0 rgba(255, 255, 255, 0.08),
                        0 0 20px ${
                          principle.color.includes('blue-500') && principle.color.includes('blue-400') ? 'rgba(59, 130, 246, 0.3)' :
                          principle.color.includes('blue-400') && principle.color.includes('blue-300') ? 'rgba(96, 165, 250, 0.3)' :
                          'rgba(59, 130, 246, 0.3)'
                        },
                        0 0 40px ${
                          principle.color.includes('blue-500') && principle.color.includes('blue-400') ? 'rgba(59, 130, 246, 0.2)' :
                          principle.color.includes('blue-400') && principle.color.includes('blue-300') ? 'rgba(96, 165, 250, 0.2)' :
                          'rgba(59, 130, 246, 0.2)'
                        }
                      `
                    }}
                  >
                    {/* Subtle top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    
                    {/* Compact content - Responsive padding */}
                    <div className="relative p-3 sm:p-4 md:p-5 lg:p-6">
                      {/* Header with icon - Responsive */}
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white leading-tight group-hover:text-blue-50 transition-colors duration-300" 
                              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {principle.title}
                          </h3>
                        </div>
                        <div className="text-right ml-2 sm:ml-3 md:ml-4 flex-shrink-0">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Description - Responsive */}
                      <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-2 sm:mb-3">
                        {principle.description}
                      </p>

                      {/* Simple progress line */}
                      <div className="relative overflow-hidden rounded-full">
                        <div className="h-px bg-white/8" />
                        <motion.div 
                          className={`absolute top-0 left-0 h-px bg-gradient-to-r ${principle.color}`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 0.9, delay: index * 0.08 + 0.25, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: true, amount: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node - Always visible, responsive sizing */}
                <div className="flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 items-center justify-center">
                  <motion.div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center border-2 sm:border-3 lg:border-4 border-black shadow-xl`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
                  >
                    <span className="text-white font-bold text-xs sm:text-sm md:text-sm lg:text-sm">{principle.id}</span>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimpleApproach;