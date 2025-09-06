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
  Send,
  Copy,
  ExternalLink,
  RefreshCw,
  Save,
  Pause,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Layers,
  Type,
  Image,
  Layout,
  Palette,
  Brush,
  Scissors,
  Paperclip,
  Link,
  Hash,
  AtSign,
  Percent,
  DollarSign as Dollar,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard as Card,
  Banknote,
  Receipt,
  Calculator,
  PiggyBank,
  Coins,
  Wallet,
  ShoppingCart,
  ShoppingBag,
  Package,
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  Bike,
  Bus,
  Taxi,
  Fuel,
  Battery,
  Zap as Lightning,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Umbrella,
  Rainbow,
  Sunrise,
  Sunset,
  Mountain,
  Tree,
  Flower,
  Leaf,
  Seedling,
  Apple,
  Cherry,
  Grape,
  Lemon,
  Orange,
  Strawberry,
  Carrot,
  Corn,
  Wheat,
  Coffee,
  Wine,
  Beer,
  Milk,
  Egg,
  Cheese,
  Bread,
  Pizza,
  Hamburger,
  Sandwich,
  Taco,
  Salad,
  Soup,
  IceCream,
  Cookie,
  Cake,
  Candy,
  Chocolate,
  Donut,
  Popcorn,
  Pretzel,
  Croissant,
  Bagel,
  Waffle,
  Pancakes,
  Bacon,
  Sausage,
  Chicken,
  Fish,
  Shrimp,
  Lobster,
  Crab,
  Oyster,
  Clam,
  Squid,
  Octopus,
  Shark,
  Whale,
  Dolphin,
  Seal,
  Penguin,
  Polar,
  Bear,
  Panda,
  Koala,
  Tiger,
  Lion,
  Leopard,
  Cheetah,
  Jaguar,
  Wolf,
  Fox,
  Dog,
  Cat,
  Rabbit,
  Hamster,
  Mouse,
  Rat,
  Elephant,
  Rhino,
  Hippo,
  Giraffe,
  Zebra,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Deer,
  Moose,
  Elk,
  Buffalo,
  Camel,
  Llama,
  Kangaroo,
  Monkey,
  Gorilla,
  Orangutan,
  Chimp,
  Sloth,
  Bat,
  Bird,
  Eagle,
  Hawk,
  Owl,
  Parrot,
  Flamingo,
  Swan,
  Duck,
  Goose,
  Turkey,
  Chicken as ChickenIcon,
  Rooster,
  Peacock,
  Dove,
  Crow,
  Raven,
  Robin,
  Sparrow,
  Hummingbird,
  Woodpecker,
  Pelican,
  Stork,
  Crane,
  Heron,
  Kingfisher,
  Toucan,
  Puffin,
  Albatross,
  Seagull,
  Tern,
  Cormorant,
  Gannet,
  Frigatebird,
  Booby,
  Petrel,
  Shearwater,
  Skua,
  Jaeger,
  Gull,
  Kittiwake,
  Murre,
  Guillemot,
  Razorbill,
  Auk,
  Sandpiper,
  Plover,
  Turnstone,
  Knot,
  Dunlin,
  Sanderling,
  Stint,
  Curlew,
  Godwit,
  Snipe,
  Woodcock,
  Phalarope,
  Avocet,
  Stilt,
  Oystercatcher,
  Lapwing,
  Dotterel,
  Killdeer,
  Yellowlegs,
  Tattler,
  Surfbird,
  Wanderer,
  Dowitcher,
  Ruff,
  Buff,
  Redshank,
  Greenshank,
  Spotted,
  Solitary,
  Willet,
  Whimbrel,
  Bristle,
  Thighed,
  Curlew as CurlewIcon,
  Godwit as GodwitIcon,
  Turnstone as TurnstoneIcon,
  Ruddy,
  Black,
  Surfbird as SurfbirdIcon,
  Rock,
  Purple,
  Baird,
  White,
  Rumped,
  Buff as BuffIcon,
  Breasted,
  Pectoral,
  Sharp,
  Tailed,
  Curlew as CurlewSandpiper,
  Stilt as StiltSandpiper,
  Spoon,
  Billed,
  Broad,
  Semipalmated,
  Western,
  Least,
  Temminck,
  Long,
  Toed,
  Red,
  Necked,
  Little,
  Stint as StintIcon,
  TrendingDown,
  Building,
  MousePointer
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
  type: 'service' | 'study' | 'community' | 'youth' | 'special';
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
  lastActivity: string;
}

interface Donation {
  id: string;
  amount: number;
  donor: string;
  purpose: string;
  date: string;
  method: 'cash' | 'card' | 'bank' | 'online';
  recurring: boolean;
  status: 'completed' | 'pending' | 'failed';
}

interface Message {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
  type: 'inbox' | 'sent' | 'draft';
}

interface LibraryItem {
  id: string;
  title: string;
  author: string;
  type: 'sermon' | 'article' | 'video' | 'audio' | 'book';
  date: string;
  duration?: string;
  description: string;
  thumbnail?: string;
  tags: string[];
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const sidebarItems = [
    // Core Management
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, category: 'core' },
    { id: 'members', label: 'Leden', icon: Users, category: 'core' },
    { id: 'events', label: 'Evenementen', icon: Calendar, category: 'core' },
    { id: 'donations', label: 'Donaties', icon: Heart, category: 'core' },
    { id: 'groups', label: 'Groepen', icon: Users, category: 'core' },
    { id: 'volunteers', label: 'Vrijwilligers', icon: UserCheck, category: 'core' },
    { id: 'attendance', label: 'Aanwezigheid', icon: Activity, category: 'core' },
    { id: 'reports', label: 'Rapporten', icon: FileText, category: 'core' },

    // Communication
    { id: 'messages', label: 'Berichten', icon: MessageSquare, category: 'communication' },
    { id: 'announcements', label: 'Mededelingen', icon: Bell, category: 'communication' },
    { id: 'newsletter', label: 'Nieuwsbrief', icon: Mail, category: 'communication' },
    { id: 'notifications', label: 'Notificaties', icon: Smartphone, category: 'communication' },
    { id: 'social', label: 'Social Media', icon: Share2, category: 'communication' },
    { id: 'website', label: 'Website', icon: Globe, category: 'communication' },

    // Content & Media
    { id: 'sermons', label: 'Preken', icon: Mic, category: 'content' },
    { id: 'library', label: 'Bibliotheek', icon: Book, category: 'content' },
    { id: 'media', label: 'Media Archief', icon: FileImage, category: 'content' },
    { id: 'music', label: 'Muziek', icon: Music, category: 'content' },
    { id: 'livestream', label: 'Live Streaming', icon: Video, category: 'content' },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones, category: 'content' },

    // Financial
    { id: 'finance', label: 'Financiën', icon: DollarSign, category: 'financial' },
    { id: 'expenses', label: 'Uitgaven', icon: CreditCard, category: 'financial' },
    { id: 'budget', label: 'Begroting', icon: PieChart, category: 'financial' },
    { id: 'fundraising', label: 'Fondsenwerving', icon: Target, category: 'financial' },
    { id: 'grants', label: 'Subsidies', icon: Award, category: 'financial' },

    // Operations
    { id: 'facilities', label: 'Faciliteiten', icon: MapPin, category: 'operations' },
    { id: 'maintenance', label: 'Onderhoud', icon: Settings, category: 'operations' },
    { id: 'security', label: 'Beveiliging', icon: Shield, category: 'operations' },
    { id: 'inventory', label: 'Inventaris', icon: Archive, category: 'operations' },
    { id: 'bookings', label: 'Reserveringen', icon: Bookmark, category: 'operations' },

    // Settings
    { id: 'settings', label: 'Instellingen', icon: Settings, category: 'settings' },
  ];

  // Mock Data
  const mockEvents: Event[] = [
    {
      id: '1',
      title: 'Zondagsdienst',
      description: 'Wekelijkse zondagsdienst met preek en gemeenschapszang',
      date: '2024-12-29',
      time: '10:00',
      location: 'Hoofdkerk',
      capacity: 300,
      registered: 245,
      status: 'upcoming',
      type: 'service'
    },
    {
      id: '2',
      title: 'Bijbelstudie',
      description: 'Wekelijkse bijbelstudie voor alle leeftijden',
      date: '2024-12-30',
      time: '19:30',
      location: 'Gemeenschapszaal',
      capacity: 50,
      registered: 32,
      status: 'upcoming',
      type: 'study'
    },
    {
      id: '3',
      title: 'Nieuwjaarsviering',
      description: 'Speciale nieuwjaarsviering met gebed en reflectie',
      date: '2024-12-31',
      time: '23:00',
      location: 'Hoofdkerk',
      capacity: 200,
      registered: 156,
      status: 'upcoming',
      type: 'special'
    }
  ];

  const mockMembers: Member[] = [
    {
      id: '1',
      name: 'Maria van der Berg',
      email: 'maria@example.com',
      phone: '06-12345678',
      joinDate: '2023-01-15',
      status: 'active',
      role: 'leader',
      groups: ['Koor', 'Bestuur', 'Vrijwilligers'],
      donations: 2450,
      lastActivity: '2024-12-20'
    },
    {
      id: '2',
      name: 'Johannes Bakker',
      email: 'johannes@example.com',
      phone: '06-87654321',
      joinDate: '2023-03-20',
      status: 'active',
      role: 'volunteer',
      groups: ['Jongerengroep', 'Muziekteam'],
      donations: 1200,
      lastActivity: '2024-12-19'
    },
    {
      id: '3',
      name: 'Anna de Vries',
      email: 'anna@example.com',
      phone: '06-11223344',
      joinDate: '2022-09-10',
      status: 'active',
      role: 'member',
      groups: ['Vrouwengroep'],
      donations: 850,
      lastActivity: '2024-12-18'
    }
  ];

  const mockDonations: Donation[] = [
    {
      id: '1',
      amount: 500,
      donor: 'Maria van der Berg',
      purpose: 'Algemeen Fonds',
      date: '2024-12-15',
      method: 'bank',
      recurring: true,
      status: 'completed'
    },
    {
      id: '2',
      amount: 250,
      donor: 'Johannes Bakker',
      purpose: 'Jeugdwerk',
      date: '2024-12-10',
      method: 'online',
      recurring: false,
      status: 'completed'
    },
    {
      id: '3',
      amount: 100,
      donor: 'Anna de Vries',
      purpose: 'Onderhoud Gebouw',
      date: '2024-12-08',
      method: 'cash',
      recurring: false,
      status: 'completed'
    }
  ];

  const mockMessages: Message[] = [
    {
      id: '1',
      sender: 'Maria van der Berg',
      recipient: 'Admin',
      subject: 'Vraag over koorrepetitie',
      content: 'Hallo, ik wilde vragen of de koorrepetitie van volgende week doorgaat...',
      date: '2024-12-20',
      read: false,
      type: 'inbox'
    },
    {
      id: '2',
      sender: 'Johannes Bakker',
      recipient: 'Admin',
      subject: 'Vrijwilligerswerk',
      content: 'Ik zou graag willen helpen bij het organiseren van het nieuwjaarsevenement...',
      date: '2024-12-19',
      read: true,
      type: 'inbox'
    }
  ];

  const mockLibraryItems: LibraryItem[] = [
    {
      id: '1',
      title: 'Hoop in Moeilijke Tijden',
      author: 'Dominee Jan Smit',
      type: 'sermon',
      date: '2024-12-15',
      duration: '35 min',
      description: 'Een inspirerende preek over het vinden van hoop tijdens uitdagende momenten.',
      thumbnail: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['hoop', 'geloof', 'moeilijkheden']
    },
    {
      id: '2',
      title: 'De Kracht van Gebed',
      author: 'Dr. Sarah de Jong',
      type: 'article',
      date: '2024-12-10',
      description: 'Een diepgaand artikel over de spirituele en psychologische voordelen van gebed.',
      tags: ['gebed', 'spiritualiteit', 'welzijn']
    },
    {
      id: '3',
      title: 'Kerstviering 2024',
      author: 'Gemeenschap',
      type: 'video',
      date: '2024-12-25',
      duration: '1u 15min',
      description: 'Opname van onze prachtige kerstviering met koor en speciale gasten.',
      thumbnail: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=300',
      tags: ['kerst', 'viering', 'gemeenschap']
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welkom, {user?.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer je gemeenschap effectief</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowEventModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Leden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{mockMembers.length}</p>
                    <p className="text-xs text-green-600 dark:text-green-400">+2 deze week</p>
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
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      €{mockDonations.reduce((sum, d) => sum + d.amount, 0)}
                    </p>
                    <p className="text-xs text-purple-600 dark:text-purple-400">+15% vs vorige maand</p>
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
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">92%</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Zeer actief</p>
                  </div>
                </div>
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
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Evenementenbeheer</h1>
              <button
                onClick={() => setShowEventModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Nieuw Evenement</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockEvents.map((event) => (
                <div key={event.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      event.type === 'service' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        : event.type === 'study'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : event.type === 'community'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        : event.type === 'youth'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {event.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' 
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : event.status === 'ongoing'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date} om {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{event.registered}/{event.capacity} aangemeld</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Bewerken
                    </button>
                    <button className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'donations':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Donatiebeheer</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer donaties en fondsenwerving</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Donatie
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deze Maand</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€2,450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Groei</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">+18%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donateurs</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">127</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gemiddeld</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€19</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Donaties</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { donor: 'Maria Jansen', amount: 50, purpose: 'Algemeen Fonds', date: '2024-12-20', method: 'Bank' },
                  { donor: 'Jan de Vries', amount: 25, purpose: 'Jeugdwerk', date: '2024-12-19', method: 'Contant' },
                  { donor: 'Anna Bakker', amount: 100, purpose: 'Onderhoud', date: '2024-12-18', method: 'Online' }
                ].map((donation, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{donation.donor}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{donation.purpose} • {donation.method}</p>
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
        );

      case 'groups':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Groepenbeheer</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer alle gemeenschapsgroepen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Groep
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Groepen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <UserPlus className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Leden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">187</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deze Week</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Groei</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">+15%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Groups List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alle Groepen</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { name: 'Koor', category: 'Muziek', members: 24, leader: 'Maria Jansen', nextMeeting: '2024-12-22' },
                  { name: 'Jongerengroep', category: 'Sociaal', members: 18, leader: 'Jan de Vries', nextMeeting: '2024-12-21' },
                  { name: 'Bijbelstudie', category: 'Studie', members: 32, leader: 'Anna Bakker', nextMeeting: '2024-12-23' },
                  { name: 'Vrijwilligersteam', category: 'Service', members: 15, leader: 'Piet Smit', nextMeeting: '2024-12-24' }
                ].map((group, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{group.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{group.category} • {group.members} leden</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Leider: {group.leader}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Volgende bijeenkomst</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{group.nextMeeting}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'volunteers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vrijwilligersbeheer</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer vrijwilligers en hun taken</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <UserPlus className="h-4 w-4 inline mr-2" />
                Nieuwe Vrijwilliger
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Vrijwilligers</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">45</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Uren Deze Maand</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">234</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Teams</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Voltooide Taken</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">127</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Teams */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vrijwilligersteams</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { team: 'Welkomstteam', leader: 'Maria Jansen', members: 8, nextShift: '2024-12-22' },
                  { team: 'Techniek', leader: 'Jan de Vries', members: 5, nextShift: '2024-12-21' },
                  { team: 'Kinderopvang', leader: 'Anna Bakker', members: 12, nextShift: '2024-12-22' },
                  { team: 'Catering', leader: 'Piet Smit', members: 10, nextShift: '2024-12-23' }
                ].map((team, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{team.team}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Teamleider: {team.leader}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{team.members} vrijwilligers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Volgende dienst</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{team.nextShift}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Aanwezigheidsregistratie</h1>
                <p className="text-gray-600 dark:text-gray-400">Volg aanwezigheid bij evenementen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Registratie Toevoegen
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gemiddelde Aanwezigheid</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">87%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Trend</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">+5%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Evenementen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Aanwezig</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Attendance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Aanwezigheid</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { event: 'Zondagsdienst', date: '2024-12-22', present: 145, total: 180, percentage: 81 },
                  { event: 'Woensdaggebed', date: '2024-12-18', present: 67, total: 75, percentage: 89 },
                  { event: 'Jongerenbijeenkomst', date: '2024-12-15', present: 23, total: 28, percentage: 82 },
                  { event: 'Koorrepetitie', date: '2024-12-14', present: 18, total: 24, percentage: 75 }
                ].map((attendance, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{attendance.event}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{attendance.date}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{attendance.present}/{attendance.total} aanwezig</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-semibold ${
                        attendance.percentage >= 85 ? 'text-green-600 dark:text-green-400' :
                        attendance.percentage >= 70 ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {attendance.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rapporten & Analytics</h1>
                <p className="text-gray-600 dark:text-gray-400">Inzichten en statistieken</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Download className="h-4 w-4 inline mr-2" />
                Export Rapport
              </button>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Leden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">324</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Groei Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">+12%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donaties</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€2,450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Evenementen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">18</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Ledenrapport', description: 'Groei en betrokkenheid', icon: Users, color: 'blue' },
                { title: 'Financieel Rapport', description: 'Donaties en uitgaven', icon: DollarSign, color: 'green' },
                { title: 'Evenementen Rapport', description: 'Aanwezigheid en feedback', icon: Calendar, color: 'purple' },
                { title: 'Vrijwilligers Rapport', description: 'Uren en betrokkenheid', icon: UserCheck, color: 'orange' }
              ].map((report, index) => {
                const Icon = report.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className={`p-3 bg-${report.color}-100 dark:bg-${report.color}-900/30 rounded-lg w-fit mb-4`}>
                      <Icon className={`h-6 w-6 text-${report.color}-600 dark:text-${report.color}-400`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'announcements':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mededelingen</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer gemeenschapsmededelingen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Mededeling
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Bell className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Mededelingen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gelezen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">89%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reacties</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Share2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gedeeld</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcements List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Mededelingen</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Kerstviering 2024', priority: 'Hoog', status: 'Gepubliceerd', date: '2024-12-20', views: 145 },
                  { title: 'Nieuwe Openingstijden', priority: 'Medium', status: 'Gepubliceerd', date: '2024-12-18', views: 89 },
                  { title: 'Vrijwilligers Gezocht', priority: 'Medium', status: 'Concept', date: '2024-12-15', views: 0 },
                  { title: 'Gemeenschapsmaaltijd', priority: 'Laag', status: 'Gepubliceerd', date: '2024-12-12', views: 67 }
                ].map((announcement, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{announcement.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            announcement.priority === 'Hoog' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                            announcement.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                            {announcement.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            announcement.status === 'Gepubliceerd' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {announcement.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{announcement.date} • {announcement.views} views</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'newsletter':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nieuwsbrief</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer nieuwsbrieven en abonnees</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Nieuwsbrief
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Abonnees</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">298</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">78%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MousePointer className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Click Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">23%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Send className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Verzonden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Templates */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Basis Template', description: 'Eenvoudig en clean design', preview: 'bg-gradient-to-br from-gray-400 to-gray-600' },
                { name: 'Feestelijk Template', description: 'Voor speciale gelegenheden', preview: 'bg-gradient-to-br from-red-400 to-green-600' },
                { name: 'Modern Template', description: 'Eigentijds en strak', preview: 'bg-gradient-to-br from-blue-400 to-purple-600' }
              ].map((template, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className={`h-32 rounded-lg mb-4 ${template.preview} flex items-center justify-center`}>
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                </div>
              ))}
            </div>

            {/* Recent Newsletters */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Nieuwsbrieven</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'December Update', sent: '2024-12-15', opens: 234, clicks: 67, status: 'Verzonden' },
                  { title: 'Kerstboodschap', sent: '2024-12-10', opens: 198, clicks: 45, status: 'Verzonden' },
                  { title: 'Nieuwjaar Vooruitblik', sent: '', opens: 0, clicks: 0, status: 'Concept' }
                ].map((newsletter, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{newsletter.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {newsletter.status === 'Verzonden' ? `Verzonden: ${newsletter.sent}` : 'Concept'}
                        </p>
                        {newsletter.status === 'Verzonden' && (
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {newsletter.opens} opens • {newsletter.clicks} clicks
                          </p>
                        )}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      newsletter.status === 'Verzonden' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {newsletter.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notificaties</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer push notificaties en meldingen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Notificatie
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Send className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Verzonden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bezorgd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,189</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MousePointer className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Geklikt</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">267</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CTR</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">22%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Automatische Instellingen</h3>
              <div className="space-y-4">
                {[
                  { title: 'Evenement Herinneringen', description: 'Stuur herinneringen 24u voor evenementen', enabled: true },
                  { title: 'Nieuwe Mededelingen', description: 'Notificeer bij nieuwe mededelingen', enabled: true },
                  { title: 'Vrijwilliger Oproepen', description: 'Stuur notificaties voor vrijwilligerswerk', enabled: false },
                  { title: 'Stille Uren', description: 'Geen notificaties tussen 22:00 - 08:00', enabled: true }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{setting.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      setting.enabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Notificaties</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Zondagsdienst Herinnering', type: 'Reminder', sent: '2024-12-21', delivered: 145, clicked: 23 },
                  { title: 'Nieuwe Mededeling', type: 'Announcement', sent: '2024-12-20', delivered: 298, clicked: 67 },
                  { title: 'Vrijwilligers Gezocht', type: 'Volunteer', sent: '2024-12-18', delivered: 89, clicked: 12 }
                ].map((notification, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{notification.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{notification.type} • {notification.sent}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {notification.delivered} bezorgd • {notification.clicked} geklikt
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'social':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Social Media</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer sociale media accounts en posts</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Post
              </button>
            </div>
            
            {/* Social Media Accounts */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { platform: 'Facebook', followers: '1.2K', engagement: '4.2%', status: 'Verbonden', color: 'blue', posts: 24 },
                { platform: 'Instagram', followers: '856', engagement: '6.8%', status: 'Verbonden', color: 'pink', posts: 18 },
                { platform: 'YouTube', followers: '432', engagement: '3.1%', status: 'Niet Verbonden', color: 'red', posts: 12 }
              ].map((account, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{account.platform}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      account.status === 'Verbonden' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {account.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Volgers</span>
                      <span className="font-medium text-gray-900 dark:text-white">{account.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Engagement</span>
                      <span className="font-medium text-gray-900 dark:text-white">{account.engagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Posts</span>
                      <span className="font-medium text-gray-900 dark:text-white">{account.posts}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Calendar */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Content Kalender</h3>
              <div className="grid grid-cols-7 gap-4">
                {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="font-medium text-gray-900 dark:text-white mb-2">{day}</div>
                    <div className="space-y-2">
                      {index === 1 && (
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-xs text-blue-800 dark:text-blue-200">
                          Facebook Post
                        </div>
                      )}
                      {index === 3 && (
                        <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded text-xs text-pink-800 dark:text-pink-200">
                          Instagram Story
                        </div>
                      )}
                      {index === 5 && (
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded text-xs text-red-800 dark:text-red-200">
                          YouTube Video
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Posts</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { content: 'Kerstviering aankondiging', platform: 'Facebook', date: '2024-12-20', likes: 45, comments: 12, shares: 8 },
                  { content: 'Gemeenschapsfoto zondag', platform: 'Instagram', date: '2024-12-18', likes: 67, comments: 23, shares: 5 },
                  { content: 'Nieuwe preek online', platform: 'YouTube', date: '2024-12-15', likes: 34, comments: 8, shares: 12 }
                ].map((post, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Share2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{post.content}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{post.platform} • {post.date}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {post.likes} likes • {post.comments} comments • {post.shares} shares
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'website':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Website Beheer</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer je organisatie website</p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => navigate('/builder')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit className="h-4 w-4 inline mr-2" />
                  Website Bewerken
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <Eye className="h-4 w-4 inline mr-2" />
                  Preview
                </button>
              </div>
            </div>
            
            {/* Website Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bezoekers</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pagina Views</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">3,456</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gem. Sessie</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2:34</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">23%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Pages */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Website Pagina's</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { page: 'Homepage', status: 'Gepubliceerd', views: 1247, lastUpdated: '2024-12-20' },
                  { page: 'Over Ons', status: 'Gepubliceerd', views: 456, lastUpdated: '2024-12-18' },
                  { page: 'Diensten', status: 'Gepubliceerd', views: 789, lastUpdated: '2024-12-15' },
                  { page: 'Contact', status: 'Concept', views: 0, lastUpdated: '2024-12-12' }
                ].map((page, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{page.page}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Laatst bijgewerkt: {page.lastUpdated}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{page.views} views</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        page.status === 'Gepubliceerd' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {page.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'sermons':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Preken & Lezingen</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer audio en video opnames</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Preek
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Mic className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Preken</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">127</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Play className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Luisteraars</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2,456</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,234</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gem. Rating</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">4.8</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Sermons */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Preken</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Hoop in Donkere Tijden', speaker: 'Dominee Jansen', date: '2024-12-22', duration: '32:15', plays: 145 },
                  { title: 'Liefde en Vergeving', speaker: 'Dominee Bakker', date: '2024-12-15', duration: '28:43', plays: 89 },
                  { title: 'Geloof in Actie', speaker: 'Dominee Smit', date: '2024-12-08', duration: '35:22', plays: 167 },
                  { title: 'Vrede Vinden', speaker: 'Dominee de Vries', date: '2024-12-01', duration: '29:18', plays: 123 }
                ].map((sermon, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Mic className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{sermon.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{sermon.speaker} • {sermon.date}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{sermon.duration} • {sermon.plays} afgespeeld</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Play className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bibliotheek</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer content en resources</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Resource
              </button>
            </div>
            
            {/* Content Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Preken', count: 127, icon: Mic, color: 'purple', description: 'Audio en video preken' },
                { title: 'Artikelen', count: 89, icon: FileText, color: 'blue', description: 'Geschreven content' },
                { title: 'Video\'s', count: 45, icon: Video, color: 'red', description: 'Video content en tutorials' }
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className={`p-3 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg w-fit mb-4`}>
                      <Icon className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{category.count}</div>
                  </div>
                );
              })}
            </div>

            {/* Recent Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Toegevoegd</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Kerstboodschap 2024', type: 'Video', author: 'Dominee Jansen', date: '2024-12-20', views: 234 },
                  { title: 'Geloof in Moeilijke Tijden', type: 'Artikel', author: 'Maria Bakker', date: '2024-12-18', views: 156 },
                  { title: 'Gemeenschap Opbouwen', type: 'Preek', author: 'Dominee Smit', date: '2024-12-15', views: 189 },
                  { title: 'Jeugdwerk Handleiding', type: 'Document', author: 'Jan de Vries', date: '2024-12-12', views: 67 }
                ].map((content, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Book className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{content.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{content.type} • {content.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{content.date} • {content.views} views</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'media':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Media Archief</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer foto's, video's en audio bestanden</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Upload className="h-4 w-4 inline mr-2" />
                Upload Media
              </button>
            </div>
            
            {/* Media Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileImage className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Foto's</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Video className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Video's</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">89</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Headphones className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Audio</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">156</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal GB</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24.7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Grid */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Geüpload</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }, (_, index) => (
                  <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                    <FileImage className="h-8 w-8 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'music':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Muziek & Koor</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer muziek, koor en worship</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuw Lied
              </button>
            </div>
            
            {/* Music Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Liedjes</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">234</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Koorleden</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Repetities</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Mic className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Optredens</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Song List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Liedjeslijst</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Amazing Grace', artist: 'Traditioneel', key: 'G', tempo: '72 BPM', lastUsed: '2024-12-22' },
                  { title: 'How Great Thou Art', artist: 'Carl Boberg', key: 'C', tempo: '68 BPM', lastUsed: '2024-12-15' },
                  { title: 'Blessed Be Your Name', artist: 'Matt Redman', key: 'D', tempo: '76 BPM', lastUsed: '2024-12-08' },
                  { title: 'In Christ Alone', artist: 'Keith Getty', key: 'A', tempo: '74 BPM', lastUsed: '2024-12-01' }
                ].map((song, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Music className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{song.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{song.artist}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {song.key} • {song.tempo} • Laatst gebruikt: {song.lastUsed}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Play className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'livestream':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Live Streaming</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer live uitzendingen</p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <Video className="h-4 w-4 inline mr-2" />
                Start Stream
              </button>
            </div>
            
            {/* Stream Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Video className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Live Kijkers</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Views</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2,456</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Stream Tijd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Chat Berichten</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Stream Preview</h3>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Stream is offline</p>
                  <p className="text-sm opacity-75">Klik op "Start Stream" om te beginnen</p>
                </div>
              </div>
            </div>

            {/* Previous Streams */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vorige Streams</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Zondagsdienst', date: '2024-12-22', duration: '1:32:15', views: 145, peak: 89 },
                  { title: 'Woensdaggebed', date: '2024-12-18', duration: '45:23', views: 67, peak: 34 },
                  { title: 'Kerstviering', date: '2024-12-15', duration: '2:15:45', views: 234, peak: 156 }
                ].map((stream, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <Video className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{stream.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stream.date} • {stream.duration}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {stream.views} views • Peak: {stream.peak} kijkers
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'podcasts':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Podcasts</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer podcast afleveringen</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Aflevering
              </button>
            </div>
            
            {/* Podcast Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Headphones className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Afleveringen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">47</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Abonnees</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,234</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Download className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8,567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">4.7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Episodes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Afleveringen</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Geloof in Actie - Aflevering 47', date: '2024-12-20', duration: '42:15', downloads: 234, status: 'Gepubliceerd' },
                  { title: 'Gemeenschap Opbouwen - Aflevering 46', date: '2024-12-13', duration: '38:22', downloads: 189, status: 'Gepubliceerd' },
                  { title: 'Hoop en Vertrouwen - Aflevering 45', date: '2024-12-06', duration: '45:18', downloads: 267, status: 'Gepubliceerd' },
                  { title: 'Nieuwjaar Vooruitblik - Aflevering 48', date: '', duration: '0:00', downloads: 0, status: 'Concept' }
                ].map((episode, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Headphones className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{episode.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {episode.status === 'Gepubliceerd' ? `${episode.date} • ${episode.duration}` : 'Concept'}
                        </p>
                        {episode.status === 'Gepubliceerd' && (
                          <p className="text-xs text-gray-500 dark:text-gray-500">{episode.downloads} downloads</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        episode.status === 'Gepubliceerd' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {episode.status}
                      </span>
                      <div className="flex space-x-2">
                        {episode.status === 'Gepubliceerd' && (
                          <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                            <Play className="h-4 w-4" />
                          </button>
                        )}
                        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financieel Overzicht</h1>
                <p className="text-gray-600 dark:text-gray-400">Inkomsten, uitgaven en budgetbeheer</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Transactie
              </button>
            </div>
            
            {/* Financial Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Inkomsten</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€12,450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Uitgaven</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€8,230</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Netto Resultaat</p>
                    <p className="text-2xl font-semibold text-green-600 dark:text-green-400">€4,220</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <PieChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Budget Gebruikt</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">67%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Transacties</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { description: 'Donatie - Maria Jansen', amount: 250, type: 'income', date: '2024-12-20', category: 'Donaties' },
                  { description: 'Elektriciteit rekening', amount: -180, type: 'expense', date: '2024-12-18', category: 'Utilities' },
                  { description: 'Kerstversiering', amount: -75, type: 'expense', date: '2024-12-15', category: 'Evenementen' },
                  { description: 'Collecte zondag', amount: 340, type: 'income', date: '2024-12-15', category: 'Collectes' }
                ].map((transaction, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                      }`}>
                        {transaction.type === 'income' ? (
                          <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{transaction.description}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <div className={`text-lg font-semibold ${
                      transaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {transaction.type === 'income' ? '+' : ''}€{Math.abs(transaction.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'expenses':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Uitgavenbeheer</h1>
                <p className="text-gray-600 dark:text-gray-400">Volg en beheer alle uitgaven</p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Uitgave
              </button>
            </div>
            
            {/* Expense Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Utilities', amount: 1250, budget: 1500, color: 'blue' },
                { category: 'Onderhoud', amount: 890, budget: 1000, color: 'green' },
                { category: 'Evenementen', amount: 450, budget: 800, color: 'purple' },
                { category: 'Administratie', amount: 320, budget: 500, color: 'orange' }
              ].map((expense, index) => {
                const percentage = (expense.amount / expense.budget) * 100;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{expense.category}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">€{expense.amount}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">van €{expense.budget}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-${expense.color}-600 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{percentage.toFixed(0)}% gebruikt</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Expenses */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Uitgaven</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { description: 'Elektriciteit December', amount: 180, category: 'Utilities', date: '2024-12-20', status: 'Betaald' },
                  { description: 'Kerstversiering', amount: 75, category: 'Evenementen', date: '2024-12-18', status: 'Betaald' },
                  { description: 'Schoonmaakspullen', amount: 45, category: 'Onderhoud', date: '2024-12-15', status: 'Pending' },
                  { description: 'Kantoorbenodigdheden', amount: 32, category: 'Administratie', date: '2024-12-12', status: 'Betaald' }
                ].map((expense, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{expense.description}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{expense.category} • {expense.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        expense.status === 'Betaald' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {expense.status}
                      </span>
                      <div className="text-lg font-semibold text-red-600 dark:text-red-400">
                        €{expense.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budgetplanning</h1>
                <p className="text-gray-600 dark:text-gray-400">Plan en volg je jaarbudget</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuw Budget
              </button>
            </div>
            
            {/* Budget Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Budget</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€15,000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gebruikt</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€8,230</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Resterend</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€6,770</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Voortgang</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">55%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Budget per Categorie</h3>
              <div className="space-y-6">
                {[
                  { category: 'Utilities & Onderhoud', budgeted: 4000, spent: 2340, color: 'blue' },
                  { category: 'Evenementen & Activiteiten', budgeted: 3000, spent: 1250, color: 'green' },
                  { category: 'Administratie & Kantoor', budgeted: 2000, spent: 890, color: 'purple' },
                  { category: 'Muziek & Techniek', budgeted: 2500, spent: 1450, color: 'orange' },
                  { category: 'Jeugdwerk & Educatie', budgeted: 1500, spent: 670, color: 'red' },
                  { category: 'Liefdadigheid & Outreach', budgeted: 2000, spent: 1630, color: 'teal' }
                ].map((budget, index) => {
                  const percentage = (budget.spent / budget.budgeted) * 100;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">{budget.category}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            €{budget.spent} / €{budget.budgeted}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className={`bg-${budget.color}-600 h-3 rounded-full transition-all duration-300`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-500">{percentage.toFixed(0)}% gebruikt</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">€{budget.budgeted - budget.spent} resterend</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'fundraising':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fondsenwerving</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer fondswervingscampagnes</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Campagne
              </button>
            </div>
            
            {/* Fundraising Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Campagnes</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Opgehaald</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€8,450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donateurs</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">127</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gem. Donatie</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€67</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Actieve Campagnes</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Kerkdak Renovatie', goal: 5000, raised: 3450, donors: 45, endDate: '2025-02-28', status: 'Actief' },
                  { title: 'Jeugdkamp 2025', goal: 2000, raised: 1250, donors: 28, endDate: '2025-01-31', status: 'Actief' },
                  { title: 'Nieuwe Orgel', goal: 8000, raised: 3750, donors: 54, endDate: '2025-06-30', status: 'Actief' }
                ].map((campaign, index) => {
                  const percentage = (campaign.raised / campaign.goal) * 100;
                  return (
                    <div key={index} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{campaign.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Eindigt op {campaign.endDate}</p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                          {campaign.status}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">€{campaign.raised}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">van €{campaign.goal}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-purple-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500 dark:text-gray-500">{percentage.toFixed(0)}% behaald</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{campaign.donors} donateurs</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'grants':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Subsidies & Grants</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer subsidieaanvragen en grants</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Aanvraag
              </button>
            </div>
            
            {/* Grant Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aanvragen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Goedgekeurd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Ontvangen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">€12,500</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">In Behandeling</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grant Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subsidieaanvragen</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Gemeente Subsidie Jeugdwerk', amount: 5000, status: 'Goedgekeurd', date: '2024-12-15', deadline: '2025-01-31' },
                  { title: 'Provincie Cultuur Fonds', amount: 3000, status: 'In Behandeling', date: '2024-12-10', deadline: '2025-02-15' },
                  { title: 'EU Gemeenschap Grant', amount: 8000, status: 'In Behandeling', date: '2024-12-05', deadline: '2025-03-01' },
                  { title: 'Lokale Stichting Ondersteuning', amount: 2500, status: 'Goedgekeurd', date: '2024-11-20', deadline: '2024-12-31' }
                ].map((grant, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{grant.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Aangevraagd: {grant.date} • Deadline: {grant.deadline}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">€{grant.amount}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      grant.status === 'Goedgekeurd' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      grant.status === 'In Behandeling' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {grant.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'facilities':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Faciliteiten</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer gebouwen en ruimtes</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Ruimte
              </button>
            </div>
            
            {/* Facility Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Building className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Ruimtes</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reserveringen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Capaciteit</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bezetting</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">78%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ruimtes & Faciliteiten</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { name: 'Hoofdkerk', capacity: 200, status: 'Beschikbaar', nextEvent: 'Zondagsdienst - 10:00', type: 'Worship' },
                  { name: 'Gemeenschapszaal', capacity: 80, status: 'Gereserveerd', nextEvent: 'Koorrepetitie - 19:30', type: 'Meeting' },
                  { name: 'Jeugdruimte', capacity: 30, status: 'Beschikbaar', nextEvent: 'Vrijdagavond - 19:00', type: 'Youth' },
                  { name: 'Keuken', capacity: 10, status: 'Onderhoud', nextEvent: 'Beschikbaar vanaf morgen', type: 'Kitchen' },
                  { name: 'Kantoor', capacity: 5, status: 'Bezet', nextEvent: 'Bestuursvergadering - 14:00', type: 'Office' }
                ].map((facility, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Building className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{facility.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {facility.type} • Capaciteit: {facility.capacity} personen
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{facility.nextEvent}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      facility.status === 'Beschikbaar' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      facility.status === 'Gereserveerd' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      facility.status === 'Bezet' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {facility.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'maintenance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Onderhoud</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer onderhoudsverzoeken en taken</p>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuw Verzoek
              </button>
            </div>
            
            {/* Maintenance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Settings className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open Verzoeken</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">7</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Voltooid</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">23</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Urgent</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">2</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gem. Tijd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">3.2d</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Requests */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Onderhoudsverzoeken</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { title: 'Lekkage in dak hoofdkerk', priority: 'Urgent', status: 'In Behandeling', date: '2024-12-20', assignee: 'Jan Bakker' },
                  { title: 'Verwarming gemeenschapszaal', priority: 'Hoog', status: 'Open', date: '2024-12-18', assignee: 'Niet toegewezen' },
                  { title: 'Kapotte lamp in gang', priority: 'Laag', status: 'Open', date: '2024-12-15', assignee: 'Piet Smit' },
                  { title: 'Schoonmaak na evenement', priority: 'Medium', status: 'Voltooid', date: '2024-12-12', assignee: 'Maria Jansen' }
                ].map((request, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Settings className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{request.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Toegewezen aan: {request.assignee} • {request.date}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            request.priority === 'Urgent' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                            request.priority === 'Hoog' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                            request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                            {request.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            request.status === 'Voltooid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            request.status === 'In Behandeling' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {request.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                        <CheckCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Beveiliging</h1>
                <p className="text-gray-600 dark:text-gray-400">Beveiligingsinstellingen en toegangsbeheer</p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                <Shield className="h-4 w-4 inline mr-2" />
                Beveiligingsrapport
              </button>
            </div>
            
            {/* Security Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Beveiligingsstatus</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">Veilig</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Key className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Actieve Sleutels</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Toegang Vandaag</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">34</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Waarschuwingen</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Beveiligingsinstellingen</h3>
              <div className="space-y-4">
                {[
                  { title: 'Automatische Vergrendeling', description: 'Vergrendel deuren automatisch na sluitingstijd', enabled: true },
                  { title: 'Toegangslogboek', description: 'Houd bij wie wanneer toegang heeft gehad', enabled: true },
                  { title: 'Alarm Systeem', description: 'Activeer alarm bij ongeautoriseerde toegang', enabled: true },
                  { title: 'Camera Opname', description: 'Record beveiligingscamera\'s 24/7', enabled: false },
                  { title: 'Mobiele Meldingen', description: 'Stuur meldingen naar beheerders', enabled: true }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{setting.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      setting.enabled ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Log */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recente Toegang</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { person: 'Dominee Jansen', action: 'Toegang verkregen', location: 'Hoofdingang', time: '08:30', status: 'success' },
                  { person: 'Jan Bakker', action: 'Toegang verkregen', location: 'Zijingang', time: '09:15', status: 'success' },
                  { person: 'Maria Smit', action: 'Toegang geweigerd', location: 'Kantoor', time: '10:45', status: 'warning' },
                  { person: 'Piet de Vries', action: 'Toegang verkregen', location: 'Gemeenschapszaal', time: '14:20', status: 'success' }
                ].map((log, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        log.status === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
                      }`}>
                        {log.status === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{log.person}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{log.action} • {log.location}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">{log.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Inventaris</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer spullen en materialen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuw Item
              </button>
            </div>
            
            {/* Inventory Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Archive className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Items</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">247</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Beschikbaar</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">189</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Uitgeleend</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">34</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Onderhoud</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Audio/Video', items: 45, icon: Headphones, color: 'purple' },
                { category: 'Meubilair', items: 89, icon: Archive, color: 'blue' },
                { category: 'Keuken', items: 67, icon: Archive, color: 'green' },
                { category: 'Kantoor', items: 46, icon: FileText, color: 'orange' }
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className={`p-3 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg w-fit mb-4`}>
                      <Icon className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.category}</h3>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{category.items}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">items</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Items */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Toegevoegd</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { name: 'Draadloze Microfoon Set', category: 'Audio/Video', status: 'Beschikbaar', date: '2024-12-20', location: 'Techniek Kast' },
                  { name: 'Klapstoel (20x)', category: 'Meubilair', status: 'Beschikbaar', date: '2024-12-18', location: 'Opslag A' },
                  { name: 'Koffiezetapparaat', category: 'Keuken', status: 'Uitgeleend', date: '2024-12-15', location: 'Gemeenschapszaal' },
                  { name: 'Laptop Dell', category: 'Kantoor', status: 'Onderhoud', date: '2024-12-12', location: 'IT Kast' }
                ].map((item, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Archive className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.category} • {item.location}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Toegevoegd: {item.date}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Beschikbaar' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      item.status === 'Uitgeleend' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reserveringen</h1>
                <p className="text-gray-600 dark:text-gray-400">Beheer ruimte reserveringen</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                Nieuwe Reservering
              </button>
            </div>
            
            {/* Booking Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deze Week</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">18</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vandaag</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bezetting</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">67%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bevestigd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">15</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Bookings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reserveringen Vandaag</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { event: 'Koorrepetitie', room: 'Gemeenschapszaal', time: '19:30 - 21:00', organizer: 'Maria Jansen', status: 'Bevestigd' },
                  { event: 'Bestuursvergadering', room: 'Kantoor', time: '14:00 - 16:00', organizer: 'Jan Bakker', status: 'Bevestigd' },
                  { event: 'Jeugdgroep', room: 'Jeugdruimte', time: '19:00 - 21:30', organizer: 'Piet Smit', status: 'Pending' },
                  { event: 'Bijbelstudie', room: 'Kleine Zaal', time: '20:00 - 21:30', organizer: 'Anna de Vries', status: 'Bevestigd' }
                ].map((booking, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{booking.event}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{booking.room} • {booking.time}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Organisator: {booking.organizer}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'Bevestigd' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Availability */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Ruimte Beschikbaarheid</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { room: 'Hoofdkerk', status: 'Beschikbaar', nextBooking: 'Zondag 10:00' },
                  { room: 'Gemeenschapszaal', status: 'Bezet', nextBooking: 'Tot 21:00' },
                  { room: 'Jeugdruimte', status: 'Beschikbaar', nextBooking: 'Vrijdag 19:00' },
                  { room: 'Kantoor', status: 'Bezet', nextBooking: 'Tot 16:00' }
                ].map((room, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{room.room}</h4>
                      <span className={`w-3 h-3 rounded-full ${
                        room.status === 'Beschikbaar' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{room.status}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{room.nextBooking}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Berichten</h1>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Nieuw Bericht</span>
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Message List */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Inbox</h3>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockMessages.map((message) => (
                      <div key={message.id} className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${!message.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {message.sender.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className={`text-sm font-medium text-gray-900 dark:text-white truncate ${!message.read ? 'font-bold' : ''}`}>
                                {message.sender}
                              </p>
                              {!message.read && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{message.subject}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">{message.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-96">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Selecteer een bericht</h3>
                  </div>
                  <div className="p-6 flex items-center justify-center h-full">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">Klik op een bericht om de inhoud te bekijken</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Instellingen</h1>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Account Settings */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      value={user?.name || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Opslaan
                  </button>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notificaties</h3>
                <div className="space-y-4">
                  {[
                    { label: 'E-mail notificaties', checked: true },
                    { label: 'Push notificaties', checked: false },
                    { label: 'SMS notificaties', checked: true },
                    { label: 'Evenement herinneringen', checked: true }
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{setting.label}</span>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          setting.checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.checked ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Beveiliging</h3>
                <div className="space-y-4">
                  <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                    Wachtwoord wijzigen
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                    Twee-factor authenticatie
                  </button>
                  <button className="w-full px-4 py-2 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left">
                    Account verwijderen
                  </button>
                </div>
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
              Onderdeel van het uitgebreide beheersysteem
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
              <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Believe</span>
            </div>
            <button
              onClick={handleGoHome}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-300"
              title="Ga naar Homepage"
            >
              <Home className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Admin Dashboard</p>
        </div>
        
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-300"
            >
              <img 
                src={user?.avatar || 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                alt={user?.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200 dark:border-blue-600"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 dark:text-white text-sm">{user?.name}</p>