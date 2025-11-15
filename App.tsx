
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CreativeSkills from './components/CreativeSkills';

const App: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <CreativeSkills />
      </main>
      <Contact />
    </div>
  );
};

export default App;