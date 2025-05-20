
import { Compass, Home, Building, Factory, Map, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VastuCardSlider from '@/components/VastuCardSlider';

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const TimelineStep = ({ number, title, description, icon }: TimelineStepProps) => {
  return (
    <div className="flex relative">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-mystic-gold text-white relative z-10">
          {icon}
        </div>
        <div className="h-full w-0.5 bg-mystic-gold/30"></div>
      </div>
      <div className="ml-6 pb-12">
        <span className="inline-block px-2 py-1 bg-mystic-gold/10 text-mystic-gold text-sm font-semibold rounded mb-2">Step {number}</span>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-cool-gray">{description}</p>
      </div>
    </div>
  );
};

const Vastu = () => {
  const services = [
    {
      title: "Home Vastu",
      description: "Complete analysis and correction recommendations for residential properties.",
      icon: <Home size={28} />
    },
    {
      title: "Office/Business Vastu",
      description: "Optimize workspace energy for better productivity and business growth.",
      icon: <Building size={28} />
    },
    {
      title: "Factory/Industrial Vastu",
      description: "Large-scale property analysis for manufacturing and industrial facilities.",
      icon: <Factory size={28} />
    },
    {
      title: "Plot Selection",
      description: "Expert guidance for selecting the most auspicious location for your property.",
      icon: <Map size={28} />
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Book Consultation",
      description: "Schedule your initial consultation and tell us about your property and concerns.",
      icon: <Calendar size={24} />
    },
    {
      number: 2,
      title: "Share Plan",
      description: "Provide your property floor plan, layout, and relevant details for analysis.",
      icon: <Map size={24} />
    },
    {
      number: 3,
      title: "Analysis & Correction",
      description: "Receive detailed analysis and practical correction recommendations.",
      icon: <CheckCircle2 size={24} />
    },
    {
      number: 4,
      title: "Receive Report",
      description: "Get comprehensive documentation with step-by-step implementation guidance.",
      icon: <Compass size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-celestial-blue/30 to-dusty-lavender/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in opacity-0">
            Vastu Shastra Consultancy<br />
            <span className="text-mystic-gold">for Home & Business</span>
          </h1>
          <p className="text-lg text-cool-gray max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Create balanced, harmonious spaces that support prosperity, health, and positive energy.
          </p>
        </div>
      </section>

      {/* Services Slider */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Our <span className="text-mystic-gold">Vastu Services</span></h2>
          <p className="text-charcoal text-center max-w-2xl mx-auto mb-12">
            Discover how ancient architectural wisdom can transform your spaces for better energy flow and harmony.
          </p>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
            <VastuCardSlider services={services} />
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">How It <span className="text-mystic-gold">Works</span></h2>

          <div className="max-w-3xl mx-auto">
            {timelineSteps.map((step, index) => (
              <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 150}ms` }}>
                <TimelineStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-dusty-lavender/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Benefits of <span className="text-mystic-gold">Vastu Consultation</span></h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Improved Energy Flow
              </h3>
              <p className="text-cool-gray">Create spaces with balanced energy that feel instantly more peaceful and harmonious.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Enhanced Prosperity
              </h3>
              <p className="text-cool-gray">Remove energetic blocks to wealth and create an environment that supports abundance.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Better Relationships
              </h3>
              <p className="text-cool-gray">Optimize spaces for improved communication and harmonious family relationships.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Improved Health
              </h3>
              <p className="text-cool-gray">Create spaces that support physical and mental wellbeing through balanced energy.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Business Growth
              </h3>
              <p className="text-cool-gray">Optimize workspaces for creativity, productivity, and business success.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-mystic-gold mr-2" />
                Peace of Mind
              </h3>
              <p className="text-cool-gray">Feel confident that your space is optimized to support your goals and wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mystic-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bring Harmony to Your Space</h2>
          <Link to="/contact" target='_blank' className="px-8 py-3 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-colors inline-block">
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vastu;
