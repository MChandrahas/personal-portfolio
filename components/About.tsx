import React from 'react';
import AnimatedElement from './AnimatedElement';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
            A little bit about me.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {PERSONAL_INFO.about}
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;