import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./Pages/index.tsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./locals/es/global.json";
import global_en from "./locals/en/global.json";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <AppRouter />
    </I18nextProvider>
  </StrictMode>
);
