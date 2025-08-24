import CustomSaaSHero from './saas/CustomSaaSHero';
import CustomSaaSOverview from './saas/CustomSaaSOverview';
import CustomSaaSExplained from './saas/CustomSaaSExplained';
import CustomSaaSFeaturePair from './saas/CustomSaaSFeaturePair';
import CustomSaaSFinalCTA from './saas/CustomSaaSFinalCTA';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const CustomAISaaS = () => {
  return (
    <div className="min-h-screen bg-premium-black overflow-x-hidden">
      <CustomSaaSHero />
      <CustomSaaSOverview />
      <CustomSaaSExplained />
      <CustomSaaSFeaturePair />
      <CustomSaaSFinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CustomAISaaS;