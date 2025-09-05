import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Palette, Type, Image, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useOrganization } from '../contexts/OrganizationContext';

const OnboardingWizard: React.FC = () => {
  const navigate = useNavigate();
  const { setOrganization } = useOrganization();
  const [currentStep, setCurrentStep] = useState(0);
  const [orgData, setOrgData] = useState({
    name: '',
    type: 'church' as 'church' | 'mosque' | 'synagogue',
    design: 'modern',
    colors: {
      primary: '#2563EB',
      secondary: '#0891B2',
      accent: '#F59E0B'
    }
  });

  const steps = [
    'Organization Details',
    'Choose Design',
    'Customize Colors',
    'Setup Complete'
  ];

  const designs = [
    { id: 'modern', name: 'Modern', preview: 'bg-gradient-to-br from-blue-500 to-purple-600' },
    { id: 'classic', name: 'Classic', preview: 'bg-gradient-to-br from-gray-600 to-gray-800' },
    { id: 'warm', name: 'Warm', preview: 'bg-gradient-to-br from-orange-500 to-red-600' },
    { id: 'nature', name: 'Nature', preview: 'bg-gradient-to-br from-green-500 to-teal-600' },
    { id: 'elegant', name: 'Elegant', preview: 'bg-gradient-to-br from-purple-500 to-pink-600' },
    { id: 'minimal', name: 'Minimal', preview: 'bg-gradient-to-br from-gray-400 to-gray-600' }
  ];

  const colors = [
    { name: 'Blue', primary: '#2563EB', secondary: '#0891B2', accent: '#F59E0B' },
    { name: 'Green', primary: '#059669', secondary: '#0891B2', accent: '#F59E0B' },
    { name: 'Purple', primary: '#7C3AED', secondary: '#EC4899', accent: '#F59E0B' },
    { name: 'Red', primary: '#DC2626', secondary: '#EA580C', accent: '#F59E0B' },
    { name: 'Teal', primary: '#0891B2', secondary: '#059669', accent: '#F59E0B' },
    { name: 'Indigo', primary: '#4F46E5', secondary: '#7C3AED', accent: '#F59E0B' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      const organization = {
        id: Math.random().toString(),
        name: orgData.name,
        type: orgData.type,
        subdomain: orgData.name.toLowerCase().replace(/\s+/g, '-'),
        design: orgData.design,
        colors: orgData.colors,
        pages: [],
        settings: {}
      };
      setOrganization(organization);
      navigate('/admin');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your organization</h2>
              <p className="text-gray-600">We'll use this information to customize your experience</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your organization name"
                  value={orgData.name}
                  onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type
                </label>
                <div className="grid gap-3">
                  {[
                    { type: 'church' as const, label: 'Church', icon: '⛪' },
                    { type: 'mosque' as const, label: 'Mosque', icon: '🕌' },
                    { type: 'synagogue' as const, label: 'Synagogue', icon: '🕍' }
                  ].map(({ type, label, icon }) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrgData({ ...orgData, type })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        orgData.type === type
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{icon}</span>
                        <span className="font-medium text-gray-900">{label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your design</h2>
              <p className="text-gray-600">Pick a design that reflects your community's spirit</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => setOrgData({ ...orgData, design: design.id })}
                  className={`relative p-4 border-2 rounded-xl transition-all ${
                    orgData.design === design.id
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`h-24 rounded-lg mb-3 ${design.preview}`}></div>
                  <p className="font-medium text-gray-900">{design.name}</p>
                  {orgData.design === design.id && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Customize your colors</h2>
              <p className="text-gray-600">Choose colors that represent your community</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {colors.map((colorScheme) => (
                <button
                  key={colorScheme.name}
                  onClick={() => setOrgData({ ...orgData, colors: colorScheme })}
                  className={`relative p-4 border-2 rounded-xl transition-all ${
                    orgData.colors.primary === colorScheme.primary
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex space-x-2 mb-3">
                    <div 
                      className="h-8 w-8 rounded-lg"
                      style={{ backgroundColor: colorScheme.primary }}
                    ></div>
                    <div 
                      className="h-8 w-8 rounded-lg"
                      style={{ backgroundColor: colorScheme.secondary }}
                    ></div>
                    <div 
                      className="h-8 w-8 rounded-lg"
                      style={{ backgroundColor: colorScheme.accent }}
                    ></div>
                  </div>
                  <p className="font-medium text-gray-900">{colorScheme.name}</p>
                  {orgData.colors.primary === colorScheme.primary && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">You're all set!</h2>
              <p className="text-gray-600">
                Your website is ready at <span className="font-medium">{orgData.name.toLowerCase().replace(/\s+/g, '-')}.believe.com</span>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">What's next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Customize your website content</li>
                <li>• Add your first event</li>
                <li>• Set up donation options</li>
                <li>• Invite your community members</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Believe</span>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className="text-xs text-gray-600 mt-1">{step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentStep === 0 && !orgData.name}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;