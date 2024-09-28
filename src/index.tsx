import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { AppProvider } from "./context/AppContext.tsx";

import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    fr: {
      global: global_fr,
    },
    en: {
      global: global_en,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const onClose = () => {
  console.log("Close button clicked");
};

root.render(
  <div>
    <AppProvider>
      <React.StrictMode>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </AppProvider>
  </div>
);
