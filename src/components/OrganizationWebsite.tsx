import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Calendar, Users, Mail, MapPin, Phone } from 'lucide-react';

const OrganizationWebsite: React.FC = () => {
  const { orgId } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8" />
              <span className="text-2xl font-bold">Grace Community Church</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Events</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Sermons</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our
            <span className="text-blue-600"> Faith Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us as we worship together, grow in faith, and serve our community with love and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl font-semibold text-lg">
              Join Our Community
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg">
              Plan a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Times</h2>
            <p className="text-lg text-gray-600">Join us for worship and fellowship</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-2">10:00 AM - 11:30 AM</p>
              <p className="text-sm text-gray-500">Main Sanctuary</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-2">Wednesday 7:00 PM</p>
              <p className="text-sm text-gray-500">Fellowship Hall</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Youth Group</h3>
              <p className="text-gray-600 mb-2">Friday 6:00 PM</p>
              <p className="text-sm text-gray-500">Youth Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss these special gatherings</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  Dec 24
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Christmas Eve Service</h3>
              <p className="text-gray-600 mb-4">Join us for a special candlelight service celebrating the birth of Christ.</p>
              <div className="text-sm text-gray-500">
                <p>10:00 PM - 11:30 PM</p>
                <p>Main Sanctuary</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Dec 31
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">New Year Prayer</h3>
              <p className="text-gray-600 mb-4">Welcome the new year with prayer, reflection, and hope.</p>
              <div className="text-sm text-gray-500">
                <p>11:00 PM - 12:30 AM</p>
                <p>Prayer Hall</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Jan 5
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Potluck</h3>
              <p className="text-gray-600 mb-4">Share a meal and fellowship with our church family.</p>
              <div className="text-sm text-gray-500">
                <p>6:00 PM - 8:00 PM</p>
                <p>Fellowship Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">We'd love to hear from you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">123 Faith Street<br />Springfield, IL 62701</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@gracecommunity.org</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM-5PM<br />Sat-Sun: By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Grace Community Church</span>
            </div>
            <p>&copy; 2025 Grace Community Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrganizationWebsite;