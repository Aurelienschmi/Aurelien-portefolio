import React, { useState } from "react";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import SwitchTheme from "./components/SwitchTheme.tsx";
import Translation from "./components/Translation.tsx";
import PersonalInfo from "./components/PersonalInfo.tsx";
import { AppProvider } from "./context/AppContext.tsx";

const App = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [works, setWorks] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <AppProvider>
      <div
        className="bg-cover bg-center flex justify-center items-center min-h-screen"
        style={{ backgroundImage: `url(/images/backround_light.png)` }}
      >
        <div className="bg-zinc-200 rounded-lg border rounded-3xl border-grey-600 p-4">
          <PersonalInfo />
        </div>
        <div className="absolute top-0 right-0 m-4 flex space-x-4">
          <Translation />
          <SwitchTheme />
        </div>
        <div className="flex flex-col items-center w-1/2 p-5 m-5 bg-zinc-200 rounded-3xl">
          <Home about={about} resume={resume} works={works} contact={contact} />
        </div>
        <div className="bg-zinc-200 rounded-lg border rounded-3xl border-grey-600 p-4">
          <Header
            about={about}
            resume={resume}
            works={works}
            contact={contact}
            setAbout={setAbout}
            setResume={setResume}
            setWorks={setWorks}
            setContact={setContact}
          />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
