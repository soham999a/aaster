
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-mystic-gold mb-4">Cosmic Connections</h3>
            <p className="text-cool-gray mb-4">
              Aligning your life with ancient wisdom of numbers, spaces, and stars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-mystic-gold">Quick Links</h4>
            <ul className="space-y-2 text-cool-gray mb-4">
              {/*<li><Link to="/" className="text-cool-gray hover:text-mystic-gold transition-colors">Home</Link></li>*/}
              {/*<li><Link to="/numerology" className="text-cool-gray hover:text-mystic-gold transition-colors">Numerology</Link></li>*/}
              <li>
                <a
                  href="/numerology"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Numerology link clicked')}
                >
                  Numerology
                </a>
              </li>
              {/*<li><Link to="/vastu" className="text-cool-gray hover:text-mystic-gold transition-colors">Vastu</Link></li>*/}
              <li>
                <a
                  href="/vastu"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Vastu link clicked')}
                >
                  Vastu
                </a>
              </li>
              {/*<li><Link to="/astrology" className="text-cool-gray hover:text-mystic-gold transition-colors">Astrology</Link></li>*/}
              <li>
                <a
                  href="/astrology"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Astrology')}
                >
                  Astrology
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Contact Us')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-mystic-gold">Services</h4>
            <ul className="space-y-2 text-cool-gray mb-4">
              <li>
                {/*<Link to="/numerology" className="text-cool-gray hover:text-mystic-gold transition-colors">Personality Number Analysis</Link>*/}
                <a
                  href="/numerology"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Personality Number Analysis')}
                >
                  Personality Number Analysis
                </a>
              </li>
              <li>
                {/*<Link to="/numerology" className="text-cool-gray hover:text-mystic-gold transition-colors">Name Correction</Link>*/}
                <a
                  href="/numerology"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Name Correction')}
                >
                  Name Correction
                </a>
              </li>
              <li>
                {/*<Link to="/vastu" className="text-cool-gray hover:text-mystic-gold transition-colors">Home Vastu</Link>*/}
                <a
                  href="/vastu"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Home Vastu')}
                >
                  Home Vastu
                </a>
              </li>
              <li>
                {/*<Link to="/vastu" className="text-cool-gray hover:text-mystic-gold transition-colors">Office Vastu</Link>*/}
                <a
                  href="/numerology"
                  className="hover-glow font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => console.log('Office Vastu')}
                >
                  Office Vastu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-mystic-gold">Contact</h4>
            <div className="flex items-center mb-3">
              <Phone size={18} className="mr-2 text-mystic-gold" />
              <span className="text-cool-gray">+91 98765 43210</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail size={18} className="mr-2 text-mystic-gold" />
              <span className="text-cool-gray">info@cosmicconnections.com</span>
            </div>
            <div className="flex space-x-4">
              <a className="text-cool-gray hover:text-mystic-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a className="text-cool-gray hover:text-mystic-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a className="text-cool-gray hover:text-mystic-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-cool-gray">
          <p>&copy; {new Date().getFullYear()} Cosmic Connections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
