
import { Bot, MessageSquare, Cpu, Brain, Network, Zap, Eye } from 'lucide-react';

const AgentExplained = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-blue-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Wat zijn Autonomous AI Agents?
            </h2>
            
            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light">
              Een Autonomous AI Agent is een digitale assistent die zelfstandig kan denken, beslissen en handelen binnen vooraf gedefinieerde kaders. In plaats van een simpel script of chatbot werkt een agent doelgericht, met geheugen, en voert hij acties uit in tools zoals e-mail, CRM, agenda of API-integraties. Ideaal voor sales, klantenservice, administratie of interne coördinatie.
            </p>

            {/* Key Points */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Zelfstandig handelen</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Neemt beslissingen en voert acties uit zonder menselijke tussenkomst</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Natuurlijke communicatie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Communiceert vloeiend met mensen en systemen in context</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Geheugen & leren</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Onthoudt interacties en verbetert prestaties door ervaring</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent Network Visual - Subtle animations */}
          <div className="relative flex items-center justify-center">
            {/* Central Command Agent */}
            <div className="relative">
              {/* Outer network ring - very slow pulse */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border border-teal-400/15" style={{
                animation: 'subtle-pulse 12s ease-in-out infinite'
              }} />
              
              {/* Middle coordination ring - slower pulse */}
              <div className="absolute inset-8 md:inset-12 rounded-full border border-blue-400/20" style={{
                animation: 'subtle-pulse 10s ease-in-out infinite',
                animationDelay: '-4s'
              }} />
              
              {/* Central AI Command Hub */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(59, 130, 246, 0.06) 40%, rgba(16, 185, 129, 0.03) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(20, 184, 166, 0.25)',
                boxShadow: `
                  0 0 60px rgba(20, 184, 166, 0.15),
                  0 0 120px rgba(59, 130, 246, 0.08),
                  inset 0 0 60px rgba(16, 185, 129, 0.05)
                `,
                animation: 'gentle-glow 8s ease-in-out infinite'
              }}>
                {/* Command Center Icon */}
                <div className="relative">
                  <Network className="w-24 h-24 md:w-32 md:h-32 text-teal-300 drop-shadow-2xl" style={{
                    filter: 'drop-shadow(0 0 15px rgba(20, 184, 166, 0.4))',
                    animation: 'gentle-breathe 6s ease-in-out infinite'
                  }} />
                  
                  {/* Central processing indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-teal-400/40 rounded-full" style={{
                    animation: 'soft-pulse 4s ease-in-out infinite'
                  }} />
                </div>
              </div>
              
              {/* Autonomous Agent Satellites - Much slower movement */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Agent nodes with different capabilities */}
                {[
                  { angle: 0, icon: Bot, color: 'teal', delay: 0 },
                  { angle: 60, icon: MessageSquare, color: 'blue', delay: 2 },
                  { angle: 120, icon: Cpu, color: 'cyan', delay: 4 },
                  { angle: 180, icon: Eye, color: 'emerald', delay: 6 },
                  { angle: 240, icon: Zap, color: 'indigo', delay: 8 },
                  { angle: 300, icon: Brain, color: 'purple', delay: 10 }
                ].map((agent, i) => {
                  return (
                    <div
                      key={`agent-${i}`}
                      className="absolute"
                      style={{
                        animation: `gentle-orbit 45s linear infinite`,
                        transform: `rotate(${agent.angle}deg) translateY(-110px)`,
                        transformOrigin: '50% 110px'
                      }}
                    >
                      <div className={`w-14 h-14 md:w-18 md:h-18 rounded-xl bg-gradient-to-br from-${agent.color}-500/20 to-${agent.color}-600/15 border border-${agent.color}-400/30 backdrop-blur-sm flex items-center justify-center`} style={{
                        animation: `soft-glow-${agent.color} 8s ease-in-out infinite`,
                        animationDelay: `${agent.delay}s`,
                        boxShadow: `0 0 15px rgba(${agent.color === 'teal' ? '20, 184, 166' : agent.color === 'blue' ? '59, 130, 246' : agent.color === 'cyan' ? '34, 211, 238' : '16, 185, 129'}, 0.2)`
                      }}>
                        <agent.icon className={`w-6 h-6 md:w-8 md:h-8 text-${agent.color}-300`} style={{
                          transform: `rotate(-${agent.angle}deg)`
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Data Flow Connections - More subtle */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Subtle orbital connection rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border-dashed border border-teal-400/10" style={{
                animation: 'slow-spin 60s linear infinite'
              }} />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-dashed border border-blue-400/8" style={{
                animation: 'slow-spin 80s linear infinite reverse'
              }} />
            </div>

            {/* Floating data particles - Very subtle */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => {
                const x = 20 + Math.random() * 60;
                const y = 20 + Math.random() * 60;
                return (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animation: `gentle-float 6s ease-in-out infinite`,
                      animationDelay: `${i * 1.5}s`
                    }}
                  />
                );
              })}
            </div>

            {/* Subtle Animation Styles */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes subtle-pulse {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.5; }
                }

                @keyframes gentle-glow {
                  0%, 100% { 
                    filter: blur(20px);
                    box-shadow: 
                      0 0 60px rgba(20, 184, 166, 0.15),
                      0 0 120px rgba(59, 130, 246, 0.08),
                      inset 0 0 60px rgba(16, 185, 129, 0.05);
                  }
                  50% { 
                    filter: blur(22px);
                    box-shadow: 
                      0 0 70px rgba(20, 184, 166, 0.2),
                      0 0 140px rgba(59, 130, 246, 0.1),
                      inset 0 0 70px rgba(16, 185, 129, 0.08);
                  }
                }

                @keyframes gentle-breathe {
                  0%, 100% { 
                    transform: scale(1);
                    filter: drop-shadow(0 0 15px rgba(20, 184, 166, 0.4));
                  }
                  50% { 
                    transform: scale(1.02);
                    filter: drop-shadow(0 0 20px rgba(20, 184, 166, 0.5));
                  }
                }

                @keyframes soft-pulse {
                  0%, 100% { opacity: 0.4; }
                  50% { opacity: 0.6; }
                }

                @keyframes gentle-orbit {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes slow-spin {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
                }

                @keyframes gentle-float {
                  0%, 100% { 
                    opacity: 0.2; 
                    transform: translateY(0); 
                  }
                  50% { 
                    opacity: 0.4; 
                    transform: translateY(-8px); 
                  }
                }

                @keyframes soft-glow-teal {
                  0%, 100% { box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
                }

                @keyframes soft-glow-blue {
                  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                }

                @keyframes soft-glow-cyan {
                  0%, 100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
                }

                @keyframes soft-glow-emerald {
                  0%, 100% { box-shadow: 0 0 15px rgba(16, 185, 129, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
                }

                @keyframes soft-glow-indigo {
                  0%, 100% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
                }

                @keyframes soft-glow-purple {
                  0%, 100% { box-shadow: 0 0 15px rgba(147, 51, 234, 0.2); }
                  50% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
                }
              `
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
