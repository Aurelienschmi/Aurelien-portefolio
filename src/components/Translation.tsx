import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TranslationButton = () => {
  const [, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("fr");

  const handleChangeLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <button
        onClick={handleChangeLanguage}
        className="w-8 h-8 rounded-full transition-transform duration-500 transform hover:scale-110 shadow-lg border-2 border-gray-400 dark:border-gray-200"
        style={{
          backgroundImage: `url(/images/${language === "fr" ? "fr-flag.png" : "uk-flag.png"})`,
          backgroundSize: '140%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></button>
    </div>
  );
};

export default TranslationButton;