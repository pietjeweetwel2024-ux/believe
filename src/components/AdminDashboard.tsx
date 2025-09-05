import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Heart, 
  Settings, 
  FileText, 
  Image, 
  Mail, 
  BarChart3,
  Plus,
  Edit,
  Eye,
  Palette,
  LogOut,
  Home,
  ChevronDown,
  MessageSquare,
  Globe,
  Search,
  Filter,
  Star,
  Crown,
  Sparkles,
  CreditCard,
  Bell,
  Shield,
  Download,
  Upload,
  Copy,
  Trash2,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Moon,
  Sun,
  X,
  UserPlus,
  Edit3
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [filterFaith, setFilterFaith] = useState('all');
  const { isDark, toggleTheme } = useTheme();
  
  // Event Management State
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [editingDonation, setEditingDonation] = useState<any>(null);
  const [donationSearchTerm, setDonationSearchTerm] = useState('');
  const [donationStatusFilter, setDonationStatusFilter] = useState('alle');
  const [donationFundFilter, setDonationFundFilter] = useState('alle');
  const [eventSearchTerm, setEventSearchTerm] = useState('');
  const [eventFilter, setEventFilter] = useState('all');
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'dienst',
    maxAttendees: '',
    price: '',
    image: ''
  });

  // Mock Events Data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Zondagsdienst',
      description: 'Wekelijkse zondagsdienst met aanbidding, preek en gemeenschap. Iedereen is welkom om samen te komen in gebed en lofprijzing.',
      date: '2024-12-29',
      time: '10:00',
      location: 'Hoofdzaal',
      category: 'dienst',
      attendees: 85,
      maxAttendees: 150,
      price: 0,
      status: 'published',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Kerstviering 2024',
      description: 'Speciale kerstviering met kaarslicht, kerstliederen en een inspirerende boodschap over de geboorte van Jezus.',
      date: '2024-12-25',
      time: '19:00',
      location: 'Hoofdzaal',
      category: 'speciaal',
      attendees: 120,
      maxAttendees: 200,
      price: 0,
      status: 'published',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Jeugdbijeenkomst',
      description: 'Wekelijkse bijeenkomst voor jongeren met games, discussies over geloof en pizza. Voor leeftijd 12-18 jaar.',
      date: '2024-12-28',
      time: '18:00',
      location: 'Jeugdruimte',
      category: 'jeugd',
      attendees: 25,
      maxAttendees: 40,
      price: 5,
      status: 'published',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Bijbelstudie: Psalmen',
      description: 'Diepgaande studie van de Psalmen met discussie en reflectie. Geschikt voor alle niveaus van bijbelkennis.',
      date: '2024-12-26',
      time: '19:30',
      location: 'Studiezaal',
      category: 'bijbelstudie',
      attendees: 18,
      maxAttendees: 25,
      price: 0,
      status: 'published',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/8468472/pexels-photo-8468472.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Nieuwjaarsgebed',
      description: 'Verwelkom het nieuwe jaar met gebed, reflectie en hoop. Een moment van bezinning en dankbaarheid.',
      date: '2024-12-31',
      time: '23:00',
      location: 'Kapel',
      category: 'dienst',
      attendees: 60,
      maxAttendees: 80,
      price: 0,
      status: 'published',
      rating: null,
      image: 'https://images.pexels.com/photos/8468473/pexels-photo-8468473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Gemeenschapsdiner',
      description: 'Gezellig diner met alle gemeenschapsleden. Samen eten, praten en elkaar beter leren kennen.',
      date: '2025-01-05',
      time: '18:00',
      location: 'Gemeenschapszaal',
      category: 'gemeenschap',
      attendees: 0,
      maxAttendees: 100,
      price: 15,
      status: 'draft',
      rating: null,
      image: 'https://images.pexels.com/photos/8468474/pexels-photo-8468474.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]);

  // Filter events based on search and filter
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(eventSearchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(eventSearchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(eventSearchTerm.toLowerCase());
    
    const matchesFilter = eventFilter === 'all' || 
                         (eventFilter === 'upcoming' && new Date(event.date) >= new Date()) ||
                         (eventFilter === 'past' && new Date(event.date) < new Date()) ||
                         (eventFilter === 'draft' && event.status === 'draft');
    
    return matchesSearch && matchesFilter;
  });

  // Event Management Functions
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingEvent) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? {
              ...event,
              ...eventForm,
              maxAttendees: eventForm.maxAttendees ? parseInt(eventForm.maxAttendees) : null,
              price: eventForm.price ? parseFloat(eventForm.price) : 0
            }
          : event
      ));
    } else {
      // Create new event
      const newEvent = {
        id: events.length + 1,
        ...eventForm,
        attendees: 0,
        maxAttendees: eventForm.maxAttendees ? parseInt(eventForm.maxAttendees) : null,
        price: eventForm.price ? parseFloat(eventForm.price) : 0,
        status: 'published',
        rating: null,
        image: eventForm.image || 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800'
      };
      setEvents([...events, newEvent]);
    }
    
    // Reset form and close modal
    setShowEventModal(false);
    setEditingEvent(null);
    setEventForm({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: 'dienst',
      maxAttendees: '',
      price: '',
      image: ''
    });
  };

  const handleEditEvent = (event: any) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      category: event.category,
      maxAttendees: event.maxAttendees?.toString() || '',
      price: event.price?.toString() || '',
      image: event.image || ''
    });
    setShowEventModal(true);
  };

  const handleDuplicateEvent = (event: any) => {
    const duplicatedEvent = {
      ...event,
      id: events.length + 1,
      title: `${event.title} (Kopie)`,
      attendees: 0,
      status: 'draft',
      rating: null
    };
    setEvents([...events, duplicatedEvent]);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm('Weet je zeker dat je dit evenement wilt verwijderen?')) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  const handleSaveDonation = () => {
    // Implementation for saving donation
    setShowDonationModal(false);
    setEditingDonation(null);
  };

  const getFaithConfig = (orgType: 'church' | 'mosque' | 'synagogue') => {
    const configs = {
      church: {
        icon: '⛪',
        orgName: 'Kerk',
        greeting: 'Vrede zij met u',
        eventType: 'Dienst',
        colors: { primary: '#3B82F6' },
        gradient: 'from-blue-500 to-indigo-600'
      },
      mosque: {
        icon: '🕌',
        orgName: 'Moskee',
        greeting: 'As-salamu alaykum',
        eventType: 'Gebed',
        colors: { primary: '#10B981' },
        gradient: 'from-emerald-500 to-teal-600'
      },
      synagogue: {
        icon: '🕍',
        orgName: 'Synagoge',
        greeting: 'Shalom',
        eventType: 'Dienst',
        colors: { primary: '#8B5CF6' },
        gradient: 'from-violet-500 to-purple-600'
      }
    };
    return configs[orgType];
  };

  const renderEventsContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Evenementen Beheer</h2>
        <p className="text-gray-600 dark:text-gray-400">Beheer je evenementen en activiteiten.</p>
      </div>
    );
  };

  const renderDonationsContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Donaties Beheer</h2>
        <p className="text-gray-600 dark:text-gray-400">Beheer donaties en financiële bijdragen.</p>
      </div>
    );
  };

  const renderChatContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Gemeenschapschat</h2>
        <p className="text-gray-600 dark:text-gray-400">Communiceer met je gemeenschap.</p>
      </div>
    );
  };

  const renderContentContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Content Beheer</h2>
        <p className="text-gray-600 dark:text-gray-400">Beheer je website content en berichten.</p>
      </div>
    );
  };

  const renderMediaContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Media Galerij</h2>
        <p className="text-gray-600 dark:text-gray-400">Beheer foto's, video's en andere media.</p>
      </div>
    );
  };

  const renderAnalyticsContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Analytics & Rapporten</h2>
        <p className="text-gray-600 dark:text-gray-400">Bekijk statistieken en rapporten.</p>
      </div>
    );
  };

  const renderAppearanceContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Uiterlijk Aanpassingen</h2>
        <p className="text-gray-600 dark:text-gray-400">Pas het uiterlijk van je website aan.</p>
      </div>
    );
  };

  const renderBillingContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Factureringsbeheer</h2>
        <p className="text-gray-600 dark:text-gray-400">Beheer je abonnement en betalingen.</p>
      </div>
    );
  };

  const renderSettingsContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Algemene Instellingen</h2>
        <p className="text-gray-600 dark:text-gray-400">Configureer je account en voorkeuren.</p>
      </div>
    );
  };

  const renderPartnerContent = (orgType: 'church' | 'mosque' | 'synagogue') => {
    const faithConfig = getFaithConfig(orgType);
    
    const renderPartnerSection = () => {
      switch (activeTab) {
        case 'dashboard':
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {faithConfig.greeting}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Beheer je {faithConfig.orgName.toLowerCase()} met liefde en wijsheid
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Bell className="h-4 w-4 inline mr-2" />
                    Meldingen
                  </button>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${faithConfig.gradient} rounded-xl shadow-lg`}>
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Leden</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {orgType === 'church' ? '342' : orgType === 'mosque' ? '278' : '156'}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400">+12% deze maand</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Komende Evenementen</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {orgType === 'church' ? '8' : orgType === 'mosque' ? '6' : '5'}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Deze week</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Donaties Deze Maand</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        €{orgType === 'church' ? '3.240' : orgType === 'mosque' ? '2.180' : '1.890'}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400">+8% vs vorige maand</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Gesprekken</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {orgType === 'church' ? '24' : orgType === 'mosque' ? '18' : '12'}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Vandaag</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Activity className="h-5 w-5 mr-2" style={{ color: faithConfig.colors.primary }} />
                    Recente Activiteit
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        action: `Nieuwe lid toegevoegd: ${orgType === 'church' ? 'Maria van der Berg' : orgType === 'mosque' ? 'Fatima Al-Hassan' : 'Sarah Cohen'}`, 
                        time: '2 uur geleden', 
                        icon: Users,
                        color: 'text-blue-600'
                      },
                      { 
                        action: `${faithConfig.eventType} gepland voor aanstaande ${orgType === 'church' ? 'zondag' : orgType === 'mosque' ? 'vrijdag' : 'zaterdag'}`, 
                        time: '4 uur geleden', 
                        icon: Calendar,
                        color: 'text-green-600'
                      },
                      { 
                        action: `Donatie ontvangen: €${orgType === 'church' ? '150' : orgType === 'mosque' ? '75' : '200'}`, 
                        time: '6 uur geleden', 
                        icon: Heart,
                        color: 'text-rose-600'
                      },
                      { 
                        action: 'Website bezoekers: +23% deze week', 
                        time: '1 dag geleden', 
                        icon: TrendingUp,
                        color: 'text-purple-600'
                      },
                    ].map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50/50 dark:bg-slate-700/50 rounded-xl">
                          <div className={`p-2 bg-white dark:bg-slate-600 rounded-lg shadow-sm`}>
                            <Icon className={`h-4 w-4 ${activity.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900 dark:text-white font-medium">{activity.action}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2" style={{ color: faithConfig.colors.primary }} />
                    Snelle Acties
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: `Nieuwe ${faithConfig.eventType}`, icon: Calendar, color: 'from-blue-500 to-indigo-600' },
                      { label: 'Lid Toevoegen', icon: UserPlus, color: 'from-green-500 to-emerald-600' },
                      { label: 'Bericht Versturen', icon: MessageSquare, color: 'from-purple-500 to-violet-600' },
                      { label: 'Website Bewerken', icon: Edit3, color: 'from-orange-500 to-red-600' },
                    ].map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={index}
                          className={`w-full flex items-center space-x-3 p-3 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );

        case 'events':
          return renderEventsContent();
        case 'donations':
          return renderDonationsContent();
        case 'chat':
          return renderChatContent();
        case 'content':
          return renderContentContent();
        case 'media':
          return renderMediaContent();
        case 'analytics':
          return renderAnalyticsContent();
        case 'appearance':
          return renderAppearanceContent();
        case 'billing':
          return renderBillingContent();
        case 'settings':
          return renderSettingsContent();
        default:
          return (
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 text-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Deze sectie wordt binnenkort beschikbaar gesteld met alle functies die je nodig hebt.
              </p>
            </div>
          );
      }
    };

    return (
      <div className="space-y-6">
        {/* Faith-specific header */}
        <div className="bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{faithConfig.icon}</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {faithConfig.orgName} Beheer
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Professioneel platform voor je {faithConfig.orgName.toLowerCase()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                ✓ Actief
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        {renderPartnerSection()}
      </div>
    );
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard Overzicht', icon: LayoutDashboard },
    { id: 'templates', label: 'Website Templates', icon: Globe },
    { id: 'ai-generator', label: 'AI Design Generator', icon: Sparkles },
    { id: 'members', label: 'Ledenbeheer', icon: Users },
    { id: 'events', label: 'Evenementenbeheer', icon: Calendar },
    { id: 'donations', label: 'Donatiebeheer', icon: Heart },
    { id: 'chat', label: 'Gemeenschapschat', icon: MessageSquare },
    { id: 'content', label: 'Content Beheer', icon: FileText },
    { id: 'media', label: 'Media Galerij', icon: Image },
    { id: 'analytics', label: 'Analytics & Rapporten', icon: BarChart3 },
    { id: 'appearance', label: 'Uiterlijk Aanpassingen', icon: Palette },
    { id: 'billing', label: 'Factureringsbeheer', icon: CreditCard },
    { id: 'settings', label: 'Algemene Instellingen', icon: Settings },
  ];

  const stats = [
    { 
      label: 'Totaal Leden', 
      value: '247', 
      change: '+18%', 
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    { 
      label: 'Deze Maand Donaties', 
      value: '€3.450', 
      change: '+12%', 
      changeType: 'positive',
      icon: Heart,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    { 
      label: 'Komende Evenementen', 
      value: '8', 
      change: '+3', 
      changeType: 'positive',
      icon: Calendar,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
    },
    { 
      label: 'Website Bezoekers', 
      value: '2.134', 
      change: '+35%', 
      changeType: 'positive',
      icon: Globe,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20'
    },
  ];

  const templates = [
    {
      id: 'modern-church',
      name: 'Modern Kerk',
      faith: 'christian',
      preview: 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700',
      description: 'Moderne, schone design voor hedendaagse kerken',
      features: ['Responsive', 'SEO Geoptimaliseerd', 'Donatie Integratie'],
      rating: 4.9,
      downloads: 1247
    },
    {
      id: 'classic-church',
      name: 'Klassieke Kerk',
      faith: 'christian',
      preview: 'bg-gradient-to-br from-amber-600 via-orange-600 to-red-700',
      description: 'Traditionele, elegante stijl voor klassieke gemeenschappen',
      features: ['Traditioneel Design', 'Gouden Accenten', 'Klassieke Typografie'],
      rating: 4.8,
      downloads: 892
    },
    {
      id: 'peaceful-mosque',
      name: 'Vredige Moskee',
      faith: 'islamic',
      preview: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700',
      description: 'Serene en vredige design voor islamitische gemeenschappen',
      features: ['Arabische Kalligrafie', 'Geometrische Patronen', 'Gebedskalender'],
      rating: 4.9,
      downloads: 756
    },
    {
      id: 'elegant-synagogue',
      name: 'Elegante Synagoge',
      faith: 'jewish',
      preview: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
      description: 'Elegante en respectvolle design voor joodse gemeenschappen',
      features: ['Hebreeuwse Ondersteuning', 'Sabbat Kalender', 'Torah Secties'],
      rating: 4.7,
      downloads: 543
    },
    {
      id: 'contemporary-church',
      name: 'Hedendaagse Kerk',
      faith: 'christian',
      preview: 'bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700',
      description: 'Frisse, hedendaagse look voor jonge gemeenschappen',
      features: ['Video Integratie', 'Social Media', 'Live Streaming'],
      rating: 4.8,
      downloads: 1089
    },
    {
      id: 'traditional-mosque',
      name: 'Traditionele Moskee',
      faith: 'islamic',
      preview: 'bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800',
      description: 'Authentieke, traditionele stijl met islamitische kunst',
      features: ['Islamitische Kunst', 'Qibla Richting', 'Ramadan Kalender'],
      rating: 4.9,
      downloads: 634
    }
  ];

  const members = [
    {
      id: 1,
      name: 'Johannes van der Berg',
      email: 'johannes@email.com',
      role: 'Ouderling',
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2 uur geleden',
      donations: '€450',
      events: 12
    },
    {
      id: 2,
      name: 'Maria Jansen',
      email: 'maria@email.com',
      role: 'Vrijwilliger',
      status: 'active',
      joinDate: '2023-03-22',
      lastActive: '1 dag geleden',
      donations: '€280',
      events: 8
    },
    {
      id: 3,
      name: 'Pieter de Vries',
      email: 'pieter@email.com',
      role: 'Lid',
      status: 'inactive',
      joinDate: '2022-11-08',
      lastActive: '2 weken geleden',
      donations: '€120',
      events: 3
    },
    {
      id: 4,
      name: 'Sarah Bakker',
      email: 'sarah@email.com',
      role: 'Koorleider',
      status: 'active',
      joinDate: '2023-02-14',
      lastActive: '30 minuten geleden',
      donations: '€320',
      events: 15
    }
  ];

  const recentActivities = [
    { action: 'Nieuw lid toegetreden', user: 'Anna de Jong', time: '2 uur geleden', type: 'member' },
    { action: 'Evenement aangemaakt', user: 'Dominee Peters', time: '4 uur geleden', type: 'event' },
    { action: 'Donatie ontvangen', user: 'Familie Smit', time: '6 uur geleden', type: 'donation' },
    { action: 'Website bijgewerkt', user: 'Admin', time: '1 dag geleden', type: 'website' },
    { action: 'Nieuwsbrief verzonden', user: 'Maria Jansen', time: '2 dagen geleden', type: 'newsletter' },
  ];

  const upcomingEvents = [
    { name: 'Zondagsdienst', date: '24 Dec 2024', time: '10:00', attendees: 85, status: 'confirmed' },
    { name: 'Kerstviering', date: '25 Dec 2024', time: '19:00', attendees: 120, status: 'confirmed' },
    { name: 'Jeugdbijeenkomst', date: '28 Dec 2024', time: '18:00', attendees: 25, status: 'planning' },
    { name: 'Nieuwjaarsgebed', date: '31 Dec 2024', time: '23:00', attendees: 60, status: 'confirmed' },
  ];

  const filteredTemplates = templates.filter(template => 
    filterFaith === 'all' || template.faith === filterFaith
  );

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent">
                  Dashboard Overzicht
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Welkom terug! Hier is een overzicht van je gemeenschap.</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
                  <Bell className="h-4 w-4" />
                  <span>Notificaties</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg">
                  <Plus className="h-4 w-4" />
                  <span>Snelle Actie</span>
                </button>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`flex items-center space-x-1 text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {stat.changeType === 'positive' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Recente Activiteiten</h3>
                  <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium">
                    Alles bekijken
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'member' ? 'bg-blue-500' :
                        activity.type === 'event' ? 'bg-purple-500' :
                        activity.type === 'donation' ? 'bg-green-500' :
                        activity.type === 'website' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{activity.action}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Komende Evenementen</h3>
                  <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-amber-200 dark:border-slate-500">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100">{event.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {event.status === 'confirmed' ? 'Bevestigd' : 'Planning'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{event.date} om {event.time}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{event.attendees} deelnemers</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'templates':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent">
                  Website Templates
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Kies uit 20+ professioneel ontworpen templates voor je geloofsgemeenschap</p>
              </div>
              <div className="flex space-x-3">
                <select 
                  value={filterFaith} 
                  onChange={(e) => setFilterFaith(e.target.value)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">Alle Geloven</option>
                  <option value="christian">Christelijk</option>
                  <option value="islamic">Islamitisch</option>
                  <option value="jewish">Joods</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  <span>AI Generator</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className={`h-48 ${template.preview} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Template Preview Content */}
                    <div className="absolute inset-0 p-4 text-white">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs">
                            {template.faith === 'christian' ? '⛪' : 
                             template.faith === 'islamic' ? '🕌' : '🕍'}
                          </div>
                          <div className="text-xs font-medium opacity-90">
                            {template.faith === 'christian' ? 'Grace Church' : 
                             template.faith === 'islamic' ? 'Al-Noor Mosque' : 'Beth Shalom'}
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold mb-1 opacity-95">
                          {template.name === 'Modern Kerk' ? 'Welkom in Onze Gemeenschap' :
                           template.name === 'Klassieke Kerk' ? 'Geloof • Hoop • Liefde' :
                           template.name === 'Vredige Moskee' ? 'Vrede en Eenheid' :
                           template.name === 'Elegante Synagoge' ? 'Wijsheid en Traditie' :
                           template.name === 'Hedendaagse Kerk' ? 'Samen Groeien' :
                           'Geloof en Gemeenschap'}
                        </div>
                        <div className="text-xs opacity-80 mb-2">
                          {template.name === 'Modern Kerk' ? 'Moderne aanbidding voor iedereen' :
                           template.name === 'Klassieke Kerk' ? 'Traditionele waarden, tijdloze liefde' :
                           template.name === 'Vredige Moskee' ? 'Een plaats van rust en gebed' :
                           template.name === 'Elegante Synagoge' ? 'Eeuwenoude tradities, moderne gemeenschap' :
                           template.name === 'Hedendaagse Kerk' ? 'Eigentijdse aanbidding en fellowship' :
                           'Authentieke spiritualiteit'}
                        </div>
                        <div className="flex justify-center space-x-2">
                          <div className="px-2 py-1 bg-white/20 rounded text-xs">Bezoek Ons</div>
                          <div className="px-2 py-1 bg-white/10 border border-white/30 rounded text-xs">Meer Info</div>
                        </div>
                      </div>
                      
                      {/* Content Sections */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-white/10 rounded p-2">
                          <div className="w-3 h-3 bg-white/40 rounded mb-1"></div>
                          <div className="text-xs opacity-80">Diensten</div>
                        </div>
                        <div className="bg-white/10 rounded p-2">
                          <div className="w-3 h-3 bg-white/40 rounded mb-1"></div>
                          <div className="text-xs opacity-80">Evenementen</div>
                        </div>
                        <div className="bg-white/10 rounded p-2">
                          <div className="w-3 h-3 bg-white/40 rounded mb-1"></div>
                          <div className="text-xs opacity-80">Contact</div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="absolute bottom-2 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <div className="text-xs opacity-60">© 2025 Believe Platform</div>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="px-2 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full">
                        ⭐ {template.rating}
                      </span>
                      <span className="px-2 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full">
                        {template.downloads} downloads
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            // Show preview modal or navigate to preview
                            console.log('Preview template:', template.name);
                          }}
                          className="p-3 bg-white/90 text-slate-800 rounded-xl hover:bg-white transition-colors shadow-lg"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            // Navigate to website setup with selected template
                            window.location.href = `/website-setup?template=${template.id}`;
                          }}
                          className="p-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
                        >
                          Template Selecteren
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{template.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        template.faith === 'christian' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        template.faith === 'islamic' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
                        {template.faith === 'christian' ? 'Christelijk' : 
                         template.faith === 'islamic' ? 'Islamitisch' : 'Joods'}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{template.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedTemplate(template.id);
                        // Navigate to website setup with selected template
                        window.location.href = `/website-setup?template=${template.id}`;
                      }}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold shadow-lg"
                    >
                      Template Selecteren
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ai-generator':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <Sparkles className="h-16 w-16 text-amber-600 dark:text-amber-400 relative z-10" />
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent mb-4">
                AI Design Generator
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Laat onze AI een uniek, op maat gemaakt design voor je gemeenschap creëren
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                <div className="flex items-center space-x-3 mb-6">
                  <Crown className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Premium AI Generator</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Hoe het werkt:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>Vertel ons over je gemeenschap en voorkeuren</li>
                      <li>Onze AI analyseert je behoeften en geloof</li>
                      <li>Binnen 60 seconden krijg je 3 unieke designs</li>
                      <li>Kies je favoriet en pas verder aan</li>
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Type Gemeenschap
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500">
                        <option>Moderne Kerk</option>
                        <option>Traditionele Kerk</option>
                        <option>Moskee</option>
                        <option>Synagoge</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Gewenste Sfeer
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Warm & Uitnodigend', 'Modern & Strak', 'Traditioneel & Elegant', 'Jeugdig & Energiek'].map((mood) => (
                          <button key={mood} className="p-3 border border-slate-300 dark:border-slate-600 rounded-xl text-sm hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                            {mood}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Beschrijf je gemeenschap (optioneel)
                      </label>
                      <textarea 
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500"
                        rows={3}
                        placeholder="Vertel ons over je gemeenschap, waarden, en wat jullie uniek maakt..."
                      ></textarea>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-bold text-lg shadow-lg">
                    🚀 Genereer Mijn Design (Premium)
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Voorbeelden van AI-Ontwerpen</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Vredige Oase', preview: 'bg-gradient-to-br from-teal-400 to-blue-600' },
                      { name: 'Gouden Licht', preview: 'bg-gradient-to-br from-amber-400 to-orange-600' },
                      { name: 'Hemelse Rust', preview: 'bg-gradient-to-br from-purple-400 to-indigo-600' },
                      { name: 'Warme Omhelzing', preview: 'bg-gradient-to-br from-rose-400 to-pink-600' }
                    ].map((example, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className={`h-24 ${example.preview} rounded-xl mb-2 group-hover:scale-105 transition-transform duration-300`}></div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{example.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-2xl text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Crown className="h-6 w-6" />
                    <h3 className="text-lg font-bold">Premium Upgrade</h3>
                  </div>
                  <p className="mb-4 text-amber-100">Ontgrendel onbeperkte AI-designs en geavanceerde aanpassingsopties</p>
                  <ul className="space-y-2 text-sm text-amber-100 mb-6">
                    <li>✨ Onbeperkte AI-generaties</li>
                    <li>🎨 Geavanceerde kleurenpaletten</li>
                    <li>📱 Mobiele optimalisatie</li>
                    <li>🚀 Prioriteit ondersteuning</li>
                  </ul>
                  <button className="w-full py-3 bg-white text-amber-600 rounded-xl hover:bg-amber-50 transition-colors font-bold">
                    Upgrade naar Premium - €29/maand
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'members':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 dark:from-slate-100 dark:to-amber-300 bg-clip-text text-transparent">
                  Ledenbeheer
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Beheer je gemeenschapsleden en hun betrokkenheid</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Exporteren</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg">
                  <Plus className="h-4 w-4" />
                  <span>Nieuw Lid</span>
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Zoek leden op naam, email of rol..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="flex space-x-3">
                  <select className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500">
                    <option>Alle Rollen</option>
                    <option>Ouderling</option>
                    <option>Vrijwilliger</option>
                    <option>Lid</option>
                    <option>Koorleider</option>
                  </select>
                  <select className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-amber-500">
                    <option>Alle Statussen</option>
                    <option>Actief</option>
                    <option>Inactief</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Members List */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50 overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    Gemeenschapsleden ({filteredMembers.length})
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                      <Filter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-slate-200 dark:divide-slate-600">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold text-slate-800 dark:text-slate-100">{member.name}</h4>
                            <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                              member.status === 'active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {member.status === 'active' ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Actief
                                </>
                              ) : (
                                <>
                                  <XCircle className="h-3 w-3 mr-1" />
                                  Inactief
                                </>
                              )}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{member.email}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-slate-500 dark:text-slate-500">
                            <span>{member.role}</span>
                            <span>•</span>
                            <span>Lid sinds {member.joinDate}</span>
                            <span>•</span>
                            <span>Laatst actief: {member.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{member.donations}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Donaties</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{member.events}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Evenementen</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-12 rounded-2xl shadow-lg border border-amber-200/50 dark:border-slate-600/50 text-center">
            <div className="mb-6">
              <Zap className="h-16 w-16 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Deze sectie wordt binnenkort beschikbaar. We werken hard aan het toevoegen van meer geweldige functies!
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Binnenkort beschikbaar</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Geavanceerde functies voor {activeTab}</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Feedback gewenst</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Laat ons weten welke functies je het meest nodig hebt</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 flex transition-all duration-500">
      {/* Floating spiritual elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-5 dark:opacity-10 animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-3xl opacity-5 dark:opacity-10 animate-bounce">🕊️</div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-5 dark:opacity-10 animate-pulse">🙏</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-5 dark:opacity-10 animate-bounce">⭐</div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-2xl border-r border-amber-200/50 dark:border-purple-700/50">
        <div className="p-6 border-b border-amber-200/50 dark:border-purple-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Believe</span>
            </div>
            <button
              onClick={handleGoHome}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              title="Ga naar Homepage"
            >
              <Home className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">Admin Portal</p>
        </div>
        
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              <img 
                src={user?.avatar || 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                alt={user?.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 text-sm">{user?.name}</p>
                <p className="text-xs text-blue-600">Administrator</p>
              </div>
              <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showUserMenu && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <button
                  onClick={() => setActiveTab('profile')}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Profiel Instellingen</span>
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 transition-colors text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Uitloggen</span>
                </button>
              </div>
            )}
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-10 w-10 text-amber-600 dark:text-amber-400" />
                <Sparkles className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                  Believe
                </span>
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Partner Dashboard</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-slate-600 transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-700/50 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {editingDonation ? 'Donatie Bewerken' : 'Nieuwe Donatie'}
                </h3>
                <button 
                  onClick={() => setShowDonationModal(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Donateur Naam
                  </label>
                  <input
                    type="text"
                    placeholder="Voer naam in"
                    defaultValue={editingDonation?.donorName || ''}
                    className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Bedrag (€)
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    defaultValue={editingDonation?.amount || ''}
                    className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Fonds
                  </label>
                  <select
                    defaultValue={editingDonation?.fund || 'Algemeen Fonds'}
                    className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  >
                    <option value="Algemeen Fonds">Algemeen Fonds</option>
                    <option value="Gebouw Fonds">Gebouw Fonds</option>
                    <option value="Jeugd Programma">Jeugd Programma</option>
                    <option value="Missie Werk">Missie Werk</option>
                    <option value="Noodhulp">Noodhulp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Betaalmethode
                  </label>
                  <select
                    defaultValue={editingDonation?.method || 'iDEAL'}
                    className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                  >
                    <option value="iDEAL">iDEAL</option>
                    <option value="Creditcard">Creditcard</option>
                    <option value="Bankoverschrijving">Bankoverschrijving</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Contant">Contant</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Status
                </label>
                <select
                  defaultValue={editingDonation?.status || 'voltooid'}
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300"
                >
                  <option value="voltooid">Voltooid</option>
                  <option value="verwerking">In Verwerking</option>
                  <option value="mislukt">Mislukt</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Bericht van Donateur (optioneel)
                </label>
                <textarea
                  rows={4}
                  placeholder="Persoonlijk bericht van de donateur..."
                  defaultValue={editingDonation?.message || ''}
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-200 dark:border-slate-600 flex justify-end space-x-3">
              <button 
                onClick={() => setShowDonationModal(false)}
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                Annuleren
              </button>
              <button 
                onClick={handleSaveDonation}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 dark:hover:from-emerald-600 dark:hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {editingDonation ? 'Bijwerken' : 'Opslaan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;