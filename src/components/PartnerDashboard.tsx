import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Heart, 
  BarChart3, 
  Settings, 
  Globe,
  LogOut,
  Home,
  ChevronDown,
  Plus,
  UserPlus,
  Edit,
  Trash2,
  Eye,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Mail,
  Phone,
  Star,
  CheckCircle,
  AlertCircle,
  X,
  Book,
  Music,
  Mic,
  Camera,
  FileText,
  MessageSquare,
  Bell,
  Shield,
  CreditCard,
  PieChart,
  Download,
  Upload,
  Search,
  Filter,
  Archive,
  Bookmark,
  Gift,
  Award,
  Target,
  Zap,
  Brain,
  Bot,
  Sparkles,
  Wand2,
  MessageCircle,
  FileImage,
  Video,
  Headphones,
  Printer,
  Share2,
  QrCode,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Database,
  Cloud,
  Lock,
  Key,
  UserCheck,
  UserX,
  Activity,
  Clipboard,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as LocationIcon,
  Users as UsersIcon,
  Heart as HeartIcon
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import InvitationModal from './InvitationModal';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  type: 'prayer' | 'service' | 'community' | 'education' | 'special';
}

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'inactive';
  role: 'member' | 'volunteer' | 'leader';
  groups: string[];
  donations: number;
}

interface Donation {
  id: string;
  amount: number;
  donor: string;
  purpose: string;
  date: string;
  method: 'cash' | 'card' | 'bank' | 'online';
  recurring: boolean;
}

interface AITool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'content' | 'analysis' | 'communication' | 'planning' | 'education';
}

const PartnerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showAIToolModal, setShowAIToolModal] = useState(false);
  const [selectedAITool, setSelectedAITool] = useState<AITool | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  // 30+ Normal Functions organized by category
  const sidebarItems = [
    // Core Management (8 functions)
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, category: 'core' },
    { id: 'members', label: 'Ledenbeheer', icon: Users, category: 'core' },
    { id: 'events', label: 'Evenementen', icon: Calendar, category: 'core' },
    { id: 'donations', label: 'Donaties', icon: Heart, category: 'core' },
    { id: 'groups', label: 'Groepen', icon: UsersIcon, category: 'core' },
    { id: 'volunteers', label: 'Vrijwilligers', icon: UserCheck, category: 'core' },
    { id: 'attendance', label: 'Aanwezigheid', icon: Activity, category: 'core' },
    { id: 'reports', label: 'Rapporten', icon: FileText, category: 'core' },

    // Communication (6 functions)
    { id: 'messages', label: 'Berichten', icon: MessageSquare, category: 'communication' },
    { id: 'announcements', label: 'Mededelingen', icon: Bell, category: 'communication' },
    { id: 'newsletter', label: 'Nieuwsbrief', icon: Mail, category: 'communication' },
    { id: 'notifications', label: 'Notificaties', icon: Smartphone, category: 'communication' },
    { id: 'social', label: 'Social Media', icon: Share2, category: 'communication' },
    { id: 'website', label: 'Website', icon: Globe, category: 'communication' },

    // Content & Media (6 functions)
    { id: 'sermons', label: 'Preken/Lezingen', icon: Mic, category: 'content' },
    { id: 'library', label: 'Bibliotheek', icon: Book, category: 'content' },
    { id: 'media', label: 'Media Archief', icon: FileImage, category: 'content' },
    { id: 'music', label: 'Muziek/Koor', icon: Music, category: 'content' },
    { id: 'livestream', label: 'Live Streaming', icon: Video, category: 'content' },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones, category: 'content' },

    // Financial (5 functions)
    { id: 'finance', label: 'Financiën', icon: DollarSign, category: 'financial' },
    { id: 'expenses', label: 'Uitgaven', icon: CreditCard, category: 'financial' },
    { id: 'budget', label: 'Begroting', icon: PieChart, category: 'financial' },
    { id: 'fundraising', label: 'Fondsenwerving', icon: Target, category: 'financial' },
    { id: 'grants', label: 'Subsidies', icon: Award, category: 'financial' },

    // Operations (5 functions)
    { id: 'facilities', label: 'Faciliteiten', icon: MapPin, category: 'operations' },
    { id: 'maintenance', label: 'Onderhoud', icon: Settings, category: 'operations' },
    { id: 'security', label: 'Beveiliging', icon: Shield, category: 'operations' },
    { id: 'inventory', label: 'Inventaris', icon: Archive, category: 'operations' },
    { id: 'bookings', label: 'Reserveringen', icon: Bookmark, category: 'operations' },

    // AI Tools (5 AI functions)
    { id: 'ai-tools', label: 'AI Assistenten', icon: Bot, category: 'ai' },
  ];

  // 5 AI Tools
  const aiTools: AITool[] = [
    {
      id: 'sermon-writer',
      name: 'Preek/Lezing Schrijver',
      description: 'AI-assistent die helpt bij het schrijven van preken, lezingen en spirituele content',
      icon: Wand2,
      category: 'content'
    },
    {
      id: 'community-analyzer',
      name: 'Gemeenschap Analyzer',
      description: 'Analyseert gemeenschapsdata en geeft inzichten over betrokkenheid en groei',
      icon: Brain,
      category: 'analysis'
    },
    {
      id: 'event-planner',
      name: 'Evenement Planner',
      description: 'Intelligente planning van evenementen gebaseerd op historische data en voorkeuren',
      icon: Sparkles,
      category: 'planning'
    },
    {
      id: 'prayer-assistant',
      name: 'Gebed/Meditatie Gids',
      description: 'Persoonlijke spirituele begeleiding en gebedsondersteuning',
      icon: Heart,
      category: 'education'
    },
    {
      id: 'communication-bot',
      name: 'Communicatie Bot',
      description: 'Automatische beantwoording van vragen en gemeenschapscommunicatie',
      icon: MessageCircle,
      category: 'communication'
    }
  ];

  const mockEvents: Event[] = [
    {
      id: '1',
      title: 'Vrijdaggebed',
      description: 'Wekelijks vrijdaggebed voor de gemeenschap',
      date: '2024-12-27',
      time: '13:00',
      location: 'Hoofdzaal',
      capacity: 200,
      registered: 145,
      status: 'upcoming',
      type: 'prayer'
    },
    {
      id: '2',
      title: 'Gemeenschapsmaaltijd',
      description: 'Maandelijkse gemeenschapsmaaltijd na het gebed',
      date: '2024-12-28',
      time: '19:00',
      location: 'Gemeenschapszaal',
      capacity: 100,
      registered: 78,
      status: 'upcoming',
      type: 'community'
    }
  ];

  const mockMembers: Member[] = [
    {
      id: '1',
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      phone: '06-12345678',
      joinDate: '2023-01-15',
      status: 'active',
      role: 'leader',
      groups: ['Bestuur', 'Vrijwilligers'],
      donations: 1250
    },
    {
      id: '2',
      name: 'Fatima Al-Zahra',
      email: 'fatima@example.com',
      phone: '06-87654321',
      joinDate: '2023-03-20',
      status: 'active',
      role: 'volunteer',
      groups: ['Vrouwengroep', 'Onderwijs'],
      donations: 850
    }
  ];

  const mockDonations: Donation[] = [
    {
      id: '1',
      amount: 500,
      donor: 'Ahmed Hassan',
      purpose: 'Algemeen Fonds',
      date: '2024-12-15',
      method: 'bank',
      recurring: true
    },
    {
      id: '2',
      amount: 250,
      donor: 'Fatima Al-Zahra',
      purpose: 'Onderwijs Programma',
      date: '2024-12-10',
      method: 'online',
      recurring: false
    }
  ];

  const getOrgIcon = () => {
    switch (user?.organizationType) {
      case 'church': return '⛪';
      case 'mosque': return '🕌';
      case 'synagogue': return '🕍';
      default: return '🏛️';
    }
  };

  const getOrgColor = () => {
    switch (user?.organizationType) {
      case 'church': return 'blue';
      case 'mosque': return 'emerald';
      case 'synagogue': return 'purple';
      default: return 'amber';
    }
  };

  const orgColor = getOrgColor();

  const renderAIToolModal = () => {
    if (!showAIToolModal || !selectedAITool) return null;

    const ToolIcon = selectedAITool.icon;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <ToolIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedAITool.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{selectedAITool.description}</p>
              </div>
            </div>
            <button
              onClick={() => setShowAIToolModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="p-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                AI Assistent Actief
              </h3>
              <p className="text-purple-700 dark:text-purple-300">
                Deze AI-tool is nu beschikbaar en kan je helpen met {selectedAITool.name.toLowerCase()}. 
                Stel je vraag of geef je opdracht hieronder.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jouw Vraag of Opdracht
                </label>
                <textarea
                  placeholder={`Bijvoorbeeld: "Schrijf een preek over hoop" of "Analyseer onze gemeenschapsgroei"`}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowAIToolModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Annuleren
                </button>
                <button
                  className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                >
                  AI Starten
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welkom bij {user?.organizationName}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Uitgebreid beheer dashboard voor je gemeenschap</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowEventModal(true)}
                  className={`flex items-center space-x-2 px-4 py-2 bg-${orgColor}-600 text-white rounded-lg hover:bg-${orgColor}-700 transition-colors`}
                >
                  <Plus className="h-4 w-4" />
                  <span>Nieuw Evenement</span>
                </button>
                <button
                  onClick={() => setShowInvitationModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Leden Uitnodigen</span>
                </button>
              </div>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-${orgColor}-100 dark:bg-${orgColor}-900/30 rounded-lg`}>
                    <Users className={`h-6 w-6 text-${orgColor}-600 dark:text-${orgColor}-400`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Leden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">324</p>
                    <p className="text-xs text-green-600 dark:text-green-400">+12 deze maand</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aankomende Evenementen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{mockEvents.length}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">Deze week</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donaties Deze Maand</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€2,450</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400">+18% vs vorige maand</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Betrokkenheid</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">87%</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Zeer actief</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Snelle Acties</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { icon: UserPlus, label: 'Lid Toevoegen', action: () => setShowInvitationModal(true) },
                  { icon: Calendar, label: 'Evenement', action: () => setShowEventModal(true) },
                  { icon: Mail, label: 'Nieuwsbrief', action: () => setActiveTab('newsletter') },
                  { icon: Bell, label: 'Mededeling', action: () => setActiveTab('announcements') },
                  { icon: Heart, label: 'Donatie', action: () => setActiveTab('donations') },
                  { icon: Bot, label: 'AI Assistent', action: () => setActiveTab('ai-tools') }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Icon className={`h-6 w-6 text-${orgColor}-600 dark:text-${orgColor}-400`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aankomende Evenementen</h3>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockEvents.map((event) => (
                    <div key={event.id} className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 bg-${orgColor}-100 dark:bg-${orgColor}-900/30 rounded-lg`}>
                          <Calendar className={`h-5 w-5 text-${orgColor}-600 dark:text-${orgColor}-400`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{event.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{event.date} om {event.time}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">{event.registered}/{event.capacity} aangemeld</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Donaties</h3>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockDonations.map((donation) => (
                    <div key={donation.id} className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{donation.donor}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{donation.purpose}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">{donation.date}</p>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        €{donation.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-tools':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Assistenten</h1>
                <p className="text-gray-600 dark:text-gray-400">Intelligente tools om je gemeenschap te ondersteunen</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center space-x-3 mb-4">
                <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">AI-Powered Management</h3>
                  <p className="text-purple-700 dark:text-purple-300">Gebruik kunstmatige intelligentie om je gemeenschap effectiever te beheren</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool) => {
                const ToolIcon = tool.icon;
                return (
                  <div key={tool.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <ToolIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                        <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedAITool(tool);
                        setShowAIToolModal(true);
                      }}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      AI Starten
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Gebruik Statistieken</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">127</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI Sessies Deze Maand</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">45min</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Gemiddelde Sessie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">94%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tevredenheid</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'members':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ledenbeheer</h1>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Zoek leden..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <button
                  onClick={() => setShowInvitationModal(true)}
                  className={`flex items-center space-x-2 px-4 py-2 bg-${orgColor}-600 text-white rounded-lg hover:bg-${orgColor}-700 transition-colors`}
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Lid Toevoegen</span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lid</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Groepen</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Donaties</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Acties</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {member.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Lid sinds {member.joinDate}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{member.email}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{member.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                            member.role === 'leader' 
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                              : member.role === 'volunteer'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {member.groups.map((group, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                {group}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          €{member.donations}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            member.status === 'active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Deze functie is in ontwikkeling en wordt binnenkort beschikbaar gesteld.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Onderdeel van het uitgebreide beheersysteem met 30+ functies
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{getOrgIcon()}</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {user?.organizationName?.split(' ')[0] || 'Believe'}
              </span>
            </div>
            <button
              onClick={handleGoHome}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-300"
              title="Ga naar Homepage"
            >
              <Home className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Uitgebreid Beheersysteem</p>
        </div>
        
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-300"
            >
              <img 
                src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                alt={user?.name}
                className={`w-10 h-10 rounded-full object-cover border-2 border-${orgColor}-200 dark:border-${orgColor}-600`}
              />
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 dark:text-white text-sm">{user?.name}</p>
                <p className={`text-xs text-${orgColor}-600 dark:text-${orgColor}-400`}>Partner</p>
              </div>
              <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showUserMenu && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
                <button
                  onClick={() => setActiveTab('settings')}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Instellingen</span>
                </button>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors text-red-600 dark:text-red-400"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Uitloggen</span>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation with Categories */}
        <nav className="p-4 max-h-[calc(100vh-300px)] overflow-y-auto">
          <div className="space-y-6">
            {/* Core Management */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Kern Beheer
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'core').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? `bg-${orgColor}-50 dark:bg-${orgColor}-900/30 text-${orgColor}-700 dark:text-${orgColor}-300 border border-${orgColor}-200 dark:border-${orgColor}-700`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Communication */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Communicatie
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'communication').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? `bg-${orgColor}-50 dark:bg-${orgColor}-900/30 text-${orgColor}-700 dark:text-${orgColor}-300 border border-${orgColor}-200 dark:border-${orgColor}-700`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content & Media */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Content & Media
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'content').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? `bg-${orgColor}-50 dark:bg-${orgColor}-900/30 text-${orgColor}-700 dark:text-${orgColor}-300 border border-${orgColor}-200 dark:border-${orgColor}-700`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Financial */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Financieel
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'financial').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? `bg-${orgColor}-50 dark:bg-${orgColor}-900/30 text-${orgColor}-700 dark:text-${orgColor}-300 border border-${orgColor}-200 dark:border-${orgColor}-700`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Operations */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Operationeel
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'operations').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? `bg-${orgColor}-50 dark:bg-${orgColor}-900/30 text-${orgColor}-700 dark:text-${orgColor}-300 border border-${orgColor}-200 dark:border-${orgColor}-700`
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <h3 className="text-xs font-semibold text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-2">
                AI Assistenten
              </h3>
              <div className="space-y-1">
                {sidebarItems.filter(item => item.category === 'ai').map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                      <Sparkles className="h-3 w-3 text-purple-500 ml-auto" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>

      {/* Modals */}
      {showInvitationModal && (
        <InvitationModal
          isOpen={showInvitationModal}
          onClose={() => setShowInvitationModal(false)}
          organizationName={user?.organizationName || 'Onze Organisatie'}
          organizationType={user?.organizationType || 'church'}
        />
      )}

      {renderAIToolModal()}
    </div>
  );
};

export default PartnerDashboard;