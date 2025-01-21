import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { useTranslation } from "react-i18next";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
  isGithub: boolean; // Add this line
}

export interface AppContextProps {
  about: boolean;
  resume: boolean;
  works: boolean;
  contact: boolean;
  setAbout: (value: boolean) => void;
  setResume: (value: boolean) => void;
  setWorks: (value: boolean) => void;
  setContact: (value: boolean) => void;
  projects: Project[];
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const initialProjects: Project[] = [
  {
    image: "/images/project-blog.png",
    title: "home.Project1Title",
    description: "home.Project1Description",
    link: "https://aurelienschmi.github.io/Blog-Network/",
    isGithub: false,
  },
  {
    image: "/images/project-apartment.png",
    title: "home.Project5Title",
    description: "home.Project5Description",
    link: "https://apartment-scrapping.vercel.app/",
    isGithub: false,
  },
  {
    image: "/images/project-Cocktails.png",
    title: "home.Project7Title",
    description: "home.Project7Description",
    link: "https://cocktails-api-react.vercel.app/",
    isGithub: false,
  },
  {
    image: "/images/project-php.png",
    title: "home.Project2Title",
    description: "home.Project2Description",
    link: "https://github.com/Aurelienschmi/CRUD-php",
    isGithub: true,
  },
  {
    image: "/images/project-tours.png",
    title: "home.Project6Title",
    description: "home.Project6Description",
    link: "https://tours-project-six.vercel.app/",
    isGithub: false,
  },
  {
    image: "/images/project-CRM.jpeg",
    title: "home.Project3Title",
    description: "home.Project3Description",
    link: "https://github.com/Sterbenfr/CRM",
    isGithub: true
  },
  {
    image: "/images/project-BrickBreacker.jpeg",
    title: "home.Project4Title",
    description: "home.Project4Description",
    link: "https://github.com/Aurelienschmi/Brick-breaker",
    isGithub: true,
  },
];

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t, i18n } = useTranslation("global");
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);

  const projects = useMemo(() => {
    return initialProjects.map(project => ({
      ...project,
      title: t(project.title),
      description: t(project.description),
    }));
  }, [i18n.language, t]);

  return (
    <AppContext.Provider
      value={{ about, resume, works, contact, setAbout, setResume, setWorks, setContact, projects }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };