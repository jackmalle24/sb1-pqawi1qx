import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    });
  };

  const subjects = [
    'Consultation juridique générale',
    'Droit des affaires',
    'Droit de l\'arbitrage et médiation',
    'Droit international privé',
    'Droit immobilier',
    'Droit de la famille',
    'Droit pénal',
    'Urgence juridique',
    'Autre'
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Cabinet DINOURI Avocats Marrakech</title>
        <meta name="description" content="Contactez le Cabinet DINOURI à Marrakech. Consultation juridique, rendez-vous avocat. Urgences 24/7. Guéliz, Marrakech." />
        <meta name="keywords" content="contact avocat Marrakech, consultation juridique Maroc, rendez-vous avocat Marrakech, urgence juridique" />
        <link rel="canonical" href="https://dinouri-avocats.ma/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-anthracite text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-montserrat font-bold mb-6">
            <span className="text-gold">Contactez-nous</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lora text-gray-300 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos démarches juridiques
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">Adresse</h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                N° 2, imm 6, rue des Vieux<br />
                Marrakchis,<br />
                Guéliz, Marrakech
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">Téléphone</h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                <a href="tel:+212524432109" className="hover:text-gold transition-colors">
                  (+212) 5 24 43 21 09
                </a>
              </p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="bg-gold text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-3">Nous écrire</h3>
              <p className="font-lora text-sm sm:text-base text-anthracite">
                <a href="mailto:dinourilawfirm1@gmail.com" className="hover:text-gold transition-colors">
                  dinourilawfirm1@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-light-gray p-6 sm:p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-navy mb-6">
                Demande de Contact
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-navy mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="font-lora text-sm sm:text-base text-anthracite">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-montserrat font-medium text-navy mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent font-lora text-sm sm:text-base"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat font-medium text-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent font-lora text-sm sm:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-montserrat font-medium text-navy mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent font-lora text-sm sm:text-base"
                        placeholder="+212 6 XX XX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-montserrat font-medium text-navy mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent font-lora text-sm sm:text-base"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-montserrat font-medium text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent font-lora text-sm sm:text-base resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className="text-xs sm:text-sm font-lora text-anthracite">
                      J'accepte que mes données personnelles soient traitées conformément à la 
                      <a href="/mentions-legales" className="text-gold hover:underline ml-1">
                        politique de confidentialité
                      </a>
                      . *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-white px-6 py-3 sm:py-4 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Opening Hours & Emergency */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-navy mb-6 flex items-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold mr-3" />
                  Horaires d'Ouverture
                </h3>
                <div className="space-y-2 sm:space-y-3 font-lora text-sm sm:text-base text-anthracite">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi :</span>
                    <span className="font-medium">15:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi :</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche :</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
                
                <div className="bg-gold bg-opacity-10 p-4 sm:p-6 rounded-lg mt-6">
                  <div className="flex items-center text-gold mb-2 sm:mb-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <strong className="font-montserrat text-base sm:text-lg">Urgences 24/7</strong>
                  </div>
                  <p className="font-lora text-sm sm:text-base text-anthracite">
                    En cas d'urgence juridique, un rendez-vous peut vous être fixé en dehors de ces horaires. 
                    N'hésitez pas à nous contacter.
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
          <div className="text-center mb-8">
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
              className="sm:h-[400px]"
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

export default Contact;
