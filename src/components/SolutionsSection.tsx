import { motion, useInView } from 'framer-motion';
import { CheckCircle, Target, Zap, TrendingUp, Users, Shield } from 'lucide-react';
import { useRef } from 'react';

const SolutionsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const solutions = [
    {
      icon: Shield,
      title: "95%+ inbox delivery",
      description: (
        <>
          Onze AI zorgt ervoor dat je mails aankomen waar ze horen. <span className="font-bold text-white">Geen spam, wel resultaat.</span>
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Target, 
      title: "8-15% response rates",
      description: (
        <>
          Slimme personalisatie die werkt. <span className="font-bold text-white">Prospects reageren omdat ze écht geïnteresseerd zijn.</span>
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Zap,
      title: "Automatisering op maat",
      description: (
        <>
          Duizenden persoonlijke berichten die <span className="font-bold text-white">voelen als handmatig werk</span>. Schaal zonder kwaliteitsverlies.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Users,
      title: "Focus op je ICP",
      description: (
        <>
          Minder leads, betere leads. We richten ons alleen op <span className="font-bold text-white">prospects die perfect passen</span>.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: CheckCircle,
      title: "90%+ show-up rate", 
      description: (
        <>
          Gekwalificeerde afspraken die plaatsvinden. <span className="font-bold text-white">Geen no-shows, wel serieuze gesprekken.</span>
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Meetbare ROI",
      description: (
        <>
          Transparante resultaten vanaf dag 1. Je weet precies <span className="font-bold text-white">wat je terugverdient</span>.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Emerald-colored ambient lights for positive feeling */}
      <div className="absolute inset-0 opacity-25">
        <div 
          className="absolute top-1/4 left-1/4 w-[32rem] h-[18rem] bg-blue-500 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'float-orbit 8s ease-in-out infinite, scale-pulse 5s ease-in-out infinite'
          }} 
        />
        
        <div 
          className="absolute bottom-1/3 right-1/4 w-[45rem] h-[22rem] bg-blue-400 transform rotate-45 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '3s', 
            animation: 'float-smooth 7s ease-in-out infinite, scale-pulse 8s ease-in-out infinite reverse'
          }} 
        />
        
        <div 
          className="absolute top-1/2 right-1/2 w-[28rem] h-[28rem] bg-blue-500 rounded-3xl blur-3xl" 
          style={{ 
            animationDelay: '1.5s', 
            animation: 'wobble 9s ease-in-out infinite, scale-pulse 6s ease-in-out infinite'
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 z-20">
        
        {/* Header matching problems section style */}
        <motion.div 
          className="text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-2 tracking-tight leading-none" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            De Nieuwe Realiteit
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-light max-w-2xl">
            Zo werkt outbound als je het goed doet
          </p>
        </motion.div>

        {/* Inverse card layout - single column centered */}
        <div className="max-w-4xl mx-auto space-y-6">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Inverse card style - blue glow */}
                <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 lg:p-8 transition-all duration-700 hover:bg-blue-500/[0.05] hover:border-blue-400/[0.15] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                  
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-blue-400" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                        {solution.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg font-light">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;