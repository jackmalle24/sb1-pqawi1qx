import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Scale, Shield, Users, Clock, Award, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const expertises = [
    { icon: Scale, title: 'Droit des Affaires', description: 'Accompagnement juridique complet pour entreprises et entrepreneurs', link: '/expertises#affaires' },
    { icon: Shield, title: "Droit de l'Arbitrage et Médiation", description: 'Résolution alternative des conflits commerciaux et civils', link: '/expertises#arbitrage' },
    { icon: Users, title: 'Droit International Privé', description: 'Expertise en relations juridiques internationales', link: '/expertises#international' },
    { icon: Award, title: 'Droit Immobilier', description: 'Transactions, contentieux et conseil immobilier', link: '/expertises#immobilier' },
    { icon: CheckCircle, title: 'Droit de la Famille', description: 'Accompagnement dans les affaires familiales et successions', link: '/expertises#famille' },
    { icon: Clock, title: 'Droit Pénal', description: 'Défense pénale et assistance judiciaire', link: '/expertises#penal' },
  ];

  return (
    <>
      <Helmet>
        <title>Cabinet DINOURI - Avocats à Marrakech | Excellence Juridique</title>
        <meta name="description" content="Cabinet d'avocats DINOURI à Marrakech. Expertise en droit des affaires, arbitrage, international. Accompagnement juridique d'excellence depuis Guéliz." />
        <meta name="keywords" content="avocat Marrakech, cabinet DINOURI, droit des affaires Maroc, arbitrage Marrakech, avocat Guéliz" />
        <link rel="canonical" href="https://dinouri-avocats.ma/" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.7), rgba(11, 31, 58, 0.7)), url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-montserrat font-bold mb-6">
            Cabinet <span className="text-gold">DINOURI</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-lora mb-8 max-w-3xl mx-auto">
            Avocats aux barreaux de Marrakech
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gold text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            PRISE DE RENDEZ-VOUS
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="bg-navy p-6 sm:p-8 rounded-lg text-white">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mb-6">Le cabinet</h2>
              <div className="font-lora space-y-4 leading-relaxed text-base sm:text-lg">
                <p>Le Cabinet d'Avocats DINOURI est formé de jeunes avocats dynamiques et engagés.</p>
                <p>Dès le premier rendez-vous, votre cabinet procède à un diagnostic spécifique de votre dossier, pour mieux cerner votre position juridique et y apporter efficacement la solution optimale.</p>
                <p>Le Cabinet reçoit ses clients du lundi au vendredi de 15h à 19h. En cas d'urgence, un rendez-vous peut être fixé en dehors de ces horaires.</p>
              </div>
              <Link
                to="/cabinet"
                className="inline-block mt-6 bg-gold text-white px-5 py-3 rounded-lg font-montserrat font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base"
              >
                EN SAVOIR PLUS
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cabinet d'avocats DINOURI - Bureau moderne à Marrakech" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-16 sm:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-navy mb-4">
              Nos Expertises
            </h2>
            <p className="text-base sm:text-lg font-lora text-anthracite max-w-2xl mx-auto">
              Une gamme complète de services juridiques pour répondre à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertises.map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="text-gold mb-6">
                    <IconComponent size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-4 group-hover:text-gold transition-colors">
                    {expertise.title}
                  </h3>
                  <p className="font-lora text-anthracite text-sm sm:text-base mb-6 leading-relaxed">
                    {expertise.description}
                  </p>
                  <Link
                    to={expertise.link}
                    className="inline-flex items-center text-gold font-montserrat font-medium hover:text-navy transition-colors text-sm sm:text-base"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/expertises"
              className="inline-flex items-center bg-navy text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base"
            >
              Voir toutes nos expertises
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-navy mb-4">
              L'équipe du cabinet
            </h2>
            <p className="text-base sm:text-lg font-lora text-anthracite max-w-2xl mx-auto">
              Une équipe d'avocats experts, formés dans les meilleures institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img 
                src="/images/team-brahim.png" 
                alt="M. Brahim DINOURI"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-2">
                M. Brahim DINOURI
              </h3>
              <p className="text-gold font-montserrat font-medium mb-2 text-sm sm:text-base">Associé fondateur</p>
              <p className="font-lora text-anthracite text-sm sm:text-base">
                Accompagne ses clients avec sérieux et engagement dans toutes les procédures juridiques.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="/images/team-fatima.png" 
                alt="Me Fatima DINOURI"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-2">
                Me Fatima DINOURI
              </h3>
              <p className="text-gold font-montserrat font-medium mb-2 text-sm sm:text-base">Associée fondatrice</p>
              <p className="font-lora text-anthracite text-sm sm:text-base">
                Avocate passionnée et rigoureuse, reconnue pour son engagement envers ses clients.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/equipe"
              className="inline-flex items-center bg-gold text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base"
            >
              Rencontrer toute l'équipe
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Besoin d'un accompagnement juridique ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-lora text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour analyser votre situation et vous proposer les meilleures solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base"
            >
              Prendre rendez-vous
            </Link>
            <a
              href="tel:+212524432109"
              className="border-2 border-gold text-gold px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-gold hover:text-white transition-all text-sm sm:text-base"
            >
              (+212) 5 24 43 21 09
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
