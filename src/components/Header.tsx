import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('navigation.cabinet'), href: '/cabinet' },
    { name: t('navigation.expertises'), href: '/expertises' },
    { name: t('navigation.team'), href: '/equipe' },
    { name: t('navigation.faq'), href: '/faq' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm md:text-base font-lora space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{t('common.address')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{t('common.hours')}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(+212) 5 24 43 21 09</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-lg sm:text-xl md:text-2xl font-montserrat font-bold leading-tight text-left">
              <span className="text-navy">DINOURI AVOCATS</span>
              <div className="text-xs sm:text-sm md:text-base font-normal text-anthracite text-left">
                LAW FIRM
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm sm:text-base md:text-lg font-montserrat font-medium transition-colors hover:text-gold ${
                  location.pathname === item.href ? 'text-gold' : 'text-anthracite'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-montserrat font-medium hover:bg-opacity-90 transition-all"
            >
              {t('navigation.appointment')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-anthracite hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base sm:text-lg font-montserrat font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-gold bg-gold bg-opacity-10'
                      : 'text-anthracite hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-3 mt-4 bg-gold text-white text-base sm:text-lg px-6 py-3 rounded-lg font-montserrat font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.appointment')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
