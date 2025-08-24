import { Mail, Users, Target } from 'lucide-react';
import ServiceSection from './ServiceSection';

const Services = () => {
  // ScailUp Outbound Agency Services - 3 core services

  const services = [
    {
      id: 'email-campaigns',
      icon: Mail,
      title: 'Inbox to Meeting',
      subtitle: 'Persoonlijk. Relevant. Resultaat.',
      description: 'AI-gedreven e-mailcampagnes die opvallen tussen de ruis. Elke boodschap op maat.',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-scailup-blue to-scailup-cyan',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Bekijk cases',
      ariaLabel: 'E-mailcampagnes - gepersonaliseerde outbound e-mailmarketing'
    },
    {
      id: 'linkedin-outreach',
      icon: Users,
      title: 'Connect to Client',
      subtitle: 'Netwerken die converteren.',
      description: 'Strategische LinkedIn-campagnes. Bouw relaties die leiden tot afspraken.',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Bekijk cases'
    },
    {
      id: 'account-based-marketing',
      icon: Target,
      title: 'Account to Deal',
      subtitle: 'Precies de juiste accounts.',
      description: 'ABM-campagnes gericht op jouw ideale klanten. Kwaliteit boven kwantiteit.',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-600 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Bekijk cases'
    }
  ];

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <div className="relative bg-black ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-scailup-cyan"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={true}
        />
      ))}
    </div>
  );
};

export default Services;