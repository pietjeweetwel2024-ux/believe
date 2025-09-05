import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Heart, Mail, Lock, User, ArrowLeft, Moon, Sun, Sparkles, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const [mode, setMode] = useState<'login' | 'register' | 'org-register'>(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    orgName: '',
    orgType: '' as 'church' | 'mosque' | 'synagogue' | ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        await login(formData.email, formData.password);
        // Navigate based on user role after login
        const storedUser = localStorage.getItem('believe_user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          switch (user.role) {
            case 'member':
              navigate('/member');
              break;
            case 'admin':
              navigate('/admin');
              break;
            case 'partner':
              navigate('/partner');
              break;
            case 'superadmin':
              navigate('/superadmin');
              break;
            default:
              navigate('/');
          }
        }
      } else if (mode === 'register') {
        await register(formData.email, formData.password, formData.name);
        navigate('/member');
      } else if (mode === 'org-register') {
        await register(formData.email, formData.password, formData.name, formData.orgType);
        navigate('/onboarding');
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderOrgTypeSelector = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Crown className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-2">
          Wat voor organisatie ben je?
        </h2>
        <p className="text-slate-600 dark:text-slate-400">Kies je geloofsgemeenschap</p>
      </div>
      
      <div className="grid gap-4">
        {[
          { type: 'church' as const, label: 'Kerk', icon: '⛪', description: 'Christelijke gemeenschap', gradient: 'from-blue-500 to-indigo-600' },
          { type: 'mosque' as const, label: 'Moskee', icon: '🕌', description: 'Islamitische gemeenschap', gradient: 'from-emerald-500 to-teal-600' },
          { type: 'synagogue' as const, label: 'Synagoge', icon: '🕍', description: 'Joodse gemeenschap', gradient: 'from-purple-500 to-violet-600' }
        ].map(({ type, label, icon, description, gradient }) => (
          <button
            key={type}
            type="button"
            onClick={() => setFormData({ ...formData, orgType: type })}
            className={`group p-6 border-2 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
              formData.orgType === type
                ? `border-amber-500 dark:border-amber-400 bg-gradient-to-r ${gradient} text-white shadow-2xl`
                : 'border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-500 bg-white dark:bg-slate-700'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`text-4xl transition-transform group-hover:scale-110 ${
                formData.orgType === type ? 'animate-bounce' : ''
              }`}>
                {icon}
              </div>
              <div>
                <h3 className={`font-bold text-lg ${
                  formData.orgType === type ? 'text-white' : 'text-slate-800 dark:text-slate-100'
                }`}>
                  {label}
                </h3>
                <p className={`text-sm ${
                  formData.orgType === type ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'
                }`}>
                  {description}
                </p>
              </div>
              {formData.orgType === type && (
                <Sparkles className="h-6 w-6 text-white ml-auto animate-spin" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  if (mode === 'org-register' && !formData.orgType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center p-4 transition-all duration-500">
        <div className="max-w-md w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-amber-200 dark:border-slate-600">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setMode('register')}
              className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </button>
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Believe</span>
            </div>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          {renderOrgTypeSelector()}
          
          {formData.orgType && (
            <div className="mt-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Organisatienaam
                  </label>
                  <input
                    type="text"
                    placeholder="Voer je organisatienaam in"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={() => setMode('org-register')}
                  disabled={!formData.orgName}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-600 dark:hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Doorgaan met Setup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center p-4 transition-all duration-500">
      <div className="max-w-md w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-amber-200 dark:border-slate-600">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="inline-flex items-center space-x-3">
              <Heart className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Believe</span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="mb-6">
            <Crown className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
          </div>
          
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent">
            {mode === 'login' ? 'Welkom terug' : 
             mode === 'register' ? 'Word lid van Believe' :
             'Creëer je organisatie'}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {mode === 'login' ? 'Log in op je account' : 
             mode === 'register' ? 'Maak je persoonlijke account aan' :
             'Zet je geloofsgemeenschap op'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {(mode === 'register' || mode === 'org-register') && (
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                Volledige Naam
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Voer je volledige naam in"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              E-mailadres
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                placeholder="Voer je e-mailadres in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Wachtwoord
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="password"
                placeholder="Voer je wachtwoord in"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-600 dark:hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {loading ? 'Even geduld...' : 
             mode === 'login' ? 'Inloggen' : 
             mode === 'register' ? 'Account Aanmaken' :
             'Organisatie Aanmaken'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center space-y-4">
          {mode === 'login' ? (
            <>
              <p className="text-slate-600 dark:text-slate-400">
                Nog geen account?{' '}
                <button 
                  onClick={() => setMode('register')}
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold transition-colors"
                >
                  Registreren
                </button>
              </p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">of</span>
                </div>
              </div>
              <button 
                onClick={() => setMode('org-register')}
                className="w-full border-2 border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 py-3 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-all duration-300 font-bold"
              >
                Organisatie Aanmaken
              </button>
            </>
          ) : mode === 'register' ? (
            <>
              <p className="text-slate-600 dark:text-slate-400">
                Al een account?{' '}
                <button 
                  onClick={() => setMode('login')}
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold transition-colors"
                >
                  Inloggen
                </button>
              </p>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">of</span>
                </div>
              </div>
              <button 
                onClick={() => setMode('org-register')}
                className="w-full border-2 border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 py-3 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-all duration-300 font-bold"
              >
                Organisatie Aanmaken
              </button>
            </>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              Al een organisatie?{' '}
              <button 
                onClick={() => setMode('login')}
                className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold transition-colors"
              >
                Inloggen
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;