import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import esTranslation from "../locales/es.json";
import enTranslation from "../locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
