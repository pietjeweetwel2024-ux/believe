import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Heart, 
  Users, 
  MessageSquare, 
  Settings, 
  Bell,
  Gift,
  Book,
  Activity,
  LogOut,
  Home,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const MemberDashboard: React.FC = () => {
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

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'donations', label: 'My Donations', icon: Heart },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'library', label: 'Library', icon: Book },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const upcomingEvents = [
    { name: 'Sunday Service', date: 'Dec 24, 2024', time: '10:00 AM', location: 'Main Hall' },
    { name: 'Christmas Celebration', date: 'Dec 25, 2024', time: '7:00 PM', location: 'Community Center' },
    { name: 'Youth Meeting', date: 'Dec 28, 2024', time: '6:00 PM', location: 'Youth Room' },
  ];

  const myGroups = [
    { name: 'Choir', members: 25, nextMeeting: 'Dec 22, 2024' },
    { name: 'Youth Group', members: 18, nextMeeting: 'Dec 28, 2024' },
    { name: 'Volunteer Team', members: 15, nextMeeting: 'Dec 30, 2024' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
                <p className="text-gray-600">Here's what's happening in your community</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Bell className="h-4 w-4 inline mr-2" />
                View Notifications
              </button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Events Attended</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Donations</p>
                    <p className="text-2xl font-semibold text-gray-900">$450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Groups Joined</p>
                    <p className="text-2xl font-semibold text-gray-900">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Messages</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Upcoming Events */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{event.name}</p>
                          <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Groups */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">My Groups</h3>
                <div className="space-y-4">
                  {myGroups.map((group, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">{group.name}</p>
                        <span className="text-sm text-gray-500">{group.members} members</span>
                      </div>
                      <p className="text-sm text-gray-600">Next: {group.nextMeeting}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Explore Groups
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'Attended Sunday Service', time: '2 days ago', icon: Calendar },
                  { action: 'Joined Youth Group', time: '1 week ago', icon: Users },
                  { action: 'Made a donation', time: '2 weeks ago', icon: Heart },
                  { action: 'Sent a message to Sarah', time: '3 weeks ago', icon: MessageSquare },
                ].map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Icon className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Events</h1>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Filter
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Calendar
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { 
                  name: 'Christmas Eve Service', 
                  date: 'Dec 24, 2024', 
                  time: '10:00 PM', 
                  location: 'Main Sanctuary',
                  description: 'Join us for our special Christmas Eve service with carols and candlelight.',
                  attending: 120,
                  status: 'registered'
                },
                { 
                  name: 'New Year Prayer Meeting', 
                  date: 'Dec 31, 2024', 
                  time: '11:00 PM', 
                  location: 'Prayer Hall',
                  description: 'Welcome the new year with prayer and reflection.',
                  attending: 45,
                  status: 'available'
                },
                { 
                  name: 'Youth Bible Study', 
                  date: 'Jan 5, 2025', 
                  time: '7:00 PM', 
                  location: 'Youth Room',
                  description: 'Weekly Bible study for young adults and teenagers.',
                  attending: 25,
                  status: 'available'
                },
              ].map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                        {event.status === 'registered' && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Registered
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{event.attending} attending</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        event.status === 'registered'
                          ? 'bg-gray-100 text-gray-600'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      disabled={event.status === 'registered'}
                    >
                      {event.status === 'registered' ? 'Registered' : 'Register'}
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
              <h1 className="text-2xl font-bold text-gray-900">My Donations</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Gift className="h-4 w-4 inline mr-2" />
                Make Donation
              </button>
            </div>

            {/* Donation Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total This Year</p>
                    <p className="text-2xl font-semibold text-gray-900">$450</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">This Month</p>
                    <p className="text-2xl font-semibold text-gray-900">$50</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Donations</p>
                    <p className="text-2xl font-semibold text-gray-900">18</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Donation History</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  { amount: '$50', purpose: 'General Fund', date: 'Dec 15, 2024', method: 'Credit Card' },
                  { amount: '$100', purpose: 'Christmas Campaign', date: 'Dec 1, 2024', method: 'Bank Transfer' },
                  { amount: '$25', purpose: 'Youth Program', date: 'Nov 20, 2024', method: 'Credit Card' },
                  { amount: '$75', purpose: 'Building Fund', date: 'Nov 5, 2024', method: 'Credit Card' },
                ].map((donation, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Heart className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{donation.purpose}</p>
                        <p className="text-sm text-gray-600">{donation.date} • {donation.method}</p>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      {donation.amount}
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Groepen</h1>
                <p className="text-gray-600 dark:text-gray-400">Ontdek en sluit je aan bij gemeenschapsgroepen</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Users className="h-4 w-4 inline mr-2" />
                Nieuwe Groep
              </button>
            </div>

            {/* Mijn Groepen */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mijn Groepen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Koor', members: 25, role: 'Lid', nextMeeting: '22 Dec 2024', category: 'Muziek', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
                  { name: 'Jongerengroep', members: 18, role: 'Leider', nextMeeting: '28 Dec 2024', category: 'Sociaal', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
                  { name: 'Vrijwilligersteam', members: 15, role: 'Lid', nextMeeting: '30 Dec 2024', category: 'Service', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' }
                ].map((group, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{group.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${group.color}`}>
                        {group.role}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{group.members} leden • {group.category}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">Volgende: {group.nextMeeting}</p>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Bekijken
                      </button>
                      <button className="flex-1 px-3 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        Chat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Groep Categorieën */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categorieën</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Studie', icon: '📚', count: 4, color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
                  { name: 'Gebed', icon: '🙏', count: 3, color: 'hover:bg-purple-50 dark:hover:bg-purple-900/20' },
                  { name: 'Sociaal', icon: '🤝', count: 5, color: 'hover:bg-green-50 dark:hover:bg-green-900/20' },
                  { name: 'Gezin', icon: '👨‍👩‍👧‍👦', count: 2, color: 'hover:bg-orange-50 dark:hover:bg-orange-900/20' },
                  { name: 'Muziek', icon: '🎵', count: 3, color: 'hover:bg-pink-50 dark:hover:bg-pink-900/20' },
                  { name: 'Sport', icon: '⚽', count: 2, color: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20' }
                ].map((category, index) => (
                  <button key={index} className={`p-4 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors ${category.color}`}>
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{category.count} groepen</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Beschikbare Groepen */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Beschikbare Groepen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Bijbelstudie Beginners', description: 'Wekelijkse bijbelstudie voor nieuwe gelovigen', members: 12, schedule: 'Woensdag 19:00', difficulty: 'Beginner', category: 'Studie' },
                  { name: 'Ochtendgebed', description: 'Dagelijks ochtendgebed voor vroege vogels', members: 8, schedule: 'Dagelijks 07:00', difficulty: 'Alle niveaus', category: 'Gebed' },
                  { name: 'Gezinnen met Kinderen', description: 'Activiteiten en ondersteuning voor jonge gezinnen', members: 15, schedule: 'Zaterdag 14:00', difficulty: 'Familie', category: 'Gezin' },
                  { name: 'Gospelkoor', description: 'Zing mee in ons inspirerende gospelkoor', members: 20, schedule: 'Dinsdag 20:00', difficulty: 'Gemiddeld', category: 'Muziek' },
                  { name: 'Voetbalteam', description: 'Wekelijkse voetbalwedstrijden en toernooien', members: 16, schedule: 'Vrijdag 18:30', difficulty: 'Actief', category: 'Sport' },
                  { name: 'Senioren Koffie', description: 'Gezellige koffiebijeenkomsten voor 55+', members: 25, schedule: 'Donderdag 10:00', difficulty: 'Ontspannen', category: 'Sociaal' }
                ].map((group, index) => (
                  <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{group.name}</h4>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                        {group.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{group.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        {group.members} leden
                      </div>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {group.schedule}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Niveau: {group.difficulty}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                        Lid Worden
                      </button>
                      <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm">
                        Info
                      </button>
                    </div>
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                Nieuw Bericht
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
              {/* Conversaties Lijst */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Conversaties</h3>
                </div>
                <div className="overflow-y-auto h-full">
                  {[
                    { name: 'Dominee Maria', lastMessage: 'Bedankt voor je hulp bij het evenement!', time: '10:30', unread: 2, avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' },
                    { name: 'Koor Groep', lastMessage: 'Repetitie morgen om 19:00', time: '09:15', unread: 0, avatar: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=150' },
                    { name: 'Sarah van der Berg', lastMessage: 'Heb je de nieuwe liedjes al gehoord?', time: 'Gisteren', unread: 1, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
                    { name: 'Vrijwilligers Team', lastMessage: 'Planning voor volgende week', time: 'Gisteren', unread: 0, avatar: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=150' },
                    { name: 'Peter Jansen', lastMessage: 'Zie je zondag bij de dienst?', time: '2 dagen', unread: 0, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' }
                  ].map((conversation, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <img src={conversation.avatar} alt={conversation.name} className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900 dark:text-white truncate">{conversation.name}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500 dark:text-gray-400">{conversation.time}</span>
                              {conversation.unread > 0 && (
                                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                  {conversation.unread}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bericht Weergave */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Dominee Maria" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Dominee Maria</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Online</p>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {[
                    { sender: 'other', message: 'Hallo Johannes! Hoe gaat het met je?', time: '10:25' },
                    { sender: 'me', message: 'Hallo Dominee! Het gaat goed, dank je wel. Hoe was de dienst gisteren?', time: '10:26' },
                    { sender: 'other', message: 'De dienst was prachtig! Veel mensen waren geraakt door jouw getuigenis.', time: '10:28' },
                    { sender: 'other', message: 'Bedankt voor je hulp bij het evenement!', time: '10:30' },
                    { sender: 'me', message: 'Graag gedaan! Het was een zegen om te helpen.', time: '10:32' }
                  ].map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'me' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'me' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Typ je bericht..."
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Verstuur
                    </button>
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bibliotheek</h1>
                <p className="text-gray-600 dark:text-gray-400">Toegang tot preken, artikelen en spirituele bronnen</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                  Filter
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Book className="h-4 w-4 inline mr-2" />
                  Zoeken
                </button>
              </div>
            </div>

            {/* Categorieën */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Preken</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Luister naar inspirerende preken en lezingen</p>
                <div className="space-y-3">
                  {[
                    { title: 'Hoop in Moeilijke Tijden', speaker: 'Dominee Maria', date: '15 Dec 2024', duration: '35 min' },
                    { title: 'De Kracht van Vergeving', speaker: 'Dominee Peter', date: '8 Dec 2024', duration: '42 min' },
                    { title: 'Geloof en Twijfel', speaker: 'Dominee Maria', date: '1 Dec 2024', duration: '38 min' }
                  ].map((sermon, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{sermon.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{sermon.speaker} • {sermon.date}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{sermon.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Artikelen</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Lees diepgaande artikelen over geloof en leven</p>
                <div className="space-y-3">
                  {[
                    { title: 'Gebed in het Dagelijks Leven', author: 'Dr. Sarah de Wit', date: '12 Dec 2024', readTime: '8 min' },
                    { title: 'Gemeenschap Bouwen', author: 'Prof. Jan Bakker', date: '10 Dec 2024', readTime: '12 min' },
                    { title: 'Spirituele Groei', author: 'Ds. Anna Visser', date: '5 Dec 2024', readTime: '15 min' }
                  ].map((article, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{article.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{article.author} • {article.date}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">{article.readTime} leestijd</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Video's</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Bekijk inspirerende video's en documentaires</p>
                <div className="space-y-3">
                  {[
                    { title: 'Kerstviering 2024', type: 'Live Dienst', date: '24 Dec 2024', duration: '1u 15min' },
                    { title: 'Jeugd Getuigenissen', type: 'Documentaire', date: '20 Dec 2024', duration: '25 min' },
                    { title: 'Muziek & Aanbidding', type: 'Concert', date: '15 Dec 2024', duration: '45 min' }
                  ].map((video, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{video.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{video.type} • {video.date}</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400">{video.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Toegevoegd */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Toegevoegd</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Advent Meditaties', type: 'Artikel Serie', author: 'Dominee Maria', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { title: 'Kerstliederen Collectie', type: 'Audio', author: 'Koor Team', image: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { title: 'Bijbel Studie Gids', type: 'PDF', author: 'Dr. Jan Smit', image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { title: 'Gebed Workshop', type: 'Video', author: 'Ds. Anna Visser', image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=300' }
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.type} • {item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mijn Profiel</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Profiel Bewerken
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Profiel Info */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <img 
                    src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'} 
                    alt={user?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200 dark:border-blue-600"
                  />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{user?.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">Gemeenschapslid</p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>Lid sinds: Januari 2023</p>
                    <p>Laatste activiteit: Vandaag</p>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Foto Wijzigen
                  </button>
                </div>

                {/* Statistieken */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Mijn Statistieken</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Evenementen Bijgewoond</span>
                      <span className="font-semibold text-gray-900 dark:text-white">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Groepen</span>
                      <span className="font-semibold text-gray-900 dark:text-white">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Donaties</span>
                      <span className="font-semibold text-gray-900 dark:text-white">€450</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Berichten</span>
                      <span className="font-semibold text-gray-900 dark:text-white">28</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiel Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Persoonlijke Informatie */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Persoonlijke Informatie</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Volledige Naam</label>
                      <input 
                        type="text" 
                        value={user?.name || ''} 
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-mailadres</label>
                      <input 
                        type="email" 
                        value={user?.email || ''} 
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefoon</label>
                      <input 
                        type="tel" 
                        value="06-12345678" 
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Geboortedatum</label>
                      <input 
                        type="date" 
                        value="1985-03-15" 
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Voorkeuren */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Voorkeuren</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">E-mail Notificaties</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ontvang updates over evenementen en berichten</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">SMS Herinneringen</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ontvang SMS herinneringen voor evenementen</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Nieuwsbrief</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ontvang de wekelijkse gemeenschapsnieuwsbrief</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recente Activiteit */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recente Activiteit</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'Bijgewoond: Zondagsdienst', date: '22 Dec 2024', icon: Calendar, color: 'text-blue-600 dark:text-blue-400' },
                      { action: 'Lid geworden van: Koor', date: '20 Dec 2024', icon: Users, color: 'text-green-600 dark:text-green-400' },
                      { action: 'Donatie gemaakt: €50', date: '15 Dec 2024', icon: Heart, color: 'text-red-600 dark:text-red-400' },
                      { action: 'Bericht verzonden naar: Dominee Maria', date: '10 Dec 2024', icon: MessageSquare, color: 'text-purple-600 dark:text-purple-400' }
                    ].map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <Icon className={`h-5 w-5 ${activity.color}`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{activity.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Instellingen</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Account Instellingen */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Instellingen</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Wachtwoord Wijzigen</label>
                    <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                      Klik om wachtwoord te wijzigen
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Twee-factor Authenticatie</label>
                    <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <span className="text-sm text-gray-900 dark:text-white">Uitgeschakeld</span>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Inschakelen
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Account Verwijderen</label>
                    <button className="w-full px-4 py-2 border border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left">
                      Account permanent verwijderen
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy Instellingen */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy Instellingen</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Profiel Zichtbaarheid</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Wie kan je profiel zien</p>
                    </div>
                    <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>Iedereen</option>
                      <option>Alleen leden</option>
                      <option>Alleen vrienden</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Online Status</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Toon wanneer je online bent</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Activiteit Delen</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Deel je activiteiten met anderen</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Notificatie Instellingen */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notificaties</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Nieuwe Berichten</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ontvang notificaties voor nieuwe berichten</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Evenement Herinneringen</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Herinneringen voor aankomende evenementen</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Groep Updates</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Updates van groepen waar je lid van bent</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* App Instellingen */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">App Instellingen</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Taal</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Kies je voorkeurstaal</p>
                    </div>
                    <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>Nederlands</option>
                      <option>English</option>
                      <option>Français</option>
                      <option>Deutsch</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Tijdzone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Je lokale tijdzone</p>
                    </div>
                    <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>Amsterdam (CET)</option>
                      <option>London (GMT)</option>
                      <option>New York (EST)</option>
                      <option>Tokyo (JST)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Automatische Updates</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Update de app automatisch</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Backup */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data & Backup</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center">
                  <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="font-medium text-gray-900 dark:text-white">Data Exporteren</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Download je gegevens</p>
                </button>
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center">
                  <Settings className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="font-medium text-gray-900 dark:text-white">Backup Maken</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Maak een backup van je data</p>
                </button>
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <p className="font-medium text-gray-900 dark:text-white">Data Wissen</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Verwijder al je gegevens</p>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="text-gray-600 dark:text-gray-400">This section is under development. More features coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
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
          <p className="text-sm text-gray-600 mt-1">Member Portal</p>
        </div>
        
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              <img 
                src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'} 
                alt={user?.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold text-gray-800 text-sm">{user?.name}</p>
                <p className="text-xs text-blue-600">Gemeenschapslid</p>
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
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-2 border-blue-200 shadow-lg'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:text-blue-600 hover:shadow-md'
                  }`}
                >
                  <Icon className={`h-5 w-5 transition-colors ${activeTab === item.id ? 'text-blue-600' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
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
    </div>
  );
};

export default MemberDashboard;