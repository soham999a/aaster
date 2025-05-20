
import { Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Astrology = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-dusty-lavender/30 to-celestial-blue/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in opacity-0">
            Astrology Services<br />
            <span className="text-mystic-gold">Launching Soon!</span>
          </h1>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="w-32 h-32 mx-auto bg-dusty-lavender/20 rounded-full flex items-center justify-center mb-8">
              <Calendar size={64} className="text-mystic-gold" />
            </div>

            <h2 className="text-3xl font-semibold mb-6">
              Personalized Predictions, Kundli Matching & More
            </h2>

            <p className="text-lg text-cool-gray mb-10">
              We're currently expanding our services to bring you comprehensive astrology consultations.
              Our expert astrologers are preparing to offer detailed birth chart analysis,
              compatibility readings, and personalized predictions to guide your life decisions.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-medium mb-4">Join our waitlist</h3>
              <p className="text-cool-gray mb-6">
                Be the first to know when our astrology services launch and receive an exclusive discount on your first consultation.
              </p>

              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Join Waitlist
                </button>
              </form>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-medium">Coming Services Include:</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Birth Chart Analysis</h4>
                  <p className="text-cool-gray text-sm">Detailed interpretation of your birth chart and planetary positions.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Compatibility Reading</h4>
                  <p className="text-cool-gray text-sm">Comprehensive analysis for relationship and marriage compatibility.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Transit Predictions</h4>
                  <p className="text-cool-gray text-sm">Insights into how planetary movements will affect your life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mystic-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <Link to="/contact" target='_blank' className="px-8 py-3 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-colors inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Astrology;
