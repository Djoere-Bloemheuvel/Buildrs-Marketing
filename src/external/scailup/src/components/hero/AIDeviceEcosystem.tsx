
import { Brain, MessageSquare, Server, Users } from 'lucide-react';

const AIDeviceEcosystem = () => {
  return (
    <>
      {/* Custom AI SaaS Device - Top Right */}
      <div className="absolute top-12 right-4 sm:top-20 sm:right-20 ai-device-ecosystem-float-delayed">
        <div className="relative w-20 h-20 sm:w-28 md:w-40 sm:h-28 md:h-40">
          {/* Hexagonal device */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-400/30 backdrop-blur-md ai-ecosystem-glow-purple"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
            }}
          >
            {/* Central brain */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 md:w-12 sm:h-8 md:h-12 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center border border-purple-400/40">
              <Brain className="w-3 h-3 sm:w-4 md:w-6 sm:h-4 md:h-6 text-purple-400 ai-ecosystem-brain-pulse" />
            </div>

            {/* Orbiting data points */}
            <div className="absolute inset-0 ai-ecosystem-orbit">
              <div className="absolute top-1 left-1/2 w-1 h-1 sm:top-2 sm:w-1.5 sm:h-1.5 md:top-4 md:w-2 md:h-2 bg-purple-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute bottom-1 left-1/2 w-1 h-1 sm:bottom-2 sm:w-1.5 sm:h-1.5 md:bottom-4 md:w-2 md:h-2 bg-pink-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute left-1 top-1/2 w-1 h-1 sm:left-2 sm:w-1.5 sm:h-1.5 md:left-4 md:w-2 md:h-2 bg-violet-400 rounded-full transform -translate-y-1/2" />
              <div className="absolute right-1 top-1/2 w-1 h-1 sm:right-2 sm:w-1.5 sm:h-1.5 md:right-4 md:w-2 md:h-2 bg-fuchsia-400 rounded-full transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Consultancy Device - Middle Left */}
      <div className="absolute top-1/2 left-2 sm:left-8 transform -translate-y-1/2 ai-device-ecosystem-float-slow">
        <div className="relative w-24 h-16 sm:w-28 md:w-36 sm:h-20 md:h-24">
          <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-900/60 to-blue-950/30 border border-gray-400/20 backdrop-blur-md ai-ecosystem-glow-gray">
            {/* Message interface */}
            <div className="absolute inset-2 sm:inset-3 space-y-1 sm:space-y-2">
              <div className="h-1 sm:h-2 bg-gray-400/30 rounded-full ai-ecosystem-message-type" />
              <div className="h-1 sm:h-1.5 bg-gray-400/20 rounded-full w-3/4 ai-ecosystem-message-type" style={{ animationDelay: '0.5s' }} />
              <div className="h-1 sm:h-1.5 bg-blue-400/30 rounded-full w-1/2 ai-ecosystem-message-type" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Communication indicator */}
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 ai-ecosystem-message-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Studio Service Device - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:bottom-20 ai-device-ecosystem-float-center">
        <div className="relative w-36 h-24 sm:w-44 md:w-56 sm:h-28 md:h-36">
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-950/50 to-blue-950/50 border border-cyan-400/30 backdrop-blur-md ai-ecosystem-glow-cyan">
            {/* Multi-layered interface */}
            <div className="absolute inset-3 sm:inset-6">
              {/* Top layer - Analytics */}
              <div className="absolute top-0 left-0 right-0 h-2 sm:h-4 bg-black/40 rounded-md sm:rounded-lg border border-cyan-400/20">
                <div className="flex items-center justify-between h-full px-1 sm:px-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={`analytics-bar-${i}`}
                      className="w-0.5 sm:w-1 bg-cyan-400/60 rounded-full ai-ecosystem-analytics-pulse"
                      style={{
                        height: `${60 + (i % 3) * 20}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Middle layer - Processing */}
              <div className="absolute top-3 left-0 right-0 h-4 sm:top-6 sm:h-8 bg-black/30 rounded-md sm:rounded-lg flex items-center justify-center border border-cyan-400/15">
                <Server className="w-2 h-2 sm:w-4 sm:h-4 text-cyan-400 ai-ecosystem-server-pulse" />
                <div className="ml-1 sm:ml-2 flex space-x-0.5 sm:space-x-1">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" />
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" style={{ animationDelay: '0.5s' }} />
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full ai-ecosystem-status-blink" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autonomous Agents Device - Bottom Right */}
      <div className="absolute bottom-12 right-4 sm:bottom-16 sm:right-16 ai-device-ecosystem-float-autonomous">
        <div className="relative w-28 h-28 sm:w-36 md:w-44 sm:h-36 md:h-44">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-950/40 to-green-950/40 border border-green-400/20 backdrop-blur-md ai-ecosystem-glow-green rotate-45">
            {/* Agent network */}
            <div className="absolute inset-2 sm:inset-4 -rotate-45">
              {/* Central coordinator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8 rounded-full bg-gradient-to-br from-green-600/40 to-blue-600/40 border border-green-400/50 flex items-center justify-center">
                <Users className="w-2 h-2 sm:w-3 md:w-4 sm:h-3 md:h-4 text-green-400" />
              </div>
              
              {/* Agent nodes */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const radius = 30;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={`agent-node-${i}`}
                    className="absolute w-1.5 h-1.5 sm:w-2 md:w-3 sm:h-2 md:h-3 rounded-full bg-green-400/60 ai-ecosystem-agent-pulse"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDeviceEcosystem;
