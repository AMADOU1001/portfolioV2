import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, MapPin, Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_page.jpg';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const roles = [
    'Développeur Front-End',
    'Développeur Full-Stack',
    'Développeur Back-End'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 300); // Délai pour l'effet de disparition
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [roles.length]);

  // Fonction pour gérer le téléchargement du CV
  const handleCVDownload = () => {
    const cvPath = '/AMADOUDIOULDE_BA_CV(1).pdf'; // Chemin depuis le dossier public
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'AMADOUDIOULDE_BA_CV(1).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <motion.span
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  delay: 0.2
                }}
                className="text-primary"
              >
                Amadou Dioulde BA

              </motion.span>
              <p className="text-2xl  tracking-tight text-foreground/60 mb-4">
                Passionné par la création de solutions innovantes
              </p>
              <motion.div
                initial={{
                  width: 0
                }}
                animate={{
                  width: '6rem'
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5
                }}
                className="h-1 w-24 bg-primary my-4"
              ></motion.div>
            </h1>

            {/* Texte rotatif animé */}
            <div className="text-2xl md:text-3xl text-foreground/80 mb-6 h-12 flex items-center">
              <motion.p
                key={currentRoleIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8
                }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : -20,
                  scale: isVisible ? 1 : 0.8
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              >
                {roles[currentRoleIndex]}

              </motion.p>

              <motion.span
                animate={{
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="ml-1 text-primary text-3xl font-light"
              >
                |
              </motion.span>

            </div>


            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.6,
                duration: 0.5
              }}
              className="flex flex-col space-y-3 text-foreground/70 mb-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex items-center hover:text-primary transition-colors duration-300"
              >
                <MapPin size={18} className="mr-2" />
                <span>16A Douglas St,Charlottetown,P-E-I</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex items-center hover:text-primary transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
                <span>(514) 977-3712</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="flex items-center hover:text-primary transition-colors duration-300"
              >
                <Mail size={18} className="mr-2" />
                <span>beizeamadou@icloud.com</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 1.0,
                duration: 0.5
              }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center font-medium"
              >
                Me contacter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 text-center font-medium"
              >
                Voir mes projets
              </motion.a>

              {/* Bouton CV corrigé */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCVDownload}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-center flex items-center justify-center font-medium cursor-pointer"
              >
                <Download size={18} className="mr-2" />
                Télécharger CV
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -10
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Effet de lueur animé */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent 70%, hsl(var(--primary) / 0.3) 100%)`
                }}
              />

              {/* Image avec effet de superposition */}
              <img
                src={heroImage}
                alt="Amadou Dioulde BA"
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.2
          }}
          className="flex justify-center mt-16"
        >
          <motion.a
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="p-3 rounded-full border border-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};