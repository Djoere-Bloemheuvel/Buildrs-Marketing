import AutomationHero from './automations/AutomationHero';
import AutomationIntro from './automations/AutomationIntro';
import AutomationOverview from './automations/AutomationOverview';
import AutomationExplained from './automations/AutomationExplained';
import UseCases from './automations/UseCases';
import AutomationShowcase from './automations/AutomationShowcase';
import WhyAutomations from './automations/WhyAutomations';
import ClientExamples from './automations/ClientExamples';
import AutomationFinalCTA from './automations/AutomationFinalCTA';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const AIAutomations = () => {
  return (
    <div className="min-h-screen bg-premium-black overflow-x-hidden">
      <AutomationHero />
      <AutomationIntro />
      <AutomationOverview />
      <AutomationExplained />
      <UseCases />
      <AutomationShowcase />
      <WhyAutomations />
      <ClientExamples />
      <AutomationFinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AIAutomations;