
import { Cog, Clock, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AutomationHero = () => {
  const benefits = [{
    icon: Zap,
    title: 'Snelheid',
    description: 'Processen die 8 uur duurden, voltooien wij in 3 minuten. Elke dag opnieuw.',
    accentColor: 'from-sky-400 to-blue-500',
    glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]', // Blue glow
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.5),0_0_80px_rgba(59,130,246,0.3)]', // Stronger blue glow on hover
    radiantGlow: 'shadow-[0_0_60px_rgba(59,130,246,0.2),0_0_120px_rgba(59,130,246,0.1),0_0_200px_rgba(59,130,246,0.05)]', // Outward radiant glow
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(59,130,246,0.4),0_0_160px_rgba(59,130,246,0.2),0_0_300px_rgba(59,130,246,0.1)]', // Stronger radiant glow on hover
    iconColor: 'text-blue-400',
    nativeColor: 'blue',
    borderColor: 'border-blue-500/20',
    hoverBorderColor: 'group-hover:border-blue-400/40',
    backgroundTint: 'rgba(59, 130, 246, 0.03)',
    hoverBackgroundTint: 'rgba(59, 130, 246, 0.08)'
  }, {
    icon: Clock,
    title: '24/7 Operationeel',
    description: 'Uw automatisering stopt nooit. Weekenden, nachten — altijd actief.',
    accentColor: 'from-violet-400 to-indigo-600',
    glowColor: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]', // Violet glow
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.5),0_0_80px_rgba(139,92,246,0.3)]', // Stronger violet glow on hover
    radiantGlow: 'shadow-[0_0_60px_rgba(139,92,246,0.2),0_0_120px_rgba(139,92,246,0.1),0_0_200px_rgba(139,92,246,0.05)]', // Outward radiant glow
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(139,92,246,0.4),0_0_160px_rgba(139,92,246,0.2),0_0_300px_rgba(139,92,246,0.1)]', // Stronger radiant glow on hover
    iconColor: 'text-violet-400',
    nativeColor: 'violet',
    borderColor: 'border-violet-500/20',
    hoverBorderColor: 'group-hover:border-violet-400/40',
    backgroundTint: 'rgba(139, 92, 246, 0.03)',
    hoverBackgroundTint: 'rgba(139, 92, 246, 0.08)'
  }, {
    icon: Cog,
    title: 'Precisie',
    description: 'Nul fouten. Elke handeling exact zoals bedoeld. Geen uitzonderingen.',
    accentColor: 'from-blue-400 to-purple-500',
    glowColor: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]', // Blue-purple glow
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(99,102,241,0.5),0_0_80px_rgba(99,102,241,0.3)]', // Stronger blue-purple glow on hover
    radiantGlow: 'shadow-[0_0_60px_rgba(99,102,241,0.2),0_0_120px_rgba(99,102,241,0.1),0_0_200px_rgba(99,102,241,0.05)]', // Outward radiant glow
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(99,102,241,0.4),0_0_160px_rgba(99,102,241,0.2),0_0_300px_rgba(99,102,241,0.1)]', // Stronger radiant glow on hover
    iconColor: 'text-indigo-400',
    nativeColor: 'indigo',
    borderColor: 'border-indigo-500/20',
    hoverBorderColor: 'group-hover:border-indigo-400/40',
    backgroundTint: 'rgba(99, 102, 241, 0.03)',
    hoverBackgroundTint: 'rgba(99, 102, 241, 0.08)'
  }];

  return <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
        animationDelay: '0s',
        animationDuration: '4s'
      }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
        animationDelay: '2s',
        animationDuration: '3s'
      }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
        animationDelay: '1s',
        animationDuration: '5s'
      }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-green-400/60 rounded-full animate-pulse" style={{
        animationDelay: '3s',
        animationDuration: '4s'
      }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-32">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Slim. Snel.{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                Onzichtbaar.
              </span>
              {/* Light gradient glow behind "Onzichtbaar" */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-2xl -z-10 scale-110" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. 
            Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
          </p>

          
        </div>

        {/* Core Benefits Section - Enhanced with Full Native Color Integration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <Card 
            key={index} 
            className={`group relative overflow-hidden cursor-default animate-fade-in transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 ${benefit.glowColor} ${benefit.hoverGlow} ${benefit.radiantGlow} ${benefit.hoverRadiantGlow} ${benefit.borderColor} ${benefit.hoverBorderColor}`} 
            style={{
              animationDelay: `${index * 0.2}s`,
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.05) 0%, 
                  ${benefit.backgroundTint} 20%, 
                  rgba(255, 255, 255, 0.02) 100%
                ),
                radial-gradient(ellipse 400px 200px at 50% 0%, ${benefit.backgroundTint} 0%, transparent 70%),
                radial-gradient(ellipse 300px 150px at 50% 100%, ${benefit.backgroundTint} 0%, transparent 70%)
              `,
              backdropFilter: 'blur(20px) saturate(180%)',
              border: `1px solid rgba(255, 255, 255, 0.1)`,
              borderRadius: '16px',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                0 4px 16px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(255, 255, 255, 0.05)
              `
            }}
          >
              {/* Enhanced Glassmorphic hover glow effect with native color integration */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 ease-out -z-10`} style={{
            background: `
              linear-gradient(135deg, 
                ${benefit.hoverBackgroundTint} 0%, 
                ${benefit.accentColor.replace('from-', 'rgba(').replace('to-', 'rgba(')
                  .replace('sky-400', '56, 189, 248, 0.4').replace('blue-500', '59, 130, 246, 0.4')
                  .replace('violet-400', '139, 92, 246, 0.4').replace('indigo-600', '79, 70, 229, 0.4')
                  .replace('blue-400', '96, 165, 250, 0.4').replace('purple-500', '168, 85, 247, 0.4')} 50%, 
                ${benefit.hoverBackgroundTint} 100%
              )
            `,
            filter: 'blur(25px)',
            transform: 'scale(1.1)'
          }} />

              {/* Premium hover border enhancement with native colors */}
              <div className={`absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`} style={{
            borderColor: benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 
                         benefit.nativeColor === 'violet' ? 'rgba(139, 92, 246, 0.4)' : 
                         'rgba(99, 102, 241, 0.4)'
          }} />
              
              {/* Dynamic ambient glow on hover with native colors */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 ease-out" style={{
            background: `radial-gradient(circle at 50% 50%, ${benefit.hoverBackgroundTint} 0%, transparent 70%)`
          }} />

              {/* New: Extended Outward Radiant Glow - positioned outside the card */}
              <div className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-1000 ease-out -z-20" style={{
            background: `radial-gradient(ellipse 200% 150% at 50% 50%, ${benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.15)' : benefit.nativeColor === 'violet' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(99, 102, 241, 0.15)'} 0%, transparent 60%)`,
            filter: 'blur(40px)'
          }} />

              {/* New: Far Extended Radiant Glow - even further outward */}
              <div className="absolute -inset-16 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-1500 ease-out -z-30" style={{
            background: `radial-gradient(ellipse 300% 200% at 50% 50%, ${benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.08)' : benefit.nativeColor === 'violet' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(99, 102, 241, 0.08)'} 0%, transparent 70%)`,
            filter: 'blur(60px)'
          }} />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container with enhanced native color integration */}
                <div className="relative w-20 h-20 mx-auto mb-6 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 rounded-2xl p-0.5 transition-all duration-500 shadow-xl group-hover:shadow-2xl" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                opacity: '0.9',
                filter: 'brightness(1) group-hover:brightness(1.2)'
              }}>
                    <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500" style={{
                  background: `
                          linear-gradient(135deg, 
                            rgba(0, 0, 0, 0.8) 0%, 
                            ${benefit.backgroundTint} 30%, 
                            rgba(0, 0, 0, 0.9) 100%
                          ),
                          radial-gradient(ellipse at center, ${benefit.backgroundTint} 0%, transparent 70%)
                        `,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 
                          benefit.nativeColor === 'violet' ? 'rgba(139, 92, 246, 0.2)' : 
                          'rgba(99, 102, 241, 0.2)'}`
                }}>
                      {/* Icon with native color */}
                      <benefit.icon className={`w-10 h-10 ${benefit.iconColor} relative z-10 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl group-hover:scale-110`} />
                      
                      {/* Enhanced glassmorphic inner glow with native colors */}
                      <div className="absolute inset-2 rounded-xl opacity-20 group-hover:opacity-40 transition-all duration-500" style={{
                    background: `linear-gradient(135deg, ${benefit.hoverBackgroundTint} 0%, ${benefit.accentColor} 50%, ${benefit.hoverBackgroundTint} 100%)`,
                    filter: 'blur(8px)'
                  }} />

                      {/* Pulsing hover effect overlay with native colors */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-700 ease-out animate-pulse" style={{
                    background: `linear-gradient(135deg, ${benefit.hoverBackgroundTint} 0%, ${benefit.accentColor} 100%)`,
                    animationDuration: '2s'
                  }} />
                    </div>
                  </div>
                  
                  {/* Enhanced floating glassmorphic accent elements with native colors */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg opacity-80 group-hover:opacity-100 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700 shadow-lg" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                backdropFilter: 'blur(4px)',
                filter: 'brightness(1.2)'
              }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-75 group-hover:opacity-95 group-hover:-rotate-90 group-hover:scale-150 transition-all duration-800 delay-100 shadow-lg" style={{
                background: `linear-gradient(135deg, ${benefit.accentColor})`,
                backdropFilter: 'blur(4px)',
                filter: 'brightness(1.1)'
              }} />

                  {/* Orbiting particle effect on hover with native colors */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-500">
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-spin" style={{
                  background: benefit.nativeColor === 'blue' ? '#38bdf8' : benefit.nativeColor === 'violet' ? '#8b5cf6' : '#6366f1',
                  transform: 'translate(-50%, -50%)',
                  animationDuration: '3s'
                }}>
                      <div className="absolute w-2 h-2 rounded-full -top-8" style={{
                    background: benefit.nativeColor === 'blue' ? '#60a5fa' : benefit.nativeColor === 'violet' ? '#a78bfa' : '#818cf8'
                  }} />
                    </div>
                  </div>
                </div>
                
                {/* Typography with enhanced native color integration */}
                <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-all duration-500 transform" style={{
              color: benefit.nativeColor === 'blue' ? '#dbeafe' : 
                     benefit.nativeColor === 'violet' ? '#ede9fe' : 
                     '#e0e7ff',
              textShadow: `0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px ${benefit.backgroundTint}`
            }}>
                  {benefit.title}
                </h3>
                
                <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-all duration-500 transform group-hover:scale-[1.02]" style={{
              textShadow: `0 1px 5px rgba(0, 0, 0, 0.3), 0 0 10px ${benefit.backgroundTint}`
            }}>
                  {benefit.description}
                </p>

                {/* Subtle scanning line effect on hover with native colors */}
                <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-80 transition-all duration-1000 ease-out transform -translate-y-full group-hover:translate-y-full" style={{
              background: `linear-gradient(to right, transparent, ${benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.6)' : benefit.nativeColor === 'violet' ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.6)'}, transparent)`,
              animationDelay: '0.2s'
            }} />
              </CardContent>

              {/* Enhanced hover shimmer effect with native colors */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" style={{
            background: `linear-gradient(to right, transparent, ${benefit.backgroundTint}, transparent)`
          }} />
              
              {/* Premium hover reflection with native color tint */}
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" style={{
            background: `linear-gradient(to bottom, ${benefit.backgroundTint}, transparent)`
          }} />
            </Card>)}
        </div>
      </div>
    </section>;
};

export default AutomationHero;
