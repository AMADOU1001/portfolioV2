import React from 'react';
import { ArrowDown, Mail, MapPin, Phone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from './Particles';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Particules en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Particles 
          particleColors={['#ffffff', '#ffffff']} 
          particleCount={200} 
          particleSpread={10} 
          speed={0.1} 
          particleBaseSize={100} 
          moveParticlesOnHover={true} 
          alphaParticles={false} 
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Contenu principal au-dessus des particules */}
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
            <p className="text-2xl md:text-3xl text-foreground/80 mb-6">
              Développeur Front-End
            </p>
            <div className="flex flex-col space-y-3 text-foreground/70 mb-8">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+221 70 905 00 50</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>beizeamadou@icloud.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity text-center"
              >
                Me contacter
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity text-center"
              >
                Voir mes projets
              </a>
              <a 
                href="/path-to-your-cv.pdf" 
                download 
                className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity text-center flex items-center justify-center"
              >
                <Download size={18} className="mr-2" />
                Télécharger CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{
              opacity: 0,
              scale: 0.8
            }} 
            animate={{
              opacity: 1,
              scale: 1
            }} 
            transition={{
              duration: 0.5
            }} 
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <img 
                src="././hero_page.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
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
            delay: 0.6
          }} 
          className="flex justify-center mt-16"
        >
          <a 
            href="#about" 
            className="animate-bounce p-2 rounded-full border border-foreground/20 hover:border-foreground/40 transition-colors" 
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};