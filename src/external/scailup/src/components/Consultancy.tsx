import ConsultancyHero from './consultancy/ConsultancyHero';
import ConsultancyOverview from './consultancy/ConsultancyOverview';
import ConsultancyExplained from './consultancy/ConsultancyExplained';
import ConsultancyFeaturePair from './consultancy/ConsultancyFeaturePair';
import WhyBuildrsConsultancy from './consultancy/WhyBuildrsConsultancy';
import ConsultancyFinalCTA from './consultancy/ConsultancyFinalCTA';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Consultancy = () => {
  return (
    <div className="min-h-screen bg-premium-black overflow-x-hidden">
      <ConsultancyHero />
      <ConsultancyOverview />
      <ConsultancyExplained />
      <ConsultancyFeaturePair />
      <WhyBuildrsConsultancy />
      <ConsultancyFinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Consultancy;