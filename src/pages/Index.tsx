import { Calendar, UserCheck, Phone, Award, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative animate-fade-in opacity-0">
              <img
                src="Indulekha.JPG"
                alt="Indulekha"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              {/*<h2 className="text-3xl md:text-4xl font-semibold mb-6">About <span className="text-mystic-gold">Our Expert</span></h2>*/}
              <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block tracking-wide">
                  Know <span className="text-mystic-gold bg-gradient-to-r from-mystic-gold to-amber-500 bg-clip-text text-transparent">About Our Expert</span>
                  <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-mystic-gold to-amber-500 rounded-full"></span>
                </h2>
              </div>
              <p className="text-cool-gray mb-4">
                Welcome to HarmonySeeker, where ancient wisdom meets modern living. Our founder, with over 20 years of experience in Vedic sciences, has helped thousands transform their lives through the power of numbers, spaces, and celestial knowledge.
              </p>
              <p className="text-cool-gray mb-6">
                Trained in traditional Vedic practices and contemporary applications, our expert provides authentic guidance that blends time-tested wisdom with practical solutions for today's challenges.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Certified Expert</p>
                    <p className="text-sm text-cool-gray">Vedic Sciences</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-3">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <p className="font-medium">1000+ Clients</p>
                    <p className="text-sm text-cool-gray">Worldwide</p>
                    <p className="font-medium text-mystic-gold">20+ Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-celestial-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            {/*<h2 className="text-3xl md:text-4xl font-semibold mb-4">Our <span className="text-mystic-gold">Services</span></h2>*/}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block tracking-wide">
              Our <span className="text-mystic-gold bg-gradient-to-r from-mystic-gold to-amber-500 bg-clip-text text-transparent">Services</span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-mystic-gold to-amber-500 rounded-full"></span>
            </h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Discover how ancient sciences can bring clarity, harmony, and positive transformation to your modern life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <ServiceCard
                title="Numerology Services"
                description="Unlock the power of numbers in your life with personalized analysis and recommendations."
                link="/numerology"
                icon={Calendar}
                external={true}
                backgroundImage="/Numerology.png"
                showBookNow={true}
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <ServiceCard
                title="Vastu Consultation"
                description="Create harmony in your spaces with ancient architectural wisdom adapted for modern homes."
                link="/vastu"
                icon={Compass}
                external={true}
                backgroundImage="/Vastu.png"
                showBookNow={true}
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <ServiceCard
                title="Astrology"
                description="Gain insights into your life path and potential through celestial analysis."
                link="/astrology"
                icon={Calendar}
                comingSoon={true}
                backgroundImage="/Astrology.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            {/*<h2 className="text-3xl md:text-4xl font-semibold mb-4">Why <span className="text-mystic-gold">Choose Us</span></h2>*/}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block tracking-wide">
              Why <span className="text-mystic-gold bg-gradient-to-r from-mystic-gold to-amber-500 bg-clip-text text-transparent">Choose Us</span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-mystic-gold to-amber-500 rounded-full"></span>
            </h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Our approach combines ancient wisdom with modern understanding to provide solutions that truly work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <Award size={24} />
              </div>
              <h3 className="font-medium mb-2">Authentic</h3>
              <p className="text-cool-gray text-sm">Traditional knowledge, authentic practices</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <UserCheck size={24} />
              </div>
              <h3 className="font-medium mb-2">Personalized</h3>
              <p className="text-cool-gray text-sm">Tailored solutions for individual needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <UserCheck size={24} />
              </div>
              <h3 className="font-medium mb-2">1000+ Clients</h3>
              <p className="text-cool-gray text-sm">Trusted by clients worldwide</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold mx-auto">
                <Phone size={24} />
              </div>
              <h3 className="font-medium mb-2">Always Available</h3>
              <p className="text-cool-gray text-sm">Continuous support and follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section bg-dusty-lavender/10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            {/*<h2 className="text-3xl md:text-4xl font-semibold mb-4">Client <span className="text-mystic-gold">Testimonials</span></h2>*/}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block tracking-wide">
              Client <span className="text-mystic-gold bg-gradient-to-r from-mystic-gold to-amber-500 bg-clip-text text-transparent">Testimonials</span>
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-mystic-gold to-amber-500 rounded-full"></span>
            </h2>
            <p className="text-cool-gray max-w-2xl mx-auto">
              Don't just take our word for it – hear from those whose lives have been transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <TestimonialCard
                name="Priya Sharma"
                location="Delhi, India"
                testimonial="The numerology analysis was eye-opening. The name correction suggestions have brought positive changes in my career."
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <TestimonialCard
                name="Rahul Mehra"
                location="Mumbai, India"
                testimonial="The Vastu consultation completely transformed our home energy. We feel more peaceful and prosperous."
              />
            </div>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <TestimonialCard
                name="Anjali Patel"
                location="Bengaluru, India"
                testimonial="I was skeptical at first, but the personal number analysis was incredibly accurate and helpful."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section id="quick-contact" className="section bg-mystic-gold text-white text-center">
        <div className="container mx-auto max-w-3xl animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Transform Your Life?</h2>
          <p className="mb-8 text-white/90">
            Take the first step towards harmony and positive transformation with a personalized consultation.
          </p>
          <Link to="/contact" target='_blank' className="px-8 py-3 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
            <Calendar size={20} className="mr-2" />
            Get Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
