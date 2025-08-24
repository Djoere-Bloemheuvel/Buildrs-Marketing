
const SimpleGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black/50"></div>
      
      {/* Simple ambient glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default SimpleGradientBackground;
