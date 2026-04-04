import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      faceAnalysis: "Face Analysis",
      commonStruggles: "Common Struggles",
      chat: "Chat",
      getStarted: "Get Started",
      logout: "Logout",
      // Add more keys for all text in your app
    }
  },
  hi: {
    translation: {
      home: "होम",
      faceAnalysis: "चेहरा विश्लेषण",
      commonStruggles: "सामान्य समस्याएँ",
      chat: "चैट",
      getStarted: "शुरू करें",
      logout: "लॉग आउट",
    }
  },
  es: {
    translation: {
      home: "Inicio",
      faceAnalysis: "Análisis Facial",
      commonStruggles: "Problemas Comunes",
      chat: "Chat",
      getStarted: "Comenzar",
      logout: "Cerrar Sesión",
    }
  },
  // Add de, fr, zh, ar similarly (you can copy-paste from Google Translate for quick start)
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;