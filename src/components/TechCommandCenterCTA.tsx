import { ArrowRight, Brain, Zap, Shield, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

const TechCommandCenterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          console.log('🔥 TechCommandCenterCTA entrance animation triggered');
        }
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-black py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      {/* Holographic Scan Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent tech-scan-line-1" />
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent tech-scan-line-2" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent tech-scan-line-3" />
      </div>

      {/* Ambient Lighting System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Command Glow */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.08) 40%, rgba(16, 185, 129, 0.04) 70%, transparent 90%)',
            filter: 'blur(150px)',
            animation: 'tech-command-pulse 20s ease-in-out infinite'
          }}
        />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl tech-corner-glow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl tech-corner-glow" 
             style={{ animationDelay: '10s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Command Center Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-6 py-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-blue-950/50 to-cyan-950/30 backdrop-blur-xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 tech-status-pulse" />
                <span className="text-sm font-mono text-cyan-400 tracking-wider">SYSTEM STATUS: OPERATIONAL</span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 tech-status-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            <span className="text-white block mb-2">AI Command</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Center
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300/90 font-light max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade AI solutions. Deployed at scale. Ready for mission-critical operations.
          </p>
        </div>

        {/* Interactive Tech Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Panel 1: AI Processing */}
          <div className="tech-holographic-panel group">
            <div className="relative p-8 h-full">
              {/* Panel Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 tech-indicator-pulse" />
                  <span className="text-xs font-mono text-blue-400 tracking-wider">NEURAL_CORE</span>
                </div>
                <Brain className="w-6 h-6 text-blue-400/80 tech-icon-float" />
              </div>

              {/* Processing Visualization */}
              <div className="space-y-4 mb-6">
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 tech-progress-bar" style={{ width: '87%' }} />
                </div>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 tech-progress-bar" style={{ width: '94%', animationDelay: '0.5s' }} />
                </div>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 tech-progress-bar" style={{ width: '76%', animationDelay: '1s' }} />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">AI Processing Core</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced neural networks processing millions of data points with 99.7% accuracy.
              </p>

              {/* Status Grid */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 rounded bg-gradient-to-r from-blue-500/20 to-cyan-500/20 tech-grid-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Panel 2: Security Shield */}
          <div className="tech-holographic-panel tech-holographic-panel-emerald group">
            <div className="relative p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 tech-indicator-pulse" />
                  <span className="text-xs font-mono text-emerald-400 tracking-wider">SECURITY_SHIELD</span>
                </div>
                <Shield className="w-6 h-6 text-emerald-400/80 tech-icon-float" />
              </div>

              {/* Security Rings */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 tech-security-ring" />
                <div className="absolute inset-4 rounded-full border border-emerald-400/20 tech-security-ring" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-8 rounded-full border border-emerald-400/40 tech-security-ring" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Shield className="w-8 h-8 text-emerald-400 tech-shield-glow" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Military-grade encryption with zero-trust architecture and continuous threat monitoring.
              </p>
            </div>
          </div>

          {/* Panel 3: Network Operations */}
          <div className="tech-holographic-panel tech-holographic-panel-purple group">
            <div className="relative p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400 tech-indicator-pulse" />
                  <span className="text-xs font-mono text-purple-400 tracking-wider">NET_OPS</span>
                </div>
                <Network className="w-6 h-6 text-purple-400/80 tech-icon-float" />
              </div>

              {/* Network Visualization */}
              <div className="relative w-full h-24 mb-6 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full">
                  {/* Network Nodes */}
                  <circle cx="20%" cy="30%" r="3" fill="rgba(168, 85, 247, 0.8)" className="tech-node-pulse" />
                  <circle cx="50%" cy="50%" r="4" fill="rgba(168, 85, 247, 1)" className="tech-node-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="80%" cy="70%" r="3" fill="rgba(168, 85, 247, 0.8)" className="tech-node-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Connections */}
                  <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" className="tech-connection-pulse" />
                  <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" className="tech-connection-pulse" style={{ animationDelay: '0.5s' }} />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Distributed architecture across 12 data centers with sub-10ms latency worldwide.
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">&lt;10ms</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Command Center CTA */}
        <div className="text-center">
          <div className="tech-command-cta-container">
            <div className="relative p-12 md:p-16">
              {/* CTA Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Deploy?
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join the enterprises already running mission-critical AI at scale. 
                  <span className="text-cyan-400 font-medium"> Implementation starts in 48 hours.</span>
                </p>

                {/* Command Center Button */}
                <Button 
                  onClick={handleContactClick}
                  className="tech-command-button group relative overflow-hidden px-12 py-6 text-lg font-bold"
                >
                  <div className="tech-button-scanner" />
                  <div className="relative z-10 flex items-center">
                    <Zap className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                    <span className="text-black">Initialize Contact</span>
                    <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </Button>

                {/* System Status */}
                <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 tech-status-blink" />
                    <span>Systems Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 tech-status-blink" style={{ animationDelay: '0.5s' }} />
                    <span>Ready for Deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 tech-status-blink" style={{ animationDelay: '1s' }} />
                    <span>24/7 Support Active</span>
                  </div>
                </div>
              </div>

              {/* Holographic Frame Effect */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 tech-holographic-frame" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/40 tech-corner-scanner" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/40 tech-corner-scanner" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/40 tech-corner-scanner" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/40 tech-corner-scanner" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes tech-command-pulse {
            0%, 100% { 
              opacity: 0.3;
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
            50% { 
              opacity: 0.5;
              transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
            }
          }

          @keyframes tech-scan-line {
            0% { transform: translateY(-100vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }

          @keyframes tech-corner-glow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
          }

          @keyframes tech-status-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          @keyframes tech-status-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }

          @keyframes tech-indicator-pulse {
            0%, 100% { opacity: 0.8; box-shadow: 0 0 5px currentColor; }
            50% { opacity: 1; box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
          }

          @keyframes tech-progress-bar {
            0% { width: 0%; opacity: 0.6; }
            100% { opacity: 1; }
          }

          @keyframes tech-grid-pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }

          @keyframes tech-security-ring {
            0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { transform: rotate(360deg) scale(1.05); opacity: 0.3; }
          }

          @keyframes tech-shield-glow {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.5)); }
            50% { filter: drop-shadow(0 0 25px rgba(52, 211, 153, 0.8)); }
          }

          @keyframes tech-node-pulse {
            0%, 100% { opacity: 0.6; r: 3; }
            50% { opacity: 1; r: 5; }
          }

          @keyframes tech-connection-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }

          @keyframes tech-icon-float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(180deg); }
          }

          @keyframes tech-holographic-frame {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.6; }
          }

          @keyframes tech-corner-scanner {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }

          @keyframes tech-button-scan {
            0% { transform: translateX(-100%) skew(-15deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(300%) skew(-15deg); opacity: 0; }
          }

          /* Holographic Panel Base */
          .tech-holographic-panel {
            background: linear-gradient(135deg, 
              rgba(59, 130, 246, 0.08) 0%, 
              rgba(34, 211, 238, 0.04) 50%, 
              rgba(59, 130, 246, 0.02) 100%);
            backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .tech-holographic-panel::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .tech-holographic-panel:hover::before {
            opacity: 1;
          }

          .tech-holographic-panel:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 
              0 25px 50px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          /* Panel Variants */
          .tech-holographic-panel-emerald {
            background: linear-gradient(135deg, 
              rgba(52, 211, 153, 0.08) 0%, 
              rgba(16, 185, 129, 0.04) 50%, 
              rgba(52, 211, 153, 0.02) 100%);
            border-color: rgba(52, 211, 153, 0.2);
          }

          .tech-holographic-panel-emerald::before {
            background: linear-gradient(135deg, rgba(52, 211, 153, 0.05) 0%, transparent 70%);
          }

          .tech-holographic-panel-emerald:hover {
            border-color: rgba(52, 211, 153, 0.4);
            box-shadow: 
              0 25px 50px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(52, 211, 153, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          .tech-holographic-panel-purple {
            background: linear-gradient(135deg, 
              rgba(168, 85, 247, 0.08) 0%, 
              rgba(147, 51, 234, 0.04) 50%, 
              rgba(168, 85, 247, 0.02) 100%);
            border-color: rgba(168, 85, 247, 0.2);
          }

          .tech-holographic-panel-purple::before {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
          }

          .tech-holographic-panel-purple:hover {
            border-color: rgba(168, 85, 247, 0.4);
            box-shadow: 
              0 25px 50px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(168, 85, 247, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          /* Command CTA Container */
          .tech-command-cta-container {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.05) 0%, 
              rgba(59, 130, 246, 0.03) 50%, 
              rgba(34, 211, 238, 0.02) 100%);
            backdrop-filter: blur(30px) saturate(200%);
            border: 2px solid;
            border-image: linear-gradient(135deg, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(34, 211, 238, 0.2) 50%, 
              rgba(16, 185, 129, 0.1) 100%) 1;
            border-radius: 24px;
            position: relative;
            overflow: hidden;
          }

          /* Command Button */
          .tech-command-button {
            background: linear-gradient(135deg, 
              #fbbf24 0%, 
              #f59e0b 30%, 
              #d97706 70%, 
              #92400e 100%);
            border: 2px solid rgba(251, 191, 36, 0.3);
            border-radius: 12px;
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 20px rgba(251, 191, 36, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .tech-command-button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 
              0 16px 48px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(251, 191, 36, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }

          .tech-button-scanner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0.4) 50%, 
              transparent 100%);
            animation: tech-button-scan 3s ease-in-out infinite;
          }

          /* Scan Lines */
          .tech-scan-line-1 {
            top: 20%;
            animation: tech-scan-line 25s linear infinite;
          }

          .tech-scan-line-2 {
            top: 60%;
            animation: tech-scan-line 30s linear infinite;
            animation-delay: -10s;
          }

          .tech-scan-line-3 {
            top: 85%;
            animation: tech-scan-line 35s linear infinite;
            animation-delay: -20s;
          }

          /* Animation Classes */
          .tech-corner-glow {
            animation: tech-corner-glow 15s ease-in-out infinite;
          }

          .tech-status-pulse {
            animation: tech-status-pulse 3s ease-in-out infinite;
          }

          .tech-status-blink {
            animation: tech-status-blink 2s ease-in-out infinite;
          }

          .tech-indicator-pulse {
            animation: tech-indicator-pulse 2.5s ease-in-out infinite;
          }

          .tech-progress-bar {
            animation: tech-progress-bar 2s ease-out infinite;
          }

          .tech-grid-pulse {
            animation: tech-grid-pulse 3s ease-in-out infinite;
          }

          .tech-security-ring {
            animation: tech-security-ring 20s linear infinite;
          }

          .tech-shield-glow {
            animation: tech-shield-glow 4s ease-in-out infinite;
          }

          .tech-node-pulse {
            animation: tech-node-pulse 3s ease-in-out infinite;
          }

          .tech-connection-pulse {
            animation: tech-connection-pulse 4s ease-in-out infinite;
          }

          .tech-icon-float {
            animation: tech-icon-float 6s ease-in-out infinite;
          }

          .tech-holographic-frame {
            animation: tech-holographic-frame 5s ease-in-out infinite;
          }

          .tech-corner-scanner {
            animation: tech-corner-scanner 3s ease-in-out infinite;
          }

          /* Gradient Animation */
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .tech-holographic-panel {
              margin-bottom: 1rem;
            }
            
            .tech-command-button {
              px: 8;
              py: 4;
              font-size: 1rem;
            }
            
            .tech-scan-line-1,
            .tech-scan-line-2,
            .tech-scan-line-3 {
              display: none;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .tech-holographic-panel,
            .tech-command-button,
            .tech-status-pulse,
            .tech-indicator-pulse,
            .tech-progress-bar,
            .tech-security-ring,
            .tech-node-pulse,
            .tech-connection-pulse,
            .tech-icon-float {
              animation: none;
            }
            
            .tech-holographic-panel:hover {
              transform: none;
            }
            
            .tech-command-button:hover {
              transform: none;
            }
          }
        `
      }} />
    </section>
  );
};

export default TechCommandCenterCTA;
