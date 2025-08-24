import { motion, useInView } from 'framer-motion';
import { DollarSign, Clock, Target, AlertTriangle, TrendingDown, X, Mail, Phone, Ban } from 'lucide-react';
import { useRef } from 'react';

const ProblemsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const problems = [
    {
      icon: Ban,
      title: "De helft verdwijnt in spam",
      description: (
        <>
          53% van je mails komt nooit aan. Niet geopend, niet gelezen. <span className="font-bold text-white">Gewoon weg.</span> Voordat je prospect überhaupt weet dat je bestaat. Elke mail in spam is weggegooid marketingbudget.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Mail,
      title: "99,9% reageert nooit",
      description: (
        <>
          Zelfs als je mail de inbox bereikt, reageert minder dan 1% van je prospects. <span className="font-bold text-white">De rest negeert je.</span> Weken werk voor vrijwel geen leads. Jouw outbound ROI? Praktisch nul.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Phone,
      title: "Niemand neemt meer op",
      description: (
        <>
          Bij 9 van de 10 calls wordt je nummer <span className="font-bold text-white">direct weggedrukt</span>. Wat overblijft, wordt geblokkeerd door secretaresses. Cold calling slokt uren op, maar levert niets op.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Target,
      title: "Personaliseren is onmogelijk",
      description: (
        <>
          Je moet personaliseren om op te vallen. Maar je moet ook opschalen om resultaat te halen. Bulk voelt als spam. Handmatig kost weken. Hoe je het ook doet: <span className="font-bold text-white">je verliest altijd</span>.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: Clock,
      title: "Weken werk voor niets",
      description: (
        <>
          Urenlang scrapen, personaliseren en opvolgen voor een handvol reacties <span className="font-bold text-white">die nergens toe leiden</span>. Je investeert maanden in outbound, maar je omzet groeit niet.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: DollarSign,
      title: "Veel werk. Geen winst.",
      description: (
        <>
          Je boekt eindelijk afspraken na weken outbound werk, maar de helft <span className="font-bold text-white">komt niet opdagen</span>. No-shows en tijdverspillers maken je hele pipeline waardeloos. Al die moeite voor niks.
        </>
      ),
      color: "from-blue-500 to-blue-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-black overflow-hidden"
    >
      {/* LinkedIn-colored dynamically animated ambient lights */}
      <div className="absolute inset-0 opacity-30">
        {/* Elliptical moving light */}
        <div 
          className="absolute top-1/4 left-1/4 w-[28rem] h-[16rem] bg-blue-500 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'float-orbit 6s ease-in-out infinite, scale-pulse 4s ease-in-out infinite, wobble 8s ease-in-out infinite, glow-pulse 7s ease-in-out infinite'
          }} 
        />
        
        {/* Diagonal oval that moves more dramatically */}
        <div 
          className="absolute bottom-1/3 right-1/4 w-[40rem] h-[20rem] bg-blue-400 transform rotate-45 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '2s', 
            animation: 'float-smooth 5s ease-in-out infinite, scale-pulse 6s ease-in-out infinite, float-orbit 10s ease-in-out infinite reverse, wobble 12s ease-in-out infinite'
          }} 
        />
        
        {/* Square-rounded moving light */}
        <div 
          className="absolute top-1/2 right-1/2 w-[24rem] h-[24rem] bg-blue-500 rounded-3xl blur-3xl" 
          style={{ 
            animationDelay: '1s', 
            animation: 'wobble 7s ease-in-out infinite, scale-pulse 5s ease-in-out infinite, float-smooth 9s ease-in-out infinite reverse, glow-pulse 11s ease-in-out infinite reverse'
          }} 
        />
        
        {/* Fast moving triangle-like shape */}
        <div 
          className="absolute top-1/3 right-1/3 w-[18rem] h-[12rem] bg-blue-400/40 transform rotate-12 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '3s', 
            animation: 'float-orbit 4s ease-in-out infinite reverse, scale-pulse 3s ease-in-out infinite, sweep 8s ease-in-out infinite'
          }} 
        />
        
        {/* Horizontal moving oval */}
        <div 
          className="absolute bottom-1/4 left-1/3 w-[32rem] h-[14rem] bg-blue-500/35 rounded-[50%] blur-3xl" 
          style={{ 
            animationDelay: '4s', 
            animation: 'wobble 6s ease-in-out infinite, float-smooth 5s ease-in-out infinite, glow-pulse 8s ease-in-out infinite'
          }} 
        />
        
        {/* Additional fast moving particle */}
        <div 
          className="absolute top-3/4 left-1/2 w-[20rem] h-[20rem] bg-blue-400/30 rounded-full blur-3xl" 
          style={{ 
            animationDelay: '5s', 
            animation: 'float-orbit 3s ease-in-out infinite, scale-pulse 4s ease-in-out infinite reverse, wobble 7s ease-in-out infinite reverse'
          }} 
        />
      </div>

      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 z-20">
        
        {/* Apple-style Header - Responsive */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-none px-2" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            De Harde Waarheid
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-light max-w-2xl mx-auto px-4 sm:px-0">
            Waarom outbound niet meer werkt zoals vroeger
          </p>
        </motion.div>

        {/* Apple-style Clean Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Apple-style card - Responsive */}
                <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-700 hover:bg-blue-500/[0.05] hover:border-blue-400/[0.15]">
                  
                  {/* Icon - Responsive */}
                  <div className="mb-3 sm:mb-4 lg:mb-5">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Content - Responsive */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-1 font-light">
                      {problem.description}
                    </p>
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

export default ProblemsSection;