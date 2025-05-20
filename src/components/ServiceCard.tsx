{/*}
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

const ServiceCard = ({ title, description, link, icon: Icon, comingSoon = false }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-mystic-gold">{title}</h3>
      <p className="text-cool-gray mb-6">{description}</p>
      {comingSoon ? (
        <span className="inline-block px-4 py-2 rounded bg-cool-gray/20 text-cool-gray">Coming Soon</span>
      ) : (
        <Link to={link} className="inline-flex items-center text-mystic-gold group-hover:translate-x-1 transition-transform">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
*/}

import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  comingSoon?: boolean;
  external?: boolean;
  backgroundImage?: string;
  showBookNow?: boolean;
}

const ServiceCard = ({
  title,
  description,
  link,
  icon: Icon,
  comingSoon = false,
  external = false,
  backgroundImage,
  showBookNow = false,
}: ServiceCardProps) => {
  const ExploreLink = ({ children }: { children: React.ReactNode }) =>
    external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-mystic-gold border border-mystic-gold rounded-md
        transition-all duration-300 relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-mystic-gold/10 before:to-mystic-gold/20
        before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
        hover:shadow-[0_0_15px_rgba(205,176,108,0.5)] hover:border-mystic-gold/80 group
        bg-gradient-to-r from-transparent to-mystic-gold/5"
      >
        {children}
      </a>
    ) : (
      <Link
        to={link}
        className="inline-flex items-center px-4 py-2 text-mystic-gold border border-mystic-gold rounded-md
        transition-all duration-300 relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-mystic-gold/10 before:to-mystic-gold/20
        before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
        hover:shadow-[0_0_15px_rgba(205,176,108,0.5)] hover:border-mystic-gold/80 group
        bg-gradient-to-r from-transparent to-mystic-gold/5"
      >
        {children}
      </Link>
    );

  return (
    <div
      className="service-card group relative overflow-hidden flex flex-col h-full"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-mystic-gold">{title}</h3>
      <p className="text-cool-gray mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
        {comingSoon ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="inline-block px-4 py-2 rounded bg-cool-gray/20 text-cool-gray font-medium drop-shadow-[0_0_1px_rgba(127,125,126,0.5)]">Coming Soon</span>
            <Link
              to="/astrology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-mystic-gold text-mystic-gold rounded-md
              transition-all duration-300 relative overflow-hidden hover:bg-mystic-gold/10
              hover:shadow-[0_0_10px_rgba(205,176,108,0.4)]
              bg-gradient-to-r from-transparent to-mystic-gold/5"
            >
              <span className="text-mystic-gold font-medium drop-shadow-[0_0_2px_rgba(205,176,108,0.5)]">Join Waitlist</span>
            </Link>
          </div>
        ) : (
          <>
            <ExploreLink>
              <span className="flex items-center">
                <span className="text-mystic-gold font-medium drop-shadow-[0_0_2px_rgba(205,176,108,0.5)]">Explore</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:animate-[arrowBounce_1s_ease-in-out_infinite]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </ExploreLink>
            {showBookNow && (
              <Link
                to="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-mystic-gold text-white rounded-md
                transition-all duration-300 relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-400/20 before:to-amber-500/30
                before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                hover:shadow-[0_0_15px_rgba(205,176,108,0.7)] border border-transparent hover:border-amber-400"
              >
                <span className="font-medium drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">Book Now</span>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
