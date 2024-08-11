import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "./locales/en-US/translation.json";
import translationES from "./locales/es-ES/translation.json";
import translationPT from "./locales/pt-BR/translation.json";

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: "pt", // Default language
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
