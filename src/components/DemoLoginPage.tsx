import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Crown, Users, Shield, Sparkles, Moon, Sun, ChevronRight, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const DemoLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { demoLogin } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const handleDemoLogin = async (role: 'member' | 'admin' | 'superadmin' | 'partner', orgType?: 'church' | 'mosque' | 'synagogue') => {
    await demoLogin(role, orgType);
    
    // Navigate based on role
    switch (role) {
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
  };

  const demoAccounts = [
    {
      category: 'Gemeenschapslid',
      description: 'Ervaar het platform vanuit het perspectief van een gemeenschapslid',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      accounts: [
        {
          name: 'Johannes van der Berg',
          role: 'Gemeenschapslid',
          organization: 'Genadekerk Amsterdam',
          type: 'member' as const,
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    },
    {
      category: 'Organisatie Beheerders',
      description: 'Beheer je religieuze organisatie met volledige toegang',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
      accounts: [
        {
          name: 'Dominee Maria Jansen',
          role: 'Kerk Administrator',
          organization: 'Genadekerk Amsterdam',
          type: 'admin' as const,
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    },
    {
      category: 'Partner Organisaties',
      description: 'Verschillende religieuze instellingen met hun eigen dashboards',
      icon: Heart,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      accounts: [
        {
          name: 'Pastoor Willem de Vries',
          role: 'Kerk Partner',
          organization: 'Sint-Martinuskerk Utrecht',
          type: 'partner' as const,
          orgType: 'church' as const,
          icon: '⛪',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
          name: 'Imam Ahmed Al-Hassan',
          role: 'Moskee Partner',
          organization: 'Al-Noor Moskee Rotterdam',
          type: 'partner' as const,
          orgType: 'mosque' as const,
          icon: '🕌',
          avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
          name: 'Rabbijn David Cohen',
          role: 'Synagoge Partner',
          organization: 'Beth Shalom Synagoge Den Haag',
          type: 'partner' as const,
          orgType: 'synagogue' as const,
          icon: '🕍',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    },
    {
      category: 'Platform Beheer',
      description: 'Volledige controle over het hele Believe platform',
      icon: Shield,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      accounts: [
        {
          name: 'Platform Administrator',
          role: 'Super Administrator',
          organization: 'Believe Platform',
          type: 'superadmin' as const,
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      {/* Floating spiritual elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-20 animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 dark:opacity-20 animate-bounce">🕊️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 dark:opacity-20 animate-pulse">🙏</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-10 dark:opacity-20 animate-bounce">⭐</div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-amber-200 dark:border-purple-700 shadow-lg">
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
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Demo Platform</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="px-4 py-2 text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 font-medium transition-colors"
                >
                  Terug naar Home
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-300 dark:to-orange-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Zap className="h-20 w-20 text-amber-600 dark:text-amber-400 relative z-10" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-800 via-amber-700 to-orange-700 dark:from-slate-100 dark:via-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
                Demo Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ontdek alle functionaliteiten van het Believe platform door in te loggen als verschillende gebruikersrollen. 
              Elk account toont een unieke ervaring en dashboard.
            </p>
            
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl border border-amber-200 dark:border-amber-700">
              <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span className="text-amber-800 dark:text-amber-200 font-medium">1-Klik Demo Login - Geen registratie vereist</span>
            </div>
          </div>

          {/* Demo Accounts Grid */}
          <div className="space-y-12">
            {demoAccounts.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex} className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/20 dark:border-slate-700/50`}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg`}>
                      <CategoryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{category.category}</h2>
                      <p className="text-slate-600 dark:text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.accounts.map((account, accountIndex) => (
                      <div key={accountIndex} className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="relative">
                            <img 
                              src={account.avatar} 
                              alt={account.name}
                              className="w-16 h-16 rounded-full object-cover border-4 border-amber-200 dark:border-amber-600"
                            />
                            {account.icon && (
                              <div className="absolute -bottom-1 -right-1 text-2xl bg-white dark:bg-slate-800 rounded-full p-1 border-2 border-amber-200 dark:border-amber-600">
                                {account.icon}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 dark:text-slate-100">{account.name}</h3>
                            <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{account.role}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">{account.organization}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDemoLogin(account.type, account.orgType)}
                          className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl group-hover:scale-105"
                        >
                          <span>Inloggen als {account.name.split(' ')[0]}</span>
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="mt-4 text-center">
                          <p className="text-xs text-slate-500 dark:text-slate-500">
                            Toegang tot {account.type === 'superadmin' ? 'alle platform functies' : 
                                       account.type === 'partner' ? 'organisatie beheer' :
                                       account.type === 'admin' ? 'admin dashboard' : 'member portal'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Wat kun je verwachten?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Member Portal</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Evenementen, donaties, community chat</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Admin Dashboard</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Ledenbeheer, analytics, website builder</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Partner Portals</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Organisatie-specifieke dashboards</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Super Admin</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Platform beheer, alle organisaties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoLoginPage;