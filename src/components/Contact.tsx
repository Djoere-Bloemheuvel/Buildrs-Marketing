import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-premium-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Laten we <span className="text-gradient-premium">praten</span>
          </h1>
          <p className="text-premium-silver/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Ontdek hoe AI de toekomst van uw bedrijf kan transformeren. 
            Start met een vrijblijvende verkenning.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-premium-gray/20 to-premium-black/60 border border-premium-silver/20 backdrop-blur-md rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Start uw AI-verkenning</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-premium-silver/90 text-sm font-medium mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-premium-black/50 border border-premium-silver/30 rounded-xl text-white placeholder-premium-silver/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Uw volledige naam"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-premium-silver/90 text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-premium-black/50 border border-premium-silver/30 rounded-xl text-white placeholder-premium-silver/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="uw.email@bedrijf.nl"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-premium-silver/90 text-sm font-medium mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-premium-black/50 border border-premium-silver/30 rounded-xl text-white placeholder-premium-silver/50 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-premium-silver/90 text-sm font-medium mb-2">
                    Vertel ons over uw uitdaging
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-premium-black/50 border border-premium-silver/30 rounded-xl text-white placeholder-premium-silver/50 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Beschrijf uw huidige processen en waar u AI zou willen inzetten..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Plan een AI-verkenning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Waarom kiezen voor Buildrs?</h3>
              <div className="space-y-4 text-premium-silver/90">
                <p>✓ Geen sales pitch - wel concrete inzichten</p>
                <p>✓ Maatwerkvoorstel binnen 48 uur</p>
                <p>✓ Ervaring met 50+ succesvolle AI-implementaties</p>
                <p>✓ 100% focus op uw ROI</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact informatie</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-premium-silver/90">info@buildrs.ai</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-premium-silver/90">+31 (0)20 123 4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-premium-silver/90">Amsterdam, Nederland</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-premium-silver/90">Reactie binnen 24 uur</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-premium-gray/10 to-premium-black/60 border border-premium-silver/20 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">AI-verkenning van 60 minuten</h4>
              <p className="text-premium-silver/80 text-sm leading-relaxed">
                In een strategische sessie van 60 minuten analyseren we uw processen, 
                identificeren we AI-kansen en presenteren we een concreet implementatieplan. 
                Investering: uw tijd. ROI: onbetaalbaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;