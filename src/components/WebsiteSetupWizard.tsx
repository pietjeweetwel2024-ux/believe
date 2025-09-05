import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Palette, Type, Image, Check, ArrowRight, ArrowLeft, Globe, Eye, Save, Settings, Layout, Brush, Wand2, Sparkles, Crown, Moon, Sun } from 'lucide-react';
import { useOrganization } from '../contexts/OrganizationContext';
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
  design: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  heroImage?: string;
  logo?: string;
}

const WebsiteSetupWizard: React.FC = () => {
  const navigate = useNavigate();
  const { setOrganization } = useOrganization();
  const { isDark, toggleTheme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [websiteData, setWebsiteData] = useState<WebsiteData>({
    name: '',
    type: 'church',
    tagline: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    facebook: '',
    instagram: '',
    youtube: '',
    services: [
      { name: '', day: '', time: '', location: '' }
    ],
    aboutUs: '',
    mission: '',
    design: 'modern',
    colors: {
      primary: '#2563EB',
      secondary: '#0891B2',
      accent: '#F59E0B'
    }
  });

  const steps = [
    'Basis Informatie',
    'Contact & Locatie',
    'Diensten & Tijden',
    'Over Ons',
    'Design Keuze',
    'Kleuren Aanpassen',
    'Afronding'
  ];

  const designs = [
    { 
      id: 'modern', 
      name: 'Modern', 
      description: 'Strak en eigentijds design',
      preview: 'bg-gradient-to-br from-blue-500 to-purple-600',
      features: ['Minimalistisch', 'Responsive', 'Snelle laadtijd']
    },
    { 
      id: 'classic', 
      name: 'Klassiek', 
      description: 'Traditioneel en tijdloos',
      preview: 'bg-gradient-to-br from-gray-600 to-gray-800',
      features: ['Elegant', 'Professioneel', 'Vertrouwd']
    },
    { 
      id: 'warm', 
      name: 'Warm', 
      description: 'Uitnodigend en gezellig',
      preview: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: ['Vriendelijk', 'Toegankelijk', 'Gemeenschapsgericht']
    },
    { 
      id: 'nature', 
      name: 'Natuur', 
      description: 'Rustig en natuurlijk',
      preview: 'bg-gradient-to-br from-green-500 to-teal-600',
      features: ['Sereen', 'Organisch', 'Rustgevend']
    },
    { 
      id: 'elegant', 
      name: 'Elegant', 
      description: 'Verfijnd en stijlvol',
      preview: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: ['Luxueus', 'Sophisticated', 'Artistiek']
    },
    { 
      id: 'minimal', 
      name: 'Minimaal', 
      description: 'Eenvoudig en clean',
      preview: 'bg-gradient-to-br from-gray-400 to-gray-600',
      features: ['Simpel', 'Focus op content', 'Overzichtelijk']
    }
  ];

  const colorSchemes = [
    { name: 'Blauw', primary: '#2563EB', secondary: '#0891B2', accent: '#F59E0B', preview: 'from-blue-500 to-blue-700' },
    { name: 'Groen', primary: '#059669', secondary: '#0891B2', accent: '#F59E0B', preview: 'from-green-500 to-green-700' },
    { name: 'Paars', primary: '#7C3AED', secondary: '#EC4899', accent: '#F59E0B', preview: 'from-purple-500 to-purple-700' },
    { name: 'Rood', primary: '#DC2626', secondary: '#EA580C', accent: '#F59E0B', preview: 'from-red-500 to-red-700' },
    { name: 'Teal', primary: '#0891B2', secondary: '#059669', accent: '#F59E0B', preview: 'from-teal-500 to-teal-700' },
    { name: 'Indigo', primary: '#4F46E5', secondary: '#7C3AED', accent: '#F59E0B', preview: 'from-indigo-500 to-indigo-700' },
    { name: 'Oranje', primary: '#EA580C', secondary: '#DC2626', accent: '#F59E0B', preview: 'from-orange-500 to-orange-700' },
    { name: 'Roze', primary: '#EC4899', secondary: '#7C3AED', accent: '#F59E0B', preview: 'from-pink-500 to-pink-700' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete setup
      const organization = {
        id: Math.random().toString(),
        name: websiteData.name,
        type: websiteData.type,
        subdomain: websiteData.name.toLowerCase().replace(/\s+/g, '-'),
        design: websiteData.design,
        colors: websiteData.colors,
        pages: [],
        settings: websiteData
      };
      setOrganization(organization);
      navigate('/builder');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addService = () => {
    setWebsiteData({
      ...websiteData,
      services: [...websiteData.services, { name: '', day: '', time: '', location: '' }]
    });
  };

  const updateService = (index: number, field: string, value: string) => {
    const updatedServices = websiteData.services.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    );
    setWebsiteData({ ...websiteData, services: updatedServices });
  };

  const removeService = (index: number) => {
    if (websiteData.services.length > 1) {
      const updatedServices = websiteData.services.filter((_, i) => i !== index);
      setWebsiteData({ ...websiteData, services: updatedServices });
    }
  };

  const getOrgIcon = () => {
    switch (websiteData.type) {
      case 'church': return '⛪';
      case 'mosque': return '🕌';
      case 'synagogue': return '🕍';
      default: return '🏛️';
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Crown className="h-16 w-16 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Basis Informatie</h2>
              <p className="text-gray-600 dark:text-gray-400">Vertel ons over je organisatie</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organisatie Naam *
                </label>
                <input
                  type="text"
                  placeholder="Bijv. Genadekerk Amsterdam"
                  value={websiteData.name}
                  onChange={(e) => setWebsiteData({ ...websiteData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type Organisatie *
                </label>
                <div className="grid gap-3">
                  {[
                    { type: 'church' as const, label: 'Kerk', icon: '⛪', description: 'Christelijke gemeenschap' },
                    { type: 'mosque' as const, label: 'Moskee', icon: '🕌', description: 'Islamitische gemeenschap' },
                    { type: 'synagogue' as const, label: 'Synagoge', icon: '🕍', description: 'Joodse gemeenschap' }
                  ].map(({ type, label, icon, description }) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setWebsiteData({ ...websiteData, type })}
                      className={`p-4 border-2 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                        websiteData.type === type
                          ? 'border-amber-500 dark:border-amber-400 bg-amber-50 dark:bg-amber-900/30 shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-amber-300 dark:hover:border-amber-500 bg-white dark:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{label}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        </div>
                        {websiteData.type === type && (
                          <Sparkles className="h-6 w-6 text-amber-500 ml-auto animate-spin" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  placeholder="Bijv. Geloof, Hoop en Liefde"
                  value={websiteData.tagline}
                  onChange={(e) => setWebsiteData({ ...websiteData, tagline: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Korte Beschrijving
                </label>
                <textarea
                  rows={3}
                  placeholder="Beschrijf je organisatie in een paar zinnen..."
                  value={websiteData.description}
                  onChange={(e) => setWebsiteData({ ...websiteData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Globe className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact & Locatie</h2>
              <p className="text-gray-600 dark:text-gray-400">Hoe kunnen mensen je bereiken?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adres
                </label>
                <textarea
                  rows={3}
                  placeholder="Straatnaam 123&#10;1234 AB Stad&#10;Nederland"
                  value={websiteData.address}
                  onChange={(e) => setWebsiteData({ ...websiteData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="020-1234567"
                    value={websiteData.phone}
                    onChange={(e) => setWebsiteData({ ...websiteData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    placeholder="info@organisatie.nl"
                    value={websiteData.email}
                    onChange={(e) => setWebsiteData({ ...websiteData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media (optioneel)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Facebook
                  </label>
                  <input
                    type="url"
                    placeholder="https://facebook.com/..."
                    value={websiteData.facebook}
                    onChange={(e) => setWebsiteData({ ...websiteData, facebook: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Instagram
                  </label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/..."
                    value={websiteData.instagram}
                    onChange={(e) => setWebsiteData({ ...websiteData, instagram: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    YouTube
                  </label>
                  <input
                    type="url"
                    placeholder="https://youtube.com/..."
                    value={websiteData.youtube}
                    onChange={(e) => setWebsiteData({ ...websiteData, youtube: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{getOrgIcon()}</div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Diensten & Tijden</h2>
              <p className="text-gray-600 dark:text-gray-400">Wanneer komen mensen samen?</p>
            </div>
            
            <div className="space-y-4">
              {websiteData.services.map((service, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Dienst {index + 1}
                    </h3>
                    {websiteData.services.length > 1 && (
                      <button
                        onClick={() => removeService(index)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                      >
                        Verwijderen
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Naam van de dienst
                      </label>
                      <input
                        type="text"
                        placeholder="Bijv. Zondagsdienst"
                        value={service.name}
                        onChange={(e) => updateService(index, 'name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Dag
                      </label>
                      <select
                        value={service.day}
                        onChange={(e) => updateService(index, 'day', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Selecteer dag</option>
                        <option value="Maandag">Maandag</option>
                        <option value="Dinsdag">Dinsdag</option>
                        <option value="Woensdag">Woensdag</option>
                        <option value="Donderdag">Donderdag</option>
                        <option value="Vrijdag">Vrijdag</option>
                        <option value="Zaterdag">Zaterdag</option>
                        <option value="Zondag">Zondag</option>
                        <option value="Dagelijks">Dagelijks</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tijd
                      </label>
                      <input
                        type="time"
                        value={service.time}
                        onChange={(e) => updateService(index, 'time', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Locatie
                      </label>
                      <input
                        type="text"
                        placeholder="Bijv. Hoofdkerk"
                        value={service.location}
                        onChange={(e) => updateService(index, 'location', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                onClick={addService}
                className="w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-600 dark:text-gray-400 hover:border-green-400 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                + Nog een dienst toevoegen
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Over Ons</h2>
              <p className="text-gray-600 dark:text-gray-400">Vertel je verhaal</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Over Ons
                </label>
                <textarea
                  rows={4}
                  placeholder="Vertel over de geschiedenis, waarden en gemeenschap van je organisatie..."
                  value={websiteData.aboutUs}
                  onChange={(e) => setWebsiteData({ ...websiteData, aboutUs: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Onze Missie
                </label>
                <textarea
                  rows={4}
                  placeholder="Wat is jullie missie en visie? Waar staan jullie voor?"
                  value={websiteData.mission}
                  onChange={(e) => setWebsiteData({ ...websiteData, mission: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Layout className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kies je Design</h2>
              <p className="text-gray-600 dark:text-gray-400">Welke stijl past bij je organisatie?</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => setWebsiteData({ ...websiteData, design: design.id })}
                  className={`relative p-6 border-2 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                    websiteData.design === design.id
                      ? 'border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-800 shadow-2xl'
                      : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`h-32 rounded-xl mb-4 ${design.preview} flex items-center justify-center`}>
                    <div className="text-white text-2xl font-bold">{design.name}</div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{design.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{design.description}</p>
                  
                  <div className="space-y-1">
                    {design.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {websiteData.design === design.id && (
                    <div className="absolute top-3 right-3 bg-indigo-500 text-white rounded-full p-2">
                      <Check className="h-5 w-5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Palette className="h-16 w-16 text-pink-600 dark:text-pink-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kleuren Kiezen</h2>
              <p className="text-gray-600 dark:text-gray-400">Kies kleuren die je organisatie representeren</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.name}
                  onClick={() => setWebsiteData({ 
                    ...websiteData, 
                    colors: { 
                      primary: scheme.primary, 
                      secondary: scheme.secondary, 
                      accent: scheme.accent 
                    } 
                  })}
                  className={`relative p-6 border-2 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    websiteData.colors.primary === scheme.primary
                      ? 'border-pink-500 dark:border-pink-400 ring-2 ring-pink-200 dark:ring-pink-800 shadow-2xl'
                      : 'border-gray-200 dark:border-gray-600 hover:border-pink-300 dark:hover:border-pink-500 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`h-20 rounded-xl mb-4 bg-gradient-to-r ${scheme.preview}`}></div>
                  
                  <div className="flex space-x-2 mb-3">
                    <div 
                      className="h-6 w-6 rounded-lg border border-gray-200 dark:border-gray-600"
                      style={{ backgroundColor: scheme.primary }}
                    ></div>
                    <div 
                      className="h-6 w-6 rounded-lg border border-gray-200 dark:border-gray-600"
                      style={{ backgroundColor: scheme.secondary }}
                    ></div>
                    <div 
                      className="h-6 w-6 rounded-lg border border-gray-200 dark:border-gray-600"
                      style={{ backgroundColor: scheme.accent }}
                    ></div>
                  </div>
                  
                  <p className="font-semibold text-gray-900 dark:text-white">{scheme.name}</p>
                  
                  {websiteData.colors.primary === scheme.primary && (
                    <div className="absolute top-3 right-3 bg-pink-500 text-white rounded-full p-2">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Custom Color Picker */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Of kies je eigen kleuren</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Primaire Kleur
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="color"
                      value={websiteData.colors.primary}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, primary: e.target.value } 
                      })}
                      className="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded-lg"
                    />
                    <input
                      type="text"
                      value={websiteData.colors.primary}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, primary: e.target.value } 
                      })}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Secundaire Kleur
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="color"
                      value={websiteData.colors.secondary}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, secondary: e.target.value } 
                      })}
                      className="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded-lg"
                    />
                    <input
                      type="text"
                      value={websiteData.colors.secondary}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, secondary: e.target.value } 
                      })}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Accent Kleur
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="color"
                      value={websiteData.colors.accent}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, accent: e.target.value } 
                      })}
                      className="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded-lg"
                    />
                    <input
                      type="text"
                      value={websiteData.colors.accent}
                      onChange={(e) => setWebsiteData({ 
                        ...websiteData, 
                        colors: { ...websiteData.colors, accent: e.target.value } 
                      })}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-8">
            <div className="mb-8">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Check className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gefeliciteerd! 🎉</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                Je website is klaar om gelanceerd te worden!
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                Je website wordt beschikbaar op: <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {websiteData.name.toLowerCase().replace(/\s+/g, '-')}.believe.com
                </span>
              </p>
            </div>

            {/* Preview Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <div className="text-left">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{getOrgIcon()}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{websiteData.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{websiteData.tagline}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Design</h4>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">{websiteData.design}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kleuren</h4>
                    <div className="flex space-x-2">
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-600"
                        style={{ backgroundColor: websiteData.colors.primary }}
                      ></div>
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-600"
                        style={{ backgroundColor: websiteData.colors.secondary }}
                      ></div>
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-600"
                        style={{ backgroundColor: websiteData.colors.accent }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Wat kun je nu doen?</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Je website verder aanpassen in de builder</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Content toevoegen en pagina's bewerken</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Je website live zetten voor bezoekers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Leden uitnodigen en gemeenschap opbouwen</span>
                    </li>
                  </ul>
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
        <div className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-20 animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 dark:opacity-20 animate-bounce">🕊️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 dark:opacity-20 animate-pulse">🙏</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-10 dark:opacity-20 animate-bounce">⭐</div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200 dark:border-slate-600">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-600">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-10 w-10 text-amber-600 dark:text-amber-400" />
                <Sparkles className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  Believe
                </span>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Website Setup Wizard</p>
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-600">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                        : 'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-slate-400'
                    }`}>
                      {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-slate-400 mt-2 text-center max-w-20">{step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                      index < currentStep ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gray-200 dark:bg-slate-600'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Stap {currentStep + 1} van {steps.length}
              </p>
            </div>
          </div>

          {/* Step content */}
          <div className="p-8 min-h-[500px]">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center p-6 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 rounded-b-3xl">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Vorige</span>
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-slate-500">
                {currentStep === steps.length - 1 ? 'Klaar om te lanceren!' : 'Vul de gegevens in om door te gaan'}
              </p>
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentStep === 0 && !websiteData.name}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-600 dark:hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>{currentStep === steps.length - 1 ? 'Website Lanceren' : 'Volgende'}</span>
              {currentStep === steps.length - 1 ? <Wand2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSetupWizard;