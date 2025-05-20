
import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Calculator, FileText, Grid, Clock, Edit, Phone, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import NumerologyCardSlider from '@/components/NumerologyCardSlider';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-cool-gray mb-5">{description}</p>
      <Link to="/contact" target='_blank' rel="noopener noreferrer" className="btn-primary inline-block text-sm">
        Book Now
      </Link>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 transition-all duration-300 hover:bg-soft-cream/30 rounded-lg px-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-medium text-lg transition-colors duration-300 ${isOpen ? 'text-mystic-gold' : 'text-charcoal'}`}>{question}</span>
        <div className={`transition-all duration-300 transform ${isOpen ? 'bg-mystic-gold/10 text-mystic-gold rotate-180' : 'bg-gray-100 text-charcoal'} rounded-full p-1`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className="mt-4 text-cool-gray overflow-hidden transition-all duration-500 max-h-96">
          <p className="pb-2">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Numerology = () => {
  const services = [
    {
      title: "Personality Number Analysis",
      description: "Understand your core strengths, challenges, and life purpose through detailed birth number analysis.",
      icon: <Calendar size={28} />
    },
    {
      title: "Destiny Number Reading",
      description: "Discover where your life path is leading you and how to optimize your journey.",
      icon: <Calendar size={28} />
    },
    {
      title: "Grid Analysis (Lo-Shu)",
      description: "In-depth analysis of your energy grid to identify strengths and areas for improvement.",
      icon: <Calendar size={28} />
    },
    {
      title: "Dasha Calculation",
      description: "Period-wise analysis of favorable and challenging times in your journey of life.",
      icon: <Calendar size={28} />
    },
    {
      title: "Name Correction",
      description: "Optimize your name's vibration to align with your birth energy and life path.",
      icon: <Calendar size={28} />
    },
    {
      title: "Number Corrections",
      description: "Harmonize your mobile, bank account, car, and house numbers for positive energy.",
      icon: <Calendar size={28} />
    },
    {
      title: "Compatibility Checking",
      description: "Analyze relationship compatibility based on number vibrations and energy patterns.",
      icon: <Calendar size={28} />
    },
    {
      title: "Remedies",
      description: "Custom remedies to balance unfavorable numbers and enhance positive vibrations.",
      icon: <Calendar size={28} />
    },
  ];

  const faqs = [
    {
      question: "What is the difference between Vedic and Western numerology?",
      answer: "Vedic numerology is rooted in ancient Indian traditions and focuses on the vibration of sounds and names, while Western numerology emphasizes birth dates and life paths. Our practice primarily uses Vedic methods with some complementary Western techniques for a holistic approach."
    },
    {
      question: "How can changing my name actually impact my life?",
      answer: "Names carry vibrations that interact with your birth energy. When they're harmonized, this creates a positive resonance that can remove obstacles and open new opportunities. We've documented numerous cases where name corrections have led to significant positive life changes."
    },
    {
      question: "Is online consultation as effective as in-person?",
      answer: "Absolutely. The calculations and analysis are identical whether done in person or remotely. We've successfully conducted thousands of online consultations with equal effectiveness to in-person sessions."
    },
    {
      question: "How long does it take to see results after numerological changes?",
      answer: "Most clients report noticing subtle changes within 1-3 months, with more significant shifts occurring over 6-12 months. However, this varies depending on individual circumstances and the specific changes implemented."
    },
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section with Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-dusty-lavender/30 to-celestial-blue/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in opacity-0">
            Personalized Vedic & Lo-Shu<br />
            <span className="text-mystic-gold">Numerology Services</span>
          </h1>
          <p className="text-lg text-cool-gray max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Empower your life through numbers. Discover your true potential and align with your destiny.
          </p>
        </div>
      </section>

      {/* Services Section with Card Slider */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our <span className="text-mystic-gold">Numerology Services</span></h2>
          <p className="text-charcoal text-center max-w-2xl mx-auto mb-12">
            Discover how the ancient science of numbers can bring clarity, harmony, and positive transformation to your life.
          </p>

          <NumerologyCardSlider
            services={[
              {
                title: "Personality Number Analysis",
                description: "Understand your core strengths, challenges, and life purpose through detailed birth number analysis.",
                icon: <Calculator size={28} />
              },
              {
                title: "Destiny Number Reading",
                description: "Discover where your life path is leading you and how to optimize your journey.",
                icon: <FileText size={28} />
              },
              {
                title: "Grid Analysis (Lo-Shu)",
                description: "In-depth analysis of your energy grid to identify strengths and areas for improvement.",
                icon: <Grid size={28} />
              },
              {
                title: "Dasha Calculation",
                description: "Period-wise analysis of favorable and challenging times in your journey of life.",
                icon: <Clock size={28} />
              },
              {
                title: "Name Correction",
                description: "Optimize your name's vibration to align with your birth energy and life path.",
                icon: <Edit size={28} />
              },
              {
                title: "Number Corrections",
                description: "Harmonize your mobile, bank account, car, and house numbers for positive energy.",
                icon: <Phone size={28} />
              },
              {
                title: "Compatibility Checking",
                description: "Analyze relationship compatibility based on number vibrations and energy patterns.",
                icon: <Users size={28} />
              },
              {
                title: "Remedies",
                description: "Custom remedies to balance unfavorable numbers and enhance positive vibrations.",
                icon: <Shield size={28} />
              }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked <span className="text-mystic-gold">Questions</span></h2>
          <p className="text-charcoal text-center max-w-2xl mx-auto mb-12">
            Get answers to common questions about numerology and our services
          </p>

          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-mystic-gold to-mystic-gold/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Your Numbers Corrected?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Our expert numerologists can help you align your numbers with your life's purpose and energy.
          </p>
          <Link
            to="/contact"
            target='_blank'
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-mystic-gold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium"
          >
            Contact Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Numerology;