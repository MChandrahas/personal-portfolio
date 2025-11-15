
import React from 'react';
import { PROJECTS } from '../constants';
import AnimatedElement from './AnimatedElement';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
            Things I've Built
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A selection of my favorite projects.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <AnimatedElement key={index} as="article">
               <ProjectCard project={project} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
