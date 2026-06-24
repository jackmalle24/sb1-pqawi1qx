import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="text-xl font-montserrat font-bold mb-4">
              <span className="text-gold">DINOURI</span>
              <div className="text-sm font-normal text-gray-300">
                Société Civile Professionnelle d'Avocats
              </div>
            </div>
            <p className="text-gray-300 font-lora text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-gold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm font-lora">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-gold flex-shrink-0" />
                <span className="text-gray-300">
                  Rue Ibn Aïcha, Immeuble Les Huit Palmiers,<br />
                  3ème étage, n°34, Guéliz, Marrakech
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gold" />
                <span className="text-gray-300">+212 5 24 43 21 09</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gold" />
                <span className="text-gray-300">contact@dinouri-avocats.ma</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2 text-gold" />
                <span className="text-gray-300">LinkedIn</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-montserrat font-semibold text-gold mb-4">{t('footer.hours')}</h3>
            <div className="space-y-2 text-sm font-lora text-gray-300">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gold" />
                <span>Lun-Ven: 09:00 - 19:00</span>
              </div>
              <div className="ml-6">Samedi: 09:00 - 13:00</div>
              <div className="text-gold font-medium mt-3">{t('footer.emergency')}</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-gold mb-4">{t('footer.links')}</h3>
            <div className="space-y-2 text-sm font-lora">
              <Link to="/cabinet" className="block text-gray-300 hover:text-gold transition-colors">
                {t('navigation.cabinet')}
              </Link>
              <Link to="/expertises" className="block text-gray-300 hover:text-gold transition-colors">
                {t('navigation.expertises')}
              </Link>
              <Link to="/equipe" className="block text-gray-300 hover:text-gold transition-colors">
                {t('navigation.team')}
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-gold transition-colors">
                FAQ
              </Link>
              <Link to="/mentions-legales" className="block text-gray-300 hover:text-gold transition-colors">
                Mentions Légales
              </Link>
              <a 
                href="https://www.google.com/maps/place/Ma%C3%AEtre+Brahim+Dinouri/@31.6375635,-8.0111471,543m/data=!3m2!1e3!4b1!4m6!3m5!1s0xdafef4dac411d27:0x48104988133cb269!8m2!3d31.6375635!4d-8.0111471!16s%2Fg%2F11yzsdrlgq!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Google Business Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm font-lora">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
