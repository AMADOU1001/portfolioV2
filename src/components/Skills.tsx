import React, { Children } from 'react';
import { Code, Database, BarChart, Users, MessageSquare, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
export const Skills = () => {
  const technicalSkills = [{
    name: 'HTML/CSS',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'React',
    level: 80
  }, {
    name: 'TypeScript',
    level: 75
  }, {
    name: 'C#',
    level: 70
  }, {
    name: 'SQL',
    level: 65
  }];
  const softSkills = [{
    name: 'Communication',
    icon: <MessageSquare size={24} />
  }, {
    name: 'Problem Solving',
    icon: <Brain size={24} />
  }, {
    name: 'Team Work',
    icon: <Users size={24} />
  }, {
    name: 'Analytics',
    icon: <BarChart size={24} />
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <motion.section initial="hidden" whileInView="show" viewport={{
    once: true
  }} variants={container} id="skills" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Compétences
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Code className="mr-2" size={24} />
              Compétences Techniques
            </h3>
            <div className="space-y-6">
              {technicalSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </motion.div>
          {/* Soft Skills */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Users className="mr-2" size={24} />
              Compétences Transversales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map(skill => <div key={skill.name} className="p-6 rounded-lg bg-background shadow-sm border border-border hover:border-primary/30 transition-colors">
                  <div className="text-primary mb-3">{skill.icon}</div>
                  <h4 className="font-medium text-lg mb-2">{skill.name}</h4>
                </div>)}
            </div>
            <div className="mt-8 space-y-3 text-foreground/80">
              <p>• Gestion d'agenda et budget</p>
              <p>
                • Transmission d'information (équipes, clients, entreprises)
              </p>
              <p>• Connaissance des étapes de production</p>
              <p>• Organisation et leadership</p>
              <p>• Relation client</p>
              <p>• Autonomie</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>;
};