import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (langCode: string) => {
    try {
      await i18n.changeLanguage(langCode);
      // Small delay to ensure RTL is applied
      setTimeout(() => {
        // Force a re-render by updating body class
        if (langCode === 'ar') {
          document.body.classList.add('rtl');
          document.body.classList.remove('ltr');
          document.documentElement.dir = 'rtl';
        } else {
          document.body.classList.add('ltr');
          document.body.classList.remove('rtl');
          document.documentElement.dir = 'ltr';
        }
      }, 50);
    } catch (error) {
      console.error('Error changing language:', error);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white shadow-lg border border-gray-200 px-3 py-2 rounded-l-lg flex items-center space-x-2 text-anthracite hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Changer de langue"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-montserrat">
            {currentLanguage.flag}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full px-4 py-2 text-sm font-montserrat hover:bg-gold hover:bg-opacity-10 hover:text-gold transition-colors flex items-center space-x-3 ${
                      i18n.language === language.code ? 'bg-gold bg-opacity-10 text-gold' : 'text-anthracite'
                    }`}
                    role="menuitem"
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;