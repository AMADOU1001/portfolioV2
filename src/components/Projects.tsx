import React from 'react';
import { ExternalLink, Code, Database } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Site Vitrine ReactJS',
    description: "Conception et développement d'un site vitrine professionnel pour un client, avec une architecture moderne et responsive.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],
    icon: <Code size={24} />
  }, {
    title: 'Logiciel de Gestion de Rendez-vous',
    description: 'Application desktop complète en C# pour la gestion de rendez-vous avec base de données, notifications et export de données.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['C#', 'SQL', 'UI/UX', 'Desktop'],
    icon: <Database size={24} />
  }];
  return <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Projets
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <div key={index} className="group overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
              <div className="h-48 bg-cover bg-center relative" style={{
            backgroundImage: `url(${project.image})`
          }}>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-background/90 p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => <span key={idx} className="px-3 py-1 text-xs rounded-full bg-accent/20 text-foreground/70">
                      {tag}
                    </span>)}
                </div>
                <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
                  <span className="mr-1">Voir détails</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};