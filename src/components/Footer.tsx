import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {currentYear} Amadou Dioulde BA. Tous droits réservés.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-background text-foreground/70 hover:text-primary transition-colors" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-background text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:beizeamadou@icloud.com" className="p-2 rounded-full bg-background text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};