import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadContextType {
  isModalOpen: boolean;
  modalSource: string;
  openLeadModal: (source: string) => void;
  closeLeadModal: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('General');

  const openLeadModal = (source: string) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LeadContext.Provider value={{ isModalOpen, modalSource, openLeadModal, closeLeadModal }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error('useLeadModal must be used within a LeadProvider');
  }
  return context;
}
