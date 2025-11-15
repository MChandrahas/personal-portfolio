
import React from 'react';
import { SKILLS } from '../constants';
import AnimatedElement from './AnimatedElement';
import { TechLogo } from './TechLogos';

const TechPills: React.FC = () => {
  const skillsWithIcons = SKILLS.filter(skill => skill.icon);

  return (
    <section id="tech-pills" className="py-20 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I use.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
          </p>
          <div className="flex flex-wrap gap-3">
            {skillsWithIcons.map(skill => (
              <div 
                key={skill.name} 
                className="flex items-center bg-gray-900 border border-gray-700/50 rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 cursor-default"
              >
                <TechLogo name={skill.icon!} className="w-5 h-5 mr-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-500">... and many more!</p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default TechPills;
