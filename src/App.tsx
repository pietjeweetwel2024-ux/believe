import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import DemoLoginPage from './components/DemoLoginPage';
import OnboardingWizard from './components/OnboardingWizard';
import AdminDashboard from './components/AdminDashboard';
import MemberDashboard from './components/MemberDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import PartnerDashboard from './components/PartnerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import WebsiteSetupWizard from './components/WebsiteSetupWizard';
import WebsiteBuilder from './components/WebsiteBuilder';
import OrganizationWebsite from './components/OrganizationWebsite';
import { AuthProvider } from './contexts/AuthContext';
import { OrganizationProvider } from './contexts/OrganizationContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrganizationProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/demo" element={<DemoLoginPage />} />
                <Route path="/onboarding" element={<OnboardingWizard />} />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/member" 
                  element={
                    <ProtectedRoute requiredRole="member">
                      <MemberDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/partner" 
                  element={
                    <ProtectedRoute requiredRole="partner">
                      <PartnerDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/superadmin" 
                  element={
                    <ProtectedRoute requiredRole="superadmin">
                      <SuperAdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/website-setup" element={<WebsiteSetupWizard />} />
                <Route path="/builder" element={<WebsiteBuilder />} />
                <Route path="/site/:orgId" element={<OrganizationWebsite />} />
              </Routes>
            </div>
          </Router>
        </OrganizationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;