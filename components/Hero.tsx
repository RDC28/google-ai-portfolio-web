
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
        Alex Doe
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-slate-300 font-medium">
        Data Scientist & Machine Learning Engineer
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
        I transform complex data into impactful insights and build intelligent systems that solve real-world problems. Welcome to my corner of the internet.
      </p>
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
          <GithubIcon className="h-8 w-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
          <LinkedinIcon className="h-8 w-8" />
        </a>
        <a href="mailto:alex.doe@example.com" className="text-slate-400 hover:text-white transition-colors duration-300">
          <MailIcon className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
