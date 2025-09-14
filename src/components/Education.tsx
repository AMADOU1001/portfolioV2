import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      school: 'Institut Polytechnique de Dakar',
      degree: 'Diplôme de Technicien Supérieur en Génie Logiciel',
      period: '2020-2022',
      mention: 'Assez Bien',
      domain: 'Sciences et Technologies',
      location: 'Dakar, Sénégal'
    },
    {
      school: 'Lycée Elhadj Ibrahima Diop',
      degree: 'Baccalauréat S2',
      period: '2020',
      mention: 'Passable',
      domain: 'Sciences Expérimentales',
      location: 'Dakar, Sénégal'
    },
    {
      school: 'Institut Supérieur de l\'Informatique',
      degree: 'Licence Professionnel',
      period: '2023',
      mention: 'Trés Bien',
      domain: 'Génié Logiciel',
      location: 'Dakar, Sénégal'
    }
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

      // Animation des cards
      const cards = section.querySelectorAll('[data-education-card]');
      const newVisibleCards = new Set<number>();

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= windowHeight * 0.8 && cardRect.bottom >= 0) {
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
    <section id="education" className="py-16 md:py-24 bg-accent/5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1000 ${titleVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          Formation
        </h2>
        <div
          className={`h-1 bg-primary mx-auto mb-12 transition-all duration-1000 ${titleVisible
            ? 'w-20 opacity-100'
            : 'w-0 opacity-0'
            }`}
          style={{ transitionDelay: titleVisible ? '300ms' : '0ms' }}
        ></div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const isVisible = visibleCards.has(index);
            const isFromLeft = index % 2 === 0;

            return (
              <div
                key={index}
                data-education-card
                className={`p-6 rounded-lg border border-border bg-background hover:shadow-lg hover:scale-105 hover:border-primary/30 transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : `opacity-0 ${isFromLeft ? '-translate-x-12' : 'translate-x-12'} translate-y-8`
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <div
                  className={`flex items-center mb-4 text-primary transition-all duration-500 ${isVisible ? 'translate-x-0' : isFromLeft ? '-translate-x-4' : 'translate-x-4'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200 + 200}ms` : '0ms'
                  }}
                >
                  <BookOpen
                    size={24}
                    className={`mr-2 transition-all duration-500 ${isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 300}ms` : '0ms'
                    }}
                  />
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                </div>

                <p
                  className={`text-lg font-medium mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200 + 400}ms` : '0ms'
                  }}
                >
                  {edu.degree}
                </p>

                <div
                  className={`flex items-center text-foreground/70 text-sm mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200 + 500}ms` : '0ms'
                  }}
                >
                  <Calendar
                    size={14}
                    className={`mr-1 transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-0'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 550}ms` : '0ms'
                    }}
                  />
                  <span>{edu.period}</span>
                </div>

                <div
                  className={`flex items-center text-foreground/70 text-sm mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 200 + 600}ms` : '0ms'
                  }}
                >
                  <MapPin
                    size={14}
                    className={`mr-1 transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-0'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 650}ms` : '0ms'
                    }}
                  />
                  <span>{edu.location}</span>
                </div>

                {edu.mention && (
                  <p
                    className={`text-foreground/80 mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 700}ms` : '0ms'
                    }}
                  >
                    <span className="font-medium">Mention:</span> {edu.mention}
                  </p>
                )}

                {edu.domain && (
                  <p
                    className={`text-foreground/80 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200 + 750}ms` : '0ms'
                    }}
                  >
                    <span className="font-medium">Domaine:</span> {edu.domain}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};