import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const EmailPricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "€2.490",
      period: "per maand",
      description: "Perfect voor groeiende bedrijven",
      features: [
        "500 prospects per maand",
        "AI personalisatie",
        "Basic analytics",
        "Email support",
        "Inbox delivery monitoring"
      ],
      cta: "Start vandaag",
      popular: false
    },
    {
      name: "Professional",
      price: "€4.990",
      period: "per maand",
      description: "Meest gekozen door scale-ups",
      features: [
        "2.000 prospects per maand",
        "Advanced AI personalisatie",
        "Real-time analytics dashboard",
        "Dedicated account manager",
        "A/B testing",
        "LinkedIn integratie",
        "Priority support"
      ],
      cta: "Plan gesprek",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Op maat",
      period: "custom volume",
      description: "Voor grote organisaties",
      features: [
        "Unlimited prospects",
        "Custom AI training",
        "White-label oplossing",
        "Dedicated team",
        "Custom integraties",
        "SLA garantie",
        "Onboarding training"
      ],
      cta: "Contact opnemen",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-black" id="pricing">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-500/10 via-blue-400/15 to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Transparante Pricing
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Kies het pakket dat perfect past bij jouw groeiambities
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Populair
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border rounded-3xl p-8 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 h-full ${plan.popular ? 'border-white/30 hover:border-white/40' : 'border-white/10 hover:border-white/20'}`}>
                
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-white mb-2"
                      style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm font-light mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl lg:text-5xl font-light text-white"
                          style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {plan.price}
                    </span>
                    <span className="text-white/60 text-lg font-light ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-full font-medium text-lg transition-all duration-300 ${plan.popular 
                  ? 'bg-white hover:bg-white/90 text-black shadow-xl hover:shadow-2xl' 
                  : 'bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30'
                }`}
                        style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/60 text-lg font-light mb-4">
            Alle pakketten inclusief setup, training en 24/7 monitoring
          </p>
          <p className="text-white/40 text-sm font-light">
            Geen setup kosten • Maandelijks opzegbaar • 30 dagen geld-terug-garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailPricingSection;