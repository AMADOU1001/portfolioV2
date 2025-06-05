import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Lightning from './Lightning';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Développeur Front-end Freelance',
      company: '',
      period: "Oct. 2024 – Aujourd'hui",
      location: 'Dakar, Sénégal',
      description: 'Projet : Site vitrine avec ReactJS',
      responsibilities: [
        "Conception de l'architecture et de l'interface selon les besoins client",
        'Développement des fonctionnalités en ReactJS pour une expérience utilisateur fluide',
        'Optimisation SEO et performance du site',
        'Gestion complète de la relation client avec suivi régulier'
      ]
    },
    {
      title: 'Développeur Front-end Freelance',
      company: '',
      period: 'Fév. 2023 – Oct. 2024',
      location: 'Montréal, Canada',
      description: 'Projet : Logiciel de gestion de rendez-vous en C#',
      responsibilities: [
        'Conception et structuration de base de données',
        "Développement d'interface utilisateur intuitive en C#",
        'Implémentation de fonctionnalités avancées (notifications, gestion créneaux, export)',
        'Tests et optimisation pour stabilité et sécurité'
      ]
    },
    {
      title: 'Caissier',
      company: 'Pharmacie Malika Plage',
      period: 'Jan. 2022 – Fév. 2023',
      location: 'Montréal, Canada',
      description: '',
      responsibilities: [
        'Gestion des transactions et encaissement',
        'Gestion des stocks et suivi produits',
        'Service client et conseil personnalisé',
        "Travail d'équipe coordonné"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Lightning
          hue={220}
          xOffset={0}
          speed={0.5}
          intensity={0.8}
          size={1.5}
        />
      </div>
      
      {/* Overlay pour adoucir l'effet */}
      <div className="absolute inset-0 z-[1] bg-background/60"></div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Expérience Professionnelle
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[2.85rem] top-1"></div>
                
                <div className="p-6 rounded-lg border border-border bg-accent/5 hover:bg-accent/10 transition-colors backdrop-blur-sm">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center text-foreground/70 text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  {exp.company && (
                    <p className="text-foreground/80 mb-2">{exp.company}</p>
                  )}
                  
                  <div className="flex items-center text-foreground/70 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {exp.description && (
                    <p className="font-medium mb-4">{exp.description}</p>
                  )}
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};