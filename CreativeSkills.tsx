
import React from 'react';
import { SKILLS } from '../constants';
import AnimatedElement from './AnimatedElement';
import type { Skill } from '../types';

const SkillItem: React.FC<{ name: string }> = ({ name }) => (
  <li className="flex items-center space-x-3">
    <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
    <span className="text-gray-300">{name}</span>
  </li>
);

const CreativeSkills: React.FC = () => {
  const techStack: { title: string; skills: Skill[] }[] = [
    {
      title: 'Frontend',
      skills: SKILLS.filter(s => ['React', 'HTML5', 'CSS3', 'JavaScript'].includes(s.name)),
    },
    {
      title: 'Backend',
      skills: SKILLS.filter(s => ['Node.js', 'Express.js', 'Python', 'Java', 'C++', 'RESTful APIs', 'JWT Authentication'].includes(s.name)),
    },
    {
      title: 'Databases',
      skills: SKILLS.filter(s => ['PostgreSQL', 'MongoDB', 'SQL'].includes(s.name)),
    },
    {
      title: 'DevOps & Tooling',
      skills: SKILLS.filter(s => ['AWS', 'Docker', 'Jenkins', 'Git', 'GitHub', 'CI/CD', 'Linux', 'Jest'].includes(s.name)),
    },
  ];

  const methodologies = SKILLS.filter(s => ['Agile / Scrum', 'System Design', 'Scalable Architecture', 'Object-Oriented Design'].includes(s.name));

  return (
    <section id="skills" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
            My Tech Stack
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The tools and technologies I use to build modern, scalable applications.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, index) => (
            <AnimatedElement
              key={category.title}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <SkillItem key={skill.name} name={skill.name} />
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-200">
                Methodologies & Practices
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                {methodologies.map(skill => (
                     <span key={skill.name} className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-full border border-gray-700">
                        {skill.name}
                     </span>
                ))}
            </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CreativeSkills;