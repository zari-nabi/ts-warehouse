import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    lng:"fa",
    /* multiple namespace, divide translation into smaller files */
    ns: [
      "common",
    ],
    defaultNS: "common",
  });

export default i18n;
