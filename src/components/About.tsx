import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  // Animation container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Animation générale (fade + slide-up)
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Animation spéciale pour les stats (zoom + bounce léger)
  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'backOut' }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      id="about"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Titre */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            À Propos
          </motion.h2>

          {/* Séparateur animé */}
          <motion.div
            variants={item}
            className="h-1 w-20 bg-primary mx-auto mb-12"
          ></motion.div>

          {/* Texte animé */}
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
            <motion.p variants={item} className="mb-4">
              Développeur en technologies de l'information, titulaire d'un bac
              +3, je cumule deux ans d'expérience dans le développement web et
              d'applications desktop. Travaillant en freelance, j'ai eu
              l'opportunité de mener à bien plusieurs projets, ce qui m'a permis
              d'acquérir une solide expertise et de m'adapter aux évolutions
              constantes du domaine.
            </motion.p>
            <motion.p variants={item}>
              Passionné par l'innovation et la création de solutions
              performantes, je souhaite rejoindre votre entreprise afin de mettre
              mes compétences à votre service.
            </motion.p>
          </div>

          {/* Stats avec animation zoom + bounce */}
          <motion.div
            variants={container}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { value: '5+', label: "Années d'expérience" },
              { value: 'plusieurs', label: 'Projets réalisés' },
              { value: '2', label: 'Langues parlées' },
              { value: '100%', label: 'Satisfaction client' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statItem}
                className="p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <h3 className="font-bold text-xl mb-2">{stat.value}</h3>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
