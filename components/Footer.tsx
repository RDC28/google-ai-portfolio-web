
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:alex.doe@example.com" className="text-slate-400 hover:text-white transition-colors duration-300">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; {currentYear} Alex Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
