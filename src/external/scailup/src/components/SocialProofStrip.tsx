import { motion } from 'framer-motion';
import { Star, Users, TrendingUp, Award } from 'lucide-react';

const SocialProofStrip = () => {
  const proofPoints = [
    {
      id: 1,
      icon: Users,
      number: '50+',
      label: 'Tevreden klanten',
      color: 'from-blue-400 to-blue-300'
    },
    {
      id: 2,
      icon: TrendingUp,
      number: '200%',
      label: 'Gemiddelde groei',
      color: 'from-blue-500 to-blue-400'
    },
    {
      id: 3,
      icon: Star,
      number: '4.9/5',
      label: 'Klantenbeoordeling',
      color: 'from-blue-400 to-blue-300'
    },
    {
      id: 4,
      icon: Award,
      number: '95%',
      label: 'Behoudpercentage',
      color: 'from-blue-500 to-blue-400'
    }
  ];

  return (
    <section className="relative py-20 bg-black border-t border-gray-800/30">
      <div className="relative max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl text-gray-400 mb-2 tracking-wide">
            Vertrouwd door ondernemers
          </h3>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {proofPoints.map((point, index) => {
            const IconComponent = point.icon;
            
            return (
              <motion.div
                key={point.id}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-br ${point.color} bg-clip-text text-transparent mb-2`}>
                  {point.number}
                </div>

                {/* Label */}
                <div className="text-gray-300 text-sm lg:text-base">
                  {point.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Resultaten gebaseerd op klantdata van de afgelopen 12 maanden
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProofStrip;