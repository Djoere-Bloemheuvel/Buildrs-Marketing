import { motion } from 'framer-motion';
import { X, TrendingDown, Clock } from 'lucide-react';

const EmailProblemSection = () => {
  const problems = [
    {
      icon: X,
      title: "53% verdwijnt in spam",
      description: "Spam filters worden strenger. Één fout en al je moeite was voor niets."
    },
    {
      icon: TrendingDown,
      title: "Response rate < 1%",
      description: "Generieke templates worden direct herkend en genegeerd."
    },
    {
      icon: Clock,
      title: "Personalisatie schaalt niet",
      description: "Echt persoonlijke mails schrijven kost uren per prospect."
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-black">
      {/* Subtle gradient that connects with hero */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Opening statement */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Traditionele cold email werkt niet meer
          </h2>
        </motion.div>

        {/* Problems in horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{problem.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl lg:text-3xl text-white font-light italic">
            Er moet een betere manier zijn.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailProblemSection;