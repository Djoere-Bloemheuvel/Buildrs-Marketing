
const AutomationIntro = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/95 to-premium-black" />
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Wat kunnen we <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">automatiseren</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed max-w-3xl mx-auto font-light">
            Van onboarding tot opvolging. Van offertes tot rapportages. Buildrs.AI bouwt onzichtbare automatiseringen die uw bedrijf exponentieel versnellen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomationIntro;
