import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

export const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
      location: 'Dakar, Sénégal',
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      // Calculer le progrès du scroll pour la barre de progression
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }

      // Vérifier la visibilité des items
      const items = section.querySelectorAll('[data-experience-item]');
      const newVisibleItems = new Set<number>();

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        if (itemCenter >= 0 && itemCenter <= windowHeight) {
          newVisibleItems.add(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 bg-background relative" ref={sectionRef}>
      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Expérience Professionnelle
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
            {/* Timeline line avec progression */}
            <div
              className="absolute left-0 top-0 w-0.5 bg-primary"
              style={{
                height: `${scrollProgress * 100}%`,
                marginLeft: '-1px',
                boxShadow: scrollProgress > 0 ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none',
                transition: 'height 0.5s ease-out'
              }}
            />

            {experiences.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              const isFromLeft = index % 2 === 0;

              return (
                <div key={index} className="mb-12 relative" data-experience-item>
                  {/* Timeline dot */}
                  <div
                    className={`absolute w-4 h-4 bg-primary rounded-full -left-[2.85rem] top-1 transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-75'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                      boxShadow: isVisible ? '0 0 15px hsl(var(--primary) / 0.6)' : 'none'
                    }}
                  >
                    {/* Pulse effect */}
                    {isVisible && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    )}
                  </div>

                  <div
                    className={`p-6 rounded-lg border border-border bg-accent/5 hover:bg-accent/10 transition-all duration-700 backdrop-blur-sm ${isVisible
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : `opacity-0 ${isFromLeft ? '-translate-x-20' : 'translate-x-20'} translate-y-4`
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms'
                    }}
                  >
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
                        <li
                          key={idx}
                          className={`flex items-start transition-all duration-500 ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4'
                            }`}
                          style={{
                            transitionDelay: isVisible ? `${index * 150 + 200 + idx * 100}ms` : '0ms'
                          }}
                        >
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Indicateur de progression en bas */}
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center z-20 border border-border">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <path
              d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress * 100}, 100`}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};