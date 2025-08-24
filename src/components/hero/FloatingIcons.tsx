
import { Brain, Zap, Target, Shield, Cpu, Network, Sparkles, Bot } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* AI Brain - top center */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 premium-icon-float-1">
        <div className="relative">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center premium-icon-glow-silver premium-icon-breathe">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-premium-silver/80" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent premium-icon-shimmer"></div>
        </div>
      </div>

      {/* Lightning bolt - right side */}
      <div className="absolute top-48 right-24 premium-icon-float-2">
        <div className="relative">
          <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 backdrop-blur-md border border-blue-400/30 flex items-center justify-center premium-icon-glow-blue premium-icon-breathe" style={{ animationDelay: '1s' }}>
            <Zap className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400/90" />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Target - left side */}
      <div className="absolute top-80 left-16 premium-icon-float-3 hidden sm:block">
        <div className="relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/15 to-purple-600/10 backdrop-blur-md border border-purple-400/30 flex items-center justify-center premium-icon-glow-purple premium-icon-breathe" style={{ animationDelay: '2s' }}>
            <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400/90" />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Shield - bottom right */}
      <div className="absolute bottom-64 right-20 premium-icon-float-4">
        <div className="relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-500/15 to-green-600/10 backdrop-blur-md border border-green-400/30 flex items-center justify-center premium-icon-glow-green premium-icon-breathe" style={{ animationDelay: '3s' }}>
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400/90" />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      {/* CPU - middle left */}
      <div className="absolute top-96 left-20 premium-icon-float-5 hidden lg:block">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center premium-icon-glow-cyan premium-icon-breathe" style={{ animationDelay: '4s' }}>
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400/90" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Network - center right */}
      <div className="absolute top-72 right-32 premium-icon-float-6 hidden md:block">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-orange-500/15 to-orange-600/10 backdrop-blur-md border border-orange-400/30 flex items-center justify-center premium-icon-glow-orange premium-icon-breathe" style={{ animationDelay: '5s' }}>
            <Network className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400/90" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '5s' }}></div>
        </div>
      </div>

      {/* Sparkles - bottom left */}
      <div className="absolute bottom-48 left-28 premium-icon-float-7 hidden sm:block">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-pink-500/15 to-pink-600/10 backdrop-blur-md border border-pink-400/30 flex items-center justify-center premium-icon-glow-pink premium-icon-breathe" style={{ animationDelay: '6s' }}>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400/90" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '6s' }}></div>
        </div>
      </div>

      {/* Bot - top right corner */}
      <div className="absolute top-36 right-16 premium-icon-float-8 hidden lg:block">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-indigo-600/10 backdrop-blur-md border border-indigo-400/30 flex items-center justify-center premium-icon-glow-indigo premium-icon-breathe" style={{ animationDelay: '7s' }}>
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400/90" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-400/10 to-transparent premium-icon-shimmer" style={{ animationDelay: '7s' }}></div>
        </div>
      </div>

      {/* Connecting particle trails - very subtle */}
      <div className="absolute inset-0 opacity-30 hidden lg:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-premium-silver/20 rounded-full premium-particle-trail"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingIcons;
