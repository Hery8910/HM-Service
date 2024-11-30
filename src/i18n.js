import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      supportedLngs: ["en", "de", "ar"],
      fallbackLng: "en",
      debug: true,
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/Translations/{{lng}}.json",
    },
    interpolation: {
        escapeValue: false, 
      },
  });

export default i18n;
