import React, { createContext, useState, useContext } from 'react';

const ActiveSectionContext = createContext();

export const useActiveSection = () => useContext(ActiveSectionContext);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  const value = {
    activeSection,
    setActiveSection,
  };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
