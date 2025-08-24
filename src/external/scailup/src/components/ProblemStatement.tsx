import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Target, TrendingDown, Mail, Users, MessageSquare, Zap, X, ArrowRight, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

const ProblemStatement = () => {
  const brokenPipeline = [
    { 
      icon: Users, 
      label: "Prospects", 
      problem: "Random lijsten",
      result: "2% respons",
      status: "broken"
    },
    { 
      icon: Mail, 
      label: "E-mail", 
      problem: "Template spam",
      result: "95% spam folder",
      status: "broken"
    },
    { 
      icon: MessageSquare, 
      label: "LinkedIn", 
      problem: "Generic berichten",
      result: "1% conversie",
      status: "broken"
    },
    { 
      icon: X, 
      label: "Resultaat", 
      problem: "€10k verlies",
      result: "0 nieuwe klanten",
      status: "failed"
    }
  ];

  const scailupSolution = [
    { 
      icon: Users, 
      label: "AI Prospects", 
      solution: "Smart targeting",
      result: "15% respons",
      status: "success"
    },
    { 
      icon: Mail, 
      label: "Personal E-mails", 
      solution: "AI personalisatie",
      result: "85% inbox rate",
      status: "success"
    },
    { 
      icon: MessageSquare, 
      label: "Strategic Follow-up", 
      solution: "Timing & relevantie",
      result: "12% conversie",
      status: "success"
    },
    { 
      icon: CheckCircle, 
      label: "Resultaat", 
      solution: "€50k revenue",
      result: "25+ nieuwe klanten",
      status: "winning"
    }
  ];

  return (
    <section className="relative pt-16 pb-32 bg-black overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-8">
        
        {/* Apple-style Header */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-2 tracking-tight leading-none" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Waarom jouw outbound niet werkt
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            De realiteit van ineffectieve outbound vs. de ScailUp methode
          </p>
        </motion.div>

        {/* Split-Screen Transformation Comparison */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-gray-800/30 rounded-3xl p-1 relative overflow-hidden">
            
            {/* LEFT SIDE - Current Approach (Muted/Grey) */}
            <motion.div
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-3xl p-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Muted overlay for "old/broken" feeling */}
              <div className="absolute inset-0 bg-gray-900/20 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full mb-4">
                    <X className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-400 font-medium text-sm">INEFFECTIEF</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">Jouw Huidige Aanpak</h3>
                  <p className="text-gray-500 text-sm">Typische outbound resultaten</p>
                </div>

                {/* Current Pipeline Steps */}
                <div className="space-y-4 mb-8">
                  {brokenPipeline.slice(0, 3).map((step, index) => {
                    const IconComponent = step.icon;
                    
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-800/60 border border-gray-700/40 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-700/80 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-300 text-sm">{step.label}</h5>
                            <p className="text-gray-500 text-xs">{step.problem}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-400 font-mono text-sm">{step.result}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Current Result */}
                <motion.div 
                  className="p-4 bg-gray-700/60 border border-gray-600/50 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-lg font-bold text-gray-400 mb-1">€10.000 verlies</div>
                  <p className="text-gray-500 text-xs">per maand verspild budget</p>
                </motion.div>
              </div>
            </motion.div>

            {/* TRANSFORMATION ARROW - Animated */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Animated Arrow with Glow */}
                <motion.div
                  className="relative"
                  animate={{
                    x: [0, 10, 0],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="absolute inset-0 blur-lg bg-blue-500/40 rounded-full scale-150"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                    <ArrowRight className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Transformation Labels */}
                <motion.div
                  className="mt-3 text-center"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="text-xs font-bold text-blue-400 mb-1">TRANSFORMATIE</div>
                  <div className="text-xs text-blue-300">ScailUp Methode</div>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT SIDE - ScailUp Method (Vibrant with Glow) */}
            <motion.div
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 rounded-3xl"></div>
              <div className="absolute inset-0 shadow-2xl shadow-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mb-4 shadow-lg"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 30px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)'
                      ],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-white mr-2" />
                    <span className="text-white font-bold text-sm">GEOPTIMALISEERD</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">ScailUp Methode</h3>
                  <p className="text-blue-300 text-sm">AI-gedreven outbound excellence</p>
                </div>

                {/* ScailUp Pipeline Steps */}
                <div className="space-y-4 mb-8">
                  {scailupSolution.slice(0, 3).map((step, index) => {
                    const IconComponent = step.icon;
                    
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 bg-blue-900/30 border border-blue-600/40 rounded-xl relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 0 25px rgba(59, 130, 246, 0.2)"
                        }}
                        transition={{ 
                          duration: 0.15,
                          ease: "easeOut"
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium text-white text-sm">{step.label}</h5>
                            <p className="text-blue-300 text-xs">{step.solution}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-blue-400 font-mono text-sm font-bold">{step.result}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* ScailUp Result with Enhanced Glow */}
                <motion.div 
                  className="p-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl text-center relative overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(59, 130, 246, 0.4)',
                      '0 0 40px rgba(59, 130, 246, 0.6)',
                      '0 0 30px rgba(59, 130, 246, 0.4)'
                    ],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div
                    className="absolute top-2 right-2 text-yellow-300"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  
                  <div className="text-lg font-bold text-white mb-1">€50.000 winst</div>
                  <p className="text-blue-100 text-xs">per maand nieuwe revenue</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Impact Statement */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/40 rounded-2xl backdrop-blur-sm shadow-xl">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <div className="text-white font-bold text-lg">+€60.000 per maand</div>
                <div className="text-blue-300 text-sm">Dat is de transformatie kracht van ScailUp</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProblemStatement;