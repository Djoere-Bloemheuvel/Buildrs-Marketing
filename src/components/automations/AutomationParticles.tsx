
const AutomationParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div 
        className="absolute top-20 left-10 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" 
        style={{ animationDelay: '0s', animationDuration: '4s' }} 
      />
      <div 
        className="absolute top-40 right-20 w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-pulse" 
        style={{ animationDelay: '1s', animationDuration: '3s' }} 
      />
      <div 
        className="absolute bottom-32 left-1/3 w-1 h-1 bg-emerald-400/50 rounded-full animate-pulse" 
        style={{ animationDelay: '2s', animationDuration: '5s' }} 
      />
      <div 
        className="absolute bottom-20 right-1/4 w-0.5 h-0.5 bg-cyan-400/70 rounded-full animate-pulse" 
        style={{ animationDelay: '0.5s', animationDuration: '6s' }} 
      />
    </div>
  );
};

export default AutomationParticles;
