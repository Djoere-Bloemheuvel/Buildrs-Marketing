
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accent: string;
  glowColor: string;
  borderGlow: string;
  iconGlow: string;
  delay: number;
}

interface ConsultancyFeaturePairProps {
  features?: Feature[];
  startIndex?: number;
}

const ConsultancyFeaturePair = ({ features = [], startIndex = 0 }: ConsultancyFeaturePairProps) => {
  return (
    <section className="py-20 lg:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-premium-black via-premium-black/95 to-premium-black">
      {/* Background ambient lighting with blue/purple focus */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl transform -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {features.map((feature, index) => (
            <div 
              key={startIndex + index}
              data-automation-item
              data-index={startIndex + index}
              className="group relative"
            >
              {/* Premium card container */}
              <div className={`relative rounded-3xl backdrop-blur-xl border ${feature.borderGlow} p-8 lg:p-12 transition-all duration-700 hover:scale-105 hover:-translate-y-4 ${feature.glowColor} shadow-2xl`}
                   style={{
                     background: `
                       linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 100%),
                       linear-gradient(135deg, ${feature.accent.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').map(color => color.replace('/', '/')).join(', ')})
                     `,
                     animation: `consultancyCardEntrance 1s ease-out forwards ${feature.delay}ms`
                   }}>
                
                {/* Icon container with premium glow */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${feature.accent} border ${feature.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${feature.glowColor}`}>
                    <feature.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${feature.iconGlow} drop-shadow-lg transition-all duration-500 group-hover:rotate-12`} />
                  </div>
                  
                  {/* Ambient icon glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500 scale-110`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-premium-silver/80 text-lg leading-relaxed font-light">
                    {feature.subtitle}
                  </p>
                </div>

                {/* Premium accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${feature.iconGlow.replace('text-', 'via-')} to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500`} />
                
                {/* Corner accent */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.iconGlow.replace('text-', 'bg-')} opacity-40 group-hover:opacity-80 transition-all duration-500`} />
              </div>

              {/* Floating ambient particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 -right-2 w-1 h-1 ${feature.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-60`} style={{ animationDelay: `${feature.delay + 1000}ms` }} />
                <div className={`absolute bottom-1/3 -left-2 w-1.5 h-1.5 ${feature.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-40`} style={{ animationDelay: `${feature.delay + 1500}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes consultancyCardEntrance {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `
      }} />
    </section>
  );
};

export default ConsultancyFeaturePair;
