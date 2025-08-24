
const PremiumOrbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Large premium orb - top left - No entrance animation, no color changes */}
      <div className="absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-premium-silver/20 to-transparent premium-orb-float-slow blur-sm"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent premium-orb-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-premium-silver/40 premium-core-pulse"></div>
        </div>
      </div>

      {/* Medium orb - top right - No entrance animation, no color changes */}
      <div className="absolute top-32 right-16 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-25">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/15 to-transparent premium-orb-float-medium blur-sm"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/8 to-transparent premium-orb-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-blue-400/30 premium-core-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Small orb - bottom left - No entrance animation, no color changes */}
      <div className="absolute bottom-40 left-32 w-16 h-16 sm:w-24 sm:h-24 opacity-20 hidden sm:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/12 to-transparent premium-orb-float-fast blur-sm"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/6 to-transparent premium-orb-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400/25 premium-core-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Tiny accent orbs - Hidden on mobile - No entrance animation, no color changes */}
      <div className="hidden lg:block absolute top-64 right-1/3 w-12 h-12 opacity-15">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-transparent premium-orb-float-slow blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="hidden lg:block absolute bottom-32 right-40 w-8 h-8 opacity-15">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/8 to-transparent premium-orb-float-medium blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Connecting light rays - very subtle - No entrance animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 hidden md:block">
        <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="url(#silverGradient)" strokeWidth="1" className="premium-connection-pulse" />
        <line x1="60%" y1="20%" x2="30%" y2="80%" stroke="url(#blueGradient)" strokeWidth="1" className="premium-connection-pulse" style={{ animationDelay: '2s' }} />
        
        <defs>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(192, 192, 192, 0)" />
            <stop offset="50%" stopColor="rgba(192, 192, 192, 0.3)" />
            <stop offset="100%" stopColor="rgba(192, 192, 192, 0)" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PremiumOrbs;
