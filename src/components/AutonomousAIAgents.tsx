import AgentHero from './agents/AgentHero';
import AgentOverview from './agents/AgentOverview';
import AgentExplained from './agents/AgentExplained';
import AgentFeaturePair from './agents/AgentFeaturePair';
import WhyBuildrsAgents from './agents/WhyBuildrsAgents';
import AgentFinalCTA from './agents/AgentFinalCTA';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const AutonomousAIAgents = () => {
  return (
    <div className="min-h-screen bg-premium-black overflow-x-hidden">
      <AgentHero />
      <AgentOverview />
      <AgentExplained />
      <AgentFeaturePair />
      <WhyBuildrsAgents />
      <AgentFinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AutonomousAIAgents;