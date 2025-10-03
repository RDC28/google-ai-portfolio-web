
import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

const categories = ['All', ...Object.values(ProjectCategory)];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        My Work
      </h2>
      
      <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
