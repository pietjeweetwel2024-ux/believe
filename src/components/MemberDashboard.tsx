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

      default:
        return (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="text-gray-600">This section is under development. More features coming soon!</p>
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
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Believe</span>
          </div>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
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