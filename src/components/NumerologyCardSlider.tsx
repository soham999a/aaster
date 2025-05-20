import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NumerologyService {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface NumerologyCardSliderProps {
  services: NumerologyService[];
}

const NumerologyCardSlider = ({ services }: NumerologyCardSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying] = useState(true); // Auto-play is always enabled
  const totalCards = services.length;

  // Handle navigation
  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  // Auto-rotate the carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex, isPlaying]);

  // Get visible cards (current, previous, next, etc.)
  const getVisibleCards = () => {
    const cards = [];

    // Add cards in this order: -2, -1, 0 (active), 1, 2
    for (let offset = -2; offset <= 2; offset++) {
      // Calculate the actual index with wrapping
      const index = (activeIndex + offset + totalCards) % totalCards;
      cards.push({
        service: services[index],
        index,
        offset
      });
    }

    return cards;
  };

  return (
    <div className="relative py-12 px-4 mx-auto max-w-5xl overflow-hidden">
      {/* Card Gallery */}
      <div className="gallery relative h-[400px] overflow-hidden mx-auto max-w-4xl">
        <div className="cards relative h-full flex justify-center items-center">
          {getVisibleCards().map(({ service, index, offset }) => {
            // Calculate card styling based on offset from active card
            const isActive = offset === 0;
            const scale = isActive ? 1 : 0.8;
            const translateX = offset * 120; // Horizontal position
            const zIndex = 10 - Math.abs(offset); // Z-index (active card on top)
            const opacity = Math.abs(offset) >= 2 ? 0.6 : 1;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActiveIndex(index);
                  }
                }}
              >
                <div
                  className={`rounded-xl shadow-lg w-[250px] h-[350px] flex items-center justify-center overflow-hidden
                            ${isActive ? 'ring-2 ring-purple-400' : ''}`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
                      : 'linear-gradient(135deg, #4A00E0 0%, #2575fc 100%)',
                    boxShadow: isActive ? '0 10px 25px -5px rgba(138, 43, 226, 0.4)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-center p-6 w-full h-full flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-white mb-4">{index + 1}</h3>

                    {isActive && (
                      <div className="mt-4 transition-all duration-500 opacity-100 transform translate-y-0">
                        <div className="h-12 w-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 text-white">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-white/90 text-sm mb-4 line-clamp-3">{service.description}</p>
                        <Link
                          to="/contact"
                          target='_blank'
                          rel="noopener noreferrer"
                          className="mt-2 inline-block bg-white text-purple-600 px-5 py-2 rounded-md font-medium
                                    hover:bg-purple-100 transition-all duration-300 transform hover:scale-105
                                    shadow-md hover:shadow-lg"
                        >
                          Book Now
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center mt-6">
        {/* Indicator dots */}
        <div className="flex space-x-2 mb-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          {/* Left Arrow Button */}
          <button
            onClick={goToPrevSlide}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={goToNextSlide}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumerologyCardSlider;