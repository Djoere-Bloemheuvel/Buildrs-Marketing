
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UseCases = () => {
  const useCases = [
    {
      emoji: '📊',
      industry: 'Finance',
      title: 'Automated Reporting',
      description: 'Genereer complexe financiële rapporten in seconden. Van ruwe data naar boardroom-ready insights.',
      impact: '90% tijdsbesparing'
    },
    {
      emoji: '🏥',
      industry: 'Zorg',
      title: 'Patient Workflow',
      description: 'Automatiseer patiëntintake, planning en follow-up. Focus op zorg, niet op administratie.',
      impact: '65% minder handwerk'
    },
    {
      emoji: '🛠️',
      industry: 'Tech',
      title: 'DevOps Pipeline',
      description: 'Intelligent deployment, monitoring en incident response. Zero-downtime operaties.',
      impact: '40x sneller deployen'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Voor wie is dit?
          </h2>
          <p className="text-lg text-premium-silver/70 max-w-3xl mx-auto">
            Concrete scenario's waar onze AI automation direct impact maakt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-premium-gray/15 to-premium-black/30 border-premium-silver/15 backdrop-blur-sm hover:border-blue-400/25 transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{useCase.emoji}</div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-3">
                  {useCase.industry}
                </div>
                <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-premium-silver/70 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-xs font-semibold">
                  {useCase.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
