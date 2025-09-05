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
  Stint as StintIcon
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Donatiebeheer</h1>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Nieuwe Donatie</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Totaal Deze Maand</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      €{mockDonations.reduce((sum, d) => sum + d.amount, 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aantal Donateurs</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{mockDonations.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gemiddelde Donatie</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      €{Math.round(mockDonations.reduce((sum, d) => sum + d.amount, 0) / mockDonations.length)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donations Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Donateur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bedrag</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Doel</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Methode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Datum</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Acties</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockDonations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {donation.donor.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{donation.donor}</div>
                              {donation.recurring && (
                                <div className="text-xs text-green-600 dark:text-green-400">Terugkerend</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">€{donation.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{donation.purpose}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                            donation.method === 'online' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : donation.method === 'bank'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : donation.method === 'cash'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          }`}>
                            {donation.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {donation.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            donation.status === 'completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : donation.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {donation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                              <Download className="h-4 w-4" />
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

      case 'library':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bibliotheek</h1>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Content Toevoegen</span>
              </button>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                <Mic className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preken</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Audio en video opnames van preken</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500 ml-1">items</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                <Book className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Artikelen</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Geschreven content en studies</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">8</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500 ml-1">items</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                <Video className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Video's</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Video content en opnames</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">15</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500 ml-1">items</span>
                </div>
              </div>
            </div>

            {/* Recent Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Toegevoegd</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {mockLibraryItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      {item.thumbnail ? (
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {item.type === 'sermon' && <Mic className="h-8 w-8 text-gray-400" />}
                          {item.type === 'article' && <Book className="h-8 w-8 text-gray-400" />}
                          {item.type === 'video' && <Video className="h-8 w-8 text-gray-400" />}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                          item.type === 'sermon' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : item.type === 'article'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {item.type}
                        </span>
                        {item.duration && (
                          <span className="text-xs text-gray-500 dark:text-gray-500">{item.duration}</span>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.author}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{item.date}</p>
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Website Beheer</h1>
              <div className="flex space-x-3">
                <button 
                  onClick={() => navigate('/builder')}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>Website Bewerken</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* Website Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bezoekers</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">1,234</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pagina's</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Groei</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">+23%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gem. Tijd</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">3:45</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Snelle Acties</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: Edit, label: 'Pagina Bewerken', color: 'blue' },
                  { icon: Plus, label: 'Nieuwe Pagina', color: 'green' },
                  { icon: Image, label: 'Media Upload', color: 'purple' },
                  { icon: Settings, label: 'Instellingen', color: 'gray' },
                  { icon: Share2, label: 'Delen', color: 'orange' },
                  { icon: Download, label: 'Backup', color: 'red' }
                ].map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className="flex flex-col items-center space-y-2 p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Icon className={`h-6 w-6 text-${action.color}-600 dark:text-${action.color}-400`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{action.label}</span>
                    </button>
                  );
                })}
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
                <p className="text-xs text-blue-600 dark:text-blue-400">Administrator</p>
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
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
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
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
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
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
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
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
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
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
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
          organizationType="church"
        />
      )}
    </div>
  );
};

export default AdminDashboard;