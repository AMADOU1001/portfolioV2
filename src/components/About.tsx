import React, { Children } from 'react';
import { motion } from 'framer-motion';
export const About = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <motion.section initial="hidden" whileInView="show" viewport={{
    once: true
  }} variants={container} id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            À Propos
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
            <p className="mb-4">
              Développeur en technologies de l'information, titulaire d'un bac
              +2, je cumule deux ans d'expérience dans le développement web et
              d'applications desktop. Travaillant en freelance, j'ai eu
              l'opportunité de mener à bien plusieurs projets, ce qui m'a permis
              d'acquérir une solide expertise et de m'adapter aux évolutions
              constantes du domaine.
            </p>
            <p>
              Passionné par l'innovation et la création de solutions
              performantes, je souhaite rejoindre votre entreprise afin de
              mettre mes compétences à votre service.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">2+</h3>
              <p className="text-foreground/70">Années d'expérience</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">2</h3>
              <p className="text-foreground/70">Projets réalisés</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">2</h3>
              <p className="text-foreground/70">Langues parlées</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">100%</h3>
              <p className="text-foreground/70">Satisfaction client</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>;
};