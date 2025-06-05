import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
export const Education = () => {
  const education = [{
    school: 'Institut Polytechnique de Dakar',
    degree: 'Diplôme de Technicien Supérieur en Génie Logiciel',
    period: '2020-2022',
    mention: 'Assez Bien',
    domain: 'Sciences et Technologies',
    location: 'Dakar, Sénégal'
  }, {
    school: 'Lycée Elhadj Ibrahima Diop',
    degree: 'Baccalauréat S2 (Sciences Expérimentales)',
    period: '2020',
    mention: 'Passable',
    domain: '',
    location: 'Dakar, Sénégal'
  }];
  return <section id="education" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Formation
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => <div key={index} className="p-6 rounded-lg border border-border bg-background hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 text-primary">
                <BookOpen size={24} className="mr-2" />
                <h3 className="text-xl font-semibold">{edu.school}</h3>
              </div>
              <p className="text-lg font-medium mb-3">{edu.degree}</p>
              <div className="flex items-center text-foreground/70 text-sm mb-3">
                <Calendar size={14} className="mr-1" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center text-foreground/70 text-sm mb-3">
                <MapPin size={14} className="mr-1" />
                <span>{edu.location}</span>
              </div>
              {edu.mention && <p className="text-foreground/80">
                  <span className="font-medium">Mention:</span> {edu.mention}
                </p>}
              {edu.domain && <p className="text-foreground/80">
                  <span className="font-medium">Domaine:</span> {edu.domain}
                </p>}
            </div>)}
        </div>
      </div>
    </section>;
};