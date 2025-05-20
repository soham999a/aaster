import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  FaHome,
  FaStar,
  FaYinYang,
  FaRegSun,
  FaEnvelope
} from 'react-icons/fa';

// import { Link } from 'react-router-dom';

// Navbar component with active page highlighting
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center pl-1 pr-4 md:pl-2 md:pr-6">
        <a href="/" className="flex items-center ml-0 group no-underline">
          <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-105 flex flex-col items-center">
            {/* Logo with video */}
            <div className="flex items-center">
              {/* Logo Video */}
              <div
                className={`w-10 h-10 md:w-12 md:h-12 mr-2 overflow-hidden rounded-full transition-opacity duration-500
                  ${isScrolled ? 'opacity-100' : 'opacity-80'}`}
                id="navbar-logo-container"
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/LOGO_VIDEO.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              </div>

              {/* Text Logo */}
              <div className="flex flex-col items-start transition-opacity duration-500"
              >
                <span className="text-sm md:text-base lg:text-lg font-bold tracking-widest bg-gradient-to-r from-mystic-gold to-amber-500 bg-clip-text text-transparent whitespace-nowrap no-underline">
                  Cosmic Connections
                </span>

              </div>
            </div>
          </div>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-charcoal hover:text-mystic-gold p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-white transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
          style={{ top: '60px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl pt-8">
            <NavLinks onClick={() => setIsMenuOpen(false)} isMobile={true} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ onClick, isMobile = false }: { onClick?: () => void; isMobile?: boolean }) => {
  const location = useLocation();
  const baseUrl = window.location.origin;

  const links = [
    { to: '/', label: 'Home', icon: <FaHome className="inline mr-2" /> },
    { to: '/numerology', label: 'Numerology', icon: <FaStar className="inline mr-2" /> },
    { to: '/vastu', label: 'Vastu', icon: <FaYinYang className="inline mr-2" /> },
    { to: '/astrology', label: 'Astrology', icon: <FaRegSun className="inline mr-2" /> },
    { to: '/contact', label: 'Contact Us', icon: <FaEnvelope className="inline mr-2" /> },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        const absoluteUrl = `${baseUrl}${link.to}`;

        if (isActive) {
          return (
            <a
              key={link.to}
              href={link.to}
              className={`font-medium text-mystic-gold flex items-center py-3 px-4 min-h-[44px] relative no-underline
                ${isMobile ? 'w-full justify-center bg-mystic-gold/5 rounded-lg' : 'scale-110'}
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-mystic-gold after:rounded-full`}
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation since we're already on this page
                if (onClick) onClick();
              }}
            >
              {link.icon}
              {link.label}
            </a>
          );
        } else {
          return (
            <a
              key={link.to}
              href={absoluteUrl}
              className={`font-medium transition-all duration-300 hover:text-mystic-gold flex items-center py-3 px-4 min-h-[44px] relative no-underline
                ${isMobile ? 'w-full justify-center hover:bg-mystic-gold/5 rounded-lg' : 'hover-glow hover:scale-110'}`}
              onClick={() => {
                if (onClick) onClick();
              }}
            >
              {link.icon}
              {link.label}
            </a>
          );
        }
      })}
    </>
  );
};

export default Navbar;
