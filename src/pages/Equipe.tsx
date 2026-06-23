import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Award, GraduationCap, Handshake, Users } from 'lucide-react';

const Equipe: React.FC = () => {
  const mainTeam = [
    {
      name: 'M. Brahim DINOURI',
      title: 'Associé fondateur',
      photo: '/images/team-brahim.png',
      education: 'Licence en droit privé, Avocat au barreau de Marrakech',
      bio: 'Accompagne ses clients avec sérieux et engagement dans toutes les procédures juridiques, en mettant l\'accent sur la rigueur, la confidentialité et la défense des intérêts de chaque client.',
      linkedin: '#',
      email: 'dinourilawfirm1@gmail.com'
    },
    {
      name: 'Me Fatima DINOURI',
      title: 'Associée fondatrice',
      photo: '/images/team-fatima.png',
      education: 'Licence en droit privé – Université Cadi Ayyad, Marrakech',
      bio: 'Avocate passionnée et rigoureuse, reconnue pour son engagement envers ses clients et la qualité de son accompagnement.',
      linkedin: '#',
      email: 'dinourilawfirm1@gmail.com'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notre Équipe - Cabinet DINOURI Avocats Marrakech</title>
        <meta name="description" content="Rencontrez l'équipe d'avocats du Cabinet DINOURI à Marrakech. M. Brahim DINOURI et Me Fatima DINOURI, associés fondateurs." />
        <meta name="keywords" content="équipe avocats Marrakech, Me Fatima DINOURI, M. Brahim DINOURI, cabinet DINOURI équipe" />
        <link rel="canonical" href="https://dinouri-avocats.ma/equipe" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            L'équipe du <span className="text-gold">cabinet</span>
          </h1>
          <p className="text-xl font-lora text-gray-300 max-w-3xl mx-auto">
            Des avocats d'exception, formés dans les meilleures institutions, au service de votre réussite juridique
          </p>
        </div>
      </section>

      {/* Main Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-4">
              Nos Associés Fondateurs
            </h2>
            <p className="text-lg font-lora text-anthracite max-w-2xl mx-auto">
              Une équipe dirigeante expérimentée et engagée
            </p>
          </div>

          <div className="space-y-16">
            {mainTeam.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/3">
                  <img 
                    src={member.photo} 
                    alt={`Photo de ${member.name}`}
                    className="w-80 h-80 rounded-lg object-cover shadow-lg mx-auto"
                  />
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-montserrat font-bold text-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xl text-gold font-montserrat font-medium mb-4">
                    {member.title}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center lg:justify-start mb-3">
                      <GraduationCap className="w-5 h-5 mr-2 text-gold" />
                      <span className="font-montserrat font-semibold text-navy">Formation</span>
                    </div>
                    <p className="font-lora text-anthracite leading-relaxed">
                      {member.education}
                    </p>
                  </div>
                  
                  <p className="font-lora text-anthracite text-lg leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-gold hover:text-navy transition-colors"
                        title="Envoyer un email"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        <span className="font-montserrat">Contact</span>
                      </a>
                    )}
                    <a 
                      href={member.linkedin}
                      className="flex items-center text-gold hover:text-navy transition-colors"
                      title="Profil LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      <span className="font-montserrat">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-navy mb-6">
              Nos Valeurs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-4">Excellence</h3>
              <p className="font-lora text-anthracite">
                Nous nous engageons à fournir des services juridiques de la plus haute qualité, 
                en nous appuyant sur notre expertise et notre formation continue.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-4">Intégrité</h3>
              <p className="font-lora text-anthracite">
                L'honnêteté, la transparence et l'éthique professionnelle guident chacune 
                de nos actions et décisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-4">Engagement</h3>
              <p className="font-lora text-anthracite">
                Nous nous investissons pleinement dans chaque dossier, en mettant tout 
                en œuvre pour défendre les intérêts de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Rencontrons-nous
          </h2>
          <p className="text-xl font-lora text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour un premier échange et l'analyse de votre situation juridique.
          </p>
          <a
            href="/contact"
            className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </>
  );
};

export default Equipe;
