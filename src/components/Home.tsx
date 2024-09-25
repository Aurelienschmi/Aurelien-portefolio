import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext.tsx";
import Popup from "./Popup.tsx";
import ProgressBar from "./ProgressBar.tsx";
import UnderConstruction from "./UnderConstruction.tsx";

const Home = () => {
  const { t } = useTranslation("global");
  const context = useContext(AppContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  if (!context) {
    return null;
  }

  const { about, resume, works, contact } = context;

  const progressBars = (
    Progress1,
    Progress2?,
    Progress3?,
    Progress4?,
    Progress5?
  ) => (
    <div className="space-y-4">
      <ProgressBar
        percentage={50}
        color="bg-red-400 dark:bg-red-600"
        text={Progress1}
      />
      <ProgressBar
        percentage={75}
        color="bg-blue-400 dark:bg-blue-600"
        text={Progress2}
      />
      <ProgressBar
        percentage={90}
        color="bg-green-400 dark:bg-green-600"
        text={Progress3}
      />
      <ProgressBar
        percentage={60}
        color="bg-yellow-400 dark:bg-yellow-600"
        text={Progress4}
      />
      <ProgressBar
        percentage={80}
        color="bg-purple-400 dark:bg-purple-600"
        text={Progress5}
      />
    </div>
  );

  return (
    <div className="dark:text-white">
      {about && (
        <>
          <div className="space-y-6">
            <div className="flex items-center space-x-8 mt-8">
              <h2 className="text-4xl font-bold ml-6 ">{t("home.About")}</h2>
              <div className="w-40 border-t-4 border-blue-500 rounded-3xl "></div>
            </div>
            <p className="mx-6">{t("home.AboutContent")}</p>
            <h3 className="text-2xl font-semibold mx-6">{t("home.About1")}</h3>
            <div className="flex flex-wrap justify-around">
              <div className="bg-pink-50 dark:bg-black border dark:border-white rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2 ">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-blue-50 dark:bg-black border dark:border-white rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-blue-50 dark:bg-black border dark:border-white rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-pink-50 dark:bg-black border dark:border-white rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mx-6">
              {t("home.Certification")}
            </h3>
            <div className="flex flex-wrap justify-around">
              <button
                onClick={() => window.open("/images/CCNAv7.png", "_blank")}
              >
                <img
                  src="/images/CCNAv7.png"
                  alt="Certification of CCNAv7"
                  className="h-40 border-2 border-blue-500 dark:border-blue-300 transition-transform duration-300 transform hover:scale-105"
                />
              </button>
              <button
                onClick={() => window.open("/images/CCNAv7.png", "_blank")}
              >
                <img
                  src="/images/Introduction-to-iot.png"
                  alt="Certification of Introduction-to-iot"
                  className="h-40 border-2 border-blue-500 dark:border-blue-300 transition-transform duration-300 transform hover:scale-105"
                />
              </button>
            </div>
          </div>
        </>
      )}
      {resume && (
        <>
          <div className="flex items-center space-x-8 mt-8">
            <h2 className="text-4xl font-bold ml-6">{t("home.Resume")}</h2>
            <div className="w-40 border-t-4 border-blue-500 rounded-3xl "></div>
          </div>

          <div className="flex flex-wrap justify-around">
            <div>
              <h3 className="text-2xl font-semibold m-8">
                {t("home.Education")}
              </h3>
              <div className="bg-pink-50 dark:bg-fuchsia-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-blue-50 dark:bg-indigo-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-pink-50 dark:bg-fuchsia-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-blue-50 dark:bg-indigo-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold m-8">
                {t("home.Experience")}
              </h3>
              <div className="bg-blue-50 dark:bg-fuchsia-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-pink-50 dark:bg-indigo-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-blue-50 dark:bg-fuchsia-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-pink-50 dark:bg-indigo-800 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold">{t("home.Skills")}</h3>

          <div className="flex justify-center">
            <div className="m-12">
              <button
                onClick={togglePopup}
                className="h-20 w-20 px-4 py-2 border border-blue-500 bg-blue-500 hover:bg-blue-50 hover:text-black dark:bg-blue-700 text-white rounded-lg dark:text-white dark:hover:bg-zinc-800 flex items-center justify-center"
              >
                <p>{t("home.Network")}</p>{" "}
              </button>
              <Popup
                title={t("home.Network")}
                message="Here are your progress bars:"
                isOpen={isPopupOpen}
                onClose={togglePopup}
                progressBar={progressBars("ici", "la", "bah", "je", "suis")}
              />
            </div>
            <div className="m-12">
              <button
                onClick={togglePopup}
                className="h-20 w-20 px-4 py-2 border border-blue-500 bg-blue-500 hover:bg-blue-50 hover:text-black dark:bg-blue-700 text-white rounded-lg dark:text-white dark:hover:bg-zinc-800 flex items-center justify-center"
              >
                <p>{t("home.Dev")}</p>{" "}
              </button>
              <Popup
                title={t("home.Dev")}
                message="Here are your progress bars:"
                isOpen={isPopupOpen}
                onClose={togglePopup}
                progressBar={progressBars("ici", "la", "bah", "je", "suis")}
              />
            </div>
            <div className="m-12">
              <button
                onClick={togglePopup}
                className="h-20 w-20 px-4 py-2 border border-blue-500 bg-blue-500 hover:bg-blue-50 hover:text-black dark:bg-blue-700 text-white rounded-lg dark:text-white dark:hover:bg-zinc-800 flex items-center justify-center"
              >
                <p>{t("home.Database")}</p>{" "}
              </button>
              <Popup
                title={t("home.Database")}
                message="Here are your progress bars:"
                isOpen={isPopupOpen}
                onClose={togglePopup}
                progressBar={progressBars("ici", "la", "bah", "je", "suis")}
              />
            </div>
          </div>
        </>
      )}
      {works && (
        <>
          <UnderConstruction />
        </>
      )}
      {contact && (
        <>
          <UnderConstruction />
        </>
      )}
    </div>
  );
};

export default Home;
