
import { Shield, Zap, Target } from 'lucide-react';

const WhyBuildrsCards = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Geen agency. Geen buzzwords.",
      description: "Elite engineers en strategen die AI-systemen bouwen die werken. Geen marketing, geen loze beloftes.",
      accent: "from-blue-500/20 to-indigo-500/20",
      borderGlow: "border-blue-400/30",
      iconColor: "text-blue-400",
      glowColor: "shadow-blue-500/10"
    },
    {
      icon: Zap,
      title: "Wij bouwen wat anderen beloven.",
      description: "Van strategie tot implementatie. Van prototype tot productie. Autonome AI-systemen die daadwerkelijk werken.",
      accent: "from-purple-500/20 to-violet-500/20",
      borderGlow: "border-purple-400/30",
      iconColor: "text-purple-400",
      glowColor: "shadow-purple-500/10"
    },
    {
      icon: Target,
      title: "Enterprise resultaten. Elite team.",
      description: "Geen junior developers. Geen experimenteren op jouw kosten. Bewezen expertise in AI-implementaties.",
      accent: "from-emerald-500/20 to-cyan-500/20",
      borderGlow: "border-emerald-400/30",
      iconColor: "text-emerald-400",
      glowColor: "shadow-emerald-500/10"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-gray-950/20 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Waarom Buildrs?
          </h2>
          <p className="text-xl text-premium-silver/80 max-w-3xl mx-auto font-light">
            Het verschil tussen beloven en bouwen.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className={`group relative rounded-3xl backdrop-blur-xl border ${item.borderGlow} p-8 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${item.glowColor} shadow-2xl`}
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 100%),
                  linear-gradient(135deg, ${item.accent.replace('from-', '').replace('to-', '').split(' ').join(', ')})
                `
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} border ${item.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor} transition-all duration-500 group-hover:rotate-12`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-premium-silver/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${item.iconColor.replace('text-', 'via-')} to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500`} />
              
              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${item.iconColor.replace('text-', 'bg-')} opacity-40 group-hover:opacity-80 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrsCards;
