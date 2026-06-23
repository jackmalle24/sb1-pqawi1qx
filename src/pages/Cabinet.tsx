import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Phone, Mail, Award, Users, Target } from 'lucide-react';

const Cabinet: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cabinet Avocat Marrakech | DINOURI - Histoire et Valeurs Excellence</title>
        <meta
          name="description"
          content="⭐ Découvrez le Cabinet DINOURI, avocats experts à Marrakech. Histoire, valeurs, localisation Guéliz. Excellence juridique depuis des années."
        />
        <meta
          name="keywords"
          content="cabinet avocat Marrakech, histoire cabinet DINOURI, avocats Guéliz Marrakech, valeurs cabinet juridique Maroc"
        />
        <link rel="canonical" href="https://dinouri-avocats.ma/cabinet" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-12 sm:py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-4 sm:mb-6">
              {t('cabinet.title')} <span className="text-gold">DINOURI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-lora text-gray-300 max-w-2xl mx-auto">
              {t('cabinet.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-12 sm:py-16" aria-labelledby="history-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 id="history-heading" className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-4 sm:mb-6">
                {t('cabinet.history.title')}
              </h2>
              <div className="font-lora text-anthracite space-y-3 sm:space-y-4 text-base sm:text-lg">
                <p>{t('cabinet.history.content1')}</p>
                <p>{t('cabinet.history.content2')}</p>
                <p>{t('cabinet.history.content3')}</p>
              </div>
            </div>
            <div className="bg-light-gray p-6 sm:p-8 rounded-lg">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cabinet d'avocats DINOURI moderne à Marrakech - bureaux professionnels"
                className="w-full h-56 sm:h-64 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="font-lora text-sm sm:text-base text-anthracite text-center italic">
                Excellence et modernité au service du droit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-12 sm:py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-3 sm:mb-4">
              {t('cabinet.values.title')}
            </h2>
            <p className="text-base sm:text-lg font-lora text-anthracite">
              {t('cabinet.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                {t('cabinet.values.rigor.title')}
              </h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                {t('cabinet.values.rigor.description')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                {t('cabinet.values.discretion.title')}
              </h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                {t('cabinet.values.discretion.description')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                {t('cabinet.values.results.title')}
              </h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                {t('cabinet.values.results.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-3 sm:mb-4">
              Informations Pratiques
            </h2>
            <p className="text-base sm:text-lg font-lora text-anthracite">
              Toutes les informations pour nous contacter et nous rencontrer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Adresse & Contact */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-4 sm:mb-6">
                Adresse & Contact
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div className="font-lora text-anthracite">
                    <strong>Rue Ibn Aïcha</strong>
                    <br />
                    Immeuble Les Huit Palmiers
                    <br />
                    3ème étage, n°34
                    <br />
                    Guéliz, Marrakech
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold mr-3" />
                  <span className="font-lora text-anthracite">+212 5 24 43 21 09</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold mr-3" />
                  <span className="font-lora text-anthracite"
                    >dinourilawfirm1@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-4 sm:mb-6">
                Horaires d'Ouverture
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-3" />
                  <div className="font-lora text-anthracite">
                    <strong>Lundi - Vendredi:</strong> 09:00 - 17:00
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-3" />
                  <div className="font-lora text-anthracite">
                    <strong>Samedi:</strong> 09:00 - 13:00
                  </div>
                </div>
                <div className="bg-gold bg-opacity-10 p-4 rounded-lg mt-6">
                  <div className="flex items-center text-gold">
                    <Phone className="w-5 h-5 mr-2" />
                    <strong className="font-montserrat text-sm sm:text-base">
                      Service d'urgence 24h/24, 7j/7
                    </strong>
                  </div>
                  <p className="font-lora text-xs sm:text-sm text-anthracite mt-2">
                    Pour les urgences juridiques, nous restons disponibles en dehors des heures d'ouverture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-3 sm:mb-4">
              Nous Localiser
            </h2>
            <p className="font-lora text-sm sm:text-base text-anthracite">
              Au cœur du quartier Guéliz à Marrakech
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.2!2d-8.0!3d31.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ4LjAiTiA4wrAwMCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1234567890"
              width="100%"
              height="300"
              className="sm:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Cabinet DINOURI"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cabinet;
