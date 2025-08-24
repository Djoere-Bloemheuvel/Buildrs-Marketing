
import { Brain, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ConsultancySecondaryHero = () => {
  const benefits = [{
    icon: Brain,
    title: 'Strategische Planning',
    description: 'AI-roadmaps die perfect aansluiten bij jouw bedrijfsdoelen. Van visie tot realisatie.',
    accentColor: 'from-blue-400 to-cyan-500',
    glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.5),0_0_80px_rgba(59,130,246,0.3)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(59,130,246,0.2),0_0_120px_rgba(59,130,246,0.1),0_0_200px_rgba(59,130,246,0.05)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(59,130,246,0.4),0_0_160px_rgba(59,130,246,0.2),0_0_300px_rgba(59,130,246,0.1)]',
    iconColor: 'text-blue-400',
    nativeColor: 'blue',
    borderColor: 'border-blue-500/20',
    hoverBorderColor: 'group-hover:border-blue-400/40',
    backgroundTint: 'rgba(59, 130, 246, 0.03)',
    hoverBackgroundTint: 'rgba(59, 130, 246, 0.08)'
  }, {
    icon: Target,
    title: 'Proces Optimalisatie',
    description: 'Identificeer kansen voor automatisering. Maximale impact, minimale verstoring.',
    accentColor: 'from-sky-400 to-blue-600',
    glowColor: 'shadow-[0_0_30px_rgba(14,165,233,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(14,165,233,0.5),0_0_80px_rgba(14,165,233,0.3)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(14,165,233,0.2),0_0_120px_rgba(14,165,233,0.1),0_0_200px_rgba(14,165,233,0.05)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(14,165,233,0.4),0_0_160px_rgba(14,165,233,0.2),0_0_300px_rgba(14,165,233,0.1)]',
    iconColor: 'text-sky-400',
    nativeColor: 'sky',
    borderColor: 'border-sky-500/20',
    hoverBorderColor: 'group-hover:border-sky-400/40',
    backgroundTint: 'rgba(14, 165, 233, 0.03)',
    hoverBackgroundTint: 'rgba(14, 165, 233, 0.08)'
  }, {
    icon: Lightbulb,
    title: 'Technology Selectie',
    description: 'De juiste AI-tools voor jouw organisatie. Getest, bewezen, toekomstbestendig.',
    accentColor: 'from-cyan-400 to-blue-500',
    glowColor: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.5),0_0_80px_rgba(6,182,212,0.3)]',
    radiantGlow: 'shadow-[0_0_60px_rgba(6,182,212,0.2),0_0_120px_rgba(6,182,212,0.1),0_0_200px_rgba(6,182,212,0.05)]',
    hoverRadiantGlow: 'hover:shadow-[0_0_80px_rgba(6,182,212,0.4),0_0_160px_rgba(6,182,212,0.2),0_0_300px_rgba(6,182,212,0.1)]',
    iconColor: 'text-cyan-400',
    nativeColor: 'cyan',
    borderColor: 'border-cyan-500/20',
    hoverBorderColor: 'group-hover:border-cyan-400/40',
    backgroundTint: 'rgba(6, 182, 212, 0.03)',
    hoverBackgroundTint: 'rgba(6, 182, 212, 0.08)'
  }];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-sky-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Smart. Strategisch.{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent block">
                Succesvol.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-500/20 blur-2xl -z-10 scale-110" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Van analyse tot implementatie — wij begeleiden je stap voor stap naar AI-transformatie. 
            Strategisch. Praktisch. Resultaatgericht.
          </p>
        </div>

        {/* Core Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
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
              {/* Enhanced hover effects */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 ease-out -z-10`} style={{
                background: `
                  linear-gradient(135deg, 
                    ${benefit.hoverBackgroundTint} 0%, 
                    ${benefit.accentColor.replace('from-', 'rgba(').replace('to-', 'rgba(')
                      .replace('blue-400', '59, 130, 246, 0.4').replace('cyan-500', '6, 182, 212, 0.4')
                      .replace('sky-400', '56, 189, 248, 0.4').replace('blue-600', '37, 99, 235, 0.4')
                      .replace('cyan-400', '34, 211, 238, 0.4').replace('blue-500', '59, 130, 246, 0.4')} 50%, 
                    ${benefit.hoverBackgroundTint} 100%
                  )
                `,
                filter: 'blur(25px)',
                transform: 'scale(1.1)'
              }} />

              <div className={`absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`} style={{
                borderColor: benefit.nativeColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 
                           benefit.nativeColor === 'sky' ? 'rgba(14, 165, 233, 0.4)' : 
                           'rgba(6, 182, 212, 0.4)'
              }} />

              <CardContent className="p-8 text-center relative z-10">
                {/* Icon container */}
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
                              benefit.nativeColor === 'sky' ? 'rgba(14, 165, 233, 0.2)' : 
                              'rgba(6, 182, 212, 0.2)'}`
                    }}>
                      <benefit.icon className={`w-10 h-10 ${benefit.iconColor} relative z-10 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl group-hover:scale-110`} />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:scale-105 transition-all duration-500 transform" style={{
                  color: benefit.nativeColor === 'blue' ? '#dbeafe' : 
                         benefit.nativeColor === 'sky' ? '#e0f2fe' : 
                         '#cffafe',
                  textShadow: `0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px ${benefit.backgroundTint}`
                }}>
                  {benefit.title}
                </h3>
                
                <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-all duration-500 transform group-hover:scale-[1.02]" style={{
                  textShadow: `0 1px 5px rgba(0, 0, 0, 0.3), 0 0 10px ${benefit.backgroundTint}`
                }}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancySecondaryHero;
