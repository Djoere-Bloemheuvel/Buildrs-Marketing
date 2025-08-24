import { motion } from 'framer-motion';
import { Users, TrendingUp, Award } from 'lucide-react';

const EmailSocialProofSection = () => {
  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Klanten geholpen"
    },
    {
      icon: TrendingUp,
      number: "12%",
      label: "Gemiddelde response rate"
    },
    {
      icon: Award,
      number: "85%",
      label: "Inbox delivery rate"
    }
  ];

  const testimonials = [
    {
      quote: "Binnen 2 weken hadden we meer gekwalificeerde meetings dan in de hele maand ervoor.",
      name: "Mark van der Berg",
      company: "TechFlow B.V.",
      role: "Sales Director"
    },
    {
      quote: "ScailUp transformeerde onze outbound completely. Van 1% naar 12% response rate.",
      name: "Lisa Janssen",
      company: "DataDriven Solutions",
      role: "CMO"
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Stats Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-12"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Bewezen resultaten
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white/90" />
                </div>
                <div className="text-4xl lg:text-5xl font-light text-white mb-2"
                     style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-white/60 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                <div className="text-5xl text-white/20 mb-4 leading-none">"</div>
                <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role} • {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos placeholder */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/40 text-sm font-light mb-8">
            Vertrouwd door 300+ bedrijven
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-30">
            <div className="w-20 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-16 h-8 bg-white/20 rounded"></div>
            <div className="w-22 h-8 bg-white/20 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSocialProofSection;