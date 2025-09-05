import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Heart, 
  ArrowLeft, 
  Eye, 
  Save, 
  Share2, 
  Download, 
  Edit3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  Users,
  Star,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface WebsiteData {
  name: string;
  type: 'church' | 'mosque' | 'synagogue';
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
  services: Array<{
    name: string;
    day: string;
    time: string;
    location: string;
  }>;
  aboutUs: string;
  mission: string;
  heroImage?: string;
  logo?: string;
}

const WebsiteBuilder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data - in real app this would come from the setup wizard
  const [websiteData] = useState<WebsiteData>({
    name: 'Moskee El Soum',
    type: 'mosque',
    tagline: 'We zijn er voor vrede',
    description: 'Een warme, liefdevolle gemeenschap waar iedereen welkom is om samen te groeien in geloof, hoop en liefde. Wij geloven in de kracht van gemeenschap en de transformerende liefde van Allah.',
    address: 'Kerkstraat 12\n1234 AB Amsterdam\nNederland',
    phone: '020-1234567',
    email: 'info@moskee-elsoum.nl',
    facebook: 'https://facebook.com/moskee-elsoum',
    instagram: 'https://instagram.com/moskee-elsoum',
    youtube: 'https://youtube.com/@moskee-elsoum',
    services: [
      { name: 'Vrijdag Gebed', day: 'Vrijdag', time: '13:00', location: 'Hoofdzaal' },
      { name: 'Maghrib Gebed', day: 'Dagelijks', time: '18:30', location: 'Gebedszaal' },
      { name: 'Fajr Gebed', day: 'Dagelijks', time: '05:30', location: 'Gebedszaal' }
    ],
    aboutUs: 'Onze moskee is een thuis voor alle moslims in Amsterdam en omgeving. Wij bieden een warme, gastvrije omgeving waar geloof, gemeenschap en persoonlijke groei samenkomen.',
    mission: 'Onze missie is om een liefdevolle, ondersteunende gemeenschap te zijn die mensen helpt groeien in hun geloof en positieve impact te maken in de wereld.',
    heroImage: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    logo: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  });

  // Faith-specific styling
  const getFaithStyling = (faith: string) => {
    switch (faith) {
      case 'church':
        return {
          primary: 'from-blue-600 via-indigo-700 to-purple-800',
          secondary: 'from-blue-50 to-indigo-100',
          accent: 'text-blue-700',
          icon: '⛪',
          symbol: '✝️',
          colors: {
            main: '#3B82F6',
            light: '#EFF6FF',
            dark: '#1E40AF'
          }
        };
      case 'mosque':
        return {
          primary: 'from-emerald-600 via-teal-700 to-green-800',
          secondary: 'from-emerald-50 to-teal-100',
          accent: 'text-emerald-700',
          icon: '🕌',
          symbol: '☪️',
          colors: {
            main: '#10B981',
            light: '#ECFDF5',
            dark: '#047857'
          }
        };
      case 'synagogue':
        return {
          primary: 'from-purple-600 via-violet-700 to-indigo-800',
          secondary: 'from-purple-50 to-violet-100',
          accent: 'text-purple-700',
          icon: '🕍',
          symbol: '✡️',
          colors: {
            main: '#8B5CF6',
            light: '#F3E8FF',
            dark: '#6D28D9'
          }
        };
      default:
        return {
          primary: 'from-amber-600 via-orange-700 to-red-800',
          secondary: 'from-amber-50 to-orange-100',
          accent: 'text-amber-700',
          icon: '🙏',
          symbol: '✨',
          colors: {
            main: '#F59E0B',
            light: '#FEF3C7',
            dark: '#D97706'
          }
        };
    }
  };

  const faithStyle = getFaithStyling(websiteData.type);

  if (!isPreviewMode) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/admin')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Terug naar Dashboard</span>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">Website Editor</h1>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setIsPreviewMode(true)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="h-4 w-4" />
                <span>Opslaan</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px] p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Editor</h2>
              <p className="text-gray-600">Editor functionaliteit komt binnenkort beschikbaar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Editor Controls */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <button
          onClick={() => setIsPreviewMode(false)}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 shadow-lg"
        >
          <Edit3 className="h-4 w-4" />
          <span>Bewerken</span>
        </button>
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Dashboard</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {websiteData.logo && (
                <img src={websiteData.logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
              )}
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{faithStyle.icon}</span>
                <span className="text-xl font-bold" style={{ color: faithStyle.colors.main }}>
                  {websiteData.name}
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors scroll-smooth">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors scroll-smooth">Over Ons</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors scroll-smooth">Diensten</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors scroll-smooth">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium scroll-smooth" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium scroll-smooth" onClick={() => setMobileMenuOpen(false)}>Over Ons</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium scroll-smooth" onClick={() => setMobileMenuOpen(false)}>Diensten</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium scroll-smooth" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={websiteData.heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${faithStyle.primary} opacity-60`}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl opacity-20 animate-pulse text-white">{faithStyle.symbol}</div>
          <div className="absolute top-40 right-20 text-3xl opacity-20 animate-bounce text-white">✨</div>
          <div className="absolute bottom-40 left-20 text-4xl opacity-20 animate-pulse text-white">🕊️</div>
          <div className="absolute bottom-20 right-10 text-2xl opacity-20 animate-bounce text-white">⭐</div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-pulse">{faithStyle.icon}</div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {websiteData.name}
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90 font-light">
            {websiteData.tagline}
          </p>
          
          <p className="text-lg sm:text-xl mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
            {websiteData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold text-lg transform hover:scale-105"
            >
              Bezoek Ons
            </button>
            <button 
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Meer Informatie
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{faithStyle.symbol}</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: faithStyle.colors.main }}>
              Over Onze Gemeenschap
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: faithStyle.colors.main }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Onze Verhaal</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {websiteData.aboutUs}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {websiteData.mission}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4" style={{ color: faithStyle.colors.main }}>
                  <Users className="h-12 w-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Gemeenschapsleden</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4" style={{ color: faithStyle.colors.main }}>
                  <Calendar className="h-12 w-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Jaar Ervaring</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4" style={{ color: faithStyle.colors.main }}>
                  <Heart className="h-12 w-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Vrijwilligers</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4" style={{ color: faithStyle.colors.main }}>
                  <Star className="h-12 w-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Programma's</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{faithStyle.icon}</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: faithStyle.colors.main }}>
              Diensten & Tijden
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: faithStyle.colors.main }}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sluit je aan bij onze gemeenschap voor gebed, aanbidding en fellowship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteData.services.map((service, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-opacity-20" style={{ '--tw-border-opacity': '0.2', borderColor: faithStyle.colors.main }}>
                <div className="text-center">
                  <div className="text-5xl mb-6 group-hover:animate-pulse">{faithStyle.symbol}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Calendar className="h-5 w-5" style={{ color: faithStyle.colors.main }} />
                      <span className="font-medium">{service.day}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="h-5 w-5" style={{ color: faithStyle.colors.main }} />
                      <span className="font-medium">{service.time}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <MapPin className="h-5 w-5" style={{ color: faithStyle.colors.main }} />
                      <span className="font-medium">{service.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-br ${faithStyle.primary} text-white relative overflow-hidden scroll-mt-20`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">{faithStyle.symbol}</div>
          <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce">✨</div>
          <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-pulse">🕊️</div>
          <div className="absolute bottom-20 right-10 text-3xl opacity-10 animate-bounce">⭐</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{faithStyle.icon}</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact & Locatie</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We verwelkomen je graag in onze gemeenschap. Neem contact met ons op!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adres</h3>
                  <p className="text-lg opacity-90 whitespace-pre-line">{websiteData.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefoon</h3>
                  <p className="text-lg opacity-90">{websiteData.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-lg opacity-90">{websiteData.email}</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-6">Volg Ons</h3>
                <div className="flex space-x-4">
                  {websiteData.facebook && (
                    <a href={websiteData.facebook} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                  )}
                  {websiteData.instagram && (
                    <a href={websiteData.instagram} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  )}
                  {websiteData.youtube && (
                    <a href={websiteData.youtube} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Jouw naam"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Jouw e-mailadres"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Jouw bericht"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">{faithStyle.icon}</span>
              <span className="text-2xl font-bold text-white">{websiteData.name}</span>
            </div>
            <p className="text-lg mb-4">{websiteData.tagline}</p>
            <div className="flex justify-center space-x-6 mb-8">
              {websiteData.facebook && (
                <a href={websiteData.facebook} className="hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {websiteData.instagram && (
                <a href={websiteData.instagram} className="hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {websiteData.youtube && (
                <a href={websiteData.youtube} className="hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              )}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p>&copy; 2025 {websiteData.name}. Alle rechten voorbehouden.</p>
              <p className="text-sm mt-2 opacity-70">Gemaakt met ❤️ door Believe Platform</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteBuilder;