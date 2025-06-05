import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            <p className="text-foreground/80 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour
              toute opportunité professionnelle. Je suis disponible pour
              répondre à vos questions et étudier vos besoins.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Téléphone</h4>
                  <p className="text-foreground/80">+221 70 905 00 50</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-foreground/80">beizeamadou@icloud.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Localisation</h4>
                  <p className="text-foreground/80">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-3">Langues</h4>
              <div className="flex space-x-4">
                <div className="px-4 py-2 rounded-md bg-background border border-border">
                  <p className="font-medium">Français</p>
                </div>
                <div className="px-4 py-2 rounded-md bg-background border border-border">
                  <p className="font-medium">Anglais</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">
              Envoyez-moi un message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Votre nom" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="votre@email.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Sujet de votre message" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Votre message..." required></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                <span>Envoyer</span>
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};