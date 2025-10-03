
import React from 'react';

const skills = [
  'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn',
  'Pandas', 'NumPy', 'Matplotlib', 'Docker', 'AWS', 'React', 'D3.js'
];

const SkillTag: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-slate-800 text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
    {skill}
  </span>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-lg text-slate-400 space-y-4">
          <p>
            Hello! I'm a passionate Data Scientist with a knack for uncovering hidden patterns in data and building machine learning models that drive business value. My journey into the world of data began with a deep curiosity for how things work, which quickly evolved into a career dedicated to statistical analysis, predictive modeling, and AI.
          </p>
          <p>
            I thrive in collaborative environments and enjoy the entire lifecycle of a data science project, from wrangling messy data and feature engineering to deploying models at scale. When I'm not crunching numbers, I love to explore creative coding and build fun, interactive applications.
          </p>
        </div>
        <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-6 text-center md:text-left">Core Competencies</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map(skill => <SkillTag key={skill} skill={skill} />)}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
