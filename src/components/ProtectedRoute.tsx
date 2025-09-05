import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'member' | 'admin' | 'superadmin' | 'partner';
  requiredOrgType?: 'church' | 'mosque' | 'synagogue';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole, 
  requiredOrgType 
}) => {
  const { user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Toegang controleren...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Check if user has the required role
  if (user.role !== requiredRole) {
    // Redirect to appropriate dashboard based on user's actual role
    switch (user.role) {
      case 'member':
        return <Navigate to="/member" replace />;
      case 'admin':
        return <Navigate to="/admin" replace />;
      case 'partner':
        return <Navigate to="/partner" replace />;
      case 'superadmin':
        return <Navigate to="/superadmin" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // For partner role, optionally check organization type
  if (requiredRole === 'partner' && requiredOrgType && user.organizationType !== requiredOrgType) {
    return <Navigate to="/partner" replace />;
  }

  // User has correct role, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;