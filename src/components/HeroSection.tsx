
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const slides = [
  {
    bg: "url('https://images.unsplash.com/photo-1543604055-c4ca3f836063?q=80&w=1920&auto=format&fit=crop')",
  },
  {
    bg: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop')",
  },
  {
    bg: "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1920&auto=format&fit=crop')",
  },
  {
    bg: "url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1920&auto=format&fit=crop')",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-bg ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: slide.bg,
            transitionDelay: index === currentSlide ? '0ms' : '0ms'
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto flex flex-col justify-center items-center text-center text-white px-4">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Align Your Life with <br className="hidden sm:block" />
            <span className="text-mystic-gold">Numbers, Space, and Stars</span>
          </h1>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
          <p className="text-lg md:text-xl mb-8">Numerology | Vastu | Astrology</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '900ms' }}>
          <Link
            to="/contact"
            target='_blank'
            className="btn-primary flex items-center justify-center"
          >
            <Calendar size={18} className="mr-2" />
            Book Consultation
          </Link>
          <Link to="/contact" target='_blank' className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-mystic-gold w-6' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
