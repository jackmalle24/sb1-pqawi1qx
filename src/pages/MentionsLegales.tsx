import React from 'react';
import { Helmet } from 'react-helmet-async';

const MentionsLegales: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Cabinet DINOURI Avocats Marrakech</title>
        <meta 
          name="description" 
          content="Mentions légales, politique de confidentialité et conditions d'utilisation du site du Cabinet DINOURI, avocats à Marrakech." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="text-gold">Mentions Légales</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 font-lora text-anthracite">

            {/* Éditeur du site */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                1. Éditeur du Site
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Le présent site web est édité par :
              </p>
              <div className="ml-4 space-y-2 text-base sm:text-lg">
                <p><strong>Société Civile Professionnelle d'Avocats DINOURI</strong></p>
                <p>Rue Ibn Aïcha, Immeuble Les Huit Palmiers</p>
                <p>3ème étage, n°34, Guéliz, Marrakech</p>
                <p>Téléphone : +212 5 24 43 21 09</p>
                <p>Email : contact@dinouri-avocats.ma</p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                2. Directeur de Publication
              </h2>
              <p className="text-base sm:text-lg">
                Le directeur de publication du site est Maître Ahmed DINOURI, 
                Associé Fondateur de la Société Civile Professionnelle d'Avocats DINOURI.
              </p>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                3. Hébergement
              </h2>
              <p className="text-base sm:text-lg">
                Le site est hébergé par [Nom de l'hébergeur], dont le siège social est situé [Adresse].
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                4. Propriété Intellectuelle
              </h2>
              <p className="text-base sm:text-lg mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) 
                est protégé par les droits d'auteur et appartient à la Société Civile 
                Professionnelle d'Avocats DINOURI ou à ses partenaires.
              </p>
              <p className="text-base sm:text-lg">
                Toute reproduction, distribution, modification, adaptation, retransmission 
                ou publication de ces éléments est strictement interdite sans l'accord 
                écrit préalable de DINOURI.
              </p>
            </section>

            {/* Protection des données personnelles */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                5. Protection des Données Personnelles
              </h2>
              
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                5.1 Collecte des données
              </h3>
              <p className="text-base sm:text-lg mb-4">
                Nous collectons uniquement les données personnelles que vous nous 
                transmettez volontairement via nos formulaires de contact : nom, prénom, 
                adresse email, numéro de téléphone et message.
              </p>
              
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                5.2 Finalité du traitement
              </h3>
              <p className="text-base sm:text-lg mb-4">
                Ces données sont exclusivement utilisées pour :
              </p>
              <ul className="list-disc ml-8 mb-4 space-y-1 text-base sm:text-lg">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir des informations juridiques</li>
                <li>Organiser des rendez-vous de consultation</li>
              </ul>
              
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                5.3 Conservation des données
              </h3>
              <p className="text-base sm:text-lg mb-4">
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans 
                à compter de notre dernier contact, sauf obligation légale de conservation plus longue.
              </p>
              
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">
                5.4 Vos droits
              </h3>
              <p className="text-base sm:text-lg mb-4">
                Conformément à la loi 09-08 relative à la protection des personnes physiques 
                à l'égard du traitement des données à caractère personnel, vous disposez des droits suivants :
              </p>
              <ul className="list-disc ml-8 mb-4 space-y-1 text-base sm:text-lg">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit d'effacement</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-base sm:text-lg">
                Pour exercer ces droits, contactez-nous à l'adresse : contact@dinouri-avocats.ma
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                6. Cookies
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Notre site utilise des cookies techniques nécessaires au bon fonctionnement 
                du site et à l'amélioration de votre expérience de navigation.
              </p>
              <p className="text-base sm:text-lg">
                Vous pouvez configurer votre navigateur pour refuser les cookies, 
                mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                7. Limitation de Responsabilité
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Les informations présentes sur ce site sont fournies à titre informatif 
                et ne constituent en aucun cas un conseil juridique personnalisé.
              </p>
              <p className="text-base sm:text-lg">
                Pour tout conseil juridique adapté à votre situation, il est nécessaire 
                de nous consulter directement.
              </p>
            </section>

            {/* Loi applicable */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                8. Loi Applicable et Juridiction Compétente
              </h2>
              <p className="text-base sm:text-lg">
                Les présentes mentions légales sont soumises au droit marocain. 
                En cas de litige, les tribunaux de Marrakech seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-navy mb-4">
                9. Contact
              </h2>
              <p className="text-base sm:text-lg">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="ml-4 mt-4 space-y-2 text-base sm:text-lg">
                <p>Par téléphone : +212 5 24 43 21 09</p>
                <p>Par email : dinourilawfirm1@gmail.com</p>
                <p>Par courrier : Rue Ibn Aïcha, Immeuble Les Huit Palmiers, 3ème étage, n°34, Guéliz, Marrakech</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8 text-xs sm:text-sm text-gray-600 text-center">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
