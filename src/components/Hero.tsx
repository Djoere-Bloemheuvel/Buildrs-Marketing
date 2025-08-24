
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Cog, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';
import CloudinaryVideoBackground from './CloudinaryVideoBackground';
import HorizontalLightFlare from './HorizontalLightFlare';
import { CLOUDINARY_CONFIG } from '@/config/cloudinary';

// No animations needed - keeping only AnimatedHeadline

const Hero = () => {
  const handleDeepDiveClick = () => {
    // Guard for browser environment
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center px-4 py-12 bg-black overflow-hidden" style={{ alignItems: 'flex-start', paddingTop: '25vh' }}>
      {/* Responsive Video Background - Optimized for Different Screen Sizes */}
      <div className="absolute inset-0 opacity-90">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* 4K for very large screens (27"+ monitors) */}
          <source 
            src="https://res.cloudinary.com/dlhhmt8wo/video/upload/e_accelerate:-50,w_3840,h_2160,c_fill,g_center,q_auto:best,f_mp4,br_8000k/hero-video.mp4" 
            type="video/mp4" 
            media="(min-width: 2560px)"
          />
          
          {/* 2K for large screens (24-27" monitors) */}
          <source 
            src="https://res.cloudinary.com/dlhhmt8wo/video/upload/e_accelerate:-50,w_2560,h_1440,c_fill,g_center,q_auto:best,f_mp4,br_6000k/hero-video.mp4" 
            type="video/mp4" 
            media="(min-width: 1920px)"
          />
          
          {/* Full HD for medium screens */}
          <source 
            src="https://res.cloudinary.com/dlhhmt8wo/video/upload/e_accelerate:-50,w_1920,h_1080,c_fill,g_center,q_auto:good,f_mp4,br_4000k/hero-video.mp4" 
            type="video/mp4" 
            media="(min-width: 1280px)"
          />
          
          {/* HD for smaller screens */}
          <source 
            src="https://res.cloudinary.com/dlhhmt8wo/video/upload/e_accelerate:-50,w_1280,h_720,c_fill,g_center,q_auto,f_mp4,br_2500k/hero-video.mp4" 
            type="video/mp4" 
            media="(max-width: 1279px)"
          />
          
          {/* Fallback for unsupported browsers */}
          <source 
            src="https://res.cloudinary.com/dlhhmt8wo/video/upload/e_accelerate:-50,w_1920,h_1080,c_fill,g_center,q_auto,f_mp4/hero-video.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Minimal overlay to maintain text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Floating Design Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left floating icon */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <Brain className="w-8 h-8 text-blue-400" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        </div>
        
        {/* Top right floating icon */}
        <div className="absolute top-32 right-16 opacity-15 animate-pulse">
          <Cog className="w-6 h-6 text-purple-400" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>
        
        {/* Bottom left accent */}
        <div className="absolute bottom-40 left-8 opacity-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl animate-pulse" 
               style={{ animationDelay: '1s', animationDuration: '6s' }} />
        </div>
      </div>

      {/* Content Container with Subtle Glow */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle background glow for content area */}
          <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" 
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(40px)'
               }} />
          
          {/* Animated Headline */}
          <div className="mb-2 opacity-0 animate-hero-entrance-1">
            <AnimatedHeadline />
          </div>

          {/* Subtitle with enhanced gradient */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4 opacity-0 animate-hero-entrance-2">
            <span className="bg-gradient-to-r from-premium-silver/90 via-white to-premium-silver/90 bg-clip-text text-transparent">
              Wij bouwen AI-systemen die uw business
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-white font-medium bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              daadwerkelijk transformeren.
            </span>
          </p>

          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 animate-hero-entrance-3">
            <Button
                className="group relative bg-white text-black apple-button-hover transition-all duration-300 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden w-full sm:w-80 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
              <span className="relative z-10 flex items-center justify-center">
                Ontdek de mogelijkheden
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>

            <div className="relative group">
              <div 
                className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(59, 130, 246) 25%, rgb(147, 197, 253) 50%, rgb(59, 130, 246) 75%, rgb(37, 99, 235) 100%)',
                  padding: '2px'
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: 'rgba(0, 0, 0, 0.85)' }} />
              </div>
              <Button
                variant="outline"
                className="group relative apple-button-hover px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 overflow-hidden w-full sm:w-72 border-0 hover:scale-[1.03]"
                style={{
                  background: 'rgba(0, 0, 0, 0.85)',
                  backdropFilter: 'blur(20px)',
                  color: '#ffffff',
                  boxShadow: '0 4px 24px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(59, 130, 246, 0.1)',
                  margin: '2px'
                }}
              onClick={handleDeepDiveClick}
              data-contact-trigger="true"
            >
              <span className="relative z-10 flex items-center justify-center">
                Plan een deepdive
                <Brain className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-200" />
              </span>
            </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Light Flare with Gentle Upward Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-none h-px pointer-events-none z-40">
          {/* Volumetric Light Beam - more visible gradient */}
        <div 
          className="absolute inset-0 w-full h-40 -top-40 opacity-55"
          style={{
            background: `linear-gradient(0deg, 
              rgba(59, 130, 246, 0.5) 0%, 
              rgba(59, 130, 246, 0.35) 20%,
              rgba(59, 130, 246, 0.25) 35%,
              rgba(59, 130, 246, 0.18) 50%,
              rgba(59, 130, 246, 0.12) 62%,
              rgba(59, 130, 246, 0.08) 72%,
              rgba(59, 130, 246, 0.05) 80%,
              rgba(59, 130, 246, 0.03) 86%,
              rgba(59, 130, 246, 0.015) 91%,
              rgba(59, 130, 246, 0.008) 95%,
              rgba(59, 130, 246, 0.003) 98%,
              transparent 100%
            )`,
            filter: 'blur(8px)'
          }}
        />
        
        {/* Ambient nebula spotlight clouds for atmosphere */}
        <div className="absolute inset-0 w-full h-40 -top-40 overflow-hidden pointer-events-none opacity-20">
          <div 
            className="absolute w-[600px] h-[200px] left-1/2 bottom-0 transform -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-t from-blue-500/10 to-purple-600/5"
            style={{
              animation: 'upward-nebula-drift 25s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute w-[400px] h-[150px] left-1/3 bottom-0 transform -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-t from-purple-500/8 to-violet-400/3"
            style={{
              animation: 'upward-nebula-drift 30s ease-in-out infinite reverse',
              animationDelay: '8s'
            }}
          />
        </div>
        
        {/* Main horizontal light line - perfectly flat */}
        <div 
          className="absolute inset-0 w-full h-px opacity-65"
          style={{
            background: `linear-gradient(90deg, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(59, 130, 246, 0.5) 25%, 
              rgba(59, 130, 246, 0.6) 50%, 
              rgba(59, 130, 246, 0.5) 75%, 
              rgba(59, 130, 246, 0.3) 100%
            )`,
            animation: 'gentle-flare-pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Core line for definition */}
        <div 
          className="absolute inset-0 w-full h-px opacity-55"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 30%, 
              rgba(59, 130, 246, 0.8) 50%, 
              transparent 70%, 
              transparent 100%
            )`
          }}
        />
      </div>

      {/* Animation CSS moved to index.css to prevent build issues in Astro */}

    </section>
  );
};

export default Hero;
