
const Integrations = () => {
  const integrations = [
    { name: 'HubSpot', logo: '🔗' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Slack', logo: '💬' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Google', logo: '🔍' },
    { name: 'Notion', logo: '📝' },
    { name: 'Airtable', logo: '📊' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-premium-black via-premium-gray/5 to-premium-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Naadloze Integraties
          </h2>
          <p className="text-premium-silver/60 text-sm">
            Werkt met de tools die u al gebruikt
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-premium-gray/10 border border-premium-silver/10 hover:border-premium-silver/20 transition-all duration-300 hover:scale-105 hover:bg-premium-gray/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {integration.logo}
              </div>
              <span className="text-xs text-premium-silver/60 text-center font-medium">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
