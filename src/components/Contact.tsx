import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    leftSection: false,
    rightSection: false,
    contactInfo: [],
    languages: false,
    formFields: []
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
        // Animation séquentielle
        setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 100);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, leftSection: true })), 300);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, rightSection: true })), 500);

        // Animation des éléments de contact un par un
        setTimeout(() => setVisibleElements(prev => ({ ...prev, contactInfo: [0] })), 700);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, contactInfo: [0, 1] })), 900);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, contactInfo: [0, 1, 2] })), 1100);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, languages: true })), 1300);

        // Animation des champs du formulaire un par un
        setTimeout(() => setVisibleElements(prev => ({ ...prev, formFields: [0] })), 800);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, formFields: [0, 1] })), 1000);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, formFields: [0, 1, 2] })), 1200);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, formFields: [0, 1, 2, 3] })), 1400);
        setTimeout(() => setVisibleElements(prev => ({ ...prev, formFields: [0, 1, 2, 3, 4] })), 1600);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-accent/5"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${visibleElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          Contact
        </h2>
        <div className={`h-1 bg-primary mx-auto mb-12 transition-all duration-1000 ${visibleElements.title ? 'w-20 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{ transitionDelay: visibleElements.title ? '200ms' : '0ms' }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`transition-all duration-800 ${visibleElements.leftSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            <p className="text-foreground/80 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour
              toute opportunité professionnelle. Je suis disponible pour
              répondre à vos questions et étudier vos besoins.
            </p>
            <div className="space-y-6">
              {/* Téléphone */}
              <div className={`flex items-start transition-all duration-700 ${visibleElements.contactInfo.includes(0)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
                }`}>
                <div className={`p-3 rounded-full bg-primary/10 text-primary mr-4 transition-all duration-500 hover:scale-110 hover:bg-primary hover:text-primary-foreground ${visibleElements.contactInfo.includes(0) ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
                  }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Téléphone</h4>
                  <p className="text-foreground/80 hover:text-primary transition-colors duration-300">(514) 977-3712</p>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-start transition-all duration-700 ${visibleElements.contactInfo.includes(1)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
                }`}>
                <div className={`p-3 rounded-full bg-primary/10 text-primary mr-4 transition-all duration-500 hover:scale-110 hover:bg-primary hover:text-primary-foreground ${visibleElements.contactInfo.includes(1) ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
                  }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-foreground/80 hover:text-primary transition-colors duration-300">beizeamadou@icloud.com</p>
                </div>
              </div>

              {/* Localisation */}
              <div className={`flex items-start transition-all duration-700 ${visibleElements.contactInfo.includes(2)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
                }`}>
                <div className={`p-3 rounded-full bg-primary/10 text-primary mr-4 transition-all duration-500 hover:scale-110 hover:bg-primary hover:text-primary-foreground ${visibleElements.contactInfo.includes(2) ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
                  }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Localisation</h4>
                  <p className="text-foreground/80">16A Douglas St, Charlottetown,P-E-I</p>
                </div>
              </div>
            </div>

            <div className={`mt-8 transition-all duration-700 ${visibleElements.languages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <h4 className="font-medium mb-3">Langues</h4>
              <div className="flex space-x-4">
                <div className="px-4 py-2 rounded-md bg-background border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300">
                  <p className="font-medium">Français</p>
                </div>
                <div className="px-4 py-2 rounded-md bg-background border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300">
                  <p className="font-medium">Anglais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-800 ${visibleElements.rightSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
            <h3 className="text-2xl font-semibold mb-6">
              Envoyez-moi un message
            </h3>
            <form>
              <div className={`mb-4 transition-all duration-600 ${visibleElements.formFields.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className={`mb-4 transition-all duration-600 ${visibleElements.formFields.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className={`mb-4 transition-all duration-600 ${visibleElements.formFields.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div className={`mb-6 transition-all duration-600 ${visibleElements.formFields.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 group ${visibleElements.formFields.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <span>Envoyer</span>
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};