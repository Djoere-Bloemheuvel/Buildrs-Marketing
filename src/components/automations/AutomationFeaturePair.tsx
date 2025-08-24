
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import AutomationCard from './AutomationCard';

interface AutomationFeature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  accent: string;
  glowColor: string;
  borderGlow: string;
  iconGlow: string;
  delay: number;
}

interface AutomationFeaturePairProps {
  features?: AutomationFeature[];
  startIndex?: number;
}

const AutomationFeaturePair = ({ features = [], startIndex = 0 }: AutomationFeaturePairProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-automation-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Ambient background with layered depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black/95 to-premium-gray/30" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Premium staggered grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {features.slice(0, 2).map((feature, index) => {
            const globalIndex = startIndex + index;
            const isVisible = visibleItems.includes(globalIndex);
            const isEven = index % 2 === 0;
            
            return (
              <AutomationCard
                key={globalIndex}
                feature={feature}
                index={globalIndex}
                isVisible={isVisible}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationFeaturePair;
