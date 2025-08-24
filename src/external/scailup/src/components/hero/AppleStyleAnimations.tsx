
const AppleStyleAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Apple-style entrance animation */
        @keyframes apple-entrance {
          0% { 
            opacity: 0; 
            transform: scale(0.85) translateY(40px); 
            filter: blur(20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
            filter: blur(0px); 
          }
        }

        /* Core pulsing */
        @keyframes apple-core-pulse {
          0%, 100% { 
            opacity: 0.7; 
            transform: translate(-50%, -50%) scale(1); 
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.1), 0 0 80px rgba(147, 51, 234, 0.05); 
          }
          50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.02); 
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.2), 0 0 120px rgba(147, 51, 234, 0.1); 
          }
        }

        /* Rotating ring */
        @keyframes apple-ring-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Signal pulse */
        @keyframes apple-signal-pulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.1); 
          }
        }

        /* Ambient pulse */
        @keyframes apple-ambient-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Scan lines */
        @keyframes apple-scan-line {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes apple-scan-line-delayed {
          0% { transform: translateX(200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        /* Apply animations */
        .apple-entrance {
          animation: apple-entrance 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .apple-ai-core {
          animation: apple-entrance 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .apple-core-pulse {
          animation: apple-core-pulse 6s ease-in-out infinite;
        }

        .apple-ring-rotate {
          animation: apple-ring-rotate 40s linear infinite;
        }

        .apple-signal-pulse {
          animation: apple-signal-pulse 4s ease-in-out infinite;
        }

        .apple-ambient-pulse {
          animation: apple-ambient-pulse 15s ease-in-out infinite;
        }

        .apple-scan-line {
          animation: apple-scan-line 25s ease-in-out infinite;
        }

        .apple-scan-line-delayed {
          animation: apple-scan-line-delayed 30s ease-in-out infinite;
        }
      `
    }} />
  );
};

export default AppleStyleAnimations;
