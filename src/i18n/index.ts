import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import frTranslations from './locales/fr.json';
import arTranslations from './locales/ar.json';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

const resources = {
  fr: {
    translation: frTranslations
  },
  ar: {
    translation: arTranslations
  },
  en: {
    translation: enTranslations
  },
  es: {
    translation: esTranslations
  }
};

// RTL languages
const rtlLanguages = ['ar'];

// Function to set document direction and classes
const setDocumentDirection = (language: string) => {
  const isRTL = rtlLanguages.includes(language);
  
  // Set document direction
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
  
  // Add/remove RTL classes on body and html
  if (isRTL) {
    document.documentElement.classList.add('rtl');
    document.documentElement.classList.remove('ltr');
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    document.documentElement.classList.add('ltr');
    document.documentElement.classList.remove('rtl');
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }
  
  // Force re-render by updating a CSS custom property
  document.documentElement.style.setProperty('--text-direction', isRTL ? 'rtl' : 'ltr');
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      checkWhitelist: true
    },
    
    // Supported languages
    supportedLngs: ['fr', 'ar', 'en', 'es'],
    nonExplicitSupportedLngs: false,
    
    interpolation: {
      escapeValue: false
    },
    
    // React options
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
    },
    
    // Namespace and key separator
    ns: ['translation'],
    defaultNS: 'translation',
    keySeparator: '.',
    nsSeparator: false
  });

// Set initial direction when i18n is ready
i18n.on('initialized', () => {
  setDocumentDirection(i18n.language);
});

// Listen for language changes
i18n.on('languageChanged', (language) => {
  setDocumentDirection(language);
  // Force a small delay to ensure DOM updates
  setTimeout(() => {
    setDocumentDirection(language);
  }, 100);
});

export default i18n;