
import AppleTimelineEnhanced from './AppleTimelineEnhanced';

const WhyBuildrs = () => {
  return (
    <section 
      data-section="why-buildrs"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-blue-950/5 to-premium-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <AppleTimelineEnhanced />
      </div>
    </section>
  );
};

export default WhyBuildrs;
