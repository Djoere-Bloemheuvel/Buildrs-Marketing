
const AppleStyleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
      
      {/* Central AI Core Visual */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 apple-ai-core">
        {/* Main core structure */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
          {/* Central processor unit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 md:w-60 md:h-40 bg-gradient-to-r from-gray-800/40 via-gray-700/30 to-gray-800/40 rounded-lg backdrop-blur-sm border border-gray-600/20 apple-core-pulse">
            {/* Circuit lines */}
            <div className="absolute inset-2 opacity-60">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent top-4 absolute"></div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent top-8 absolute"></div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent bottom-8 absolute"></div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent bottom-4 absolute"></div>
            </div>
            
            {/* Core glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/5 to-emerald-500/10 rounded-lg blur-sm"></div>
          </div>
          
          {/* Rotating ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 apple-ring-rotate">
            <div className="w-full h-full rounded-full border border-gray-600/20 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 w-2 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2 blur-sm"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-6 bg-gradient-to-t from-violet-400/40 to-transparent transform -translate-x-1/2 blur-sm"></div>
            </div>
          </div>
          
          {/* Pulsing signals */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 apple-signal-pulse">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400/80 rounded-full transform -translate-x-1/2 blur-sm"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-violet-400/80 rounded-full transform -translate-x-1/2 blur-sm"></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-emerald-400/80 rounded-full transform -translate-y-1/2 blur-sm"></div>
            <div className="absolute right-0 top-1/2 w-1 h-1 bg-pink-400/80 rounded-full transform -translate-y-1/2 blur-sm"></div>
          </div>
        </div>
        
        {/* Reflection underneath */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 h-40 md:w-96 md:h-48 lg:w-[32rem] lg:h-60 opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-gray-800/20 via-gray-900/10 to-transparent rounded-t-lg blur-lg scale-y-[-1] scale-95"></div>
        </div>
      </div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-cyan-500/5 via-violet-500/3 to-transparent opacity-60 apple-ambient-pulse"></div>
      
      {/* Bottom reflection glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-800/10 via-gray-900/5 to-transparent"></div>
      
      {/* Subtle scan lines for tech feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/3 apple-scan-line"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent bottom-1/3 apple-scan-line-delayed"></div>
      </div>
    </div>
  );
};

export default AppleStyleBackground;
