import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quels sont les domaines d'expertise du Cabinet DINOURI ?",
      answer: "Le Cabinet DINOURI couvre l'ensemble des branches du droit : droit des affaires, droit pénal, droit immobilier, arbitrage et médiation, droit fiscal, droit du travail, droit des assurances, droit de la famille, et bien d'autres. Nos avocats spécialisés vous accompagnent dans tous vos projets juridiques.",
      category: "Services"
    },
    {
      question: "Comment prendre rendez-vous avec un avocat à Marrakech ?",
      answer: "Vous pouvez prendre rendez-vous en nous appelant au +212 5 24 43 21 09, en nous envoyant un email à contact@dinouri-avocats.ma, ou en remplissant notre formulaire de contact en ligne. Nous proposons également un service d'urgence 24h/24 et 7j/7.",
      category: "Rendez-vous"
    },
    {
      question: "Quels sont vos tarifs de consultation juridique ?",
      answer: "Nos tarifs varient selon la complexité du dossier et le domaine juridique concerné. Nous proposons une première consultation pour évaluer votre situation et vous présenter un devis personnalisé. Contactez-nous pour obtenir une estimation adaptée à vos besoins.",
      category: "Tarifs"
    },
    {
      question: "Le Cabinet DINOURI intervient-il en urgence ?",
      answer: "Oui, nous proposons un service d'urgence 24h/24 et 7j/7 pour les situations juridiques critiques. Que ce soit pour une garde à vue, une procédure d'urgence, ou tout autre besoin juridique urgent, notre équipe est disponible pour vous assister.",
      category: "Urgences"
    },
    {
      question: "Dans quelles langues pouvez-vous me conseiller ?",
      answer: "Notre équipe maîtrise plusieurs langues : français, arabe, anglais et espagnol. Cette diversité linguistique nous permet d'accompagner efficacement notre clientèle nationale et internationale.",
      category: "Langues"
    },
    {
      question: "Comment se déroule une consultation juridique ?",
      answer: "Lors de votre première consultation, nous analysons votre situation, identifions les enjeux juridiques, et vous proposons une stratégie adaptée. Nous vous expliquons clairement vos droits, les procédures possibles, et les délais à respecter. Chaque consultation est confidentielle et personnalisée.",
      category: "Consultation"
    },
    {
      question: "Le Cabinet DINOURI représente-t-il les entreprises ?",
      answer: "Absolument. Nous accompagnons les entreprises de toutes tailles dans leurs problématiques juridiques : création de sociétés, contrats commerciaux, fusions-acquisitions, contentieux commercial, droit social, fiscalité d'entreprise, et bien plus encore.",
      category: "Entreprises"
    },
    {
      question: "Proposez-vous des solutions de médiation et d'arbitrage ?",
      answer: "Oui, nous sommes spécialisés dans les modes alternatifs de résolution des conflits. Nous proposons des services de médiation et d'arbitrage pour résoudre vos litiges de manière amiable, rapide et confidentielle, évitant ainsi les procédures judiciaires longues et coûteuses.",
      category: "Médiation"
    },
    {
      question: "Où se situe le Cabinet DINOURI à Marrakech ?",
      answer: "Notre cabinet est situé au cœur du quartier Guéliz, à l'adresse suivante : Rue Ibn Aïcha, Immeuble Les Huit Palmiers, 3ème étage, n°34, Guéliz, Marrakech. Nous sommes facilement accessibles en transport en commun et disposons de places de parking à proximité.",
      category: "Localisation"
    },
    {
      question: "Quelles sont vos heures d'ouverture ?",
      answer: "Nous sommes ouverts du lundi au vendredi de 9h00 à 18h00, et le samedi de 9h00 à 13h00. Pour les urgences, nous restons disponibles 24h/24 et 7j/7. N'hésitez pas à nous contacter en dehors des heures d'ouverture pour les situations critiques.",
      category: "Horaires"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Questions Fréquentes | Cabinet DINOURI Avocat Marrakech</title>
        <meta name="description" content="Réponses aux questions fréquentes sur nos services juridiques à Marrakech. Consultation, tarifs, urgences, domaines d'expertise. Cabinet DINOURI." />
        <meta name="keywords" content="FAQ avocat Marrakech, questions juridiques Maroc, consultation avocat, tarifs avocat Marrakech, urgence juridique" />
        <link rel="canonical" href="https://dinouri-avocats.ma/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Questions <span className="text-gold">Fréquentes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-lora text-gray-300 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services juridiques
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Vos Questions, Nos Réponses
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-lora text-anthracite">
              Consultez notre FAQ pour obtenir des informations détaillées sur nos services
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <span 
                  key={index}
                  className="bg-gold bg-opacity-10 text-gold px-4 py-2 rounded-full text-xs sm:text-sm font-montserrat font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-montserrat font-semibold text-navy pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gold" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gold" aria-hidden="true" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4 border-t border-gray-100"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-sm sm:text-base md:text-lg font-lora text-anthracite leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                    <div className="mt-3">
                      <span className="inline-block bg-gold bg-opacity-10 text-gold px-3 py-1 rounded-full text-xs font-montserrat">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-light-gray" aria-labelledby="contact-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-navy mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-lora text-anthracite mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all"
              aria-label="Nous contacter pour une question personnalisée"
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Nous contacter
            </a>
            <a
              href="tel:+212524432109"
              className="inline-flex items-center border-2 border-gold text-gold px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-gold hover:text-white transition-all"
              aria-label="Appeler le cabinet au +212 5 24 43 21 09"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              +212 5 24 43 21 09
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
