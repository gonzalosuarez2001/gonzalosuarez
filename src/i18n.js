import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

export const supportedLanguages = ["es", "en"];
const languageStorageKey = "language";

function readStoredLanguage() {
  try {
    return localStorage.getItem(languageStorageKey);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    return;
  }
}

function detectInitialLanguage() {
  const stored = readStoredLanguage();
  if (supportedLanguages.includes(stored)) return stored;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function syncDocumentLanguage(language) {
  document.documentElement.lang = language;
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: detectInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
});

syncDocumentLanguage(i18n.language);

i18n.on("languageChanged", (language) => {
  storeLanguage(language);
  syncDocumentLanguage(language);
});

export default i18n;
