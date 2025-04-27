import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en';
import hiTranslation from './locales/hi';
import teTranslation from './locales/te';
import taTranslation from './locales/ta';
import knTranslation from './locales/kn';
import mlTranslation from './locales/ml';
import urTranslation from './locales/ur';

const resources = {
  en: {
    translation: enTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
  te: {
    translation: teTranslation,
  },
  ta: {
    translation: taTranslation,
  },
  kn: {
    translation: knTranslation,
  },
  ml: {
    translation: mlTranslation,
  },
  ur: {
    translation: urTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;