import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  about: boolean;
  resume: boolean;
  works: boolean;
  contact: boolean;
  setAbout: (value: boolean) => void;
  setResume: (value: boolean) => void;
  setWorks: (value: boolean) => void;
  setContact: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <AppContext.Provider
      value={{ about, resume, works, contact, setAbout, setResume, setWorks, setContact }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };