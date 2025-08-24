import React, { useState, useEffect, useRef } from 'react';
import { Brain, CheckCircle, TrendingUp, Sparkles, Star, Zap, Crown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const WhyScailUp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: Brain,
      title: 'AI-personalisatie op schaal',
      description: 'Elke boodschap uniek afgestemd op de ontvanger. Menselijk gevoel, AI-efficiency.',
      color: 'from-blue-500 to-blue-400',
      gradient: 'from-blue-500/20 via-blue-400/10 to-blue-500/20',
      accent: 'blue'
    },
    {
      icon: Crown,
      title: 'Premium done-for-you service',
      description: 'Van strategie tot uitvoering. Wij regelen alles, jij focust op deals sluiten.',
      color: 'from-blue-600 to-cyan-400',
      gradient: 'from-blue-600/20 via-cyan-400/10 to-blue-600/20',
      accent: 'cyan'
    },
    {
      icon: TrendingUp,
      title: 'Transparante ROI tracking',
      description: 'Realtime dashboards met harde cijfers. Geen verrassingen, wel meetbare groei.',
      color: 'from-blue-400 to-cyan-500',
      gradient: 'from-blue-400/20 via-cyan-500/10 to-blue-400/20',
      accent: 'blue'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Premium geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rotate-45 rounded-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-400/20 rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-400/20 rotate-[30deg] rounded-xl"></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-8 z-10">
        
        {/* Luxurious Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/30 rounded-full mb-6 backdrop-blur-sm"
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(34, 211, 238, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white font-semibold text-sm tracking-wide">PREMIUM OUTBOUND EXCELLENCE</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Waarom{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent relative">
              ScailUp
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </span>
            ?
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            De premium keuze voor ambitieuze bedrijven die échte groei willen
          </p>
        </motion.div>
        
        {/* Premium Reasons Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Luxury card with multiple layers */}
                <div className={`
                  relative p-8 rounded-2xl backdrop-blur-xl border-2 
                  bg-gradient-to-br ${reason.gradient} border-gray-700/50
                  shadow-2xl group-hover:border-gray-600/70 transition-all duration-500
                  overflow-hidden
                `}>
                  
                  {/* Premium glow effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${reason.color} blur-xl scale-105 -z-10
                  `}></div>
                  
                  {/* Luxury glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-gray-900/20 rounded-2xl"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20"></div>
                  
                  {/* Premium floating icon */}
                  <motion.div 
                    className="relative z-10 mb-8"
                    whileHover={{ y: -5, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center mx-auto
                      bg-gradient-to-br ${reason.color} shadow-2xl relative overflow-hidden
                      group-hover:shadow-3xl transition-all duration-500
                    `}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-2xl"></div>
                      <IconComponent className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Premium shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                  </motion.div>
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {reason.description}
                    </p>
                  </div>

                  {/* Premium bottom accent */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500
                  `}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Call-to-Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center space-x-4 px-10 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-2xl backdrop-blur-sm border border-blue-400/30 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Zap className="w-8 h-8 text-cyan-400 relative z-10" />
            <div className="text-left relative z-10">
              <div className="text-white font-bold text-xl">Klaar voor premium resultaten?</div>
              <div className="text-blue-100 text-sm">Ontdek wat ScailUp voor jou kan betekenen</div>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyScailUp;