
import React from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col group transform hover:-translate-y-2 animate-fade-in-up">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex items-center space-x-4">
            {project.sourceUrl && (
                <a 
                    href={project.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                    <GithubIcon className="h-5 w-5"/>
                    <span>Source</span>
                </a>
            )}
            {project.projectUrl && (
                 <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                    <ExternalLinkIcon className="h-5 w-5"/>
                    <span>Live Demo</span>
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
