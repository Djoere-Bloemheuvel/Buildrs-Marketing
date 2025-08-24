
import { Brain, Cpu, Eye } from 'lucide-react';

const AIRobotDevice = () => {
  return (
    <div className="absolute top-8 left-4 sm:top-16 sm:left-16 ai-robot-float">
      <div className="relative w-32 h-40 sm:w-48 md:w-64 sm:h-60 md:h-80">
        {/* Main robot body with glassmorphic effect */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-400/20 backdrop-blur-md ai-robot-glow">
          
          {/* Top section with connection dots */}
          <div className="absolute top-3 left-3 right-3 h-10 sm:top-6 sm:left-6 sm:right-6 sm:h-20 bg-black/40 rounded-lg sm:rounded-xl border border-gray-400/20 overflow-hidden">
            {/* Connection grid */}
            <div className="absolute inset-2 sm:inset-4 grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-3 gap-1 sm:gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`connection-dot-${i}`}
                  className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-400/80' : i % 3 === 1 ? 'bg-gray-400/60' : 'bg-gray-400/40'} ai-robot-connection-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" className="ai-robot-line-pulse" />
              <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" className="ai-robot-line-pulse" style={{ animationDelay: '1s' }} />
            </svg>
          </div>

          {/* Middle section with brain and chip icons */}
          <div className="absolute top-16 left-3 right-3 sm:top-32 sm:left-6 sm:right-6 flex justify-between">
            {/* Brain module */}
            <div className="w-8 h-8 sm:w-12 md:w-20 sm:h-12 md:h-20 bg-black/50 rounded-lg sm:rounded-2xl border border-gray-400/20 flex items-center justify-center ai-robot-brain-glow">
              <Brain className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8 text-gray-300 ai-robot-brain-pulse" />
            </div>
            
            {/* Chip module */}
            <div className="w-8 h-8 sm:w-12 md:w-20 sm:h-12 md:h-20 bg-black/50 rounded-lg sm:rounded-2xl border border-gray-400/20 flex items-center justify-center ai-robot-chip-glow">
              <Cpu className="w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8 text-gray-300 ai-robot-chip-pulse" />
            </div>
          </div>

          {/* Central eye module */}
          <div className="absolute top-28 sm:top-56 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 md:w-24 sm:h-16 md:h-24">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-gray-400/30 sm:border-2 ai-robot-eye-ring-pulse">
              {/* Inner circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 md:w-16 sm:h-12 md:h-16 bg-black/60 rounded-full border border-gray-400/40 flex items-center justify-center ai-robot-eye-glow">
                <Eye className="w-3 h-3 sm:w-4 md:w-6 sm:h-4 md:h-6 text-gray-300 ai-robot-eye-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-3 left-3 right-3 h-4 sm:bottom-6 sm:left-6 sm:right-6 sm:h-8 bg-black/50 rounded-lg sm:rounded-xl border border-gray-400/20 overflow-hidden">
            {/* Progress indicator */}
            <div className="absolute inset-1 sm:inset-2 bg-gray-800/50 rounded-md sm:rounded-lg overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gray-400/60 to-blue-400/40 ai-robot-progress-fill" />
            </div>
          </div>

          {/* Ambient glow particles - Hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute top-10 right-10 w-1 h-1 bg-blue-400/60 rounded-full ai-robot-particle-float" />
            <div className="absolute bottom-20 left-8 w-1 h-1 bg-gray-400/50 rounded-full ai-robot-particle-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-40 right-16 w-1 h-1 bg-blue-400/40 rounded-full ai-robot-particle-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        {/* External connections - Hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
          <line x1="100%" y1="30%" x2="130%" y2="25%" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" className="ai-robot-external-connection" />
          <line x1="50%" y1="100%" x2="60%" y2="130%" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" className="ai-robot-external-connection" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>
    </div>
  );
};

export default AIRobotDevice;
