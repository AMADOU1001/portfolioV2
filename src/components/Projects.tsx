import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import ATN from '../assets/ATN.jpg';
import OBN from '../assets/OBN.jpg';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Africains Thinkers Network',
      description:
        "Conception et développement d'un site panafricain pour un client, avec une architecture moderne et responsive.",
      image: ATN,
      tags: ['ReactJS', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
      icon: <Code size={24} />,
      link: 'https://africanthinkers.net',
    },
    {
      title: 'Logiciel de Gestion de rendez-vous',
      description:
        'Application desktop complète en C# pour la gestion de rendez-vous avec base de données, notifications et export de données.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['C#', 'SQL', 'UI/UX', 'Desktop'],
      icon: <Database size={24} />,
      link: 'https://github.com/AMADOU1001',
    },
    {
      title: "Logiciel de Gestion d'un Restaurant",
      description:
        'Application web complète en ReactJs pour la gestion de rendez-vous avec base de données, notifications et export de données.',
      image: OBN,
      tags: ['ReactJs', 'Supabase', 'Tailwind CSS', 'Responsive'],
      icon: <Database size={24} />,
      link: 'https://obonheur.netlify.app',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
        setTitleVisible(true);
        setTimeout(() => setCardVisible(true), 500);
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Projets
        </h2>
        <div
          className={`h-1 bg-primary mx-auto mb-12 transition-all duration-1000 ${titleVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
            }`}
          style={{ transitionDelay: titleVisible ? '300ms' : '0ms' }}
        ></div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary hover:text-primary-foreground p-3 rounded-full border border-border hover:border-primary/30 shadow-lg transition-all duration-300 hover:scale-110 ${cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            style={{ transitionDelay: cardVisible ? '800ms' : '0ms' }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextProject}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary hover:text-primary-foreground p-3 rounded-full border border-border hover:border-primary/30 shadow-lg transition-all duration-300 hover:scale-110 ${cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            style={{ transitionDelay: cardVisible ? '800ms' : '0ms' }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Project Card */}
          <div
            key={currentProject}
            className={`group overflow-hidden rounded-lg border border-border hover:border-primary/30 hover:shadow-xl hover:scale-105 transition-all duration-700 ${cardVisible
              ? 'opacity-100 translate-x-0 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: cardVisible ? '200ms' : '0ms',
            }}
          >
            <div
              className="h-64 md:h-80 bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div
                className={`absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 ${cardVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '300ms' : '0ms',
                }}
              ></div>

              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>

              <div
                className={`absolute top-4 left-4 bg-background/90 p-2 rounded-full transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground ${cardVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '400ms' : '0ms',
                }}
              >
                {project.icon}
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
            </div>

            {/* contenu avec z-10 */}
            <div className="p-6 relative z-10">
              <h3
                className={`text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-all duration-500 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '500ms' : '0ms',
                }}
              >
                {project.title}
              </h3>

              <p
                className={`text-foreground/80 mb-4 text-base transition-all duration-500 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '600ms' : '0ms',
                }}
              >
                {project.description}
              </p>

              <div
                className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '700ms' : '0ms',
                }}
              >
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs rounded-full bg-accent/20 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-105 ${cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                    style={{
                      transitionDelay: cardVisible ? `${750 + idx * 50}ms` : '0ms',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Lien cliquable */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-primary hover:text-primary/80 hover:translate-x-2 transition-all duration-300 group/btn ${cardVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
                  }`}
                style={{
                  transitionDelay: cardVisible ? '800ms' : '0ms',
                }}
              >
                <span className="mr-1">Voir détails</span>
                <ExternalLink
                  size={16}
                  className="transform transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                />
              </a>
            </div>

            {/* Effet bordure */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          </div>

          {/* Indicateurs de pagination */}
          <div
            className={`flex justify-center gap-3 mt-8 transition-all duration-500 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: cardVisible ? '900ms' : '0ms' }}
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentProject
                  ? 'bg-primary shadow-lg'
                  : 'bg-border hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>

          {/* Compteur de projets */}
          <div
            className={`text-center mt-4 text-sm text-foreground/60 transition-all duration-500 ${cardVisible ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ transitionDelay: cardVisible ? '1000ms' : '0ms' }}
          >
            {currentProject + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};