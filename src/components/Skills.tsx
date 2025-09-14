import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, BarChart, Users, MessageSquare, Brain } from 'lucide-react';

export const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [animatedBars, setAnimatedBars] = useState<Set<number>>(new Set());
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const technicalRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Laravel', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Spring-Boot', level: 70 },
    { name: 'Angular', level: 70 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Docker', level: 80 },
    { name: 'Github', level: 80 },
    { name: 'Ansible', level: 50 },
    { name: 'Kubernetes', level: 50 },
    { name: 'Jenkins', level: 50 },
    { name: 'TypeScript', level: 75 },
    { name: 'C#', level: 70 },
    { name: 'SQL', level: 65 }
  ];

  const softSkills = [
    { name: 'Communication', icon: <MessageSquare size={24} /> },
    { name: 'Problem Solving', icon: <Brain size={24} /> },
    { name: 'Team Work', icon: <Users size={24} /> },
    { name: 'Analytics', icon: <BarChart size={24} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Animation du titre
      if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
        setTitleVisible(true);
      }

      // Animation des barres de compétences techniques
      if (technicalRef.current) {
        const techRect = technicalRef.current.getBoundingClientRect();
        if (techRect.top <= windowHeight * 0.7 && techRect.bottom >= 0) {
          const newAnimatedBars = new Set<number>();
          technicalSkills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => new Set([...prev, index]));
            }, index * 200);
          });
        }
      }

      // Animation des compétences techniques
      const techItems = section.querySelectorAll('[data-tech-skill]');
      const newVisibleSkills = new Set<number>();
      techItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= windowHeight * 0.8 && itemRect.bottom >= 0) {
          newVisibleSkills.add(index);
        }
      });
      setVisibleSkills(newVisibleSkills);

      // Animation des cartes de compétences transversales
      const softItems = section.querySelectorAll('[data-soft-skill]');
      const newVisibleCards = new Set<number>();
      softItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= windowHeight * 0.8 && itemRect.bottom >= 0) {
          newVisibleCards.add(index);
        }
      });
      setVisibleCards(newVisibleCards);
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
    <section id="skills" className="py-16 md:py-24 bg-accent/5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${titleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          Compétences
        </h2>
        <div
          className={`h-1 bg-primary mx-auto mb-12 transition-all duration-1000 ${titleVisible
            ? 'w-20 opacity-100'
            : 'w-0 opacity-0'
            }`}
          style={{ transitionDelay: titleVisible ? '300ms' : '0ms' }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div ref={technicalRef}>
            <h3
              className={`text-2xl font-semibold mb-8 flex items-center transition-all duration-700 ${titleVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
                }`}
              style={{ transitionDelay: titleVisible ? '500ms' : '0ms' }}
            >
              <Code className="mr-2" size={24} />
              Compétences Techniques
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const isVisible = visibleSkills.has(index);
                const isBarAnimated = animatedBars.has(index);

                return (
                  <div
                    key={skill.name}
                    data-tech-skill
                    className={`transition-all duration-700 ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-12'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className={`transition-all duration-500 ${isBarAnimated ? 'opacity-100' : 'opacity-0'
                          }`}
                        style={{
                          transitionDelay: isBarAnimated ? `${index * 200 + 800}ms` : '0ms'
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isBarAnimated ? `${skill.level}%` : '0%',
                          transitionDelay: isBarAnimated ? `${index * 200 + 300}ms` : '0ms',
                          boxShadow: isBarAnimated ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div ref={softRef}>
            <h3
              className={`text-2xl font-semibold mb-8 flex items-center transition-all duration-700 ${titleVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
                }`}
              style={{ transitionDelay: titleVisible ? '600ms' : '0ms' }}
            >
              <Users className="mr-2" size={24} />
              Compétences Transversales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const isVisible = visibleCards.has(index);
                const isFromRight = index % 2 === 1;

                return (
                  <div
                    key={skill.name}
                    data-soft-skill
                    className={`p-6 rounded-lg bg-background shadow-sm border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-lg hover:scale-105 ${isVisible
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : `opacity-0 ${isFromRight ? 'translate-x-8' : '-translate-x-8'} translate-y-4`
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    <div
                      className={`text-primary mb-3 transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                        }`}
                      style={{
                        transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms'
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-lg mb-2">{skill.name}</h4>
                  </div>
                );
              })}
            </div>

            <div
              className={`mt-8 space-y-3 text-foreground/80 transition-all duration-1000 ${visibleCards.size >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: visibleCards.size >= 2 ? '800ms' : '0ms'
              }}
            >
              {[
                'Gestion d\'agenda et budget',
                'Transmission d\'information (équipes, clients, entreprises)',
                'Connaissance des étapes de production',
                'Organisation et leadership',
                'Relation client',
                'Autonomie'
              ].map((item, index) => (
                <p
                  key={index}
                  className={`transition-all duration-500 ${visibleCards.size >= 2
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                    }`}
                  style={{
                    transitionDelay: visibleCards.size >= 2 ? `${1000 + index * 100}ms` : '0ms'
                  }}
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};