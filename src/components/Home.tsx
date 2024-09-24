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
      <ProgressBar percentage={50} color="bg-red-400" text={Progress1} />
      <ProgressBar percentage={75} color="bg-blue-400" text={Progress2} />
      <ProgressBar percentage={90} color="bg-green-400" text={Progress3} />
      <ProgressBar percentage={60} color="bg-yellow-400" text={Progress4} />
      <ProgressBar percentage={80} color="bg-purple-400" text={Progress5} />
    </div>
  );

  return (
    <div>
      {about && (
        <>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">{t("home.About")}</h2>
              <div className="w-20 border-t-4 border-blue-500 rounded-3xl"></div>
            </div>
            <p>{t("home.AboutContent")}</p>
            <h3 className="text-2xl font-semibold">{t("home.About1")}</h3>
            <div className="flex flex-wrap justify-around">
              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">
              {t("home.Certification")}
            </h3>
            <div className="flex flex-wrap justify-around">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </>
      )}
      {resume && (
        <>
          <h2 className="text-2xl font-bold">{t("home.Resume")}</h2>
          <div className="flex flex-wrap justify-around">
            <div>
              <h3 className="text-2xl font-semibold">{t("home.Education")}</h3>
              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{t("home.Experience")}</h3>
              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold p-2">
                  {t("home.Development")}
                </h4>
                <p className="text-center">{t("home.DevelopmentContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Reseau")}</h4>
                <p className="text-center">{t("home.ReseauContent")}</p>
              </div>

              <div className="bg-fuchsia-200 rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.BDD")}</h4>
                <p className="text-center">{t("home.BDDContent")}</p>
              </div>

              <div className="bg-indigo-200	rounded-3xl p-2 w-96 h-40 flex flex-col justify-center items-center m-5">
                <h4 className="text-lg font-semibold">{t("home.Sport")}</h4>
                <p className="text-center">{t("home.SportContent")}</p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold">{t("home.Skills")}</h3>

          <div className="w-full px-4 lg:w-5/12 flex ">
            <div className="m-12">
              <div>
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Réseaux{" "}
                </button>
                <Popup
                  title="Progress Bars"
                  message="Here are your progress bars:"
                  isOpen={isPopupOpen}
                  onClose={togglePopup}
                  progressBar={progressBars("ici", "la", "bah", "je", "suis")}
                />
              </div>
            </div>
            <div className="m-12">
              <div>
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Développement{" "}
                </button>
                <Popup
                  title="Progress Bars"
                  message="Here are your progress bars:"
                  isOpen={isPopupOpen}
                  onClose={togglePopup}
                  progressBar={progressBars("ici", "la", "bah", "je", "suis")}
                />
              </div>
            </div>
            <div className="m-12">
              <div>
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Base de donnée{" "}
                </button>
                <Popup
                  title="Progress Bars"
                  message="Here are your progress bars:"
                  isOpen={isPopupOpen}
                  onClose={togglePopup}
                  progressBar={progressBars("ici", "la", "bah", "je", "suis")}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {works && (
        <>
          <UnderConstruction/>
        </>
      )}
      {contact && (
        <>
          <UnderConstruction/>
        </>
      )}
    </div>
  );
};

export default Home;
