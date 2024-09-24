import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/AppContext.tsx';

const Header = () => {
  const { t } = useTranslation('global');
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { about, resume, works, contact, setAbout, setResume, setWorks, setContact } = context;

  return (
    <div>
      <ul className="p-5">
        <div>
          <button
            className={`rounded-lg flex flex-col items-center w-20 m-2 ${about ? 'bg-blue-500' : 'bg-slate-200 hover:bg-blue-500'}`}
            onClick={() => {
              setAbout(true);
              setResume(false);
              setWorks(false);
              setContact(false);
            }}
          >
            <img src="/images/profil.svg" alt="icon profile" className="h-10" />
            <li className="text-white dark:text-black">{t("header.About")}</li>
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg flex flex-col items-center w-20 m-2 ${resume ? 'bg-blue-500' : 'bg-slate-200 hover:bg-blue-500'}`}
            onClick={() => {
              setAbout(false);
              setResume(true);
              setWorks(false);
              setContact(false);
            }}
          >
            <img src="/images/resume.svg" alt="icon resume" className="h-10" />
            <li className="text-white dark:text-black">{t("header.Resume")}</li>
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg flex flex-col items-center w-20 m-2 ${works ? 'bg-blue-500' : 'bg-slate-200 hover:bg-blue-500'}`}
            onClick={() => {
              setAbout(false);
              setResume(false);
              setWorks(true);
              setContact(false);
            }}
          >
            <img src="/images/work.svg" alt="icon work" className="h-10" />
            <li className="text-white dark:text-black">{t("header.Works")}</li>
          </button>
        </div>
        <div>
          <button
            className={`rounded-lg flex flex-col items-center w-20 m-2 ${contact ? 'bg-blue-500' : 'bg-slate-200 hover:bg-blue-500'}`}
            onClick={() => {
              setAbout(false);
              setResume(false);
              setWorks(false);
              setContact(true);
            }}
          >
            <img src="/images/contact.svg" alt="icon contact" className="h-10" />
            <li className="text-white dark:text-black">{t("header.Contact")}</li>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;