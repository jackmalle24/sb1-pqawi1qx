import React from 'react';
import { Helmet } from 'react-helmet-async';

const Expertises: React.FC = () => {
  const expertises = [
    {
      icon: 'fas fa-briefcase',
      title: 'Droit des Affaires',
      description: 'Création de sociétés, contrats commerciaux, fusions-acquisitions, droit des sociétés, restructurations d\'entreprises et conseil juridique aux entreprises.',
      services: ['Création et structuration de sociétés', 'Contrats commerciaux', 'Fusions & acquisitions', 'Gouvernance d\'entreprise']
    },
    {
      icon: 'fas fa-gavel',
      title: 'Droit Pénal',
      description: 'Défense pénale, assistance lors des gardes à vue, représentation devant les juridictions pénales, droit pénal des affaires.',
      services: ['Défense pénale', 'Droit pénal des affaires', 'Procédures d\'instruction', 'Assistance aux victimes']
    },
    {
      icon: 'fas fa-home',
      title: 'Droit Immobilier',
      description: 'Transactions immobilières, contrats de bail, copropriété, urbanisme, contentieux immobilier et conseil en investissement immobilier.',
      services: ['Transactions immobilières', 'Contrats de bail', 'Copropriété', 'Contentieux immobilier']
    },
    {
      icon: 'fas fa-handshake',
      title: 'Arbitrage & Médiation',
      description: 'Résolution alternative des conflits, arbitrage commercial, médiation d\'entreprise, négociation et rédaction de clauses compromissoires.',
      services: ['Arbitrage commercial', 'Médiation d\'entreprise', 'Négociation', 'Clauses compromissoires']
    },
    {
      icon: 'fas fa-calculator',
      title: 'Procédures Collectives',
      description: 'Prévention des difficultés, sauvegarde, redressement judiciaire, liquidation judiciaire, accompagnement des entreprises en difficulté.',
      services: ['Prévention des difficultés', 'Sauvegarde', 'Redressement judiciaire', 'Liquidation judiciaire']
    },
    {
      icon: 'fas fa-trademark',
      title: 'Propriété Industrielle & Commerciale',
      description: 'Protection des marques, brevets, dessins et modèles, noms de domaine, contrefaçon, concurrence déloyale.',
      services: ['Protection des marques', 'Brevets d\'invention', 'Dessins et modèles', 'Lutte contre la contrefaçon']
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Protection du Consommateur',
      description: 'Droit de la consommation, pratiques commerciales déloyales, garanties, litiges de consommation, class actions.',
      services: ['Droit de la consommation', 'Pratiques déloyales', 'Garanties commerciales', 'Actions collectives']
    },
    {
      icon: 'fas fa-globe',
      title: 'Droit International Privé',
      description: 'Contrats internationaux, arbitrage international, conflits de lois, reconnaissance de décisions étrangères.',
      services: ['Contrats internationaux', 'Arbitrage international', 'Conflits de juridictions', 'Entraide judiciaire']
    },
    {
      icon: 'fas fa-heart',
      title: 'Famille & Successions',
      description: 'Divorce, régimes matrimoniaux, successions, donations, protection des majeurs, droit des enfants.',
      services: ['Divorce et séparation', 'Successions', 'Régimes matrimoniaux', 'Protection des majeurs']
    },
    {
      icon: 'fas fa-university',
      title: 'Administratif & Fiscal',
      description: 'Contentieux administratif, droit public des affaires, fiscalité, contrôles fiscaux, optimisation fiscale.',
      services: ['Contentieux administratif', 'Fiscalité des entreprises', 'Contrôles fiscaux', 'Optimisation fiscale']
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Droit du Travail',
      description: 'Relations individuelles et collectives, licenciements, prud\'hommes, négociations sociales, audit social.',
      services: ['Relations individuelles', 'Contentieux prud\'homal', 'Négociations sociales', 'Audit social']
    },
    {
      icon: 'fas fa-car-crash',
      title: 'Droit des Assurances',
      description: 'Contrats d\'assurance, sinistres, responsabilité civile, expertise contradictoire, recours et indemnisations.',
      services: ['Contrats d\'assurance', 'Gestion des sinistres', 'Responsabilité civile', 'Recours et indemnisations']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expertises Juridiques Marrakech | Cabinet DINOURI - 12 Spécialités</title>
        <meta name="description" content="⭐ 12 domaines d'expertise juridique à Marrakech : droit des affaires, pénal, immobilier, arbitrage, fiscal. Avocats spécialisés Cabinet DINOURI." />
        <meta name="keywords" content="expertise juridique Marrakech, droit des affaires Maroc, avocat pénal Marrakech, droit immobilier Maroc, arbitrage Marrakech, avocat spécialisé Guéliz" />
        <link rel="canonical" href="https://dinouri-avocats.ma/expertises" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-12 sm:py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Nos <span className="text-gold">Expertises</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lora text-gray-300 max-w-3xl mx-auto">
            Une gamme complète de <strong>services juridiques à Marrakech</strong> pour répondre à tous vos besoins
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 id="intro-heading" className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-6">
              Excellence et Spécialisation
            </h2>
            <p className="text-base sm:text-lg font-lora text-anthracite mb-6 sm:mb-8">
              Le <strong>Cabinet DINOURI</strong> couvre l'ensemble des branches du droit avec une <strong>expertise 
              reconnue</strong> dans chaque domaine. Nos <strong>avocats spécialisés à Marrakech</strong> vous accompagnent 
              avec professionnalisme et efficacité dans tous vos projets juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="py-12 sm:py-16 bg-light-gray" aria-labelledby="expertises-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="expertises-heading" className="sr-only">Nos 12 domaines d'expertise juridique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertises.map((expertise, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow group">
                <div className="text-gold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  <i className={expertise.icon} aria-hidden="true"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3 sm:mb-4 group-hover:text-gold transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-sm sm:text-base font-lora text-anthracite mb-4 sm:mb-6 leading-relaxed">
                  {expertise.description}
                </p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h4 className="font-montserrat font-medium text-navy mb-2">Services inclus :</h4>
                  <ul className="space-y-1">
                    {expertise.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="font-lora text-sm text-anthracite flex items-center">
                        <span className="w-2 h-2 bg-gold rounded-full mr-2 flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mb-6">
            Besoin d'un accompagnement juridique ?
          </h2>
          <p className="text-base sm:text-lg font-lora text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour analyser votre situation 
            et vous proposer les meilleures solutions juridiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:+212524432109"
              className="border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-gold hover:text-white transition-all"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertises;
