import { useEffect, useState, useRef } from 'react';

interface IntroScreenProps {
  onIntroComplete: () => void;
}

const IntroScreen = ({ onIntroComplete }: IntroScreenProps) => {
  const [textVisible, setTextVisible] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show text after 1 second
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    // For videos that might be too short or don't have an 'ended' event,
    // we'll set a minimum display time before transitioning
    const minDisplayTimer = setTimeout(() => {
      setVideoEnded(true);
    }, 4000); // Show for at least 4 seconds

    // Add event listener for video end
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', () => {
        setVideoEnded(true);
      });
    }

    return () => {
      clearTimeout(textTimer);
      clearTimeout(minDisplayTimer);
      if (videoElement) {
        videoElement.removeEventListener('ended', () => {
          setVideoEnded(true);
        });
      }
    };
  }, []);

  // Handle video end and transition to home page
  useEffect(() => {
    if (videoEnded) {
      // Wait a bit after video ends before transitioning to home page
      const timer = setTimeout(() => {
        // Simply fade out the intro screen
        const introElement = document.getElementById('intro-screen');
        if (introElement) {
          introElement.classList.add('transition-out');

          // After fade out completes, call the callback to remove the intro screen
          setTimeout(() => {
            onIntroComplete();
          }, 1000); // Match this with the CSS transition duration
        }
      }, 2000); // Show the space background for a bit longer

      return () => clearTimeout(timer);
    }
  }, [videoEnded, onIntroComplete]);

  return (
    <div
      id="intro-screen"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Space background with stars and planets */}
      <div className="absolute inset-0 bg-space">
        <div className="stars"></div>
        <div className="planets">
          <div className="planet planet-1" title="Jupiter"></div>
          <div className="planet planet-2" title="Saturn"></div>
          <div className="planet planet-3" title="Mars"></div>
          <div className="planet planet-4" title="Earth"></div>
          <div className="planet planet-5" title="Neptune"></div>
        </div>
        <div className="numbers">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="number"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
                fontSize: `${Math.random() * 1 + 0.8}rem`
              }}
            >
              {Math.floor(Math.random() * 10)}
            </div>
          ))}

          {/* Add some special astronomy-related symbols */}
          {['π', '∞', '°', '∑', 'Ω', '∆', '√', '∫', '≈', '≠', '±', '÷', '×'].map((symbol, i) => (
            <div
              key={`symbol-${i}`}
              className="number symbol"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.6 + 0.3,
                fontSize: `${Math.random() * 1.2 + 1}rem`,
                color: `hsl(${Math.random() * 60 + 40}, 80%, 75%)`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      {/* Logo Video */}
      <div
        ref={logoContainerRef}
        className="relative z-30 logo-container mx-auto"
        id="logo-animation-container"
      >
        <video
          ref={videoRef}
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          src="/LOGO_VIDEO.mp4"
          autoPlay
          muted
          playsInline
        />
      </div>

      {/* Animated Text */}
      <div
        className={`relative z-30 mt-6 text-center transition-all duration-1000 ${
          textVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold to-amber-500 cosmic-text">
          Cosmic Connections
        </h1>
      </div>
    </div>
  );
};

export default IntroScreen;
