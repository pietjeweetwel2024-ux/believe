import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'member' | 'admin' | 'superadmin' | 'partner';
  organizationId?: string;
  organizationType?: 'church' | 'mosque' | 'synagogue';
  organizationName?: string;
  avatar?: string;
  permissions?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, orgType?: string) => Promise<void>;
  demoLogin: (role: 'member' | 'admin' | 'superadmin' | 'partner', orgType?: 'church' | 'mosque' | 'synagogue') => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('believe_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would hit your API
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'admin',
      organizationId: '1'
    };
    setUser(mockUser);
    localStorage.setItem('believe_user', JSON.stringify(mockUser));
  };

  const register = async (email: string, password: string, name: string, orgType?: string) => {
    // Mock registration
    const mockUser: User = {
      id: Math.random().toString(),
      email,
      name,
      role: orgType ? 'admin' : 'member',
      organizationId: orgType ? Math.random().toString() : undefined
    };
    setUser(mockUser);
    localStorage.setItem('believe_user', JSON.stringify(mockUser));
  };

  const demoLogin = async (role: 'member' | 'admin' | 'superadmin' | 'partner', orgType?: 'church' | 'mosque' | 'synagogue') => {
    const demoUsers = {
      member: {
        id: 'demo-member',
        email: 'member@demo.com',
        name: 'Johannes van der Berg',
        role: 'member' as const,
        organizationId: 'demo-org-1',
        organizationType: 'church' as const,
        organizationName: 'Genadekerk Amsterdam',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        permissions: ['view_events', 'join_events', 'donate', 'chat']
      },
      admin: {
        id: 'demo-admin',
        email: 'admin@demo.com',
        name: 'Dominee Maria Jansen',
        role: 'admin' as const,
        organizationId: 'demo-org-1',
        organizationType: 'church' as const,
        organizationName: 'Genadekerk Amsterdam',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        permissions: ['manage_all', 'view_analytics', 'manage_members', 'manage_events', 'manage_donations']
      },
      partner: {
        church: {
          id: 'demo-partner-church',
          email: 'kerk@demo.com',
          name: 'Pastoor Willem de Vries',
          role: 'partner' as const,
          organizationId: 'demo-church-1',
          organizationType: 'church' as const,
          organizationName: 'Sint-Martinuskerk Utrecht',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
          permissions: ['manage_organization', 'view_analytics', 'manage_website', 'manage_members']
        },
        mosque: {
          id: 'demo-partner-mosque',
          email: 'moskee@demo.com',
          name: 'Imam Ahmed Al-Hassan',
          role: 'partner' as const,
          organizationId: 'demo-mosque-1',
          organizationType: 'mosque' as const,
          organizationName: 'Al-Noor Moskee Rotterdam',
          avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
          permissions: ['manage_organization', 'view_analytics', 'manage_website', 'manage_members']
        },
        synagogue: {
          id: 'demo-partner-synagogue',
          email: 'synagoge@demo.com',
          name: 'Rabbijn David Cohen',
          role: 'partner' as const,
          organizationId: 'demo-synagogue-1',
          organizationType: 'synagogue' as const,
          organizationName: 'Beth Shalom Synagoge Den Haag',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
          permissions: ['manage_organization', 'view_analytics', 'manage_website', 'manage_members']
        }
      },
      superadmin: {
        id: 'demo-superadmin',
        email: 'superadmin@believe.com',
        name: 'Platform Administrator',
        role: 'superadmin' as const,
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        permissions: ['god_mode', 'manage_all_organizations', 'view_all_analytics', 'manage_platform']
      }
    };

    let selectedUser: User;

    if (role === 'partner' && orgType) {
      selectedUser = demoUsers.partner[orgType];
    } else {
      selectedUser = demoUsers[role];
    }

    setUser(selectedUser);
    localStorage.setItem('believe_user', JSON.stringify(selectedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('believe_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, demoLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};