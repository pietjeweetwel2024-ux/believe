import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Shield, Zap, Star, Moon, Sun, Sparkles, Crown, Move as Dove } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const LandingPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      {/* Floating spiritual elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-20 animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 dark:opacity-20 animate-bounce">🕊️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 dark:opacity-20 animate-pulse">🙏</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-10 dark:opacity-20 animate-bounce">⭐</div>
      </div>

      {/* Header */}
      <header className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-amber-200 dark:border-purple-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-10 w-10 text-amber-600 dark:text-amber-400" />
                <Sparkles className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                  Believe
                </span>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Geloof • Gemeenschap • Groei</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Functies</a>
              <a href="#pricing" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Prijzen</a>
              <a href="#support" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Ondersteuning</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link 
                to="/auth" 
                className="px-4 py-2 text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 font-medium transition-colors"
              >
                Inloggen
              </Link>
              <Link 
                to="/demo" 
                className="px-4 py-2 border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-all duration-300 font-medium"
              >
                Demo Login
              </Link>
              <Link 
                to="/auth?mode=register" 
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-600 dark:hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                Begin Gratis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-300 dark:to-orange-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Crown className="h-20 w-20 text-amber-600 dark:text-amber-400 relative z-10" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-amber-700 to-orange-700 dark:from-slate-100 dark:via-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
                Bouw Jouw
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Spirituele Gemeenschap
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Versterk je kerk, moskee of synagoge met een prachtig, gebruiksvriendelijk platform. 
              Verbind je gemeenschap, beheer evenementen, ontvang donaties en laat je geloof samen groeien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/auth?mode=register" 
                className="group px-10 py-5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-500 dark:via-orange-500 dark:to-red-500 text-white rounded-2xl hover:from-amber-700 hover:via-orange-700 hover:to-red-700 dark:hover:from-amber-600 dark:hover:via-orange-600 dark:hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 font-bold text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                  <span>Start Gratis Proefperiode</span>
                </span>
              </Link>
              <button className="px-10 py-5 border-2 border-amber-300 dark:border-amber-600 text-slate-700 dark:text-slate-300 rounded-2xl hover:bg-amber-50 dark:hover:bg-slate-800 transition-all duration-300 font-bold text-lg backdrop-blur-sm">
                Bekijk Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <Dove className="h-16 w-16 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-6">
              Alles Wat Je Gemeenschap Nodig Heeft
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Van prachtige websites tot ledenbeheer, wij zorgen voor alles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Prachtige Websites</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Kies uit 20+ professioneel ontworpen templates. Pas kleuren en inhoud aan met onze eenvoudige drag-and-drop builder.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Ledenbeheer</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Beheer eenvoudig je gemeenschapsleden, volg betrokkenheid en faciliteer communicatie tussen leden.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-rose-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl w-fit">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Donatiebeheer</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Veilige donatieverwerking met meerdere betaalopties. Volg donaties en creëer fondswervingscampagnes.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-violet-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl w-fit">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">AI-Gestuurde Tools</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                AI-assistentie voor contentcreatie, preekschrijven, evenementenplanning en gemeenschapsbeheer.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-green-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Veilig & Beveiligd</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Enterprise-grade beveiliging met automatische contentmoderatie en fraudedetectie om je gemeenschap veilig te houden.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-indigo-200 dark:border-slate-500">
              <div className="mb-6">
                <div className="p-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl w-fit">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Multi-Geloof Ondersteuning</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Speciaal ontworpen voor kerken, moskeeën en synagogen met cultureel passende functies en inhoud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-500 dark:via-orange-500 dark:to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🌟</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-20 animate-bounce">✨</div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Dove className="h-16 w-16 text-white mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            Klaar om Je Digitale Gemeenschap te Bouwen?
          </h2>
          <p className="text-xl text-amber-100 dark:text-orange-100 mb-10 leading-relaxed">
            Sluit je aan bij duizenden religieuze gemeenschappen die Believe al gebruiken om hun geloofsgemeenschappen te verbinden en te laten groeien.
          </p>
          <Link 
            to="/auth?mode=register" 
            className="inline-block px-10 py-5 bg-white text-amber-600 rounded-2xl hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-3xl font-bold text-lg transform hover:scale-105"
          >
            Start Je Gratis Proefperiode
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold text-white">Believe</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Versterk geloofsgemeenschappen met prachtige, gebruiksvriendelijke digitale platforms.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Functies</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Prijzen</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Ondersteuning</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Helpcentrum</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Gemeenschap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6">Juridisch</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacybeleid</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Servicevoorwaarden</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Cookiebeleid</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>&copy; 2025 Believe Platform. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;