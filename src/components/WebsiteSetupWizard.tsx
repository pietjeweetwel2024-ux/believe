import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Palette, 
  Type, 
  Image, 
  Globe,
  Sparkles,
  Crown,
  Eye,
  Edit3,
  Save,
  Moon,
  Sun,
  Star,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Upload,
  X,
  Loader
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface TemplateData {
  id: string;
  name: string;
  faith: 'church' | 'mosque' | 'synagogue';
  style: string;
  preview: string;
  description: string;
  features: string[];
  rating: number;
  downloads: number;
}

interface WebsiteData {
  template: TemplateData | null;
  organizationName: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  heroImage: string;
  logo: string;
  galleryImages: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  services: Array<{
    name: string;
    day: string;
    time: string;
    location: string;
  }>;
}

const WebsiteSetupWizard: React.FC = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiStyle, setAiStyle] = useState('photorealistic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [currentAIType, setCurrentAIType] = useState<'hero' | 'logo' | 'gallery'>('hero');

  const [websiteData, setWebsiteData] = useState<WebsiteData>({
    template: null,
    organizationName: 'Mijn Geloofsgemeenschap',
    tagline: 'Geloof, Hoop en Liefde',
    description: 'Een warme, liefdevolle gemeenschap waar iedereen welkom is om samen te groeien in geloof.',
    address: 'Kerkstraat 12\n1234 AB Amsterdam\nNederland',
    phone: '020-1234567',
    email: 'info@mijngemeenschap.nl',
    heroImage: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    logo: '',
    galleryImages: [],
    colors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      accent: '#F59E0B'
    },
    services: [
      { name: 'Zondagsdienst', day: 'Zondag', time: '10:00', location: 'Hoofdzaal' },
      { name: 'Bijbelstudie', day: 'Woensdag', time: '19:00', location: 'Studiezaal' },
      { name: 'Jeugdgroep', day: 'Vrijdag', time: '18:00', location: 'Jeugdruimte' }
    ]
  });

  const steps = [
    'Template Kiezen',
    'Organisatie Info',
    "Foto's & Media",
    'Kleuren & Stijl',
    'Content & Services',
    'Preview & Publiceren'
  ];

  const templates: TemplateData[] = [
    {
      id: 'modern-church',
      name: 'Modern Kerk',
      faith: 'church',
      style: 'modern',
      preview: 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700',
      description: 'Moderne, schone design voor hedendaagse kerken',
      features: ['Responsive Design', 'SEO Geoptimaliseerd', 'Donatie Integratie', 'Event Management'],
      rating: 4.9,
      downloads: 1247
    },
    {
      id: 'classic-church',
      name: 'Klassieke Kerk',
      faith: 'church',
      style: 'classic',
      preview: 'bg-gradient-to-br from-amber-600 via-orange-600 to-red-700',
      description: 'Traditionele, elegante stijl voor klassieke gemeenschappen',
      features: ['Traditioneel Design', 'Gouden Accenten', 'Klassieke Typografie', 'Liturgie Integratie'],
      rating: 4.8,
      downloads: 892
    },
    {
      id: 'peaceful-mosque',
      name: 'Vredige Moskee',
      faith: 'mosque',
      style: 'peaceful',
      preview: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700',
      description: 'Serene en vredige design voor islamitische gemeenschappen',
      features: ['Arabische Kalligrafie', 'Geometrische Patronen', 'Gebedskalender', 'Qibla Richting'],
      rating: 4.9,
      downloads: 756
    },
    {
      id: 'elegant-synagogue',
      name: 'Elegante Synagoge',
      faith: 'synagogue',
      style: 'elegant',
      preview: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
      description: 'Elegante en respectvolle design voor joodse gemeenschappen',
      features: ['Hebreeuwse Ondersteuning', 'Sabbat Kalender', 'Torah Secties', 'Joodse Symbolen'],
      rating: 4.7,
      downloads: 543
    },
    {
      id: 'contemporary-church',
      name: 'Hedendaagse Kerk',
      faith: 'church',
      style: 'contemporary',
      preview: 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700',
      description: 'Frisse, hedendaagse look voor jonge gemeenschappen',
      features: ['Video Integratie', 'Social Media', 'Live Streaming', 'Interactieve Elementen'],
      rating: 4.8,
      downloads: 1089
    },
    {
      id: 'traditional-mosque',
      name: 'Traditionele Moskee',
      faith: 'mosque',
      style: 'traditional',
      preview: 'bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800',
      description: 'Authentieke, traditionele stijl met islamitische kunst',
      features: ['Islamitische Kunst', 'Qibla Richting', 'Ramadan Kalender', 'Hadith Secties'],
      rating: 4.9,
      downloads: 634
    }
  ];

  const colorSchemes = [
    { name: 'Blauw', primary: '#3B82F6', secondary: '#10B981', accent: '#F59E0B' },
    { name: 'Groen', primary: '#10B981', secondary: '#3B82F6', accent: '#F59E0B' },
    { name: 'Paars', primary: '#8B5CF6', secondary: '#EC4899', accent: '#F59E0B' },
    { name: 'Rood', primary: '#EF4444', secondary: '#F97316', accent: '#F59E0B' },
    { name: 'Teal', primary: '#14B8A6', secondary: '#10B981', accent: '#F59E0B' },
    { name: 'Indigo', primary: '#6366F1', secondary: '#8B5CF6', accent: '#F59E0B' }
  ];

  const handleAIGenerate = async (type: 'hero' | 'logo' | 'gallery') => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockImages = [
        'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/161154/church-interior-architecture-building-161154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
      ];
      
      const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
      
      if (type === 'hero') {
        setWebsiteData(prev => ({ ...prev, heroImage: randomImage }));
      } else if (type === 'logo') {
        setWebsiteData(prev => ({ ...prev, logo: randomImage }));
      } else if (type === 'gallery') {
        setWebsiteData(prev => ({ 
          ...prev, 
          galleryImages: [...prev.galleryImages, randomImage] 
        }));
      }
      
      setIsGenerating(false);
      setShowAIGenerator(false);
      setAiPrompt('');
      setAiStyle('fotorealistisch');
    }, 2000);
  };

  const openAIGenerator = (type: 'hero' | 'logo' | 'gallery') => {
    setCurrentAIType(type);
    setShowAIGenerator(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete setup and navigate to website builder
      navigate('/builder');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addService = () => {
    setWebsiteData(prev => ({
      ...prev,
      services: [...prev.services, { name: '', day: '', time: '', location: '' }]
    }));
  };

  const updateService = (index: number, field: string, value: string) => {
    setWebsiteData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => 
        i === index ? { ...service, [field]: value } : service
      )
    }));
  };

  const removeService = (index: number) => {
    setWebsiteData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Template Selection
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-300 dark:to-orange-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <Globe className="h-16 w-16 text-amber-600 dark:text-amber-400 relative z-10" />
                </div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Kies Je Template
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Selecteer een professioneel ontworpen template dat past bij je geloofsgemeenschap
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className={`group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    websiteData.template?.id === template.id 
                      ? 'border-amber-500 dark:border-amber-400 ring-2 ring-amber-200 dark:ring-amber-600' 
                      : 'border-amber-200/50 dark:border-slate-600/50 hover:border-amber-300 dark:hover:border-amber-500'
                  }`}
                  onClick={() => setWebsiteData(prev => ({ ...prev, template }))}
                >
                  <div className={`h-48 ${template.preview} relative overflow-hidden rounded-t-2xl`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="px-2 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>{template.rating}</span>
                      </span>
                      <span className="px-2 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full">
                        {template.downloads} downloads
                      </span>
                    </div>
                    {websiteData.template?.id === template.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-3 bg-amber-500 text-white rounded-full shadow-2xl">
                          <Check className="h-6 w-6" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{template.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        template.faith === 'church' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        template.faith === 'mosque' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
                        {template.faith === 'church' ? 'Kerk' : 
                         template.faith === 'mosque' ? 'Moskee' : 'Synagoge'}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{template.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg">
                          {feature}
                        </span>
                      ))}
                      {template.features.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg">
                          +{template.features.length - 3} meer
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 1: // Organization Info
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Crown className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Organisatie Informatie
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Vertel ons over je gemeenschap zodat we je website kunnen personaliseren
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Organisatie Naam
                  </label>
                  <input
                    type="text"
                    value={websiteData.organizationName}
                    onChange={(e) => setWebsiteData(prev => ({ ...prev, organizationName: e.target.value }))}
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                    placeholder="Bijv. Genadekerk Amsterdam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={websiteData.tagline}
                    onChange={(e) => setWebsiteData(prev => ({ ...prev, tagline: e.target.value }))}
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                    placeholder="Bijv. Geloof, Hoop en Liefde"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Beschrijving
                </label>
                <textarea
                  value={websiteData.description}
                  onChange={(e) => setWebsiteData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300 resize-none"
                  placeholder="Beschrijf je gemeenschap en wat jullie uniek maakt..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    value={websiteData.phone}
                    onChange={(e) => setWebsiteData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                    placeholder="020-1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={websiteData.email}
                    onChange={(e) => setWebsiteData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                    placeholder="info@mijngemeenschap.nl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Adres
                </label>
                <textarea
                  value={websiteData.address}
                  onChange={(e) => setWebsiteData(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300 resize-none"
                  placeholder="Kerkstraat 12&#10;1234 AB Amsterdam&#10;Nederland"
                />
              </div>
            </div>
          </div>
        );

      case 2: // Photos & Media
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Foto's & Media
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Upload je eigen foto's of laat onze AI prachtige afbeeldingen genereren
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Hero Background */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Hero Achtergrond</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    {websiteData.heroImage ? (
                      <div className="relative group">
                        <img 
                          src={websiteData.heroImage} 
                          alt="Hero" 
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                          <button 
                            onClick={() => setWebsiteData(prev => ({ ...prev, heroImage: '' }))}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-48 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-700">
                        <div className="text-center">
                          <Image className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-500 dark:text-slate-400">Geen achtergrond geselecteerd</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center space-x-2 px-6 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300">
                      <Upload className="h-5 w-5" />
                      <span>Upload Foto</span>
                    </button>
                    <button 
                      onClick={() => openAIGenerator('hero')}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                    >
                      <Sparkles className="h-5 w-5" />
                      <span>AI Genereren</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Logo</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    {websiteData.logo ? (
                      <div className="relative group">
                        <img 
                          src={websiteData.logo} 
                          alt="Logo" 
                          className="w-32 h-32 object-cover rounded-xl mx-auto border-4 border-amber-200 dark:border-amber-600"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                          <button 
                            onClick={() => setWebsiteData(prev => ({ ...prev, logo: '' }))}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-32 h-32 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-700 mx-auto">
                        <div className="text-center">
                          <Crown className="h-8 w-8 text-slate-400 mx-auto mb-1" />
                          <p className="text-xs text-slate-500 dark:text-slate-400">Geen logo</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center space-x-2 px-6 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300">
                      <Upload className="h-5 w-5" />
                      <span>Upload Logo</span>
                    </button>
                    <button 
                      onClick={() => openAIGenerator('logo')}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                    >
                      <Sparkles className="h-5 w-5" />
                      <span>AI Genereren</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Foto Galerij</h3>
                <div className="space-y-6">
                  {websiteData.galleryImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {websiteData.galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image} 
                            alt={`Gallery ${index + 1}`} 
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <button 
                              onClick={() => setWebsiteData(prev => ({ 
                                ...prev, 
                                galleryImages: prev.galleryImages.filter((_, i) => i !== index) 
                              }))}
                              className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300">
                      <Upload className="h-5 w-5" />
                      <span>Upload Foto's</span>
                    </button>
                    <button 
                      onClick={() => openAIGenerator('gallery')}
                      className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                    >
                      <Sparkles className="h-5 w-5" />
                      <span>AI Genereren</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Colors & Style
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Palette className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Kleuren & Stijl
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Kies kleuren die de persoonlijkheid van je gemeenschap weerspiegelen
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorSchemes.map((scheme) => (
                  <div 
                    key={scheme.name}
                    className={`group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      websiteData.colors.primary === scheme.primary 
                        ? 'border-amber-500 dark:border-amber-400 ring-2 ring-amber-200 dark:ring-amber-600' 
                        : 'border-amber-200/50 dark:border-slate-600/50 hover:border-amber-300 dark:hover:border-amber-500'
                    }`}
                    onClick={() => setWebsiteData(prev => ({ ...prev, colors: scheme }))}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{scheme.name}</h3>
                      {websiteData.colors.primary === scheme.primary && (
                        <div className="p-1 bg-amber-500 text-white rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-lg shadow-md"
                          style={{ backgroundColor: scheme.primary }}
                        ></div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Primair</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">{scheme.primary}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-lg shadow-md"
                          style={{ backgroundColor: scheme.secondary }}
                        ></div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Secundair</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">{scheme.secondary}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded-lg shadow-md"
                          style={{ backgroundColor: scheme.accent }}
                        ></div>
                        <div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Accent</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">{scheme.accent}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4: // Content & Services
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Calendar className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Diensten & Activiteiten
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Voeg je diensten en activiteiten toe zodat bezoekers weten wanneer ze welkom zijn
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {websiteData.services.map((service, index) => (
                <div key={index} className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Naam
                      </label>
                      <input
                        type="text"
                        value={service.name}
                        onChange={(e) => updateService(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                        placeholder="Bijv. Zondagsdienst"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Dag
                      </label>
                      <input
                        type="text"
                        value={service.day}
                        onChange={(e) => updateService(index, 'day', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                        placeholder="Bijv. Zondag"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Tijd
                      </label>
                      <input
                        type="text"
                        value={service.time}
                        onChange={(e) => updateService(index, 'time', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                        placeholder="Bijv. 10:00"
                      />
                    </div>
                    <div className="flex items-end space-x-2">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Locatie
                        </label>
                        <input
                          type="text"
                          value={service.location}
                          onChange={(e) => updateService(index, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                          placeholder="Bijv. Hoofdzaal"
                        />
                      </div>
                      {websiteData.services.length > 1 && (
                        <button
                          onClick={() => removeService(index)}
                          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addService}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" />
                <span>Dienst Toevoegen</span>
              </button>
            </div>
          </div>
        );

      case 5: // Preview & Publish
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Eye className="h-16 w-16 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                Preview & Publiceren
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Bekijk je website en publiceer wanneer je tevreden bent
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Browser Preview */}
              <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-t-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-600 rounded-lg px-4 py-2 text-sm text-slate-600 dark:text-slate-300 flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>https://{websiteData.organizationName.toLowerCase().replace(/\s+/g, '-')}.believe.com</span>
                  </div>
                </div>
              </div>

              {/* Website Preview */}
              <div className="bg-white dark:bg-slate-800 rounded-b-2xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
                {/* Header */}
                <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {websiteData.logo && (
                        <img src={websiteData.logo} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                      )}
                      <span className="text-xl font-bold" style={{ color: websiteData.colors.primary }}>
                        {websiteData.organizationName}
                      </span>
                    </div>
                    <div className="hidden md:flex space-x-6 text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Home</span>
                      <span className="text-slate-600 dark:text-slate-400">Over Ons</span>
                      <span className="text-slate-600 dark:text-slate-400">Diensten</span>
                      <span className="text-slate-600 dark:text-slate-400">Contact</span>
                    </div>
                  </div>
                </div>

                {/* Hero Section */}
                <div 
                  className="relative h-64 flex items-center justify-center text-white"
                  style={{
                    backgroundImage: websiteData.heroImage ? `url(${websiteData.heroImage})` : 'none',
                    backgroundColor: websiteData.colors.primary,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative text-center px-4">
                    <h1 className="text-3xl font-bold mb-2">{websiteData.organizationName}</h1>
                    <p className="text-lg opacity-90">{websiteData.tagline}</p>
                  </div>
                </div>

                {/* Services Preview */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-center mb-6" style={{ color: websiteData.colors.primary }}>
                    Onze Diensten
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {websiteData.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">{service.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{service.day} om {service.time}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{service.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Publish Summary */}
              <div className="mt-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Publicatie Samenvatting</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Website Details</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Template: {websiteData.template?.name || 'Geen template geselecteerd'}</li>
                      <li>• Organisatie: {websiteData.organizationName}</li>
                      <li>• Diensten: {websiteData.services.length} geconfigureerd</li>
                      <li>• Kleuren: {colorSchemes.find(c => c.primary === websiteData.colors.primary)?.name || 'Custom'}</li>
                      <li>• Hero afbeelding: {websiteData.heroImage ? 'Ja' : 'Nee'}</li>
                      <li>• Logo: {websiteData.logo ? 'Ja' : 'Nee'}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Na Publicatie</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>• Website live op subdomain</li>
                      <li>• SSL certificaat automatisch</li>
                      <li>• SEO geoptimaliseerd</li>
                      <li>• Mobiel responsive</li>
                      <li>• Analytics ingeschakeld</li>
                      <li>• Backup systeem actief</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      {/* Floating spiritual elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-5 dark:opacity-10 animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-3xl opacity-5 dark:opacity-10 animate-bounce">🕊️</div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-5 dark:opacity-10 animate-pulse">🙏</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-5 dark:opacity-10 animate-bounce">⭐</div>
      </div>

      {/* AI Image Generator Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200/50 dark:border-slate-600/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <Sparkles className="h-10 w-10 text-amber-600 dark:text-amber-400 relative z-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent">
                      AI Afbeelding Generator
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">Beschrijf de afbeelding die je wilt genereren</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAIModal(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Prompt Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Beschrijf je gewenste afbeelding
                  </label>
                  <textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Bijvoorbeeld: Een prachtige kerk met gouden zonlicht door glas-in-lood ramen, vredige sfeer, warme kleuren..."
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300 resize-none"
                    rows={4}
                  />
                </div>

                {/* Style Selection */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Kies een stijl
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'photorealistic', name: 'Fotorealistisch', desc: 'Natuurlijke, realistische foto\'s' },
                      { id: 'artistic', name: 'Artistiek', desc: 'Creatieve, kunstzinnige stijl' },
                      { id: 'modern', name: 'Modern', desc: 'Strak, hedendaags design' },
                      { id: 'classic', name: 'Klassiek', desc: 'Traditioneel, tijdloos' }
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setAiStyle(style.id)}
                        className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                          aiStyle === style.id
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                            : 'border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-500'
                        }`}
                      >
                        <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          {style.name}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {style.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowAIModal(false)}
                    className="flex-1 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 font-semibold"
                  >
                    Annuleren
                  </button>
                  <button
                    onClick={() => {
                      if (!aiPrompt.trim()) return;
                      
                      setIsGenerating(true);
                      
                      // Simulate AI generation delay
                      setTimeout(() => {
                        // Generate a mock image URL based on the prompt and style
                        const mockImageUrl = `https://images.pexels.com/photos/${Math.floor(Math.random() * 1000000)}/pexels-photo-${Math.floor(Math.random() * 1000000)}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`;
                        
                        // Add the generated image to the gallery
                        setWebsiteData(prev => ({
                          ...prev,
                          galleryImages: [...prev.galleryImages, mockImageUrl]
                        }));
                        
                        setIsGenerating(false);
                        setShowAIModal(false);
                        setAiPrompt('');
                      }, 3000);
                    }}
                    disabled={!aiPrompt.trim() || isGenerating}
                    className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Genereren...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" />
                        <span>Genereer Afbeelding</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Info */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-700">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                        AI Tips voor betere resultaten:
                      </h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• Wees specifiek over kleuren, sfeer en stijl</li>
                        <li>• Vermeld het type ruimte (kerk, moskee, synagoge)</li>
                        <li>• Beschrijf de gewenste emotie of gevoel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-amber-200/50 dark:border-purple-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <a 
                href="/builder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
              >
                <Eye className="h-4 w-4" />
                <span>Direct Link</span>
              </a>
              <button 
                onClick={() => navigate('/admin')}
                className="flex items-center space-x-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Terug naar Dashboard</span>
              </button>
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                    Believe
                  </span>
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Website Setup</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-amber-200/30 dark:border-purple-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                      : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-xs mt-2 font-medium transition-colors ${
                    index <= currentStep 
                      ? 'text-amber-700 dark:text-amber-300' 
                      : 'text-slate-500 dark:text-slate-500'
                  }`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${
                    index < currentStep 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-slate-200 dark:bg-slate-600'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[600px]">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-amber-200/50 dark:border-purple-700/50">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-300 dark:disabled:hover:border-slate-600 disabled:hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Vorige</span>
          </button>
          
          <div className="text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Stap {currentStep + 1} van {steps.length}
            </p>
          </div>
          
          <button
            onClick={handleNext}
            disabled={currentStep === 0 && !websiteData.template}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-amber-500 disabled:hover:to-orange-500 font-semibold"
          >
            <span>{currentStep === steps.length - 1 ? 'Website Publiceren' : 'Volgende'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* AI Generator Modal */}
      {showAIGenerator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-200/50 dark:border-slate-600/50 max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">AI Generator</h3>
              </div>
              <button
                onClick={() => setShowAIGenerator(false)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Beschrijf wat je wilt genereren
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 resize-none"
                  placeholder={
                    currentAIType === 'hero' ? 'Bijv. Een prachtige kerk bij zonsondergang met gouden licht en vredige sfeer' :
                    currentAIType === 'logo' ? 'Bijv. Een elegant logo met een kruis en de naam van onze kerk in gouden letters' :
                    'Bijv. Foto van onze gemeenschap tijdens een gezellige bijeenkomst'
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Stijl
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['fotorealistisch', 'artistiek', 'modern', 'klassiek'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setAiStyle(style)}
                      className={`p-3 border rounded-xl text-sm font-medium transition-all ${
                        aiStyle === style
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                          : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-500'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleAIGenerate(currentAIType)}
                disabled={!aiPrompt.trim() || isGenerating}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Genereren...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Genereer</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Beautiful Church Website Preview */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-200/50 dark:border-slate-600/50 overflow-hidden max-w-sm">
          <div className="flex items-center justify-between p-4 border-b border-amber-200/50 dark:border-slate-600/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⛪</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Website Preview</h3>
            </div>
            <button
              onClick={() => window.open('/builder', '_blank')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              <span>View</span>
            </button>
          </div>
          
          {/* Beautiful Church Website Preview */}
          <div className="h-96 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
            {/* Stained Glass Effect Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl"></div>
              <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl"></div>
            </div>
            
            {/* Church Silhouette */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="120" viewBox="0 0 200 120" className="text-black/30">
                {/* Church Building */}
                <rect x="60" y="60" width="80" height="60" fill="currentColor" />
                {/* Church Roof */}
                <polygon points="50,60 100,30 150,60" fill="currentColor" />
                {/* Bell Tower */}
                <rect x="85" y="20" width="30" height="40" fill="currentColor" />
                {/* Tower Roof */}
                <polygon points="80,20 100,5 120,20" fill="currentColor" />
                {/* Cross */}
                <rect x="98" y="0" width="4" height="15" fill="currentColor" />
                <rect x="93" y="5" width="14" height="4" fill="currentColor" />
                {/* Windows */}
                <rect x="70" y="75" width="12" height="20" fill="rgba(255,255,255,0.3)" rx="6" />
                <rect x="118" y="75" width="12" height="20" fill="rgba(255,255,255,0.3)" rx="6" />
                {/* Door */}
                <rect x="92" y="85" width="16" height="35" fill="rgba(139,69,19,0.8)" rx="8" />
              </svg>
            </div>
            
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⛪</span>
                </div>
                <span className="font-bold text-slate-800 text-lg">Genadekerk Amsterdam</span>
              </div>
              <div className="flex space-x-6 text-slate-700 text-sm font-medium">
                <span className="hover:text-blue-600 cursor-pointer">Home</span>
                <span className="hover:text-blue-600 cursor-pointer">Over Ons</span>
                <span className="hover:text-blue-600 cursor-pointer">Diensten</span>
                <span className="hover:text-blue-600 cursor-pointer">Contact</span>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8 pt-20">
              <div className="mb-6">
                <div className="text-6xl mb-4 animate-pulse">✝️</div>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Welkom in Gods Huis
              </h1>
              <p className="text-xl opacity-90 mb-2 font-light">Genadekerk Amsterdam</p>
              <p className="text-lg opacity-80 mb-8 max-w-md mx-auto leading-relaxed">
                "Want waar twee of drie vergaderd zijn in mijn naam, daar ben ik in hun midden" - Mattheüs 18:20
              </p>
              <div className="flex space-x-4 justify-center">
                <div className="px-6 py-3 bg-white/90 text-slate-800 rounded-full font-semibold shadow-lg hover:bg-white transition-all cursor-pointer">
                  Bezoek Ons
                </div>
                <div className="px-6 py-3 border-2 border-white/80 rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer">
                  Diensten
                </div>
              </div>
              
              {/* Service Times Preview */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-white/20">
                <div className="text-slate-800 text-center">
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Onze Diensten</h3>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">📅</span>
                      <span className="font-medium">Zondag 10:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">📖</span>
                      <span className="font-medium">Bijbelstudie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">🙏</span>
                      <span className="font-medium">Gebed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-16 left-8 text-white/20 text-2xl animate-pulse">🕊️</div>
              <div className="absolute top-24 right-12 text-white/20 text-xl animate-bounce">⭐</div>
              <div className="absolute bottom-32 left-12 text-white/20 text-lg animate-pulse">🌟</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSetupWizard;