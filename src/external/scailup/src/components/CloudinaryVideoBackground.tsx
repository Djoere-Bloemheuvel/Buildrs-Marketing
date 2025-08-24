import { useState, useRef, useEffect } from 'react';

interface CloudinaryVideoBackgroundProps {
  publicId: string; // Cloudinary public ID (without file extension)
  cloudName: string; // Your Cloudinary cloud name
  fallbackSrc?: string; // Fallback image if video fails
  speed?: number; // Speed multiplier (0.5 = 50% slower, 2.0 = 2x faster)
  className?: string;
  style?: React.CSSProperties;
}

const CloudinaryVideoBackground = ({ 
  publicId, 
  cloudName,
  fallbackSrc = '/brain-network.png',
  speed = 0.5, // Default: 50% slower for cinematic effect
  className = '', 
  style = {} 
}: CloudinaryVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive Cloudinary URLs with speed control
  const getCloudinaryUrl = (width: number, quality = 'auto') => {
    // Calculate accelerate value: speed 0.5 = -50%, speed 2.0 = +100%
    const accelerateValue = Math.round((speed - 1) * 100);
    const speedTransform = accelerateValue !== 0 ? `e_accelerate:${accelerateValue},` : '';
    
    return `https://res.cloudinary.com/${cloudName}/video/upload/${speedTransform}w_${width},q_${quality},f_auto/${publicId}`;
  };

  // Generate poster image URL from video
  const getPosterUrl = (width: number) => {
    return `https://res.cloudinary.com/${cloudName}/video/upload/w_${width},q_auto,f_auto,so_1/${publicId}.jpg`;
  };

  // Device and connection detection
  useEffect(() => {
    const checkShouldLoadVideo = () => {
      // TEMPORARY: Always load video for debugging
      return true;
      
      // Don't load video on mobile devices to save bandwidth
      const isMobile = window.innerWidth < 768;
      if (isMobile) return false;

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return false;

      // Check network connection if available
      const connection = (navigator as any).connection;
      if (connection) {
        // Don't load on slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          return false;
        }
        // Don't load if user has data saver on
        if (connection.saveData) {
          return false;
        }
      }

      return true;
    };

    // Initial check
    setShouldLoadVideo(checkShouldLoadVideo());

    // Listen for resize to detect mobile/desktop changes
    const handleResize = () => {
      setShouldLoadVideo(checkShouldLoadVideo());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start loading video when it comes into view
          const video = videoRef.current;
          if (video && !isVideoLoaded) {
            video.load();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideo, isVideoLoaded]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, that's okay
        console.log('Video autoplay failed - user interaction required');
      });
    }
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  // Get responsive video dimensions
  const getResponsiveWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1920) return 1920;
    if (screenWidth >= 1440) return 1440;
    if (screenWidth >= 1024) return 1024;
    return 768;
  };

  const videoWidth = shouldLoadVideo ? getResponsiveWidth() : 768;
  const videoUrl = getCloudinaryUrl(videoWidth);
  const posterUrl = getPosterUrl(videoWidth);

  // Don't render video element if we shouldn't load it or if error
  if (!shouldLoadVideo || hasError) {
    return (
      <div 
        className={`bg-cover bg-center bg-no-repeat ${className}`}
        style={{
          ...style,
          backgroundColor: '#1a1a1a', // Debug: Gray background instead of image
        }}
      >
        {/* Debug info */}
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs p-2 rounded z-50">
          Debug: shouldLoadVideo: {shouldLoadVideo.toString()}, hasError: {hasError.toString()}
          <br />Screen width: {window.innerWidth}px
          <br />Mobile: {window.innerWidth < 768 ? 'Yes' : 'No'}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Fallback background while video loads */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${posterUrl})`,
        }}
      />
      
      {/* Video element with Cloudinary optimizations */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none"
        poster={posterUrl}
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      >
        {/* Multiple sources for different formats - Cloudinary auto-selects best */}
        <source src={videoUrl} type="video/mp4" />
        {/* Cloudinary automatically serves WebM to supporting browsers when f_auto is used */}
        Your browser does not support the video tag.
      </video>

      {/* Performance monitoring in development */}
      <div className="absolute top-4 left-4 bg-green-600 text-white text-xs p-2 rounded z-50">
        Debug: Video should load!
        <br />Video URL: {videoUrl}
        <br />Poster URL: {posterUrl}
        <br />Video loaded: {isVideoLoaded ? 'Yes' : 'No'}
        <br />Has error: {hasError ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default CloudinaryVideoBackground;