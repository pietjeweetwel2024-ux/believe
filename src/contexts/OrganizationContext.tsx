import React, { createContext, useContext, useState } from 'react';

interface Organization {
  id: string;
  name: string;
  type: 'church' | 'mosque' | 'synagogue';
  subdomain: string;
  design: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  pages: any[];
  settings: any;
}

interface OrganizationContextType {
  organization: Organization | null;
  setOrganization: (org: Organization) => void;
  updateOrganization: (updates: Partial<Organization>) => void;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined);

export const OrganizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [organization, setOrganizationState] = useState<Organization | null>(null);

  const setOrganization = (org: Organization) => {
    setOrganizationState(org);
    localStorage.setItem('believe_org', JSON.stringify(org));
  };

  const updateOrganization = (updates: Partial<Organization>) => {
    if (organization) {
      const updated = { ...organization, ...updates };
      setOrganization(updated);
    }
  };

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization, updateOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (context === undefined) {
    throw new Error('useOrganization must be used within an OrganizationProvider');
  }
  return context;
};