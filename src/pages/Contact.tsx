
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    whatsApp: false
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      whatsApp: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: 'Message sent successfully! We will get back to you soon.',
        type: 'success'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        whatsApp: false
      });

      setTimeout(() => {
        setFormStatus({
          message: '',
          type: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-celestial-blue/30 to-dusty-lavender/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in opacity-0">
            Let's <span className="text-mystic-gold">Connect!</span>
          </h1>
          <p className="text-lg text-cool-gray max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Have questions or ready to transform your life with ancient wisdom? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left Column - Contact Info */}
            <div className="md:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: '150ms' }}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-cool-gray">+91 9239223155</p>
                      <p className="text-cool-gray">Mon-Sat, 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-cool-gray">indulekha.cosmicconnections@gmail.com</p>
                      <p className="text-cool-gray">Usually respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-mystic-gold mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-cool-gray">New Delhi, India</p>
                      <p className="text-cool-gray">Online consultations available worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-medium mb-4">Connect Directly</h3>

                  <div className="flex flex-col space-y-4">
                    <a
                      href="https://wa.me/919239223155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                      WhatsApp
                    </a>

                    <div className="flex space-x-2">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 border border-mystic-gold text-mystic-gold rounded-lg hover:bg-mystic-gold hover:text-white transition-colors inline-flex items-center justify-center"
                      >
                        <MapPin size={18} className="mr-2" />
                        Directions
                      </a>

                      <a
                        href="https://maps.app.goo.gl/Bqj1cV1Y473NVddg8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        View Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-3 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

                {formStatus.message && (
                  <div className={`p-4 rounded-lg mb-6 ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cool-gray mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cool-gray mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cool-gray mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                      placeholder="Enter your phone number"
                      required
                    />
                    <div className="mt-2 flex items-center">
                      <input
                        type="checkbox"
                        id="whatsApp"
                        name="whatsApp"
                        checked={formData.whatsApp}
                        onChange={handleCheckbox}
                        className="h-4 w-4 text-mystic-gold border-gray-300 rounded focus:ring-mystic-gold"
                      />
                      <label htmlFor="whatsApp" className="ml-2 block text-sm text-cool-gray">
                        This is also my WhatsApp number
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cool-gray mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                      placeholder="Enter your queries"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section pb-16">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=new%20delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                title="Google Maps - Our Location"
                className="shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;