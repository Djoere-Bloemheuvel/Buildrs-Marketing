
import { Quote } from 'lucide-react';

const AutomationProof = () => {
  const testimonials = [
    {
      quote: "Onze lead-to-close tijd is met 70% verkort. Wat eerst weken duurde, gebeurt nu in dagen.",
      author: "Sarah van Der Berg",
      role: "COO",
      company: "TechStart B.V.",
      logo: "TS" // Placeholder
    },
    {
      quote: "Buildrs.AI heeft onze facturatieproces volledig geautomatiseerd. Geen handmatig werk meer.",
      author: "Michael Jansen",
      role: "CFO", 
      company: "InnovateCorp",
      logo: "IC" // Placeholder
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/5 to-premium-black" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Betrouwbaar. Meetbaar. <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Onzichtbaar</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-premium-gray/10 to-premium-black/30 border border-premium-silver/15 backdrop-blur-md rounded-2xl p-8 hover:border-premium-silver/25 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute -top-3 left-8">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Quote text */}
                <blockquote className="text-white text-lg font-light leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center space-x-4">
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/30 flex items-center justify-center">
                    <span className="text-premium-silver font-semibold text-sm">{testimonial.logo}</span>
                  </div>
                  
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-premium-silver/70 text-sm">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationProof;
