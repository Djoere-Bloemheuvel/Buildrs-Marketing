// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
  cloudName: 'dlhhmt8wo', // Your Cloudinary cloud name
  // Video public IDs (without file extensions)
  videos: {
    heroBackground: 'scailup-hero-video', // ScailUp hero video public ID
  }
};

// Environment-based configuration
export const getCloudinaryConfig = () => {
  // In production, you might want to use environment variables
  return {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || CLOUDINARY_CONFIG.cloudName,
  };
};