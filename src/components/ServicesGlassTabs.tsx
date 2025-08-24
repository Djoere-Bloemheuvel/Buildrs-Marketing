import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Users, Target } from 'lucide-react';

const ServicesGlassTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'email-campaigns',
      title: 'E-mailcampagnes',
      subtitle: 'AI-gedreven e-mailcampagnes die opvallen tussen de ruis',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.6)',
      description: 'AI-gedreven e-mailcampagnes die opvallen tussen de ruis',
      features: [
        'Gepersonaliseerde content generatie',
        'Slimme segmentatie en targeting', 
        'A/B testing en optimalisatie',
        'Real-time performance analytics'
      ],
      stats: { value: '87%', label: 'Open rate' }
    },
    {
      id: 'linkedin-outreach',
      title: 'LinkedIn Outreach',
      subtitle: 'Strategische LinkedIn-campagnes die leiden tot afspraken',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.6)',
      description: 'Strategische LinkedIn-campagnes die leiden tot afspraken',
      features: [
        'Gepersonaliseerde connection requests',
        'Slimme message sequences',
        'Profile viewing en engagement strategieën',
        'Compliance-safe automation'
      ],
      stats: { value: '73%', label: 'Connect rate' }
    },
    {
      id: 'abm-campaigns',
      title: 'Account Based Marketing',
      subtitle: 'ABM-campagnes gericht op jouw ideale klanten',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.6)',
      description: 'ABM-campagnes gericht op jouw ideale klanten',
      features: [
        'Target account identificatie',
        'Multi-channel ABM campaigns',
        'Account intelligence & insights',
        'Pipeline acceleration tactics'
      ],
      stats: { value: '4.2x', label: 'ROI increase' }
    }
  ];

  const currentService = services[activeTab];
  const IconComponent = currentService.icon;

  return (
    <section className="relative py-20 px-4 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Onze <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diensten</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Done-for-you outbound agency. Meer afspraken, minder ruis.
          </p>
        </div>

        {/* Single Glass Container with Gradient Background */}
        <div className="relative bg-gradient-to-r from-blue-500/70 to-blue-600/70 p-[1px] rounded-3xl max-h-[85vh] overflow-hidden">
          {/* Integrated Tab Navigation at top of container */}
          <div className="relative bg-gradient-to-r from-blue-500/70 to-blue-600/70 rounded-t-3xl">
            <div className="flex bg-black/80 backdrop-blur-xl rounded-t-3xl border-b border-white/10">
              {services.map((service, index) => {
                const TabIcon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative flex-1 px-6 py-4 transition-all duration-500 flex items-center gap-3 justify-center font-medium text-sm border-r border-white/5 last:border-r-0 ${
                      activeTab === index 
                        ? `bg-gradient-to-br ${service.color} text-white shadow-2xl` 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                    } ${index === 0 ? 'rounded-tl-3xl' : ''} ${index === services.length - 1 ? 'rounded-tr-3xl' : ''}`}
                    style={activeTab === index ? {
                      boxShadow: `0 0 40px ${service.glowColor}60, 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)`
                    } : {}}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeTab === index 
                        ? `bg-gradient-to-br ${service.color} shadow-2xl` 
                        : 'bg-gray-700/40'
                    }`}
                      style={activeTab === index ? {
                        boxShadow: `0 4px 20px ${service.glowColor}50, 0 0 0 1px rgba(255,255,255,0.1)`
                      } : {}}
                    >
                      <TabIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold whitespace-nowrap">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div 
            className="relative p-6 lg:p-8 rounded-b-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/[0.015] via-black to-blue-600/[0.015] min-h-full"
            style={{
              boxShadow: `0 0 40px ${currentService.glowColor}30, 0 0 80px ${currentService.glowColor}20`
            }}
          >

          {/* Premium Content Layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >

              {/* Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Features Column */}
                <div className="lg:col-span-2">
                  <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-3">
                    <div className={`w-3 h-3 rounded bg-gradient-to-r ${currentService.color}`} />
                    Wat krijg je?
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentService.features.map((feature, idx) => (
                      <div key={idx} className="group">
                        <div className="relative p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300 hover:border-white/20">
                          <div className="flex items-start gap-2">
                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center bg-gradient-to-br ${currentService.color} mt-0.5 flex-shrink-0`}>
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                            <div>
                              <p className="text-gray-200 font-medium text-sm leading-snug">
                                {feature}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Dashboard */}
                <div className="lg:col-span-1">
                  <div 
                    className="relative p-4 rounded-2xl backdrop-blur-xl bg-white/8 border border-white/20"
                    style={{
                      boxShadow: `0 20px 40px ${currentService.glowColor}20, inset 0 1px 0 rgba(255,255,255,0.1)`
                    }}
                  >
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-gradient-to-br ${currentService.color}`}
                        style={{
                          boxShadow: `0 10px 20px ${currentService.glowColor}40`
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-white font-semibold text-xs mb-1">
                        Performance Dashboard
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Live metrics
                      </p>
                    </div>

                    {/* Main Stat */}
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-white mb-1">
                        {currentService.stats.value}
                      </div>
                      <div className="text-gray-300 text-xs font-medium">
                        {currentService.stats.label}
                      </div>
                    </div>

                    {/* Progress Ring */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="2"
                        />
                        <path
                          d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="85, 100"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={currentService.color.includes('blue') ? '#3b82f6' : currentService.color.includes('purple') ? '#a855f7' : '#10b981'} />
                            <stop offset="100%" stopColor={currentService.color.includes('blue') ? '#06b6d4' : currentService.color.includes('purple') ? '#ec4899' : '#059669'} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">85%</span>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Actieve campagnes</span>
                        <span className="text-white font-medium">247</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Deze maand</span>
                        <span className="text-green-400 font-medium">+23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGlassTabs;