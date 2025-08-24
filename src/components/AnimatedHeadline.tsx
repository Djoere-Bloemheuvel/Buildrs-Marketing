import { useEffect, useState } from 'react';

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const words = ['onderzoekt', 'identificeert', 'personaliseert', 'converteert'];

  useEffect(() => {
    if (animationComplete) return;

    const sequence = async () => {
      // Snellere entrance animatie (~0.34 seconden - 15% eerder)
      await new Promise(resolve => setTimeout(resolve, 340));

      // Nu pas starten met de woord cycling animatie
      for (let i = 0; i < words.length; i++) {
        if (i > 0) {
          // Snelle glitch-animatie tussen woorden
          setIsGlitching(true);
          await new Promise(resolve => setTimeout(resolve, 100));
          setIsGlitching(false);
        }

        // Toon het nieuwe woord
        setCurrentWordIndex(i);

        // Snellere overgang naar volgende woord (15% eerder voor converteert)
        if (i < words.length - 1) {
          const delay = i === words.length - 2 ? 212 : 250; // 15% korter voor de laatste overgang naar 'converteert'
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      setAnimationComplete(true);
    };

    sequence();
  }, []);

  return (
    <div className="relative px-2 sm:px-4">
      <h1 className="font-bold tracking-tight leading-[0.85] sm:leading-[0.9] text-center" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <span className="whitespace-nowrap xl:whitespace-normal">Outbound die{' '}</span>
          <span className="relative inline-block">
            <span
              className={`relative z-20 transition-opacity duration-75 ${
                isGlitching ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {words[currentWordIndex]}.
            </span>

            {/* Glitch Layers */}
            {isGlitching && (
              <>
                {/* RGB Split Layers */}
                <span
                  className="absolute top-0 left-0 z-10 text-red-500 glitch-rgb-red"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>

                <span
                  className="absolute top-0 left-0 z-10 text-green-500 glitch-rgb-green"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>

                <span
                  className="absolute top-0 left-0 z-10 text-blue-500 glitch-rgb-blue"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>

                {/* Slice Layers */}
                <span
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-1"
                >
                  {words[currentWordIndex]}.
                </span>

                <span
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-2"
                >
                  {words[currentWordIndex]}.
                </span>

                {/* Scanline effect */}
                <div className="absolute inset-0 z-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-60 h-1 glitch-scanline"></div>
              </>
            )}
          </span>
        </div>
      </h1>
    </div>
  );
};

export default AnimatedHeadline;