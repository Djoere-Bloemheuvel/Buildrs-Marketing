
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const ClientExamples = () => {
  const examples = [
    {
      company: 'Marketing Agency X',
      industry: 'Marketing',
      result: '80% minder handwerk',
      description: 'Automatische campagne-optimalisatie en rapportage',
      metric: '12 uur → 2.5 uur per week'
    },
    {
      company: 'FinTech Startup Y',
      industry: 'Finance',
      result: '95% sneller compliance',
      description: 'Geautomatiseerde risk assessment en monitoring',
      metric: '3 dagen → 2 uur processing'
    },
    {
      company: 'E-commerce Platform Z',
      industry: 'Retail',
      result: '60% hogere conversie',
      description: 'AI-gestuurde personalisatie en inventory management',
      metric: '€2M extra revenue/jaar'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-premium-black via-blue-950/5 to-premium-black" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bewezen Resultaten
          </h2>
          <p className="text-lg text-premium-silver/70 max-w-2xl mx-auto">
            Concrete impact bij onze klanten
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {examples.map((example, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border-premium-silver/20 backdrop-blur-md hover:border-blue-400/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium">
                        {example.industry}
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {example.company}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {example.result}
                      </div>
                      <p className="text-premium-silver/60 text-sm">
                        {example.metric}
                      </p>
                    </div>
                    
                    <p className="text-premium-silver/80 text-sm leading-relaxed flex-1">
                      {example.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-premium-gray/20 border-premium-silver/20 text-white hover:bg-premium-gray/40" />
          <CarouselNext className="bg-premium-gray/20 border-premium-silver/20 text-white hover:bg-premium-gray/40" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientExamples;
