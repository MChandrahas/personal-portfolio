import React from 'react';
import { SKILLS } from '../constants';
import AnimatedElement from './AnimatedElement';

// SVG Icons for categories
const ProgrammingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const FullStackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M4 15h16M9 4v16" />
  </svg>
);

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12V4a2 2 0 012-2h10a2 2 0 012 2v8m-9 4h4m-4 4h4m-4-8v8m-4-4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z" />
  </svg>
);

const PracticesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);


const categoryIcons: { [key: string]: React.FC } = {
  'Programming': ProgrammingIcon,
  'Full-Stack': FullStackIcon,
  'Cloud & DevOps': DevOpsIcon,
  'Practices & Design': PracticesIcon,
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
            Tools I use to bring projects to life
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            From design and development to optimization, I rely on trusted, industry-leading tools.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <AnimatedElement key={category} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all hover:border-purple-500/50">
                {Icon && <Icon />}
                <h3 className="text-xl font-bold text-gray-100 mb-3">{category}</h3>
                <p className="text-gray-400">
                  {SKILLS.filter(s => s.category === category).map(skill => skill.name).join(', ')}
                </p>
              </AnimatedElement>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;